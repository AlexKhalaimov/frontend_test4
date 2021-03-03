import 'slick-carousel/slick/slick'
;(function ($) {
  const sliderMainOptions = {
    infinite: false,
    fade: true,
    arrows: false,
    appendArrows: $('.slider-main__buttons'),
    asNavFor: '.slider-thumbs',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          arrows: true,
          fade: false,
        },
      },
    ],
  }
  const sliderThumbsOptions = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.slider-main',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: 'unslick',
      },
    ],
  }

  let sliderMain = $('.slider-main')

  if (sliderMain.length) {
    sliderMain.on(
      'init reInit  afterChange',
      function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1
        $('#slider-counter').html(i + '  &mdash;  ' + slick.slideCount)
        let nextBtns = $('.slick-next')

        if (i == slick.slideCount) {
          nextBtns.each(function (index, value) {
            $(this).addClass('no-slides')
          })
        } else {
          nextBtns.each(function (index, value) {
            $(this).removeClass('no-slides')
          })
        }
      }
    )
  }

  $('.slider-main').slick(sliderMainOptions)
  $('.slider-thumbs').slick(sliderThumbsOptions)
})(jQuery)
