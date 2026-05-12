import { BaseComponent } from "../baseComponents.js";


export class HomeSocialProofSection extends BaseComponent {
    connectedCallback() {
        this.render(`
            <section id="impact" class="pt-20 px-3 relative" data-aos="fade-up">
				<div class="max-w-7xl mx-auto px-6 mb-5 md:mb-10">
					<div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
						<div class="max-w-xl">
							<span class="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Impact Analysis</span>
							<h2 class="font-heading text-4xl md:text-6xl font-extrabold tracking-tighter">
								Client <span class="text-gray-500">Perspective.</span>
							</h2>
						</div>
						<p class="text-gray-500 text-sm max-w-xs leading-relaxed italic">
							"Technical integrity is the foundation of every partnership I enter."
						</p>
					</div>
				</div>
				<div class="testimonial-wrapper flex overflow-hidden group">
					<div id="testimonial-track" class="testimonial-slider-container">
						<div class="testimonial-card group/card">

							<div class="relative z-10 h-full flex flex-col justify-between">
								<div>
									<div class="flex items-center justify-between mb-8">
										<div class="impact-label">MVP Build</div>
										<span class="text-[10px] text-gray-600 font-mono tracking-tighter">SECURED // 2026</span>
									</div>
									<p class="text-xl font-medium leading-relaxed mb-12 text-gray-200">
										"Sammy's ability to translate complex business needs into a robust technical architecture was 
										<span class="text-white">instrumental to our launch.</span>"
									</p>
								</div>
								<div class="flex items-center gap-4 pt-6 border-t border-white/5">
									<div class="w-1 h-8 bg-accent/40"></div>
									<div>
										<h4 class="text-sm font-bold tracking-tight text-white uppercase">Managing Director</h4>
										<p class="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Digital Logistics Firm • UK</p>
									</div>
								</div>
							</div>
						</div>
						<div class="testimonial-card group/card">
							<div class="relative z-10 h-full flex flex-col justify-between">
								<div>
									<div class="flex items-center justify-between mb-8">
										<div class="impact-label">3rd Party Setup</div>
										<span class="text-[10px] text-gray-600 font-mono tracking-tighter">VERIFIED // 2026</span>
									</div>
									<p class="text-xl font-medium leading-relaxed mb-12 text-gray-200">
										"Working across borders is difficult, but Sammy made the technical integration 
										<span class="text-white">seamless.</span> A true lead engineer."
									</p>
								</div>
								<div class="flex items-center gap-4 pt-6 border-t border-white/5">
									<div class="w-1 h-8 bg-accent/40"></div>
									<div>
										<h4 class="text-sm font-bold tracking-tight text-white uppercase">Chief Technology Officer</h4>
										<p class="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Fintech Infrastructure • NA</p>
									</div>
								</div>
							</div>
						</div>
						<div class="testimonial-card group/card">
							<div class="relative z-10 h-full flex flex-col justify-between">
								<div>
									<div class="flex items-center justify-between mb-8">
										<div class="impact-label">Product Execution</div>
										<span class="text-[10px] text-gray-600 font-mono tracking-tighter">AUDITED // 2026</span>
									</div>
									<p class="text-xl font-medium leading-relaxed mb-12 text-gray-200">
										"The level of technical leadership Sammy provides is rare. He bridges the gap between 
										<span class="text-white">business intent and code.</span>"
									</p>
								</div>
								<div class="flex items-center gap-4 pt-6 border-t border-white/5">
									<div class="w-1 h-8 bg-accent/40"></div>
									<div>
										<h4 class="text-sm font-bold tracking-tight text-white uppercase">SaaS Founder</h4>
										<p class="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Venture Startup • Canada</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        `);
    }
}

if (!customElements.get('home-social-proof')) {
    customElements.define('home-social-proof', HomeSocialProofSection);
}