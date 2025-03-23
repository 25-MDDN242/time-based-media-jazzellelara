[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/M3ipj5sV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18378589&assignment_repo_type=AssignmentRepo)
### MDDN 242 Project 1: Time-based Media  
### Jazzelle Richdale
# Clock Name Goes Here 

### Design Intentions
Text here

### Inspiration
Text here

### Design Process

#### *Initial Ideas*
I started by thinking of what ideas/themes I wanted to include in my clock. I really want to explore the idea of time moving through us (as believed in other cultures) instead of us moving through time (how we traditionally see it). I also want to look into how time moves differently in relation to space.

I then completely scrapped all of that, while it was an interesting concept I wanted to go for something simpler so I stay sane. I decided to design a cake clock, where the candles lights and are then blown out, and a slice is taken every hour.

#### *Image Placeholders*
To start with I made some slices in Adobe Illustrator, and exported all 12 slices as seperate images. I then assembled them in code to make a full circle. These slices will later be replaced with actual cake slices, but I want to sort out my code before full finalising my visuals. 

#### *Madea Clock*
I then finalised my Madea clock, where the numbers change size and colour according to the time. 

#### *Hours - Cake Slices*
I coded an if statement that make parts of the cake move out and dissapear on the first second of every hour. 
I then had some trouble with getting them to stay gone after an hour was up, as you cannot erase images on P5JS, you can only add. So i added an image of the plate underneath on top of the slices that have been taken, and set it to add and amount of plate images according to the hour. 
I then changed my 24 hour time to 12 hour time, with AM and PM. 

#### *Alarm - Fire*
I coded the alarm system, using the time until the alarm goes off the animate the candles flaring up and creating a huge fire. 

#### *Seconds - Candles*
I then added in the candles on the cake, representing the seconds. A candle is lit every 5 seconds and at the end of the minute they are all extinguished. 

#### *ReadMe*
At this point I formatted my ReadMe, leaving spaces to fill in information later. 

#### *Importing Assets*
I created all the image assets in Adobe Illustrator, and imported them all in. 

#### *Minutes - Strawberries*
I then added some strawberries on a plate to the side, every five minutes one is taken untill none remain on the plate.  