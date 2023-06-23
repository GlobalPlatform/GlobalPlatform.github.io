(function($) {
    $(document).ready(function() {
        $('header .header-media .mobile-menu').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('header nav').slideToggle(350);
        });

        $('.overview-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnFocus: true
        });

        $('a[href="#back-to-top"]').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('html, body').animate({scrollTop: 0}, 350);
        });

        $('header nav > ul > li > a').click(function(e) {
            e.preventDefault();
            e.stopPropagation();

            var hash = $(this).attr('href');
            var targetElement = hash.split('#');

            targetElement = $('#'+targetElement[1]);

            $('html, body').animate({
                scrollTop: targetElement.offset().top
            }, 350);
        });
    });

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        
        $('#overview-parallax').css('top', -(scrollTop * 0.5) + 'px');
        
        if(scrollTop >= 200) {
            $('a[href="#back-to-top"]').fadeIn(350);
        } else {
            $('a[href="#back-to-top"]').fadeOut(350);
        }
    });
})(jQuery);