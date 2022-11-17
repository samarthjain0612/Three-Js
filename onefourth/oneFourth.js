var width = window.innerWidth,
  height = window.innerHeight;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 10000);
camera.position.z = 20;

scene.add(camera);

var light = new THREE.PointLight(0xffffff);
light.position.set(-100, 200, 100);
scene.add(light);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var axes = new THREE.AxisHelper(50);
scene.add(axes);

var sphereMaterial = new THREE.MeshNormalMaterial();

var outerGeometry1 = new THREE.SphereGeometry(10, 20, 20, 0, 5, 0, 3.141592653589793);
var innerGeometry1 = new THREE.SphereGeometry(10, 20, 20, 0, 6.283185307179586, 0, 1.5);
var outerSphere1 = new THREE.Mesh(outerGeometry1, sphereMaterial);
var innerSphere1 = new THREE.Mesh(innerGeometry1, sphereMaterial);

var sphere1 = new THREE.Object3D();
sphere1.add(outerSphere1);
sphere1.add(innerSphere1);

var outerGeometry2 = new THREE.SphereGeometry(9, 20, 20, 0, 5, 0, 3.141592653589793);
var innerGeometry2 = new THREE.SphereGeometry(9, 20, 20, 0, 6.283185307179586, 0, 1.5);
var outerSphere2 = new THREE.Mesh(outerGeometry2, sphereMaterial);
var innerSphere2 = new THREE.Mesh(innerGeometry2, sphereMaterial);

var sphere2 = new THREE.Object3D();
sphere2.add(outerSphere2);
sphere2.add(innerSphere2);

var outerGeometry3 = new THREE.SphereGeometry(8, 20, 20, 0, 5, 0, 3.141592653589793);
var innerGeometry3 = new THREE.SphereGeometry(8, 20, 20, 0, 6.283185307179586, 0, 1.5);
var outerSphere3 = new THREE.Mesh(outerGeometry3, sphereMaterial);
var innerSphere3 = new THREE.Mesh(innerGeometry3, sphereMaterial);

var sphere3 = new THREE.Object3D();
sphere3.add(outerSphere3);
sphere3.add(innerSphere3);


var outerGeometry4 = new THREE.SphereGeometry(7, 20, 20, 0, 5, 0, 3.141592653589793);
var innerGeometry4 = new THREE.SphereGeometry(7, 20, 20, 0, 6.283185307179586, 0, 1.5);
var outerSphere4 = new THREE.Mesh(outerGeometry4, sphereMaterial);
var innerSphere4 = new THREE.Mesh(innerGeometry4, sphereMaterial);

var sphere4 = new THREE.Object3D();
sphere4.add(outerSphere4);
sphere4.add(innerSphere4);


var outerGeometry5 = new THREE.SphereGeometry(6, 20, 20, 0, 5, 0, 3.141592653589793);
var innerGeometry5 = new THREE.SphereGeometry(6, 20, 20, 0, 6.283185307179586, 0, 1.5);
var outerSphere5 = new THREE.Mesh(outerGeometry5, sphereMaterial);
var innerSphere5 = new THREE.Mesh(innerGeometry5, sphereMaterial);

var sphere5 = new THREE.Object3D();
sphere5.add(outerSphere5);
sphere5.add(innerSphere5);


var outerGeometry6 = new THREE.SphereGeometry(5, 20, 20, 0, 5, 0, 3.141592653589793);
var innerGeometry6 = new THREE.SphereGeometry(5, 20, 20, 0, 6.283185307179586, 0, 1.5);
var outerSphere6 = new THREE.Mesh(outerGeometry6, sphereMaterial);
var innerSphere6 = new THREE.Mesh(innerGeometry6, sphereMaterial);

var sphere6 = new THREE.Object3D();
sphere6.add(outerSphere6);
sphere6.add(innerSphere6);


var outerGeometry7 = new THREE.SphereGeometry(4, 20, 20, 0, 5, 0, 3.141592653589793);
var innerGeometry7 = new THREE.SphereGeometry(4, 20, 20, 0, 6.283185307179586, 0, 1.5);
var outerSphere7 = new THREE.Mesh(outerGeometry7, sphereMaterial);
var innerSphere7 = new THREE.Mesh(innerGeometry7, sphereMaterial);

var sphere7 = new THREE.Object3D();
sphere7.add(outerSphere7);
sphere7.add(innerSphere7);


var outerGeometry8 = new THREE.SphereGeometry(3, 20, 20, 0, 5, 0, 3.141592653589793);
var innerGeometry8 = new THREE.SphereGeometry(3, 20, 20, 0, 6.283185307179586, 0, 1.5);
var outerSphere8 = new THREE.Mesh(outerGeometry8, sphereMaterial);
var innerSphere8 = new THREE.Mesh(innerGeometry8, sphereMaterial);

var sphere8 = new THREE.Object3D();
sphere8.add(outerSphere8);
sphere8.add(innerSphere8);


var sphere = new THREE.Object3D();
sphere.add(sphere1);
sphere.add(sphere2);
sphere.add(sphere3);
sphere.add(sphere4);
sphere.add(sphere5);
sphere.add(sphere6);
sphere.add(sphere7);
sphere.add(sphere8);

scene.add(sphere);

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

sphere.rotation.x = 10
sphere.rotation.y =5.4
function animate() {
  // sphere.rotation.y += 0.02;
  renderer.render(scene, camera);
  controls.update();

  requestAnimationFrame(animate);
}


// var width = window.innerWidth,
//   height = window.innerHeight;

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(width, height);
// document.body.appendChild(renderer.domElement);
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 10000);
// camera.position.z = 20;

// scene.add(camera);

// var light = new THREE.PointLight(0xffffff);
// light.position.set(-100, 200, 100);
// scene.add(light);

// var controls = new THREE.OrbitControls(camera, renderer.domElement);

// var axes = new THREE.AxisHelper(50);
// scene.add(axes);

// // var sphereGeometry = new THREE.SphereGeometry(10, 20, 20, 0, 5.5, 0, 3.141592653589793);
// var sphereGeometry = new THREE.SphereGeometry(10, 20, 20, 0, 6.283185307179586, 0, 1.5);
// var sphereMaterial = new THREE.MeshNormalMaterial({
//     // wireframe : true
// });
// var sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial);

// scene.add(sphere1);

// var sphereGeometry2 = new THREE.SphereGeometry(10, 20, 20, 0, 5, 0, 3.141592653589793);
// var sphereMaterial2 = new THREE.MeshNormalMaterial({
//     // wireframe : true
// });
// var sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2);

// scene.add(sphere2);


// var sphereGeometry3 = new THREE.SphereGeometry(9, 20, 20, 0, 6.283185307179586, 0, 1.5);
// var sphereMaterial3 = new THREE.MeshNormalMaterial({
//     // wireframe : true
// });
// var sphere3 = new THREE.Mesh(sphereGeometry3, sphereMaterial3);

// scene.add(sphere3);


// var sphereGeometry4 = new THREE.SphereGeometry(9, 20, 20, 0, 5, 0, 3.141592653589793);
// var sphereMaterial4 = new THREE.MeshNormalMaterial({
//     // wireframe : true
// });
// var sphere4 = new THREE.Mesh(sphereGeometry4, sphereMaterial4);

// scene.add(sphere4);


// var sphereGeometry5 = new THREE.SphereGeometry(7, 20, 20, 0, 5, 0, 3.141592653589793);
// var sphereMaterial5 = new THREE.MeshNormalMaterial({
//     // wireframe : true
// });
// var sphere5 = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

// scene.add(sphere5);


// var sphereGeometry6 = new THREE.SphereGeometry(6, 20, 20, 0, 5, 0, 3.141592653589793);
// var sphereMaterial6 = new THREE.MeshNormalMaterial({
//     // wireframe : true
// });
// var sphere6 = new THREE.Mesh(sphereGeometry6, sphereMaterial6);

// scene.add(sphere6);


// var sphereGeometry3 = new THREE.SphereGeometry(9, 20, 20, 0, 5, 0, 3.141592653589793);
// var sphereMaterial3 = new THREE.MeshNormalMaterial({
//     // wireframe : true
// });
// var sphere3 = new THREE.Mesh(sphereGeometry3, sphereMaterial3);

// scene.add(sphere3);

// resize();
// animate();
// window.addEventListener("resize", resize);

// function resize() {
//   let w = window.innerWidth;
//   let h = window.innerHeight;

//   renderer.setSize(w, h);
//   camera.aspect = w / h;
//   camera.updateProjectionMatrix();
// }

// function animate() {
//     // sphere1.rotation.y += 0.002;
//     // sphere2.rotation.y += 0.002;
//   renderer.render(scene, camera);
//   controls.update();

//   requestAnimationFrame(animate);
// }
