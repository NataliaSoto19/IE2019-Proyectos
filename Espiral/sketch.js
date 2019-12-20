var a = 5;
var r = 15;



function setup() {
  createCanvas(600, 600);
  background(255);
  frameRate(15);
}

function draw() {
  
  var x = r * cos(a);
  var y = r * sin(a);

  a += 1;
  r += 1;

  push();
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(0);
  fill(random(0, 200),random(0, 200),random(0, 200))
  ellipse(x, y, 20, 20);
  pop();

}