import './components/shared/header.js';
import './components/shared/footer.js';

// Home Page Components
import './components/homePage/hero.js';
import './components/homePage/projects.js';
import './components/homePage/codePhilosophy.js';
import './components/homePage/services.js';
import './components/homePage/partners.js';
import './components/homePage/socialProof.js';
import './components/homePage/closingCTA.js';

// Project Components
import './components/projects/projectDetails.js';
import './components/projects/projectCards.js';

// Case Study Components
import './components/caseStudies/cards.js';
import './components/caseStudies/details.js';

// LinkedIn Article Component
import './components/linkedLnArticle.js';


import { initApp, initGlobalSystems } from './app.js';
import { componentMap } from './components/registry.js';

const DEFAULT_COMPONENTS = [
  'app-header',
  'app-footer',
  'home-hero',
  'home-projects',
  'home-philosophy',
  'home-services',
  'home-partners',
  'home-social-proof',
  'home-cta'
];

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = document.body.dataset.page;
  const currentComponents = componentMap[currentPage] || DEFAULT_COMPONENTS;

  Promise.all(currentComponents.map(
    tag => customElements.whenDefined(tag)))
    .then(() => {
      requestAnimationFrame(() => {
        initGlobalSystems();
        initApp(currentPage);
      });
  });
});
