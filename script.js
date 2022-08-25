function f1() {
    let a1 = {
        "one": 15,
        "two": 16,
        "five": 20
    };
    document.querySelector('.out-1').innerHTML = a1.two;
    return a1.two;
}

document.querySelector('.b-1').onclick = f1;

function f2() {
    let a2 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi"
    };
    return a2.five;
}

document.querySelector('.b-2').onclick = () => {
    document.querySelector('.out-2').innerHTML = f2();
}

function f3() {
    let a3 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi",
        "test": 21,
        "odd": "hi",
        "mix": "mix"
    };
    return a3.five + ' ' + a3.odd;
}

document.querySelector('.b-3').onclick = () => {
    document.querySelector('.out-3').innerHTML = f3();
}

let a4 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};
function f4() {
    let out = '';
    for (let key in a4) {
        out += key + ' ' + a4[key] + '<br>';
    }
    return out;
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = f4();
}

function f5(arr, block) {
    let out = '';
    for (let key in arr) {
        out += `${key} : ${arr[key]} <br>`
    }
    document.querySelector(block).innerHTML = out;
}

document.querySelector('.b-5').onclick = () => {
    let a5 = {
        "one": 1,
        "two": 2
    }
    f5(a5, '.out-5');
}

// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. 
// Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6. 
// После этого, с помощью функции f5 выводите массив a6 в out-6.

let a6 = {
    "b": 17,
    "e": 22
};

function f6() {
    let i61 = document.querySelector('.i-61').value;
    let i62 = document.querySelector('.i-62').value;

    a6[i61] = i62;
    f5(a6, '.out-6');
    a6 = {};
}
document.querySelector('.b-6').onclick = f6;

let a7 = {
    "b": 17,
    "e": 22
};

function f7() {
    let i7 = document.querySelector('.i-7').value;
    let out = '';
    if (a7[i7] !== undefined) {
        out = 1;
    }
    else {
        out = 0;
    }
    document.querySelector('.out-7').innerHTML = out;
}
document.querySelector('.b-7').onclick = f7;

let a8 = {
    "b": 17,
    "e": 22
};

function f8() {
    let i8 = document.querySelector('.i-8').value;
    let out = '';
    if (a8[i8] !== undefined) {
        out += a8[i8];
    }
    else {
        out += 0;
    }
    document.querySelector('.out-8').innerHTML = out;
}

document.querySelector('.b-8').onclick = f8;

let a9 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f9() {
    let i9 = document.querySelector('.i-9').value;
    let out = '';
    for (let key in a9) {
        if (a9[key] == i9) {
            out += key + ' ';
        }
    }
    document.querySelector('.out-9').innerHTML = out;
}

document.querySelector('.b-9').onclick = f9;

function f10(arr, val) {
    let out = false;
    for (let key in arr) {
        if (val == arr[key]) {
            out = true;
            break;
        }
    }
    return out;
}

document.querySelector('.b-10').onclick = () => {
    let a10 = {
        "k": 22,
        "d": 54,
        "m": 22,
    }
    document.querySelector('.out-10').innerHTML = f10(a10, 22);
};

let a11 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f11() {
    let i11 = document.querySelector('.i-11');
    delete a11[i11.value];
    f5(a11, '.out-11');
}

document.querySelector('.b-11').onclick = f11;

let a12 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f12() {
    let i12 = document.querySelector('.i-12').value;
    for (let key in a12) {
        if (a12[key] == i12) {
            delete a12[key];
        }
    }
    f5(a12, '.out-12');
}

document.querySelector('.b-12').onclick = f12;

let a13 = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

function f13() {
    let sum = 0;
    for (let key in a13) {
        if (typeof a13[key] === 'number') {
            sum = sum + a13[key];
        }
    }
    document.querySelector('.out-13').innerHTML = sum;
}

document.querySelector('.b-13').onclick = f13;

let a14 = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f14() {
    let out = '';
    for (let key in a13) {
        out += a14[key][0] + '<br>';
    }
    document.querySelector('.out-14').innerHTML = out;
}

document.querySelector('.b-14').onclick = f14;

let a15 = {
    'prim': [1, 2, 23],
    'one': [3, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f15() {
    let out = '';
    for (let key in a15) {
        for (let j in a15[key]) {
            out += a15[key][j] + ' ';
        }
        out += ' ';
    }
    document.querySelector('.out-15').innerHTML = out;
}
document.querySelector('.b-15').onclick = f15;

let a16 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f16() {
    let out = '';
    for (let key in a16) {
        out += a16[key].age + ' ';
    }
    document.querySelector('.out-16').innerHTML = out;
}

document.querySelector('.b-16').onclick = f16;

let a17 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f17() {
    let out = '';
    for (let key in a17) {
        if (a17[key].age > 30) {
            out += a17[key].name + ' ';
        }
    }
    document.querySelector('.out-17').innerHTML = out;
}
document.querySelector('.b-17').onclick = f17;

let a18 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f18() {
    let i18 = document.querySelector('.i-18').value;
    let p = a18[i18];
    let out = '';
    for (let key in a18) {
        if (p == a18[key]) {
            out += a18[key];
        }
    }
    document.querySelector('.out-18').innerHTML = out;
}
document.querySelector('.b-18').onclick = f18;

let a19 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f19() {
    let i19 = document.querySelector('.i-19').value;
    for (let key in a19) {
        if (a19[key].indexOf(i19) >= 0) {
            document.querySelector('.out-19').innerHTML = key;
        };
    };
}
document.querySelector('.b-19').onclick = f19;

let a20 = {
    "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
    "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
    "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
}

function f20() {
    let out = '';
    for (let key in a20) {
        for (let i = 0; i < a20[key].length; i++) {
            if (a20[key][i][1] == 2) {
                out += a20[key][i][0] + ' ';
            }
        }
    }
    document.querySelector('.out-20').innerHTML = out;
}

document.querySelector('.b-20').onclick = f20






