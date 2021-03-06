// Мобильное меню
document.getElementById("mobile_menu_open_btn").onclick = function (e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("fix");
    document.getElementById("mobile_menu_open_btn").classList.toggle("active");
    document.getElementById("mobile_menu_list_ulli").classList.toggle("active");
}

// Инициализация owlCarousel
$(document).ready(function () {
    $('.main_carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            600: {
                items: 1,
                loop: true
            },
            1000: {
                items: 1,
                loop: false
            }
        }
    });


    $('.carousel_reviews').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        center: true,
        navText: ['<img src="../img/arrow-prew.svg" alt="img">', '<img src="../img/arrow-next.svg" alt="img">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

});

// Q&A
$(function () {
    $("#accordion").accordion({
        header: '> .accordion_info > .accordion__head',
        heightStyle: "content",
        active: true,
        collapsible: true
    });
});

// Инициализация Fancybox
$(document).ready(function () {
    $().fancybox({
        selector: '[data-fancybox="gallery"]',
        loop: true
    });
});

// Плавный скролл
$(document).ready(function () {
    let $page = $('html, body');
    $('a[href="#footer_form"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1400);
        return false;
    });
});

// Анимированое появление элементов
$(document).ready(function () {
    new WOW().init();
});