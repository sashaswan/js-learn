function t1() {
    let a = document.querySelector('.div-1').textContent;
    document.querySelector('.out-1').textContent = a;
    return a;
}
document.querySelector('.div-1').onclick = t1;

function t2(e) {
    let out = e.altKey;
    document.querySelector('.out-2').innerHTML = out;
}
document.querySelector('.div-2').onclick = t2;

let w3 = 75;

function t3() {
    let out = '';
    let div = document.querySelector('.div-3');
    out += div.style.width = w3 + 'px';
    w3 += 5;
    document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.div-3').onclick = t3;

function t4() {
    let a = document.querySelector('.div-4').textContent;
    document.querySelector('.out-4').textContent = a;
    return a;
}
document.querySelector('.div-4').ondblclick = t4;

function t5() {
    document.querySelectorAll('.div-4');
    this.classList.toggle('active');
}
document.querySelector('.div-5').ondblclick = t5;

function t6() {
    let ul = document.querySelector('.ul-6');
    ul.classList.toggle('hide');
}
document.querySelector('.div-6').ondblclick = t6;

function t7() {
    let div = document.querySelector('.div-7');
    div.classList.toggle('active');
}
document.querySelector('.div-7').oncontextmenu = t7;

function t8() {
    if (document.querySelector('.ch-8').checked) {
        return false;
    }
    else {
        return true;
    }
}
document.querySelector('.ch-8').onchange = () => {
    oncontextmenu = t8;
}

function t9() {
    document.querySelector('.div-9 img').setAttribute('src', 'img/2.png');
}
document.querySelector('.div-9').oncontextmenu = t9;

let m = document.querySelector('.div-10 img');

m.addEventListener('mouseenter', () => {
    let div10 = document.querySelector('.div-10 img');
    div10.src = 'img/2.png';
})


let n = document.querySelector('.div-11 img');
n.addEventListener('mouseenter', () => {
    let div11 = document.querySelector('.div-11 img');
    div11.src = 'img/2.png';
})
n.addEventListener('mouseleave', () => {
    let div11 = document.querySelector('.div-11 img');
    div11.src = 'img/1.png';
})

let n12 = document.querySelector('.div-12');
n12.addEventListener('mousedown', () => {
    n12.classList.toggle('active');
})

let n13 = document.querySelector('.div-13');
n13.addEventListener('mousedown', () => {
    n13.classList.toggle('active');
})

n13.addEventListener('mouseup', () => {
    n13.classList.toggle('active');
})

function t14() {
    let div = document.querySelector('.div-14');
    div.classList.toggle('active');
}
document.querySelector('.b-14').onclick = t14;


function t15() {
    let num = +document.querySelector('.div-15').textContent;
    num++;
    document.querySelector('.div-15').innerHTML = num;
}
document.querySelector('.div-15').onmousemove = t15;

let num = 75;
function t16() {
    let div = document.querySelector('.div-16');
    div.style.width = num + 'px';
    num++;
}
document.querySelector('.div-16').onmousemove = t16;

function t17On() {
    document.querySelector('.div-16').onmousemove = t16;
}
function t17Off() {
    document.querySelector('.div-16').onmousemove = false;
}
document.querySelector('.b-17_on').addEventListener("click", t17On);
document.querySelector('.b-17_off').addEventListener("click", t17Off);

function t18() {
    document.querySelector('.div-18').innerHTML = document.querySelector('.div-18').offsetWidth;
}
document.querySelector('.div-18').onmouseenter = t18;


function t19() {
    document.querySelector('.div-19').innerHTML = document.querySelector('.div-19').classList;
}
document.querySelector('.div-19').onmouseenter = t19;
let v = 1;
function t20() {
    v++; 
    document.querySelector('progress').value = v;
}
document.querySelector('progress').onmousemove = t20;

