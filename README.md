## Proyectos Imagen Escrita 2019
# Natalia Soto Vásquez

function preload() {
  img = loadImage('moneda1.png');
  fondo = loadImage ('756426.jpg');
}

function setup() {
  createCanvas(600,600);
  background (fondo);
  imageMode(CENTER);
}


function draw() {
  if (mouseIsPressed) {
  image(img, mouseX, mouseY, 100, 100); 
  }
}
