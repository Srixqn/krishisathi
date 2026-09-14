/**
 * Krishi Sathi — Shared i18n Translation System
 * HCI: Recognition over Recall — every visible label is translatable
 * Usage: include this script on every page. Call setLang('en') or setLang('np').
 */

const KS_DICT = {
  en: {
    /* ── Brand ── */
    "brand-name": "KRISHI SATHI",
    "brand-nepali": "कृषि साथी",
    "brand-tagline": "Agricultural Digital Portal",

    /* ── Language Toggle ── */
    "lang-label": "Language / भाषा",

    /* ── Nav Labels ── */
    "nav-dashboard": "Dashboard",
    "nav-crops": "My Crops",
    "nav-disease": "Disease Check",
    "nav-forecast": "7-Day Forecast",
    "nav-marketplace": "Marketplace",
    "nav-rental": "Equipment Rental",
    "nav-resources": "Farming Resources",
    "nav-alerts": "Active Alerts",
    "nav-notifications": "Notifications",
    "nav-profile": "Profile & Activity",
    "nav-menu-heading": "Main Menu",
    "nav-updates-heading": "Updates & Account",

    /* ── Dashboard ── */
    "page-dashboard-sub": "Agricultural Digital Portal",
    "page-dashboard-title": "Dashboard Overview",
    "weather-title": "Today's Weather & Advisory",
    "weather-location": "Kavre District, Bagmati Province",
    "weather-temp-label": "Temperature",
    "weather-temp-desc": "Partly Cloudy",
    "weather-humidity-label": "Humidity",
    "weather-humidity-desc": "High Moisture",
    "weather-rain-label": "Rainfall Chance",
    "weather-rain-desc": "Light Showers",
    "weather-wind-label": "Wind Speed",
    "weather-wind-desc": "km/h · NE",
    "weather-advisory-title": "⚠ Seasonal Advisory",
    "weather-advisory-text": "High humidity (78%) increases blight risk for tomatoes. Apply copper-based fungicide preventively within 48 hours. Cover cauliflower heads during afternoon showers.",
    "quick-actions-heading": "Quick Actions",
    "qa-crops-title": "My Crops",
    "qa-crops-desc": "Manage plantings, track growth and schedules.",
    "qa-crops-link": "View crops →",
    "qa-disease-title": "Check Disease",
    "qa-disease-desc": "Upload a crop photo for AI-powered disease identification.",
    "qa-disease-link": "Analyse now →",
    "qa-market-title": "Buy / Sell Produce",
    "qa-market-desc": "Browse marketplace listings and live mandi prices.",
    "qa-market-link": "Open market →",
    "qa-rental-title": "Rent Equipment",
    "qa-rental-desc": "Find tractors, tillers and sprayers near your location.",
    "qa-rental-link": "Browse equipment →",
    "stat-active-crops": "Active Crops",
    "stat-crops-note": "↑ 1 added this season",
    "stat-tasks": "Tasks Due",
    "stat-tasks-note": "⚠ 2 overdue",
    "stat-listings": "Market Listings",
    "stat-listings-note": "→ 3 pending response",
    "stat-land": "Land Coverage",
    "stat-land-note": "All plots active",
    "alerts-heading": "Recent Alerts & Advisories",
    "alerts-view-all": "View all →",
    "alert1-type": "Disease Alert",
    "alert1-badge": "High Risk",
    "alert1-title": "Late Blight Warning — Tomato Crops",
    "alert1-text": "Phytophthora infestans detected in 3 plots in Banepa cluster. Immediate fungicide application recommended.",
    "alert1-time": "2 hours ago",
    "alert1-link": "Check now →",
    "alert2-type": "Weather Update",
    "alert2-badge": "Advisory",
    "alert2-title": "Rainfall Expected: 15–30mm (Next 72 hrs)",
    "alert2-text": "Moderate rainfall forecast for Kavre district. Delay irrigation. Cover cauliflower heads to prevent yellowing.",
    "alert2-time": "5 hours ago",
    "alert2-link": "View forecast →",
    "alert3-type": "Price Alert",
    "alert3-badge": "Opportunity",
    "alert3-title": "Tomato Spike — Rs. 82/kg at Bhaktapur Mandi",
    "alert3-text": "Wholesale tomato prices rose 26% over last week. Consider selling harvest-ready stock now.",
    "alert3-time": "8 hours ago",
    "alert3-link": "See prices →",

    /* ── My Crops ── */
    "page-crops-sub": "Crop Management",
    "page-crops-title": "My Crops",
    "crop-search-placeholder": "Search crops by name...",
    "crop-filter-status": "Status",
    "crop-filter-all": "All Status",
    "crop-filter-growing": "Growing",
    "crop-filter-harvest": "Harvest Ready",
    "crop-filter-planted": "Planted",
    "crop-sort-label": "Sort By",
    "crop-sort-planted": "Planting Date",
    "crop-sort-harvest": "Harvest Date",
    "crop-sort-name": "Crop Name",
    "crop-add-btn": "+ Add Crop",
    "crops-season-heading": "Active Crops — Kharif 2081 Season",
    "crops-count-text": "3 crops registered across 4 Ropani",
    "crop-planted-label": "Planted",
    "crop-harvest-label": "Harvest",
    "crop-land-label": "Land",
    "crop-variety-label": "Variety",
    "crop-progress-label": "Growth Progress",
    "crop-btn-details": "View Details",
    "crop-btn-log": "Log Activity",
    "crop-no-results-title": "No crops match your filter",
    "crop-no-results-desc": "Try changing the status filter or clearing your search.",
    "crop-clear-filter": "Clear Filters",
    "tasks-heading": "Upcoming Farm Tasks",
    "tasks-sub": "All scheduled activities across your crops",
    "tasks-add": "+ Add Task",
    "task-col-crop": "Crop",
    "task-col-task": "Scheduled Task",
    "task-col-due": "Due Date",
    "task-col-status": "Status",
    "status-urgent": "⚠ Urgent",
    "status-pending": "Pending",
    "status-scheduled": "Scheduled",
    "status-on-track": "✓ On Track",
    /* modal */
    "modal-add-crop-title": "Add New Crop",
    "modal-crop-name-label": "Crop Name",
    "modal-crop-variety-label": "Variety",
    "modal-crop-land-label": "Land Plot",
    "modal-crop-planted-label": "Date Planted",
    "modal-crop-harvest-label": "Expected Harvest Date",
    "modal-crop-area-label": "Area (Ropani)",
    "modal-save": "Save Crop",
    "modal-cancel": "Cancel",
    "modal-add-task-title": "Add Farm Task",
    "modal-task-crop-label": "Select Crop",
    "modal-task-desc-label": "Task Description",
    "modal-task-due-label": "Due Date",
    "modal-task-save": "Save Task",

    /* ── Disease Check ── */
    "page-disease-sub": "AI-Powered Detection",
    "page-disease-title": "Crop Disease Check",
    "disease-advisory": "Upload a clear, close-up photograph of the affected leaf, stem, or fruit. Our model cross-references visual symptoms against 200+ regional disease profiles for Bagmati Province.",
    "disease-upload-heading": "Upload Affected Crop Image",
    "dz-heading": "Drop affected crop image here",
    "dz-sub": "or click to browse files from your device",
    "dz-preview-remove": "Remove image",
    "crop-select-label": "Select Crop Type",
    "severity-label": "Observed Symptom Severity",
    "sev-mild": "Mild",
    "sev-moderate": "Moderate",
    "sev-severe": "Severe",
    "analyse-btn": "Analyse Image",
    "await-heading": "Awaiting upload...",
    "await-text": "Upload a photo on the left and click 'Analyse Image' to receive an AI-powered disease diagnostic report.",
    "loading-heading": "Analysing crop image...",
    "loading-sub": "Cross-referencing with regional disease database",
    "result-detected": "⚠ Disease Detected",
    "result-confidence": "AI Confidence",
    "result-severity-label": "Severity",
    "result-spread": "Spread Risk",
    "result-loss": "Crop Loss Risk",
    "result-about-heading": "About This Disease",
    "result-about-text": "Early Blight (Alternaria solani) causes dark brown concentric ring lesions on older leaves. High humidity (78%) and warm temperatures (24°C) currently present in Kavre match outbreak criteria.",
    "result-remedies-heading": "Immediate Remedies — Act Within 48 Hours",
    "remedy1-title": "Apply Copper Oxychloride (Blitox 50 WP @ 3g/L)",
    "remedy1-text": "Spray both leaf surfaces. Repeat every 7 days. Effective against Alternaria.",
    "remedy2-title": "Remove & Destroy Infected Leaves",
    "remedy2-text": "Hand-pick leaves with >30% lesion cover. Burn off-site. Do NOT compost.",
    "remedy3-title": "Improve Air Circulation",
    "remedy3-text": "Stake plants. Remove lower leaves below 30cm from soil. Avoid evening irrigation.",
    "remedy4-title": "Potassium Silicate Foliar Spray (2g/L)",
    "remedy4-text": "Strengthens cell walls. Reduces infection severity by 15–25%. Apply weekly.",
    "btn-ask-expert": "Ask an Expert",
    "btn-save-report": "Save Report",

    /* ── Marketplace ── */
    "page-market-sub": "Trade & Prices",
    "page-market-title": "Marketplace & Mandi Prices",
    "market-post-btn": "Post Produce",
    "market-search-placeholder": "Search listings, produce, or inputs...",
    "market-cat-all": "All Categories",
    "market-cat-seeds": "Seeds & Seedlings",
    "market-cat-fertilizer": "Fertilizers",
    "market-cat-produce": "Fresh Produce",
    "market-cat-compost": "Organic Compost",
    "market-loc-all": "All Locations",
    "seg-buy": "Buy Farm Inputs",
    "seg-sell": "Sell Produce",
    "seg-prices": "Market Prices",
    "listings-heading": "Active Listings — Buy Farm Inputs",
    "listings-count": "Showing 3 listings near Kavre",
    "btn-contact-seller": "Contact Seller",
    "btn-view-details": "View Details",
    "btn-edit-listing": "Edit Listing",
    "mandi-title": "Today's Mandi Prices",
    "mandi-sub": "Bhaktapur Mandi",
    "mandi-updated": "Updated 6:00 AM",
    "mandi-full-list": "View full price list →",
    "price-advisory-title": "💡 Price Advisory",
    "price-advisory-text": "Tomato prices at seasonal peak (+26%). If harvest-ready, sell within 10 days before post-monsoon supply drives prices down.",
    /* modals */
    "modal-contact-title": "Contact Seller",
    "modal-post-title": "Post Your Produce",
    "modal-produce-name": "Produce / Item Name",
    "modal-produce-qty": "Quantity Available (kg)",
    "modal-produce-price": "Asking Price (Rs./kg)",
    "modal-produce-location": "Your Location",
    "modal-post-submit": "Post Listing",
    "modal-contact-name": "Your Name",
    "modal-contact-phone": "Your Phone Number",
    "modal-contact-msg": "Message to Seller",
    "modal-contact-send": "Send Message",

    /* ── Equipment Rental ── */
    "page-rental-sub": "Farm Equipment",
    "page-rental-title": "Equipment Rental",
    "map-btn": "View Provider Map",
    "eq-search-placeholder": "Search equipment by name or type...",
    "eq-dist-label": "Max Distance",
    "filter-all-eq": "All Equipment",
    "filter-tractor": "🚜 Tractor",
    "filter-tiller": "⚙️ Power Tiller",
    "filter-sprayer": "💧 Sprayer",
    "filter-harvester": "🌾 Harvester",
    "eq-count-text": "Showing 4 items near Kavre",
    "btn-book-now": "Book Now",
    "btn-reserve": "Reserve",
    "btn-contact": "Contact",
    "eq-no-results": "No equipment matches your filter",
    "modal-book-title": "Book Equipment",
    "modal-book-date": "Booking Date",
    "modal-book-hours": "Hours / Days Needed",
    "modal-book-note": "Special Instructions",
    "modal-book-confirm": "Confirm Booking",
    "modal-contact-eq-title": "Contact Provider",

    /* ── Farming Resources ── */
    "page-resources-sub": "Knowledge Hub",
    "page-resources-title": "Farming Resources",
    "res-search-placeholder": "Search guides, videos, notices...",
    "res-cat-all": "All Topics",
    "res-cat-soil": "Soil Preparation",
    "res-cat-pest": "Pest & Disease Control",
    "res-cat-water": "Irrigation & Water",
    "res-cat-harvest": "Post-Harvest Handling",
    "res-cat-organic": "Organic Farming",
    "res-cat-govt": "Government Schemes",
    "res-lang-all": "All Languages",
    "fmt-all": "All Formats",
    "fmt-pdf": "📄 PDF Guides",
    "fmt-video": "▶ Video Tutorials",
    "fmt-audio": "🎙 Audio Lessons",
    "fmt-govt": "📢 Govt. Notices",
    "featured-badge": "🌾 Featured Seasonal Guide",
    "featured-season": "Kharif 2081 Season",
    "featured-title": "Monsoon Maize Sowing & Nitrogen Soil Preparation Guide",
    "featured-text": "Learn optimal sowing schedules, nitrogen application rates (120–150 kg N/ha), row spacing, and drainage preparation techniques for Kharif maize cultivation in Bagmati Province hill districts.",
    "featured-read": "Read Guide",
    "featured-download": "Download PDF",
    "featured-duration": "Duration",
    "featured-duration-val": "25 min read",
    "featured-langs": "Languages",
    "featured-langs-val": "EN + नेपाली",
    "featured-downloads": "Downloads",
    "cat1-title": "Crop Cultivation Guides",
    "cat1-count": "40 guides · PDF & Audio",
    "cat1-view-all": "View All 40 Guides →",
    "cat2-title": "Audio/Visual Training Materials",
    "cat2-count": "24 videos · 12 audio",
    "cat2-view-all": "Browse All 36 Items →",
    "cat3-title": "Government Subsidy Notices",
    "cat3-count": "8 active schemes · Bagmati Province",
    "cat3-view-all": "View All 8 Schemes →",
    "recent-heading": "Recently Added Resources",
    "recent-view-all": "View all →",
    "btn-download": "Download",
    "btn-watch": "Watch",
    "btn-read": "Read",

    /* ── Profile ── */
    "page-profile-sub": "Farmer Account",
    "page-profile-title": "Profile & Activity",
    "btn-edit-profile": "Edit Profile",
    "profile-verified": "Verified Farmer Account",
    "profile-verified-sub": "NID + Land Certificate validated",
    "profile-id-label": "Farmer ID",
    "profile-location-label": "Farm Location",
    "profile-location-val": "Kavre District, Bagmati Province",
    "profile-land-label": "Total Land",
    "profile-land-val": "4 Ropani (2,040 m²)",
    "profile-phone-label": "Mobile",
    "profile-member-label": "Member Since",
    "profile-member-val": "Baisakh 2080 (3 seasons)",
    "season-glance": "This Season at a Glance",
    "stat-label-crops": "Active Crops",
    "stat-label-tasks": "Pending Tasks",
    "stat-label-diag": "Diagnostics",
    "stat-label-rental": "Rental Booked",
    "quicknav-heading": "Quick Navigation",
    "quicknav-sub": "Jump to any section",
    "orders-heading": "Orders & Produce Sales",
    "orders-count": "3 recent transactions",
    "rental-hist-heading": "Equipment Rental History",
    "rental-hist-count": "2 bookings this season",
    "diag-hist-heading": "Disease Diagnostic History",
    "diag-hist-count": "2 diagnostics this season",
    "notif-heading": "Notifications & Account Settings",
    "notif-sub": "Control what alerts you receive",
    "notif-disease": "Disease alert notifications",
    "notif-disease-sub": "Blight and pest outbreak warnings",
    "notif-price": "Market price alerts",
    "notif-price-sub": "Significant mandi price movements",
    "notif-weather": "Weather advisories",
    "notif-weather-sub": "Rain, frost, and wind alerts",
    "notif-govt": "Government scheme alerts",
    "notif-govt-sub": "Subsidy deadlines and new programmes",
    "btn-change-password": "Change Password",
    "btn-logout": "Log Out",
    "modal-pw-title": "Change Password",
    "modal-pw-old": "Old Password",
    "modal-pw-new": "New Password",
    "modal-pw-confirm": "Confirm New Password",
    "modal-pw-save": "Update Password",
    "status-completed": "Completed",
    "status-active": "Active",
    "status-delivered": "Delivered",
    "status-returned": "Returned",
    "status-action-needed": "Action Needed",
    "status-resolved": "Resolved",

    /* ── Login ── */
    "login-title": "Sign in to Krishi Sathi",
    "login-sub": "Access your agricultural digital portal",
    "login-email-label": "Email Address",
    "login-pw-label": "Password",
    "login-btn": "Sign In",
    "login-error": "Invalid email or password. Please try again.",
    "login-forgot": "Forgot password?",
    "login-demo-hint": "Demo: ramsharma123@gmail.com / ramsharma@123",

    /* ── Notifications ── */
    "page-notif-title": "Notifications",
    "page-notif-sub": "Unread alerts and expert responses",
    "notif-mark-all": "Mark all as read",
    "notif-filter-all": "All",
    "notif-filter-alerts": "Alerts",
    "notif-filter-expert": "Expert Replies",
    "notif-filter-system": "System",

    /* ── Forecast ── */
    "page-forecast-title": "7-Day Weather Forecast",
    "page-forecast-sub": "Kavre District, Bagmati Province",
    "forecast-today": "Today",
    "forecast-precip": "Precipitation",
    "forecast-wind": "Wind",
    "forecast-humidity": "Humidity",
    "forecast-uv": "UV Index",
    "farming-advisory": "Farming Advisory",

    /* ── Alerts ── */
    "page-alerts-title": "All Active Alerts",
    "page-alerts-sub": "Agricultural, market, and weather advisories",
    "alerts-filter-all": "All Alerts",
    "alerts-filter-disease": "Disease",
    "alerts-filter-weather": "Weather",
    "alerts-filter-price": "Price",

    /* ── Resource Viewer ── */
    "viewer-back": "← Back to Resources",
    "viewer-download": "Download PDF",
    "viewer-share": "Share"
  },

  np: {
    /* ── Brand ── */
    "brand-name": "कृषि साथी",
    "brand-nepali": "Krishi Sathi",
    "brand-tagline": "कृषि डिजिटल पोर्टल",

    /* ── Language Toggle ── */
    "lang-label": "भाषा / Language",

    /* ── Nav Labels ── */
    "nav-dashboard": "ड्यासबोर्ड",
    "nav-crops": "मेरा बाली",
    "nav-disease": "रोग जाँच",
    "nav-forecast": "मौसम पूर्वानुमान",
    "nav-marketplace": "बजार तथा मूल्य",
    "nav-rental": "उपकरण भाडा",
    "nav-resources": "कृषि स्रोतहरू",
    "nav-alerts": "सक्रिय सतर्कता",
    "nav-notifications": "सूचनाहरू",
    "nav-profile": "प्रोफाइल र गतिविधि",
    "nav-menu-heading": "मुख्य मेनु",
    "nav-updates-heading": "अपडेट र खाता",

    /* ── Dashboard ── */
    "page-dashboard-sub": "कृषि डिजिटल पोर्टल",
    "page-dashboard-title": "ड्यासबोर्ड अवलोकन",
    "weather-title": "आजको मौसम र सलाह",
    "weather-location": "काभ्रे जिल्ला, बागमती प्रदेश",
    "weather-temp-label": "तापमान",
    "weather-temp-desc": "आंशिक बादल",
    "weather-humidity-label": "आर्द्रता",
    "weather-humidity-desc": "उच्च आर्द्रता",
    "weather-rain-label": "वर्षाको सम्भावना",
    "weather-rain-desc": "हल्का वर्षा",
    "weather-wind-label": "हावाको गति",
    "weather-wind-desc": "किमी/घन्टा · उत्तरपूर्व",
    "weather-advisory-title": "⚠ मौसमी सलाह",
    "weather-advisory-text": "उच्च आर्द्रता (७८%) ले टमाटरमा डढुवाको खतरा बढाउँछ। ४८ घन्टाभित्र तामाको कवकनाशी छर्किनुहोस्। दिउँसोको वर्षामा काउलीका टाउका छोप्नुहोस्।",
    "quick-actions-heading": "द्रुत कार्यहरू",
    "qa-crops-title": "मेरा बाली",
    "qa-crops-desc": "रोपाइँ व्यवस्थापन, वृद्धि र तालिका ट्र्याक गर्नुहोस्।",
    "qa-crops-link": "बाली हेर्नुहोस् →",
    "qa-disease-title": "रोग जाँच गर्नुहोस्",
    "qa-disease-desc": "AI-आधारित रोग पहिचानका लागि बालीको फोटो अपलोड गर्नुहोस्।",
    "qa-disease-link": "विश्लेषण गर्नुहोस् →",
    "qa-market-title": "किन्नुस् / बेच्नुस्",
    "qa-market-desc": "बजारका सूचीहरू र मण्डी मूल्यहरू हेर्नुहोस्।",
    "qa-market-link": "बजार खोल्नुहोस् →",
    "qa-rental-title": "उपकरण भाडामा लिनुहोस्",
    "qa-rental-desc": "आफ्नो स्थान नजिकका ट्र्याक्टर, टिलर र स्प्रेयर खोज्नुहोस्।",
    "qa-rental-link": "उपकरण खोज्नुहोस् →",
    "stat-active-crops": "सक्रिय बाली",
    "stat-crops-note": "↑ यस सिजनमा १ थपियो",
    "stat-tasks": "बाँकी कार्यहरू",
    "stat-tasks-note": "⚠ २ ढिलो भयो",
    "stat-listings": "बजार सूचीहरू",
    "stat-listings-note": "→ ३ प्रतिक्रिया पेन्डिङ",
    "stat-land": "जमिन क्षेत्र",
    "stat-land-note": "सबै प्लट सक्रिय",
    "alerts-heading": "हालका सतर्कताहरू र सलाहहरू",
    "alerts-view-all": "सबै हेर्नुहोस् →",
    "alert1-type": "रोग सतर्कता",
    "alert1-badge": "उच्च जोखिम",
    "alert1-title": "ढिलो डढुवा चेतावनी — टमाटर बाली",
    "alert1-text": "बनेपा समूहका ३ प्लटमा Phytophthora infestans फेला परेको छ। तत्काल कवकनाशी प्रयोग गर्न सिफारिस।",
    "alert1-time": "२ घन्टा अघि",
    "alert1-link": "अहिले जाँच गर्नुहोस् →",
    "alert2-type": "मौसम अपडेट",
    "alert2-badge": "सलाह",
    "alert2-title": "वर्षाको पूर्वानुमान: १५–३०मिमी (अर्को ७२ घन्टा)",
    "alert2-text": "काभ्रे जिल्लामा मध्यम वर्षाको पूर्वानुमान। सिँचाइ ढिला गर्नुहोस्। काउली पहेलो हुन नदिन छोप्नुहोस्।",
    "alert2-time": "५ घन्टा अघि",
    "alert2-link": "पूर्वानुमान हेर्नुहोस् →",
    "alert3-type": "मूल्य सतर्कता",
    "alert3-badge": "अवसर",
    "alert3-title": "टमाटर मूल्य वृद्धि — रु. ८२/किलो भक्तपुर मण्डी",
    "alert3-text": "थोक टमाटरको मूल्य गत हप्तामा २६% बढेको छ। पाकेको स्टक अहिले बेच्ने विचार गर्नुहोस्।",
    "alert3-time": "८ घन्टा अघि",
    "alert3-link": "मूल्यहरू हेर्नुहोस् →",

    /* ── My Crops ── */
    "page-crops-sub": "बाली व्यवस्थापन",
    "page-crops-title": "मेरा बाली",
    "crop-search-placeholder": "नामले बाली खोज्नुहोस्...",
    "crop-filter-status": "स्थिति",
    "crop-filter-all": "सबै स्थिति",
    "crop-filter-growing": "बढ्दैछ",
    "crop-filter-harvest": "काट्न तयार",
    "crop-filter-planted": "रोपिएको",
    "crop-sort-label": "क्रमबद्ध गर्नुहोस्",
    "crop-sort-planted": "रोप्ने मिति",
    "crop-sort-harvest": "काट्ने मिति",
    "crop-sort-name": "बालीको नाम",
    "crop-add-btn": "+ बाली थप्नुहोस्",
    "crops-season-heading": "सक्रिय बाली — खरिफ २०८१ सिजन",
    "crops-count-text": "४ रोपनीमा ३ बाली दर्ता गरिएको",
    "crop-planted-label": "रोपिएको",
    "crop-harvest-label": "काट्ने",
    "crop-land-label": "जमिन",
    "crop-variety-label": "किसिम",
    "crop-progress-label": "वृद्धि प्रगति",
    "crop-btn-details": "विवरण हेर्नुहोस्",
    "crop-btn-log": "गतिविधि लग गर्नुहोस्",
    "crop-no-results-title": "कुनै बाली फिल्टरसँग मेल खाँदैन",
    "crop-no-results-desc": "स्थिति फिल्टर परिवर्तन गर्नुहोस् वा खोज खाली गर्नुहोस्।",
    "crop-clear-filter": "फिल्टर हटाउनुहोस्",
    "tasks-heading": "आगामी खेती कार्यहरू",
    "tasks-sub": "तपाईंका सबै बालीका तालिकाबद्ध गतिविधिहरू",
    "tasks-add": "+ कार्य थप्नुहोस्",
    "task-col-crop": "बाली",
    "task-col-task": "तालिकाबद्ध कार्य",
    "task-col-due": "समय सीमा",
    "task-col-status": "स्थिति",
    "status-urgent": "⚠ अत्यावश्यक",
    "status-pending": "पेन्डिङ",
    "status-scheduled": "तालिकाबद्ध",
    "status-on-track": "✓ ट्र्याकमा",
    "modal-add-crop-title": "नयाँ बाली थप्नुहोस्",
    "modal-crop-name-label": "बालीको नाम",
    "modal-crop-variety-label": "किसिम",
    "modal-crop-land-label": "जमिन प्लट",
    "modal-crop-planted-label": "रोप्ने मिति",
    "modal-crop-harvest-label": "अपेक्षित काट्ने मिति",
    "modal-crop-area-label": "क्षेत्र (रोपनी)",
    "modal-save": "बाली बचत गर्नुहोस्",
    "modal-cancel": "रद्द गर्नुहोस्",
    "modal-add-task-title": "खेती कार्य थप्नुहोस्",
    "modal-task-crop-label": "बाली छान्नुहोस्",
    "modal-task-desc-label": "कार्यको विवरण",
    "modal-task-due-label": "समय सीमा",
    "modal-task-save": "कार्य बचत गर्नुहोस्",

    /* ── Disease Check ── */
    "page-disease-sub": "AI-संचालित पहिचान",
    "page-disease-title": "बालीको रोग जाँच",
    "disease-advisory": "रोग लागेको पातको स्पष्ट, नजिकको फोटो अपलोड गर्नुहोस्। हाम्रो मोडेल बागमती प्रदेशका २०० भन्दा बढी क्षेत्रीय रोग प्रोफाइलसँग दृश्य लक्षणहरू तुलना गर्दछ।",
    "disease-upload-heading": "रोग लागेको बालीको फोटो अपलोड गर्नुहोस्",
    "dz-heading": "यहाँ बालीको फोटो छोड्नुहोस्",
    "dz-sub": "वा आफ्नो उपकरणबाट फाइल ब्राउज गर्न क्लिक गर्नुहोस्",
    "dz-preview-remove": "फोटो हटाउनुहोस्",
    "crop-select-label": "बालीको प्रकार छान्नुहोस्",
    "severity-label": "देखिएको लक्षणको गम्भीरता",
    "sev-mild": "हल्का",
    "sev-moderate": "मध्यम",
    "sev-severe": "गम्भीर",
    "analyse-btn": "फोटो विश्लेषण गर्नुहोस्",
    "await-heading": "अपलोडको प्रतीक्षामा...",
    "await-text": "बायाँतर्फ फोटो अपलोड गरी 'फोटो विश्लेषण गर्नुहोस्' क्लिक गर्नुहोस्।",
    "loading-heading": "बालीको फोटो विश्लेषण गर्दैछ...",
    "loading-sub": "क्षेत्रीय रोग डेटाबेससँग तुलना गर्दैछ",
    "result-detected": "⚠ रोग पहिचान भयो",
    "result-confidence": "AI विश्वास",
    "result-severity-label": "गम्भीरता",
    "result-spread": "फैलिने जोखिम",
    "result-loss": "बाली नोक्सानी जोखिम",
    "result-about-heading": "यस रोगबारे",
    "result-about-text": "अर्ली ब्लाइट (Alternaria solani) ले पुराना पातमा गाढा खैरो गोलाकार छाप बनाउँछ। काभ्रेमा अहिले उच्च आर्द्रता (७८%) र तातो तापमान (२४°C) ले रोग फैलिने अवस्था छ।",
    "result-remedies-heading": "तत्काल उपाय — ४८ घन्टाभित्र कार्य गर्नुहोस्",
    "remedy1-title": "कपर अक्सिक्लोराइड (Blitox 50 WP @ 3g/L) लगाउनुहोस्",
    "remedy1-text": "पातका दुवै सतहमा छर्किनुहोस्। ७ दिनमा दोहोर्याउनुहोस्। Alternaria विरुद्ध प्रभावकारी।",
    "remedy2-title": "रोगग्रस्त पातहरू हटाउनुहोस् र नष्ट गर्नुहोस्",
    "remedy2-text": "३०% भन्दा बढी दाग भएका पातहरू टिप्नुहोस्। बाहिर जलाउनुहोस्। कम्पोस्ट नगर्नुहोस्।",
    "remedy3-title": "वायु संचार सुधार गर्नुहोस्",
    "remedy3-text": "बोटहरू बाँध्नुहोस्। माटोबाट ३० सेमी तलका पातहरू हटाउनुहोस्। साँझको सिँचाइ नगर्नुहोस्।",
    "remedy4-title": "पोटासियम सिलिकेट फोलियर स्प्रे (2g/L)",
    "remedy4-text": "कोशिका भित्ता मजबुत बनाउँछ। संक्रमणको गम्भीरता १५–२५% घटाउँछ। साप्ताहिक लगाउनुहोस्।",
    "btn-ask-expert": "विशेषज्ञसँग सोध्नुहोस्",
    "btn-save-report": "रिपोर्ट बचत गर्नुहोस्",

    /* ── Marketplace ── */
    "page-market-sub": "व्यापार र मूल्यहरू",
    "page-market-title": "बजार र मण्डी मूल्यहरू",
    "market-post-btn": "उपज पोस्ट गर्नुहोस्",
    "market-search-placeholder": "सूचीहरू, उपज वा सामग्री खोज्नुहोस्...",
    "market-cat-all": "सबै श्रेणी",
    "market-cat-seeds": "बीउ र बिरुवा",
    "market-cat-fertilizer": "मलखाद",
    "market-cat-produce": "ताजा उपज",
    "market-cat-compost": "जैविक कम्पोस्ट",
    "market-loc-all": "सबै स्थान",
    "seg-buy": "कृषि सामग्री किन्नुहोस्",
    "seg-sell": "उपज बेच्नुहोस्",
    "seg-prices": "बजार मूल्यहरू",
    "listings-heading": "सक्रिय सूचीहरू — कृषि सामग्री किन्नुहोस्",
    "listings-count": "काभ्रे नजिकका ३ सूचीहरू देखाइँदैछ",
    "btn-contact-seller": "विक्रेतासँग सम्पर्क गर्नुहोस्",
    "btn-view-details": "विवरण हेर्नुहोस्",
    "btn-edit-listing": "सूची सम्पादन गर्नुहोस्",
    "mandi-title": "आजको मण्डी मूल्य",
    "mandi-sub": "भक्तपुर मण्डी",
    "mandi-updated": "सुबह ६:०० बजे अपडेट",
    "mandi-full-list": "पूर्ण मूल्य सूची हेर्नुहोस् →",
    "price-advisory-title": "💡 मूल्य सलाह",
    "price-advisory-text": "टमाटरको मूल्य सिजनको उच्चतम (+२६%)। यदि काट्न तयार छ भने, मनसुन पछि आपूर्ति बढ्नुअघि १० दिनभित्र बेच्नुहोस्।",
    "modal-contact-title": "विक्रेतासँग सम्पर्क",
    "modal-post-title": "आफ्नो उपज पोस्ट गर्नुहोस्",
    "modal-produce-name": "उपज / वस्तुको नाम",
    "modal-produce-qty": "उपलब्ध मात्रा (किलो)",
    "modal-produce-price": "माग्ने मूल्य (रु./किलो)",
    "modal-produce-location": "तपाईंको स्थान",
    "modal-post-submit": "सूची पोस्ट गर्नुहोस्",
    "modal-contact-name": "तपाईंको नाम",
    "modal-contact-phone": "तपाईंको फोन नम्बर",
    "modal-contact-msg": "विक्रेतालाई सन्देश",
    "modal-contact-send": "सन्देश पठाउनुहोस्",

    /* ── Equipment Rental ── */
    "page-rental-sub": "कृषि उपकरण",
    "page-rental-title": "उपकरण भाडा",
    "map-btn": "प्रदायक नक्सा हेर्नुहोस्",
    "eq-search-placeholder": "नाम वा प्रकारले उपकरण खोज्नुहोस्...",
    "eq-dist-label": "अधिकतम दूरी",
    "filter-all-eq": "सबै उपकरण",
    "filter-tractor": "🚜 ट्र्याक्टर",
    "filter-tiller": "⚙️ पावर टिलर",
    "filter-sprayer": "💧 स्प्रेयर",
    "filter-harvester": "🌾 हार्भेस्टर",
    "eq-count-text": "काभ्रे नजिकका ४ उपकरणहरू देखाइँदैछ",
    "btn-book-now": "अहिले बुक गर्नुहोस्",
    "btn-reserve": "आरक्षण गर्नुहोस्",
    "btn-contact": "सम्पर्क",
    "eq-no-results": "कुनै उपकरण फिल्टरसँग मेल खाँदैन",
    "modal-book-title": "उपकरण बुक गर्नुहोस्",
    "modal-book-date": "बुकिङ मिति",
    "modal-book-hours": "आवश्यक घन्टा / दिन",
    "modal-book-note": "विशेष निर्देशनहरू",
    "modal-book-confirm": "बुकिङ पुष्टि गर्नुहोस्",
    "modal-contact-eq-title": "प्रदायकसँग सम्पर्क",

    /* ── Farming Resources ── */
    "page-resources-sub": "ज्ञान केन्द्र",
    "page-resources-title": "कृषि स्रोतहरू",
    "res-search-placeholder": "गाइड, भिडियो, सूचनाहरू खोज्नुहोस्...",
    "res-cat-all": "सबै विषय",
    "res-cat-soil": "माटो तयारी",
    "res-cat-pest": "कीट र रोग नियन्त्रण",
    "res-cat-water": "सिँचाइ र पानी",
    "res-cat-harvest": "कटाइ पश्चात व्यवस्थापन",
    "res-cat-organic": "जैविक खेती",
    "res-cat-govt": "सरकारी योजनाहरू",
    "res-lang-all": "सबै भाषा",
    "fmt-all": "सबै ढाँचा",
    "fmt-pdf": "📄 PDF गाइडहरू",
    "fmt-video": "▶ भिडियो ट्युटोरियलहरू",
    "fmt-audio": "🎙 अडियो पाठहरू",
    "fmt-govt": "📢 सरकारी सूचनाहरू",
    "featured-badge": "🌾 विशेष मौसमी गाइड",
    "featured-season": "खरिफ २०८१ सिजन",
    "featured-title": "मनसुन मकै बुवाई र नाइट्रोजन माटो तयारी गाइड",
    "featured-text": "बागमती प्रदेशका पहाडी जिल्लाहरूमा खरिफ मकै खेतीका लागि इष्टतम बुवाइ तालिका, नाइट्रोजन अनुप्रयोग दर (१२०–१५० किलो N/हेक्टर), पङ्क्ति दूरी, र निकासी तयारी प्रविधि सिक्नुहोस्।",
    "featured-read": "गाइड पढ्नुहोस्",
    "featured-download": "PDF डाउनलोड गर्नुहोस्",
    "featured-duration": "अवधि",
    "featured-duration-val": "२५ मिनेट पढाइ",
    "featured-langs": "भाषाहरू",
    "featured-langs-val": "अंग्रेजी + नेपाली",
    "featured-downloads": "डाउनलोडहरू",
    "cat1-title": "बाली खेती गाइडहरू",
    "cat1-count": "४० गाइड · PDF र अडियो",
    "cat1-view-all": "सबै ४० गाइड हेर्नुहोस् →",
    "cat2-title": "श्रव्य/दृश्य प्रशिक्षण सामग्री",
    "cat2-count": "२४ भिडियो · १२ अडियो",
    "cat2-view-all": "सबै ३६ सामग्री हेर्नुहोस् →",
    "cat3-title": "सरकारी अनुदान सूचनाहरू",
    "cat3-count": "८ सक्रिय योजनाहरू · बागमती प्रदेश",
    "cat3-view-all": "सबै ८ योजनाहरू हेर्नुहोस् →",
    "recent-heading": "हालसालै थपिएका स्रोतहरू",
    "recent-view-all": "सबै हेर्नुहोस् →",
    "btn-download": "डाउनलोड",
    "btn-watch": "हेर्नुहोस्",
    "btn-read": "पढ्नुहोस्",

    /* ── Profile ── */
    "page-profile-sub": "किसान खाता",
    "page-profile-title": "प्रोफाइल र गतिविधि",
    "btn-edit-profile": "प्रोफाइल सम्पादन",
    "profile-verified": "प्रमाणित किसान खाता",
    "profile-verified-sub": "NID + जग्गा प्रमाणपत्र सत्यापित",
    "profile-id-label": "किसान ID",
    "profile-location-label": "खेत स्थान",
    "profile-location-val": "काभ्रे जिल्ला, बागमती प्रदेश",
    "profile-land-label": "कुल जमिन",
    "profile-land-val": "४ रोपनी (२,०४० वर्गमिटर)",
    "profile-phone-label": "मोबाइल",
    "profile-member-label": "सदस्य भएको",
    "profile-member-val": "वैशाख २०८० (३ सिजन)",
    "season-glance": "यस सिजनको सारांश",
    "stat-label-crops": "सक्रिय बाली",
    "stat-label-tasks": "बाँकी कार्यहरू",
    "stat-label-diag": "निदानहरू",
    "stat-label-rental": "भाडा बुक",
    "quicknav-heading": "द्रुत नेभिगेसन",
    "quicknav-sub": "कुनै पनि खण्डमा जानुहोस्",
    "orders-heading": "अर्डर र उपज बिक्री",
    "orders-count": "३ हालका लेनदेनहरू",
    "rental-hist-heading": "उपकरण भाडा इतिहास",
    "rental-hist-count": "यस सिजनमा २ बुकिङ",
    "diag-hist-heading": "रोग निदान इतिहास",
    "diag-hist-count": "यस सिजनमा २ निदान",
    "notif-heading": "सूचना र खाता सेटिङहरू",
    "notif-sub": "तपाईंले के सतर्कताहरू प्राप्त गर्ने नियन्त्रण गर्नुहोस्",
    "notif-disease": "रोग सतर्कता सूचनाहरू",
    "notif-disease-sub": "डढुवा र कीट प्रकोप चेतावनी",
    "notif-price": "बजार मूल्य सतर्कताहरू",
    "notif-price-sub": "महत्त्वपूर्ण मण्डी मूल्य परिवर्तनहरू",
    "notif-weather": "मौसम सलाहहरू",
    "notif-weather-sub": "वर्षा, हिमपात र हावा सतर्कताहरू",
    "notif-govt": "सरकारी योजना सतर्कताहरू",
    "notif-govt-sub": "अनुदान समय सीमा र नयाँ कार्यक्रमहरू",
    "btn-change-password": "पासवर्ड परिवर्तन गर्नुहोस्",
    "btn-logout": "बाहिर निस्कनुहोस्",
    "modal-pw-title": "पासवर्ड परिवर्तन गर्नुहोस्",
    "modal-pw-old": "पुरानो पासवर्ड",
    "modal-pw-new": "नयाँ पासवर्ड",
    "modal-pw-confirm": "नयाँ पासवर्ड पुष्टि गर्नुहोस्",
    "modal-pw-save": "पासवर्ड अपडेट गर्नुहोस्",
    "status-completed": "सम्पन्न",
    "status-active": "सक्रिय",
    "status-delivered": "डेलिभर भयो",
    "status-returned": "फिर्ता भयो",
    "status-action-needed": "कार्य आवश्यक",
    "status-resolved": "समाधान भयो",

    /* ── Login ── */
    "login-title": "कृषि साथीमा साइन इन गर्नुहोस्",
    "login-sub": "आफ्नो कृषि डिजिटल पोर्टल एक्सेस गर्नुहोस्",
    "login-email-label": "इमेल ठेगाना",
    "login-pw-label": "पासवर्ड",
    "login-btn": "साइन इन गर्नुहोस्",
    "login-error": "गलत इमेल वा पासवर्ड। कृपया पुनः प्रयास गर्नुहोस्।",
    "login-forgot": "पासवर्ड बिर्सनुभयो?",
    "login-demo-hint": "डेमो: ramsharma123@gmail.com / ramsharma@123",

    /* ── Notifications ── */
    "page-notif-title": "सूचनाहरू",
    "page-notif-sub": "अपठित सतर्कताहरू र विशेषज्ञ प्रतिक्रियाहरू",
    "notif-mark-all": "सबै पठित चिन्ह लगाउनुहोस्",
    "notif-filter-all": "सबै",
    "notif-filter-alerts": "सतर्कताहरू",
    "notif-filter-expert": "विशेषज्ञ जवाफहरू",
    "notif-filter-system": "प्रणाली",

    /* ── Forecast ── */
    "page-forecast-title": "७-दिने मौसम पूर्वानुमान",
    "page-forecast-sub": "काभ्रे जिल्ला, बागमती प्रदेश",
    "forecast-today": "आज",
    "forecast-precip": "वर्षा",
    "forecast-wind": "हावा",
    "forecast-humidity": "आर्द्रता",
    "forecast-uv": "UV सूचकाङ्क",
    "farming-advisory": "खेती सलाह",

    /* ── Alerts ── */
    "page-alerts-title": "सबै सक्रिय सतर्कताहरू",
    "page-alerts-sub": "कृषि, बजार र मौसम सलाहहरू",
    "alerts-filter-all": "सबै सतर्कताहरू",
    "alerts-filter-disease": "रोग",
    "alerts-filter-weather": "मौसम",
    "alerts-filter-price": "मूल्य",

    /* ── Resource Viewer ── */
    "viewer-back": "← स्रोतहरूमा फर्कनुहोस्",
    "viewer-download": "PDF डाउनलोड गर्नुहोस्",
    "viewer-share": "साझेदारी गर्नुहोस्"
  }
};

/* ──────────────────────────────────────────────
   setLang(lang) — updates every [data-i18n] on the page
   HCI: Immediate feedback — no page reload needed
────────────────────────────────────────────── */
function setLang(lang) {
  const dict = KS_DICT[lang];
  if (!dict) return;

  // Swap language toggle button active states
  const btnEN = document.getElementById('langEN');
  const btnNP = document.getElementById('langNP');
  if (btnEN) {
    btnEN.classList.toggle('active', lang === 'en');
    if (lang === 'en') {
      btnEN.classList.remove('text-zinc-500');
    } else {
      btnEN.classList.add('text-zinc-500');
    }
  }
  if (btnNP) {
    btnNP.classList.toggle('active', lang === 'np');
    if (lang === 'np') {
      btnNP.classList.remove('text-zinc-500');
    } else {
      btnNP.classList.add('text-zinc-500');
    }
  }

  // Update all elements that carry a data-i18n key
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  // HCI: Mukta font for Nepali Devanagari legibility
  if (lang === 'np') {
    document.body.classList.add('font-mukta');
    document.body.classList.remove('font-inter');
  } else {
    document.body.classList.remove('font-mukta');
    document.body.classList.add('font-inter');
  }

  // Persist preference
  try {
    sessionStorage.setItem('ks_lang', lang);
    localStorage.setItem('ks_lang', lang);
  } catch (e) {}
}

/* ──────────────────────────────────────────────
   Modal Helpers — shared across all pages
────────────────────────────────────────────── */
function openModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  // Focus first focusable element inside modal (accessibility)
  const focusable = m.querySelector('input, button, select, textarea');
  if (focusable) setTimeout(() => focusable.focus(), 60);
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.add('hidden');
  document.body.style.overflow = '';
}

// Close modal on backdrop click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.add('hidden');
    document.body.style.overflow = '';
  }
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(m => {
      m.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
});

/* ──────────────────────────────────────────────
   Auto-restore language on page load
────────────────────────────────────────────── */
function initLang() {
  const saved = sessionStorage.getItem('ks_lang') || localStorage.getItem('ks_lang');
  if (saved) setLang(saved);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}
