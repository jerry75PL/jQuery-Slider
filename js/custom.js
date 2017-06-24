'use strict';

$(function () {

    //    Zmienne
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');


    //Szerokość kontenera
    slideShow.css('width', slideCount * 100 + '%');
    console.log(slideCount);


});