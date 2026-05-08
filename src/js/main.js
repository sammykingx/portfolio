import { Navigation } from './utils/navigation.js';
import { GSAPAnimationEngine } from './utils/gsap-animation.js';

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Navigation
  const nav = new Navigation({
    toggleId: 'menu-toggle',
    menuId: 'mobile-menu',
    linkSelector: '.nav-link-mobile'
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    once: false,
    easing: 'ease-out-quart',
    duration: 1000,
  });

  // GSAP: Atmospheric Background Motion
  const animationEngine = new GSAPAnimationEngine();
  animationEngine.initAmbientMotion([
    { id: "#hero-glow-1", x: 50, y: 30, duration: 8 },
    { id: "#hero-glow-2", x: -40, y: -20, duration: 10, delay: 1 }
  ]);
  // animationEngine.initTiltEffect('.tilt-card', 15);
  animationEngine.initMarquee('#testimonial-track');

});
console.log('Systems initialized...');