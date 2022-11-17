// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

var width = window.innerWidth,
  height = window.innerHeight;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
camera.position.z = 150;

scene.add(camera);


var light = new THREE.PointLight(0xffffff);
light.position.set(-100, 200, 100);
scene.add(light);

// Add OrbitControls so that we can pan around with the mouse.
var controls = new THREE.OrbitControls(camera, renderer.domElement);

// Add axes
var axes = new THREE.AxisHelper(100);
scene.add(axes);

const orangeBand = new THREE.BoxGeometry(150,20,10);
const whiteBand = new THREE.BoxGeometry(150,30,10);
const greenBand = new THREE.BoxGeometry(150,20,10);
const blueSphere = new THREE.SphereGeometry(10, 20, 20);
// const blueSphere = new THREE.SphereGeometry(40, 32, 16,0,6.283185307179586,0,6.283185307179586);

const bandMaterial1 = new THREE.MeshBasicMaterial({
    color : '#FF8C00',
    // wireframe : true
});
const bandMaterial2 = new THREE.MeshBasicMaterial({
    color : '#FFFFFF',
    // wireframe : true
});
const bandMaterial3 = new THREE.MeshBasicMaterial({
    color : '#32CD32',
    // wireframe : true
});
// const bandMaterial4 = new THREE.MeshNormalMaterial({
//     color : '#0000FF',
//     // wireframe : true
// });
const bandMaterial4 = new THREE.MeshBasicMaterial({
    color : '#0000FF',
    wireframe : true
});



const orange = new THREE.Mesh(orangeBand, bandMaterial1);
const white = new THREE.Mesh(whiteBand, bandMaterial2);
const green = new THREE.Mesh(greenBand, bandMaterial3);
const blue = new THREE.Mesh(blueSphere, bandMaterial4);

orange.position.y = 25;
green.position.y = -25;

scene.add(orange);
scene.add(white);
scene.add(green);
scene.add(blue);

// blue.position.z = 20;
blue.rotation.x = 80;

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
    // blue.rotation.y += 0.005;
      orange.rotation.y += 0.01;
      white.rotation.y += 0.01;
      green.rotation.y += 0.01;
      blue.rotation.z += 0.01;
  renderer.render(scene, camera);
  controls.update();

  requestAnimationFrame(animate);
}
