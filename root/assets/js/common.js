$(document).ready(function() {
    $(".c-header__toggle").click(function(){
        $(this).toggleClass('is-active');
        $(this).parents().find('.c-nav').toggleClass('is-active');
    });
});