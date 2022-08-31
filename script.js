let a1_res = [],
    a2_res = [],
    a3_res = [],
    a4_res = [],
    b1_res = [],
    b6_res = [],
    b7_res = [],
    b8_res = [],
    b9_num = [],
    b9_string = [],
    b10_res = [];

let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

function f1() {
    a1_res = a1.map(elem => {
        return elem * 2;
    });
    return a1_res;
}
document.querySelector('.b-1').onclick = () => {
    console.log(f1());
}

let a2 = [2, 3, 4, 5, 10, 11, 12];

function t2() {
    a2_res = a2.map(elem => {
        return elem ** 2;
    });
    return a2_res;
}
document.querySelector('.b-2').onclick = () => {
    console.log(t2());
}

function t3() {
    let a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
    let out = a3.map(elem => {
        a3_res.push(+elem);
    });
    console.log(a3_res);
}
document.querySelector(".b-3").onclick = t3;

let a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
function t4() {
    a4_res = a4.filter(elem => {
        if (typeof elem == 'number') {
            return elem;
        }
    });
    return a4_res;
}
document.querySelector('.b-4').onclick = () => {
    console.log(t4());
}

let b1 = [3, 14, 15, 92];

function t5() {
    b1_res = b1.filter(elem => {
        if (elem % 2 == 0) {
            return elem;
        }
    });
    return b1_res;
}
document.querySelector('.b-5').onclick = () => {
    console.log(t5());
}

let b6 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t6() {
    let b6 = [3, 14, 15, 92, "6", "5", "hello", 32];
    b6.filter(elem => {
        if (typeof elem === "number") b6_res.push(elem);
    });
    return b6_res;
}
document.querySelector('.b-6').onclick = () => {
    console.log(t6());
}
let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32];
function t7() {
    b7.filter(elem => {
        if (typeof elem === "string" && elem.length > 3) b7_res.push(elem);
    });
    return b7_res;
}

document.querySelector('.b-7').onclick = () => {
    console.log(t7());
}

let b8 = [3, 14, 15, 92, "6", "5", "hello", 32];
function t8() {
    b8.filter(function (item, index) {
        if (item % 2 == 0) {
            if (item % 2 === 0) b8_res.push(index);
        }
    })
    return b8_res;
}

document.querySelector('.b-8').onclick = () => {
    console.log(t8());
}

let b9 = [3, "hello", 4, "world", 5, "hi"];
function t9() {
    b9.filter(function (item) {
        if (typeof item == 'number') {
            b9_num.push(item);
        }
        else if (typeof item == 'string') {
            b9_string.push(item);
        }
    })
    return [b9_num, b9_string];
}

document.querySelector('.b-9').onclick = () => {
    console.log(t9());
}

let b10 = [[1, 2, 3], [3, 4, 6], [4, 5, 7], [8, 9, 3]]
function t10() {
    b10.filter(function (elem) {
        for (item of elem) {
            if (item === 3) {
                b10_res.push(elem);
            }
        }
    })
    return b10_res;
}

document.querySelector('.b-10').onclick = () => {
    console.log(t10());
}