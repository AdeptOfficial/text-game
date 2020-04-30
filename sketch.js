let stateZero;
let stateOne;
let stateTwo;
let stateThree;
let stateFive;
let stateSix;
let stateSeven;
let stateEight;
let gameover;
let win;
let typed = "";
let state = 0;
let counter = 0;



function preload(){
  stateZero = loadImage("state0.jpg")
  stateOne = loadImage("state1.jpg")
  stateTwo = loadImage("state2.jpg")
  stateThree = loadImage("state3.jpg")
  stateFive = loadImage("state5.jpg")
  stateSix = loadImage("state6.jpg")
  stateSeven = loadImage("state7.jpg")
  stateEight = loadImage("state8.png")
  gameover = loadImage("game-over.gif");
  win = loadImage("win.png");
}


function setup(){
  createCanvas(displayWidth, displayHeight);
  background(0);
  // font
  textFont("arial");
  textSize(30);
  textAlign(CENTER);
  fill(220,220,220);
}

function draw(){
  background(0);
  // if(state == nextState){
    if(state == 0){
      image(stateZero, 0, 90);
      text("Yo! Are you joinning us or not?", 0,10, width, 30);
      text("Type 'yes' or 'no'", 0,50, width, 30);

    } else if (state == 1){
      image(stateOne, 0, 0);
      text("Well then, hurry up!", 0,10, width, 30);
      text("The Heist won't be successful if we stay here", 0,38, width, 30);
      text("Should we go sneaky or loudly?", 0,68, width, 30);
      text("type 'sneaky' or 'loudly'", 0,106, width, 30);


    } else if (state == 2){
      image(stateTwo, 0, 0);
      text("yo! There's someone there! What should we do?!", 0,38, width, 30);
      text("Will you 'attack' or 'hide'?", 0,62, width, 30);

    } else if (state == 3){
      image(stateThree, 0, 0);
      text("Good work! We are able to gather intel about the treasure", 0,38, width, 30);
      text("Will you 'execute' or 'knockout' the gaurd?", 0,62, width, 30);

    } else if (state == 5){
      image(stateFive, 0, 0);
      text("Let's go! We found the treasure!", 0,38, width, 30);
      text("Will you 'steal' or 'betray'?", 0,62, width, 30);

    } else if (state == 6){
      image(stateSix, 0, 0);
      text("Let's go! Let's make a run for it!", 0,38, width, 30);
      text("Will you 'lead' the way or 'follow' the teammate?", 0,62, width, 30);

    } else if (state == 7){
      image(stateSeven, 0, 0);
      text("Are you serious? You can't betay me like that", 0,38, width, 30);
      text("Will you 'shoot' or 'capture' the teammate?", 0,62, width, 30);

    } else if (state == 8){
      image(stateEight, 0, 0);
      text("You successfully got the treasure and escaped", 0,38, width, 30);
      text("GGWP", 0,62, width, 30);
      setInterval(end, 3000)


    } else if (state == 4){
      image(gameover, 0, 0);
      text("You were spotted and executed by the gaurds", 0,38, width, 30);
      text("...", 0,62, width, 30);
      setInterval(end, 3000)
  }
  text(typed, 0, displayHeight - 30, width, 30);
}

function keyPressed(){
  if(keyCode == BACKSPACE){
    typed = '';
  }
}


function keyTyped(){
      if(typed == 'yes'){
        state = 1;
        typed = '';
      } else if (typed == 'no'){
        state = 4;
        typed = '';
      } else if (typed == 'sneaky'){
        state = 2;
        typed = '';
      } else if (typed == 'loudly'){
        state = 4;
        typed = '';
      } else if (typed == 'attack'){
        state = 3;
        typed = '';
      } else if (typed == 'hide'){
        state = 4;
        typed = '';
      } else if (typed == 'execute'){
        state = 5;
        typed = '';
      } else if (typed == 'knockout'){
        state = 5;
        typed = '';
      } else if (typed == 'steal'){
        state = 6;
        typed = '';
      } else if (typed == 'betray'){
        state = 7;
        typed = '';
      } else if (typed == 'capture'){
        state = 4;
        typed = '';
      } else if (typed == 'shoot'){
        state = 4;
        typed = '';
      } else if (typed == 'follow'){
        state = 4;
        typed = '';
      } else if (typed == 'lead'){
        state = 8;
        typed = '';
      }
    else
    typed += key;
  }

function end(){
  location.replace("https://xadeptx.github.io/p3/index.html");
}
