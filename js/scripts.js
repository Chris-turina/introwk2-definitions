$(document).ready(function() {
  $("li").click(function() {
    $(this).next(".definition").slideToggle();
  });
});
