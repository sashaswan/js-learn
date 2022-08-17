let out = document.querySelector('.out');
// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 10; k++) {
//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';
// }

// for (let i = 1; i < 10; i++) {
//     // out.innerHTML += '3*' + i + '=' + (i * 3) +'<br>';
//     for (let k = 1; k < 10; k++) {
//         out.innerHTML += `${i}*${k}=${k*i}<br>`; // interpolation
//     }
//     out.innerHTML += '<hr>';
// }

// Task 1
let out2 = document.querySelector('.out-2');
for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) {
        out2.innerHTML += '*';
    }
    out2.innerHTML += '_ ';
}
// Task 2
let out3 = document.querySelector('.out-3');
for (let i = 1; i < 4; i++) {
    out3.innerHTML += `<br> ${i} <br>`;
    for (let k = 1; k < 4; k++) {
        out3.innerHTML += `*_`;
    }
}
// Task 3
let out4 = document.querySelector('.out-4');
for (let i = 1; i < 4; i++) {
    out4.innerHTML += '<br>';
    for (let k = 1; k < 4; k++) {
        out4.innerHTML += `*_`;
    }
}
// Task 4
let out5 = document.querySelector('.out-5');
for (let i = 1; i < 4; i++) {
    out5.innerHTML += `${i}_`;
    for (let k = 1; k < 6; k++) {
        out5.innerHTML += `${k + ' '}`;
    }
}
// Task 5
let out6 = document.querySelector('.out-6');
for (let i = 1; i < 4; i++) {
    out6.innerHTML += '<br>';
    for (let k = 1; k < 4; k++) {
        out6.innerHTML += `${1}${0}`;
    }
}
// Task 6
let out7 = document.querySelector('.out-7');
for (let i = 1; i < 4; i++) {
    for (let k = 1; k < 7; k++) {
        if ((k % 2 == 0) && !(k % 3 == 0)) {
            out7.innerHTML += '0';
        } else if ((k % 2 == 1) && !(k % 3 == 0)) {
            out7.innerHTML += '1';
        } else {
            out7.innerHTML += 'x';
        }
    }
    out7.innerHTML += '<br>';
}
// Task 7
let out8 = document.querySelector('.out-8');
for (let i = 1; i < 5; i++) {
    out8.innerHTML += '<br>';
    for (let k = 0; k < i; k++) {
        out8.innerHTML += '*';
    }
}

// Task 8
let out9 = document.querySelector('.out-9');
for (let i = 5; i >= 0; i--) {
    out9.innerHTML += '<br>';
    for (let k = 0; k < i; k++) {
        out9.innerHTML += '*';
    }
}
// Task 9
let out10 = document.querySelector('.out-10');
for (let i = 1; i < 7; i++) {
    out10.innerHTML += '<br>';
    for (let k = 1; k < i; k++) {
        out10.innerHTML += `${k}` + ' ';
    }
}
// Task 10
let out11 = document.querySelector('.out-11');
for (let i = 0; i < 5; i++) {
    out11.innerHTML += '<br>';
    for (let k = 1; k <= 10; k++) {
        let s = i * 10;
        if (k < 10 && i == 0) {
            out11.innerHTML += `0${k} `;
        }
        else {
            out11.innerHTML += `${+s + k} `;
        }
    }
}
// Task 1
let out12 = document.querySelector('.out-12');
for (let i = 1; i < 10; i++) {
    for (let k = 1; k < 10; k++) {
        out12.innerHTML += `${i}*${k}=${k * i}<br>`;
    }
    out12.innerHTML += '<hr>';
}
// Task 2
let out13 = document.querySelector('.out-13');
for (let i = 1; i < 5; i++) {
    for (let k = 0; k < 5; k++) {
        out13.innerHTML += '*';
    }
    out13.innerHTML += '<br>';
}
// Task 3
let out14 = document.querySelector('.out-14');
for (let i = 5; i >= 0; i--) {
    for (let k = 0; k < i; k++) {
        out14.innerHTML += '*';
    }
    out14.innerHTML += '<br>';
}
// Task 4
let out15 = document.querySelector('.out-15');
let z = 2;
let b = 7;
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < b; k++) {
        if (k < z) {
            out15.innerHTML += '&nbsp';
        } else {
            out15.innerHTML += '*';
        }
    }
    b--;
    z--;
    out15.innerHTML += '<br>';
}
// Task 5
let out16 = document.querySelector('.out-16');
let colsLoop = 2;

for (let i = 1; i <= 3; i++) {

    for (let k = 1; k <= i; k++) {
        out16.innerHTML += '*';
    }
    out16.innerHTML += '<br>';
}

for (let i = 1; i >= 0; i--) {
    for (let k = 2; k >= 2 - i; k--) {
        out16.innerHTML += '*';
    }
    out16.innerHTML += '<br>';
}

// Task 6
let out17 = document.querySelector('.out-17');
let q = 5;
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 8; k++) {
        if ((k > q) && ((i == 0) || (i == 4))) {
            out17.innerHTML += `&nbsp;`;
        } else if (((k > 0) && (k < 7)) && ((i > 0) && (i < 4))) {
            out17.innerHTML += `&nbsp;&nbsp;`;
        } else {
            out17.innerHTML += `*`;
        }
    }
    out17.innerHTML += `<br>`;
}
// Task 7
let out18 = document.querySelector('.out-18');

for (let i = 5; i > 0; i--) {
    for (let k = i; k > 0; k--) {
        out18.innerHTML += k + ' ';
    }
    out18.innerHTML += '<br>';
}
