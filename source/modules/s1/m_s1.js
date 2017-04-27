function leadCarousel() {
  $('.lead-carousel').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4500,
    adaptiveHeight: true,
    pauseOnHover: false,
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