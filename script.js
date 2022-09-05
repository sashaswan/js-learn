function t1() {
    document.querySelector('.out-1').innerHTML += 'work';
}
document.querySelector('.div-1').addEventListener('touchstart', t1);

function t2(event) {
    document.querySelector('.out-2').innerHTML += event.touches.length;
}
document.querySelector('.div-2').addEventListener('touchstart', t2);

function t3(event) {
    if (this.classList.contains('div-3_1')) {
        document.querySelector('.out-3').innerHTML = 1;
    }
    else {
        document.querySelector('.out-3').innerHTML = 2;
    }
}
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);

function t4() {
    document.querySelector('.div-4').ontouchstart = show;
    function show() {
        document.querySelector('.out-4').innerHTML += 'touch';
    }
}
document.querySelector('.b-4').onclick = t4;

function t5() {
    document.querySelector('.div-4').ontouchstart = null;
    document.querySelector('.out-5').innerHTML = 'cleared';
}
document.querySelector('.b-5').onclick = t5;

function t6() {
    document.querySelector('.out-6').innerHTML += 'touchend';
}
document.querySelector('.div-4').ontouchend = t6;

function t7() {
    document.querySelector('.div-7').style.background = 'red';
}
document.querySelector('.div-7').addEventListener('touchstart', t7);

a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow']
function t8() {
    let random = Math.floor(Math.random() * a8.length);
    document.querySelector('.div-8').style.background = a8[random];
}
document.querySelector('.div-8').addEventListener('touchstart', t8);

function t9(event) {
    document.querySelector(".out-9").innerHTML = event.touches.length;
}
document.querySelector(".div-9").ontouchstart = t9;

let w = 75;
function t10() {
    document.querySelector('.div-10').style.width = w + 'px';
    document.querySelector('.div-10').style.height = w + 'px';
    w++;
}
document.querySelector('.div-10').addEventListener('touchmove', t10);

function t11(event) {
    document.querySelector(".out-11").innerHTML = `x ${event.layerX} <br> y ${event.layerY}`;
}
document.querySelector(".div-11").ontouchstart = t11;

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

let a12 = document.querySelector('.img-12-max');

const next = document.querySelector('.next');
next.ontouchend = nextFunction;

const prev = document.querySelector('.prev');
prev.ontouchend = prevFunction;

const reset = document.querySelector('.reset');
reset.ontouchend = resetFunction;

function nextFunction() {
    if (count == 5) {
        count = -1;
        images[5].classList.remove('active-img');
        images[0].classList.add('active-img');
        a12.src = images[0].src;
    }
    count++;
    images[count - 1].classList.remove('active-img');
    images[count].classList.add('active-img');
    a12.src = images[count].src;

}

function prevFunction() {
    if (count == 0) {
        count = 6;
        images[0].classList.remove('active-img');
        images[5].classList.add('active-img');
        a12.src = images[5].src;
    }
    count--;
    images[count + 1].classList.remove('active-img');
    images[count].classList.add('active-img');
    a12.src = images[count].src;
}

function resetFunction() {
    for (let item of images) {
        item.classList.remove('active-img');
        images[0].classList.add('active-img');
        a12.src = images[0].src;
    }
    count = 0;
}






