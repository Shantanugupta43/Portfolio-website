window.addEventListener('DOMContentLoaded', function () {
  var links = document.getElementsByTagName("a");
  var content = document.getElementsByClassName("intro")[0];
  var audio = new Audio("buttonclick.mp3");
  var video = document.getElementById("myVideo");
  var overlay = document.getElementById("overlay");
  var hidebg = document.getElementById("vd-h");
  

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



document.getElementById("myButton").addEventListener("click", function() {


    video.classList.toggle("hidden");
    if (video.classList.contains("hidden")) {
      video.pause();
    } else {
      video.play();
    }

    overlay.classList.toggle("hidden");
    if (overlay.classList.contains("hidden")) {
      overlay.style.display="none";
    } else {
      overlay.style.display="inline-block";
    }

    hidebg.classList.toggle("hidden");
    if (hidebg.classList.contains("hidden")) {
      hidebg.style.display="inline-block";
    } else {
      hidebg.style.display="none";
    }


  });


  document.getElementById("closevid").addEventListener("click", function() {
    hidebg.style.display="inline-block";
    overlay.style.display="none";
    video.pause();
    });




});


