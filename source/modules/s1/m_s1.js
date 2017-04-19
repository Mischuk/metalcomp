function leadCarousel() {
  $('.lead-carousel').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    appendDots: $(".lead-carousel-nav"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  });
}
leadCarousel();