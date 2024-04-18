$(window).on('load resize orientationchange', function() {
  $("#countrySlider").each(function() {
    var $slider = $(this);
    if($(window).outerWidth() > 768) {
      if($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    } else {
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            mobileFirst: true,
        });
      }
    }
  });
});