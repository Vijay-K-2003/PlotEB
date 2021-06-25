//jshint esversion:6
let sphere, renderer, scene, camera, t;
var Beta;
function init0() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({antialias: true, alpha: true, canvas: artifactCanvas });
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor(0x000000, 0.0);
  document.body.appendChild( renderer.domElement );
}

function init2(a) {
  const geometry = new THREE.SphereGeometry( a, 10, 10 );
  const material = new THREE.MeshBasicMaterial( {wireframe:true} );
  sphere = new THREE.Mesh( geometry, material );
  scene.add( sphere );
  camera.position.z = 10;
}

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x -= 0.01;
  sphere.rotation.y -= 0.01;
  sphere.rotation.z -= 0.01;
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);



function plota() {
  var pointCount = 5000;
  var i, r;
  var E = 10, B = 20;
  var x = [];
  var y = [];
  var z = [];
  var c = [];

  for(i = 0; i < pointCount; i++)
   {
       r = i * (pointCount - i);
       x.push(0);
       y.push(r * E / B);
       z.push(0);
       c.push(i);
   }

  Plotly.newPlot('tester1', [{
       type: 'scatter3d',
       mode: 'lines',
       x: x,
       y: y,
       z: z,
       opacity: 0.7,
       line: {
         width: 10,
         color: c,
         colorscale: 'Viridis'}
      }
    ]
  );
}
function plotb()
{
  var pointCount = 5000;
  var i, r;
  var E = 10, B = 20;
  var x = [];
  var y = [];
  var z = [];
  var c = [];
  var Beta = E / (2 * 0.000003 * B);
  for(i = 0; i < pointCount; i++)
   {
       r = i * (pointCount - i);
       x.push(0);
       y.push(Beta * (2 * 0.000003 * r - Math.sin(0.000003 * r)));
       z.push(Beta * (1 - Math.cos(0.000003 * r)));
       c.push(i);
   }

  Plotly.newPlot('tester2', [{
       type: 'scatter3d',
       mode: 'lines',
       x: x,
       y: y,
       z: z,
       opacity: 0.7,
       line: {
         width: 10,
         color: c,
         colorscale: 'Viridis'}
      }
    ]
  );
}
function plotc()
{
  var pointCount = 5000;
  var i, r;
  var E = 10, B = 20;
  var x = [];
  var y = [];
  var z = [];
  var c = [];
  var Beta = E / (0.000003 * B);
  for(i = 0; i < pointCount; i++)
   {
       r = i * (pointCount - i);
       x.push(0);
       y.push(Beta * (1 + 0.000003 * r - Math.cos(0.000003*r)));
       z.push(Beta * (Math.sin(0.000003*r)));
       c.push(i);
   }

  Plotly.newPlot('tester3', [{
       type: 'scatter3d',
       mode: 'lines',
       x: x,
       y: y,
       z: z,
       opacity: 0.7,
       line: {
         width: 10,
         color: c,
         colorscale: 'Viridis'}
      }
    ]
  );
}
function plotd() {
  var pointCount = 5000;
  var i, r;
  var E = 10, B = 20;
  var x = [];
  var y = [];
  var z = [];
  var c = [];
  Beta = E / (0.000003 * B);
  for(i = 0; i < pointCount; i++)
   {
       r = i * (pointCount - i);
       x.push(r*0.000003);
       y.push(Math.cos(r*0.000003) * 10000);
       z.push(Math.sin(r*0.000003)* 10000);//
       c.push(i);
   }

  Plotly.newPlot('tester4', [{
       type: 'scatter3d',
       mode: 'lines',
       x: x,
       y: y,
       z: z,
       opacity: 0.7,
       line: {
         width: 10,
         color: c,
         colorscale: 'Viridis'}
      }
    ]
  );
}
init0();
init2(4);
animate();
plota();
plotb();
plotc();
plotd();
