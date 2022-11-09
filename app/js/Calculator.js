const actions = ['+', '-', '*', '/', '.', '%']

function prntAction(val) {
  if (val === '+/-') {
    let firstDigit = document.getElementById("result").value[0]
    if (firstDigit === '-'){
      document.getElementById("result").value = document.getElementById("result").value.slice(1, document.getElementById("result").value.length)
    }
    else {
      document.getElementById("result").value = '-' + document.getElementById("result").value
    }
  }

  else if (actions.includes(document.getElementById("result").value[document.getElementById("result").value.length-1])
    || document.getElementById("result").value.length === 0) {
  }
  else {
    document.getElementById("result").value += val
  }
}

function prnt(val) {
    document.getElementById("result").value += val
}

function solve() {
  if (document.getElementById("result").value.length !== 0)
    {
      let x = document.getElementById("result").value
      let y = math.evaluate(x)
      document.getElementById("result").value = y
    }
}

function clr() {
  document.getElementById("result").value = ""
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator_iphone");
const toggleIcon = document.querySelector(".toggler-icon");
let isLight = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("light");
  themeToggleBtn.classList.toggle("active");
  isDark = !isLight;
};

function setCookie() {
  console.log(document.getElementById("result").value);
  document.cookie = "result="+document.getElementById("result").value;
}

function getCookie() {
  var name_cook = "result=";
  var spl = document.cookie.split(";");
  for(var i=0; i<spl.length; i++) {
    var c = spl[i];
    while(c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if(c.indexOf(name_cook) == 0) {
      let val = c.substring(name_cook.length, c.length);
      document.getElementById("result").value = val
    }
  }
  return null;
}
// function onClickFac() {
//     const val = document.getElementById("result").value; 
//   document.getElementById("result").value = val * val;

// }
function onClickFactorial() {
  let val = document.getElementById("result").value; 
  for (i = val - 1; i >= 1; i--) {
  val *= i;
  }
return document.getElementById("result").value = val;
}