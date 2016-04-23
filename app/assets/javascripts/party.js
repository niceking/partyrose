var jQuery = window.$;

jQuery(document).ready(function() {
  var partyWidth = 1040;
  var partyLetterWidth = 160;
  var partyHeight = 280;
  var partyRoseWidth = 20;

  var addPadding = function() {
    var width = $(window).width();
    var height = $(window).height();

    spareWidth = width - partyWidth;
    if(spareWidth > 0) {
      // make sure there is always an even number of partyroses
      leftWidth = Math.ceil(spareWidth / 20 / 2) * 20;
      rightWidth = spareWidth - leftWidth;
      $(".pad-border-left").css("width", leftWidth);
      $(".pad-border-right").css("width", rightWidth);

      spareHeight = height - partyHeight;
      if(spareHeight > 0) {
        // make sure there is always an even number of partyroses
        topHeight = Math.ceil(spareHeight / 20 / 2 ) * 20;
        bottomHeight = spareHeight - topHeight;
        $(".pad-border-top").css("height", topHeight);
        $(".pad-border-bottom").css("height", bottomHeight);
      }
    }
    else {
      
    }
  };

  $(window).resize(function(){
    addPadding();
  });

  addPadding();
});
