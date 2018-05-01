// Any project-specific code — listeners and triggers for plugins

$(document).ready(function() {

  // If JS is enabled, change a class on the HTML
  if ( $('html').hasClass('no-js') ) {
    $('html').removeClass('no-js').addClass('js');
  }

  // All counting numbers
  $(".js-countup").counterUp({
    delay: 250, // milliseconds
    time: 1500 // duration of animation
  });


  // http://codetheory.in/change-active-state-links-sticky-navigation-scroll/
  var sections = $('.js-waypoint-nav .js-section')
    , animated = $('.layout .animated')
    , nav = $('#navbarNav');
  
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
   
    sections.each(function() {
      var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
   
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active-section');
        sections.removeClass('active-section');
   
        $(this).addClass('active-section');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active-section');
      }
    });
   
    // Trigger some animations when items come into view
    animated.each(function() {
      // Subtracting some from offset() top because otherwise, the element animates
      // too late in the scroll, resulting in something that feels laggy
      var top = $(this).offset().top
        , window_h = $(window).height()
        , top_offset = top - (window_h * .75);
      
      //console.log('cur_pos = ' + cur_pos);
      //console.log('top = ' + top);
      //console.log('window_h = ' + window_h);
      //console.log('top_offset = ' + top_offset);
      
      if (cur_pos >= top_offset) {
        $(this).removeClass('hide').addClass('start');
      }
    });
  });
});