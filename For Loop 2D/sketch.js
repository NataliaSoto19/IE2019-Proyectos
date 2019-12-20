function setup() {
  createCanvas(500, 500);
  cursor(CROSS);
}


function randomColor() {
  var a = random(0, 255);
  var b = random(0, 255);
  var c = random(0, 255);
  background(a, b, c);
}

function draw() {
  background(255)

  push();
  var d = random(0, 255);
  var e = random(0, 255);
  var f = random(0, 255);
  fill(d, e, f);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
  pop();



  let numX = 5;
  let numY = 5;

  let m = 20;


  let spx = (width - 2 * m) / (numX - 1);
  let spy = (height - 2 * m) / (numY - 1);



  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {


      let d = dist(mouseX, mouseY, m + x * spx, m + y * spy);

      let r = map(d, 0, width, 0, PI);


      push();
      translate(m + x * spx, m + y * spy);
      rotate(r);

      rotate(r);
      strokeWeight(4)
      line(0, 0, spx / -5, 0);
      fill(210, 30, 20)
      ellipse(0, 0, 30, 30);
      fill(0)
      ellipse(0, -10, 1, 1);
      ellipse(0, 10, 1, 1);
      pop();
    }
  }
}