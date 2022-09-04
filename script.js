document.querySelector('.i-1').onkeypress = function (event) {
    let out = '';
    out += event.key;
    document.querySelector('.out-1').innerHTML = out;
}
document.querySelector('.i-2').onkeypress = function (event) {
    let out = '';
    out += event.code;
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.i-3').onkeypress = function (event) {
    let out = '';
    if (event.charCode <= 57) {
        out += true;
    }
    else {
        out += false;
    }
    document.querySelector('.out-3').innerHTML = out;
}
function t4(event) {
    let out = document.querySelector('.out-4');
    let k = event.key;

    if (k.charCodeAt() > 96) {
        out.innerHTML += k;
    }
}
document.querySelector('.i-4').addEventListener('keypress', t4);

function t5(event) {
    let out = document.querySelector('.out-5');
    let k = event.key;
    out.innerHTML += k.toUpperCase();
}
document.querySelector('.i-5').addEventListener('keypress', t5);

function t6(event) {
    let out = document.querySelector('.out-6');
    let k = event.key;
    out.innerHTML += k.toLowerCase();
}
document.querySelector('.i-6').addEventListener('keypress', t6);

const a7 = ['a', 'z', 'x', 'w', 'y', 't'];
document.querySelector('.i-7').onkeypress = function (event) {
    let str = '';
    let item = a7[Math.floor(Math.random() * a7.length)];
    str += item;
    document.querySelector('.out-7').innerHTML += str;
}
document.querySelector('.i-8').onkeypress = function (event) {
    let out = '';
    if (event.charCode == 105) {
        out += 1
    }
    else if (event.charCode == 111) {
        out += 0;
    }
    else if (event.charCode == 73) {
        out += 7;
    }
    document.querySelector('.out-8').innerHTML += out;
}
let out = 0;
document.querySelector('.i-9').onkeydown = function (event) {
    if (event.keyCode == 40) {
        out++
        return true;
    }
    document.querySelector('.out-9').innerHTML = out;
}

let imgWidth = document.querySelector('img').clientWidth;
let imgHeight = document.querySelector('img').clientHeight;
function t10(event) {
    if (event.keyCode == 37 || event.keyCode == 39) {
        imgWidth++
    }
    else if (event.keyCode == 38 || event.keyCode == 40) {
        imgHeight++
    }
    document.querySelector('img').style.width = imgWidth + 'px';
    document.querySelector('img').style.height = imgHeight + 'px';
}
document.querySelector('.i-10').onkeydown = t10;


let keys = [
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm'
]
function createKeyboard() {
    let out = '';
    for (let key of keys) {
        out += `<div class = 'symb symb-${key}'>${key}</div>`;
    }
    document.querySelector('.keyboard').innerHTML = out;
}
createKeyboard()

function t11(event) {
    if (event.type == 'keydown') {
        document.querySelectorAll('.symb').forEach((symb) => {
            if (symb.innerHTML == event.key || symb.innerHTML == event.code) {
                symb.classList.add('active');
            }
        });
    } else if (event.type == 'keyup') {
        let elem = document.querySelector('.active');
        elem.classList.remove('active');
    }
}
document.querySelector('.i-11').addEventListener('keyup', t11);
document.querySelector('.i-11').addEventListener('keydown', t11);


