import { BaseComponent } from "../baseComponents.js";


export class HomeServicesSection extends BaseComponent {
    connectedCallback() {
        this.render(`
            <section id="solutions" class="pt-26 relative">
				<div class="max-w-7xl mx-auto px-6">
					<div class="mb-20" data-aos="fade-up">
						<span class="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">How I Partner</span>
						<h2 class="font-heading text-4xl md:text-6xl font-extrabold tracking-tighter">
							Strategic <span class="text-gray-500">Execution.</span>
						</h2>
					</div>
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div class="engagement-card group relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
							<span class="text-number">01</span>
							<div>
								<h3 class="text-2xl font-heading font-bold mb-6">MVP <br> Orchestration</h3>
								<p class="text-gray-400 text-sm leading-relaxed mb-8">
									Rapidly transforming concepts into scalable prototypes. Ideal for founders needing to validate with investors or hit the market in 4-8 weeks.
								</p>
								<ul class="space-y-4 mb-10">
									<li class="flex items-center text-xs font-medium text-gray-300">
										<span class="service-dot"></span> Core System Architecture
									</li>
									<li class="flex items-center text-xs font-medium text-gray-300">
										<span class="service-dot"></span> Database & Logic Design
									</li>
									<li class="flex items-center text-xs font-medium text-gray-300">
										<span class="service-dot"></span> Payment Gateway Integration
									</li>
								</ul>
							</div>
							<a href="#contact" class="btn-premium text-center w-full py-4 block">Launch Prototype</a>
						</div>
						<div class="engagement-card group relative overflow-hidden border-accent/20 bg-accent/2" data-aos="fade-up" data-aos-delay="200">
							<span class="text-number text-accent/10!">02</span>
							<div>
								<h3 class="text-2xl font-heading font-bold mb-6">SaaS <br> Ecosystems</h3>
								<p class="text-gray-400 text-sm leading-relaxed mb-8">
									End-to-end engineering of multi-tenant platforms. Focused on high-availability, security, and complex business logic.
								</p>
								<ul class="space-y-4 mb-10">
									<li class="flex items-center text-xs font-medium text-gray-300">
										<span class="service-dot"></span> Multi-Tenant Infrastructure
									</li>
									<li class="flex items-center text-xs font-medium text-gray-300">
										<span class="service-dot"></span> Custom API Orchestration
									</li>
									<li class="flex items-center text-xs font-medium text-gray-300">
										<span class="service-dot"></span> Cloud & Devops Scaling
									</li>
								</ul>
							</div>
							<a href="#contact" class="btn-premium text-center w-full py-4 block bg-white text-black">Build at Scale</a>
						</div>
						<div class="engagement-card group relative overflow-hidden" data-aos="fade-up" data-aos-delay="300">
							<span class="text-number">03</span>
							<div>
								<h3 class="text-2xl font-heading font-bold mb-6">Architectural <br> Consulting</h3>
								<p class="text-gray-400 text-sm leading-relaxed mb-8">
									Technical leadership for established businesses. Solving bottlenecks, legacy code migration, and engineering team mentorship.
								</p>
								<ul class="space-y-4 mb-10">
									<li class="flex items-center text-xs font-medium text-gray-300">
										<span class="service-dot"></span> Performance Audits
									</li>
									<li class="flex items-center text-xs font-medium text-gray-300">
										<span class="service-dot"></span> Refactoring Strategies
									</li>
									<li class="flex items-center text-xs font-medium text-gray-300">
										<span class="service-dot"></span> Technical Hiring Advice
									</li>
								</ul>
							</div>
							<a href="#contact" class="btn-premium text-center w-full py-4 block">Request Audit</a>
						</div>
					</div>
				</div>
			</section>
        `);
    }
}

if (!customElements.get('home-services')) {
    customElements.define('home-services', HomeServicesSection);
}