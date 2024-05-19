// This file is for backward compatibility with the old website

const loadFile = function() {
  let content = 0;
  $("#header").load("https://1step621.github.io/header.html");
  $("#footer").load("https://1step621.github.io/footer.html");
  $.ajax({
      type: "GET",
      url: "https://1step621.github.io/head.html",
      dataType: "html"
    })
    .done(function(result) {
      content = result;
      $("head").prepend(content)
    });
};

$(function() {
  loadFile();
});
