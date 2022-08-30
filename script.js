let a1 = [5, 7, 9, 11, 13, 15];

function f1() {
    let out = '';
    for (let i = 0; i < a1.length; i++) {
        out += a1[i] + ' ';
    }
    document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.b-1').addEventListener('click', f1);

let a2 = [5, 7, 9, 11, 13, 15];

function f2() {
    let out = '';
    for (let i = 0; i < a2.length; i++) {
        out += i + ' ' + a2[i] + ' ';
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').addEventListener('click', f2);

function f3() {
    let div = document.getElementsByClassName('out-3');
    for (let i = 0; i < div.length; i++) {
        div[i].innerHTML = 3;
    }
}
document.querySelector('.b-3').addEventListener('click', f3);

function f4() {
    let div = document.querySelectorAll('.out-4');
    for (let item of div) {
        item.innerHTML += 4;
    }
}
document.querySelector('.b-4').addEventListener('click', f4);

let a5 = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];

function f5() {
    let out = '';
    for (let item of a5) {
        if (item > 7) {
            out += item + ' ';
        }
    }
    document.querySelector('.out-5').innerHTML = out;
}
document.querySelector('.b-5').addEventListener('click', f5);

let a6 = [[1, 2], [3, 4], [5, 6]];

function f6() {
    let arr = [a6];
    let out = '';
    for (let item of arr) {
        out += item + ' ';
    }
    document.querySelector('.out-6').innerHTML = out;
}
document.querySelector('.b-6').addEventListener('click', f6);

let a7 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];

function f7() {
    let newObj = {};
    for (let item of a7) {
        newObj[item.id] = item.name
    }
    a7 = newObj;
    return a7;
}
document.querySelector('.b-7').addEventListener('click', () => {
    console.log(f7());
});

let a8 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];
function f8() {
    let arr = [];
    for (let item of a8) {
        id = item.id
        if (typeof id == 'number') {
            arr.push(id)
        }
    }
    a8 = arr;
    return a8;
}

document.querySelector('.b-8').addEventListener('click', () => {
    console.log(f8());
});

let a9 = [[4, 3, 2], [2, 5], [0, 0, 0, 0, 0]];

function f9() {
    maxStr = a9[0].length
    for (let i = 0; i < a9.length; i++) {
        if (a9[i].length > maxStr) {
            maxStr = a9[i].length
            return a9[i].length - 1
        }
    }
}
document.querySelector('.b-9').addEventListener('click', () => {
    document.querySelector('.out-9').innerHTML = f9();
});

let a10 = [4, 6, 9, 'Hello'];
function f10() {
    let arr = {};
    for (let key in a10) {
        arr[key] = a10;
        return arr;
    }
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});

let a11 = {
    one: 11,
    two: 7,
    three: 13,
    four: 0
}

function f11() {
    let out = '';
    for (let key in a11) {
        if (a11[key] > 10) {
            out += a11[key] + ' ';
        }
    }
    document.querySelector('.out-11').innerHTML = out;
}

document.querySelector('.b-11').addEventListener('click', f11);

let a12 = [4, 5, 6, 7];

function f12() {
    let out = '';
    for (let item of a12) {
        out += item + ' ';
    }
    document.querySelector('.out-12').innerHTML = out;
}

document.querySelector('.b-12').addEventListener('click', f12);

let a13 = 'testone';
function f13() {
    let out = '';
    for (let item of a13) {
        out += item.split() + ' ';
    }
    document.querySelector('.out-13').innerHTML = out;
}

document.querySelector('.b-13').addEventListener('click', f13);

let a14 = new Set([4,5,6]);

function f14() {
    let out = '';
    for (let item of a14) {
        out += item + ' ';
    }
    document.querySelector('.out-14').innerHTML = out;
}

document.querySelector('.b-14').addEventListener('click', f14);

function f15() {
    let div = document.querySelectorAll('.out-15');
    for (let item of div) {
        item.innerHTML = 15;
    }
}
document.querySelector('.b-15').addEventListener('click', f15);
