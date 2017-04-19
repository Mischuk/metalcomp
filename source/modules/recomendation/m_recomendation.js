function recGallery() {
  $('.zoom-gallery').magnificPopup({
      delegate: 'a',
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
}
recGallery();