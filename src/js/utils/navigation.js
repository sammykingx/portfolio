/**
 * Navigation Utility for Sammy Kingx Portfolio
 * Handles mobile menu transitions and scroll locking
 */
export class Navigation {
    constructor(config) {
        this.toggle = document.getElementById(config.toggleId);
        this.menu = document.getElementById(config.menuId);
        this.links = document.querySelectorAll(config.linkSelector);
        this.body = document.body;
        this.isOpen = false;

        if (this.toggle && this.menu) {
            this.init();
        }
    }

    init() {
        this.toggle.addEventListener('click', () => this.toggleMenu());

        // Close menu on link click (for SPAs or anchor navigation)
        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) this.closeMenu();
        });
    }

    toggleMenu() {
        this.isOpen ? this.closeMenu() : this.openMenu();
    }

    openMenu() {
        this.isOpen = true;
        this.toggle.classList.add('is-active');
        this.menu.classList.add('active');
        this.body.classList.add('menu-open');
        // Accessibility
        this.toggle.setAttribute('aria-expanded', 'true');
    }

    closeMenu() {
        this.isOpen = false;
        this.toggle.classList.remove('is-active');
        this.menu.classList.remove('active');
        this.body.classList.remove('menu-open');
        // Accessibility
        this.toggle.setAttribute('aria-expanded', 'false');
    }
}