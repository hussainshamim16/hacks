console.log("ready")
document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    let camoServicesClider = new Swiper(".camo-services-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        // initialSlide: 1,
        // centeredSlides: false,
        // autoplay: true,
        loop: true,
        grabCursor: true,
        breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 1 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 2.5, spaceBetween: 10 },
            1300: { slidesPerView: 3.1, spaceBetween: 20 }
        }
    });


    AOS.init({ offset: 120, delay: 0, duration: 800 });
});

