let colors = ["#D897B8", "#F7673B", "#63E3D4", "#b4f8c8"];
let numClicks = 0;

function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("sketchblock");
  frameRate(15);
  noStroke();
}

function draw() {
  background(0, 70);

  if (mouseX < 50 && mouseX > 0) {
    fill(random(colors));
    circleSize = random(10, 20);
    ellipse(50, random(100, 200), circleSize, circleSize);
  }
  if (mouseX < 150 && mouseX > 50) {
    fill(random(colors));
    circleSize = random(10, 20);
    ellipse(100, random(100, 200), circleSize, circleSize);
  }
  if (mouseX < 200 && mouseX > 100) {
    fill(random(colors));
    circleSize = random(10, 20);
    ellipse(150, random(100, 200), circleSize, circleSize);
  }
  if (mouseX < 250 && mouseX > 150) {
    fill(random(colors));
    circleSize = random(10, 20);
    ellipse(200, random(100, 200), circleSize, circleSize);
  }
  if (mouseX < 300 && mouseX > 250) {
    fill(random(colors));
    circleSize = random(10, 20);
    ellipse(250, random(100, 200), circleSize, circleSize);
  }
  if (mouseX < 350 && mouseX > 300) {
    fill(random(colors));
    circleSize = random(10, 20);
    ellipse(300, random(100, 200), circleSize, circleSize);
  }
  if (mouseX < 400 && mouseX > 350) {
    fill(random(colors));
    circleSize = random(10, 20);
    ellipse(350, random(100, 200), circleSize, circleSize);
  }

  if (numClicks === 0) {
    textSize(32);
    text("click in the box", 10, 30);
  } else if (numClicks === 1) {
    textSize(20);
    text("i have been thinking about a lot of things", 20, 150);
  }
  if (numClicks === 2) {
    textSize(20);
    text("what kind of art do i (want to) make", 80, 200);
  }
  if (numClicks === 3) {
    textSize(20);
    text("what kind of artist (person) am i", 50, 50);
    text("click to restart", 0, 300);
  }
}

function mouseClicked() {
  if (numClicks < 3) {
    numClicks++;
  } else {
    numClicks = 0;
  }
}
