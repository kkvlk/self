jQuery.fn.extend({
  toggleVideo: function() {
    var $video = $(this);

    $video.each(function(_, video) {
      if (video.paused == true) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  pauseVideo: function() {
    var $video = $(this);

    $video.each(function(_, video) {
      video.pause();
    });
  }
});

$(function() {
  var hasLocalStorage = typeof(Storage) !== "undefined";

  $("#resume position h3").each(function(_, el) {
    var $el = $(el);
    $el.attr("data-text", $el.text());
  });

  $("a.toggle").click(function(event) {
    var $el = $(event.target);
    var $html = $("html");
    var $video = $("video#headshot");
    var feature = $el.data("toggle");

    $html.toggleClass("no-" + feature);
    $video.toggleVideo();

    if (hasLocalStorage) {
      localStorage.htmlClass = $html.attr("class");
    }

    event.preventDefault();
    return false;
  });

  if (hasLocalStorage) {
    var htmlClass = localStorage.htmlClass;
    if (htmlClass !== undefined) {
      var $html = $("html");
      $html.addClass(htmlClass);

      if ($html.hasClass("no-animation")) {
        $("video#headshot").pauseVideo();
      }
    }
  }
});
