//===================// Loader Start //=================== //
    $(window).on('load', function(){
        $('body').addClass('site-loaded');
    });
//===================// Loader End //=================== //
$(document).ready(function() {


    //===================// Menu Open Start //=================== //
    $('.navbar-toggler').on('click', function(){
        $('body').toggleClass('menu-open');
    });
    $('.nav-link').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    //===================// Menu Open End //=================== //

    //===================// Video Play Start //=================== //

    $('.landing-video').parent().click(function() {
        if ($(this).children(".landing-video").get(0).paused) {
            $(this).children(".landing-video").get(0).play();
            $(this).children(".landing-video-icon").fadeOut(500);
        } else {
            $(this).children(".landing-video").get(0).pause();
            $(this).children(".landing-video-icon").fadeIn(500);
        }
    });
    //===================// Video Play End //=================== //
    $('.landing-video-icon').click(function() {
        $(this).toggleClass('show')
    })


    //================// Rent Slider Start //=======================//
    setTimeout(function(){
        $('.rent-slider-list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: true,
            speed: 1000,
            // autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
            ]
        });
    }, 2000);
    //================// Rent Slider End //=======================//

    //================// Property Detail Slider Start //=======================//

    $('.property-detail-slider-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        speed: 1000,
        // autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });

    //================// Property Detail Slider End //=======================//
    if ($('.form-select').length > 0   ) {
        var $disabledResults = $(".form-select");
        $disabledResults.select2();
        $('select').select2({
            minimumResultsForSearch: -1
        });
    }

    var $sliderValue = $(".range-slider[type=range]").val(),
        $sliderCounterContainer = $(".slider-counter-container"),
        $sliderCounter = $('.slider-counter'),
        $rangeSlider = $(".range-slider");

    // set value initially
    $sliderCounterContainer.append('/' + $rangeSlider.attr("max"))
    $sliderCounter.html($sliderValue)

    // update value on scrub
    $rangeSlider.on("input", function() {
        $sliderValue = $(this).val();
        $sliderCounter.html($sliderValue)
    });

});