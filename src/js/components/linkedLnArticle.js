import { BaseComponent } from './baseComponents.js';


export class LinkedInArticle extends BaseComponent {
    connectedCallback() {
        const title = this.getAttribute('title');
        const date = this.getAttribute('date');
        const excerpt = this.getAttribute('excerpt');
        const url = this.getAttribute('url');
        const category = this.getAttribute('category') || 'Technical Strategy';

        this.render(`
            <div class="article-row group relative border-b border-white/10 hover:border-accent/40 transition-colors duration-500" data-aos="fade-up">
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="block py-12 px-4 md:px-0">
                    <div class="flex flex-col md:flex-row md:items-baseline gap-8 md:gap-16">
                        
                        <!-- Date & Category -->
                        <div class="w-32 shrink-0">
                            <span class="block text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-2">${date}</span>
                            <span class="block text-[9px] font-bold text-accent uppercase tracking-widest">${category}</span>
                        </div>

                        <!-- Content -->
                        <div class="grow max-w-2xl">
                            <h3 class="text-xl md:text-2xl font-medium tracking-tight text-white group-hover:text-accent transition-colors duration-500 mb-4 uppercase">
                                ${title}
                            </h3>
                            <p class="text-gray-500 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-500">
                                ${excerpt}
                            </p>
                        </div>

                        <!-- Action Indicator -->
                        <div class="hidden md:flex items-center justify-end grow text-right">
                            <div class="article-arrow opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 transition-all duration-500 flex items-center gap-3">
                                <span class="text-[10px] font-black uppercase tracking-widest text-white">Read on LinkedIn</span>
                                <i class="ph ph-arrow-up-right text-xl text-accent"></i>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `);
    }
}

if (!customElements.get('lnkd-article')) {
    customElements.define('lnkd-article', LinkedInArticle);
}