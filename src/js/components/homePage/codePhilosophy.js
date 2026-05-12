import { BaseComponent } from "../baseComponents.js";


export class HomePhilosophySection extends BaseComponent {
    connectedCallback() {
        this.render(`
            <section id="philosophy" class="pt-26 px-3 relative overflow-hidden">
				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,185,94,0.02),transparent_70%)] pointer-events-none"></div>
				<div class="max-w-7xl mx-auto px-6">
					<div class="max-w-2xl mb-20" data-aos="fade-up">
						<span class="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Building with Intent</span>
						<h2 class="font-heading text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
							Product-First <br> 
							<span class="text-gradient-gray">Engineering.</span>
						</h2>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div class="philosophy-card tilt-card group" data-aos="fade-up" data-aos-delay="100">
							<div class="icon-box group-hover:scale-110 transition-transform duration-500">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="m21 16-4 4-4-4"/>
									<path d="M17 20V4"/>
									<path d="m3 8 4-4 4 4"/>
									<path d="M7 4v16"/>
								</svg>
							</div>
							<h3 class="text-xl font-heading font-bold mb-4">Scalability as Default</h3>
							<p class="text-gray-500 text-sm leading-relaxed italic border-l-2 border-accent/20 pl-4 mb-4">
								"Premature optimization is a trap, but weak foundations are a death sentence."
							</p>
							<p class="text-gray-400 text-sm leading-relaxed">
								I build scalable systems with clean architecture and resilient foundations built to grow beyond the MVP stage.
							</p>
						</div>
						<div class="philosophy-card tilt-card group" data-aos="fade-up" data-aos-delay="200">
							<div class="icon-box group-hover:scale-110 transition-transform duration-500">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"/>
									<path d="M12 16v-4"/>
									<path d="M12 8h.01"/>
								</svg>
							</div>
							<h3 class="text-xl font-heading font-bold mb-4">Founder-Lead Logic</h3>
							<p class="text-gray-500 text-sm leading-relaxed italic border-l-2 border-accent/20 pl-4 mb-4">
								"If a feature doesn't drive value, it's just expensive debt."
							</p>
							<p class="text-gray-400 text-sm leading-relaxed">
								I treat your runway as mine, prioritizing features that impact the bottom line, ensuring every action serves a business goal.
							</p>
						</div>
						<div class="philosophy-card tilt-card group" data-aos="fade-up" data-aos-delay="300">
							<div class="icon-box group-hover:scale-110 transition-transform duration-500">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="10"/>
									<path d="M2 12h20"/>
									<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
								</svg>
							</div>
							<h3 class="text-xl font-heading font-bold mb-4">Intercontinental Context</h3>
							<p class="text-gray-500 text-sm leading-relaxed italic border-l-2 border-accent/20 pl-4 mb-4">
								"Engineering is a universal language, but markets are local."
							</p>
							<p class="text-gray-400 text-sm leading-relaxed">
								With experience across Nigeria, the UK, and North America, I build systems optimized for low-latency local performance and scalable global reliability.
							</p>
						</div>
					</div>
					<div class="mt-20 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
						<span class="text-[10px] font-bold uppercase tracking-[0.4em] w-full text-center mb-4">The Standard of Execution</span>
						<span class="font-heading font-bold text-xl grayscale hover:grayscale-0 transition-all">STRIPE</span>
						<span class="font-heading font-bold text-xl grayscale hover:grayscale-0 transition-all">PAYSTACK</span>
						<span class="font-heading font-bold text-xl grayscale hover:grayscale-0 transition-all">SQUARE</span>
						<span class="font-heading font-bold text-xl grayscale hover:grayscale-0 transition-all">VERCEL</span>
					</div>
				</div>
			</section>
        `);
    }
}

if (!customElements.get('home-philosophy')) {
    customElements.define('home-philosophy', HomePhilosophySection);
}