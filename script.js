// let a = 6;

// if (a < 9) {
//     console.log('yes');
// }
// else {
//     console.log('no');
// }

// let age = document.querySelector('.age');
// let submit = document.querySelector('.submit');

// submit.onclick = () => {
//     let num = +age.value;
//     if (num >= 16 && num < 60) {
//         console.log('Welcome');
//     }
//     else if (num > 60) {
//         console.log('Are you sure?');
//     }
//     else {
//         console.log('Unde 16 years');
//     }

//     switch (num) {
//         case 15:
//             console.log('One year more needed');
//             break;
//         case 16:
//             console.log('Welcome back!!!!!');
//             break;
//         default:
//             console.log('okkkk')
//     }
// }

// let b = 5;
// console.log(b > 3 || b < 7);

// Task 1
let b1 = document.querySelector('.b-1');
let out1 = document.querySelector('.out-1');
b1.onclick = function (f1) {
    let i1 = document.querySelector('.i-1').value == 4;
    out1.innerHTML = i1;
}
// Task 2

let a22 = 22;
let a21 = 21;

let b2 = document.querySelector('.b-2');
let out2 = document.querySelector('.out-2');

b2.onclick = () => {
    if (a22 > a21) {
        out2.innerHTML = 22;
    }
    else {
        out2.innerHTML = 21;
    }
}
// Task 3

let b3 = document.querySelector('.b-3');
let out3 = document.querySelector('.out-3');

b3.onclick = function (f3) {
    let i31 = +document.querySelector('.i-31').value;
    let i32 = +document.querySelector('.i-32').value;
    if (i31 >= i32) {
        out3.innerHTML = i31;
    }
    else if (i31 <= i32) {
        out3.innerHTML = i32;
    }
}
// Task 4
let b4 = document.querySelector('.b-4');
let out4 = document.querySelector('.out-4');

b4.onclick = function (f4) {
    let i4 = document.querySelector('.i-4').value;
    if (i4 >= 18) {
        out4.innerHTML = 1;
    }
    else if (i4 < 18) {
        out4.innerHTML = 0;
    }
}

// Task 5
let b5 = document.querySelector('.b-5');
let out5 = document.querySelector('.out-5');

b5.onclick = function (f5) {
    let i5 = document.querySelector('.i-5').value;

    if (i5 < 0) {
        out5.innerHTML = 'm';
    }
    else if (i5 == 0) {
        out5.innerHTML = 0;
    }
    else if (i5 > 0) {
        out5.innerHTML = 1;
    }
}
//Task 6
let b6 = document.querySelector('.b-6');
let out6 = document.querySelector('.out-6');

b6.onclick = function (f6) {
    let i6 = document.querySelector('.i-6').value;
    if (i6 % 2 == 0) {
        out6.innerHTML = 'even';
    }
    else {
        out6.innerHTML = 'odd';
    }
}
// Task 7
let b7 = document.querySelector('.b-7');
let out7 = document.querySelector('.out-7');

b7.onclick = function (f7) {
    let i71 = document.querySelector('.i-71').value;
    let i72 = document.querySelector('.i-72').value;
    out7.innerHTML = i71 **= i72;
}

// Task 8
let b8 = document.querySelector('.b-8');
let out8 = document.querySelector('.out-8');

b8.onclick = function (f8) {
    let s8 = +document.querySelector('.s-8').value;
    switch (s8) {
        case 1:
            out8.innerHTML = 'one';
            break;
        case 2:
            out8.innerHTML = 'two';
            break;
        case 3:
            out8.innerHTML = 'three';
            break;
    }
}
// Task 9
let b9 = document.querySelector('.b-9');
let out9 = document.querySelector('.out-9');
b9.onclick = function (f9) {
    let i9 = +document.querySelector('.i-9').value;
    if (i9 <= 1 || i9 <= 32) {
        out9.innerHTML = 1;
    }
    else if (i9 <= 33 || i9 <= 43) {
        out9.innerHTML = 2;
    }
    else if (i9 <= 44 || i9 <= 64) {
        out9.innerHTML = 3;
    }
    else {
        out9.innerHTML = 0;
    }
}
// Task 10
let b10 = document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');
b10.onclick = function (f10) {
    let s100 = document.querySelector('.s-100').value;
    out10.innerHTML = s100;
}
// Task 11
let out11 = document.querySelector('.out-11');
function f11() {
    let s110 = document.querySelector('.s-110').value;
    out11.innerHTML = s110;
}

// Task 12

let b12 = document.querySelector('.b-12');
let out12 = document.querySelector('.out-12');

b12.onclick = () => {
    let i120 = document.querySelector('.i-120').value;
    out12.innerHTML = typeof i120;
}

// Task 13

let b13 = document.querySelector('.b-13');
let out13 = document.querySelector('.out-13');

b13.onclick = () => {
    let i130 = +document.querySelector('.i-130').value;
    out13.innerHTML = typeof i130;
}

// Task 14

let b14 = document.querySelector('.b-14');
let out14 = document.querySelector('.out-14');

b14.onclick = function f14() {
    let i141 = +document.querySelector('.i-141').value;
    let i142 = +document.querySelector('.i-142').value;
    let s143 = document.querySelector('.s-143').value;
    switch (s143) {
        case "+":
            out14.innerHTML = i141 + + i142;
            break;
        case "-":
            out14.innerHTML = i141 - + i142;
            break;
        case "*":
            out14.innerHTML = i141 * + i142;
            break;
        case "/":
            out14.innerHTML = i141 / + i142;
            break;
    }
}

// Task 15

let b15 = document.querySelector('.b-15');
let out15 = document.querySelector('.out-15');

b15.onclick = function f15() {
    let i151 = +document.querySelector('.i-151').value;
    let i152 = +document.querySelector('.i-152').value;
    let s153 = document.querySelector('.s-153').value;
    switch (s153) {
        case '&&':
            out15.innerHTML = i151 && + i152;
            break;
        case '||':
            out15.innerHTML = i151 || + i152;
            break;
    }
}