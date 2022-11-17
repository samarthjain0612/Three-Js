var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
camera.position.z = 40;

scene.add(camera);

var light = new THREE.PointLight(0xffffff);
document.querySelector("body").addEventListener("mousemove", function(dets){
  light.position.set(-dets.clientX,-dets.clientY,200);
})
scene.add(light);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

// var axes = new THREE.AxisHelper(50);
// scene.add( axes );

// var geometry = new THREE.BoxGeometry(20,20,20);
var geometry = new THREE.TorusGeometry(15,4,20,10);
// var geometry = new THREE.SphereGeometry(20,20,20);


// var objectMaterial = new THREE.MeshBasicMaterial({color: 0x1D976C});
// var objectMaterial = new THREE.MeshNormalMaterial(); 
var objectMaterial = new THREE.MeshLambertMaterial(); 
// var objectMaterial = new THREE.MeshDepthMaterial(); 

var object = new THREE.Mesh(geometry, objectMaterial);
scene.add( object );

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
  // object.rotation.y += 0.01;
  // object.rotation.x += 0.01;
  renderer.render( scene, camera );
  controls.update();
  requestAnimationFrame(animate);
}