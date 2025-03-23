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
    //~~~~~~~~~~~~background image~~~~~~~~~~~~
    bg = loadImage('images/background.png');
    //~~~~~~~~~~~~slice images~~~~~~~~~~~~
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
    //~~~~~~~~~~~~test circle images~~~~~~~~~~~~
    greyCircle = loadImage('images/circle.png');
    //~~~~~~~~~~~~plate images~~~~~~~~~~~~
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
    //~~~~~~~~~~~~empty plate images~~~~~~~~~~~~
    ep1 = loadImage('images/emptyplate1.png');
    ep2 = loadImage('images/emptyplate2.png');
    ep3 = loadImage('images/emptyplate3.png');
    ep4 = loadImage('images/emptyplate4.png');
    ep5 = loadImage('images/emptyplate5.png');
    ep6 = loadImage('images/emptyplate6.png');
    ep7 = loadImage('images/emptyplate7.png');
    ep8 = loadImage('images/emptyplate8.png');
    ep9 = loadImage('images/emptyplate9.png');
    ep10 = loadImage('images/emptyplate10.png');
    ep11 = loadImage('images/emptyplate11.png');
    ep12 = loadImage('images/emptyplate12.png');
    //~~~~~~~~~~~~fire images~~~~~~~~~~~~
    f1 = loadImage('images/fire1.png');
    f2 = loadImage('images/fire2.png');
    f3 = loadImage('images/fire3.png');
    f4 = loadImage('images/fire4.png');
    //~~~~~~~~~~~~candle flame images~~~~~~~~~~~~  
    c1 = loadImage('images/candle1.png');
    c2 = loadImage('images/candle2.png');
    c3 = loadImage('images/candle3.png');
    c4 = loadImage('images/candle4.png');
    c5 = loadImage('images/candle5.png');
    c6 = loadImage('images/candle6.png');
    c7 = loadImage('images/candle7.png');
    c8 = loadImage('images/candle8.png');
    c9 = loadImage('images/candle9.png');
    c10 = loadImage('images/candle10.png');
    c11 = loadImage('images/candle11.png');
    c12 = loadImage('images/candle12.png');
    //~~~~~~~~~~~~strawberry plate images~~~~~~~~~~~~  
    sbp = loadImage('images/strawberryplate.png');
    //~~~~~~~~~~~~strawberry images~~~~~~~~~~~~  
    b1 = loadImage('images/strawberry1.png');
    b2 = loadImage('images/strawberry2.png');
    b3 = loadImage('images/strawberry3.png');
    b4 = loadImage('images/strawberry4.png');
    b5 = loadImage('images/strawberry5.png');
    b6 = loadImage('images/strawberry6.png');
    b7 = loadImage('images/strawberry7.png');
    b8 = loadImage('images/strawberry8.png');
    b9 = loadImage('images/strawberry9.png');
    b10 = loadImage('images/strawberry10.png');
    b11 = loadImage('images/strawberry11.png');
    b12 = loadImage('images/strawberry12.png');
    firstRun = false
  }

translate(width/2, height/2) //set default location to middle of screen

//------------------------------Create Set Table Function------------------------------
function setTable() {

//------------------------------Import Elements------------------------------
  background("ffffff")

  push()
  image(greyCircle, -170, -170); 
  //this circle will be replaced by the plate, it is currently 340px, if size changes coordinates will need to change. 
  pop()

  let s4X = 0 
  let s4Y = 0;

  //image(bg, -480, -250);
  //~~~~~~~~~~~~strawberry plate images~~~~~~~~~~~~
  image(sbp, 228, 0);

  //~~~~~~~~~~~~slice images~~~~~~~~~~~~
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

  //~~~~~~~~~~~~plate images~~~~~~~~~~~~
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

  //----------------silly code making sure the slices stay GONE----------------
  if (ReadableHour > 1){ //Hour 1 
    push()
    rotate(-120)
    rotate(1 * 30)
    image(p1, 0, 0)
    pop()
  }

  if (ReadableHour > 2){ //Hour 2
    push()
    rotate(-120)
    rotate(2 * 30)
    image(p2, 0, 0)
    pop()
  }

  if (ReadableHour > 3){ //Hour 3
    push()
    rotate(-120)
    rotate(3 * 30)
    image(p3, 0, 0)
    pop()
  }

  if (ReadableHour > 4){ //Hour 4
    push()
    rotate(-120)
    rotate(4 * 30)
    image(p4, 0, 0)
    pop()
  }

  if (ReadableHour > 5){ //Hour 5
    push()
    rotate(-120)
    rotate(5 * 30)
    image(p5, 0, 0)
    pop()
  }

  if (ReadableHour > 6){ //Hour 6
    push()
    rotate(-120)
    rotate(6 * 30)
    image(p6, 0, 0)
    pop()
  }

  if (ReadableHour > 7){ //Hour 7
    push()
    rotate(-120)
    rotate(7 * 30)
    image(p7, 0, 0)
    pop()
  }

  if (ReadableHour > 8){ //Hour 8
    push()
    rotate(-120)
    rotate(8 * 30)
    image(p8, 0, 0)
    pop()
  }

  if (ReadableHour > 9){ //Hour 9
    push()
    rotate(-120)
    rotate(9 * 30)
    image(p9, 0, 0)
    pop()
  }

  if (ReadableHour > 10){ //Hour 10
    push()
    rotate(-120)
    rotate(10 * 30)
    image(p10, 0, 0)
    pop()
  }

  if (ReadableHour > 11){ //Hour 11
    push()
    rotate(-120)
    rotate(11 * 30)
    image(p11, 0, 0)
    pop()
  }

  if (ReadableHour > 12){ //Hour 12
    push()
    rotate(-120)
    rotate(12 * 30)
    image(p12, 0, 0)
    pop()
  }
  //----------------end of silly code----------------

  if (minutes < 1) { //create slices to move out
    push()
    rotate(-120)
    let emptyPlate = eval("ep"+ReadableHour)
   // console.log("p"+ReadableHour)
    let highlightedSlice = eval("s"+ReadableHour)
   // console.log("s"+ReadableHour)
    rotate(ReadableHour * 30)
    image(emptyPlate, 0, 0)
    image(highlightedSlice, 0+secondsPrecise*128, 0+secondsPrecise*32)
    pop()
  }

  if (minutes > 0) { //makes sure slice stays gone 
    push()
    rotate(-120)
    let emptyPlate = eval("p"+ReadableHour)
   // console.log("p"+ReadableHour)
    rotate(ReadableHour * 30)
    image(emptyPlate, 0, 0)
    pop()
  }

//------------------------------Minute Functions------------------------------
if (minutes == 59){
  //nothing
} else if (minutes > 55 && minutes < 59) { 
  image(b1, 228, 0);
} else if (minutes > 50 && minutes < 56) { 
  image(b1, 228, 0);
  image(b2, 228, 0);
} else if (minutes > 45 && minutes < 51) { 
  image(b1, 228, 0);
  image(b2, 228, 0);
  image(b3, 228, 0);
} else if (minutes > 40 && minutes < 46) { 
  image(b1, 228, 0);
  image(b2, 228, 0);
  image(b3, 228, 0);
  image(b4, 228, 0);
} else if (minutes > 35 && minutes < 41) { 
  image(b1, 228, 0);
  image(b2, 228, 0);
  image(b3, 228, 0);
  image(b4, 228, 0);
  image(b5, 228, 0);
} else if (minutes > 30 && minutes < 36) { 
  image(b1, 228, 0);
  image(b2, 228, 0);
  image(b3, 228, 0);
  image(b4, 228, 0);
  image(b5, 228, 0);
  image(b6, 228, 0);
} else if (minutes > 25 && minutes < 31) { 
  image(b1, 228, 0);
  image(b2, 228, 0);
  image(b3, 228, 0);
  image(b4, 228, 0);
  image(b5, 228, 0);
  image(b6, 228, 0);
  image(b7, 228, 0);
} else if (minutes > 20 && minutes < 26) { 
  image(b1, 228, 0);
  image(b2, 228, 0);
  image(b3, 228, 0);
  image(b4, 228, 0);
  image(b5, 228, 0);
  image(b6, 228, 0);
  image(b7, 228, 0);
  image(b8, 228, 0);
} else if (minutes > 15 && minutes < 21) { 
  image(b1, 228, 0);
  image(b2, 228, 0);
  image(b3, 228, 0);
  image(b4, 228, 0);
  image(b5, 228, 0);
  image(b6, 228, 0);
  image(b7, 228, 0);
  image(b8, 228, 0);
  image(b9, 228, 0);
} else if (minutes > 10 && minutes < 16) { 
  image(b1, 228, 0);
  image(b2, 228, 0);
  image(b3, 228, 0);
  image(b4, 228, 0);
  image(b5, 228, 0);
  image(b6, 228, 0);
  image(b7, 228, 0);
  image(b8, 228, 0);
  image(b9, 228, 0);
  image(b10, 228, 0);
} else if (minutes > 5 && minutes < 11) { 
  image(b1, 228, 0);
  image(b2, 228, 0);
  image(b3, 228, 0);
  image(b4, 228, 0);
  image(b5, 228, 0);
  image(b6, 228, 0);
  image(b7, 228, 0);
  image(b8, 228, 0);
  image(b9, 228, 0);
  image(b10, 228, 0);
  image(b11, 228, 0);
} else if (minutes > 0 && minutes < 6) { 
  image(b1, 228, 0);
  image(b2, 228, 0);
  image(b3, 228, 0);
  image(b4, 228, 0);
  image(b5, 228, 0);
  image(b6, 228, 0);
  image(b7, 228, 0);
  image(b8, 228, 0);
  image(b9, 228, 0);
  image(b10, 228, 0);
  image(b11, 228, 0);
  image(b12, 228, 0);
}

//------------------------------Second Functions------------------------------
if (seconds > 5){ //5
  push()
  rotate(-120)
  rotate(1 * 30)
  image(c1, 0, 0)
  pop()
}

if (seconds > 10){ //10 seconds
  push()
  rotate(-120)
  rotate(2 * 30)
  image(c2, 0, 0)
  pop()
}

if (seconds > 15){ //15 seconds
  push()
  rotate(-120)
  rotate(3 * 30)
  image(c3, 0, 0)
  pop()
}

if (seconds > 20){ //20 seconds
  push()
  rotate(-120)
  rotate(4 * 30)
  image(c4, 0, 0)
  pop()
}

if (seconds > 25){ //25 seconds
  push()
  rotate(-120)
  rotate(5 * 30)
  image(c5, 0, 0)
  pop()
}

if (seconds > 30){ //30 seconds
  push()
  rotate(-120)
  rotate(6 * 30)
  image(c6, 0, 0)
  pop()
}

if (seconds > 35){ //35 seconds
  push()
  rotate(-120)
  rotate(7 * 30)
  image(c7, 0, 0)
  pop()
}

if (seconds > 40){ //40 seconds
  push()
  rotate(-120)
  rotate(8 * 30)
  image(c8, 0, 0)
  pop()
}

if (seconds > 45){ //45 seconds
  push()
  rotate(-120)
  rotate(9 * 30)
  image(c9, 0, 0)
  pop()
}

if (seconds > 50){ //50 seconds
  push()
  rotate(-120)
  rotate(10 * 30)
  image(c10, 0, 0)
  pop()
}

if (seconds > 55){ //55 seconds
  push()
  rotate(-120)
  rotate(11 * 30)
  image(c11, 0, 0)
  pop()
}

if (seconds == 59){ //60 seconds 
  push()
  rotate(-120)
  rotate(12 * 30)
  image(c12, 0, 0)
  pop()
}

//=========================END OF SET TABLE FUNCTION=========================
}
//------------------------------Set the Table (Function)------------------------------
setTable();

//------------------------------All Candles Light Function------------------------------
function allCandle() {
  push()
    rotate(270)
    image(c1, 0, 0);
    rotate(30)
    image(c2, 0, 0);
    rotate(30)
    image(c3, 0, 0);
    rotate(30)
    image(c4, 0, 0);
    rotate(30)
    image(c5, 0, 0);
    rotate(30)
    image(c6, 0, 0);
    rotate(30)
    image(c7, 0, 0);
    rotate(30)
    image(c8, 0, 0);
    rotate(30)
    image(c9, 0, 0);
    rotate(30)
    image(c10, 0, 0);
    rotate(30)
    image(c11, 0, 0);
    rotate(30)
    image(c12, 0, 0);
  pop()
  }
  
//------------------------------Alarm Functions------------------------------

if (obj.seconds_until_alarm == -1) {
  resetTable()
} else if (obj.seconds_until_alarm > 2 && obj.seconds_until_alarm < 3) { //candles light
  allCandle()
} else if (obj.seconds_until_alarm > 1 && obj.seconds_until_alarm < 2) { //candles flare
  image(f1, -190, -190)
} else if (obj.seconds_until_alarm > 0 && obj.seconds_until_alarm < 1) { //candles join
  image(f2, -190, -190)
} else if (obj.seconds_until_alarm == 0) { //candles engulf the cake in flames
    if (millis < 500) {
      image(f3, -190, -190)
    } else { 
      image(f4, -190, -190)
    }
}

console.log(int(obj.seconds_until_alarm))

//------------------------------Reset Functions------------------------------
function resetTable (){
  erase()
  setTable()
}

}