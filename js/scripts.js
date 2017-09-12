$(document).ready(function() {
  $("li").click(function() {
    $(this).next(".definition").slideToggle();
  });

  $("li").click(function() {
    $("li").toggleClass("bold");
  });
});
