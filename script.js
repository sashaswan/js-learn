let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.go');
let div = document.querySelector('#out');

button.onclick = function () {
    let b = +inputIn.value;
    console.log(b + 10);
    inputIn.value = '';
    div.innerHTML = b
}

let a = 7;
let b = 9;
console.log(a * b);

let c = 7;
let d = 9;
console.log(c / d);

let e = 3;
let f = 5;
console.log(e + f);

let e1 = '3';
let f1 = 5;
console.log(e1 + f1);


let e2 = 3;
let f2 = 0;
console.log(e2 / f2);

let divIn = document.querySelector('#in');
let e3 = 3;
let f3 = 'Hello';
divIn.innerHTML = e3 + f3;


let two = document.querySelector('#two');
let e4 = 3;
let f4 = 'Hello';
two.innerHTML = e4 * f4;

let inputOut = document.querySelector('.input-out');
let start = document.querySelector('#start');
let three = document.querySelector('.three');

start.onclick = () => {
    let out = inputOut.value;
    inputOut.value = '';
    three.innerHTML = out + 10;
}

let name = document.querySelector('.name');
let lastName = document.querySelector('.last-name');
let find = document.querySelector('.find');

find.onclick = () => {
    let n = name.value;
    let l = lastName.value;
    console.log('Hello' + ' ' + n + ' ' + l);
}

let first = document.querySelector('.first');
let second = document.querySelector('.second');
let count = document.querySelector('.count');

count.onclick = () => {
    let f = +first.value;
    let s = +second.value;
    console.log(f + s);
}

document.querySelector('.inputChange').value = 'Hello';

let y = document.querySelector('.get');
y.style.border = '2px solid red';

let n1 = document.querySelector('.number-one').value;
let n2 = document.querySelector('.number-two').value;
let output = document.querySelector('.output');

output.innerHTML = n1 + n2;


let text1 = document.querySelector('.text1');
let btn = document.querySelector('.btn');

btn.onclick = () => {
    let t = text1.value;
    t = parseInt(t); // не округляє до цілого
    t = parseFloat(t) // округляє до цілого
    console.log(t);
}
let number1 = document.querySelector('.number1').value;
let number2 = document.querySelector('.number2').value;
let outputNew = document.querySelector('.output-new');

b1 = parseInt(number1);
b2 = parseInt(number2);

outputNew.innerHTML = b1 + b2;


let yourName = document.querySelector('.your-name').value;
let yourLastName = document.querySelector('.your-lastname').value;
let age = document.querySelector('.age').value;
let hobby = document.querySelector('.hobby').value;
let submit = document.querySelector('.submit');
let outMessage = document.querySelector('.out-message');

submit.onclick = () => {
    let t1 = 'Dear';
    let t2 = 'Your age';
    let t3 = 'Your Hobby';
    let space = '<p></p>';
    outMessage.innerHTML = t1 + space + yourName + yourLastName + space + t2 + space + age + space + t3 + space + hobby;
}







