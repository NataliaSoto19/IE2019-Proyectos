function setup() {
  createCanvas(500, 500);
  noFill();
  strokeWeight(1);
}

function draw() {
  background(220);
  let niveles = round(map(mouseX, 0, width, 0, 8));
  recursiveCircle(width/2, height/2, 400, niveles);
}

function recursiveCircle(x, y, diam, levels){
  ellipse(x, y, diam);
  if(levels > 2){
    
    recursiveCircle(x+diam*0.01, y, diam/1.2, levels-1);
  }
}