// const { AxesHelper } = require("three");

var width = window.innerWidth,
  height = window.innerHeight;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 10000);
camera.position.z = 40;
camera.position.y -= 90;
camera.position.x -= 20;

scene.add(camera);

var light = new THREE.PointLight(0xffffff);
light.position.set(-100, 200, 100);
scene.add(light);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

const sphereGeometry = new THREE.SphereGeometry(30, 50, 50);
const torusGeometry = new THREE.TorusGeometry(50, 8, 16, 100);
const starGeometry = new THREE.SphereGeometry(5, 10, 10);

const sphereMaterial = new THREE.MeshNormalMaterial({
  wireframe: true,
});
const torusMaterial = new THREE.MeshNormalMaterial({
  wireframe: true,
});

var axes = new THREE.AxisHelper(50);
scene.add(axes);

var torus = new THREE.Mesh(torusGeometry, torusMaterial);
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
var star1 = new THREE.Mesh(starGeometry, sphereMaterial);
var star2 = new THREE.Mesh(starGeometry, sphereMaterial);
var star3 = new THREE.Mesh(starGeometry, sphereMaterial);

scene.add(sphere);
scene.add(torus);
scene.add(star1);
scene.add(star2);
scene.add(star3);

star1.position.x += 50
star1.position.y += 60
star1.position.z += 60

star2.position.x += 220
star2.position.y += 140
star2.position.z += 70

star3.position.x += 50
star3.position.y -= 30
star3.position.z += 30

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

sphere.addEventListener("click", function(){
  sphere.position.y -= 0.1;

})

function animate() {
  torus.rotation.z += 0.001;
  star1.rotation.z -= 0.01;
  star2.rotation.x -= 0.01;
  star3.rotation.y -= 0.01;
  sphere.rotation.y -= 0.01;
  renderer.render(scene, camera);
  controls.update();

  requestAnimationFrame(animate);
}
