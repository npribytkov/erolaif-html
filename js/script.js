$(document).ready(function () {
    /* меню ***********************************/


    $('.menu_nav_top').hover(function () {
        $('.menu_nav_top').removeClass('active');
        $('.menu_nav_list').removeClass('active');
        $(this).addClass('active');
        $(this).find('.menu_nav_list').addClass('active');
    })

    $(".menu_mob_close").click(function () {
        $(".menu_wrap").toggleClass("active");
    });

    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $(window).scroll(function() {

        var header = $('.header').offset().top;
        if(header > 100){
            $('header').addClass('fixed');
        } else{
            $('header').removeClass('fixed');
        }

    });

    $(".menu_btn").click(function () {
        $(this).toggleClass('active');
        $('.menu_wrapper').toggleClass('active');
    });

    $(".menu_btn_close").click(function () {
        $('.menu_wrapper').removeClass('active');
    });

    $(".menu_nav_top").click(function () {
        $('.menu_nav_top').removeClass('active');
        $('.menu_nav_list').removeClass('active');
        let _parent = $(this).closest(".menu_nav_top");

        var menuNav = $(this).attr('menu-nav'),
            menuList = $('.menu_nav_list[menu-nav="'+ menuNav +'"]');
        $(this, _parent).addClass('active');
        menuList.addClass('active');
    });

    $(".page_catalog_nav_btn").click(function () {
        let _parent = $(this).closest(".page_catalog_nav_block");

        if($('.page_catalog_nav_btn', _parent).hasClass('active')){
            $('.page_catalog_nav_list', _parent).slideUp(250);
        }
        else {
            $('.page_catalog_nav_list', _parent).slideDown({
                duration: 250,
                start: function () {
                    $(this).css({
                        display: "flex"
                    })
                }
            });
        }

        if($('.page_catalog_nav_btn', _parent).hasClass('active')){
            $('.page_catalog_nav_btn', _parent).removeClass('active');
        }
        else {
            $('.page_catalog_nav_btn', _parent).addClass('active');
        }
    });

    $(".page_catalog_filter_btn").click(function () {
        let _parent = $(this).closest(".page_catalog_filter_block");

        $('.page_catalog_filter_btn', _parent).toggleClass('active');

        if($('.page_catalog_filter_btn', _parent).hasClass('active')) {
            $('.page_catalog_filter_list', _parent).slideDown(250);
            $('.page_catalog_filter_price', _parent).slideDown(250);
            $('.page_catalog_filter_price', _parent).toggleClass('active');
        }
        else {
            $('.page_catalog_filter_list', _parent).slideUp(250);
            $('.page_catalog_filter_price', _parent).slideUp(250);
            $('.page_catalog_filter_price', _parent).toggleClass('active');
        }
    });

    $(".filter_btn").click(function () {
        $(this).toggleClass('active');
    });

    $(".page_catalog_sorting_price").click(function () {
        $(this).toggleClass('active');
    });

    $(".filter_btn").click(function () {
        let _parent = $(this).closest(".page_catalog_sorting_list");

        $('.filter_btn', _parent).removeClass('active');
        $('.filter_btn', _parent).addClass('active');
    });

    $(".page_catalog_sorting_list").each(function (i, e) {
        $('.filter_btn', e).click(function(evet) {
            $('.filter_btn').removeClass('active');
            $(this).addClass('active');

            $('.page_catalog_sorting_item').text($(this).text());

            $('.page_catalog_sorting_list').removeClass('active');
            $('.page_catalog_sorting_item').removeClass('active');
        });
    });

    $(".page_catalog_sorting_item").click(function () {
        $(this).toggleClass('active');
        $('.page_catalog_sorting_list').toggleClass('active');
    });

    $(".page_products_payments_btn").click(function () {
        $(this).toggleClass('active');
        $('.page_products_payments_list').toggleClass('active');
    });

    // $(".page_catalog_filter_list").mCustomScrollbar({
    //     axis: "y",              // вертикальный скролл
    //     theme: "rounded-dark",  // тема
    //     scrollInertia: "280",   // продолжительность прокрутки, значение в миллисекундах
    //     setHeight: "100%",      // высота блока (переписывает CSS)
    //     mouseWheel: {
    //         deltaFactor: 100    // кол-во пикселей на одну прокрутку колёсика мыши
    //     }
    // });

    // $(".menu_nav").mCustomScrollbar({
    //     axis: "y",              // вертикальный скролл
    //     theme: "rounded-dark",  // тема
    //     scrollInertia: "280",   // продолжительность прокрутки, значение в миллисекундах
    //     setHeight: "100%",      // высота блока (переписывает CSS)
    //     mouseWheel: {
    //         deltaFactor: 100    // кол-во пикселей на одну прокрутку колёсика мыши
    //     }
    // });

    /* product gallery */

    $('.products_gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.products_gallery_thumb',
        arrows: false,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        fade: true,
        cssEase: 'linear',
    });

    $('.products_gallery_thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        asNavFor: '.products_gallery',
        focusOnSelect: true,
        centerMode: false,
    });

    /* products related */

    $('.products_related_wrap').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    InitStickySideBar = function () {
        if($('.sticky-sidebar').length === 0) return;

        $(".sticky-sidebar").stickySidebar({
            topSpacing: 95,
            resizeSensor: true,
            containerSelector: '.page_catalog_left',
            innerWrapperSelector: 'sticky-sidebar__inner'
        });
    };

    InitStickySideBar();


    $(document).on('click', '.js-open-catalog', function (){
        $(this).toggleClass('active');
        $('.menu_wrapper').toggleClass('active');
    });

    $(document).on('click', '.js-nav-back', function (){
        $(this).parents('.menu_nav_list').removeClass('active');
        $(this).parents('.menu_nav_top').removeClass('active');
    })
    $(document).on('click', '.menu_nav_tabs a', function (){
        var type = $(this).data('type');
        if (type) {
            $('.menu_nav_tabs a.active').removeClass('active');
            $('.menu_nav_top-list.show').removeClass('show');
            $(this).addClass('active');
            $('.menu_nav_top-list[data-type="' + type +'"]').addClass('show');
        }
    })
})