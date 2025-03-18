let result = '';
let inPutResult = document.getElementById("result");
let OutPutResult = document.getElementById("result_output");


let btn1 = document.getElementById("btn1");
btn1.onclick = function(){
  appendNumber(1);
}

let btn2 = document.getElementById("btn2");
btn2.onclick = function(){
  appendNumber(2);
}

let btn3 = document.getElementById("btn3");
btn3.onclick = function(){
  appendNumber(3);
}

let btn4 = document.getElementById("btn4");
btn4.onclick = function(){
  appendNumber(4);
}

let btn5 = document.getElementById("btn5");
btn5.onclick = function(){
  appendNumber(5);
}

let btn6 = document.getElementById("btn6");
btn6.onclick = function(){
  appendNumber(6);
}

let btn7 = document.getElementById("btn7");
btn7.onclick = function(){
  appendNumber(7);
}

let btn8 = document.getElementById("btn8");
btn8.onclick = function(){
  appendNumber(8);
}

let btn9 = document.getElementById("btn9");
btn9.onclick = function(){
  appendNumber(9);
}

let btn0 = document.getElementById("btn0");
btn0.onclick = function(){
  appendNumber(0);
}

let btnAdd = document.getElementById("btnAdd");
btnAdd.onclick = function(){
  appendOperator("+");
}

let btnSubtract = document.getElementById("btnSubtract");
btnSubtract.onclick = function(){
  appendOperator("-");
}

let btnMultiply = document.getElementById("btnMultiply");
btnMultiply.onclick = function(){
  appendOperator("*");
}

let btnDivide = document.getElementById("btnDivide");
btnDivide.onclick = function(){
  appendOperator("/");
}

let btnClear = document.getElementById("btnClear");
btnClear.onclick = function(){
  screenClear();
}

let btnEqual = document.getElementById("btnEqual");
btnEqual.onclick = function(){
  calculate();
}

function appendNumber(number){
  result = result + number;
  inPutResult.value = result;
}

function appendOperator(operator){
  result = result + operator;
  inPutResult.value = result;
}

function screenClear(){
  result = "";
  OutPutResult.value = result;
  inPutResult.value = result;
}

function calculate(){
  result = eval(result);
  OutPutResult.value = result;
}