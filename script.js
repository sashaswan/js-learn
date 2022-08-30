let mySet = new Set();
mySet.add('h');
mySet.add('b');
mySet.add('o');
mySet.add('h');
console.log(mySet);

let s2 = new Set();
const f2 = () => {
    let i2 = document.querySelector('.i-2').value;
    s2.add(i2);
    console.log(s2);
}
document.querySelector('.b-2').onclick = f2;

let s3 = new Set(['one', 'two', 'four']);

const f3 = () => {
    let i3 = document.querySelector('.i-3').value;
    s3.delete(i3);
    console.log(s3);
}
document.querySelector('.b-3').onclick = f3;

let s4 = new Set(['a', 'b', 'c', 'z']);

const f4 = () => {
    let i4 = document.querySelector('.i-4');
    let out = '';
    if (s4.has(i4.value)) {
        out += true;
    }
    else {
        out += false;
    }
    document.querySelector('.out-4').innerHTML = out;
}

document.querySelector('.b-4').onclick = f4;

let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

const f5 = () => {
    let out = '';
    out += s5.size;
    document.querySelector('.out-5').innerHTML = out;
}
document.querySelector('.b-5').onclick = f5;

let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];

const f6 = () => {
    let s6 = new Set(a6);
    let out = '';
    for (let item of s6) {
        out += item + ' ';
    }
    document.querySelector('.out-6').innerHTML = out;
}
document.querySelector('.b-6').onclick = f6;


const f7 = () => {
    let i7 = document.querySelector('.i-7');
    let out = '';
    let arr = i7.value.split('');
    let set = new Set(arr);

    if (set.size >= 6 && arr.length == set.size) {
        out += true;
    }
    else {
        out += false;
    }
    document.querySelector('.out-7').innerHTML = out;
}
document.querySelector('.b-7').onclick = f7;

let s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let ar8 = [];

const f8 = () => {
    ar8 = [];
    for (let item of s8) {
        if (item > 5) {
            ar8.push(item);
        }
    }
    console.log(ar8);
}

document.querySelector('.b-8').onclick = f8;

const f9 = our_set => {
    let myArr = Array.from(our_set);
    return myArr;
}

document.querySelector('.b-9').onclick = () => {
    let s9 = new Set([9, 8, 7, 6, 5]);
    document.querySelector('.out-9').innerHTML = f9(s9);
}

const f10 = (out_set, elem) => {
    let out = '';
    for (let item of out_set) {
        out += item + ' ';
    }
    document.querySelector(elem).innerHTML = out;
}

document.querySelector('.b-10').onclick = () => {
    let a10 = new Set(['4', '5', '6']);
    f10(a10, '.out-10');
};

const f11 = () => {
    let s = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s);
}

document.querySelector('.b-11').onclick = f11;

let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f12 = () => {
    let arr = str12.split('');
    let s = new Set(arr)
    return s;
}

document.querySelector('.b-12').onclick = () => {
    console.log(f12());
}

let str13 = 'Hello ho';


const f13 = () => {
    let arr = Array.from(str13);
    let newSet = new Set(arr);
    let clearObj = {};
    for (let i of newSet) {
        let count = 0;
        for (let k in arr) {
            if (i === arr[k]) {
                count++;
            }
        }
        clearObj[i] = count;
    }
    return clearObj;
}

document.querySelector('.b-13').onclick = () => {
    console.log(f13());
}