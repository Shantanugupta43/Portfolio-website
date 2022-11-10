



var audio = function() {

    var listener =  new THREE.AudioListener();

    camera.add(listener);

    var sound = new THREE.Audio(listener);
    var loader = new THREE.AudioLoader();

    loader.load('backgroundaudio.mp3', (buffer)=> {

        sound.setBuffer(buffer);
        sound.setVolume(1);
        sound.setLoop( true );
        

        sound.play();

        var startButton = document.getElementById( 'startButton' );
startButton.addEventListener( 'click', function () {

    sound.setVolume(0);



       
      
      } );

      var endButton = document.getElementById( 'endButton' );
      endButton.addEventListener( 'click', function () {
      
          sound.setVolume(1);
      
      
      
             
            
            } );

            //muting sound when tab changes

            document.addEventListener("visibilitychange", () => {
                if (document.visibilityState === 'visible') {
                    sound.play();
                } else {
                    sound.pause();
                }
              });    



    });


}








var scene= new THREE.Scene();
var camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)

camera.position.z = 1.3;
camera.position.y = 2.3;



var renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#000000");





function updateCamera(ev) {
    let div1 = document.getElementById("div1");
    camera.position.z = 1.3;
    
    camera.position.y = 2.3 - window.scrollY / 1500.0;
    

    

}

window.addEventListener("scroll", updateCamera);










renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();

})

audio();


var circle = new THREE.TorusKnotGeometry(20, 0.15, 30, 3, 6)
var matcolortop = new THREE.MeshLambertMaterial({color:0x45BCFF});
var meshtop =new THREE.Mesh(circle,matcolortop);

meshtop.scale.x =1.82;
meshtop.scale.y =1.82;
meshtop.scale.z =1.82;
meshtop.position.y = -2;
meshtop.position.x = 0;
meshtop.position.z = 0;
scene.add(meshtop);





var sphere = new THREE.SphereGeometry(1,9,2)
var matcolor = new THREE.MeshLambertMaterial({color:0xFFFFFF});

var mesh=new THREE.Mesh(sphere,matcolor);
mesh.scale.x =0.8;
mesh.scale.y =0.8;
mesh.scale.z =0.8;
mesh.position.x = 0.00;
scene.add(mesh);

var meshnewone =new THREE.Mesh(sphere,matcolor);
meshnewone.scale.x =0.1;
meshnewone.scale.y =0.1;
meshnewone.scale.z =0.1;
meshnewone.position.x = -2;
scene.add(meshnewone);

var meshnewtwo =new THREE.Mesh(sphere,matcolor);
meshnewtwo.scale.x =0.1;
meshnewtwo.scale.y =0.1;
meshnewtwo.scale.z =0.1;
meshnewtwo.position.x = 2;
meshnewtwo.position.y = -3.5;
scene.add(meshnewtwo);

var spherenewmain = new THREE.SphereGeometry(1,9,2)
var matcolornewmain = new THREE.MeshLambertMaterial({color:0xFFFFFF});

var meshnewmain=new THREE.Mesh(spherenewmain,matcolornewmain);
meshnewmain.scale.x =0.8;
meshnewmain.scale.y =0.8;
meshnewmain.scale.z =0.8;
meshnewmain.position.x = 0.00;
meshnewmain.position.y = -3.5;
scene.add(meshnewmain);

ambient = new THREE.AmbientLight(0x580000);


scene.add(ambient);

var sphere1 = new THREE.TorusKnotGeometry(8, 0.4, 0.4, 16)
var matcolor1 = new THREE.MeshLambertMaterial({color:0xFFFFFF});

var mesh1=new THREE.Mesh(sphere1,matcolor1);
mesh1.position.x = 1.30;
mesh1.position.y = -2.00;
mesh1.scale.x =0.065;
mesh1.scale.y =0.065;
mesh1.scale.z =0.065;
scene.add(mesh1);

var sphere2 = new THREE.TorusKnotGeometry(8, 0.4, 0.4, 16)
var matcolor2 = new THREE.MeshLambertMaterial({color:0xffffff});

var mesh2 =new THREE.Mesh(sphere2,matcolor2);
mesh2.position.x = -1.30;
mesh2.position.y = -5.80;

mesh2.scale.x =0.08;
mesh2.scale.y =0.08;
mesh2.scale.z =0.08;
scene.add(mesh2);

control = new THREE.OrbitControls(camera, renderer.domElement)

control.minDistance = 1;
control.maxDistance = 1000;
control.enabled =false;





var light=new THREE.PointLight(0x0F8FF,1,100)
light.position.set(12,20,40);
scene.add(light);


var render = function(){

    requestAnimationFrame(render);
    meshnewmain.rotation.y += 0.006;
    meshnewone.position.x += 0.003;
    meshnewtwo.position.x -= 0.003;
    meshtop.rotation.z += 0.008;


    


    
   

    
    mesh.rotation.y += 0.006;
    
    

    mesh1.rotation.z += 0.02;
    mesh2.rotation.z -= 0.02;


  
    
    

    control.update();

    

   

    





    renderer.render(scene,camera);


}

render();



 