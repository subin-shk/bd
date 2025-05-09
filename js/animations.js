document.addEventListener('DOMContentLoaded', () => {
    // Add entrance animations to elements
    const elements = [
        { selector: '.title', delay: 0 },
        { selector: '.subtitle', delay: 300 },
        { selector: '.cake-container', delay: 600 }
    ];

    elements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease';

            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    });

    // Add hover effects
    document.querySelectorAll('.balloon').forEach(balloon => {
        balloon.addEventListener('mouseover', () => {
            balloon.style.transform = 'scale(1.1)';
        });

        balloon.addEventListener('mouseout', () => {
            balloon.style.transform = 'scale(1)';
        });
    });
});