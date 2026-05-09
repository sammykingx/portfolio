/** 
 * Page-Specific Animation
 */
const initPageAnimations = {
    'index': (engine) => {
        engine.initSpotlight();
        engine.initAmbientMotion([
            { id: "#hero-glow-1", x: 50, y: 30, duration: 8 },
            { id: "#hero-glow-2", x: -40, y: -20, duration: 10, delay: 1 }
        ]);
        engine.initMarquee('#testimonial-track');
        engine.initTiltEffect('.tilt-card', 15);
        engine.addHoverEffect('ambient-mesh');
        engine.initHomeHeroNav();
    },
    'case-study': (engine) => {
        // Ambient background movement for the whole grid
        engine.initAmbientMotion([{ id: ".glow-element", x: 40, y: 30, duration: 10 }]);

        // Select all cards for interactive hover logic
        const cards = document.querySelectorAll('.case-study-card');

        cards.forEach(card => {
            const icon = card.querySelector('.strategy-icon');
            const glow = card.querySelector('.glow-element');
            const arrow = card.querySelector('.ph-arrow-right');

            card.addEventListener('mouseenter', () => {
                // Lift the icon and rotate slightly
                gsap.to(icon, {
                    y: -10,
                    rotate: -5,
                    duration: 0.6,
                    ease: "expo.out"
                });

                // Expand the background glow to follow the mouse subtly
                gsap.to(glow, {
                    scale: 1.5,
                    opacity: 0.8,
                    duration: 1,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(icon, { y: 0, rotate: 0, duration: 0.6, ease: "expo.out" });
                gsap.to(glow, { scale: 1, opacity: 1, duration: 1, ease: "power2.out" });
            });
        });
    },
    'linkedin-article': (engine) => {
        // add
    },
    'error-page': (engine) => {
        // Ambient background drift
        engine.initAmbientMotion([
            { id: "#error-mesh", x: 100, y: 50, duration: 20 }
        ]);

        // Glitch effect on the large 404 text
        const errorText = document.querySelector('h1');

        const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });

        glitchTimeline
            .to(errorText, { skewX: 20, duration: 0.1, ease: "power4.inOut" })
            .to(errorText, { skewX: -20, duration: 0.1, ease: "power4.inOut" })
            .to(errorText, { skewX: 0, duration: 0.1, ease: "power4.inOut" })
            .to(errorText, { x: -10, opacity: 0.5, duration: 0.05 })
            .to(errorText, { x: 10, opacity: 0.8, duration: 0.05 })
            .to(errorText, { x: 0, opacity: 0.05, duration: 0.05 });

        // Fade in the text elements sequentially
        gsap.from('.space-y-6 > *', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "expo.out"
        });
    }
};

/**
 * Orchestrates the application of animations based on the page context. 
 * This is called from the main app initializer after global systems are set up.
 */
export const runPageAnimations = (pageName, engine) => {
    if (initPageAnimations[pageName]) {
        initPageAnimations[pageName](engine);
    }
};