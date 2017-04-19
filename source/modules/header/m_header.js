function calcMenu() {
  var $menu = $('.modal-menu');
  var header = $('.m_header').height();
  var viewport = $(window).height();
  $menu.height(viewport-header);
}

function calcMenuLarge() {
  var $menu = $('.modal-menu');
  var header = $('.m_header').height();
  var viewport = $(window).height();
  $menu.height(viewport-header-60);
}

if ( $(window).width() >= 992 ) {
  $(window).resize(calcMenuLarge);
} else {
  $(window).resize(calcMenu);  
}

function mobileMenu() {
  var $button = $('.mobile-menu-trigger');

  $button.on('click', function(){
    $(this).toggleClass('open');
    $('.modal-menu').toggleClass('open');
    calcMenu();    
  });
}
mobileMenu();

function sitemap() {
  var $button = $('.sitemap a');

  $button.on('click', function(){
    $(this).toggleClass('open');
    $(this).text(function(i, text){
      return text === "Весь сайт" ? "Скрыть" : "Весь сайт";
    });
    $('.modal-menu').toggleClass('open');
    calcMenuLarge();
  });
}
sitemap();

function globalSearch() {
  $('.global-search a').on('click', function(){
    if ( $('.modal-menu').hasClass('open') ) {
      $('#global-search').focus();
    } else {
      $('.m_header .sitemap a').toggleClass('open');
      $('.m_header .sitemap a').text(function(i, text){
        return text === "Весь сайт" ? "Скрыть" : "Весь сайт";
      });
      $('.modal-menu').toggleClass('open');
      calcMenuLarge();
      $('#global-search').focus();      
    }
  });
};
globalSearch();

$('.modal-menu .scrolled').perfectScrollbar();

$(document).mouseup(function (e) {
  var container = $(".modal-menu, .m_header");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $('.modal-menu, .mobile-menu-trigger').removeClass('open');
    $('.m_header .sitemap a').text("Весь сайт").removeClass('open');
  }
});

