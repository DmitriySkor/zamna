// Мобильное меню
document.getElementById("mobile_menu_open_btn").onclick = function (e){
    e.preventDefault();
    document.querySelector("body").classList.toggle("fix");
    document.getElementById("mobile_menu_open_btn").classList.toggle("active");
    document.getElementById("mobile_menu_list_ulli").classList.toggle("active");
}

// Инициализация owlCarousel
$(document).ready(function () {
    $('.main_carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop:true
            },
            600:{
                items:1,
                loop:true
            },
            1000:{
                items:1,
                loop:false
            }
        }
    });
});

// Инициализация jQueryFormStyler
// Для активации плагина примените метод .styler к тегам, которые хотите стилизовать
// флажок <input type="checkbox">;
// переключатель <input type="radio">;
// поле для выбора файла <input type="file">.
// поле для ввода чисел <input type="number">.
// раскрывающийся список <select>;
(function ($) {
    $(function () {
        $('input, select').styler();
    });
})(jQuery);

// Инициализация Fancybox
$().fancybox({
    selector: '[data-fancybox="gallery"]',
    loop: true
});

//Инициализация маски ввода телефона
jQuery(function ($) {
    $(".masked-input").mask("+38 ( 999 ) 999-99-99");
});

