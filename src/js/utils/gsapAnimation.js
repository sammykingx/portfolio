/**
 * Animation Utility - Modular GSAP Orchestrator
 */
export class GSAPAnimationEngine {
    constructor() {
        this.gsap = window.gsap;
    }

    initSpotlight() {
        const spotlight = document.querySelector('#cursor-spotlight');
        window.addEventListener('mousemove', (e) => {
            // Smoothly move the spotlight center using CSS Variables
            spotlight.style.setProperty('--x', `${e.clientX}px`);
            spotlight.style.setProperty('--y', `${e.clientY}px`);
        });
    }

    /**
     * Creates an ambient "breathing" effect for background elements
     */
    initAmbientMotion(targets) {
        targets.forEach(({ id, x = 30, y = 20, duration = 8, delay = 0 }) => {
            this.gsap.to(id, {
                duration,
                x,
                y,
                delay,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
    }

    /**
     * C
     */
    addHoverEffect(target) { 
        // Add mesh pulse
        this.gsap.to(`#${target}`, {
            duration: 15,
            scale: 1.2,
            rotate: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    /**
     * Attaches a 3D magnetic tilt effect to a container
     * disabled for now
     */
    initTiltEffect(selector, intensity = 10) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = el.getBoundingClientRect();

                const x = (clientX - left) / width - 0.5;
                const y = (clientY - top) / height - 0.5;

                this.gsap.to(el, {
                    duration: 0.6,
                    rotateY: x * intensity,
                    rotateX: -y * intensity,
                    ease: "power2.out",
                    transformPerspective: 1000
                });
            });

            el.addEventListener('mouseleave', () => {
                this.gsap.to(el, {
                    duration: 0.8,
                    rotateY: 0,
                    rotateX: 0,
                    ease: "elastic.out(1, 0.5)" // Added a slight premium bounce
                });
            });
        });
    }

    initMarquee(selector) {
        const track = document.querySelector(selector);
        if (!track) return;

        // Clone the content to create a seamless loop
        const items = [...track.children];
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        const duration = 40; // Seconds for one full loop - adjust for speed

        const animation = this.gsap.to(track, {
            x: "-50%",
            duration: duration,
            ease: "none",
            repeat: -1,
        });

        // Slow down on hover for readability
        track.addEventListener("mouseenter", () => {
            this.gsap.to(animation, { timeScale: 0.1, duration: 1 });
        });

        track.addEventListener("mouseleave", () => {
            this.gsap.to(animation, { timeScale: 1, duration: 1 });
        });
    }

    /**
     * Optional: Text revealing/scrambling or other premium effects
     */
    initTextReveal(selector) {
        this.gsap.from(selector, {
            duration: 1.5,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: "power4.out"
        });
    }

    initHomeHeroNav() {
        const navItems = document.querySelectorAll('.hero-nav-item');
        const indicator = document.querySelector('#nav-indicator');

        if (!indicator || navItems.length === 0) return;

        const moveIndicator = (el) => {
            // We use offsetLeft and offsetWidth to get dimensions relative 
            // to the 'relative' positioned <nav> container
            gsap.to(indicator, {
                left: el.offsetLeft,
                top: el.offsetTop, // Added top for grid support
                width: el.offsetWidth,
                height: el.offsetHeight,
                duration: 0.6,
                ease: "expo.out"
            });
        };

        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => moveIndicator(item));
            item.addEventListener('click', () => moveIndicator(item));
        });

        // Initialize position at first item after a small delay to ensure layout is painted
        setTimeout(() => moveIndicator(navItems[0]), 100);

        // Re-calculate on window resize (critical for mobile rotation)
        window.addEventListener('resize', () => {
            const activeItem = document.querySelector('.hero-nav-item:hover') || navItems[0];
            moveIndicator(activeItem);
        });
    };
}