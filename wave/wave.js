var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
camera.position.z = 40;

scene.add(camera);

var light = new THREE.PointLight("#ffebcd");
light.position.set(0,100,200);
scene.add(light);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var axes = new THREE.AxisHelper(70);
scene.add( axes );

const wave = new THREE.Object3D();

var tGeometry1 = new THREE.TorusGeometry(15,4,20,20, 3.141592653589793);
var tMaterial1 = new THREE.MeshNormalMaterial(); 

var Torus1 = new THREE.Mesh(tGeometry1, tMaterial1);
wave.add( Torus1 );


var tGeometry2 = new THREE.TorusGeometry(15,4,20,20, 3.141592653589793);
var tMaterial2 = new THREE.MeshNormalMaterial(); 

var Torus2 = new THREE.Mesh(tGeometry2, tMaterial2);
wave.add( Torus2 );


var tGeometry3 = new THREE.TorusGeometry(15,4,20,20, 3.141592653589793);
var tMaterial3 = new THREE.MeshNormalMaterial(); 

var Torus3 = new THREE.Mesh(tGeometry3, tMaterial3);
wave.add( Torus3 );


var tGeometry4 = new THREE.TorusGeometry(15,4,20,20, 3.141592653589793);
var tMaterial4 = new THREE.MeshNormalMaterial(); 

var Torus4 = new THREE.Mesh(tGeometry4, tMaterial4);
wave.add( Torus4 );


var tGeometry5 = new THREE.TorusGeometry(15,4,20,20, 3.141592653589793);
var tMaterial5 = new THREE.MeshNormalMaterial(); 

var Torus5 = new THREE.Mesh(tGeometry5, tMaterial5);
wave.add( Torus5 );


Torus1.position.x = -60;
Torus2.position.x = -30;
Torus2.rotation.z = 3.14159;
Torus3.position.x = 0;
Torus4.position.x = 30;
Torus4.rotation.z = 3.14159;
Torus5.position.x = 60;

scene.add(wave);
wave.rotation.y = 4.7;
wave.position.z = -60;

resize();
animate();
window.addEventListener('resize',resize);

function resize(){
  let w = window.innerWidth;
  let h = window.innerHeight;
  
  renderer.setSize(w,h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

function animate() {
//   object.rotation.y += 0.01;
//   object.rotation.x += 0.01;
wave.position.z += 0.05;
  renderer.render( scene, camera );
  controls.update();
  requestAnimationFrame(animate);
}