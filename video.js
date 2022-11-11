


var startButton = document.getElementById( 'startButton' );
startButton.addEventListener( 'click', function () {

  var timeout;
  timeout = setTimeout(init,400);


} );

function init(){










    
    
    






//Get your video element:
var video = document.getElementById('video');
video.play();

//Create your video texture:
var videoTexture = new THREE.VideoTexture(video);
var videoMaterial =  new THREE.MeshBasicMaterial( {map: videoTexture, side: THREE.FrontSide, toneMapped: false} );
//Create screen
var screen = new THREE.PlaneGeometry(0.7, 0.4);
var videoScreen = new THREE.Mesh(screen, videoMaterial);
videoScreen.position.y=0.08;
videoScreen.position.z=0.8;
videoScreen.position.x=-0.1;




scene.add(videoScreen);

var endButton = document.getElementById( 'endButton' );
endButton.addEventListener( 'click', function () {

    video.pause();
    videoScreen.visible = false;

       
      
      } );








      }



