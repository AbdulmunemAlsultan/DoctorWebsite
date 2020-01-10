$(document).ready(function() {
    $("#doc").click(function() {
        $('.form-pationt').hide(1500)
        $('.form-doctor').show(1500)
    });
    $("#pat").click(function() {
        $('.form-doctor').hide(1500)
        $('.form-pationt').show(1500)
    });
    if ($(window).width() <= 750.99) {
        $('.processimge').click(function() {
            $('.smaildeve').show(500);
            $('.smaildeve').css('display', 'block');
        })
        $('.processimge').dblclick(function() {
            $('.smaildeve').hide(500);

        })

    } else if ($(window).width() > 750.99) {
        $('.smaildeve').remove();
    }

});