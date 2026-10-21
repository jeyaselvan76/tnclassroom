// File: /whatsapp-widget.js
(function () {
    // 1. UPDATE YOUR GROUP INVITE LINK HERE IN THE FUTURE
    const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/EXeIlEkacgIGolsUZ9S9sQ";

    // 2. Build the Floating Widget HTML
    function injectWhatsAppWidget() {
        if (document.getElementById('floating-whatsapp-widget')) return;

        const widget = document.createElement('div');
        widget.id = 'floating-whatsapp-widget';
        widget.className = 'fixed bottom-6 left-6 z-50 flex items-center group';

        widget.innerHTML = `
            <a href="${WHATSAPP_GROUP_URL}" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-3.5 pr-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 border-2 border-white select-none"
               title="Join TNTET Study Group">
                <i class="fa-brands fa-whatsapp text-2xl animate-pulse"></i>
                <div class="flex flex-col text-left leading-tight">
                    <span class="text-[10px] font-bold uppercase text-emerald-100 tracking-wider">Join Group</span>
                    <span class="text-xs font-black">TNTET Community</span>
                </div>
            </a>
        `;

        document.body.appendChild(widget);
    }

    // 3. Mount automatically on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectWhatsAppWidget);
    } else {
        injectWhatsAppWidget();
    }
})();
