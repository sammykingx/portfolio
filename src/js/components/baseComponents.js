export class BaseComponent extends HTMLElement {
    constructor() {
        super();
    }

    render(html) {
        this.innerHTML = html;
        // Re-trigger AOS and GSAP if necessary after injection
        if (window.AOS) window.AOS.refresh();
    }
}