// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = ['a', 'b', 'c', 'd', 'e', 'f'];

// console.log(a.length);
// console.log(a.push(10));
// console.log(a);

// b.push('j', 'e');
// console.log(b);

// b.pop();
// console.log(b);

// delete a[3];
// console.log(a);

// a.splice(3, 4, 'hi');
// console.log(a);

// Task1
let d1 = [33, 'best', 66, 'best'];

function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}
let i1 = document.querySelector('.i-1');
function f1() {
    d1.push(i1.value);
    showArr('.out-1', d1);
}
document.querySelector('.b-1').onclick = f1;

function f2() {
    showArr('.out-2', d1);
    d1.pop();
}
document.querySelector('.b-2').onclick = f2;

function f3() {
    showArr('.out-3', d1);
    d1.shift();
}
document.querySelector('.b-3').onclick = f3;

let i4 = document.querySelector('.i-4');
function f4() {
    d1.push(i4.value);
    showArr('.out-4', d1);
}
document.querySelector('.b-4').onclick = f4;

let i5 = document.querySelector('.i-5');
function f5() {
    d1.unshift(i5.value);
    showArr('.out-5', d1);
}
document.querySelector('.b-5').onclick = f5;

// Task 6
let d6 = ['test', 5, 12];

function f6() {
    let a = d6[d6.length - 1];
    a = 2
    d6[d6.length] = a;
    showArr('.out-6', d6);
    console.log(d6);
}
document.querySelector('.b-6').onclick = f6;

d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
function f7() {
    let arr = [];
    for (let i = 0; i < d7.length; i++) {
        arr[arr.length] = d7[i];
    }
    arr = d7.length--;
    showArr('.out-7', d7);
}
document.querySelector('.b-7').onclick = f7;

d8 = [2, '4', 12, 67, 'hello'];
let i8 = document.querySelector('.i-8');
function f8() {
    arr = [];
    for (let i = 0; i < d8.length; i++) {
        arr[0] = i8.value;
        arr[i + 1] = d8[i];
    }
    d8 = arr;
    showArr('.out-8', d8);

}
document.querySelector('.b-8').onclick = f8;

d9 = [100, 200, 300, 400, 700, 121];
function f9() {
    arr = [];
    for (let i = 0; i < d9.length - 1; i++) {
        arr[i] = d9[i + 1];
    }
    d9 = arr;
    showArr('.out-9', d9);

}
document.querySelector('.b-9').onclick = f9;

d10 = [3, 14, 15, 92, 6];
function f10() {
    arr = [];
    for (let i = 0; i < d10.length; i++) {
        arr[i] = d10[(d10.length - 1) - i];
    }
    d10 = arr;
    showArr('.out-10', d10);

}
document.querySelector('.b-10').onclick = f10;

// Task 11

d10 = [3, 14, 15, 92, 6];
function f10() {
    arr = [];
    for (let i = 0; i < d10.length; i++) {
        arr[i] = d10[(d10.length - 1) - i];
    }
    d10 = arr;
    showArr('.out-10', d10);

}
document.querySelector('.b-10').onclick = f10;

d11 = [2, 3, 4, 5, 6, 7];

function f11() {
    const i11 = document.querySelector('.i-11');
    const out11 = document.querySelector('.out-11');
    let parsed = parseInt(i11.value);
    for (let i = 0; i < d11.length; i++) {
        if (d11.indexOf(parsed) !== d11[i]) {
            out11.innerHTML = d11.indexOf(parsed);
        } else {
            out11.innerHTML = i;
        }
    };

}
document.querySelector('.b-11').onclick = f11;

let d12 = [6, 62, 60, 70, 1, 5, 6]

function f12() {
    let input = +document.querySelector('.i-12').value

    let res = -1
    for (let i = 0; i < d12.length; i++) {
        if (input === d12[i]) {
            res = i
            break
        }
    }
    document.querySelector('.out-12').innerHTML = res;
}
document.querySelector('.b-12').onclick = f12


d13 = [6, 0, 22, 1, 4, 76]
function f13() {
    arr = [];
    for (let i = 0; i < d13.length; i++) {
        arr[i] = d13[(d13.length - 1) - i];
    }
    d13 = arr;
    showArr('.out-13', d13);

}
document.querySelector('.b-13').onclick = f13;

d14 = [];
function f14() {
    const i14 = +document.querySelector('.i-14').value;
    for (let i = 0; i < i14; i++) {
        d14[d14.length] = 1;
    };
    showArr('.out-14', d14);
}
document.querySelector('.b-14').onclick = f14;

d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let i15 = document.querySelector('.i-15');
function f15() {
    let parsed = +i15.value;
    if (d15.indexOf(parsed) == -1) {
        d15.push(parsed);
    }
    showArr('.out-15', d15);
}
document.querySelector('.b-15').onclick = f15;

let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];
function f16() {
    const array4 = d161.concat(d162);
    d16.push(array4);
    showArr('.out-16', d16);
}
document.querySelector('.b-16').onclick = f16;


d171 = ['a', 'b', 'c', 'd'];
d172 = [1, 2, 3, 4, 5];
function f17() {
    d17 = [];
    for (let i = 0; i < d172.length; i++) {
        d171.push(d172[i]);
    }
    d17 = d171;
    showArr('.out-17', d17);
}
document.querySelector('.b-17').onclick = f17;

d18 = ['b', 'c', '45', 'e', 'z', 'y'];
let i18 = document.querySelector('.i-18');

function f18() {
    let out = document.querySelector('.out-18');
    out.innerHTML = d18.includes(i18.value);
    console.log(i18.value);
}
document.querySelector('.b-18').onclick = f18;

d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];
function f19() {
    d191 = ["Your"];
    for (i = 0; i < d19.length; i++) {
        if (d19.length > d191.length) {
            d191 = d19[i];
        }
    }
    showArr('.out-19', d191);
}
document.querySelector('.b-19').onclick = f19;

d20 = [4, 5, 6, 7, 8, 9, 10];
function f20() {
    let out = document.querySelector('.out-20');
    out.innerHTML += d20.join('');
}
document.querySelector('.b-20').onclick = f20;

