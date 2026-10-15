/* =====================================================================
   URSPACE — data services
   ---------------------------------------------------------------------
   Every page talks to the backend only through the functions below.
   Right now they run in "demo" mode: everything is stored in the
   visitor's own browser (localStorage), so nothing reaches you yet.

   Accounts (log in, sign up, Google, password reset) switch to Firebase
   Authentication as soon as a Firebase config is filled in config.js.
   Until then, and wherever Firebase can't load, they run in demo mode.

   The other functions keep returning a Promise with the same shape, so
   a real backend can replace them later without changing the pages.
   ===================================================================== */
(function () {
  var KEY = "urspace-demo-v1";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(db) {
    try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* storage blocked: keep going */ }
  }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function hash(s) {
    // Demo only. A real backend must handle passwords itself.
    var h = 5381; for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return "d" + (h >>> 0).toString(36);
  }
  function emit() { document.dispatchEvent(new CustomEvent("urs:auth")); }

  /* ---------- Firebase Authentication ---------- */
  var FB_VERSION = "10.12.2";
  var fbConfig = (window.URS_CONFIG || {}).firebase || {};
  var fbWanted = !!(fbConfig.apiKey && fbConfig.authDomain);
  var fbUser = null;       // the signed-in user, once Firebase has restored the session
  var fbAuth = null;
  var fbDb = null;         // Cloud Firestore, used for comments

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement("script");
      el.src = src; el.onload = resolve; el.onerror = reject;
      document.head.appendChild(el);
    });
  }
  function toUser(u) {
    return u ? { name: u.displayName || (u.email || "").split("@")[0], email: u.email || "", uid: u.uid } : null;
  }
  // Resolves to the Firebase auth object, or null if Firebase isn't set up or can't load
  var fbReady = !fbWanted ? Promise.resolve(null) :
    loadScript("https://www.gstatic.com/firebasejs/" + FB_VERSION + "/firebase-app-compat.js")
      .then(function () { return loadScript("https://www.gstatic.com/firebasejs/" + FB_VERSION + "/firebase-auth-compat.js"); })
      .then(function () { return loadScript("https://www.gstatic.com/firebasejs/" + FB_VERSION + "/firebase-firestore-compat.js"); })
      .then(function () {
        if (!firebase.apps.length) firebase.initializeApp(fbConfig);
        fbAuth = firebase.auth();
        fbDb = firebase.firestore();
        fbAuth.useDeviceLanguage();
        return new Promise(function (resolve) {
          var first = true;
          fbAuth.onAuthStateChanged(function (u) {
            fbUser = toUser(u); emit();
            if (first) { first = false; resolve(fbAuth); }
          });
          // Finish a Google sign-in that fell back to a full-page redirect
          fbAuth.getRedirectResult().catch(function () {});
        });
      })
      // Firebase couldn't load (offline, blocked, or a preview): fall back to demo
      // accounts and tell the page, so the header and comment box refresh
      .catch(function () { fbWanted = false; emit(); return null; });

  // Firebase error codes → the short codes the pages understand
  function authError(e) {
    var c = (e && e.code) || "";
    if (c === "auth/email-already-in-use") return new Error("exists");
    if (/user-not-found|wrong-password|invalid-credential|invalid-login|invalid-email|user-disabled/.test(c)) return new Error("login");
    if (/popup-closed|cancelled-popup/.test(c)) return new Error("cancelled");
    if (c === "auth/too-many-requests") return new Error("too-many");
    return new Error("generic");
  }
  function setEmailLanguage() {
    if (fbAuth) fbAuth.languageCode = document.documentElement.lang || "en";
  }

  window.URS_API = {
    isDemo: function () { return (window.URS_CONFIG || {}).backend === "demo"; },
    // Accounts are real once Firebase is configured
    authIsDemo: function () { return !fbWanted; },
    authReady: fbReady,

    /* Apply forms. type is "design" or "education"; file may be null.
       Education goes to FormSubmit when an email is set in config.js. */
    submitApplication: function (type, fields, file) {
      var to = (window.URS_CONFIG || {}).educationEmail;
      if (type === "education" && to) {
        return fetch("https://formsubmit.co/ajax/" + encodeURIComponent(to), {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            _subject: "URSPACE education application: " + (fields.name || ""),
            _template: "table",
            _replyto: fields.email,
            Name: fields.name, Email: fields.email, Phone: fields.phone || "-",
            Language: document.documentElement.lang
          })
        }).then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (body) {
            if (!res.ok || String(body.success) === "false") throw new Error("send");
            return { ok: true };
          });
        });
      }
      return wait(600).then(function () {
        var db = load();
        db.applications = db.applications || [];
        db.applications.push({
          type: type, fields: fields, at: new Date().toISOString(),
          file: file ? { name: file.name, size: file.size, type: file.type } : null
        });
        save(db);
        return { ok: true };
      });
    },

    /* Accounts */
    currentUser: function () {
      if (fbWanted) return fbUser;
      var db = load(); return db.session ? (db.users || {})[db.session] || null : null;
    },
    signUp: function (name, email, password) {
      return fbReady.then(function (auth) {
        if (!auth) return null;
        return auth.createUserWithEmailAndPassword(email, password)
          .then(function (cred) { return cred.user.updateProfile({ displayName: name }).then(function () { fbUser = toUser(cred.user); emit(); return fbUser; }); })
          .catch(function (e) { throw authError(e); });
      }).then(function (done) { return done || wait(500).then(function () {
        var db = load(); db.users = db.users || {};
        var key = email.toLowerCase();
        if (db.users[key]) throw new Error("exists");
        db.users[key] = { name: name, email: key, pw: hash(password) };
        db.session = key; save(db); emit();
        return db.users[key];
      }); });
    },
    signIn: function (email, password) {
      return fbReady.then(function (auth) {
        if (auth) return auth.signInWithEmailAndPassword(email, password).then(function (c) { return toUser(c.user); }).catch(function (e) { throw authError(e); });
        return wait(500).then(function () {
          var db = load(), u = (db.users || {})[email.toLowerCase()];
          if (!u || u.pw !== hash(password)) throw new Error("login");
          db.session = u.email; save(db); emit();
          return u;
        });
      });
    },
    signOut: function () {
      return fbReady.then(function (auth) {
        if (auth) return auth.signOut();
        var db = load(); delete db.session; save(db); emit();
      });
    },
    // Always resolves, so the page never reveals whether an account exists
    resetPassword: function (email) {
      return fbReady.then(function (auth) {
        if (!auth) return wait(500);
        setEmailLanguage();
        return auth.sendPasswordResetEmail(email).catch(function () {});
      });
    },
    signInWithGoogle: function () {
      return fbReady.then(function (auth) {
        if (!auth) throw new Error("not-configured");
        setEmailLanguage();
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        return auth.signInWithPopup(provider).then(function (c) { return toUser(c.user); }).catch(function (e) {
          // Some phones block pop-ups: fall back to a full-page redirect
          if (e && /popup-blocked|operation-not-supported/.test(e.code)) return auth.signInWithRedirect(provider).then(function () { return new Promise(function () {}); });
          throw authError(e);
        });
      });
    },

    /* Comments on a design site.
       With Firebase: stored in Cloud Firestore ("comments" collection), visible to
       everyone. The security rules in firestore.rules make sure only the author
       can delete a comment. Without Firebase: demo, saved in this browser only. */
    listComments: function (siteId) {
      var me = this.currentUser();
      function mine(c) { return !!me && ((c.uid && c.uid === me.uid) || (!c.uid && c.email && c.email === me.email)); }
      return fbReady.then(function (auth) {
        if (auth && fbDb) {
          return fbDb.collection("comments").where("siteId", "==", siteId).get().then(function (snap) {
            var list = [];
            snap.forEach(function (doc) {
              var d = doc.data();
              list.push({ id: doc.id, name: d.name, text: d.text, uid: d.uid, at: d.createdAt && d.createdAt.toDate ? d.createdAt.toDate().toISOString() : new Date().toISOString() });
            });
            list.sort(function (a, b) { return a.at < b.at ? 1 : -1; });
            return list.map(function (c) { c.mine = mine(c); return c; });
          });
        }
        var db = load();
        return ((db.comments || {})[siteId] || []).slice().reverse().map(function (c) { c.mine = mine(c); return c; });
      });
    },
    addComment: function (siteId, text) {
      var u = this.currentUser();
      if (!u) return Promise.reject(new Error("auth"));
      return fbReady.then(function (auth) {
        if (auth && fbDb) {
          return fbDb.collection("comments").add({
            siteId: siteId, text: text, name: u.name || "", uid: u.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          }).then(function () { return true; });
        }
        return wait(250).then(function () {
          var db = load(); db.comments = db.comments || {};
          (db.comments[siteId] = db.comments[siteId] || []).push({ id: "c" + Date.now(), name: u.name, email: u.email, text: text, at: new Date().toISOString() });
          save(db); return true;
        });
      });
    },
    deleteComment: function (siteId, id) {
      var u = this.currentUser();
      if (!u) return Promise.reject(new Error("auth"));
      return fbReady.then(function (auth) {
        if (auth && fbDb) return fbDb.collection("comments").doc(id).delete();
        var db = load(), list = (db.comments || {})[siteId] || [];
        var i = list.findIndex(function (c) { return c.id === id && c.email === u.email; });
        if (i < 0) throw new Error("not-yours");
        list.splice(i, 1); save(db);
      });
    },

    /* Approved designs for a site (shown on the site page) */
    listDesigns: function (siteId) { return Promise.resolve([]); }
  };
})();
