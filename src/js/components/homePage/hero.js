import { BaseComponent } from "../baseComponents.js";

export class HomeHeroSection extends BaseComponent {
    connectedCallback() {
        this.render(`
            <section id="hero" class="relative min-h-screen flex items-center pt-30 lg:pt-20">
				<div class="absolute inset-0 -z-20 opacity-30">
					<div id="ambient-mesh" class="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(34,185,94,0.05),transparent_50%)]"></div>
				</div>
				<div id="cursor-spotlight" class="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_600px_at_var(--x)_var(--y),rgba(34,185,94,0.03),transparent_80%)]"></div>
				<div id="hero-glow-1" class="hero-glow -top-20 -right-20"></div>
				<div id="hero-glow-2" class="hero-glow bottom-0 -left-20 opacity-50"></div>
				<div class="px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
					<div class="lg:col-span-4 relative group lg:mt-2" data-aos="fade-right" data-aos-duration="1200">
						<div id="profile-container" class="tilt-card relative overflow-hidden rounded-3xl border border-white/10 glass-header p-2 bg-surface/50">
							<div class="relative overflow-hidden rounded-2xl">
								<img src="src/images/personal/professional-img-headshot.jpeg" alt="Sammy Kingx" class="w-full object-cover aspect-4/5 transition-transform duration-700 group-hover:scale-105">
							</div>
							<div class="p-6 flex flex-col items-center text-center">
								<h3 class="font-heading text-xl font-extrabold tracking-tighter">Iyebhora Samuel (Sammy)</h3>
								<p class="text-[10px] text-accent font-bold uppercase tracking-[0.3em] mb-4">Engineering Lead</p>
								<a href="mailto:hello@sammykingx.com.ng" class="text-xs font-medium text-gray-300 border-b border-white/10 pb-1 hover:text-white hover:border-accent transition-all duration-300">
								hello@sammykingx.com.ng
								</a>
								<p class="text-[10px] text-gray-500 mt-2 mb-6">Based in Lagos, Nigeria</p>
								<div class="flex gap-3">
									<a aria-label="Twitter" href="https://x.com/sammykingx18" class="w-10 h-10 rounded-full glass-header flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter">
											<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
										</svg>
									</a>
									<a aria-label="Instagram" href="#" class="w-10 h-10 rounded-full glass-header flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram">
											<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
											<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
											<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
										</svg>
									</a>
									<a href="#" aria-label="TikTok" class="w-10 h-10 rounded-full glass-header flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music-2" aria-hidden="true">
											<path d="M9 18V5l12-2v13" />
											<circle cx="6" cy="18" r="3" />
											<circle cx="18" cy="16" r="3" />
										</svg>
									</a>
									<a aria-label="yotube" href="https://www.youtube.com/@sammykingx" class="w-10 h-10 rounded-full glass-header flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube">
											<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 69.44 69.44 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 69.44 69.44 0 0 1-15 0 2 2 0 0 1-2-2Z" />
											<path d="m10 15 5-3-5-3z" />
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div class="absolute -inset-4 border border-accent/10 rounded-[40px] -z-10 group-hover:border-accent/20 transition-colors duration-500"></div>
					</div>
					<div class="lg:col-span-8 flex flex-col gap-8">
						<div class="flex items-center gap-3 mt-4 lg:mt-2" data-aos="fade-down" data-aos-delay="200">
							<span class="badge-outline italic text-accent">Available for technical leadership</span>
							<div class="h-px w-12 bg-accent/30"></div>
						</div>
						<h1 class="font-heading text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.2] lg:leading-[1.1]" data-aos="fade-up" data-aos-delay="400">
							Architecting <span class="text-accent italic">Scalable</span> <br> Digital Systems.
						</h1>
						<p class="max-w-xl text-gray-400 text-lg leading-relaxed font-light" data-aos="fade-up" data-aos-delay="600">
							Self-taught engineer and co-founder specializing in <span class="text-white font-medium">SaaS infrastructure</span>.
							Bridging the gap between robust engineering and business-driven product execution.
						</p>
						<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
							<div class="stat-card" data-aos="zoom-in-up" data-aos-delay="800">
								<div class="flex items-baseline gap-1">
									<span class="text-3xl font-heading font-bold text-white counter">6</span>
									<span class="text-2xl font-heading font-bold text-accent">+</span>
								</div>
								<span class="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Years Exp.</span>
							</div>
							<div class="stat-card" data-aos="zoom-in-up" data-aos-delay="900">
								<div class="flex items-baseline gap-1">
									<span class="text-3xl font-heading font-bold text-white counter">12</span>
									<span class="text-2xl font-heading font-bold text-accent">+</span>
								</div>
								<span class="text-[10px] text-gray-500 uppercase tracking-[0.2em]">SaaS Products</span>
							</div>
							<div class="stat-card col-span-2 md:col-span-1" data-aos="zoom-in-up" data-aos-delay="1000">
								<span class="text-3xl font-heading font-bold text-accent">99.9%</span>
								<span class="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Uptime Mindset</span>
							</div>
						</div>
						<div class="flex flex-wrap items-center gap-6 mt-6" data-aos="fade-up" data-aos-delay="1200">
							<a href="#projects" class="btn-premium px-10 py-4 text-sm">View Systems</a>
							<a href="#philosophy" class="text-xs uppercase tracking-[0.2em] font-bold border-b border-white/10 pb-1 hover:border-accent hover:text-accent transition-all">
							Product Philosophy
							</a>
						</div>
					</div>
				</div>
			</section>`
        );
    }
}

if (!customElements.get('home-hero')) {
    customElements.define('home-hero', HomeHeroSection);
}