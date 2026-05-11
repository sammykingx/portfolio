import { BaseComponent } from "../baseComponents.js";


export class HomeClosingCTASection extends BaseComponent {
    connectedCallback() {
        this.render(`
            <section id="initiation" class="py-20 relative overflow-hidden">
				<div class="absolute inset-0 -z-10 opacity-20">
					<div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
				</div>

				<div class="max-w-7xl mx-auto px-6">
					<div class="cta-terminal tilt-card group relative p-px rounded-[2.5rem] bg-linear-to-br from-white/20 via-white/5 to-transparent overflow-hidden" data-aos="zoom-in-up">
						<div class="scanline"></div>
						
						<div class="cta-inner relative z-10 bg-[#08090a] rounded-[2.45rem] p-8 lg:p-20 overflow-hidden">
							<div class="absolute top-0 right-0 w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full group-hover:bg-accent/10 transition-colors duration-1000"></div>

							<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
								
								<div class="lg:col-span-7">
									
									<div class="hidden lg:flex items-center justify-center lg:justify-start gap-3 mb-8" data-aos="fade-right" data-aos-delay="200">
										<div class="relative flex h-3 w-3 shrink-0">
											<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
											<span class="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
										</div>
										<span class="text-[10px] font-medium uppercase text-accent tracking-wider whitespace-nowrap">
											System Status: Available
										</span>
									</div>
									
									<h2 class="font-heading text-xl md:text-4xl font-black tracking-tighter leading- mb-8 uppercase">
										High-Fidelity <br> 
										<span class="text-gray-500">Systems Orchestration.</span>
									</h2>
									
									<p class="max-w-md text-gray-400 text-sm md:text-md leading-relaxed border-l-2 border-accent/20 pl-8 mb-0">
										Open to collaborating with <span class="text-white">founders and businesses</span> looking to build reliable, scalable digital products with clarity and long-term growth in mind.
									</p>
								</div>

								<div class="lg:col-span-5" data-aos="fade-left" data-aos-delay="400">
									<div class="relative p-6 rounded-3xl bg-white/2 border border-white/5 backdrop-blur-xl">
										<div class="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
											<span class="text-[9px] font-mono text-gray-600 uppercase tracking-widest">// Connection: Encrypted</span>
											<span class="text-[9px] font-mono text-accent uppercase tracking-widest">Protocol: V.26</span>
										</div>

										<a href="mailto:hello@sammykingx.com.mg?subject=Strategic%20Project%20Initiation" 
											class="btn-premium w-full py-5 text-xs font-medium uppercase tracking-[0.3em] group/btn relative overflow-hidden flex items-center justify-center gap-4"
										>
											<span class="relative z-10">Get Started</span>
											<i class="ph ph-terminal-window text-xl relative z-10"></i>
											<div class="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
										</a>

										<div class="mt-10 grid grid-cols-2 gap-8">
											<div class="space-y-1">
												<span class="block text-[8px] text-gray-600 uppercase font-black tracking-widest">Latency Target</span>
												<div class="flex items-center gap-2">
													<div class="h-1 w-8 bg-accent/20 rounded-full overflow-hidden">
														<div class="h-full bg-accent w-3/4 animate-pulse"></div>
													</div>
													<span class="text-[11px] text-accent font-mono">< 100ms</span>
												</div>
											</div>
											<div class="space-y-1">
												<span class="block text-[8px] text-gray-600 uppercase font-black tracking-widest">Security Standard</span>
												<span class="text-[11px] text-white font-mono flex items-center gap-2">
													<i class="ph ph-shield-check text-accent"></i> Enterprise+
												</span>
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