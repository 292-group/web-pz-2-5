let a = '';
let b = '';
let sing = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

const out = document.querySelector('.section__calculator-output p');



function clearAll() {
    a = '';
    b = '';
    sing = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.section__calculator-buttons').onclick = (event) => {

    if (!event.target.classList.contains('btn')) return;

    if (event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sing === '') {
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
        return
    }

    if (action.includes(key)) {
        sing = key;
        out.textContent = sing;
        return;
    }

    if (key === '=') {
        switch (sing) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sing = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
    }
    if (key === '+/-') {
        if (a > 0) {
            a = -a;
            out.textContent = a;
        }
        else if (a < 0) {
            a = -a;
            out.textContent = a;
        }
    }
    if (key === '%') {
        b = a * (b / 100);
        out.textContent = b;
    }
}
