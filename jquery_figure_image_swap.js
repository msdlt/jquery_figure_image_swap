
// prepare figures

$("figure.rollover").ready(function () {
  $("figure.rollover").removeClass("hidden");
  //create a <ul> tag for the links to show hide
  $("figure.rollover").append("<ul></ul>");
  $("figure.rollover > figure").each(function () {
    $(this).attr("id", "targetimg_" + $(this).parent().index() + "_" + $(this).index());
    if ($(this).index() == 0) {
      $(this).addClass("show").removeClass("hidden");
      // create buttons for each figure:
      // 1. create list item with bootstrap class for btn
      // 2. name the button based on the image alt text
      // suggested alt for starting image (position 0) is "Clear Markings"
      $(this).siblings("ul").append("<li class='btn btn-default'>" + $(this).children("img").attr("alt") + "</li>");
    } else {
      $(this).addClass("hidden").removeClass("show");
      // repeat button naming for all other buttons (as above)).
      $(this).siblings("ul").append("<li class='btn btn-default'>" + $(this).children("img").attr("alt") + "</li>");
    }
  });

  $("figure.rollover > ul > li").click(function () {
    // the following statements have been split to enhance readability
    // find the index positioning of where the user has clicked
    var $buttonIndex = $(this).index();
    // find the index position of the associated image
    var $imageIndex = $(this).parents("figure.rollover").children("figure").eq($buttonIndex);
    // apply classes to show the assocated image
    $imageIndex.removeClass("hidden").addClass("show");
    // apply classes to hide the siblings of the associated image
    $imageIndex.siblings("figure").addClass("hidden").removeClass("show");
  });
});
