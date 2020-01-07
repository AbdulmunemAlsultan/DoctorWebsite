$(document).ready(function() {


    $("#doc").click(function() {
        $('.form-doctor').css({
            'display': 'inline-block'
        })
        $('.form-pationt').css({
                'display': 'none'
            })
            // $(".radiobutton").css({
            //     'display': 'none'
            // });

    });


    $("#pat").click(function() {
        $('.form-pationt').css({
            'display': 'inline-block'
        })

        $('.form-doctor').css({
            'display': 'none'
        })
    });
    // $(".radiobutton").css({
    //     'display': 'none'
    // });



});