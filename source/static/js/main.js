$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    $('#main').fullpage({
        verticalCentered: true,
        css3:false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Предприятие', 'Продукция', 'Обработка метала', 'Центр проектирования', 'Документы', 'Контакты'],
        controlArrows: true,
        fixedElements: '.m_header',
        parallax: true,
        parallaxOptions: {type: 'reveal', percentage: 100, property: 'translate'},
        sectionSelector: '.section',
        paddingTop: '70px',
        normalScrollElements: '.scrolled, #popup-callback',
        responsiveWidth: 768,
        responsiveHeight: 460       
    });

    $('.jump-to-top button').on('click', function(){
        if ( $('#main').length ) {
            $.fn.fullpage.moveTo(1);
        } else {
            $("html, body").animate({ scrollTop: 0 }, "slow");       
        }
    });

    $('#fp-nav-2').on('click', function(){
        $.fn.fullpage.moveTo(2);
    });
    $('#fp-nav-3').on('click', function(){
        $.fn.fullpage.moveTo(3);
    });
    $('#fp-nav-4').on('click', function(){
        $.fn.fullpage.moveTo(4);
    });
    $('#fp-nav-5').on('click', function(){
        $.fn.fullpage.moveTo(5);
    });

    $('.call-popup').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,            
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        callbacks: {
            afterClose: function() {
                $.fn.fullpage.setScrollingSpeed(0);
                $.fn.fullpage.moveTo(6);
                $.fn.fullpage.setScrollingSpeed(700);
            }
        }
    });


    /*! http://johnpolacek.github.io/imagefill.js/ */
    // $('.item').imagefill();

    /*! http://www.jacklmoore.com/autosize/ */
    autosize($('textarea'));


    /*! https://select2.github.io/ */
    $('select').select2({
      minimumResultsForSearch: Infinity
    });

    /*! Inputs mask*/
    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 9999999",{placeholder:""});
    };
    inputMask();

    function attachFile() {
        $('.attach input').on('change', function(){
            if ( $(this).val() == '' ) {
                return false;
            } else {
                var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
                $(this).parent().next().show();
                $(this).parent().next().find('.filename').text(filename);
            }
        });

        $('.attach-result .remove').on('click', function(){
            $(this).prev().text('');
            $(this).parent().hide();
            $(this).parent().prev().find('input').val('');
        });
    }
    attachFile();

    function formSuccess() {
        $('.popup-window form').on('submit', function(){
            $('#popup-success-btn').trigger('click');
            return false;
        });
    }
    formSuccess();

    

    if ( ! $('#main').length ) {
        var bumpIt = function() {  
              $('body').css('margin-bottom', $('.m_footer').outerHeight());
            },
            didResize = false;

        bumpIt();

        $(window).resize(function() {
          didResize = true;
        });
        setInterval(function() {  
          if(didResize) {
            didResize = false;
            bumpIt();
          }
        }, 250);
    } 

    $('.sidebar-menu .submenu').on('click', function(){
        if ( $(this).hasClass('current') ) {
            $(this).removeClass('current');
            $(this).next().slideUp();
        } else {
            $('.sidebar-menu .submenu').removeClass('current');
            $('.sidebar-menu .submenu + ul').slideUp();
            $(this).addClass('current');
            $(this).next().slideDown();
        }
        return false;
    });

    function docsItem() {
        $('.docs-nav input').on('change', function(){
            var name = $(this).attr('name');
            if ( $(this).is(':checked') ) {
                $('.docs-body .column').each(function(){
                    if ( $(this).attr('data-docs') == name ) {
                        $(this).show();
                    }
                });
            } else {
                $('.docs-body .column').each(function(){
                    if ( $(this).attr('data-docs') == name ) {
                        $(this).hide();
                    }
                });
            }
        });
    }
    docsItem();


    //=include modules.js
});