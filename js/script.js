$('.menu_nav_top').hover(function () {
    if($(window).width() <= 991) return;
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

$('.page_catalog_sorting_list .filter_btn').click(function(evet) {
    $('.filter_btn').removeClass('active');
    $(this).addClass('active');

    $('.page_catalog_sorting_item').text($(this).text());

    $('.page_catalog_sorting_list').removeClass('active');
    $('.page_catalog_sorting_item').removeClass('active');
});

$(".page_catalog_sorting_item").click(function () {
    $(this).toggleClass('active');
    $('.page_catalog_sorting_list').toggleClass('active');
});

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
            }
        },
        {
            breakpoint: 521,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});

InitStickySideBar = function () {
    if($('.sticky-sidebar').length === 0) return;

    if($(window).width() <= 991) return;

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

if($('.page_catalog_category').length > 0)
if ($(window).width() <= 991) {
    $('.page_catalog_category').slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 571,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 521,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
}

if($(".btn-outline").length > 0) {
    var animStart = false, timerEnter = null;

    $(document).on({
        mouseenter: function () {
            var path = $(this).find("path");
            if (animStart = !animStart) {
                var t = 0;
                timerEnter = setInterval(function () {
                    path.eq(t).fadeTo(250, 0), setTimeout(function () {
                        path.eq(t).fadeTo(250, 1), t = t === path.length - 1 ? 0 : t + 1
                    }, 1)
                }, 150)
            }
        }, mouseleave: function () {
            var path = $(this).find("path");
            animStart = false, clearInterval(timerEnter), setTimeout(function () {
                path.each(function (path, t) {
                    path < 2 && $(t).fadeTo(150, 0)
                })
            }, 1)
        }
    }, ".btn-outline")
}

$(document).on('click', '.js-close-sorting_nav', function (){
    $('.page_catalog_sorting_list').removeClass('active');
    $('.page_catalog_sorting_item').removeClass('active');
});

$(document).on('click', '.js-open-mob-filter', function () {
    $('.page_catalog_left').addClass('show');
    $('.page_catalog_filter').addClass('show');
})
$(document).on('click', '.js-close-catalog_filter', function () {
    $('.page_catalog_left').removeClass('show');
    $('.page_catalog_filter').removeClass('show');
})

$(document).mouseup( function(e){ // событие клика по веб-документу
    var block = $( ".menu_wrapper.active" ),
        btnCatalog = $('.menu_btn'),
        btnCatalogName = $('.menu_btn *');
    if ( !block.is(e.target) && !btnCatalog.is(e.target) && !btnCatalogName.is(e.target)
        && block.has(e.target).length === 0 ) {
        block.removeClass('active');
        btnCatalog.removeClass('active');
    }
});