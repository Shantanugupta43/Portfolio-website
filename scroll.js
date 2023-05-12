
window.addEventListener('DOMContentLoaded', function () {


    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var totalHeight = document.documentElement.scrollHeight;
        var sectionHeight = totalHeight / 10;
        var sectionNumber = Math.floor(scrollTop / sectionHeight);
      
        switch (sectionNumber) {
          case 0:
            document.body.style.background = "radial-gradient(circle, rgb(0, 0, 0) 50%, rgb(60 10 10) 90%)"; /* set background color for first section */
            break;
          case 1:
            document.body.style.background = "radial-gradient(circle, rgb(0, 0, 0) 25%, rgb(102 75 11) 90%)"; /* set background color for second section */
            break;
          case 2:
            document.body.style.background = "radial-gradient(circle, rgb(53 30 58) 35%, rgb(0 0 0) 90%)"; /* set background color for third section */
            break;
          case 3:
            document.body.style.background = "radial-gradient(circle, rgb(53 30 58) 35%, rgb(0 0 0) 90%)"; /* set background color for fourth section */
            break;
          case 4:
            document.body.style.background = "radial-gradient(circle, rgb(2 46 60) 25%, rgb(0 0 0) 90%)"; /* set background color for fifth section */
            break;
          case 5:
            document.body.style.background = "radial-gradient(circle, rgb(2 46 60) 25%, rgb(0 0 0) 90%)"; /* set background color for fifth section */
            break;
          case 6:
            document.body.style.background = "radial-gradient(circle, rgb(46, 43, 43) 35%, rgb(84 80 80) 90%)"; /* set background color for fifth section */
            break;
          case 7:
            document.body.style.background = "radial-gradient(circle, rgb(46, 43, 43) 35%, rgb(84 80 80) 90%)"; /* set background color for fifth section */
            break;
          case 8:
            document.body.style.background = "radial-gradient(circle, rgb(175 16 16) 35%, rgb(31, 30, 56) 90%)"; /* set background color for fifth section */
            break;
          case 9:
            document.body.style.background = "radial-gradient(circle, rgb(175 16 16) 35%, rgb(31, 30, 56) 90%)"; /* set background color for fifth section */
            break;
        }
      });


});