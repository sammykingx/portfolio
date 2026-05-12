import { BaseComponent } from '../baseComponents.js';


export class CaseStudyDetail extends BaseComponent {
    connectedCallback() {
        const title = this.getAttribute('title');
        const client = this.getAttribute('client');
        // const originalContent = this.innerHTML;
        const template = this.querySelector('template');
        const originalContent = template ? template.content : null;

        this.render(`
            <article class="pt-30 pb-18 px-5">
                <!-- Header Section -->
                <header class="max-w-4xl mx-auto px-6 py-8 md:py-14" data-aos="fade-up">
                    <div class="flex items-center gap-4 mb-8">
                        <span class="text-accent text-[8px] font-medium uppercase tracking-[0.4em]">Deep Dive Analysis</span>
                        <div class="h-px w-12 bg-white/10"></div>
                        <span class="text-gray-500 text-[9px] font-medium uppercase tracking-[0.4em]">${client}</span>
                    </div>
                    <h1 class="text-2xl md:text-4xl lg:text-6xl font-black tracking-tighter mt-3 mb-5 leading-[1.05] uppercase">
                        ${title}
                    </h1>
                </header>

                <!-- Section 01: The Challenge -->
                <section class="max-w-4xl mx-auto px-6 mb-12" data-aos="fade-up">
                    <h2 class="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-8 border-b border-white/5 pb-4">01. Context & Operational Friction</h2>
                    <div class="prose-content text-gray-400 text-base leading-relaxed space-y-8">
                        <div data-content="challenge"></div>
                    </div>
                </section>

                <!-- Section 02: The Logic (Full Width Dark Section) -->
                <section class="bg-white/1 border-y border-white/5 py-16 mb-12 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] pointer-events-none"></div>
                    <div class="max-w-5xl mx-auto px-6 relative">
                        <h2 class="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-10">02. Engineering Architecture</h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div class="space-y-6">
                                <h3 class="text-white text-2xl font-bold tracking-tight uppercase">Modular Core Systems</h3>
                                <div class="text-gray-400 text-base leading-relaxed" data-content="modular"></div>
                            </div>
                            <div class="space-y-6">
                                <h3 class="text-white text-2xl font-bold tracking-tight uppercase">Workflow Separation</h3>
                                <div class="text-gray-400 text-base leading-relaxed space-y-4" data-content="separation"></div>
                            </div>
                            <div class="space-y-6">
                                <h3 class="text-white text-2xl font-bold tracking-tight uppercase">Infrastructure Growth</h3>
                                <div class="text-gray-400 text-base leading-relaxed space-y-4" data-content="growth"></div>
                            </div>
                            <div class="space-y-6">
                                <h3 class="text-white text-2xl font-bold tracking-tight uppercase">Future Extensibility</h3>
                                <div class="text-gray-400 text-base leading-relaxed space-y-4" data-content="extensibility"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section 03: The Outcome -->
                <section class="max-w-5xl mx-auto px-6" data-aos="fade-up">
                    <h2 class="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-8">03. Strategic Outcomes</h2>
                    <div data-content="outcome" class="prose-content text-gray-300 text-base leading-relaxed space-y-8"></div>
                </section>
            </article>
        `);

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = originalContent;

        const slots = ['challenge', 'modular', 'separation', 'growth', 'extensibility', 'outcome'];
        slots.forEach(slotName => {
            const source = originalContent
                ? originalContent.querySelector(`[slot="${slotName}"]`)
                : null;
            const target = this.querySelector(`[data-content="${slotName}"]`);
            if (source && target) {
                target.appendChild(source.cloneNode(true));
            }
        });

        this.setAttribute('data-ready', '');
        const guard = document.getElementById('fouc-guard');
        if (guard) guard.remove();
    }
}

if (!customElements.get('case-study-detail')) {
    customElements.define('case-study-detail', CaseStudyDetail);
}