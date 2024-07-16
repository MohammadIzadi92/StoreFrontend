// ===== amazing product in index page ==================================================

var swiper = new Swiper(".amazing-product-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".amazing-product-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".amazing-product-swiper-button-next",
        prevEl: ".amazing-product-swiper-button-prev",
    },
    breakpoints: {
        400: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1400: { slidesPerView: 6 },
    },
});

// ===== hot product in index page ======================================================

var swiper = new Swiper(".hot-product-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".hot-product-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".hot-product-swiper-button-next",
        prevEl: ".hot-product-swiper-button-prev",
    },
    breakpoints: {
        400: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1400: { slidesPerView: 6 },
    },
});

// ===== category in index page =========================================================

var swiper = new Swiper(".category-swiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        100: { slidesPerView: 2 },
        200: { slidesPerView: 3 },
        300: { slidesPerView: 4 },
        400: { slidesPerView: 5 },
        500: { slidesPerView: 6 },
        600: { slidesPerView: 7 },
        700: { slidesPerView: 8 },
        800: { slidesPerView: 9 },
        900: { slidesPerView: 10 },
        1000: { slidesPerView: 11 },
        1100: { slidesPerView: 12 },
        1200: { slidesPerView: 13 },
        1300: { slidesPerView: 14 },
        1400: { slidesPerView: 15 },
        1500: { slidesPerView: 16 },
        1600: { slidesPerView: 17 },
    },
});

// ===== similar product in basket page =================================================

var swiper = new Swiper(".basket-similar-product-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".basket-similar-product-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".basket-similar-product-swiper-button-next",
        prevEl: ".basket-similar-product-swiper-button-prev",
    },
    breakpoints: {
        400: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1400: { slidesPerView: 6 },
    },
});

// ===== similar product in singel product page =========================================

var swiper = new Swiper(".singel-product-similar-product-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".singel-product-similar-product-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".singel-product-similar-product-swiper-button-next",
        prevEl: ".singel-product-similar-product-swiper-button-prev",
    },
    breakpoints: {
        400: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1400: { slidesPerView: 6 },
    },
});

// ===== image in singel product page ===================================================

var swiper = new Swiper(".single-product-image-swiper", {
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    spaceBetween: 0,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        100: { slidesPerView: 2 },
        200: { slidesPerView: 3 },
        300: { slidesPerView: 5 },
        400: { slidesPerView: 7 },
        500: { slidesPerView: 8 },
        600: { slidesPerView: 9 },
        700: { slidesPerView: 10 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 6 },
        1200: { slidesPerView: 5 },
    },
});

// ===== category image in singel product page ==========================================

var swiper2 = new Swiper(".single-product-category-image-swiper", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});