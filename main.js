
// Crear el renderizador
var Lienzo = new THREE.WebGLRenderer();
Lienzo.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(Lienzo.domElement);

// variable para cargar las texturas
const loader = new THREE.TextureLoader();

// Crear la cámara
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 900);
camera.position.set(0, 0, 500);

// Crear la escena
var escena = new THREE.Scene();
escena.background = new THREE.Color(0xE8E8E8); // Fondo azul cielo

//texturas
const textura1 = loader.load( 'https://www.shutterstock.com/image-illustration/world-texture-satellite-image-earth-600nw-1776531926.jpg' );
const textura2 = loader.load('https://static.vecteezy.com/system/resources/previews/002/948/785/original/pixel-minecraft-style-land-background-vector.jpg');
const textura3 = loader.load('https://th.bing.com/th/id/OIP.XYcG-sq3QfgHrF8kHmiqXgHaE8?rs=1&pid=ImgDetMain');
const textura4 = loader.load('https://thumbs.dreamstime.com/b/modelo-de-cristal-de-la-textura-84247665.jpg');
const Pasto = loader.load('https://i5.walmartimages.com/asr/d0f765e4-8583-44f5-9ce1-8ee3490b136d.35d48be122aab56109e5209e81c33b79.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff');
const tierra = loader.load('https://th.bing.com/th/id/OIP.Tn5iB4eG___9LZlS8HLyrQHaHa?rs=1&pid=ImgDetMain');
const Cu = loader.load('https://raw.githubusercontent.com/Minepacman/Practica-THREE-JS/refs/heads/main/img/arriba.jpg');
const Cd = loader.load('https://raw.githubusercontent.com/Minepacman/Practica-THREE-JS/refs/heads/main/img/abajo.jpg');
const Cl = loader.load('https://raw.githubusercontent.com/Minepacman/Practica-THREE-JS/refs/heads/main/img/izq.jpg');
const Cr = loader.load('https://raw.githubusercontent.com/Minepacman/Practica-THREE-JS/refs/heads/main/img/der.jpg');
const Cf = loader.load('https://raw.githubusercontent.com/Minepacman/Practica-THREE-JS/refs/heads/main/img/frente.jpg');
const Cb = loader.load('https://raw.githubusercontent.com/Minepacman/Practica-THREE-JS/refs/heads/main/img/atras.jpg');

// Cuboide? creo no se como se llama la figura 
var Figura1 = new THREE.BoxGeometry(30, 150, 80);
const cereal = [
    new THREE.MeshStandardMaterial({ map:Cf, color:  0xFF9999 ,  roughness: 0.1}),
    new THREE.MeshStandardMaterial( { map:Cb,color: 0x9966FF ,  roughness: 0.1}),
    new THREE.MeshStandardMaterial( { map:Cu,color: 0x99CCFF ,  roughness: 0.1}),
    new THREE.MeshStandardMaterial( { map:Cd,color: 0x99FF99 ,  roughness: 0.1}),
    new THREE.MeshStandardMaterial( { map:Cr,color: 0xFFFF99 , roughness: 0.1}),
    new THREE.MeshStandardMaterial( { map:Cl,color: 0xFFFFFF ,roughness: 0.1}),
];

var fig1 = new THREE.Mesh(Figura1, cereal);
fig1.position.set(-300,0,0)
escena.add(fig1);

//Cubo
var Figura2 = new THREE.BoxGeometry(100,100,100);
const materials = [
    new THREE.MeshStandardMaterial({ map:textura2, color:  0xFF9999 ,  roughness: 0.1}),
    new THREE.MeshStandardMaterial( { map:textura2,color: 0x9966FF ,  roughness: 0.1}),
    new THREE.MeshStandardMaterial( { map:Pasto,color: 0x99CCFF ,  roughness: 0.1}),
    new THREE.MeshStandardMaterial( { map:tierra,color: 0x99FF99 ,  roughness: 0.1}),
    new THREE.MeshStandardMaterial( { map:textura2,color: 0xFFFF99 , roughness: 0.1}),
    new THREE.MeshStandardMaterial( { map:textura2,color: 0xFFFFFF ,roughness: 0.1}),
];

var fig2 = new THREE.Mesh(Figura2, materials);
fig2.position.set(-120,120,0);
escena.add(fig2); 

//Esfera
var figura3 = new THREE.SphereGeometry(80,80,80);
var material2 = new THREE.MeshStandardMaterial({map:textura1, roughness: 0.1});
var fig3 = new THREE.Mesh(figura3, material2);
fig3.position.set(0,-80, 0) ;
escena.add(fig3);

//Piramide 
const figura4 = new THREE.ConeGeometry(80,100,4);
const material4 = new THREE.MeshStandardMaterial({ map: textura4, metalness: 1.0,  roughness: 0.5, transparent: true, opacity: 0.8 });
const fig4 = new THREE.Mesh(figura4, material4);
fig4.position.set(300,120 ,-80 );
escena.add(fig4);

//dodeCaedro 
const figura5 = new THREE.DodecahedronGeometry(90);
const material5= new THREE.MeshStandardMaterial({color:0xFFFFFF, map: textura3, transparent: true, opacity: 0.5, roughness: 0.1  });
const fig5 = new THREE.Mesh(figura5, material5);
fig5.position.set(100,120,0);
escena.add(fig5);

// Crear las luces
var luz1 = new THREE.PointLight(0x98F5F9);
luz1.position.set(200, 200, 100);
escena.add(luz1);


var luz2 = new THREE.PointLight(0xCC6CE7);
luz2.position.set(-200, 0, 200);
escena.add(luz2);

var luz3 = new THREE.PointLight(0x11fff );
luz3.position.set(0,0,-300);
escena.add(luz3);

// Animación
function animate() {
    requestAnimationFrame(animate);
    
    let scaleFactor = Math.sin(Date.now() * 0.001) * 0.5 + 1.5; 

    fig1.rotation.x += 0.01;  
    fig1.rotation.y += 0.008; 

    fig1.scale.set(scaleFactor, scaleFactor, scaleFactor);

    fig1.position.y += -0.02;
    if (fig1.position.y < -200) {
        fig1.position.y = 120;
    }

    
    fig2.rotation.y += 0.01;
    fig2.rotation.x += 0.01;
    fig2.position.z += -0.2;
    if(fig2.position.z < -500) fig2.position.z = 0;

    fig3.rotation.x += 0.001;
    fig3.rotation.y += 0.003;
    fig3.position.x = Math.sin(fig3.rotation.y) * 100

    fig4.rotation.x += 0.01;
    fig4.rotation.y += 0.01;
    fig4.position.y += -0.5; 
    if(fig4.position.y < -200) fig4.position.y = 120
   

    fig5.rotation.x += 0.01;
    fig5.rotation.y += 0.01;

    // Renderizar la escena
    Lienzo.render(escena, camera);
}

animate();