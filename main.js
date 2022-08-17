



var audio = function() {

    var listener =  new THREE.AudioListener();

    camera.add(listener);

    var sound = new THREE.Audio(listener);
    var loader = new THREE.AudioLoader();

    loader.load('Dreamy.mp3', (buffer)=> {

        sound.setBuffer(buffer);
        sound.setVolume(1);
        sound.setLoop( true );
        
        sound.setVolume( 0.4 );
        sound.play();
        



    });


}





var scene= new THREE.Scene();
var camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)

camera.position.z = 1.2;


var renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();

})

audio();



var sphere = new THREE.SphereGeometry(1,10,1)
var matcolor = new THREE.MeshLambertMaterial({color:0xFFFFFF});

var mesh=new THREE.Mesh(sphere,matcolor);
mesh.scale.x =0.8;
mesh.scale.y =0.8;
mesh.scale.z =0.8;
scene.add(mesh);

var spherenewmain = new THREE.SphereGeometry(1,10,1)
var matcolornewmain = new THREE.MeshLambertMaterial({color:0xFFFFFF});

var meshnewmain=new THREE.Mesh(spherenewmain,matcolornewmain);
meshnewmain.scale.x =0.8;
meshnewmain.scale.y =0.8;
meshnewmain.scale.z =0.8;
meshnewmain.position.x = 0.10;
meshnewmain.position.y = -3.0;
scene.add(meshnewmain);

var sphere1 = new THREE.SphereGeometry(1,10,1)
var matcolor1 = new THREE.MeshLambertMaterial({color:0xFFFFFF});

var mesh1=new THREE.Mesh(sphere1,matcolor1);
mesh1.position.x = 1.30;
mesh1.position.y = -1.80;
mesh1.scale.x =0.3;
mesh1.scale.y =0.3;
mesh1.scale.z =0.3;
scene.add(mesh1);

var sphere2 = new THREE.SphereGeometry(1,10,1)
var matcolor2 = new THREE.MeshLambertMaterial({color:0xFFFFFF});

var mesh2 =new THREE.Mesh(sphere2,matcolor2);
mesh2.position.x = -1.30;
mesh2.position.y = -3.80;

mesh2.scale.x =0.3;
mesh2.scale.y =0.3;
mesh2.scale.z =0.3;
scene.add(mesh2);

control = new THREE.OrbitControls(camera, renderer.domElement)

control.minDistance = 1;
control.maxDistance = 1000;








var light=new THREE.PointLight(0xFFFFFF,1,500)
light.position.set(10,0,25);
scene.add(light);


var render = function(){

    requestAnimationFrame(render);
    meshnewmain.rotation.y += 0.006;
    meshnewmain.position.y -= 0.00078;

    mesh.position.y -= 0.0000079;

    
    mesh.rotation.y += 0.006;
    mesh.position.y -= 0.00078;
    

    mesh1.rotation.z += 0.02;
    mesh2.rotation.z -= 0.02;

  
    
    

    control.update();

    

   

    





    renderer.render(scene,camera);


}

render();



 