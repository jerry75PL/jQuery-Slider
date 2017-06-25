'use strict';

$(function () {

    //    Zmienne
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
    var singleSlide = $('.single-slide');
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;


    //Szerokość kontenera
    slideShow.css('width', slideCount * 100 + '%');



    singleSlide.each(function (index) {

        $(this).css({
            'margin-left': index * slideWidth + '%',
            'width': slideWidth + '%'
        });

    });


    function slide(newSlideIndex) {


        if (newSlideIndex >= slideCount || newSlideIndex < 0) {
            return;
        }

        var marginLeft = (newSlideIndex * (-100) + '%');

        slideShow.animate({
            'margin-left': marginLeft
        }, 800, function () {
            slideIndex = newSlideIndex;
        });

    };


    $('.prev-slide').click(function () {
        console.log('DO TYŁU');

        slide(slideIndex - 1);

    });


    $('.next-slide').click(function () {
        console.log('DO PRZODU');
        slide(slideIndex + 1);
    });

});