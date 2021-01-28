// Interactive Map
jQuery(function() {

    // Interactive Map

    $mapOff = function() {
        jQuery('#interactiveMap, .mapTotals').removeClass('active');
        jQuery('#interactiveMap svg > g > g').stop().removeClass('active').fadeTo(200, 1);
        jQuery('.mapTotals li').stop().removeClass('active').fadeOut(200);
    }

    jQuery('#interactiveMap svg > g > g').on('click tap mouseenter mouseover focus', function(e) {
        var element = jQuery(this);
        if (jQuery(element).is('#NoPresence')) {
            $mapOff();
        } else {
            jQuery('#interactiveMap, .mapTotals').addClass('active');
            jQuery('#interactiveMap svg > g > g').stop().not(element).removeClass('active').fadeTo(200, .2);
            jQuery(element).stop().addClass('active').fadeTo(200, 1);
            var id = jQuery(element).attr('id');
            jQuery('.mapTotals li').each(function(index, element) {
                var mapTotalID = jQuery(this).attr('data-id');
                if (mapTotalID === id) {
                    jQuery(this).stop().addClass('active').fadeIn(200);
                } else {
                    jQuery(this).stop().removeClass('active').fadeOut(200);
                }
            });
        };

    });


    jQuery('#interactiveMap svg > g').on('mouseleave mouseout', function(e) {
        $mapOff();
    });
    jQuery('.portfolio a').on('focus', function(e) {
        $mapOff();
    });
    jQuery(window).on('click tap swipe', function(e) {
        var target = e.target;
        if (jQuery(target).parents('#interactiveMap').length !== 1) {
            $mapOff();
        };
    });
    jQuery('.mapTotals .close').on('click tap', function(e) {
        $mapOff();
        e.preventDefault();
    });
});