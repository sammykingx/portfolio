import { BaseComponent } from '../baseComponents.js';

export class AppFooter extends BaseComponent {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.render(`
            <footer class="relative pt-24 pb-12 overflow-hidden border-t border-white/5 bg-dark">
                <div class="max-w-7xl mx-auto px-6 relative">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <div class="flex items-center gap-3 mb-8">
                                <div class="w-8 h-8 bg-white rounded flex items-center justify-center">
                                    <span class="text-black font-heading font-extrabold text-xs">S</span>
                                </div>
                                <span class="font-heading text-xs font-extrabold tracking-tight uppercase">Sammy Kingx</span>
                            </div>
                            <p class="text-gray-500 text-sm leading-relaxed max-w-sm">
                                Engineering lead and product architect focused on building high-fidelity SaaS ecosystems. 
                                Operating at the intersection of robust backend infrastructure and premium user experience.
                            </p>
                        </div>
                        <div class="lg:col-span-3 grid grid-cols-2 gap-8">
                            <div class="flex flex-col gap-4">
                                <span class="text-[10px] text-white font-bold uppercase tracking-widest">Sitemap</span>
                                <a href="#hero" class="footer-link">Home</a>
                                <a href="#projects" class="footer-link">Systems</a>
                                <a href="#philosophy" class="footer-link">Logic</a>
                                <a href="#solutions" class="footer-link">Partnership</a>
                            </div>
                            <div class="flex flex-col gap-4">
                                <span class="text-[10px] text-white font-bold uppercase tracking-widest">Connect</span>
                                <a href="#" class="footer-link">LinkedIn</a>
                                <a href="#" class="footer-link">Instagram</a>
                                <a href="#" class="footer-link">X / Twitter</a>
                            </div>
                        </div>
                        <div class="lg:col-span-4 lg:text-right">
                            <span class="text-[10px] text-white font-bold uppercase tracking-widest mb-6 block">Global Presence</span>
                            <div class="space-y-4">
                                <div>
                                    <span class="text-[10px] text-accent font-mono uppercase tracking-tighter">Hub 01 //</span>
                                    <span class="text-xs text-gray-400 ml-2">Lagos, Nigeria (WAT)</span>
                                </div>
                                <div>
                                    <span class="text-[10px] text-accent font-mono uppercase tracking-tighter">Hub 02 //</span>
                                    <span class="text-xs text-gray-400 ml-2">London, UK (GMT)</span>
                                </div>
                                <div>
                                    <span class="text-[10px] text-accent font-mono uppercase tracking-tighter">Hub 03 //</span>
                                    <span class="text-xs text-gray-400 ml-2">North America (EST)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-divider"></div>
                    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p class="text-[10px] text-gray-600 uppercase tracking-widest pt-5 md:pt-0">
                            &copy; ${year} Sammy Kingx — Built for Scale
                        </p>
                        <div class="flex items-center gap-4">
                            <div class="h-1 w-1 rounded-full bg-accent"></div>
                            <span class="text-[9px] text-gray-600 font-bold uppercase tracking-[0.3em]">System Uptime: 99.9%</span>
                        </div>
                    </div>
                </div>
            </footer>
        `);
        //this.dispatchEvent(new CustomEvent('footer-rendered', { bubbles: true }));
    }
}

if (!customElements.get('app-footer')) {
    customElements.define('app-footer', AppFooter);
}