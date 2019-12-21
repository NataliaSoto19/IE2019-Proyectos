
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(205);
  fill(0,255,0); //Verde
  arc(200,150, 170, 170, 0, radians(180)); //piel sandía
  fill(255, 0, 0);  //rojo
  arc(200, 150, 150, 150, 0, radians(180));  //Relleno Sandía
  
  //pepitas que ruedan
  push();
  translate(245,180);
  rotate(radians(0 + frameCount,  
            width / 2, height / 2));
  fill(0,0,0); //café
  arc(0,0,30,45,0, radians(30));  
  pop();
  
  push();
  translate(155,180)
  rotate(radians(0 + frameCount,  
            width / 2, height / 2));
  fill(0,0,0);
  arc(0,0,30,45,0, radians(30));
pop();
  
  push();
  translate(203,180)
  rotate(radians(0 + frameCount,  
            width / 2, height / 2));
  fill(0,0,0);
  arc(0,0,30,45,0, radians(30));
pop();
  
  push();
  translate(179,170)
  rotate(radians(0 + frameCount,  
            width / 2, height / 2));
  fill(0,0,0);
  arc(0,0,30,45,0, radians(30));
pop();
  
  push();
  translate(224,170)
  rotate(radians(0 + frameCount,  
            width / 2, height / 2));
  fill(0,0,0);
  arc(0,0,30,45,0, radians(30));
pop();
  
  push();
  translate(179,200)
  rotate(radians(0 + frameCount,  
            width / 2, height / 2));
  fill(0,0,0);
  arc(0,0,30,45,0, radians(30));
pop();
  
  push();
  translate(224,200)
  rotate(radians(0 + frameCount,  
            width / 2, height / 2));
  fill(0,0,0);
  arc(0,0,30,45,0, radians(30));
pop();
}
