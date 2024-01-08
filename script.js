const circleAnimation = document.getElementById('circleAnimation');
const content = document.querySelector('#about-me .profile');

setTimeout(function() {
    circleAnimation.style.display = 'none';
    if (content) {
        content.style.opacity = '0'; 
        fadeIn(content, 1000); 
    }
}, 3000);

function fadeIn(element, duration) {
    const startOpacity = 0;
    const endOpacity = 1;
    const startTime = performance.now();

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    function updateOpacity() {
        const elapsed = performance.now() - startTime;
        if (elapsed < duration) {
            const progress = elapsed / duration;
            const interpolatedOpacity = lerp(startOpacity, endOpacity, progress);
            element.style.opacity = interpolatedOpacity;
            requestAnimationFrame(updateOpacity);
        } else {
            element.style.opacity = endOpacity;
        }
    }

    element.style.display = 'block';
    updateOpacity();
}

const sections = document.querySelectorAll('main section');
const tabs = document.querySelectorAll('.menu ul li a');

tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSectionId = tab.getAttribute('href');

        sections.forEach(section => {
            section.style.display = 'none';
        });

        const targetSection = document.querySelector(targetSectionId);
        targetSection.style.display = 'block';
    });
});

const pythonProjectsLink = document.querySelector('.dropbtn');

pythonProjectsLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    console.log('Python Projects link is disabled.');
});

function setupCarousel(carousel) {
    const slides = carousel.querySelector('.slides');
    const slide = carousel.querySelectorAll('.slide');
    let slideIndex = 0;
    let clickCount = 0;

    function showSlides() {
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;

        const prevBtn = carousel.querySelector('.prevBtn');
        if (slideIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }
    }

    function nextSlide() {
        clickCount++;
        if (clickCount === 3) {
            clickCount = 0;
            slideIndex = 0;
        } else {
            slideIndex = (slideIndex + 1) % slide.length;
        }
        showSlides();
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slide.length) % slide.length;
        showSlides();
    }

    const prevBtn = carousel.querySelector('.prevBtn');
    const nextBtn = carousel.querySelector('.nextBtn');

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    showSlides();
}

const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    setupCarousel(carousel);
});


document.addEventListener('DOMContentLoaded', function() {
    const pythonProjectsLink = document.querySelector('.dropbtn');
    pythonProjectsLink.classList.add('disabled');
});

const goToTopButtons = document.querySelectorAll('.go-to-top-button');

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

goToTopButtons.forEach(button => {
    button.addEventListener('click', scrollToTop);
});

