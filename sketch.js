let m = 50;
function setup() {
  createCanvas(800, 500);
  strokeWeight (0.1);
  stroke(100);
  noLoop ();
}

function draw() {
  
  background(210);
  
  for(i = 0; i < 10000; i++) {
    
    push();
    let X = random (m, width -m);
    let Y = random (m, height- m);
     
    translate (X,Y);
    rotate(random(TWO_PI));
    line(-20,0,20,0);
    pop();
  }
}