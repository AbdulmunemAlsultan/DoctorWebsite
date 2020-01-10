$(document).ready(function() {
    $("#doc").click(function() {
        $('.form-pationt').hide(1500)
        $('.form-doctor').show(1500)
    });
    $("#pat").click(function() {
        $('.form-doctor').hide(1500)
        $('.form-pationt').show(1500)
    });
    if ($(window).width() <= 480.99) {

        $('.processimge').click(function() {
            $('.smaildeve').css('display', 'block');
        })

    } else {
        $('.smaildeve').hide(500);
        console.log("more windows")
    }

});