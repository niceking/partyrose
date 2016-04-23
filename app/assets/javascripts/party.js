var jQuery = window.$;

jQuery(document).ready(function() {
  var partyWidth = 1040;
  var partyLetterWidth = 160;
  var exclamationMarkWidth = 40;
  var partyHeight = 280;
  var partyRoseWidth = 20;

  var addPadding = function() {
    var width = $(window).width();
    var height = $(window).height();

    spareWidth = width - partyWidth;
    if(spareWidth > 20) {
      // hide and show spacing depending on screen size
      $(".pad-letter-left").hide();
      $(".pad-letter-right").hide();
      $(".pad-border-left").show();
      $(".pad-border-right").show();

      // change padding between letters
      $(".pad-letter-between").css("width", "40");
      $(".pad-letter-between").css("height", "280");

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
      // window is too small to fit entire word across

      // hide and show spacing depending on screen size
      $(".pad-letter-left").show();
      $(".pad-letter-right").show();
      $(".pad-border-left").hide();
      $(".pad-border-right").hide();

      // fix top and bottom border height
      $(".pad-border-top").css("height", "40");
      $(".pad-border-bottom").css("height", "40");

      var smallWidth = width - partyLetterWidth;

      // make sure there is always an even number of partyroses
      leftSmallWidth = Math.ceil(smallWidth / 20 / 2) * 20;
      rightSmallWidth = smallWidth - leftSmallWidth;
      $(".pad-letter-left").css("width", leftSmallWidth);
      $(".pad-letter-right").css("width", rightSmallWidth);

      // change exclamation one especially cos its a different width
      exclamationWidth = width - exclamationMarkWidth;
      leftExclamationWidth = Math.ceil(exclamationWidth / 20 / 2) * 20;
      rightExclamationWidth = exclamationWidth - leftExclamationWidth;
      $(".exclamation-mark > .pad-letter-left").css("width", leftExclamationWidth);
      $(".exclamation-mark > .pad-letter-right").css("width", rightExclamationWidth);

      // change padding between letters
      $(".pad-letter-between").css("width", "100%");
      $(".pad-letter-between").css("height", "40");
    }
  };

  $(window).resize(function(){
    addPadding();
  });

  addPadding();
});
