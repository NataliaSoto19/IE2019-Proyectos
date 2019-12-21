function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //Círculos//
  fill(60, 200, 50)
  arc(200, 200, 350, 350, 0, radians(180));
  fill(220, 100, 0)
  arc(200, 200, 320, 320, 0, radians(180));
  fill(0, 10, 200)
  arc(200, 200, 290, 290, 0, radians(180));
  fill(200, 200, 0)
  arc(200, 200, 260, 260, 0, radians(180));
  fill(200, 0, 0)
  arc(200, 200, 230, 230, 0, radians(180));
  fill(0, 0, 200)
  arc(200, 200, 200, 200, 0, radians(180));
  fill(200, 100, 0)
  arc(200, 200, 170, 170, 0, radians(180));
  fill(0, 0, 200)
  arc(200, 200, 140, 140, 0, radians(180));
  fill(0, 200, 0)
  arc(200, 200, 110, 110, 0, radians(180));
  fill(200, 200, 0)
  arc(200, 200, 80, 80, 0, radians(180));

  //Líneas//

  fill(200, 0, 0)
  rect(25, 190, 350, 20, radians(180))
    fill(0, 0, 200)
  rect(25, 170, 350, 20, radians(180))
    fill(200, 70, 0)
  rect(25, 150, 350, 20, radians(180))
    fill(0, 100, 200)
  rect(25, 130, 350, 20, radians(180))
    fill(200, 200, 0)
  rect(25, 110, 350, 20, radians(180))
    fill(0, 200, 0)
  rect(25, 90, 350, 20, radians(180))
    fill(0, 0,150)
  rect(25, 70, 350, 20, radians(180))
    fill(0, 0, 200)
  rect(25, 50, 350, 20, radians(180))
    fill(200, 0, 0)
  rect(25, 30, 350, 20, radians(180))
}