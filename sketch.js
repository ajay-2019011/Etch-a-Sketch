//-------Methods to remove elements by using ids and classes---------
//const sketch = document.getElementsByClassName("sketch");
//const sketch = document.getElementsByClassName("sketch white");
//sketch[0].remove();
//sketch[0].parentNode.removeChild(sketch[0]);
//const test = document.getElementById("test");
//test.remove();
//--------------XXXXXX--------------------
let total = prompt("Please enter the size of matrix",16);
const board = document.querySelector('.board');
let clickedErase = 0,clickedColor=1,clickedRainbow=0;
let i = 0;
let wide = 800 / total;



for (i = 0; i < total;i++){
  let element = document.createElement('div');
  element.classList.add("in");
  board.appendChild(element);
}
const inElements = document.querySelectorAll(".in")

inElements.forEach((inElement) => {
  for (i = 0; i < total; i++) {
    let ele = document.createElement('div');
    ele.classList.add("into");
    
    inElement.appendChild(ele);
  }
});






