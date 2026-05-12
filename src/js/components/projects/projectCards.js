import { BaseComponent } from '../baseComponents.js';

    
export class ProjectCard extends BaseComponent {
    connectedCallback() {
        const title = this.getAttribute('title');
        const sector = this.getAttribute('sector');
        const valuation = this.getAttribute('valuation');
        const projectRole = this.getAttribute('project-role');
        const description = this.getAttribute('description');
        const tech = this.getAttribute('tech').split(',');
        const image = this.getAttribute('image');
        const link = this.getAttribute('link');
        const isReversed = this.hasAttribute('reversed');

        this.render(`
            <section class="py-20 border-b border-white/5 overflow-hidden">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isReversed ? 'lg:direction-rtl' : ''}">
                        
                        <!-- Content Block -->
                        <div class="lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}" data-aos="fade-up">
                            <div class="flex items-center gap-4 mb-6">
                                <span class="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">${sector}</span>
                                <div class="h-px w-8 bg-white/20"></div>
                                <span class="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Status: Sold</span>
                            </div>
                            
                            <h2 class="font-heading text-2xl md:text-4xl font-black mb-5 tracking-tighter">
                                ${title}
                            </h2>
                            
                            <p class="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                                ${description}
                            </p>

                            <div class="grid grid-cols-2 gap-6 mb-10">
                                <div>
                                    <span class="block text-[10px] uppercase text-gray-600 mb-1 font-bold">Involved Volume</span>
                                    <span class="text-lg font-mono text-white">${valuation}</span>
                                </div>
                                <div>
                                    <span class="block text-[10px] uppercase text-gray-600 mb-1 font-bold">Role</span>
                                    <span class="text-base md:text-lg text-white">${projectRole}</span>
                                </div>
                            </div>

                            <div class="flex flex-wrap gap-2 mb-10">
                                ${tech.map(t => `<span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-gray-400">${t.trim()}</span>`).join('')}
                            </div>

                            <a href="${link}" class="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
                                View Deep Dive 
                                <span class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">→</span>
                            </a>
                        </div>

                        <!-- Visual Block -->
                        <div class="lg:col-span-7 relative ${isReversed ? 'lg:order-1' : ''}" data-aos="fade-left">
                            <div class="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-dark-soft aspect-video shadow-2xl tilt-card">
                                <img src="${image}" alt="${title}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
                                <div class="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent"></div>
                            </div>
                            <!-- Decorative Background Element -->
                            <div class="absolute -top-10 -right-10 w-64 h-64 bg-accent/5 blur-[100px] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>
        `);
    }
}

if (!customElements.get('project-card')) {
    customElements.define('project-card', ProjectCard);
}
