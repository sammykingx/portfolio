import './components/shared/header.js';
import './components/shared/footer.js';
import './components/homePage/hero.js';
import { Navigation } from './utils/navigation.js';
import { GSAPAnimationEngine } from './utils/gsapAnimation.js';


const initApp = () => {
  const nav = new Navigation({
    toggleId: 'menu-toggle',
    menuId: 'mobile-menu',
    linkSelector: '.nav-link-mobile'
  });

  const animationEngine = new GSAPAnimationEngine();
  animationEngine.initAmbientMotion([
    { id: "#hero-glow-1", x: 50, y: 30, duration: 8 },
    { id: "#hero-glow-2", x: -40, y: -20, duration: 10, delay: 1 }
  ]);

  animationEngine.initMarquee('#testimonial-track');
  // animationEngine.initTiltEffect('.tilt-card', 15);

  AOS.init({
    once: false,
    easing: 'ease-out-quart',
    duration: 1000,
  });
};

document.addEventListener('DOMContentLoaded', () => {
  Promise.all([
    customElements.whenDefined('app-header'),
    customElements.whenDefined('app-footer'),
    customElements.whenDefined('home-hero'),
  ]).then(() => {
    // Shortest possible delay to ensure the browser has painted the innerHTML
    requestAnimationFrame(() => {
      initApp();
    });
  });
});

console.log('Systems initialized...');