/* =====================================================================
   URSPACE — site settings
   ===================================================================== */
window.URS_CONFIG = {
  // Contact details shown in the footer
  email: "admin.urspace@gmail.com",
  instagram: "urspace.design",

  // Brochure PDFs for the About page, one per language.
  // "pages" is how many preview images exist in assets/img/brochure/
  // (named en-1.webp, en-2.webp ... ko-1.webp ...).
  // Set brochure to null to hide the brochure button and section.
  brochure: {
    en: "assets/brochure/URSPACE-Brochure-EN.pdf",
    ko: "assets/brochure/URSPACE-Brochure-KO.pdf",
    pages: 4
  },

  // Education applications are emailed through FormSubmit (formsubmit.co).
  // The first submission sends an activation email to this address; click the
  // link in it once, and every later application arrives as an email.
  // Set to "" to keep Education applications in preview mode instead.
  educationEmail: "bubble.youthimpact@gmail.com",

  // Design submissions (details + the uploaded image) are also emailed through
  // FormSubmit, with the file attached. FormSubmit allows up to 10 MB per upload.
  // Set to "" to keep design uploads in preview mode instead.
  designEmail: "bubble.youthimpact@gmail.com",

  // Firebase project settings for log in and sign up.
  // Firebase console → Project settings → Your apps → SDK setup and configuration → Config.
  // Paste the values here. While apiKey is empty, accounts stay in preview mode.
  firebase: {
    apiKey: "AIzaSyDdpiTzPwSJ73z8qlt3vDeVzhjfIhTs6Zo",
    authDomain: "urspace-e2a51.firebaseapp.com",
    projectId: "urspace-e2a51",
    storageBucket: "urspace-e2a51.firebasestorage.app",
    messagingSenderId: "323552398898",
    appId: "1:323552398898:web:9f4f5170a9dbf0fe36b62b"
  },

  // "demo" = forms, accounts and comments are saved only in the visitor's
  // own browser (for previewing). Switch this once a real backend
  // (for example Firebase) is connected in assets/js/services.js.
  backend: "demo",

  // Show clean addresses on the live site (urspacedesign.com/privacy instead
  // of /privacy.html). Only applies on a real web address, never on your
  // computer or inside a preview.
  cleanUrls: true,

  // First language visitors see: "en" or "ko"
  defaultLang: "en"
};
