var diameter = [150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650];
var angle = diameter;
var circle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function setup() {
  createCanvas(800, 600);
}

function draw() {
    background(200);
    noFill();
    strokeWeight(3);
    
    //// xy axis
    /*
    strokeWeight(2);
    stroke(0);
    line(0, height / 2, width, height / 2);
    line(width / 2, 0, width / 2, height);
    */

    for (var i = 0; i < circle.length; i++) {
      circle[i] = (sin(angle[i]) * diameter[i] / 2) + diameter[i] / 2;
      stroke(0, 0, 128);
      ellipse(width - (circle[i] / 2), height / 2, circle[i], circle[i]);
      stroke(128, 0, 128);
      ellipse((circle[i] / 2), height / 2, circle[i], circle[i]);
    }

    angle[0] += 0.01;
    angle[1] += 0.011;
    angle[2] += 0.012;
    angle[3] += 0.013;
    angle[4] += 0.014;
    angle[5] += 0.015;
    angle[6] += 0.016;
    angle[7] += 0.017;
    angle[8] += 0.018;
    angle[9] += 0.019;
    angle[10] += 0.02;
}