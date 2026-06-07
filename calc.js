function add(a,b){return a+b;}
function sub(a,b){return a-b;}
function mult(a,b){return a*b;}
function div(a,b){
    if(b==0) console.log("Invalid!")
    else{return a/b;}
}
let currentInput= '';
let operator ='';
let firstNum= '';

function inputNum(n){
    currentInput += n;
    document.getElementById("display").textContent = currentInput;
}

function inputOp(op){
    firstNum = currentInput;
    operator = op;
    currentInput = '';
    document.getElementById("display").textContent = '0';
}
function calculate(){
    let a = parseFloat(firstNum);
    let b = parseFloat(currentInput);
    let result; 

    switch(operator){
        case '+': result = add(a,b); break;
        case '-': result = sub(a,b); break;
        case '*': result = mult(a,b); break;
        case '/': result = div(a,b); break;
    }
    document.getElementById("display").textContent = result;
    currentInput = String(result);
}
function clearAll(){
    currentInput = '';
    firstNum = '';
    operator = '';
    document.getElementById("display").textContent = '0';
}
function clearEntry(){
    currentInput = '';
    document.getElementById("display").textContent = '0';
}
function deleteLast(){
    currentInput = currentInput.slice(0, -1);
    document.getElementById("display").textContent = currentInput || '0';
}
