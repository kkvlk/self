$(function() {
  $("#resume position h3").each(function(_, el) {
    var $el = $(el);
    $el.attr("data-text", $el.text());
  });

  $("a.toggle").click(function(el) {
    var $el = $(el.target);
    $("html").toggleClass("no-" + $el.data("toggle"));
  });
})
