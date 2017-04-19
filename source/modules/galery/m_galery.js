function galleryPages() {
  $('.gallery-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true
      }
      
  });

  $('.gallery-video').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-with-zoom',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      zoom: {
        enabled: true,
        duration: 300 
      }
  });

  $('#g-image').on('click', function(){
    if ( $(this).hasClass('current') ) {
      $(this).removeClass('current');
      $('.m_galery .columns .column .gallery-video').each(function(){
        $(this).parent().show();
      });
      $('.m_galery .columns').removeClass('n-cl');
    } else {
      $('#g-video').removeClass('current');
      $('.m_galery .columns .column').show();

      $('.m_galery .columns').addClass('n-cl');
      $(this).addClass('current');
      $('.m_galery .columns .column .gallery-video').each(function(){
        $(this).parent().hide();
      });
    }
  });

  $('#g-video').on('click', function(){
    if ( $(this).hasClass('current') ) {
      $(this).removeClass('current');
      $('.m_galery .columns .column .gallery-image').each(function(){
        $(this).parent().show();
      });
      $('.m_galery .columns').removeClass('n-cl');
    } else {
      $('#g-image').removeClass('current');
      $('.m_galery .columns .column').show();
      $(this).addClass('current');
      $('.m_galery .columns .column .gallery-image').each(function(){
        $(this).parent().hide();
      });
      $('.m_galery .columns').addClass('n-cl');
    }
  });
}
galleryPages();