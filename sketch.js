//-------Methods to remove elements by using ids and classes---------
//const sketch = document.getElementsByClassName("sketch");
//const sketch = document.getElementsByClassName("sketch white");
//sketch[0].remove();
//sketch[0].parentNode.removeChild(sketch[0]);
//const test = document.getElementById("test");
//test.remove();
//--------------XXXXXX--------------------
let total = prompt("Please enter the size of matrix", 16);
while (total<2 || total>100) {
  total = prompt("Please enter the size of matrix between 2 and 100", 16);
  
}
const board = document.querySelector('.board');
let clickedErase = 0, clickedDraw = 0, clickedRainbow = 0,blackBoard=1,whiteBoard=0;
let i = 0;
let wide = 800 / total;

let values = ["lime", "orange", "purple", "indigo", "green", "gold", "blue", "brown", "red", "aqua"];
function randomColor() {
  let min = 0;
  let max = 10;
  let randomInt = Math.floor(Math.random() * (max - min)) + min;
  return values[randomInt];
}

const blackB = document.querySelector('#blackB');
blackB.addEventListener('click', blackOn);

const whiteB = document.querySelector('#whiteB');
whiteB.addEventListener('click', whiteOn);

const erase = document.querySelector('#erase');
erase.addEventListener('click', eraseIt);

const draw = document.querySelector('#draw');
draw.addEventListener('click', drawIt);

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', rainbowIt);


function blackOn(e) {
  blackBoard = 1;
  whiteBoard = 0;
  clearing();
}

function whiteOn(e) {
  whiteBoard = 1;
  blackBoard = 0;
  clearing();
}

function eraseIt(e) {
  clickedErase = 1;
  clickedDraw = 0;
  clickedRainbow = 0;
  clickedClear = 0;
}

function drawIt(e) {
  clickedDraw = 1;
  clickedErase = 0;
  clickedRainbow = 0;
  clickedClear = 0;
}

function rainbowIt(e) {
  clickedRainbow = 1;
  clickedErase = 0;
  clickedDraw = 0;
  clickedClear = 0;
}

function clearIt(e) {
  clickedClear = 1;
  clickedDraw = 0;
  clickedErase = 0;
  clickedRainbow = 0;
  clearing();
}

function check(val) {
  if (val == 0) {
    return clickedErase;
  }
  else if (val == 1) {
    return clickedDraw;
  }
  else if (val == 2) {
    return clickedRainbow;
  }
  else if (val == 3) {
    return whiteBoard;
  }
  else if (val == 4) {
    return blackBoard;
  }
}

for (i = 0; i < total; i++) {
  let element = document.createElement('div');
  element.classList.add("in");
  board.appendChild(element);
}
const inElements = document.querySelectorAll(".in")

inElements.forEach((inElement) => {
  for (i = 0; i < total; i++) {
    let ele = document.createElement('div');
    ele.classList.add("into");
    ele.addEventListener('mouseover', () => {
      if (check(0)) {
        if(check(4))
          ele.style.backgroundColor = "black";
        else if (check(3))
          ele.style.backgroundColor = "white";
      }
      else if (check(1)) {
        if(check(4))
          ele.style.backgroundColor = "white";
        else if (check(3))
          ele.style.backgroundColor = "black";
      }
      else if (check(2))
        ele.style.backgroundColor = randomColor();
    });
    inElement.appendChild(ele);
  }
});

let clickedClear = 0;
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearIt);

function clearing() {
  const inDivs = document.querySelectorAll(".in")
  inDivs.forEach((insideDivs) => {
    const leafDivs = insideDivs.querySelectorAll(".into");
    leafDivs.forEach((leaf) => {
      if(check(4))
        leaf.style.backgroundColor = "black";
      else if (check(3))
        leaf.style.backgroundColor = "white";
    });
  });
}






