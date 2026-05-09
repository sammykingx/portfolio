import { BaseComponent } from "../baseComponents.js";


export class HomeClosingCTASection extends BaseComponent {
    connectedCallback() {
        this.render(`
            <section id="initiation" class="pt-2 pb-10 relative">
				<div class="max-w-7xl mx-auto px-6">
					<div class="cta-terminal tilt-card group" data-aos="fade-up">
						<div class="scanline"></div>
						<div class="cta-inner">
							<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
								<div class="lg:col-span-7 text-left">
									<div class="flex items-center gap-2 mb-6">
										<span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
										<span class="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Status: Ready for Deployment</span>
									</div>
									<h2 class="font-heading text-3xl md:text-5xl font-extrabold tracking-tighter leading-[1.1] mb-8">
										High-Fidelity <br> 
										<span class="text-gray-500">Systems Orchestration.</span>
									</h2>
									<p class="max-w-md text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-6">
										I am currently vetting high-ticket partnerships for Q3 2026. If your project demands 
										<span class="text-white">uncompromising technical integrity</span> and a product-first mindset, let's initiate the brief.
									</p>
								</div>
								<div class="lg:col-span-5">
									<div class="glass-header p-8 rounded-3xl border-accent/20 bg-accent/2 flex flex-col items-center text-center">
										<p class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 italic">
											// System Project Initiation //
										</p>
										<a href="mailto:hello@sammykingx.com?subject=Strategic%20Project%20Initiation" 
											class="btn-premium w-full py-6 text-sm group/btn relative overflow-hidden">
											<span class="relative z-10">Initiate High-Fidelity Build</span>
											<div class="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
										</a>
										<div class="mt-8 grid grid-cols-2 gap-4 w-full">
											<div class="text-left border-t border-white/5 pt-4">
												<span class="block text-[8px] text-gray-600 uppercase font-bold">Latency Target</span>
												<span class="text-[10px] text-accent font-mono">< 100ms</span>
											</div>
											<div class="text-left border-t border-white/5 pt-4">
												<span class="block text-[8px] text-gray-600 uppercase font-bold">Security Standard</span>
												<span class="text-[10px] text-accent font-mono">Enterprise+</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="absolute -bottom-5 -right-5 font-heading text-[12vw] font-black text-white/2 select-none pointer-events-none">
								SAMMY
							</div>
						</div>
					</div>
				</div>
			</section>
        `);
    }
}

if (!customElements.get('home-cta')) {
    customElements.define('home-cta', HomeClosingCTASection);
}