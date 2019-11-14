(function ($) {
'use strict';
    

    





    function multi() {

        if ($(window).width() > 991) {

            $('#myContainer').multiscroll({
                sectionsColor: ['#fff', '#fff', '#fff'],
                menu: '#menu',
                navigation: true,
                scrollingSpeed: 800,
                loopBottom: true,
                loopTop: true,
                navigationTooltips: ['Welcome', 'Story', 'Awards', 'Services', 'News', 'Contact'],
                anchors: ['welcome', 'story', 'awards', 'services', 'news', 'contact'],
                easing: 'easeOutQuad',
            });
            $("#multiscroll-nav ul li a").append("<svg width='30' height='30'><circle cx='15' cy='15' r='11.5'></circle></svg>");

        } else {

          

        }
    }
    multi(); 


})(jQuery);