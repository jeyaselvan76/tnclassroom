<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TNTET Psychology & Child Development Study Center | TN Classroom</title>
<meta name="description" content="TNTET Child Development, Pedagogy, and Educational Psychology study materials, theoretical notes, and interactive practice tests in Tamil and English.">

<script src="/tailwind.js"></script>
<link rel="stylesheet" href="/fontawesome.css">

<script async src="https://www.googletagmanager.com/gtag/js?id=G-MZZ985WL51"></script>
<script>
window.dataLayer = window.location.hostname === 'localhost' ? [] : (window.dataLayer || []);
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-MZZ985WL51', {
    page_path: window.location.pathname,
     cookie_flags: 'max-age=7200;Secure;SameSite=None'
});
</script>

<!-- Asynchronous MathJax configuration for modal reader -->
<script>
window.MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], processEscapes: true },
    options: { skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'] }
};
</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<style>
.dropdown-menu { z-index: 50 !important; pointer-events: none; }
.dropdown-active { opacity: 1 !important; visibility: visible !important; transform: translateY(0) !important; z-index: 50 !important; pointer-events: auto !important; }
.tamil-fix { font-family: 'Segoe UI', 'Latha', 'Apple Tamil', sans-serif !important; }
</style>
</head>
<body class="bg-gray-50 text-gray-900 flex flex-col min-h-screen font-sans relative">

<div id="navbar-placeholder"></div>

<main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

<!-- HEADER BLOCK WITH GOOGLE AUTH PROFILE & PLAN STATUS -->
<div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 class="text-2xl font-black text-slate-900 sm:text-3xl flex items-center gap-2">
<span class="p-2 bg-purple-50 text-purple-600 rounded-xl"><i class="fa-solid fa-brain"></i></span>
TNTET Educational Psychology
</h1>
<p class="text-slate-500 text-sm mt-2 leading-relaxed max-w-3xl">
Master Child Development, Pedagogy, and Educational Psychology for the TNTET Examination. Access structured sessions, native lecture notes modules, video content archives, and practice evaluations.
</p>
</div>

<!-- Dynamic Google Login & Subscription Badge -->
<div id="auth-container" class="shrink-0 flex items-center">
<!-- State 1: Signed Out -->
<button id="btn-login" onclick="handleGoogleSignIn()" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer">
<i class="fa-brands fa-google text-sm"></i>
<span>Sign In</span>
</button>

<!-- State 2: Signed In User Badge -->
<div id="user-profile-badge" class="hidden items-center gap-2.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
<div class="flex flex-col text-left">
<span id="user-display-name" class="text-xs font-bold text-slate-800 leading-tight">Candidate</span>
<span id="user-plan-badge" class="text-[9px] font-black uppercase text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded w-fit mt-0.5">Free</span>
</div>
<button onclick="handleSignOut()" class="w-7 h-7 rounded-lg bg-white hover:bg-red-50 text-slate-400 hover:text-red-500 border border-slate-200 flex items-center justify-center transition cursor-pointer" title="Sign Out">
<i class="fa-solid fa-arrow-right-from-bracket text-xs"></i>
</button>
</div>
</div>
</div>

<!-- CONDENSED TNTET PSYCHOLOGY OVERVIEW BLOCK -->
<article class="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm space-y-3 select-text text-slate-600 leading-relaxed text-xs sm:text-sm">
<div class="flex items-center gap-2 font-black uppercase tracking-wider text-purple-600 text-xs">
<i class="fa-solid fa-graduation-cap"></i>
<span>TNTET Child Development &amp; Pedagogy</span>
</div>
<p>
Educational Psychology (<span class="tamil-fix">கல்வி உளவியல்</span>) forms the core foundation for both Paper 1 and Paper 2 of the Tamil Nadu Teacher Eligibility Test. This portal offers bilingual study notes, developmental theories, and scenario-based questions aligned with TRB benchmarks.
</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-medium text-slate-700">
<div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
<strong class="text-purple-600 block">Theories &amp; Development (<span class="tamil-fix">வளர்ச்சிக் கோட்பாடுகள்</span>)</strong>
Piaget, Vygotsky, Kohlberg, Erikson, and inclusive classroom practices.
</div>
<div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
<strong class="text-indigo-600 block">Learning &amp; Intelligence (<span class="tamil-fix">கற்றல் மற்றும் நுண்ணறிவு</span>)</strong>
Conditioning theories, motivation concepts, defense mechanisms, and assessment.
</div>
</div>
<p class="text-[11px] text-slate-400 italic pt-1">
Select a topic below to access unit summaries, previous TRB questions, and timed mock tests.
</p>
</article>

<!-- CATEGORY FILTER BUTTONS -->
<div class="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-3">
<span class="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">
<i class="fa-solid fa-layer-group text-purple-600 mr-1"></i> Select Category / பிரிவு
</span>
<div id="category-tabs-container" class="flex flex-wrap gap-2"></div>
</div>

<!-- SESSIONS CARD DECK -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[600px] content-start" id="sessions-master-deck">
<div class="col-span-full text-center py-16 text-slate-400 font-medium text-xs bg-white border border-slate-100 rounded-2xl shadow-sm h-fit">
<i class="fa-solid fa-circle-notch fa-spin text-purple-500 mr-1.5"></i> Mapping educational database tracks...
</div>
</div>
</main>

<!-- [Option A] UNIFIED GPAY / UPI SUBSCRIPTION MODAL (₹545 FOR ALL SUBJECTS) -->
<div id="paywall-modal" class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden">
<div class="bg-white rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">

<!-- Modal Header -->
<div class="flex justify-between items-center">
<span class="text-[10px] font-black uppercase text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100 flex items-center gap-1">
<i class="fa-solid fa-crown text-amber-500"></i> TNTET All-Subject PRO Pass
</span>
<button onclick="closePaywallModal()" class="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition cursor-pointer">
<i class="fa-solid fa-xmark text-xs"></i>
</button>
</div>

<div>
<h3 class="font-black text-slate-900 text-lg">Unlock All Subjects &amp; Sessions</h3>
<p class="text-xs text-slate-500 mt-1 leading-relaxed">
One-time access pass. Unlocks all 20+ Psychology sessions, plus Tamil, English, Maths &amp; Science study materials and interactive quiz tests.
</p>
</div>

<!-- Pricing Banner -->
<div class="bg-purple-50/70 border border-purple-100 rounded-2xl p-3.5 text-center">
<span class="text-xs font-bold text-slate-400 line-through">₹1,499</span>
<div class="text-2xl font-black text-purple-900 leading-tight">₹545 <span class="text-xs font-bold text-slate-500">/ Complete Access</span></div>
<p class="text-[10px] font-bold text-emerald-700 mt-1">Full Syllabus Unlocked Until TNTET Exam</p>
</div>

<!-- UPI QR & Details -->
<div class="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
<span class="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Scan with GPay or Any UPI App</span>

<div class="bg-white p-2 rounded-xl border border-slate-200 inline-block shadow-sm">
<img id="gpay-qr-code"
src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=upi%3A%2F%2Fpay%3Fpa%3D9865456123%40axl%26pn%3DTN%20Classroom%26am%3D545%26cu%3DINR%26tn%3DTNTET%20All%20Subject%20PRO"
alt="GPay QR Code ₹545"
class="w-36 h-36 mx-auto">
</div>

<!-- Copy UPI ID -->
<div class="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs">
<div class="text-left font-mono font-bold text-slate-700 truncate mr-2" id="upi-id-label">
9865456123@axl
</div>
<button onclick="copyUpiId()" class="text-purple-600 hover:text-purple-800 text-xs font-black shrink-0 cursor-pointer flex items-center gap-1">
<i class="fa-regular fa-copy"></i> COPY
</button>
</div>
</div>

<!-- Candidate Mobile & Email Verification Form -->
<div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-left space-y-2">
<div class="text-[11px] font-bold text-slate-500 flex items-center justify-between">
<span>Candidate Email:</span>
<span id="modal-user-email" class="font-mono text-purple-700 truncate max-w-[170px]">Not signed in</span>
</div>
<div>
<label for="subscriber-mobile" class="block text-[11px] font-bold text-slate-700 mb-1">
WhatsApp / Mobile Number *
</label>
<input type="tel"
id="subscriber-mobile"
maxlength="10"
placeholder="10-digit mobile number"
class="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 outline-none focus:border-purple-600 transition">
</div>
</div>

<!-- Action Buttons -->
<div class="space-y-2 pt-1">
<!-- Mobile / Android Direct Intent Trigger -->
<a id="btn-upi-intent"
href="upi://pay?pa=9865456123@axl&pn=TN%20Classroom&am=545&cu=INR&tn=TNTET%20All%20Subject%20PRO"
class="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2 transition md:hidden">
<i class="fa-brands fa-google-pay text-lg text-amber-400"></i>
<span>Pay ₹545 via GPay / UPI App</span>
</a>

<!-- WhatsApp Verification Trigger -->
<button onclick="sendWhatsAppConfirmation()" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2 transition cursor-pointer">
<i class="fa-brands fa-whatsapp text-sm"></i>
<span>I Have Paid — Send Screenshot</span>
</button>

<button onclick="closePaywallModal()" class="text-xs text-slate-400 font-bold hover:underline cursor-pointer block w-full pt-1">
Continue with Free Session
</button>
</div>
</div>
</div>

<!-- TOAST NOTIFICATION CONTAINER -->
<div id="toast-notification" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2.5 text-xs font-bold transition-all duration-300 pointer-events-none opacity-0 translate-y-4">
<i class="fa-solid fa-circle-check text-purple-400 text-sm"></i>
<span id="toast-msg">Notification</span>
</div>

<!-- MATERIAL READER MODAL -->
<div id="material-modal" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end invisible opacity-0 transition-all duration-300" onclick="closeMaterialModal()">
<div class="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col translate-x-full transition-transform duration-300 text-slate-900" id="material-drawer-content" onclick="event.stopPropagation()">

<div class="p-4 border
