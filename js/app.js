document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        initialSlide: 0,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 'auto',
            }
        }
    });

    // Add hover effect to slides
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            slide.style.transform = 'scale(1.05)';
        });
        slide.addEventListener('mouseleave', () => {
            slide.style.transform = 'scale(1)';
        });
    });

    // Event Button Click Handler
    document.querySelectorAll('.event-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const eventTitle = e.target.closest('.event-info').querySelector('h2').textContent;
            alert(`More details about ${eventTitle} will be shown here!`);
        });
    });

    // Add neon glow effect on hover for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 0 20px var(--neon-purple)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = 'none';
        });
    });

    // Add smooth scroll for better mobile experience
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});