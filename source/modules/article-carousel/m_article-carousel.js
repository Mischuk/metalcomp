function articleCarousel() {
  $('.article-carousel-lead').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: false,
    asNavFor: '.article-carousel-thumbs'
  });
  $('.article-carousel-thumbs').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.article-carousel-lead',
    dots: false,
    infinite: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });
}
articleCarousel();