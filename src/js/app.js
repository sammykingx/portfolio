import { Navigation } from './utils/navigation.js';
import { GSAPAnimationEngine } from './utils/gsapAnimation.js';
import { runPageAnimations } from './pageAnimations.js';

/** 
 * Global Initializers: Runs on every page
 */
export const initGlobalSystems = () => {
    new Navigation({
        toggleId: 'menu-toggle',
        menuId: 'mobile-menu',
        linkSelector: '.nav-link-mobile'
    });

    AOS.init({
        once: false,
        easing: 'ease-out-quart',
        duration: 1000,
    });
};


export const initApp = (pageName) => {
    const animationEngine = new GSAPAnimationEngine();
    runPageAnimations(pageName, animationEngine);
};