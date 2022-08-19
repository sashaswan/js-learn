let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}

document.querySelector('.b-1').onclick = function () {
    out1 = document.querySelector('.out-1');
    out1.style.width = '200px';
    out1.style.height = '40px';
}

document.querySelector('.b-2').onclick = function () {
    out2 = document.querySelector('.out-2');
    out2.classList.add('bg-2');
}

document.querySelector('.b-3').onclick = function () {
    out3 = document.querySelector('.out-3');
    out3.classList.remove('bg-3');
}

document.querySelector('.b-4').onclick = function () {
    out4 = document.querySelector('.out-4');
    out4.classList.toggle('bg-4');
}

document.querySelector('.b-5').onclick = function () {
    console.log(document.querySelector(".out-5").classList.contains("bg-5"));
}

document.querySelector('.b-6').onclick = function () {
    let p = document.querySelectorAll('.p-6').length;
    document.querySelector('.out-6').innerHTML = p;
}

document.querySelector('.b-7').onclick = function () {
    let out7 = document.querySelectorAll('.out-7');
    for (let i = 0; i < out7.length; i++) {
        out7[i].classList.add('bg-7');
    }
}

document.querySelector('.b-8').onclick = function () {
    let out8 = document.querySelectorAll('.out-8');
    for (let i = 0; i < out8.length; i++) {
        out8[i].classList.toggle('bg-8');
    }
}


let out9 = document.querySelectorAll('.out-9');
for (let i = 0; i < out9.length; i++) {
    out9[i].onclick = function () {
        out9[i].classList.add('bg-9');
    }
}

let out10 = document.querySelectorAll('.out-10');
for (let i = 0; i < out10.length; i++) {
    out10[i].onclick = function () {
        out10[i].classList.toggle('bg-10');
    }
}

document.querySelector('.b-12').onclick = function () {
    let a = document.createElement('div');
    a.innerHTML += '12';
    a.classList.add('bg-12');
    document.querySelector('.out-12').appendChild(a);
    console.log(a);
}

document.querySelector('.b-13').onclick = function () {
    let div = document.createElement('div');
    let out13 = document.querySelector('.out-13');
    div.innerText = 'pushMe';
    div.classList.add('bg-13');
    out13.append(div);
    div.onclick = f13_1;
}
function f13_1() {
    document.querySelector('.out-13').innerHTML += this.innerHTML;
}

document.querySelector('.b-14').onclick = function () {
    let div = document.createElement('div');
    let out14 = document.querySelector('.out-14');
    div.innerText = '14';
    div.classList.add('bg-14');
    out14.prepend(div);
    div.onclick = f13_2;
}
function f13_2() {
    document.querySelector('.out-14').innerHTML += this.innerHTML;
}

document.querySelector('.b-15').onclick = function () {
    let div = document.createElement('div');
    let out15 = document.querySelector('.out-15');
    div.innerText = '15';
    div.classList.add('bg-15');
    out15.before(div);
    div.onclick = f13_3;
}
function f13_3() {
    document.querySelector('.out-15').innerHTML += this.innerHTML;
}

document.querySelector('.b-16').onclick = function () {
    let div = document.createElement('div');
    let out16 = document.querySelector('.out-16');
    div.innerText = '16';
    div.classList.add('bg-16');
    out16.after(div);
    div.onclick = f13_4;
}
function f13_4() {
    document.querySelector('.out-16').innerHTML += this.innerHTML;
}


document.querySelector('.b-17').onclick = function () {
    let div = document.createElement('div');
    let out17 = document.querySelector('.out-17');
    div.innerText = '17';
    div.classList.add('bg-17');
    out17.replaceWith(div);
    div.onclick = f13_5;
}
function f13_5() {
    document.querySelector('.out-16').innerHTML += this.innerHTML;
}

document.querySelector('.b-18').onclick = function () {
    let a = document.querySelector('.p-18').getAttribute('data');
    let out18 = document.querySelector('.out-18');
    out18.innerHTML += a;
}

document.querySelector('.b-19').onclick = function () {
    let a = document.querySelectorAll('.p-19');
    let out19 = document.querySelector('.out-19');
    for (let i = 0; i < a.length; i++) {
        out19.innerHTML += a[i].getAttribute('data');
    }
}

document.querySelector('.b-20').onclick = function () {
    let out20 = document.querySelector('.out-20');
    out20.setAttribute('title','go');
}







