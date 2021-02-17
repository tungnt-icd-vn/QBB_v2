$(document).ready(function() {
    $(".c-header__toggle").click(function() {
        $(this).toggleClass('is-active');
        $(this).parents().find('.c-nav').toggleClass('is-active');
    });
    $(".is-child").click(function() {
        $(this).parents().find('.sub-menu').toggleClass('is-active');
    });
});