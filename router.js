/**
 * KodNest Premium Build System — Router
 * Simple vanilla JS routing for Job Notification Tracker
 */

class Router {
  constructor() {
    this.routes = {
      '/': 'Dashboard',
      '/dashboard': 'Dashboard',
      '/saved': 'Saved',
      '/digest': 'Digest',
      '/settings': 'Settings',
      '/proof': 'Proof'
    };
    this.currentRoute = '/dashboard';
    this.init();
  }

  init() {
    // Wait for DOM
    const initRouter = () => {
      // Set up navigation click handlers
      const navLinks = document.querySelectorAll('.kn-nav__link');
      if (navLinks.length === 0) {
        console.error('No navigation links found!');
        return;
      }
      
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const path = link.getAttribute('href');
          this.navigate(path);
        });
      });

      // Handle hamburger toggle
      const toggle = document.querySelector('.kn-nav__toggle');
      if (toggle) {
        toggle.addEventListener('click', () => {
          const expanded = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', !expanded);
          const navList = document.querySelector('.kn-nav__list');
          if (navList) {
            navList.setAttribute('aria-hidden', expanded);
          }
        });
      }

      // Handle browser back/forward
      window.addEventListener('popstate', () => {
        this.handleRoute();
      });

      // Handle hash changes (fallback for file://)
      window.addEventListener('hashchange', () => {
        this.handleRoute();
      });

      // Initial route
      this.handleRoute();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initRouter);
    } else {
      initRouter();
    }
  }

  navigate(path) {
    // Normalize path
    if (!path || path === '/') {
      path = '/dashboard';
    }

    // Check if route exists
    if (this.routes[path]) {
      this.currentRoute = path;
      
      // Update URL (try pushState, fallback to hash for file://)
      const isFileProtocol = window.location.protocol === 'file:';
      
      if (isFileProtocol) {
        // For file://, use hash routing
        window.location.hash = path;
        // hashchange event will trigger handleRoute()
      } else {
        // For http/https, use pushState
        try {
          window.history.pushState({}, '', path);
          // Manually trigger route handling since pushState doesn't fire popstate
          this.handleRoute();
        } catch (e) {
          // Fallback to hash
          window.location.hash = path;
        }
      }
    } else {
      console.warn('Route not found:', path);
    }
  }

  handleRoute() {
    let path = window.location.pathname;
    
    // Handle hash-based routing (for file:// protocol)
    if (window.location.hash) {
      path = window.location.hash.replace('#', '');
    }
    
    // Handle file:// protocol (local files)
    if (path.includes('index.html') || path === '' || path === '/') {
      path = '/dashboard';
    }
    
    // Normalize path
    if (!this.routes[path]) {
      path = '/dashboard';
    }
    
    this.currentRoute = path;
    this.updateActiveLink();
    this.renderPage(this.routes[path]);
  }

  updateActiveLink() {
    const links = document.querySelectorAll('.kn-nav__link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === this.currentRoute) {
        link.classList.add('kn-nav__link--active');
      } else {
        link.classList.remove('kn-nav__link--active');
      }
    });
  }

  renderPage(pageName) {
    const main = document.querySelector('.kn-workspace__main');
    if (!main) {
      console.error('Could not find .kn-workspace__main element');
      return;
    }

    main.innerHTML = `
      <div class="kn-card">
        <h1 class="kn-headline">${pageName}</h1>
        <p class="kn-subhead">
          This section will be built in the next step.
        </p>
      </div>
    `;
  }
}

// Initialize router
const router = new Router();
