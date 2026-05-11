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
								<img class="rounded-xl" src="src/images/personal/professional-img-headshot.jpeg" alt="Sammy Kingx" class="w-full object-cover aspect-4/5 transition-transform duration-700 group-hover:scale-105">
							</div>
							<div class="p-6 flex flex-col items-center text-center">
								<h3 class="font-heading text-xl font-extrabold tracking-tighter">Iyebhora Samuel (Sammy)</h3>
								<p class="text-[10px] text-accent font-bold uppercase tracking-[0.3em] mb-4">Engineering Lead</p>
								<a href="mailto:hello@sammykingx.com.ng" class="text-xs font-medium text-gray-300 border-b border-white/10 pb-1 hover:text-white hover:border-accent transition-all duration-300">
									hello@sammykingx.com.ng
								</a>
								<p class="text-[10px] text-gray-500 mt-2 mb-6">Based in Lagos, Nigeria</p>
								<div class="flex gap-3">
									<a href="https://x.com/sammykingx18" aria-label="X" class="w-10 h-10 rounded-full glass-header flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="14"
											height="14"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											aria-hidden="true"
										>
											<path d="M18 2h3l-7 8 8 12h-6l-5-7-6 7H2l8-9L2 2h6l5 7z"/>
										</svg>
									</a>
									<a aria-label="Instagram" href="https://instagram.com/sammykingx18" class="w-10 h-10 rounded-full glass-header flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram">
											<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
											<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
											<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
										</svg>
									</a>
									<a href="https://www.linkedin.com/in/iyebhora-samuel/" aria-label="LinkedIn" class="w-10 h-10 rounded-full glass-header flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="14"
											height="14"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-linkedin"
											aria-hidden="true"
										>
											<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
											<rect width="4" height="12" x="2" y="9"/>
											<circle cx="4" cy="4" r="2"/>
										</svg>
									</a>
									<!--
									<a aria-label="yotube" href="https://www.youtube.com/@sammykingx" class="w-10 h-10 rounded-full glass-header flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube">
											<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 69.44 69.44 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 69.44 69.44 0 0 1-15 0 2 2 0 0 1-2-2Z" />
											<path d="m10 15 5-3-5-3z" />
										</svg>
									</a>-->
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
							Engineering scalable SaaS systems, marketplace infrastructure, and business-focused digital products built for execution and growth.
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
						<!-- Mini On-Page Terminal Menu -->
						<div class="hidden lg:flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mt-10" data-aos="fade-up" data-aos-delay="1200">
							<!-- Navigation Container: Grid on mobile, Flex on desktop -->
							<nav class="relative w-full sm:w-auto p-1 bg-white/3 border border-white/10 backdrop-blur-md rounded-2xl grid grid-cols-3 sm:flex sm:items-center">
								
								<!-- Sliding Indicator -->
								<div id="nav-indicator" class="absolute h-[calc(100%-8px)] rounded-xl bg-accent/10 border border-accent/20 transition-all duration-500 ease-expo pointer-events-none"></div>

								<a href="#projects" class="hero-nav-item relative px-3 sm:px-6 py-3 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-accent transition-colors z-10 text-center">
									<span class="opacity-50 block sm:inline mb-1 sm:mb-0 sm:mr-2 font-mono text-[8px]">01.</span>Systems
								</a>

								<!-- Vertical Dividers: Hidden on mobile grid -->
								<div class="hidden sm:block w-px h-4 bg-white/10"></div>

								<a href="#philosophy" class="hero-nav-item relative px-3 sm:px-6 py-3 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-accent transition-colors z-10 text-center border-x border-white/5 sm:border-none">
									<span class="opacity-50 block sm:inline mb-1 sm:mb-0 sm:mr-2 font-mono text-[8px]">02.</span>Logic
								</a>

								<div class="hidden sm:block w-px h-4 bg-white/10"></div>

								<a href="#impact" class="hero-nav-item relative px-3 sm:px-6 py-3 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-accent transition-colors z-10 text-center">
									<span class="opacity-50 block sm:inline mb-1 sm:mb-0 sm:mr-2 font-mono text-[8px]">03.</span>Impact
								</a>
							</nav>

							<!-- Secondary Action: Full width on mobile -->
							<a href="mailto:hello@sammykingx.com.ng" class="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 pl-4 pr-6 py-3 border border-white/5 bg-white/1 rounded-2xl hover:bg-white/5 transition-all group">
								<span class="relative flex h-2 w-2">
									<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
									<span class="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
								</span>
								<span class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">Direct Trace</span>
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