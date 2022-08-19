for (let i = 0; i < 6; i++) {
    console.log(i);
}

let k = 0;
while (k < 5) {
    k++;
    console.log('k: ' + k);
}

let sum = 0;
let p = 0;
while (p <= 10) {
    sum = sum + p;
    p++;
}
console.log('sum = ' + sum);

p = 0;
let out = document.querySelector('.out');
let flag = 3;
let outStr = '';
while (p < 4) {
    let p1 = 0;
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += '&nbsp';
        }
        else {
            outStr += '*';
        }
        p1++;
    }
    flag--;
    outStr += '<br>';
    p++;
}
out.innerHTML = outStr;

// Task 1
document.querySelector('.b-2').onclick = function t1() {
    i = 1;
    let out2 = document.querySelector('.out-2');
    while (i < 51) {
        out2.innerHTML += '&nbsp' + i++;
    }
}
// Task 2
document.querySelector('.b-3').onclick = function t2() {
    i = 0;
    let out3 = document.querySelector('.out-3');
    while (i < 122) {
        out3.innerHTML += '&nbsp' + `${i += 2}`;
        out3.innerHTML += '<br>';
    }
}
// Task 3
document.querySelector('.b-4').onclick = function t3() {
    i = 25;
    let out4 = document.querySelector('.out-4');
    while (i > 6) {
        out4.innerHTML += '&nbsp' + i;
        i--;
    }
}
// Task 4
document.querySelector('.b-5').onclick = function t4() {
    i = 80;
    let out5 = document.querySelector('.out-5');
    while (i > 35) {
        out5.innerHTML += `${i -= 3}` + '_';
    }
}
// Task 5
document.querySelector('.b-6').onclick = function t5() {
    i = 1;
    let out5 = document.querySelector('.out-6');
    while (i < 18) {
        if (i % 2 == 0) {
            out5.innerHTML += i++ + '_** ';
        }
        else {
            out5.innerHTML += i++ + '_* ';
        }
    }
}

// Task 6
document.querySelector('.b-7').onclick = function t6() {
    i = 0;
    let out6 = document.querySelector('.out-7');
    while (i < 3) {
        out6.innerHTML += '******' + '<br>';
        i++;
    }
}
// Task 7

document.querySelector('.b-8').onclick = function t7() {
    i8 = document.querySelector('.i-8').value;
    out7 = document.querySelector('.out-8');
    while (i8 >= 0) {
        out7.innerHTML += i8--;
    }
}

// Task 8

document.querySelector('.b-9').onclick = function t8() {
    i81 = document.querySelector('.i-81').value;
    i82 = document.querySelector('.i-82').value;
    out8 = document.querySelector('.out-9');
    p = i81;
    i = i82;
    if (p < i) {
        while (i >= i81) {
            out8.innerHTML += p++ + ' ';
            i--;
        }
    }
}

// Task 10

document.querySelector('.b-10').onclick = function t10() {
    out10 = document.querySelector('.out-10');
    i = 1950;
    while (i < 2001) {
        if (i % 2 == 0) {
            out10.innerHTML += i + ' ';
        }
        i++;
    }
}

// Task 11

document.querySelector('.b-11').onclick = function t11() {
    div = document.querySelectorAll('.div-11');
    out11 = document.querySelector('.out-11');
    a = '';
    i = 0;
    while (i < div.length) {
        a += div[i].innerHTML + ' ';
        i++
    }
    out11.innerHTML = a;
}

// Task 12

document.querySelector('.b-12').onclick = function t12() {
    div = document.querySelectorAll('.div-12');
    out12 = document.querySelector('.out-12');
    i = 0;
    while (i < div.length) {
        div[i].style.background = 'orange';
        i++
    }
}
// Task 13
document.querySelector('.b-13').onclick = function t13() {
    i13 = document.querySelectorAll('.i-13');
    i = 0;
    while (i < i13.length) {
        i13[i].value = i + 1;
        i++;
    }
}

// Task 14
document.querySelector('.b-14').onclick = function t14() {
    i14 = document.querySelectorAll('.i-14');
    out14 = document.querySelector('.out-14');
    i = 0;
    newStr = '';
    while (i < i14.length) {
        if (i14[i].checked) {
            newStr += i14[i].value;
        }
        i++;
    }
    out14.innerHTML = newStr;
}

// Task 15
document.querySelector('.b-15').onclick = function t15() {
    out15 = document.querySelector('.out-15');
    i = 0;
    newStr = '';
    while (i < 11) {
        newStr += (10 - i + ' ' + `${i}` + ' ');
        i++;
    }
    out15.innerHTML = newStr;
}
