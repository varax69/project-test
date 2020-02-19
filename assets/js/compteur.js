$(function () {
  
    var values = [];
    
    /*
    * Test if the element as a parameter is displayed on the screen
    * @param element  The tested element
    */
    function isOnScreen(element) {
      var viewPortHeight = $(window).height(), // Viewport Height
          scrollTop = $(window).scrollTop(), // Scroll Top
          currElementPosY = $(element).offset().top,
          elementHeight = $(element).height();
  
      return (currElementPosY + elementHeight > scrollTop && currElementPosY < (viewPortHeight + scrollTop))
    }
    
    /*
    * Change the storage value of any counter element
    * @param index  The index of the relative element (.counter)
    * @param value  The new value to set
    */
    function changeValue(index, value) {
      values[index] = value;
    }
    
    for (var i = 0, count = $("#counter-id .counter").length; i < count; i++) {
      changeValue(i, false);
    }
  
    // On scroll
    $(window).on("scroll", function () {
      if (values.indexOf(false) != -1) {
        // For each counter
        $("#counter-id .counter").each(function () {
          var self = $(this),
              index = self.index(),
              span = self.find("span"),
              fire = isOnScreen(span);
  
           if(!values[index] && fire){
             jQuery({Counter: 0}).animate({
               Counter: span.attr('data-total')
             }, {
               duration: 2000,
               easing: 'swing',
               step: function () {
                 $(span).text(Math.ceil(this.Counter));
               },
             });
  
             changeValue(index, true)
          }
        });
      }
    });
    
    console.log(values);
    
  });