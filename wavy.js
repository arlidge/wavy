// Starting angle
var theta = 0.0;
var r = 0;
var b = 0;
var g = 0

function setup() {
  createCanvas(1080, 540);
  this.one = color(random(255), random(255), random(255),random(255));
  this.two = color(random(255), random(255), random(255),random(255));
  this.three = color(random(255), random(255), random(255),random(255));
  this.four = color(random(255), random(255), random(255),random(255));
  this.five = color(random(255), random(255), random(255),random(255));
}

function draw() {
  background(255);
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  b = map(mouseY, 0, 600, 255, 0);

  // Increment theta (try different values for "angular velocity " here)
  theta += 0.01;
  var angle = theta;
  // A for loop is used to draw all the points along a sine wave (scaled to the pixel dimension of the window).
  for (var x = 0; x <= width; x += 10) {
    // Calculate y value based off of sine function
    var y = map(sin(angle), -1, 1, 0, 500);
    // Draw an ellipse
    fill(r,g,b);
    textSize(300);
    text('W',x, y);
    stroke(0);
    strokeWeight(4.0);
    strokeCap(ROUND);
    //line(x,y,250,250);
    // Increment angle
    angle += 0.1;
  }
}
