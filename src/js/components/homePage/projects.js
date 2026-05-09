import { BaseComponent } from "../baseComponents.js";


export class HomeProjectSection extends BaseComponent {
    connectedCallback() {
        this.render(`
            <section id="projects" class="pt-26 relative">
				<div class="max-w-7xl mx-auto px-6">
					<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
						<div data-aos="fade-up">
							<span class="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Selected Works</span>
							<h2 class="font-heading text-4xl md:text-6xl font-extrabold tracking-tighter">Featured <span class="text-gray-500">Systems</span></h2>
						</div>
						<p class="max-w-xs text-gray-500 text-sm leading-relaxed" data-aos="fade-left">
							A collection of scalable SaaS products and high-performance architectures built for global markets.
						</p>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div class="project-card tilt-card" data-aos="fade-up">
							<div class="p-2">
								<div class="overflow-hidden rounded-2xl">
									<img src="./src/images/projects/servio/servio.png" alt="Servio Platform" class="project-image">
								</div>
							</div>
							<div class="p-8">
								<div class="flex flex-wrap gap-2 mb-6">
									<span class="tech-pill">Django</span>
									<span class="tech-pill">Pydantic</span>
									<span class="tech-pill">Firebase</span>
									<span class="tech-pill">Stripe</span>
									<span class="tech-pill">Paystack</span>
								</div>
								<h3 class="font-heading text-2xl font-bold mb-3">Servio Platform</h3>
								<p class="text-gray-400 text-sm leading-relaxed mb-6">
									Execution and payment infrastructure that connects clients with skilled professionals across digital and on-ground services, from scoping to secure payout.
								</p>
								<a href="/projects/servio" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group/link">
									View Architecture 
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover/link:translate-x-1">
										<path d="M5 12h14"/>
										<path d="m12 5 7 7-7 7"/>
									</svg>
								</a>
							</div>
						</div>
						<div class="project-card tilt-card" data-aos="fade-up" data-aos-delay="200">
							<div class="p-2">
								<div class="overflow-hidden rounded-2xl">
									<img src="./src/images/projects/scholarlyme/hero.png" alt="Scholarlyme" class="project-image">
								</div>
							</div>
							<div class="p-8">
								<div class="flex flex-wrap gap-2 mb-6">
									<span class="tech-pill">Ubuntu</span>
									<span class="tech-pill">Nginx</span>
									<span class="tech-pill">Node.js</span>
								</div>
								<h3 class="font-heading text-2xl font-bold mb-3">Scholarlyme</h3>
								<p class="text-gray-400 text-sm leading-relaxed mb-6">
									A mobile platform for students and professionals to discover opportunities, join communities, collaborate on projects, and attend events all in one place.
								</p>
								<a href="#" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group/link">
									Explore Product
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover/link:translate-x-1">
										<path d="M5 12h14"/>
										<path d="m12 5 7 7-7 7"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div class="mt-12 text-center" data-aos="fade-up">
						<a href="#all-projects" class="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors py-4 px-8 border border-white/5 rounded-full hover:bg-white/5">
						Browse Full Archive (20+)
						</a>
					</div>
				</div>
			</section>
        `);
    }
}

if (!customElements.get('home-projects')) {
    customElements.define('home-projects', HomeProjectSection);
}