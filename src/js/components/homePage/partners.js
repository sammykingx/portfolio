import { BaseComponent } from "../baseComponents.js";


export class HomePartnersSection extends BaseComponent {
    connectedCallback() {
        this.render(`
            <section id="partners" class="py-26 relative overflow-hidden">
				<div class="max-w-7xl mx-auto px-6">
					<div class="mb-12 text-center" data-aos="fade-up">
						<span class="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Global Integration Stack</span>
					</div>

					<div class="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
						<div class="flex items-center gap-10 w-max animate-marquee whitespace-nowrap py-4">
							<div class="flex items-center gap-8 px-4">
								<div class="partner-box">
									<img src="/src/images/partners/stripe-logo.png" alt="Stripe" class="partner-logo-v2">
								</div>
								<div class="partner-box">
									<img src="/src/images/partners/paystack-logo.png" alt="Paystack" class="partner-logo-v2">
								</div>
								<div class="partner-box">
									<img src="/src/images/partners/vercel-logo.png" alt="Vercel" class="partner-logo-v2">
								</div>
								<div class="partner-box">
									<img src="/src/images/partners/square-logo.png" alt="Square" class="partner-logo-v2">
								</div>
								<div class="partner-box">
									<img src="/src/images/partners/firebase-logo.png" alt="Firebase" class="partner-logo-v2">
								</div>
							</div>

							<div class="flex items-center gap-8 px-4" aria-hidden="true">
								<div class="partner-box"><img src="/src/images/partners/stripe-logo.png" alt="Stripe" class="partner-logo-v2"></div>
								<div class="partner-box"><img src="/src/images/partners/paystack-logo.png" alt="Paystack" class="partner-logo-v2"></div>
								<div class="partner-box"><img src="/src/images/partners/vercel-logo.png" alt="Vercel" class="partner-logo-v2"></div>
								<div class="partner-box"><img src="/src/images/partners/square-logo.png" alt="Square" class="partner-logo-v2"></div>
								<div class="partner-box"><img src="/src/images/partners/firebase-logo.png" alt="Firebase" class="partner-logo-v2"></div>
							</div>
						</div>
					</div>

					<div class="mt-20 text-center" data-aos="fade-up">
						<p class="text-[9px] text-gray-600 uppercase tracking-[0.3em] leading-relaxed max-w-2xl mx-auto">
							Built to deliver reliable systems that meets <span class="text-white">global standards</span>.
						</p>
					</div>
				</div>
			</section>
        `);
    }
}

if (!customElements.get('home-partners')) {
    customElements.define('home-partners', HomePartnersSection);
}