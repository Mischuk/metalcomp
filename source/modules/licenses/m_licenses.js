function recxGallery() {
  $('.c-gallery').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: '.column a',
          type: 'image',
          closeOnContentClick: false,
          closeBtnInside: true,
          overflowY: 'auto',
          fixedContentPos: false,
          fixedBgPos: true,
          mainClass: 'mfp-with-zoom mfp-img-mobile',
          image: {
            verticalFit: true,
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          },
          gallery: {
            enabled: true
          },
          zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
              return element.find('img');
            }
          },
          callbacks: {          
              buildControls: function() {
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
              }          
            }
      });
  });

  $('.m_licenses .tabs-header a').on('click', function(){
    $('.m_licenses .tabs-header a').removeClass('current');
    $(this).addClass('current');
    var pos = $(this).index();
    $('.m_licenses .tabs-content .item').removeClass('current');
    $('.m_licenses .tabs-content .item').eq(pos).addClass('current');
  });
}
recxGallery();

