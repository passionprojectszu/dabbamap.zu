/* DabbaMap — Shared Listings Data (used by index.html + discover.html)
   70 entries: L001–L040 (full profile) + D041–D070 (from map data) */

window.DABBA_DATA = [
  /* ── Full-profile listings ─────────────────────────── */
  { id:'L001', name:"Sunita's Kitchen",         initial:'S', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Andheri West',  pincode:'400058', type:'veg',    cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:80,  dinnerPrice:90,  monthlyPrice:1800, trial:true,  communityPick:false,
    description:'Fresh, homestyle Gujarati meals with seasonal vegetables and homemade rotis. Pure ghee, no shortcuts.', daysAgo:2, lat:19.1274, lng:72.8271 },

  { id:'L002', name:"Ramesh Tiffins",           initial:'R', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Andheri East',  pincode:'400069', type:'nonveg', cuisines:['Punjabi'],        meals:['lunch','dinner'],
    lunchPrice:90,  dinnerPrice:100, monthlyPrice:2200, trial:false, communityPick:true,
    description:'Authentic Punjabi home cooking. Dal makhani, butter chicken, and freshly made parathas every evening.', daysAgo:5, lat:19.1215, lng:72.8493 },

  { id:'L003', name:"Priya's Jain Dabba",       initial:'P', avatarBg:'linear-gradient(135deg,#7c3aed,#a78bfa)',
    area:'Malad West',    pincode:'400064', type:'jain',   cuisines:['Rajasthani'],     meals:['lunch','dinner'],
    lunchPrice:100, dinnerPrice:110, monthlyPrice:2500, trial:false, communityPick:false,
    description:'100% Jain-friendly cooking — no root vegetables, no onion, no garlic. Strictly traditional preparation.', daysAgo:7, lat:19.1882, lng:72.8502 },

  { id:'L004', name:"Meena's South Indian",     initial:'M', avatarBg:'linear-gradient(135deg,#0284c7,#38bdf8)',
    area:'Goregaon',      pincode:'400063', type:'veg',    cuisines:['South Indian'],   meals:['lunch'],
    lunchPrice:70,  dinnerPrice:null, monthlyPrice:1600, trial:true,  communityPick:false,
    description:'Fresh sambar, rasam, rice, and South Indian sides every day. Pure home cooking from Chennai.', daysAgo:3, lat:19.1682, lng:72.8552 },

  { id:'L005', name:"Anita Home Meals",         initial:'A', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Borivali West', pincode:'400092', type:'veg',    cuisines:['Maharashtrian'],  meals:['lunch','dinner'],
    lunchPrice:65,  dinnerPrice:70,  monthlyPrice:1500, trial:true,  communityPick:false,
    description:'Traditional Maharashtrian thali with bhakri, amti, and sabzi. Homemade masalas.', daysAgo:4, lat:19.2332, lng:72.8582 },

  { id:'L006', name:"Kumar's Bengali Dabba",    initial:'K', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Chembur',       pincode:'400071', type:'nonveg', cuisines:['Bengali'],        meals:['lunch','dinner'],
    lunchPrice:85,  dinnerPrice:95,  monthlyPrice:2000, trial:false, communityPick:false,
    description:'Authentic Bengali home cooking. Fish curry, dal, rice, and seasonal vegetables.', daysAgo:14, lat:19.0542, lng:72.9012 },

  { id:'L007', name:"Geeta Tiffins",            initial:'G', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Dadar',         pincode:'400014', type:'veg',    cuisines:['Maharashtrian'],  meals:['lunch'],
    lunchPrice:75,  dinnerPrice:null, monthlyPrice:1700, trial:true,  communityPick:false,
    description:'Classic Maharashtrian dal-chawal with bhaji, papad, and achaar. Cooked fresh every morning.', daysAgo:6, lat:19.0202, lng:72.8492 },

  { id:'L008', name:"Jain Bhoj Andheri",        initial:'J', avatarBg:'linear-gradient(135deg,#7c3aed,#a78bfa)',
    area:'Andheri West',  pincode:'400058', type:'jain',   cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:85,  dinnerPrice:90,  monthlyPrice:2000, trial:true,  communityPick:false,
    description:'Strict Jain preparation. No onion, garlic, potato, or any root vegetables. Gujarati style.', daysAgo:8, lat:19.1341, lng:72.8314 },

  { id:'L009', name:"Fit & Fresh Tiffin",       initial:'F', avatarBg:'linear-gradient(135deg,#0369a1,#38bdf8)',
    area:'Andheri West',  pincode:'400058', type:'diet',   cuisines:['Multi'],          meals:['lunch','dinner'],
    lunchPrice:110, dinnerPrice:120, monthlyPrice:2800, trial:true,  communityPick:false,
    description:'Low-oil, high-protein, calorie-counted meals. Macros on request. Diabetic-friendly options.', daysAgo:1, lat:19.1310, lng:72.8265 },

  { id:'L010', name:"Fernandes Tiffin",         initial:'F', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Bandra West',   pincode:'400050', type:'nonveg', cuisines:['Goan'],           meals:['lunch','dinner'],
    lunchPrice:100, dinnerPrice:110, monthlyPrice:2400, trial:false, communityPick:false,
    description:"Goan fish curry, pork vindaloo, sorpotel. Authentic recipes passed down through generations.", daysAgo:10, lat:19.0622, lng:72.8312 },

  { id:'L011', name:"Asha's Gujarati Thali",    initial:'A', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Bandra West',   pincode:'400050', type:'veg',    cuisines:['Gujarati'],       meals:['lunch'],
    lunchPrice:85,  dinnerPrice:null, monthlyPrice:1900, trial:true,  communityPick:true,
    description:'Full Gujarati thali — dal, kadhi, sabzi, rotli, rice, and mithai. Seasonal and fresh.', daysAgo:2, lat:19.0582, lng:72.8278 },

  { id:'L012', name:"Lakshmi Tiffin Ghatkopar", initial:'L', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Ghatkopar',     pincode:'400077', type:'veg',    cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:70,  dinnerPrice:75,  monthlyPrice:1600, trial:true,  communityPick:false,
    description:"Simple, homely Gujarati meals. Nothing fancy — just the food your maa would make.", daysAgo:5, lat:19.0782, lng:72.8802 },

  { id:'L013', name:"Powai Home Kitchen",       initial:'P', avatarBg:'linear-gradient(135deg,#0284c7,#38bdf8)',
    area:'Powai',         pincode:'400076', type:'veg',    cuisines:['South Indian'],   meals:['lunch'],
    lunchPrice:95,  dinnerPrice:null, monthlyPrice:2100, trial:false, communityPick:false,
    description:'Rice plates, sambar, chutneys, and a rotating sabzi every day. South Indian comfort food.', daysAgo:12, lat:19.1562, lng:72.9022 },

  { id:'L014', name:"Soni Jain Meals",          initial:'S', avatarBg:'linear-gradient(135deg,#7c3aed,#a78bfa)',
    area:'Goregaon',      pincode:'400063', type:'jain',   cuisines:['Jain'],           meals:['lunch','dinner'],
    lunchPrice:85,  dinnerPrice:90,  monthlyPrice:2000, trial:true,  communityPick:false,
    description:'Goregaon-based Jain cook. Pure Jain recipes with no compromises. Paryushana specials available.', daysAgo:9, lat:19.1712, lng:72.8558 },

  { id:'L015', name:"Malabar Dabba",            initial:'M', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Malad West',    pincode:'400064', type:'nonveg', cuisines:['Kerala'],         meals:['lunch','dinner'],
    lunchPrice:85,  dinnerPrice:95,  monthlyPrice:2000, trial:true,  communityPick:false,
    description:'Kerala fish curry, appam, stew. Authentic Malabar coast cooking from a home in Malad.', daysAgo:15, lat:19.1842, lng:72.8462 },

  { id:'L016', name:"Santacruz Punjabi Dabba",  initial:'S', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Santacruz',     pincode:'400054', type:'nonveg', cuisines:['Punjabi'],        meals:['dinner'],
    lunchPrice:null,dinnerPrice:95,  monthlyPrice:2100, trial:false, communityPick:false,
    description:'Hearty Punjabi dinners — rajma, chole, paneer makhani for veg guests on request.', daysAgo:11, lat:19.0832, lng:72.8432 },

  { id:'L017', name:"Sheila's Kitchen Sion",    initial:'S', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Sion',          pincode:'400022', type:'veg',    cuisines:['Maharashtrian'],  meals:['lunch'],
    lunchPrice:60,  dinnerPrice:null, monthlyPrice:1350, trial:true,  communityPick:false,
    description:'Budget-friendly Maharashtrian lunch. Dal, bhaji, chawal, roti — reliable and filling.', daysAgo:20, lat:19.0352, lng:72.8722 },

  { id:'L018', name:"Clean Eats by Riya",       initial:'C', avatarBg:'linear-gradient(135deg,#0369a1,#38bdf8)',
    area:'Bandra West',   pincode:'400050', type:'diet',   cuisines:['Multi'],          meals:['lunch','dinner'],
    lunchPrice:120, dinnerPrice:130, monthlyPrice:3000, trial:true,  communityPick:false,
    description:'Macro-balanced, low-sodium, portion-controlled meals. Ideal for weight-watchers and diabetics.', daysAgo:3, lat:19.0612, lng:72.8248 },

  { id:'L019', name:"Kabir's Kitchen",          initial:'K', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Andheri East',  pincode:'400069', type:'nonveg', cuisines:['Mughlai'],        meals:['lunch','dinner'],
    lunchPrice:95,  dinnerPrice:105, monthlyPrice:2300, trial:true,  communityPick:false,
    description:'Mughlai home food — biryani, qorma, haleem. Slow-cooked and spiced just right.', daysAgo:6, lat:19.1243, lng:72.8462 },

  { id:'L020', name:"Kavita Coastal Versova",   initial:'K', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Versova',       pincode:'400061', type:'veg',    cuisines:['South Indian'],   meals:['lunch'],
    lunchPrice:90,  dinnerPrice:null, monthlyPrice:2000, trial:false, communityPick:true,
    description:'Coastal veg fare — coconut curries, rice, solkadhi, and fried vegetables.', daysAgo:13, lat:19.1372, lng:72.8132 },

  { id:'L021', name:"Rekha's Rajasthani Dabba", initial:'R', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Kandivali West', pincode:'400067', type:'veg',   cuisines:['Rajasthani'],     meals:['lunch','dinner'],
    lunchPrice:75,  dinnerPrice:80,  monthlyPrice:1700, trial:true,  communityPick:false,
    description:'Dal baati churma, ker sangri, gatte ki sabzi. Authentic Marwari home cooking in Kandivali.', daysAgo:4, lat:19.2082, lng:72.8312 },

  { id:'L022', name:"Tara's Tiffin Juhu",       initial:'T', avatarBg:'linear-gradient(135deg,#0284c7,#38bdf8)',
    area:'Juhu',           pincode:'400049', type:'veg',   cuisines:['North Indian'],   meals:['lunch'],
    lunchPrice:90,  dinnerPrice:null, monthlyPrice:2000, trial:true,  communityPick:false,
    description:'North Indian home meals — dal tadka, sabzi, roti, and rice. Cooked with mustard oil and real spices.', daysAgo:3, lat:19.1082, lng:72.8262 },

  { id:'L023', name:"Vile Parle Veg Kitchen",   initial:'V', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Vile Parle East',pincode:'400057', type:'veg',   cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:70,  dinnerPrice:75,  monthlyPrice:1600, trial:true,  communityPick:false,
    description:'Simple Gujarati home meals. Seasonal sabzi, dal, rotli, and rice. Fresh every day.', daysAgo:6, lat:19.0992, lng:72.8442 },

  { id:'L024', name:"Mulund Maharashtrian Mess", initial:'M', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Mulund West',    pincode:'400080', type:'veg',   cuisines:['Maharashtrian'],  meals:['lunch','dinner'],
    lunchPrice:65,  dinnerPrice:70,  monthlyPrice:1450, trial:true,  communityPick:false,
    description:'Traditional Maharashtrian thali with pitla, bhakri, and sol kadhi. Budget-friendly.', daysAgo:8, lat:19.1732, lng:72.9562 },

  { id:'L025', name:"Thane Home Kitchen",        initial:'T', avatarBg:'linear-gradient(135deg,#7c3aed,#a78bfa)',
    area:'Thane',          pincode:'400601', type:'nonveg',cuisines:['Mughlai'],        meals:['lunch','dinner'],
    lunchPrice:95,  dinnerPrice:100, monthlyPrice:2200, trial:false, communityPick:false,
    description:'Mughlai home food from Thane. Biryani, korma, and slow-cooked gravies made fresh daily.', daysAgo:5, lat:19.2183, lng:72.9781 },

  { id:'L026', name:"Wadala Sindhi Dabba",       initial:'W', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Wadala',         pincode:'400031', type:'veg',   cuisines:['North Indian'],   meals:['lunch'],
    lunchPrice:80,  dinnerPrice:null, monthlyPrice:1800, trial:true,  communityPick:false,
    description:'Sindhi dal, sai bhaji, kadhi chawal. Comforting home food from a Sindhi household.', daysAgo:9, lat:19.0202, lng:72.8672 },

  { id:'L027', name:"Kurla Non-Veg Tiffin",      initial:'K', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Kurla East',     pincode:'400024', type:'nonveg',cuisines:['Mughlai'],        meals:['lunch','dinner'],
    lunchPrice:85,  dinnerPrice:90,  monthlyPrice:2000, trial:true,  communityPick:false,
    description:'Chicken curry, keema, and egg dishes. Hearty Muslim home cooking from Kurla.', daysAgo:2, lat:19.0702, lng:72.8842 },

  { id:'L028', name:"Lower Parel Diet Meals",    initial:'L', avatarBg:'linear-gradient(135deg,#0369a1,#38bdf8)',
    area:'Lower Parel',    pincode:'400013', type:'diet',  cuisines:['Multi'],          meals:['lunch','dinner'],
    lunchPrice:130, dinnerPrice:140, monthlyPrice:3200, trial:true,  communityPick:true,
    description:'Corporate-area diet meals. Calorie-counted, macro-tracked, and customisable for fitness goals.', daysAgo:1, lat:19.0022, lng:72.8322 },

  { id:'L029', name:"Worli Punjabi Home",        initial:'W', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Worli',          pincode:'400018', type:'veg',   cuisines:['Punjabi'],        meals:['dinner'],
    lunchPrice:null,dinnerPrice:100, monthlyPrice:2200, trial:false, communityPick:false,
    description:'Evening Punjabi dinners — chole bhature, paneer tikka masala, and warm rotis.', daysAgo:7, lat:19.0132, lng:72.8182 },

  { id:'L030', name:"Matunga South Indian",      initial:'M', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Matunga',        pincode:'400019', type:'veg',   cuisines:['South Indian'],   meals:['lunch'],
    lunchPrice:65,  dinnerPrice:null, monthlyPrice:1450, trial:true,  communityPick:true,
    description:"Matunga is Mumbai's South Indian heart. Fresh sambar, filter coffee on order, and real home cooking.", daysAgo:3, lat:19.0232, lng:72.8582 },

  { id:'L031', name:"Jogeshwari Jain Tiffin",    initial:'J', avatarBg:'linear-gradient(135deg,#7c3aed,#a78bfa)',
    area:'Jogeshwari West',pincode:'400102', type:'jain',  cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:90,  dinnerPrice:95,  monthlyPrice:2100, trial:true,  communityPick:false,
    description:'Jain-certified kitchen. No root vegetables, no onion-garlic. Pure and traditional.', daysAgo:11, lat:19.1432, lng:72.8432 },

  { id:'L032', name:"Malad East Home Meals",     initial:'M', avatarBg:'linear-gradient(135deg,#0284c7,#38bdf8)',
    area:'Malad East',     pincode:'400097', type:'nonveg',cuisines:['Punjabi'],        meals:['lunch','dinner'],
    lunchPrice:80,  dinnerPrice:85,  monthlyPrice:1900, trial:true,  communityPick:false,
    description:'Chicken, mutton, and egg curries with proper Punjabi tadka. Home delivery in Malad East.', daysAgo:4, lat:19.1882, lng:72.8682 },

  { id:'L033', name:"Oshiwara Veg Tiffin",       initial:'O', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Oshiwara',       pincode:'400102', type:'veg',   cuisines:['North Indian'],   meals:['lunch'],
    lunchPrice:85,  dinnerPrice:null, monthlyPrice:1900, trial:true,  communityPick:false,
    description:'North Indian veg meals made fresh. Dal, paneer, roti, and rice. Ideal for film industry workers.', daysAgo:6, lat:19.1382, lng:72.8352 },

  { id:'L034', name:"Dahisar Gujarati Kitchen",  initial:'D', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Dahisar',        pincode:'400068', type:'veg',   cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:65,  dinnerPrice:70,  monthlyPrice:1450, trial:true,  communityPick:false,
    description:'Authentic Gujarati meals from a Dahisar household. Undhiyu on weekends. No compromise on taste.', daysAgo:10, lat:19.2482, lng:72.8582 },

  { id:'L035', name:"Borivali East Dabba",       initial:'B', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Borivali East',  pincode:'400066', type:'nonveg',cuisines:['Maharashtrian'],  meals:['lunch','dinner'],
    lunchPrice:75,  dinnerPrice:80,  monthlyPrice:1700, trial:true,  communityPick:false,
    description:'Non-veg Maharashtrian home food. Kombdi vade, mutton sukka, and sol kadhi. Hearty and filling.', daysAgo:14, lat:19.2322, lng:72.8692 },

  { id:'L036', name:"Santacruz West Meals",      initial:'S', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Santacruz West', pincode:'400054', type:'veg',   cuisines:['North Indian'],   meals:['lunch'],
    lunchPrice:80,  dinnerPrice:null, monthlyPrice:1800, trial:true,  communityPick:false,
    description:'Simple North Indian veg lunch. Dal, roti, sabzi, and rice — the kind of food that feels like home.', daysAgo:5, lat:19.0862, lng:72.8392 },

  { id:'L037', name:"Parel Bengali Kitchen",     initial:'P', avatarBg:'linear-gradient(135deg,#0284c7,#38bdf8)',
    area:'Parel',          pincode:'400012', type:'nonveg',cuisines:['Bengali'],        meals:['lunch','dinner'],
    lunchPrice:90,  dinnerPrice:100, monthlyPrice:2100, trial:false, communityPick:false,
    description:'Authentic Bengali cooking — ilish maach, chingri malai curry, and mishti doi. Comfort food.', daysAgo:8, lat:19.0042, lng:72.8432 },

  { id:'L038', name:"Andheri West Diet Co.",     initial:'A', avatarBg:'linear-gradient(135deg,#0369a1,#38bdf8)',
    area:'Andheri West',   pincode:'400058', type:'diet',  cuisines:['Multi'],          meals:['lunch','dinner'],
    lunchPrice:115, dinnerPrice:125, monthlyPrice:2900, trial:true,  communityPick:false,
    description:'Fitness-focused meal prep. Low-carb, high-protein, gluten-free options. Macros provided on request.', daysAgo:2, lat:19.1312, lng:72.8202 },

  { id:'L039', name:"Colaba Parsi Dabba",        initial:'C', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Colaba',         pincode:'400005', type:'nonveg',cuisines:['Multi'],          meals:['lunch'],
    lunchPrice:120, dinnerPrice:null, monthlyPrice:2700, trial:false, communityPick:true,
    description:"Rare Parsi home cooking — dhansak, patra ni macchi, sali boti. A taste you won't find in restaurants.", daysAgo:6, lat:18.9222, lng:72.8322 },

  { id:'L040', name:"Bandra East Home Kitchen",  initial:'B', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Bandra East',    pincode:'400051', type:'veg',   cuisines:['Maharashtrian'],  meals:['lunch','dinner'],
    lunchPrice:70,  dinnerPrice:75,  monthlyPrice:1550, trial:true,  communityPick:false,
    description:'Wholesome Maharashtrian meals from a Bandra East home. Dal, bhaji, chapati, and rice.', daysAgo:7, lat:19.0532, lng:72.8512 },

  /* ── Map-extended listings ─────────────────────────── */
  { id:'D041', name:"Radha Home Meals",           initial:'R', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Andheri West',  pincode:'400058', type:'veg',    cuisines:['Maharashtrian'],  meals:['lunch'],
    lunchPrice:75,  dinnerPrice:null, monthlyPrice:1650, trial:true,  communityPick:false,
    description:'Simple Maharashtrian home lunch. Dal, bhaji, chapati, and rice. Cooked fresh every morning.', daysAgo:3, lat:19.1372, lng:72.8272 },

  { id:'D042', name:"Kavitha's Tiffin",           initial:'K', avatarBg:'linear-gradient(135deg,#0284c7,#38bdf8)',
    area:'Andheri West',  pincode:'400058', type:'veg',    cuisines:['South Indian'],   meals:['lunch'],
    lunchPrice:70,  dinnerPrice:null, monthlyPrice:1550, trial:true,  communityPick:false,
    description:'South Indian home tiffin — idli, sambar, rice plates, and fresh chutneys. From a Chennai family.', daysAgo:5, lat:19.1390, lng:72.8345 },

  { id:'D043', name:"Mushtaq's Kitchen",          initial:'M', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Andheri West',  pincode:'400058', type:'nonveg', cuisines:['North Indian'],   meals:['lunch','dinner'],
    lunchPrice:95,  dinnerPrice:100, monthlyPrice:2200, trial:true,  communityPick:false,
    description:'North Indian non-veg home food. Chicken curry, keema, and egg dishes with fresh roti.', daysAgo:4, lat:19.1356, lng:72.8252 },

  { id:'D044', name:"Shanti Tiffin Service",      initial:'S', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Andheri East',  pincode:'400069', type:'veg',    cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:80,  dinnerPrice:85,  monthlyPrice:1850, trial:false, communityPick:false,
    description:'Gujarati home tiffin with dal, rotli, sabzi, and rice. Light and wholesome.', daysAgo:7, lat:19.1182, lng:72.8452 },

  { id:'D045', name:"Meera's Home Food",          initial:'M', avatarBg:'linear-gradient(135deg,#0284c7,#38bdf8)',
    area:'Andheri East',  pincode:'400069', type:'veg',    cuisines:['South Indian'],   meals:['lunch'],
    lunchPrice:75,  dinnerPrice:null, monthlyPrice:1650, trial:false, communityPick:false,
    description:'South Indian home meals from an Andheri East kitchen. Sambar, rasam, and rice plates daily.', daysAgo:9, lat:19.1237, lng:72.8513 },

  { id:'D046', name:"Oswal Jain Bhoj",            initial:'O', avatarBg:'linear-gradient(135deg,#7c3aed,#a78bfa)',
    area:'Andheri East',  pincode:'400069', type:'jain',   cuisines:['Rajasthani'],     meals:['lunch','dinner'],
    lunchPrice:100, dinnerPrice:105, monthlyPrice:2300, trial:true,  communityPick:false,
    description:'Jain Rajasthani home meals. Dal baati without onion-garlic, gatte ki sabzi, and churma.', daysAgo:6, lat:19.1162, lng:72.8435 },

  { id:'D047', name:"Joseph's Fish Curry",        initial:'J', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Bandra West',   pincode:'400050', type:'nonveg', cuisines:['Goan'],           meals:['lunch','dinner'],
    lunchPrice:100, dinnerPrice:110, monthlyPrice:2400, trial:false, communityPick:false,
    description:'Goan fish curry, rice, and prawn dishes from a Bandra home. Weekend sorpotel special.', daysAgo:8, lat:19.0568, lng:72.8325 },

  { id:'D048', name:"Padma South Tiffin",         initial:'P', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Bandra West',   pincode:'400050', type:'veg',    cuisines:['South Indian'],   meals:['lunch'],
    lunchPrice:80,  dinnerPrice:null, monthlyPrice:1800, trial:true,  communityPick:false,
    description:'Authentic South Indian home tiffin. Rice plates with sambar, kootu, and seasonal poriyal.', daysAgo:4, lat:19.0641, lng:72.8302 },

  { id:'D049', name:"Lata's Thali",               initial:'L', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Goregaon',      pincode:'400063', type:'veg',    cuisines:['Maharashtrian'],  meals:['lunch'],
    lunchPrice:80,  dinnerPrice:null, monthlyPrice:1800, trial:false, communityPick:false,
    description:'Maharashtrian home thali with dal, sabzi, bhakri, and rice. Seasonal menu every day.', daysAgo:5, lat:19.1644, lng:72.8508 },

  { id:'D050', name:"Ahmed's Dabba",              initial:'A', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Goregaon',      pincode:'400063', type:'nonveg', cuisines:['Mughlai'],        meals:['lunch','dinner'],
    lunchPrice:90,  dinnerPrice:95,  monthlyPrice:2100, trial:true,  communityPick:false,
    description:'Mughlai home food from Goregaon. Biryani, haleem, and slow-cooked gravies.', daysAgo:3, lat:19.1702, lng:72.8530 },

  { id:'D051', name:"Saraswati Kitchen",          initial:'S', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Goregaon',      pincode:'400063', type:'veg',    cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:70,  dinnerPrice:75,  monthlyPrice:1600, trial:true,  communityPick:false,
    description:'Gujarati home meals from Goregaon. Fresh, light, and made with seasonal vegetables.', daysAgo:6, lat:19.1622, lng:72.8488 },

  { id:'D052', name:"Kamala Bhoj",                initial:'K', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Dadar',         pincode:'400014', type:'veg',    cuisines:['Gujarati'],       meals:['lunch'],
    lunchPrice:80,  dinnerPrice:null, monthlyPrice:1800, trial:false, communityPick:false,
    description:'Gujarati tiffin from Dadar. Dal, rotli, sabzi, and rice. Prepared fresh every morning.', daysAgo:7, lat:19.0158, lng:72.8462 },

  { id:'D053', name:"Sawant Lunch Home",          initial:'S', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Dadar',         pincode:'400014', type:'nonveg', cuisines:['Maharashtrian'],  meals:['lunch'],
    lunchPrice:85,  dinnerPrice:null, monthlyPrice:1900, trial:true,  communityPick:false,
    description:'Maharashtrian non-veg lunch from Dadar. Fish curry, chicken, and traditional sides.', daysAgo:4, lat:19.0214, lng:72.8502 },

  { id:'D054', name:"Jain Swad Dadar",            initial:'J', avatarBg:'linear-gradient(135deg,#7c3aed,#a78bfa)',
    area:'Dadar',         pincode:'400014', type:'jain',   cuisines:['Jain'],           meals:['lunch','dinner'],
    lunchPrice:100, dinnerPrice:105, monthlyPrice:2300, trial:true,  communityPick:false,
    description:'Strictly Jain kitchen in Dadar. Fresh, pure cooking with no root vegetables or onion-garlic.', daysAgo:10, lat:19.0172, lng:72.8432 },

  { id:'D055', name:"Nirmala Kitchen",            initial:'N', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Malad West',    pincode:'400064', type:'veg',    cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:75,  dinnerPrice:80,  monthlyPrice:1700, trial:true,  communityPick:false,
    description:'Light Gujarati home food from Malad West. Seasonal sabzi, dal, rotli made fresh daily.', daysAgo:3, lat:19.1842, lng:72.8462 },

  { id:'D056', name:"Puja Tiffin Centre",         initial:'P', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Borivali West', pincode:'400092', type:'veg',    cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:80,  dinnerPrice:85,  monthlyPrice:1800, trial:false, communityPick:false,
    description:'Reliable Gujarati tiffin service in Borivali. Dal, sabzi, rotli, and rice. No frills.', daysAgo:8, lat:19.2282, lng:72.8542 },

  { id:'D057', name:"Sindhi Tiffin Chembur",      initial:'S', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Chembur',       pincode:'400071', type:'veg',    cuisines:['North Indian'],   meals:['lunch'],
    lunchPrice:70,  dinnerPrice:null, monthlyPrice:1550, trial:false, communityPick:false,
    description:'Sindhi home tiffin — sai bhaji, dal pakwan, and kadhi chawal. Comfort food at its best.', daysAgo:5, lat:19.0502, lng:72.8982 },

  { id:'D058', name:"Nandini's Kitchen",          initial:'N', avatarBg:'linear-gradient(135deg,#0284c7,#38bdf8)',
    area:'Chembur',       pincode:'400071', type:'veg',    cuisines:['South Indian'],   meals:['lunch','dinner'],
    lunchPrice:80,  dinnerPrice:85,  monthlyPrice:1800, trial:true,  communityPick:false,
    description:'South Indian home food from Chembur. Rice plates, sambar, rasam, and chutneys.', daysAgo:2, lat:19.0562, lng:72.9022 },

  { id:'D059', name:"Radha's Kitchen",            initial:'R', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Santacruz',     pincode:'400054', type:'veg',    cuisines:['Gujarati'],       meals:['lunch'],
    lunchPrice:80,  dinnerPrice:null, monthlyPrice:1800, trial:true,  communityPick:false,
    description:'Gujarati home tiffin from Santacruz. Dal, rotli, sabzi, and seasonal salad.', daysAgo:3, lat:19.0832, lng:72.8432 },

  { id:'D060', name:"Malhotra Lunch Box",         initial:'M', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Santacruz',     pincode:'400054', type:'veg',    cuisines:['North Indian'],   meals:['lunch'],
    lunchPrice:75,  dinnerPrice:null, monthlyPrice:1650, trial:false, communityPick:false,
    description:'North Indian veg lunch box from Santacruz. Dal, paneer, roti, and rice. Office-friendly.', daysAgo:6, lat:19.0852, lng:72.8422 },

  { id:'D061', name:"Fit Meals by Neha",          initial:'F', avatarBg:'linear-gradient(135deg,#0369a1,#38bdf8)',
    area:'Powai',         pincode:'400076', type:'diet',   cuisines:['Multi'],          meals:['lunch','dinner'],
    lunchPrice:110, dinnerPrice:120, monthlyPrice:2800, trial:true,  communityPick:false,
    description:'Fitness-first home meals in Powai. Calorie-counted, macro-tracked, for the health-conscious.', daysAgo:1, lat:19.1562, lng:72.9022 },

  { id:'D062', name:"Ghatkopar Rajasthani Thali", initial:'G', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Ghatkopar',     pincode:'400077', type:'veg',    cuisines:['Rajasthani'],     meals:['lunch','dinner'],
    lunchPrice:80,  dinnerPrice:85,  monthlyPrice:1850, trial:false, communityPick:false,
    description:'Traditional Rajasthani thali from Ghatkopar. Dal baati, gatte ki sabzi, and churma.', daysAgo:9, lat:19.0742, lng:72.8762 },

  { id:'D063', name:"Versova Fish Dabba",         initial:'V', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Versova',       pincode:'400061', type:'nonveg', cuisines:['Coastal'],        meals:['lunch'],
    lunchPrice:85,  dinnerPrice:null, monthlyPrice:1900, trial:true,  communityPick:false,
    description:'Fresh coastal fish dishes from Versova. Bombil fry, fish curry, and solkadhi rice.', daysAgo:4, lat:19.1332, lng:72.8092 },

  { id:'D064', name:"Patel Jain Dabba",           initial:'P', avatarBg:'linear-gradient(135deg,#7c3aed,#a78bfa)',
    area:'Kandivali',     pincode:'400067', type:'jain',   cuisines:['Jain'],           meals:['lunch','dinner'],
    lunchPrice:80,  dinnerPrice:85,  monthlyPrice:1850, trial:true,  communityPick:false,
    description:'Jain home tiffin from Kandivali. No onion, garlic, or root vegetables. Pure Jain preparation.', daysAgo:7, lat:19.2062, lng:72.8542 },

  { id:'D065', name:"Kandivali Kitchen",          initial:'K', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Kandivali',     pincode:'400067', type:'veg',    cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:70,  dinnerPrice:75,  monthlyPrice:1600, trial:false, communityPick:false,
    description:'Simple Gujarati home meals from Kandivali. Dal, rotli, sabzi, and chawal every day.', daysAgo:5, lat:19.2022, lng:72.8502 },

  { id:'D066', name:"Aslam's Kitchen",            initial:'A', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Kurla',         pincode:'400024', type:'nonveg', cuisines:['Mughlai'],        meals:['lunch','dinner'],
    lunchPrice:70,  dinnerPrice:75,  monthlyPrice:1600, trial:true,  communityPick:false,
    description:'Muslim home food from Kurla. Chicken curry, keema, and egg dishes with fresh bread.', daysAgo:2, lat:19.0712, lng:72.8812 },

  { id:'D067', name:"Ravi's Dabba",               initial:'R', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Vikhroli',      pincode:'400079', type:'nonveg', cuisines:['Andhra'],         meals:['lunch','dinner'],
    lunchPrice:95,  dinnerPrice:100, monthlyPrice:2200, trial:true,  communityPick:false,
    description:'Andhra-style home food from Vikhroli. Spicy curries, tamarind dal, and rice.', daysAgo:6, lat:19.1092, lng:72.9312 },

  { id:'D068', name:"Jogeshwari Tiffin",          initial:'J', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Jogeshwari',    pincode:'400102', type:'veg',    cuisines:['Gujarati'],       meals:['lunch'],
    lunchPrice:80,  dinnerPrice:null, monthlyPrice:1800, trial:false, communityPick:false,
    description:'Gujarati home tiffin from Jogeshwari. Light, fresh, and prepared with care every morning.', daysAgo:8, lat:19.1012, lng:72.8672 },

  { id:'D069', name:"Mahim Tiffin Wala",          initial:'M', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Mahim',         pincode:'400016', type:'veg',    cuisines:['Maharashtrian'],  meals:['lunch'],
    lunchPrice:75,  dinnerPrice:null, monthlyPrice:1650, trial:true,  communityPick:false,
    description:'Maharashtrian home tiffin from Mahim. Dal, bhaji, chapati, and rice at a great price.', daysAgo:4, lat:19.0452, lng:72.8572 },

  { id:'D070', name:"Koli Fish Dabba",            initial:'K', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Mahim',         pincode:'400016', type:'nonveg', cuisines:['Coastal'],        meals:['lunch'],
    lunchPrice:80,  dinnerPrice:null, monthlyPrice:1800, trial:false, communityPick:false,
    description:"Koli-style coastal fish curry and rice from a Mahim home. Mumbai's original seafood tiffin.", daysAgo:5, lat:19.0422, lng:72.8542 },

  /* ── Delhi NCR ─────────────────────────────────────── */
  { id:'C071', name:"Lajpat Nagar Home Kitchen",  initial:'L', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Lajpat Nagar',  pincode:'110024', type:'veg',    cuisines:['Punjabi'],        meals:['lunch','dinner'],
    lunchPrice:90,  dinnerPrice:100, monthlyPrice:2100, trial:true,  communityPick:false,
    description:'Dal makhani, paneer, fresh rotis — hearty Punjabi home food from a South Delhi household.', daysAgo:2, lat:28.5672, lng:77.2430 },

  { id:'C072', name:"Saket Dilli Ki Rasoi",       initial:'S', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Saket',         pincode:'110017', type:'nonveg', cuisines:['North Indian'],   meals:['lunch','dinner'],
    lunchPrice:100, dinnerPrice:110, monthlyPrice:2400, trial:true,  communityPick:false,
    description:'Authentic Delhi home cooking — butter chicken, keema, and slow-cooked dal from a South Delhi home.', daysAgo:4, lat:28.5244, lng:77.2167 },

  { id:'C073', name:"Karol Bagh Rajasthani Thali",initial:'K', avatarBg:'linear-gradient(135deg,#7c3aed,#a78bfa)',
    area:'Karol Bagh',    pincode:'110005', type:'veg',    cuisines:['Rajasthani'],     meals:['lunch'],
    lunchPrice:85,  dinnerPrice:null, monthlyPrice:1900, trial:false, communityPick:false,
    description:'Dal baati churma, gatte ki sabzi, and ker sangri. Authentic Marwari home cooking in Central Delhi.', daysAgo:6, lat:28.6520, lng:77.1900 },

  { id:'C074', name:"CP Diet Tiffin",             initial:'C', avatarBg:'linear-gradient(135deg,#0369a1,#38bdf8)',
    area:'Connaught Place',pincode:'110001', type:'diet',  cuisines:['Multi'],          meals:['lunch','dinner'],
    lunchPrice:130, dinnerPrice:140, monthlyPrice:3200, trial:true,  communityPick:true,
    description:'Low-cal, macro-counted office tiffin for CP professionals. Protein bowls, salads, and clean gravies.', daysAgo:1, lat:28.6328, lng:77.2197 },

  /* ── Bengaluru ──────────────────────────────────────── */
  { id:'C075', name:"Koramangala South Indian",   initial:'K', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Koramangala',   pincode:'560034', type:'veg',    cuisines:['South Indian'],   meals:['lunch','dinner'],
    lunchPrice:80,  dinnerPrice:85,  monthlyPrice:1850, trial:true,  communityPick:true,
    description:'Rice plates, sambar, rasam, and a seasonal poriyal every day. Authentic South Indian home cooking.', daysAgo:3, lat:12.9352, lng:77.6244 },

  { id:'C076', name:"Indiranagar Kerala Kitchen", initial:'I', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Indiranagar',   pincode:'560038', type:'nonveg', cuisines:['Kerala'],         meals:['lunch','dinner'],
    lunchPrice:95,  dinnerPrice:105, monthlyPrice:2200, trial:true,  communityPick:false,
    description:'Kerala fish curry, appam, stew, and prawn dishes. Authentic Malabar home cooking in Bangalore.', daysAgo:5, lat:12.9784, lng:77.6408 },

  { id:'C077', name:"HSR Layout Diet Box",        initial:'H', avatarBg:'linear-gradient(135deg,#0369a1,#38bdf8)',
    area:'HSR Layout',    pincode:'560102', type:'diet',   cuisines:['Multi'],          meals:['lunch','dinner'],
    lunchPrice:120, dinnerPrice:130, monthlyPrice:2900, trial:true,  communityPick:false,
    description:'Calorie-counted, macro-tracked home tiffin for the fitness crowd in HSR. Veg and non-veg options.', daysAgo:2, lat:12.9116, lng:77.6412 },

  { id:'C078', name:"Jayanagar Brahmin Mess",     initial:'J', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Jayanagar',     pincode:'560041', type:'veg',    cuisines:['South Indian'],   meals:['lunch'],
    lunchPrice:70,  dinnerPrice:null, monthlyPrice:1550, trial:false, communityPick:false,
    description:'Traditional Karnataka Brahmin cooking — bisibele bath, chitranna, and proper rasam. Pure satvik.', daysAgo:8, lat:12.9251, lng:77.5938 },

  /* ── Chennai ────────────────────────────────────────── */
  { id:'C079', name:"Anna Nagar Brahmin Tiffin",  initial:'A', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Anna Nagar',    pincode:'600040', type:'veg',    cuisines:['South Indian'],   meals:['lunch','dinner'],
    lunchPrice:75,  dinnerPrice:80,  monthlyPrice:1700, trial:true,  communityPick:false,
    description:'Satvik Brahmin home cooking — kootu, rasam, rice, and avial. No onion, no garlic. Pure taste.', daysAgo:3, lat:13.0850, lng:80.2101 },

  { id:'C080', name:"T Nagar Chettinad Kitchen",  initial:'T', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'T Nagar',       pincode:'600017', type:'nonveg', cuisines:['South Indian'],   meals:['lunch','dinner'],
    lunchPrice:100, dinnerPrice:110, monthlyPrice:2300, trial:true,  communityPick:true,
    description:'Authentic Chettinad chicken curry, kola urundai, and rice. Home cooking from a Karaikudi family.', daysAgo:4, lat:13.0418, lng:80.2341 },

  { id:'C081', name:"Mylapore Iyengar Kitchen",   initial:'M', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Mylapore',      pincode:'600004', type:'veg',    cuisines:['South Indian'],   meals:['lunch'],
    lunchPrice:70,  dinnerPrice:null, monthlyPrice:1550, trial:true,  communityPick:false,
    description:'Iyengar-style home meals from Mylapore. Puliyodarai, kovil sadam, and filter coffee on request.', daysAgo:6, lat:13.0335, lng:80.2697 },

  { id:'C082', name:"Velachery South Tiffin",     initial:'V', avatarBg:'linear-gradient(135deg,#0284c7,#38bdf8)',
    area:'Velachery',     pincode:'600042', type:'veg',    cuisines:['South Indian'],   meals:['lunch','dinner'],
    lunchPrice:65,  dinnerPrice:70,  monthlyPrice:1450, trial:false, communityPick:false,
    description:'Budget-friendly South Indian home tiffin in Velachery. Idli, sambar, rice, and chutneys daily.', daysAgo:9, lat:12.9790, lng:80.2209 },

  /* ── Kolkata ────────────────────────────────────────── */
  { id:'C083', name:"Salt Lake Bengali Dabba",    initial:'S', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Salt Lake',     pincode:'700091', type:'nonveg', cuisines:['Bengali'],        meals:['lunch','dinner'],
    lunchPrice:85,  dinnerPrice:95,  monthlyPrice:2000, trial:true,  communityPick:false,
    description:'Ilish maach, chingri malai curry, and dal with posto. Authentic Bengali home cooking in Bidhannagar.', daysAgo:2, lat:22.5797, lng:88.4209 },

  { id:'C084', name:"Ballygunge Veg Tiffin",      initial:'B', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Ballygunge',    pincode:'700019', type:'veg',    cuisines:['Bengali'],        meals:['lunch'],
    lunchPrice:70,  dinnerPrice:null, monthlyPrice:1550, trial:true,  communityPick:false,
    description:'Bengali veg home meals — shukto, dal, sabzi, and rice. Simple, fresh, and cooked with mustard oil.', daysAgo:5, lat:22.5214, lng:88.3678 },

  { id:'C085', name:"Howrah Home Meals",          initial:'H', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Howrah',        pincode:'711101', type:'nonveg', cuisines:['Bengali'],        meals:['lunch','dinner'],
    lunchPrice:75,  dinnerPrice:80,  monthlyPrice:1700, trial:false, communityPick:false,
    description:'Hearty Bengali non-veg tiffin from Howrah. Fish curry, chicken, and rice — home-style every day.', daysAgo:7, lat:22.5958, lng:88.2636 },

  { id:'C086', name:"South Kolkata Thali",        initial:'S', avatarBg:'linear-gradient(135deg,#0284c7,#38bdf8)',
    area:'Jadavpur',      pincode:'700032', type:'veg',    cuisines:['Bengali'],        meals:['lunch'],
    lunchPrice:65,  dinnerPrice:null, monthlyPrice:1450, trial:true,  communityPick:false,
    description:'Vegetarian Bengali home lunch from Jadavpur. Luchi, cholar dal, and aloo dum on request.', daysAgo:10, lat:22.4974, lng:88.3718 },

  /* ── Hyderabad ──────────────────────────────────────── */
  { id:'C087', name:"Banjara Hills Andhra Meals", initial:'B', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Banjara Hills',  pincode:'500034', type:'nonveg', cuisines:['Andhra'],        meals:['lunch','dinner'],
    lunchPrice:90,  dinnerPrice:100, monthlyPrice:2100, trial:true,  communityPick:true,
    description:'Spicy Andhra home meals — gongura mutton, royyala iguru, and rice with tangy tamarind dal.', daysAgo:2, lat:17.4156, lng:78.4339 },

  { id:'C088', name:"Jubilee Hills Biryani Box",  initial:'J', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Jubilee Hills',  pincode:'500033', type:'nonveg', cuisines:['Mughlai'],       meals:['lunch','dinner'],
    lunchPrice:110, dinnerPrice:120, monthlyPrice:2700, trial:true,  communityPick:false,
    description:'Hyderabadi dum biryani and haleem from a Jubilee Hills home. Slow-cooked, saffron-kissed.', daysAgo:3, lat:17.4239, lng:78.4061 },

  { id:'C089', name:"HITEC City Veg Tiffin",      initial:'H', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'HITEC City',     pincode:'500081', type:'veg',   cuisines:['South Indian'],   meals:['lunch'],
    lunchPrice:80,  dinnerPrice:null, monthlyPrice:1800, trial:false, communityPick:false,
    description:'South Indian veg tiffin in the IT corridor. Rice plates, sambar, rasam — reliable everyday lunch.', daysAgo:5, lat:17.4474, lng:78.3762 },

  { id:'C090', name:"Secunderabad Diet Meals",    initial:'S', avatarBg:'linear-gradient(135deg,#0369a1,#38bdf8)',
    area:'Secunderabad',   pincode:'500003', type:'diet',  cuisines:['Multi'],          meals:['lunch','dinner'],
    lunchPrice:120, dinnerPrice:130, monthlyPrice:2900, trial:true,  communityPick:false,
    description:'Calorie-counted home tiffin for health-conscious professionals in Secunderabad. Macros on request.', daysAgo:4, lat:17.4399, lng:78.4983 },

  /* ── Pune ───────────────────────────────────────────── */
  { id:'C091', name:"Kothrud Maharashtrian Thali",initial:'K', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Kothrud',        pincode:'411038', type:'veg',   cuisines:['Maharashtrian'],  meals:['lunch','dinner'],
    lunchPrice:75,  dinnerPrice:80,  monthlyPrice:1700, trial:true,  communityPick:false,
    description:'Traditional Maharashtrian thali from Kothrud. Pitla, bhakri, amti, and seasonal sabzi. Home-cooked daily.', daysAgo:3, lat:18.5074, lng:73.8077 },

  { id:'C092', name:"Koregaon Park Diet Kitchen", initial:'K', avatarBg:'linear-gradient(135deg,#0369a1,#38bdf8)',
    area:'Koregaon Park',  pincode:'411001', type:'diet',  cuisines:['Multi'],          meals:['lunch','dinner'],
    lunchPrice:130, dinnerPrice:140, monthlyPrice:3200, trial:true,  communityPick:true,
    description:'Macro-balanced home tiffin for the Koregaon Park crowd. Keto, vegan, and protein-high options.', daysAgo:1, lat:18.5362, lng:73.8936 },

  { id:'C093', name:"Wakad Gujarati Kitchen",     initial:'W', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Wakad',          pincode:'411057', type:'veg',   cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:70,  dinnerPrice:75,  monthlyPrice:1600, trial:false, communityPick:false,
    description:'Simple Gujarati home meals in Wakad. Dal, rotli, sabzi, and rice — light and wholesome every day.', daysAgo:6, lat:18.5910, lng:73.7613 },

  { id:'C094', name:"Pune Camp North Indian",     initial:'P', avatarBg:'linear-gradient(135deg,#dc2626,#f87171)',
    area:'Pune Camp',      pincode:'411001', type:'nonveg', cuisines:['North Indian'],  meals:['lunch','dinner'],
    lunchPrice:95,  dinnerPrice:105, monthlyPrice:2200, trial:true,  communityPick:false,
    description:'Hearty North Indian home food in Camp area. Chicken curry, dal makhani, and fresh rotis.', daysAgo:4, lat:18.5204, lng:73.8777 },

  /* ── Ahmedabad ──────────────────────────────────────── */
  { id:'C095', name:"Navrangpura Gujarati Thali", initial:'N', avatarBg:'linear-gradient(135deg,#C8771A,#F5A623)',
    area:'Navrangpura',    pincode:'380009', type:'veg',   cuisines:['Gujarati'],       meals:['lunch','dinner'],
    lunchPrice:70,  dinnerPrice:75,  monthlyPrice:1600, trial:true,  communityPick:true,
    description:'Full Gujarati thali from Navrangpura. Kadhi, dal, sabzi, rotli, and seasonal sweets on weekends.', daysAgo:2, lat:23.0394, lng:72.5644 },

  { id:'C096', name:"Vastrapur Jain Bhoj",        initial:'V', avatarBg:'linear-gradient(135deg,#7c3aed,#a78bfa)',
    area:'Vastrapur',      pincode:'380015', type:'jain',  cuisines:['Jain'],           meals:['lunch','dinner'],
    lunchPrice:85,  dinnerPrice:90,  monthlyPrice:2000, trial:true,  communityPick:false,
    description:'Certified Jain kitchen in Vastrapur. No root vegetables, no onion-garlic. Paryushana specials.', daysAgo:5, lat:23.0321, lng:72.5284 },

  { id:'C097', name:"Satellite Diet Tiffin",      initial:'S', avatarBg:'linear-gradient(135deg,#0369a1,#38bdf8)',
    area:'Satellite',      pincode:'380015', type:'diet',  cuisines:['Multi'],          meals:['lunch','dinner'],
    lunchPrice:110, dinnerPrice:120, monthlyPrice:2700, trial:true,  communityPick:false,
    description:'Low-oil, high-protein home tiffin for the Satellite colony. Diabetic-friendly and gym-friendly options.', daysAgo:3, lat:23.0180, lng:72.5097 },

  { id:'C098', name:"Ellis Bridge Jain Mess",     initial:'E', avatarBg:'linear-gradient(135deg,#4A7C59,#6DAF82)',
    area:'Ellis Bridge',   pincode:'380006', type:'jain',  cuisines:['Gujarati'],       meals:['lunch'],
    lunchPrice:75,  dinnerPrice:null, monthlyPrice:1650, trial:false, communityPick:false,
    description:'Traditional Jain Gujarati lunch near Ellis Bridge. Pure, fresh, and prepared with traditional methods.', daysAgo:7, lat:23.0190, lng:72.5795 },
];
