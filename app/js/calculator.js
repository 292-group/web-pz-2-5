let operands = [];
let operators = [];
let currentOperand = '';
let showCaseString = '';
let output;
let copyy;
let pastee;
let result = 0;
let schema = true;
document.addEventListener("DOMContentLoaded", ready);
function ready(){
    output = document.getElementsByClassName('calculator__input__field');
    copyy = document.getElementsByClassName('keyboard__button_cookie_copy');
    pastee = document.getElementsByClassName('keyboard__button_cookie_paste');
}
function changeSchema(){
    let lightButtons;
    let sideButtons;
    let digButtons;
    let body = document.querySelector('body');
    let input = document.querySelector('.calculator__input__field');
    if(schema){
        schema=false;
        lightButtons = document.querySelectorAll('.keyboard__button_light-grey');
        sideButtons = document.querySelectorAll('.keyboard__button_orange');
        digButtons = document.querySelectorAll('.keyboard__button_grey');
        body.style.backgroundColor = '#0F1709';
        input.style.backgroundColor = '#0F1709';
        lightButtons.forEach(e => {
            e.classList.replace('keyboard__button_light-grey','keyboard__button_light-green');
        });
        sideButtons.forEach(e => {
            e.classList.replace('keyboard__button_orange','keyboard__button_green');
        });
        digButtons.forEach(e => {
            e.classList.replace('keyboard__button_grey','keyboard__button_dgts');
        }); 
    }else{
        schema = true;
        lightButtons = document.querySelectorAll('.keyboard__button_light-green');
        sideButtons = document.querySelectorAll('.keyboard__button_green');
        digButtons = document.querySelectorAll('.keyboard__button_dgts');
        body.style.backgroundColor = '#181717';
        input.style.backgroundColor = '#181717';
        lightButtons.forEach(e => {
            e.classList.replace('keyboard__button_light-green','keyboard__button_light-grey');
        });
        sideButtons.forEach(e => {
            e.classList.replace('keyboard__button_green', 'keyboard__button_orange');
        });
        digButtons.forEach(e => {
            e.classList.replace('keyboard__button_dgts','keyboard__button_grey');
        }); 
    }
}
function takeNumber(el){
    if(showCaseString.length==10){
        output[0].style.fontSize = '36px';
    }
    currentOperand+=el.textContent;
    showCaseString+=el.textContent;
    console.log(currentOperand);
    output[0].textContent = makeShowString();
}
function getAction(el){
    if(output[0].textContent != ''){
    operands.push(currentOperand);
    currentOperand = '';
    operators.push(el.textContent);
    output[0].textContent = makeShowString();
    }
}
function calculate(){
    operands.push(currentOperand);

    while(operators.indexOf('×')!=-1 || operators.indexOf('÷')!=-1){
        for(c=0; c<operators.length; c++){
            if(operators[c]=='×' || operators[c]=='÷'){
                let tmp;
                switch(operators[c]){
                    case '×':
                        tmp = parseFloat(operands[c])*parseFloat(operands[c+1]);
                        operands[c+1] = tmp;
                        operands.splice(c,1);
                        operators.splice(c,1);
                        console.log(operators);
                        break;
                    case '÷':
                        tmp = parseFloat(operands[c])/parseFloat(operands[c+1]);
                        operands[c+1] = tmp;
                        operands.splice(c,1);
                        operators.splice(c,1);
                        console.log(operators);
                        break;
                }
            }
        }
    }
    let buf = parseFloat(operands[0]);
    for(i=0; i<operands.length-1;i++){
                switch (operators[i]) {
                    case '+':
                        buf = buf+parseFloat(operands[i+1]);
                      break;
                    case '-':
                        buf = buf-parseFloat(operands[i+1]);
                      break;
                    case '÷':
                      break;
                    case '×':
                        break;
                }
    }
    result = buf;
    currentOperand = result;
    showCaseString = result;
    operands = [];
    operators = [];
    output[0].textContent = result;
}
function ac(){
    output[0].textContent = '';
    operands = [];
    operators = [];
    currentOperand = '';
    showCaseString = '';
}
function copy(){
document.cookie = "result="+result;
console.log(document.cookie);
}
function paste(){
    var name_cook = "result=";
	var spl = document.cookie.split(";");
	for(var i=0; i<spl.length; i++) {
		var c = spl[i];
		while(c.charAt(0) == " ") {
			c = c.substring(1, c.length);
		}
		if(c.indexOf(name_cook) == 0) {
			let val = c.substring(name_cook.length, c.length);
			showCaseString+=val;
            currentOperand = val;
            output[0].textContent= showCaseString;
		}
	}
	return null;
}
function changeSign(){
    if(currentOperand.indexOf('-')==-1){
        currentOperand= '-'+currentOperand;
    }else
    currentOperand = currentOperand.slice(1);
    output[0].textContent = makeShowString();
}
function percent(){
    let x;
    if(operands.length == 0){
        currentOperand = parseFloat(currentOperand)/100;
       
    }else
    {
        x = operands[operands.length-1]*currentOperand/100;
        currentOperand = x;

    }
    output[0].textContent = makeShowString();
}
function makeShowString(){
    let showStr = '';
    for(i=0; i<operands.length;i++){
        showStr+=operands[i]+operators[i];
    }
    showStr+=currentOperand;
    return showStr;
}