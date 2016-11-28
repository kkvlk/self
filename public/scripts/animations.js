$(function() {
  var hasLocalStorage = typeof(Storage) !== "undefined";

  $("#resume position h3").each(function(_, el) {
    var $el = $(el);
    $el.attr("data-text", $el.text());
  });

  $("a.toggle").click(function(event) {
    var $el = $(event.target);
    var $html = $("html");
    var feature = $el.data("toggle");

    $html.toggleClass("no-" + feature);

    if (hasLocalStorage) {
      localStorage.htmlClass = $html.attr("class");
    }

    event.preventDefault();
    return false;
  });

  if (hasLocalStorage) {
    var htmlClass = localStorage.htmlClass;
    if (htmlClass !== undefined) {
      $("html").addClass(htmlClass);
    }
  }
});
