let ar1 = ['burmalda', 17, true, false];
document.querySelector('.b-1').onclick = function () {
    let out = document.querySelector('.out-1');
    for (let i = 0; i < ar1.length; i++) {
        out.innerHTML += ar1[i] + ' ';
    }
}

let arr2 = ['burmalda', 17, true, false];
let out = '';

document.querySelector('.b-2').onclick = function () {
    for (let i = 0; i < ar1.length; i++) {
        out += arr2[i] + ' ';
    }
    document.querySelector('.out-2').innerHTML = out;
}

let arr3 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
console.log(arr3.length);

// Task 4
let arr4 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
let out4 = '';
document.querySelector('.b-4').onclick = function () {
    for (let i = 0; i <= arr4.length - 1; i++) {
        if (i == 0 || i == 3 || i == 8) {
            out4 += arr4[i] + ' ';
        }
        document.querySelector('.out-4').innerHTML = out4;
    }
}

let arr5 = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
document.querySelector('.b-5').onclick = function () {
    let out5 = '';
    sum = sum + arr5[0] + arr5[2] + arr5[3];
    out5 += 'sum: ' + sum;
    document.querySelector('.out-5').innerHTML = out5;
}

let arr6 = [
    'Alex',
    'Carpicorn',
    17,
    01
]
let out6 = '';
function t6() {
    for (let i = 0; i < arr6.length; i++) {
        out6 += arr6[i] + ' ';
    }
    document.querySelector('.out-6').innerHTML = out6;
}
t6();

arr7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
let div7 = document.querySelector('.out-7');

function t7() {
    arr7.push('vietnam', 'turkey', 'italy');
    div7.innerHTML = `${arr7}`;
}
document.querySelector('.b-7').onclick = t7;

arr8 = ['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp'];
function t8() {
    let out8 = '';
    arr8[3] = 3.14;
    arr8[4] = 17;
    arr8[6] = 5;
    for (let i = 0; i < arr8.length; i++) {
        out8 += arr8[i] + ' ';
    }
    document.querySelector('.out-8').innerHTML = out8;
    document.querySelector('.out-8-1').innerHTML = arr8.length;
}
t8();


function t9() {
    ar9 = [100, 200, 300, 400, 700, 121];
    let out9 = ''
    for (let i = 0; i < ar9.length; i++) {
        if (ar9[i] == ar9[ar9.length - 1]) {
            out9 += ar9[i];
        }
    }
    document.querySelector('.out-9').innerHTML = out9;
}
t9()

ar10 = [100, 200, 300, 400, 700, 121];
function t10() {
    document.querySelector(".out-10").innerHTML = ar10[1] + ar10[ar10.length - 1];
}
t10();

ar11 = [2, 3, 4, 5, 6, 7];
function t11() {
    let t = ar11[2];
    ar11[2] = ar11[4];
    ar11[4] = t;
    document.querySelector('.out-11').innerHTML = ar11;
}
t11();

ar12 = ['test', 'west', 'list', 'class', 'best'];
function t12() {
    let t = ar12[0];
    ar12[0] = ar12[ar12.length - 1];
    ar12[ar12.length - 1] = t;
    document.querySelector('.out-11').innerHTML = ar12;
}
t12();

function t13() {
    ar13 = ['test', 'west', 'list', 'class', 'best'];
    out13 = '';
    for (let i = 0; i < ar13.length; i++) {
        out13 += ar13[i] + ' ' + i + ' ';
    }
    document.querySelector('.out-13').innerHTML = out13;
}
t13();

function t14() {
    ar14 = [1, 2, 3, 'hello', 66];
    out14 = '';
    for (let i = ar14.length - 1; i >= 0; i--) {
        out14 += ar14[i] + ' ';
    }
    document.querySelector('.out-14').innerHTML = out14;
}
t14();

function t15() {
    ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    out15 = '';
    for (let i = 0; i < ar15.length; i++) {
        if (ar15[i] > 0) {
            out15 += ar15[i] + ' ';
        }
    }
    document.querySelector('.out-15').innerHTML = out15;
}
t15();


function t16() {
    ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    ar16_odd = [];
    ar16_even = [];
    for (let i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 == 0) {
            ar16_even[ar16_even.length] = ar16[i] + ' ';
        }
        else {
            ar16_odd[ar16_odd.length] = ar16[i] + ' ';
        }
    }

    document.querySelector('.out-16-odd').innerHTML = ar16_odd;
    document.querySelector('.out-16-even').innerHTML = ar16_even;
}
t16();

function t17() {
    ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
    out17 = '';
    for (let i = 0; i < ar17.length; i++) {
        if (ar17[i] >= 3) {
            out17 += ar17[i] + ' ';
        }
    }
    document.querySelector('.out-17').innerHTML = out17;
}
t17();

ar18 = [15, 24, 13, 78, 21, 4, 45, 67];

function t18() {
    ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
    max = ar18[0];
    for (let i = 0; i < ar18.length; i++) {
        if (ar18[i] > max) {
            max = ar18[i];
        }
    }
    document.querySelector('.out-18').innerHTML = max;
}
t18();

function t19() {
    let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
    index = 0;
    min = ar19[0];
    for (let i = 0; i < ar19.length; i++) {
        if (ar19[i] < min) {
            index = i;
        }
    }
    document.querySelector('.out-19').innerHTML = index;
}
t19();



function t20() {
    let ar20 = [4, 5, 6, 7, 8, 9, 10];
    sum = 0;
    for (let i = 0; i < ar20.length; i++) {
        sum = sum + ar20[i];
    }
    document.querySelector('.out-20').innerHTML = sum;
}
t20();


