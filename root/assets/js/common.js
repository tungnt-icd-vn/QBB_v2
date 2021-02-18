$(document).ready(function() {
    $(".c-header__toggle").click(function() {
        $(this).toggleClass('is-active');
        $(this).parents().find('.c-nav').toggleClass('is-active');
    });
    $(".is-child").click(function() {
        $(this).find('.sub-menu').toggleClass('is-active');
        $(this).find('.icon-child').toggleClass('is-active');
    });
});