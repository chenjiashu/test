function setup() {
 createCanvas(displayWidth, displayHeight);
 //fullScreen();
}

function draw() {
  fill(random(200));
  noStroke();
  rect(0, 0, displayWidth,displayHeight/2);
  fill(random(255),0,0);
  rect(0,displayHeight/2,displayWidth,displayHeight/2)

}
