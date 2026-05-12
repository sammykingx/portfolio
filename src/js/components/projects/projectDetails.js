import { BaseComponent } from '../baseComponents.js';

export class ProjectDetails extends BaseComponent { 
    connectedCallback() {
        const title = this.getAttribute('title');
        const category = this.getAttribute('category');
        const description = this.getAttribute('description');
        const role = this.getAttribute('project-role') || 'Lead Technical Architect';
        const impact = this.getAttribute('impact');
        const tech = this.getAttribute('tech') || '';
        const liveLink = this.getAttribute('live-link');
        const caseStudyLink = this.getAttribute('case-study-link');
        const hasCaseStudy = this.getAttribute('show-case-study') === 'true';
        const images = this.getAttribute('gallery')?.split(',') || [];

        this.render(`
            <main class="pt-32 pb-20 px-5">
                <section class="max-w-7xl mx-auto px-6 mb-16" data-aos="fade-up">
                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div class="max-w-3xl">
                            <span class="text-accent text-[9px] uppercase tracking-[0.3em] font-medium block mb-4">${category}</span>
                            <h1 class="text-3xl md:text-6xl font-black tracking-tighter mb-6 uppercase">${title}</h1>
                            <p class="text-gray-400 text-base md:text-md lg:text-lg leading-relaxed">${description}</p>
                        </div>
                        <div class="hidden lg:flex flex-col gap-4">
                            ${liveLink ? `<a href="${liveLink}" target="_blank" class="btn-premium flex items-center justify-center gap-2">View Live<i class="ph ph-arrow-square-out"></i></a>` : ''}
                            ${hasCaseStudy ? `<a href="${caseStudyLink}" class="text-[10px] font-bold uppercase tracking-[0.2em] text-center hover:text-accent transition-colors">Read Strategic Case Study</a>` : ''}
                        </div>
                    </div>
                </section>

                <section class="max-w-7xl mx-auto px-4 md:px-6">
                    <div class="bento-grid gap-4 auto-rows-auto lg:auto-rows-[350px]">
                        ${images.map((img, index) => {
                            const sequencePos = index % 3;
                            let spanClass = "";
                            let label = "Desktop_View";

                            if (sequencePos === 0) {
                                spanClass = "md:col-span-8 md:row-span-2";
                            } else if (sequencePos === 1) {
                                spanClass = "md:col-span-4 md:row-span-2";
                                label = "Mobile_Mockup";
                            } else {
                                spanClass = "md:col-span-12 md:row-span-2";
                                label = "System_Banner";
                            }

                            return `
                                <div class="${spanClass} rounded-2xl overflow-hidden border border-white/5 bg-white/5 shadow-2xl group relative" data-aos="fade-up">
                                    <img src="${img.trim()}" 
                                        alt="${title} View ${index + 1}" 
                                        class="w-full transition-transform duration-1000 group-hover:scale-105">
                                    
                                    <div class="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                        <span class="text-[8px] font-mono text-white/50 uppercase tracking-[0.3em]">${label}_${index + 1}.render()</span>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </section>

                <section class="max-w-7xl mx-auto px-6 border-t border-white/10 pt-16">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <span class="text-[10px] uppercase text-gray-500 font-bold tracking-widest block mb-4">Your Role</span>
                            <p class="text-white text-lg font-medium">${role}</p>
                        </div>
                        <div>
                            <span class="text-[10px] uppercase text-gray-500 font-bold tracking-widest block mb-4">Key Impact</span>
                            <p class="text-white text-lg font-medium">${impact}</p>
                        </div>
                        <div>
                            <span class="text-[10px] uppercase text-gray-500 font-bold tracking-widest block mb-4">Stack</span>
                            <p class="text-white text-lg font-medium">${tech}</p>
                        </div>
                        <div class="flex items-end">
                            ${hasCaseStudy ? `<a href="${caseStudyLink}" class="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-accent">
                                Inside the Logic
                                <span class="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">→</span>
                            </a>` : liveLink ? `<a href="${liveLink}" class="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-accent">
                                View Live
                                <span class="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">→</span>
                            </a>` : ''}
                        </div>
                    </div>
                </section>
            </main>
        `);
    }
}


if (!customElements.get('project-details')) {
    customElements.define('project-details', ProjectDetails);
}