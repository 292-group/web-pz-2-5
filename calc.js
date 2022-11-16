let a = ''; // first number
let b = ''; // secont number
let sign = ''; // знак операции
let finish = false;
let themre = true

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];


// экран 
const out = document.querySelector('.calc-screen p');

// copy, paste, theme buttons
// const copyButton = document.getElementById("copy")
// copyButton.onclick = () => {
//     copyNumber = out.textContent
//     console.log(copyNumber);
// }
// const pasteButton = document.getElementById("paste")
// pasteButton.addEventListener('click', () => {
//     out.textContent = copyNumber
//     console.log(copyNumber);
// })

function clearAll() {
    a = ''; // first number and result
    b = ''; // second number 
    sign = ''; // знак
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    // нажата кнопка clearAll ac
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;

    // если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;

            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    // если нажата клавиша + - / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }
    if (a === null && b === null) {
        a = a
    }

    // нажата =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);


    };
    // if (key === 'copy') { 
    //     copyNumber = a; 
    //     out.textContent = a; 
    // } 
    // if (key === 'past') { 
    //     if (a !== '') { 
    //         b = copyNumber;  
    //         out.textContent = b; 
    //     }
};







const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};

