$(function () {


    function handleScroll() {
        var scrollDowns = document.querySelector('.scroll-downs');
        if (window.scrollY > 0) {
            scrollDowns.style.display = 'none';
        } else {
            scrollDowns.style.display = 'block';
        }
    }

    window.addEventListener('scroll', handleScroll);


$('#main_visual .main_visual_slide').slick({
    arrows: false,
    loop: true,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
    dots:true
});


$('#main_visual .arrows .prev').on('click', function () {
    $('#main_visual .main_visual_slide').slick('slickPrev')
});
$('#main_visual .arrows .next').on('click', function () {
    $('#main_visual .main_visual_slide').slick('slickNext')
});


$('#main_content .content .content_menu li button').on('click', function () {
    $(this)
        .parent()
        .addClass('on')
        .siblings()
        .removeClass('on');

    let idx = $(this).parent().index();

    $('#main_content .content .list ul')
        .eq(idx)
        .addClass('on')
        .siblings()
        .removeClass('on');


    $('#main_content .sub_list>div')
        .eq(idx)
        .addClass('on')
        .siblings()
        .removeClass('on');
});
$('#main_content .list>ul>li button').on('click', function () {

    $(this)
        .parent()
        .addClass('on')
        .siblings()
        .removeClass('on');

    let idx = $(this).parent().index();

    $('#main_content .sub_list .cat_list ul')
        .eq(idx)
        .addClass('on')
        .siblings()
        .removeClass('on');

});



$('#main_product .cat_silde').slick({

    slidesToShow: 4,
    pauseOnHover: false,
    arrows: false

});

$('#main_product .cat_arrows .prev').on('click', function () {
    $('#main_product .cat_silde').slick('slickPrev')
});
$('#main_product .cat_arrows .next').on('click', function () {
    $('#main_product .cat_silde').slick('slickNext')
});

$('#main_product .dog_silde').slick({

    slidesToShow: 4,
    pauseOnHover: false,
    arrows: false

});

$('#main_product .dog_arrows .prev').on('click', function () {
    $('#main_product .dog_silde').slick('slickPrev')
});
$('#main_product .dog_arrows .next').on('click', function () {
    $('#main_product .dog_silde').slick('slickNext')
});


$('.to_top button').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 600);
});

$(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    console.log(sct);

    if (sct > 200) {
        $('.to_top').addClass('on')
    } else {
        $('.to_top').removeClass('on')
    }


});


});


