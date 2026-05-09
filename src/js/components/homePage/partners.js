import { BaseComponent } from "../baseComponents.js";


export class HomePartnersSection extends BaseComponent {
    connectedCallback() {
        this.render(`
            <section id="partners" class="pt-14 pb-20 relative">
				<div class="max-w-7xl mx-auto px-6">
					<div class="mb-12 text-center" data-aos="fade-up">
						<span class="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500">Industry Standard Integrations</span>
					</div>
					<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
						<div class="partner-logo-container" data-aos="fade-up" data-aos-delay="100">
							<img src="src/images/partners/stripe-logo.png" alt="Stripe" class="partner-logo">
						</div>
						<div class="partner-logo-container" data-aos="fade-up" data-aos-delay="200">
							<img src="src/images/partners/paystack-logo.png" alt="Paystack" class="partner-logo">
						</div>
						<div class="partner-logo-container" data-aos="fade-up" data-aos-delay="300">
							<img src="src/images/partners/vercel-logo.png" alt="Vercel" class="partner-logo">
						</div>
						<div class="partner-logo-container" data-aos="fade-up" data-aos-delay="400">
							<img src="src/images/partners/square-logo.png" alt="Square" class="partner-logo">
						</div>
						<div class="partner-logo-container" data-aos="fade-up" data-aos-delay="500">
							<img src="src/images/partners/firebase-logo.png" alt="Firebase" class="partner-logo">
						</div>
					</div>
					<div class="mt-12 text-center" data-aos="fade-up" data-aos-delay="600">
						<p class="text-[10px] text-gray-600 uppercase tracking-widest leading-relaxed">
							Architecting solutions compatible with global payment rails <br> and enterprise-grade infrastructure.
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