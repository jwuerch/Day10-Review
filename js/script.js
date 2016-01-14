$(document).ready(function() {
    for (var i = 5; i > 0; i -= 1) {
      $(".loop").append("<p>This is the " + i + "th of code.</p>")
    };

    $("button").addClass("animated bounce");



});
