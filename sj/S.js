var width = window.innerWidth,
  height = window.innerHeight;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
camera.position.z = 40;

scene.add(camera);

const helper = new THREE.CameraHelper( camera );
scene.add( helper );

var light1 = new THREE.PointLight("#FF9933");
light1.position.set(-50, 0, 15);
scene.add(light1);

const pointLightHelper1 = new THREE.PointLightHelper( light1, 3 );
// scene.add( pointLightHelper1 );

var light2 = new THREE.PointLight("#138808");
light2.position.set(50, 0, 15);
scene.add(light2);

const pointLightHelper2 = new THREE.PointLightHelper( light2, 3 );
// scene.add( pointLightHelper2 );

var light3 = new THREE.PointLight("#ffffff");
light3.position.set(0, 0, 5);
scene.add(light3);

const pointLightHelper3 = new THREE.PointLightHelper( light3, 1 );
// scene.add( pointLightHelper3 );

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var axes = new THREE.AxisHelper(50);
// scene.add(axes);

const s = new THREE.Object3D();

var upperGeometry = new THREE.TorusGeometry(10, 3,16,100, 3.210);
var upperMaterial = new THREE.MeshLambertMaterial( { color: "#ffffff" } );
var upper = new THREE.Mesh( upperGeometry, upperMaterial );


var middle1Geometry = new THREE.TorusGeometry(10, 3,16,100, 1.590);
var middle1Material = new THREE.MeshLambertMaterial( { color: "#ffffff" } );
var middle1 = new THREE.Mesh( middle1Geometry, middle1Material );


var middle2Geometry = new THREE.TorusGeometry(10, 3,16,100, 1.590);
var middle2Material = new THREE.MeshLambertMaterial( { color: "#ffffff" } );
var middle2 = new THREE.Mesh( middle2Geometry, middle2Material );

var lowerGeometry = new THREE.TorusGeometry(10, 3,16,100, 3.210);
var lowerMaterial = new THREE.MeshLambertMaterial( { color: "#ffffff" } );
var lower = new THREE.Mesh( lowerGeometry, lowerMaterial );

upper.position.y = 10;
middle1.rotation.z = 9.4;
middle1.position.y = 9.4;
middle2.position.y = -10.6;
lower.position.y = -10;
lower.rotation.x=9.4;

s.add(upper);
s.add(middle1);
s.add(middle2);
s.add(lower);

scene.add(s);

const j = new THREE.Object3D();

var upperJgeometry = new THREE.CylinderGeometry(4,4,30,48, 1, false , 0, 6);
var upperJmaterial = new THREE.MeshLambertMaterial({color: "#ffffff"});
var upperJ = new THREE.Mesh(upperJgeometry, upperJmaterial);
j.add(upperJ)
var middleJgeometry = new THREE.CylinderGeometry(4,4,25,48, 1, false , 0, 6);
var middleJmaterial = new THREE.MeshLambertMaterial({color: "#ffffff"});
var middleJ = new THREE.Mesh(middleJgeometry, middleJmaterial);
j.add(middleJ)
var lowerJGeometry = new THREE.TorusGeometry(8, 4,16,100, 3.710);
var lowerJMaterial = new THREE.MeshLambertMaterial( { color: "#ffffff" } );
var lowerJ = new THREE.Mesh( lowerJGeometry, lowerJMaterial );
j.add(lowerJ  )
lowerJ.rotation.z = 9
lowerJ.position.y = -18
lowerJ.position.x = -7.9

upperJ.rotation.z = 1.57;
upperJ.position.y = 5;
middleJ.position.y = -7.5;

scene.add(j);

// const box1 = new THREE.BoxHelper( upper, 0xffff00 );
// scene.add( box1 );
// const box2 = new THREE.BoxHelper( lower, 0xffff00 );
// scene.add( box2 );
// const box3 = new THREE.BoxHelper( middle1, 0xffff00 );
// scene.add( box3 );
// const box4 = new THREE.BoxHelper( middle2, 0xffff00 );
// scene.add( box4);


// const box = new THREE.Box3();
// box.setFromCenterAndSize( new THREE.Vector3( 1, 1, 1 ), new THREE.Vector3( 2, 1, 3 ) );
// const helper = new THREE.Box3Helper( upper, 0xffff00 );
// scene.add( helper );

s.position.x = -15
j.position.x = 15
s.position.y = 5
j.position.y = -5


resize();
animate();
window.addEventListener("resize", resize);

function resize() {
  let w = window.innerWidth;
  let h = window.innerHeight;

  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

function animate() {

  // s.rotation.y += 0.01;
  // j.rotation.y += 0.01;

  renderer.render(scene, camera);
  controls.update();

  requestAnimationFrame(animate);
}