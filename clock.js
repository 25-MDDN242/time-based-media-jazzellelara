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
let p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12

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
  angleMode(DEGREES)

  let theDate = Date();
  let dayOfTheWeek = theDate.split(" ")[0]
  let theMonth = theDate.split(" ")[1]
  let theYear = theDate.split(" ")[3]

  //--------------Create 12 Hour Time--------------
  let ReadableHour = obj.hours;
  let M = "am"

  if (obj.hours == 0){
    ReadableHour = 12
    M = "am"
  }

  if(obj.hours == 12){
    M = "pm"
  }

  if(obj.hours > 12){
    ReadableHour = obj.hours - 12;
    M = "pm"
  }

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
    p1 = loadImage('images/plate1.png');
    p2 = loadImage('images/plate2.png');
    p3 = loadImage('images/plate3.png');
    p4 = loadImage('images/plate4.png');
    p5 = loadImage('images/plate5.png');
    p6 = loadImage('images/plate6.png');
    p7 = loadImage('images/plate7.png');
    p8 = loadImage('images/plate8.png');
    p9 = loadImage('images/plate9.png');
    p10 = loadImage('images/plate10.png');
    p11 = loadImage('images/plate11.png');
    p12 = loadImage('images/plate12.png');
    firstRun = false
  }

translate(width/2, height/2) //set default location to middle of screen

//------------------------------Create Set Table Function------------------------------
function setTable() {

//------------------------------Import Elements------------------------------
  background("#fae")

  push()
  image(circle, -170, -170); 
  //this ciricle will be replaced by the plate, it is currently 340px, if size changes coordinates will need to change. 
  pop()

  let s4X = 0 
  let s4Y = 0;

  push()
    rotate(270)
    image(p1, 0, 0);
    rotate(30)
    image(p2, 0, 0);
    rotate(30)
    image(p3, 0, 0);
    rotate(30)
    image(p4, 0, 0);
    rotate(30)
    image(p5, 0, 0);
    rotate(30)
    image(p6, 0, 0);
    rotate(30)
    image(p7, 0, 0);
    rotate(30)
    image(p8, 0, 0);
    rotate(30)
    image(p9, 0, 0);
    rotate(30)
    image(p10, 0, 0);
    rotate(30)
    image(p11, 0, 0);
    rotate(30)
    image(p12, 0, 0);
  pop()


  push()
    rotate(270)
    image(s1, 0, 0);
    rotate(30)
    image(s2, 0, 0);
    rotate(30)
    image(s3, 0, 0);
    rotate(30)
    image(s4, 0, 0);
    rotate(30)
    image(s5, 0, 0);
    rotate(30)
    image(s6, 0, 0);
    rotate(30)
    image(s7, 0, 0);
    rotate(30)
    image(s8, 0, 0);
    rotate(30)
    image(s9, 0, 0);
    rotate(30)
    image(s10, 0, 0);
    rotate(30)
    image(s11, 0, 0);
    rotate(30)
    image(s12, 0, 0);
  pop()

//------------------------------Hour Functions------------------------------

  let exampleHour = 8
  let secondsPrecise   = seconds + (millis / 1000.0);

  if (minutes < 1) {
    push()
    rotate(-120)
    let emptyPlate = eval("p"+ReadableHour)
    console.log("p"+ReadableHour)
    let highlightedSlice = eval("s"+ReadableHour)
    console.log("s"+ReadableHour)
    rotate(ReadableHour * 30)
    //image(emptyplate)need to get cake plate slice as well as cake slice make the same thing
    image(emptyPlate, 0, 0)
    image(highlightedSlice, 0+secondsPrecise*128, 0+secondsPrecise*32)
    //image(emptyplate)
    pop()
  }

  textSize(50); //hours debug
  text(ReadableHour +M, -400, -160)

//------------------------------Alarm Functions------------------------------





//=========================END OF SET TABLE FUNCTION=========================
}

//------------------------------Reset Functions------------------------------
setTable();

//trying to have darkness cover screen and reset at am pm transition

let EXhours = 12
let EXminutes = 59
let EXseconds = 50
if(EXhours == 12 && EXminutes == 59 && EXseconds == 50){

  rect(960, 500, 480, -250)
}

}