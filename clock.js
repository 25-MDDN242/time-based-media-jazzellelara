/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

  //------------------------------Initial Example Code----------------------------------------
  // background(50); //  beige
  // fill(200); // dark grey
  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);


  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, 150);
  // fill(140, 255, 251) // blue
  // ellipse(width / 2, 350, 150);
  // fill(175, 133, 255); // purple
  // ellipse(width / 3 * 2, 350, 150);


  //------------------------------Setup Variables------------------------------
let firstRun = true
let s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  if(firstRun){ //importing images
    s1 = loadImage('images/slice1.png');
    s2 = loadImage('images/slice2.png');
    s3 = loadImage('images/slice3.png');
    s4 = loadImage('images/slice4.png');
    s5 = loadImage('images/slice5.png');
    s6 = loadImage('images/slice6.png');
    s7 = loadImage('images/slice7.png');
    s8 = loadImage('images/slice8.png');
    s9 = loadImage('images/slice9.png');
    s10 = loadImage('images/slice10.png');
    s11 = loadImage('images/slice11.png');
    s12 = loadImage('images/slice12.png');
    circle = loadImage('images/circle.png');
    firstRun = false
  }

  //let center = (310, 80) tried to create coordinates variable
  background("#fae")

  image(circle, 310, 80);
  image(s1, 310, 80);
  image(s2, 310, 80);
  image(s3, 310, 80);
  image(s4, 310, 80);
  image(s5, 310, 80);
  image(s6, 310, 80);
  image(s7, 310, 80);
  image(s8, 310, 80);
  image(s9, 310, 80);
  image(s10, 310, 80);
  image(s11, 310, 80);
  image(s12, 310, 80);

}


