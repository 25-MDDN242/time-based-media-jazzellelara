// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  black
  fill(200); // dark grey
  angleMode(DEGREES);

  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  textAlign(CENTER, CENTER)

  push();
  let hourCol = color(hours * 10);
  fill(hourCol);
  textSize(hours * 8); //192 max font size
  text(hours, 140, 250);
  pop();

  push();
  let minCol = color(minutes * 4);
  fill(minCol);
  textSize(minutes * 3.2);
  text(minutes, 330, 250);
  pop();

  push();
  let secCol = color(seconds * 4);
  fill(secCol);
  textSize(seconds * 3.2);
  text(seconds, 530, 250);
  pop();

  push();
  let milCol = color(millis / 4);
  fill(milCol);
  textSize(millis / 5.3);
  text(millis, 780, 250);
  pop();

}
