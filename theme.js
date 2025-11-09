// Theme Toggle - Works on all pages
(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.querySelector('.theme-icon');
        
        if (!themeToggle) return;
        
        // Load saved theme or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);
        
        // Toggle theme on button click
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
        
        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            updateIcon(theme);
        }
        
        function updateIcon(theme) {
            if (themeIcon) {
                themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
            }
        }
    });
})();