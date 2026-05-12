import { BaseComponent } from '../baseComponents.js';


export class CaseStudyCard extends BaseComponent {
    connectedCallback() {
        const title = this.getAttribute('title');
        const subtitle = this.getAttribute('subtitle'); // e.g., "Architecture & Scalability"
        const problem = this.getAttribute('problem'); // e.g., "Fragmented booking operations"
        const slug = this.getAttribute('slug');
        const size = this.getAttribute('size') || 'small'; 

        // 'large' for bento spanning
        const sizeClasses = size === 'large'
            ? 'md:col-span-2 md:row-span-2 min-h-[350px] md:min-h-[400px]'
            : 'col-span-1 min-h-[280px] md:min-h-[300px]';

        this.render(`
            <a href="/case-studies/${slug}" 
                class="case-study-card group relative flex flex-col justify-between p-6 md:p-10 rounded-4xl md:rounded-4xl bg-white/2 border border-white/10 overflow-hidden ${sizeClasses}"
               data-aos="fade-up">
                
                <div class="glow-element absolute -top-20 -right-20 w-64 h-64 bg-accent/5 blur-[100px] pointer-events-none group-hover:bg-accent/20 transition-all duration-700"></div>
                
                <div class="relative pt-10">
                    <h3 class="${size === 'large' ? 'text-xl md:text-2xl' : 'text-base md:text-lg'} font-black tracking-tighter text-white mb-4 md:mb-6 uppercase leading-[1.1]">
                        ${title}
                    </h3>
                    
                    <p class="text-gray-500 text-xs md:text-sm leading-relaxed max-w-full md:max-w-75 group-hover:text-gray-400 transition-colors">
                        <span class="text-accent/60 font-bold uppercase text-[9px] md:text-[10px] block mb-1 md:mb-2 tracking-widest">The Challenge</span>
                        ${problem}
                    </p>
                </div>

                <div class="relative z-10 mt-8 md:mt-10 pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between">
                    <span class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">
                        Deconstruct Logic
                    </span>
                    <div class="arrow-container flex items-center gap-2">
                        <div class="h-px w-0 bg-accent group-hover:w-6 md:group-hover:w-8 transition-all duration-500"></div>
                        <i class="ph ph-arrow-right text-lg md:text-xl text-gray-600 group-hover:text-accent group-hover:translate-x-1 transition-all"></i>
                    </div>
                </div>
            </a>
        `);
    }
}

if (!customElements.get('case-study-card')) {
    customElements.define('case-study-card', CaseStudyCard);
}