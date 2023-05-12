window.addEventListener('DOMContentLoaded', function () {
  var links = document.getElementsByTagName("a");
  var content = document.getElementsByClassName("intro")[0];
  var audio = new Audio("buttonclick.mp3");
  

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      event.preventDefault();
      console.log("clicked");
      
      if (content) {
        content.classList.add("fade-out");
        audio.play();
        console.log("start");

        setTimeout(function() {
          content.classList.remove("fade-out");
          audio.pause();
          window.location.href = event.target.href;
        }, 1000);

        console.log("done");
      }

    }, false);
  }




});


