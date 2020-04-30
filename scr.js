function preload(){
  stateZero = loadImage("state0.jpg");
  stateOne = loadImage("state1.jpg");
  stateTwo = loadImage("state2.jpg")
}

let state = [];
state[0] = "stateZero"
state[1] = "stateOne"
state[2] = "stateTwo"

let currentState = 0;
let output = document.querySelector("#output")
output.innerHTML = state[currentState];
