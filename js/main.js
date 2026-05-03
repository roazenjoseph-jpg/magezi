/* =============================================
    ANESIS AIR SOLUTIONS - MAIN JAVASCRIPT
    Author: Anesis Air Solutions
    Version: 2.0
    ============================================= */

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initGallerySlider();
    initTestimonialCarousel();
    initProductAnimations();
    initHeroBackgroundSlider();
    initFormHandler();
});

/**
 * Mobile Navigation Menu Control
 */
function initNavigation() {
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.getElementById('menu-btn');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    }

    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when navigation link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
}

/**
 * Before/After Gallery Slider
 */
let galleryIndex = 0;

function initGallerySlider() {
    setInterval(rotateGallery, 4000);
}

function rotateGallery() {
    const beforeSlides = document.querySelectorAll('.before-container .slide');
    const afterSlides = document.querySelectorAll('.after-container .slide');
    
    beforeSlides[galleryIndex].classList.remove('active');
    afterSlides[galleryIndex].classList.remove('active');

    galleryIndex = (galleryIndex + 1) % beforeSlides.length;

    beforeSlides[galleryIndex].classList.add('active');
    afterSlides[galleryIndex].classList.add('active');
}

/**
 * Testimonial Carousel
 */
let currentSlide = 0;

function initTestimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('button[onclick="prevSlide()"]');
    const nextBtn = document.querySelector('button[onclick="nextSlide()"]');

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    setInterval(nextSlide, 6000);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.testimonial-slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

function nextSlide() {
    const slides = document.querySelectorAll('.testimonial-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.testimonial-slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

/**
 * Product Cards Animation on Scroll
 */
function initProductAnimations() {
    const productObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(50px)';
        card.style.transitionDelay = `${index * 0.1}s`;
        productObserver.observe(card);
    });
}

/**
 * Hero Background Image Slider
 */
function initHeroBackgroundSlider() {
    const images = [
        "img/s.jpg.jpg",
        "img/f.jpg.jpg",
        "img/ty.jpg.jpg"
    ];

    let index = 0;
    let currentBg = 1;

    const bg1 = document.querySelector(".bg1");
    const bg2 = document.querySelector(".bg2");

    // Initial setup
    bg1.style.backgroundImage = `url('${images[0]}')`;
    bg2.style.backgroundImage = `url('${images[1]}')`;

    function changeBackground() {
        if (currentBg === 1) {
            bg2.style.backgroundImage = `url('${images[index]}')`;
            bg2.style.opacity = 1;
            bg1.style.opacity = 0;
            currentBg = 2;
        } else {
            bg1.style.backgroundImage = `url('${images[index]}')`;
            bg1.style.opacity = 1;
            bg2.style.opacity = 0;
            currentBg = 1;
        }

        index = (index + 1) % images.length;
    }

    setInterval(changeBackground, 5000);
}

/**
 * Contact Form Submission Handler
 */
function initFormHandler() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            setTimeout(() => {
                alert("✅ Thank you! Your message has been received. We'll get back to you soon.");
            }, 600);
        });
    }
}