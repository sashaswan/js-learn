let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.go');
let div = document.querySelector('#out');

button.onclick = function () {
    let b = +inputIn.value;
    console.log(b + 10);
    inputIn.value = '';
    div.innerHTML = b
}
// Task 1
let a = 7;
let b = 9;
console.log(a * b);
// Task 2
let c = 7;
let d = 9;
console.log(c / d);
// Task 3
let e = 3;
let f = 5;
console.log(e + f);
// Task 4
let e1 = '3';
let f1 = 5;
console.log(e1 + f1);
// Task 5
let e2 = 3;
let f2 = 0;
console.log(e2 / f2);
// Task 6
let divIn = document.querySelector('#in');
let e3 = 3;
let f3 = 'Hello';
divIn.innerHTML = e3 + f3;
// Task 7
let two = document.querySelector('#two');
let e4 = 3;
let f4 = 'Hello';
two.innerHTML = e4 * f4;
// Task 8/9/10/11
let inputOut = document.querySelector('.input-out');
let start = document.querySelector('#start');
let three = document.querySelector('.three');
start.onclick = () => {
    let out = inputOut.value;
    inputOut.value = '';
    three.innerHTML = out + 10;
}
// Task 12
let name = document.querySelector('.name');
let lastName = document.querySelector('.last-name');
let find = document.querySelector('.find');
find.onclick = () => {
    let n = name.value;
    let l = lastName.value;
    console.log('Hello' + ' ' + n + ' ' + l);
}
// Task 13
let count = document.querySelector('.count');
count.onclick = () => {
    let first = +document.querySelector('.first').value;
    let second = +document.querySelector('.second').value;
    console.log(first + second);
}
// Task 14
document.querySelector('.inputChange').value = 'Hello';
// Task 15
let y = document.querySelector('.get');
y.style.border = '2px solid red';
// Task 16
let n1 = document.querySelector('.number-one').value;
let n2 = document.querySelector('.number-two').value;
let output = document.querySelector('.output');
output.innerHTML = n1 + n2;

// Task 17/18
let text1 = document.querySelector('.text1');
let btn = document.querySelector('.btn');
btn.onclick = () => {
    let t = text1.value;
    t = parseInt(t); // не округляє до цілого
    // t = parseFloat(t) // округляє до цілого
    console.log(t);
}
// Task 19
let number1 = document.querySelector('.number1').value;
let number2 = document.querySelector('.number2').value;
let outputNew = document.querySelector('.output-new');
b1 = parseInt(number1);
b2 = parseInt(number2);
outputNew.innerHTML = b1 + b2;
// Task 20
let submit = document.querySelector('.submit');
submit.onclick = () => {
    let yourName = document.querySelector('.your-name').value;
    let yourLastName = document.querySelector('.your-lastname').value;
    let age = document.querySelector('.age').value;
    let hobby = document.querySelector('.hobby').value;
    let outMessage = document.querySelector('.out-message');
    let space = '<p></p>';
    outMessage.innerHTML = `Dear ${yourName} <br> Your Last Name ${yourLastName} <br> Your age ${age} <br> Your hobby ${hobby}`;
    // outMessage.innerHTML = t1 + space + yourName + yourLastName + space + t2 + space + age + space + t3 + space + hobby;
}







