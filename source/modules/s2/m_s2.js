// Products carousel
var viewportWidth = $(window).width();

if( viewportWidth > 768 ){
  var Rows = 1;
  var Slides = 4;
  var singleRow = true;
} else {
  var Rows = 2;
  var Slides = 2;
  var singleRow = false;
}

$(".products-carousel").slick({
  dots: false,
  infinite: true,
  slidesToShow: Slides,
  slidesToScroll: Slides,
  rows: Rows,
  appendArrows: $(".products-nav")
});

$(window).on('resize', function(){
  var viewportWidth = $(window).width();
  if( viewportWidth > 768 ){
    var Rows = 1;
    var Slides = 4;
    var singleRow = true;
  } else {
    var Rows = 2;
    var Slides = 2;
    var singleRow = false;
  }
  $(".products-carousel").slick('unslick');
  $(".products-carousel").slick({
    dots: false,
    infinite: true,
    slidesToShow: Slides,
    slidesToScroll: Slides,
    rows: Rows,
    appendArrows: $(".products-nav")
  });
});
// end Products carousel