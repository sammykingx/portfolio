import { BaseComponent } from '../baseComponents.js';

export class AppHeader extends BaseComponent {
    connectedCallback() {
        this.render(`
            <div class="fixed top-[10%] left-[10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full pointer-events-none animate-subtle-glow"></div>
            <header class="fixed top-6 left-0 w-full z-50 px-4 md:px-6">
                <nav class="max-w-4xl mx-auto flex justify-between items-center glass-header px-4 py-2 md:px-6 md:py-2.5 rounded-full relative z-50">
                    <a href="#" class="flex items-center gap-3">
                        <div class="w-7 h-7 bg-white rounded flex items-center justify-center">
                            <span class="text-black font-heading font-extrabold text-xs">S</span>
                        </div>
                        <span class="font-heading text-xs font-extrabold tracking-tight">SAMMY KINGX</span>
                    </a>
                    <ul class="hidden md:flex items-center gap-10">
                        <li><a href="#projects" class="nav-link">Systems</a></li>
                        <li><a href="#stack" class="nav-link">Stack</a></li>
                        <li><a href="#contact" class="nav-link">Direct</a></li>
                    </ul>
                    <div class="hidden md:block">
                        <a href="#contact" class="btn-premium">Talk Product</a>
                    </div>
                    <button id="menu-toggle" class="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none" aria-label="Toggle Menu" aria-expanded="false">
                    <span class="hamburger-line line-1"></span>
                    <span class="hamburger-line line-2 w-4 ml-auto"></span>
                    <span class="hamburger-line line-3"></span>
                    </button>
                </nav>
                <div id="mobile-menu" class="mobile-menu-overlay flex flex-col justify-center px-10 md:hidden">
                    <div class="flex flex-col gap-8">
                        <span class="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Navigation</span>
                        <nav class="flex flex-col gap-6">
                            <a href="#projects" class="nav-link-mobile">Systems</a>
                            <a href="#stack" class="nav-link-mobile">Stack</a>
                            <a href="#contact" class="nav-link-mobile">Direct</a>
                        </nav>
                        <div class="h-px w-full bg-white/10 my-4"></div>
                        <span class="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Collaboration</span>
                        <a href="#contact" class="btn-premium w-full text-center py-4 text-sm">Start a Project</a>
                        <div class="flex gap-6 mt-4">
                            <a href="#" class="text-xs text-gray-500 hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" class="text-xs text-gray-500 hover:text-white transition-colors">GitHub</a>
                            <a href="#" class="text-xs text-gray-500 hover:text-white transition-colors">X / Twitter</a>
                        </div>
                    </div>
                </div>
            </header>
        `);
    }
}

// customElements.define('app-header', AppHeader);

if (!customElements.get('app-header')) {
    customElements.define('app-header', AppHeader);
}
