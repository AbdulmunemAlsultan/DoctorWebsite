$(document).ready(function() {
    $(".slidDoctor").click(function() {
        $('.form-doctor').slideDown(1500);

        $('.form-doctor').css({
            'display': 'block'
        })
        $('.form-pationt').slideUp(1500);
    });

    $(".slidpatiant").click(function() {
        $('.form-doctor').slideUp(1500)

    });


    $(".slidpatiant").click(function() {
        $('.form-pationt').slideDown(1500)
        $('.form-pationt').css({
            'display': 'block'
        })

    });


    $("#pat").click(function() {
        $('.form-doctor').show(1500)

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

    // login page vildation


    // 

});
