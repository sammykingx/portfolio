import { BaseComponent } from '../baseComponents.js';

export class AppFooter extends BaseComponent {
    connectedCallback() {
        const now = new Date();
        const year = now.getFullYear();

        const watTime = now.toLocaleTimeString('en-US', {
            timeZone: 'Africa/Lagos',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
        const [hours, minutes] = watTime.split(':');

        this.render(`
            <footer class="relative pt-20 pb-10 px-5 overflow-hidden border-t border-white/5 bg-dark">
                <div class="max-w-7xl mx-auto px-6 relative z-10">
                    <!-- Main Grid -->
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
                        <!-- Brand -->
                        <div class="col-span-2 lg:col-span-1 flex flex-col items-start" data-aos="fade-up">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-8 h-8 bg-white rounded flex items-center justify-center">
                                    <span class="text-black font-heading font-extrabold text-xs">S</span>
                                </div>
                                <span class="font-heading text-xs font-extrabold tracking-tight uppercase">Sammy Kingx</span>
                            </div>
                            <p class="text-gray-500 text-sm leading-relaxed">
                                Partner with me to turn your vision into a competitive advantage. I help companies unlock growth through smart technology and strategic planning.
                            </p>
                        </div>

                        <!-- Sitemap -->
                        <div class="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="100">
                            <span class="text-[10px] text-white font-black uppercase tracking-[0.2em] mb-2">Sitemap</span>
                            <a href="/projects" class="footer-link text-[11px]">Projects</a>
                            <a href="/case-studies" class="footer-link text-[11px]">Case Studies</a>
                            <a href="/articles" class="footer-link text-[11px]">Articles</a>
                            <a href="#solutions" class="footer-link text-[11px]">Partnership</a>
                        </div>

                        <!-- Connect -->
                        <div class="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
                            <span class="text-[10px] text-white font-black uppercase tracking-[0.2em] mb-2">Connect</span>
                            <a href="https://www.linkedin.com/in/iyebhora-samuel/" target="_blank" class="footer-link text-[11px]">LinkedIn</a>
                            <a href="https://instagram.com/sammykingx18" target="_blank" class="footer-link text-[11px]">Instagram</a>
                            <a href="https://x.com/sammykingx18" target="_blank" class="footer-link text-[11px]">X / Twitter</a>
                            <a href="https://youtube.com/@sammykingx" target="_blank" class="footer-link text-[11px]">Youtube</a>
                        </div>

                        <!-- Global Presence -->
                        <div class="sm:col-span-2 lg:col-span-1 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
                            <span class="text-[10px] text-white font-black uppercase tracking-[0.2em]">Global Presence</span>
                            <div class="group">
                                <span class="text-[9px] text-accent font-mono uppercase tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">Hub 01 //</span>
                                <span class="text-[11px] text-gray-400 ml-2 font-medium">Lagos, Nigeria (WAT)</span>
                            </div>
                            <div class="group">
                                <span class="text-[9px] text-accent font-mono uppercase tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">Hub 02 //</span>
                                <span class="text-[11px] text-gray-400 ml-2 font-medium">London, UK (GMT)</span>
                            </div>
                            <div class="group">
                                <span class="text-[9px] text-accent font-mono uppercase tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">Hub 03 //</span>
                                <span class="text-[11px] text-gray-400 ml-2 font-medium">North America (EST)</span>
                            </div>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div class="w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent my-16"></div>

                    <!-- Bottom Bar -->
                    <div class="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <p class="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-bold">
                                &copy; ${year} Sammy Kingx &mdash; Built for Scale
                            </p>
                            <div class="hidden md:block h-3 w-px bg-white/10"></div>
                            <p class="text-[9px] text-gray-700 uppercase tracking-[0.2em]">
                                Local Time: <span id="footer-time" class="text-gray-500">${hours}:${minutes} WAT</span>
                            </p>
                        </div>
                        
                        <div class="flex items-center gap-4 px-4 py-2 bg-white/2 border border-white/5 rounded-full">
                            <div class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </div>
                            <span class="text-[9px] text-gray-500 font-black uppercase tracking-[0.3em]">System Uptime: 99.9%</span>
                        </div>
                    </div>
                </div>

                <!-- Background Decoration -->
                <div class="absolute bottom-0 left-0 w-full font-heading text-[15vw] font-black text-white/1 select-none pointer-events-none leading-none translate-y-1/4">
                    SAMMY KINGX
                </div>
            </footer>
        `);
    }
}

if (!customElements.get('app-footer')) {
    customElements.define('app-footer', AppFooter);
}