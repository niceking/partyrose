var jQuery = window.$;

jQuery(document).ready(function() {
  var addRows = function() {
    $(".alternate").empty();
    height = $(window).height();
    while(height >= 40) {
      $(".alternate").append("<div class='partyrose repeat-x'> </div>");
      $(".alternate").append("<div class='partyrose-reverse repeat-x'> </div>");
      height = height - 40;
    }
    if(height > 20) {
      $(".alternate").append("<div class='partyrose repeat-x'> </div>");
    }
  };

  $(window).resize(function(){
    addRows();
  });

  addRows();
});
