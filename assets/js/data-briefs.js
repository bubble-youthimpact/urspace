/* =====================================================================
   URSPACE — Policy briefs (by theme)
   Each brief draws lessons from a group of related case studies.
   To add a brief, copy an object below and change its text.
     id    — short address used in the link (case-studies?brief=id opens it in a side panel)
     cases — case names; each must match a "name" in data-cases.js exactly.
             The outcome chart and the case links are built from these.
   Keep every list short: 4 key facts, 3 lessons, 3 risks, 6 data points,
   3 gains and 3 costs, 4 recommendations, 6 questions.
   ===================================================================== */
window.URS_BRIEFS = [
{
 id: "linear-parks",
 no: "01",
 title: "Turning Roads and Railways into Public Space",
 short: "Linear parks",
 scope: "4 cases · Seoul and New York",
 updated: "November 2026",
 cases: ["The High Line", "Cheonggyecheon Restoration Project", "Seoullo 7017", "Gyeongui Line Forest Park"],
 summary: "Converting elevated roads, rail lines and buried streams into parks has worked in every case reviewed: each became a popular public space and lifted its surroundings. The recurring weaknesses are permanent running costs and rapid rises in nearby rents, which push out the small businesses and tenants the projects were meant to serve.",
 recommendation: "Approve linear parks only with a funded long-term operating budget and anti-displacement measures in place before opening.",
 keyFacts: [
  { v: "4 of 4", l: "Rated successful" },
  { v: "8 million", l: "High Line visitors a year" },
  { v: "₩7.1bn", l: "Cheonggyecheon running cost a year" },
  { v: "+30–50%", l: "Land prices beside Cheonggyecheon" }
 ],
 lessons: [
  "Removing road capacity works when public transport is upgraded at the same time.",
  "A park raises land values first next to it; protection for tenants must start at announcement.",
  "Visitor numbers fall after the novelty fades unless shade, comfort and programming are maintained."
 ],
 risks: [
  { r: "Green gentrification", d: "Rents near the High Line and Gyeongui Line rose faster than in surrounding areas.", level: "high" },
  { r: "Permanent operating costs", d: "Cheonggyecheon pumps 120,000 t of water a day; Seoullo spent over ₩25bn running costs by 2026.", level: "high" },
  { r: "Declining use", d: "Seoullo visitors fell from 7.54 million (2022) to 6.03 million (2025).", level: "medium" }
 ],
 dataPoints: [
  { v: "2.33 km", l: "High Line length" },
  { v: "90%+", l: "High Line budget from private donors" },
  { v: "₩386bn", l: "Cheonggyecheon construction cost" },
  { v: "₩59.7bn", l: "Seoullo 7017 construction cost" },
  { v: "6.3 km", l: "Gyeongui Line Forest Park length" },
  { v: "+9%", l: "Yeonnam-dong rents in one year (2016)" }
 ],
 gainsCosts: {
  gains: ["Residents and visitors", "Nearby property owners", "City image and tourism"],
  costs: ["Small businesses and tenants", "Taxpayers (running costs)", "Residents (noise, crowds)"]
 },
 recommendations: [
  { h: "Deliver transit improvements before removing roads.", who: "Transport office" },
  { h: "Budget 20 years of operation and maintenance at approval.", who: "Budget office" },
  { h: "Monitor rents within 500 m and protect existing tenants.", who: "District offices" },
  { h: "Plan shade, seating and night-time management from the start.", who: "Parks office" }
 ],
 questions: [
  "What will the park cost to run each year, and who pays?",
  "Which transit improvements replace any lost road capacity?",
  "How many tenants and small businesses are within 500 m?",
  "What rent protections will be in place before opening?",
  "Is the space comfortable in summer heat and winter cold?",
  "Which indicators will be published each year?"
 ]
},
{
 id: "waterfronts",
 no: "02",
 title: "Redeveloping Ports and Waterfronts",
 short: "Ports and waterfronts",
 scope: "9 cases · Europe, Asia, Australia, US and Middle East",
 updated: "November 2026",
 cases: ["HafenCity Hamburg", "Canary Wharf Redevelopment", "Battery Park City", "Docklands Melbourne", "Marina Bay", "Port Vell Redevelopment", "Yokohama Minato Mirai 21", "Busan North Port Redevelopment", "Palm Jebel Ali"],
 summary: "Former docks and port land have become some of the world's most valuable districts, but only where a public body controlled the land, delivered infrastructure first and followed a long-term plan. The common failures are housing that few residents can afford and, at the speculative extreme, projects that stalled when the property market turned.",
 recommendation: "Keep public control of waterfront land, deliver infrastructure in phases and set binding affordable-housing and public-access targets.",
 keyFacts: [
  { v: "7 of 9", l: "Rated successful" },
  { v: "105,000", l: "Workers at Canary Wharf" },
  { v: "€13bn", l: "HafenCity investment (€3bn public)" },
  { v: "−40%", l: "Palm Jebel Ali prices, late 2008" }
 ],
 lessons: [
  "A single public development body with control of the land made long programmes possible.",
  "Infrastructure built first, financed by land sales, attracted private investment.",
  "Without binding targets, waterfront housing became unaffordable in almost every case."
 ],
 risks: [
  { r: "Unaffordable housing", d: "HafenCity, Battery Park City and Minato Mirai all priced out lower-income residents.", level: "high" },
  { r: "Speculative collapse", d: "Palm Jebel Ali stalled in 2008; its developer restructured about $4.6bn of debt.", level: "high" },
  { r: "Loss of public waterfront", d: "Luxury towers at Busan North Port and HafenCity drew objections over views and access.", level: "medium" }
 ],
 dataPoints: [
  { v: "10.5 km", l: "HafenCity waterfront promenades" },
  { v: "134,000", l: "Minato Mirai 21 workers (2023)" },
  { v: "77.3m", l: "Minato Mirai 21 visitors (2023)" },
  { v: "A$14.6bn", l: "Private investment, Melbourne Docklands" },
  { v: "S$2bn", l: "Public infrastructure, Marina Bay" },
  { v: "₩2.4tn", l: "Busan North Port Phase 1 cost" }
 ],
 gainsCosts: {
  gains: ["Office and finance sectors", "Developers and landowners", "City tourism and image"],
  costs: ["Lower-income residents", "Neighbouring older districts", "Public budgets (if markets fail)"]
 },
 recommendations: [
  { h: "Retain public ownership or control of waterfront land.", who: "City planning office" },
  { h: "Build infrastructure in phases tied to demand.", who: "Development agency" },
  { h: "Set binding affordable-housing shares in every phase.", who: "Housing office" },
  { h: "Guarantee continuous public access to the water's edge.", who: "Planning committee" }
 ],
 questions: [
  "Who will own and control the land over 20–30 years?",
  "How much infrastructure is paid for by land sales?",
  "What share of housing will be affordable, and is it binding?",
  "What happens to the budget if the property market falls?",
  "Will the waterfront stay public along its whole length?",
  "How will neighbouring older districts benefit?"
 ]
},
{
 id: "industrial-reuse",
 no: "03",
 title: "Reusing Industrial and Utility Sites",
 short: "Industrial reuse",
 scope: "11 cases · Korea and Germany",
 updated: "November 2026",
 cases: ["Emscher Landscape Park", "Mapo Oil Tank Culture Park", "Seonyudo Park", "World Cup Park and Haneul Park (Nanjido Landfill)", "Seoul Forest", "Samtan Art Mine", "F1963 (Former Kiswire Factory)", "B39 Bucheon Art Bunker", "Jeonju Palbok Art Factory", "Jochiwon 1927 Art Center", "Culture Station Seoul 284"],
 summary: "Oil depots, water plants, landfills, factories and a mine have been turned into parks and cultural venues at relatively low cost and with little displacement, because the sites were already empty. Physical conversion has proved easier than keeping these places busy: most depend on public operating budgets, and a single venue rarely revives a declining region.",
 recommendation: "Fund operations and programming for at least ten years before approving conversion, and link each venue to local jobs and community groups.",
 keyFacts: [
  { v: "10 of 11", l: "Rated successful" },
  { v: "₩47bn", l: "Mapo Oil Tank conversion cost" },
  { v: "3.4 km²", l: "Parks on the Nanjido landfill" },
  { v: "€5.5bn", l: "Emscher river restoration" }
 ],
 lessons: [
  "Keeping industrial structures gives a site identity and cuts demolition cost and waste.",
  "Operating budgets and programming decide long-term success more than design.",
  "One venue cannot replace lost industrial jobs; it must sit within a regional strategy."
 ],
 risks: [
  { r: "Underused venues", d: "Event-based programming leaves several sites quiet between exhibitions.", level: "medium" },
  { r: "Long-term environmental liability", d: "Landfill parks need permanent gas, leachate and settlement management.", level: "high" },
  { r: "Limited regional effect", d: "Samtan Art Mine draws visitors but cannot replace 3,000 mining jobs.", level: "medium" }
 ],
 dataPoints: [
  { v: "1.16 km²", l: "Seoul Forest area" },
  { v: "₩20bn", l: "Culture Station Seoul 284 restoration" },
  { v: "₩11bn", l: "Samtan Art Mine conversion" },
  { v: "₩5bn", l: "Palbok Art Factory conversion" },
  { v: "₩3.2bn", l: "Public funding for F1963" },
  { v: "1.8bn", l: "EIB loans for Emscher (euros)" }
 ],
 gainsCosts: {
  gains: ["Residents (new parks and venues)", "Artists and cultural groups", "Neighbourhoods once polluted"],
  costs: ["Taxpayers (operating budgets)", "Nearby tenants (if land values rise)", "Former workers (few new jobs)"]
 },
 recommendations: [
  { h: "Secure a ten-year operating and programming budget.", who: "Culture office" },
  { h: "Keep key industrial structures and interpret their history.", who: "Heritage office" },
  { h: "Fund permanent monitoring for contaminated sites.", who: "Environment office" },
  { h: "Give residents and local groups a role in programming.", who: "District offices" }
 ],
 questions: [
  "Who will run the site, and how is that funded each year?",
  "What contamination remains, and who monitors it?",
  "Which structures will be kept, and why?",
  "How will the site be used on an ordinary weekday?",
  "How does it connect to local jobs or a regional strategy?",
  "Is the site reachable without a car?"
 ]
},
{
 id: "heritage-tourism",
 no: "04",
 title: "Heritage, Culture and Tourism in Old Town Centres",
 short: "Heritage and tourism",
 scope: "13 cases · Korea and Spain",
 updated: "November 2026",
 cases: ["Bilbao Guggenheim Regeneration", "Gamcheon Culture Village", "Jeonju Hanok Village Regeneration", "Gunsan Modern Heritage District Regeneration", "Changdong Art Village", "Incheon Open Port Regeneration", "Donuimun Museum Village", "Daegu Modern Alley Tourism Project", "Mokpo Modern History and Cultural Space", "Eunpyeong Hanok Village", "Jeju Art Platform (Former Daehan Theater Site)", "Pohang Space Walk and Hwanho Park Renewal", "Suncheon Bay National Garden and Eco-city Regeneration"],
 summary: "Heritage and culture have brought millions of visitors to declining town centres, but visitor growth has rarely meant a better life for residents. The most common result is a mixed one: buildings are saved and tourism rises, while residents face crowds, rents increase and everyday shops are replaced. Projects designed as curated attractions without residents have failed.",
 recommendation: "Measure success by resident retention and business survival, not visitor numbers, and pair tourism investment with housing and everyday services.",
 keyFacts: [
  { v: "10 of 13", l: "Rated mixed or uncertain" },
  { v: "11.29m", l: "Jeonju Hanok Village visitors (2022)" },
  { v: "2m+", l: "Gamcheon visitors (2024)" },
  { v: "₩48bn", l: "Donuimun Museum Village cost" }
 ],
 lessons: [
  "Landmarks work only with wider investment: Bilbao also spent about €1bn cleaning its river.",
  "Living communities, not restored buildings, are what visitors and residents value.",
  "Low-cost programmes using existing streets and people outperform costly new attractions."
 ],
 risks: [
  { r: "Overtourism", d: "Crowds, noise and loss of privacy in Gamcheon, Jeonju and other residential areas.", level: "high" },
  { r: "Commercial displacement", d: "Everyday shops replaced by tourist businesses as rents rise.", level: "high" },
  { r: "Costly attractions without demand", d: "Donuimun is being largely demolished; Incheon spent ₩258bn on its tourist zone.", level: "medium" }
 ],
 dataPoints: [
  { v: "310k → 11.29m", l: "Jeonju visitors, 2002–2022" },
  { v: "187 → 68", l: "Vacant shops, Changdong (2012–13)" },
  { v: "4 million", l: "Pohang Space Walk visitors by 2026" },
  { v: "~10 million", l: "Suncheon 2023 Garden Expo visitors" },
  { v: "€500m", l: "Bilbao Guggenheim activity, first 3 years" },
  { v: "950,000", l: "Gunsan heritage visitors (2019)" }
 ],
 gainsCosts: {
  gains: ["Tourism businesses", "Property owners on main routes", "City image and identity"],
  costs: ["Residents (crowds, privacy)", "Everyday shops and tenants", "Taxpayers (failed attractions)"]
 },
 recommendations: [
  { h: "Set visitor management rules for residential streets.", who: "District offices" },
  { h: "Protect everyday shops through rent agreements.", who: "Economy office" },
  { h: "Fund housing repair for long-term residents.", who: "Housing office" },
  { h: "Test demand before building new attractions.", who: "Culture and tourism office" }
 ],
 questions: [
  "How will residents' privacy and quiet be protected?",
  "What happens to everyday shops as rents rise?",
  "Who benefits from visitor spending, and how is it shared?",
  "Has demand been tested before construction?",
  "Will residents still live here in ten years?",
  "Which indicators besides visitor numbers will be reported?"
 ]
},
{
 id: "mixed-use-districts",
 no: "05",
 title: "Mixed-Use and Creative Districts: Growth Without Displacement",
 short: "Mixed-use districts",
 scope: "11 cases · US, Europe, Japan and Korea",
 updated: "November 2026",
 cases: ["Hudson Yards", "King's Cross Redevelopment", "Zuidas Amsterdam", "Pearl District", "22@ Barcelona", "La Défense", "Roppongi Hills", "Sewoon Sangga Regeneration", "Seongdong Handmade Shoe Street Regeneration", "Seongsu-dong Industrial District Transformation", "Detroit Renaissance Center"],
 summary: "Large mixed-use districts have created hundreds of thousands of jobs, but their success has been measured mainly in offices and investment. In nearly every case, housing costs rose and small businesses, workshops and lower-income tenants were displaced. Single-use or inward-looking schemes, such as La Défense and the Renaissance Center, have struggled to stay relevant.",
 recommendation: "Require a real mix of uses, enforceable affordable-housing targets and protected space for small producers before approving large districts.",
 keyFacts: [
  { v: "115,000", l: "Jobs in 22@ Barcelona" },
  { v: "$25bn", l: "Hudson Yards redevelopment value" },
  { v: "~15%", l: "La Défense office vacancy (2024)" },
  { v: "11%", l: "Sewoon walkway use vs forecast" }
 ],
 lessons: [
  "Affordable-housing targets slip unless they are binding and monitored.",
  "Districts dominated by one use, such as offices, are exposed to market shifts.",
  "Small producers need protected affordable space; voluntary rent agreements are not enough."
 ],
 risks: [
  { r: "Displacement", d: "Pearl District fell about 258 affordable units short of its 35% target.", level: "high" },
  { r: "Public debt and subsidy", d: "Hudson Yards' infrastructure body held about $2.5bn of debt in 2025.", level: "medium" },
  { r: "Single-use exposure", d: "La Défense vacancy reached nearly 16%, against about 2% in central Paris.", level: "medium" }
 ],
 dataPoints: [
  { v: "18,000", l: "Job capacity at King's Cross" },
  { v: "42%", l: "King's Cross affordable housing target" },
  { v: "50,000+", l: "Jobs in Zuidas (2024)" },
  { v: "+84%", l: "Pearl District population, 2010–2020" },
  { v: "₩110.9bn", l: "Sewoon walkway investment" },
  { v: "$1.6bn", l: "Renaissance Center redevelopment plan" }
 ],
 gainsCosts: {
  gains: ["Large companies and investors", "Property owners", "City tax revenue"],
  costs: ["Lower-income tenants", "Small workshops and makers", "Long-term residents"]
 },
 recommendations: [
  { h: "Make affordable-housing shares binding and audited.", who: "Housing office" },
  { h: "Reserve affordable space for small producers.", who: "Economy office" },
  { h: "Require a mix of homes, offices and culture in each phase.", who: "Planning office" },
  { h: "Adopt anti-displacement rules before rezoning.", who: "District offices" }
 ],
 questions: [
  "What share of housing is affordable, and who enforces it?",
  "Where will existing workshops and tenants go?",
  "Is there a real mix of uses at street level?",
  "How much public debt or subsidy supports the project?",
  "How is the district connected to its neighbours?",
  "What happens if office demand falls?"
 ]
},
{
 id: "new-towns",
 no: "06",
 title: "New Towns, Capitals and Eco-Districts",
 short: "New towns",
 scope: "9 cases · Asia, Europe, Middle East and Latin America",
 updated: "November 2026",
 cases: ["Hammarby Sjöstad", "Vauban District", "Songdo International Business District", "Masdar City", "Ordos Kangbashi New Area", "Forest City", "Brasília", "Naypyidaw", "Sejong Multifunctional Administrative City"],
 summary: "Planned towns succeed when they grow from real demand and connect to existing cities; they fail when they are built for forecast populations that never arrive. Small eco-districts in Stockholm and Freiburg met most goals, while large speculative or political new cities have stood half empty for years.",
 recommendation: "Approve new towns only in phases linked to verified demand, with transit connections and employers secured before housing.",
 keyFacts: [
  { v: "4 of 9", l: "Rated failure or mixed failure" },
  { v: "~70%", l: "Ordos new-home vacancy (2014)" },
  { v: "700,000", l: "Forest City planned residents" },
  { v: "₩22tn+", l: "Sejong public investment" }
 ],
 lessons: [
  "Build in phases that follow real demand, not population targets.",
  "Employers, schools and transit must arrive before or with housing.",
  "Smaller, well-connected eco-districts outperform large showcase cities."
 ],
 risks: [
  { r: "Empty cities", d: "Ordos, Forest City and Naypyidaw remain far below planned population.", level: "high" },
  { r: "Speculative finance", d: "Forest City sales fell over 90% after 2020.", level: "high" },
  { r: "Split functions", d: "Sejong officials still travel to Seoul for meetings.", level: "medium" }
 ],
 dataPoints: [
  { v: "20,000", l: "Hammarby Sjöstad residents" },
  { v: "38–73%", l: "Vauban trips by walking and cycling" },
  { v: "100,000+", l: "Songdo residents" },
  { v: "~5,000", l: "Masdar residents vs 50,000 planned" },
  { v: "215,000", l: "Brasília core residents vs 500,000 planned" },
  { v: "96 min", l: "Average Brasília commute" }
 ],
 gainsCosts: {
  gains: ["Residents of well-run eco-districts", "Construction and land sectors", "Political sponsors"],
  costs: ["Investors in empty towns", "Public budgets and debt", "Neighbouring cities losing population"]
 },
 recommendations: [
  { h: "Release land in phases linked to verified demand.", who: "Planning office" },
  { h: "Secure employers and schools before housing.", who: "Economic development office" },
  { h: "Connect new towns to existing cities by rail.", who: "Transport office" },
  { h: "Publish independent population and finance reviews.", who: "Audit office" }
 ],
 questions: [
  "Where will residents and employers come from?",
  "Is the population forecast independently checked?",
  "Which transit links will exist on opening day?",
  "What happens if only half the target arrives?",
  "Will the town draw people from nearby cities?",
  "Who carries the debt if sales fall?"
 ]
},
{
 id: "transit",
 no: "07",
 title: "Transit Investment: Forecasts, Finance and Land Use",
 short: "Transit investment",
 scope: "4 cases · Korea, Denmark, Brazil and US",
 updated: "November 2026",
 cases: ["Curitiba BRT", "Copenhagen Finger Plan", "California High-Speed Rail", "Yongin EverLine Light Rail"],
 summary: "Transit succeeds when it is planned together with land use over decades, as in Copenhagen and Curitiba. It fails when costs and ridership are forecast optimistically and risks are passed to the public, as with California High-Speed Rail and the Yongin EverLine, where ridership at opening was less than a tenth of forecast.",
 recommendation: "Require independent cost and ridership forecasts, avoid revenue guarantees and link every line to a land-use plan.",
 keyFacts: [
  { v: "2 of 4", l: "Rated failure" },
  { v: "139,000 → 10,000", l: "Yongin daily riders: forecast vs actual" },
  { v: "$45bn → $135bn", l: "California HSR cost estimates" },
  { v: "56%", l: "Copenhagen residents within 1 km of rail" }
 ],
 lessons: [
  "Plan land use and transit together, over decades.",
  "Optimistic forecasts and revenue guarantees transfer risk to taxpayers.",
  "Low-cost systems such as BRT need continuous investment as cities grow."
 ],
 risks: [
  { r: "Inflated forecasts", d: "Yongin's forecast was about 14 times actual ridership at opening.", level: "high" },
  { r: "Cost overruns", d: "California HSR's projected cost tripled from the 2008 estimate.", level: "high" },
  { r: "Capacity shortfall", d: "Curitiba buses are overcrowded at peak times.", level: "medium" }
 ],
 dataPoints: [
  { v: "₩1tn", l: "Yongin EverLine cost" },
  { v: "₩21.5bn", l: "Damages upheld against officials (2025)" },
  { v: "81.4 km", l: "Curitiba BRT network" },
  { v: "1.3–2.3m", l: "Curitiba daily passengers" },
  { v: "96%", l: "Copenhagen residents near a park" },
  { v: "$34.8bn", l: "California Merced–Bakersfield segment" }
 ],
 gainsCosts: {
  gains: ["Commuters on well-planned lines", "Regional labour markets", "Private operators (guaranteed revenue)"],
  costs: ["Taxpayers (guarantees, overruns)", "Cities with unused lines", "Other services cut to pay debt"]
 },
 recommendations: [
  { h: "Commission independent, peer-reviewed forecasts.", who: "Transport ministry" },
  { h: "Do not offer minimum revenue guarantees.", who: "Finance office" },
  { h: "Adopt a land-use plan along each line.", who: "Planning office" },
  { h: "Hold decision-makers accountable for negligent forecasts.", who: "Audit office" }
 ],
 questions: [
  "Who produced the ridership forecast, and was it reviewed?",
  "What happens to the budget if ridership is half the forecast?",
  "Does the contract guarantee revenue to the operator?",
  "Which land-use changes will support ridership?",
  "Does the line connect to major destinations?",
  "How have cost estimates changed since planning began?"
 ]
},
{
 id: "megaprojects",
 no: "08",
 title: "Mega-Events, Landmark Attractions and Public Guarantees",
 short: "Megaprojects",
 scope: "4 cases · UK and Korea",
 updated: "November 2026",
 cases: ["London Olympic Park (Queen Elizabeth Olympic Park)", "Millennium Dome", "Legoland Korea Resort", "Kangwon Land Casino Resort"],
 summary: "Large events and attractions promise fast regeneration but carry concentrated financial risk. London's Olympic Park succeeded because legacy use was planned from the start; the Millennium Dome and Legoland Korea show what happens when demand is overestimated or public guarantees underwrite private projects.",
 recommendation: "Approve only with a funded legacy plan, independent demand forecasts and strict limits on public guarantees.",
 keyFacts: [
  { v: "£9.3bn", l: "London 2012 public funding" },
  { v: "6.5m vs 12m", l: "Millennium Dome visitors vs forecast" },
  { v: "₩205bn", l: "Legoland debt guaranteed by province" },
  { v: "₩50tn+", l: "Liquidity support after Legoland default" }
 ],
 lessons: [
  "Plan the legacy use before the event, not after it.",
  "Public guarantees on private projects are real liabilities.",
  "Revenue from one attraction rarely diversifies a regional economy."
 ],
 risks: [
  { r: "Demand overestimated", d: "The Dome drew half its forecast visitors and needed extra grants.", level: "high" },
  { r: "Guarantee default", d: "Legoland's 2022 default froze Korea's credit markets.", level: "high" },
  { r: "Social harms", d: "Kangwon Land brought jobs but also gambling addiction and debt.", level: "medium" }
 ],
 dataPoints: [
  { v: "£789m", l: "Millennium Dome total cost" },
  { v: "£179m", l: "Extra Dome grants in 2000" },
  { v: "£190m → £323m", l: "Olympic Stadium conversion cost" },
  { v: "11 million", l: "London 2012 tickets sold" },
  { v: "2022", l: "Year Legoland opened and defaulted" },
  { v: "1995", l: "Special Act allowing Kangwon Land" }
 ],
 gainsCosts: {
  gains: ["Construction sector", "Event visitors", "Private operators"],
  costs: ["Taxpayers and lottery funds", "Credit markets (guarantees)", "Communities facing social harms"]
 },
 recommendations: [
  { h: "Require a funded legacy plan before approval.", who: "Planning office" },
  { h: "Cap and disclose all public guarantees.", who: "Finance office" },
  { h: "Commission independent demand forecasts.", who: "Audit office" },
  { h: "Fund social safeguards alongside casinos and resorts.", who: "Welfare office" }
 ],
 questions: [
  "What will the site be used for after the event?",
  "What guarantees or debts does the public carry?",
  "What happens if attendance is half the forecast?",
  "Who profits, and who bears losses?",
  "What social harms might follow, and who pays?",
  "Is there a plan to exit if costs rise?"
 ]
},
{
 id: "public-housing",
 no: "09",
 title: "Public Housing and Neighbourhood Renewal",
 short: "Public housing",
 scope: "3 cases · US and Korea",
 updated: "November 2026",
 cases: ["Pruitt-Igoe Housing Project", "Cabrini-Green Redevelopment", "Seoul 2013–2020 Changsin-Sungin Urban Regeneration"],
 summary: "Housing renewal has failed both when it concentrated poor households in poorly maintained towers and when redevelopment replaced fewer homes than it demolished. Small-scale regeneration, as in Changsin-Sungin, avoided displacement but lacked the funding to fix housing conditions.",
 recommendation: "Replace every demolished home, fund long-term maintenance and give renewal budgets equal to the scale of housing need.",
 keyFacts: [
  { v: "0 of 3", l: "Rated fully successful" },
  { v: "95% → 57%", l: "Pruitt occupancy, 1950s–1969" },
  { v: "~18,000", l: "Chicago units to demolish (1999 plan)" },
  { v: "₩20bn", l: "Changsin-Sungin regeneration budget" }
 ],
 lessons: [
  "Maintenance and social services matter as much as building design.",
  "One-for-one replacement is essential when public housing is demolished.",
  "Small regeneration budgets cannot fix old, dense housing."
 ],
 risks: [
  { r: "Loss of affordable homes", d: "Cabrini-Green planned only about 30% public housing replacement on site.", level: "high" },
  { r: "Maintenance decline", d: "Pruitt-Igoe maintenance was cut 10% after 1958; it was demolished by 1976.", level: "high" },
  { r: "Underfunded renewal", d: "Changsin-Sungin residents later demanded redevelopment.", level: "medium" }
 ],
 dataPoints: [
  { v: "$36m", l: "Pruitt-Igoe initial cost" },
  { v: "$57m", l: "Pruitt-Igoe total cost by 1971" },
  { v: "$1.5bn", l: "Chicago Plan for Transformation" },
  { v: "30%", l: "Cabrini-Green on-site public housing" },
  { v: "2014", l: "Changsin-Sungin designated" },
  { v: "2013", l: "Changsin New Town plan cancelled" }
 ],
 gainsCosts: {
  gains: ["Residents who stayed in renewed homes", "Developers of mixed-income housing", "Cities (land value)"],
  costs: ["Displaced public housing tenants", "Residents in poorly maintained homes", "Communities split up"]
 },
 recommendations: [
  { h: "Guarantee one-for-one replacement of demolished homes.", who: "Housing authority" },
  { h: "Ring-fence long-term maintenance funding.", who: "Budget office" },
  { h: "Give residents a right to return.", who: "Housing authority" },
  { h: "Match renewal budgets to the scale of housing need.", who: "National government" }
 ],
 questions: [
  "How many homes are demolished, and how many replaced?",
  "Can current residents return, and on what terms?",
  "Who pays for maintenance over 30 years?",
  "Which social services are included?",
  "Is the budget enough to fix housing conditions?",
  "How will tenant outcomes be tracked?"
 ]
}
];
