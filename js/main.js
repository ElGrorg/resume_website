// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Dark/Light mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference or use the system preference
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        // Toggle dark class on html element
        document.documentElement.classList.toggle('dark');
        
        // Update localStorage
        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll buttons for projects container
    document.getElementById('scroll-left').addEventListener('click', () => {
        const container = document.getElementById('projects-container');
        container.scrollBy({ left: -300, behavior: 'smooth' });
    });

    document.getElementById('scroll-right').addEventListener('click', () => {
        const container = document.getElementById('projects-container');
        container.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Simplify the hamburger menu toggle to only open and close on click
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerMenu.addEventListener('click', () => {
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.style.transform = 'scaleY(0)';
            setTimeout(() => mobileMenu.classList.remove('open'), 300); // Match transition duration
        } else {
            mobileMenu.classList.add('open');
            mobileMenu.style.transform = 'scaleY(1)';
        }
    });
});