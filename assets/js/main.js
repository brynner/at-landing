/*!
 * Author: Brynner Ferreira
 * http://brynner.net
 *
 */

document.addEventListener("DOMContentLoaded", function(event) {
    
    // List all slides
    let slides = document.querySelectorAll('.slides .slide');
    let slideNav = document.querySelector('.slide-nav');

    // Generate the nav
    for (let i = 0; i < slides.length; i++) {
        const slideNavItem = document.createElement('li');
        slides[i].id = 'slideItem-'+(i+1);

        slideNavItem.id = 'slideNav-'+(i+1);
        slideNav.appendChild(slideNavItem);
    }

    // Events
    let slideNavItems = document.querySelectorAll('.slide-nav li');

    for (let i = 0; i < slideNavItems.length; i++) {
        const element = slideNavItems[i];

        element.addEventListener('click', function(event) {
            stopSlide();
            const slideNavId = this.id.split('-');
            goToSlide(slideNavId[1]);
        });
    }

    // Start Slides
    let nextSlide = 1;
    let currentSlide = 0;
    let slideInterval = setInterval(playSlide,4000);

    // Active
    slides[currentSlide].className = 'slide active';
    slideNavItems[currentSlide].className = 'slide active';

    function stopSlide() {
        clearInterval(slideInterval);
    }

    function playSlide() {
        nextSlide = nextSlide+1;
        if (nextSlide > slides.length) {
            nextSlide = 1
        }
        goToSlide(nextSlide);
    }

    function goToSlide(n) {
        slides[currentSlide].className = 'slide';
        slideNavItems[currentSlide].className = 'slide';
        currentSlide = n-1;
        slides[currentSlide].className = 'slide active';
        slideNavItems[currentSlide].className = 'slide active';
    }
    
});