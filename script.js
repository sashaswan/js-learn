// let a = [4, 5, 6];
// let b = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// //console.log(b);

// // for (let i = 0; i < b.length; i++) {
// //     //console.log(b[i]);
// //     let c = b[i];  // с - массив [1,2,3]
// //     for (let k = c.length - 1; k >= 0; k--) {
// //         console.log(c[k]);
// //     }
// // }

// let out = '';

// for (let i = 0; i < b.length; i++) {
//     for (let k = 0; k < b[i].length; k++) {
//         //console.log(b[i][k]);
//         out += b[i][k] + ' ';
//     }
//     out += '<br>';
// }

// document.querySelector('.out').innerHTML = out;

// out = '';
// for (let i = 0; i < b.length; i++) {
//     for (let k = 0; k < b[i].length; k++) {
//         //console.log(b[i][k]);
//         if (b[i][k] > 4) {
//             out += b[i][k] + ' ';
//         }
//     }
//     out += '<br>';
// }

// console.log(out);

// let d = [1, 0, 0, 0, 0];
// document.querySelector('.out2').innerHTML = d;
// let k = 0;
// document.querySelector('button').onclick = () => {
//     if (k + 1 < 5) {
//         d[k] = 0;
//         d[k + 1] = 1;
//         k++;
//     }
//     document.querySelector('.out2').innerHTML = d;
// }

function f1() {
    let a1 = [12, [45, 87], [55, 13]];
    document.querySelector('.out-1').innerHTML = a1[2][0];
    return a1[2][0];
}
document.querySelector('.b-1').onclick = f1;

function f2() {
    let a2 = [[12, 'hi'], [45, 87], [55, 13]];
    document.querySelector('.out-2').innerHTML = a2[0][1];
    return a2[0][1];
}
document.querySelector('.b-2').onclick = f2;

function f3() {
    let a3 = [[1, 2, 3], [3, 4, 5], [6, [7, 'my']]];
    document.querySelector('.out-3').innerHTML = a3[2][1][1];
    return a3[2][1][1];
}

document.querySelector('.b-3').onclick = f3;

function f4() {
    let a4 = [[1, 2, 3], 'go', [3, 4, 5], [6, [7, 'my']]];
    document.querySelector('.out-4').innerHTML = a4[1];
    return a4[1]
}

document.querySelector('.b-4').onclick = f4;

function f5() {
    let out = '';
    let a5 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
    for (let i = 0; i < a5.length; i++) {
        for (let k = 0; k < a5[i].length; k++) {
            if (a5[i][k] % 2 === 0) {
                out += a5[i][k] + ' ';
            }
        }
    }
    document.querySelector('.out-5').innerHTML = out;
}
document.querySelector('.b-5').onclick = f5;

function f6() {
    let out = '';
    let a6 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
    for (let i = 0; i < a6.length; i++) {
        for (let k = 0; k < a6[i].length; k++) {
            if (a6[i][k] % 2 !== 0) {
                out += a6[i][k] + ' ';
            }
        }
    }
    document.querySelector('.out-6').innerHTML = out;
}
document.querySelector('.b-6').onclick = f6;

function f7() {
    let out = '';
    let a7 = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];
    for (let i = 0; i < a7.length; i++) {
        for (let k = 0; k < a7[i].length; k++) {
            if (a7[i][k] % 2 === 0) {
                out += a7[i][k] + ' ';
            }
        }
    }
    document.querySelector('.out-7').innerHTML = out;
}
document.querySelector('.b-7').onclick = f7;

function f8() {
    let out = '';
    let a8 = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];
    for (let i = 0; i < a8.length; i++) {
        for (let k = 0; k < a8[i].length; k++) {
            if (a8[i][k] % 2 !== 0) {
                out += a8[i][k] + ' ';
            }
        }
    }
    document.querySelector('.out-8').innerHTML = out;
}
document.querySelector('.b-8').onclick = f8;

function f9() {
    let out = '';
    let a9 = [
        [-2, 7, -3],
        [3, 4, -7],
        [-5, 6, -8, 32],
        [21, -34, -43],
        [44, -56]
    ];
    for (let i = 0; i < a9.length; i++) {
        for (let k = 0; k < a9[i].length; k++) {
            if (a9[i][k] > 0) {
                out += a9[i][k] + ' ';
            }
        }
    }
    document.querySelector('.out-9').innerHTML = out;
}
document.querySelector('.b-9').onclick = f9;

function f10() {
    let out = '';
    let a10 = [
        [-2, '7', -3],
        [3, 4, -7],
        [-5, 6, -8, 32, 'a'],
        ['st', 21, -34, -43],
        [44, -56, 'task']
    ];
    for (let i = 0; i < a10.length; i++) {
        for (let k = 0; k < a10[i].length; k++) {
            if (typeof (a10[i][k]) === 'string') {
                out += a10[i][k] + ' ';
            }
        }
    }
    document.querySelector('.out-10').innerHTML = out;
}
document.querySelector('.b-10').onclick = f10;

function f11() {
    let out = '';
    let a11 = [
        [4, 5, 6],
        [7, 8],
        [9, 10, 11, 12, 13]
    ];
    for (let i = a11.length - 1; i >= 0; i--) {
        out += a11[i] + ' ';
    }
    document.querySelector('.out-11').innerHTML = out;
}
document.querySelector('.b-11').onclick = f11;

function f12() {
    let out = '';
    let a12 = [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
    ];
    for (let i = 0; i < a12.length; i++) {
        for (let k = 0; k < a12[i].length; k++) {
            if (a12[i][k] === 1) {
                out += a12[i][k] + ' ';
            }
        }
        document.querySelector('.out-12').innerHTML = out;
    }
}
document.querySelector('.b-12').onclick = f12;

let a13 = [];

function f13() {
    a13 = [];
    for (let i = 0; i < 8; i++) {
        a13.push([]);
        for (let k = 0; k < 8; k++) {
            if (i % 2 == 0) {
                if (k % 2 == 0) {
                    a13[i].push(0);
                }
                else {
                    a13[i].push(1);
                }
            }
            else {
                if (k % 2 != 0) {
                    a13[i].push(0);
                }
                else {
                    a13[i].push(1);
                }
            }
        }
    }
    console.log(a13);
}

document.querySelector('.b-13').onclick = f13;


function f14() {
    let a14 = [
        [],
        [1, 0],
        [1, 0, 0, 0],
        [3, 4, 5, 6, 7, 8],
        [1, 2]
    ];
    let out = '';
    for (let i = 0; i < a14.length; i++) {
        for (let k = 0; k < a14.length; k++) {
            out += a14[i].length + ' ';
            break
        }
        out += '<br>';
    }
    document.querySelector('.out-14').innerHTML = out;
}
document.querySelector('.b-14').onclick = f14;

let a15 = [
    [],
    [1, 0],
    [1, 0, 0, 0],
    [3, 4, 5, 6, 7, 8],
    [1, 2]
];

function f15() {
    let max = a15[0];
    for (let i = 0; i < a15.length; i++) {
        if (a15[i].length > max) {
            max = a15[i].length;
        }
    }
    document.querySelector('.out-15').innerHTML = max;
}

document.querySelector('.b-15').onclick = f15;

let a16 = [
    [0, 7, 0, 6],
    0,
    0,
    8
];

console.group('Task 16 ================');
console.log(a16[3] == 8);
console.log(a16[0][1] == 7);
console.log(a16[0][3] == 6);

console.groupEnd();

let a17 = [
    [0, 0, 6, 0],
    [0, 7, 0, 0],
    0,
    [0, 0, 8, 0]
];

console.group('Task 17 ================');
console.log(a17[3][2] == 8);
console.log(a17[1][1] == 7);
console.log(a17[0][2] == 6);

console.groupEnd();

let a18 = [
    3,
    0,
    [0, 12, 0, 0],
    0,
    [8, 0, 0, 0,]
];

console.group('Task 18 ================');
console.log(a18[0] == 3);
console.log(a18[4][0] == 8);
console.log(a18[2][1] == 12);

console.groupEnd();

let a19 = [
    [[0, 3], 0, 0],
    [[0, 0, 8], 0, 0],
    [0, [12, 0], 0]
];

console.group('Task 19 ================');
console.log(a19[0][0][1] == 3);
console.log(a19[1][0][2] == 8);
console.log(a19[2][1][0] == 12);

console.groupEnd();

let a20 = [
    0,
    [0,[0,[9]]],
    [0,0,18],
    [12]
];

console.group('Task 20 ================');
console.log(a20[1][1][1] == 9);
console.log(a20[2][2] == 18);
console.log(a20[3] == 12);

console.groupEnd();