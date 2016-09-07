
// prepare figures

$("figure.rollover").ready(function () {
  $("figure.rollover").removeClass("hideImage");
  //create a <ul> tag for the links to show hide
  $("figure.rollover").append("<ul></ul>");
  $("figure > figure").each(function () {
    $(this).attr("id", "targetimg_" + $(this).parent().index() + "_" + $(this).index());
    if ($(this).index() === 0) {
      $(this).addClass("showImage");
      $(this).removeClass("hideImage");
    } else {
      $(this).addClass("hideImage");
      $(this).removeClass("showImage");
      // create buttons for each figure
      // name each by its image alt text
      var $buttonLabel = $(this).children("img").attr("alt");
      //var $buttonIndex = $(this).index();
      // add links to <ul> which users will click on to show/hide images
      //$(this).siblings("ul").append("<li id='targetlink_" + $(this).parent().index() + "_" + $(this).index() + "' class='btn btn-default'>" + $buttonLabel + "</li>");
      $(this).siblings("ul").append("<li class='btn btn-default'>" + $buttonLabel + "</li>");
    }
  });

  $("figure.rollover > ul > li").click(function () {
    //console.log("clicked" + $(this).attr("id"));
    //console.log($(this).parents("figure.rollover").index());
    // the following statements have been split to enhance readability
    // find the index positioning of where the user has clicked
    var $buttonIndex = $(this).index();
    // find the index position of the associated image
    var $imageIndex = $(this).parents("figure.rollover").children("figure").eq($buttonIndex);
    // apply classes to show the assocated image
    $imageIndex.removeClass("hideImage").addClass("showImage");
    // apply classes to hide the siblings of the associated image
    $imageIndex.siblings("figure").addClass("hideImage").removeClass("showImage");
  });
});
