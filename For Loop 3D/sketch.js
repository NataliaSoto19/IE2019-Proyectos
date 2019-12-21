var x = 1;

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(0);
  fill(100,50,10,20)
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  
  for( x = 1; x < 300; x = x+20)
  box(x)
  
  sphere(10)
  pop();
  
  

  
  
}