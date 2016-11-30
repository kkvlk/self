jQuery.fn.extend({
  toggleMedia: function() {
    var $video = $(this);

    $video.each(function(_, video) {
      if (video.paused == true) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  pauseMedia: function() {
    var $video = $(this);

    $video.each(function(_, video) {
      video.pause();
    });
  }
});

$(function() {
  var hasLocalStorage = typeof(Storage) !== "undefined";

  $("h1, h3, h4, #email").each(function(_, el) {
    var $el = $(el);
    $el.attr("data-text", $el.text());
  });

  $("a.toggle").click(function(event) {
    var $el = $(event.target);
    var $html = $("html");
    var feature = $el.data("toggle");

    $html.toggleClass("no-" + feature);

    switch (feature) {
    case "music":
      $("audio#bgmusic").toggleMedia();
      break;
    case "animation":
      $("video#headshot").toggleMedia();
      break;
    }

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
        $("video#headshot").pauseMedia();
      }
      if ($html.hasClass("no-music")) {
        $("audio#bgmusic").pauseMedia();
      }
    }
  }

  // On Webkit, the animations and gradually slow down over time. Apparently,
  // it gets fixed if we pause, and resume animation every now and then.
  setInterval(function() {
    var $toggler = $("a.toggle[data-toggle='animation']")
    $toggler.click();
    $toggler.click();
  }, 60000);
});
