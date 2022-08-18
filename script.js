let a1 = 8;
let out1 = document.querySelector('.out-1');
function t1() {
    out1.innerHTML = a1;
}
document.querySelector('.b-1').onclick = t1;

let a2 = 8;
function f2() {
    return a2;
}
document.querySelector('.b-2').onclick = function () {
    document.querySelector('.out-2').textContent = f2();
}

function t3(a, b) {
    return a + b;
}
document.querySelector('.b-3-1').onclick = function () {
    document.querySelector('.out-3-1').textContent = t3(3, 4);
}
document.querySelector('.b-3-2').onclick = function () {
    document.querySelector('.out-3-2').textContent = t3(5, 6);
}

let n = 2022;
let y = 2001;
function t4(y, n) {
    return n-y;
}
document.querySelector('.b-4').onclick = function () {
    document.querySelector('.out-4').textContent = t4(y,n);
}

let yourName = 'Sasha';
function t5(yourName) {
    return 'Hello ' +yourName;
}
document.querySelector('.b-5').onclick = function () {
    document.querySelector('.out-5').textContent = t5(yourName);
}

let min = 4;
let max = 9;
function t6(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').textContent = t6(min,max);
}

function t7() {
    return `rgb(${Math.random()*256<<0}, ${Math.random()*256<<0}, ${Math.random()*256<<0})`;
}
document.querySelector('.b-7').onclick = function () {
    document.querySelector('.out-7').textContent = t7();
}
let s = '  Alex Swan  ';
function t8(s) {
    return s.trim();
}
document.querySelector('.b-8').onclick = function () {
    document.querySelector('.out-8').textContent = t8(s);
}

t = 10;
function t9(t) {
    if (t % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
document.querySelector('.b-9').onclick = function () {
    document.querySelector('.out-9').textContent = t9(t);
}

f = 3;
g = 5;
function t10(f,g) {
    if (f > g) {
        return f;
    }
    else if (f == g) {
        return f||g;
    }
    else {
        return g;
    }
}
document.querySelector('.b-10').onclick = function () {
    document.querySelector('.out-10').textContent = t10(f,g);
}