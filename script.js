document.querySelector('.b-1').onclick = () => {
    let one = document.querySelector('#one').value;
    console.log(one);
    document.querySelector('button').style.backgroundColor = one;
}

document.querySelector('#one').oninput = () => {
    let one = document.querySelector('#one').value;
    document.querySelector('.out').innerHTML = one;
}

document.querySelector('.b-2').onclick = () => {
    let two = document.querySelector('.i-2');
    if (two.checked) {
        console.log('pressed'); 
    }
    else {
        console.log('not pressed'); 
    }
}

document.querySelector('.b-3').onclick = (event) => {
    event.preventDefault();
    // let t1 = document.querySelector('#t-1').value;
    // console.log(t1);
    let form = document.querySelector('.forma');
    console.log(form);
    console.log(form.elements.t1.value);
    console.log(form.elements.i3.value);
}
// Task 1
document.querySelector('.b-4').onclick = () => {
    alert('task1');
}
// Task 2
document.querySelector('.b-5').onclick = () => {
    alert('task2');
}
// Task 3
document.querySelector('.p-3').onclick = () => {
    alert('task3');
}
// Task 4
document.querySelector('.b-6').onclick = () => {
    let i4 = document.querySelector('.i-4');
    if (i4.checked) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
// Task 5
document.querySelector('.b-7').onclick = () => {
    let i5 = document.querySelector('.i-5');
    let out5 = document.querySelector('.out-5');
    if (i5.checked) {
        out5.innerHTML = i5.value;
    }
    else {
        out5.innerHTML = i5.value = false;
    }
}
// Task 6
document.querySelector('.b-8').onclick = () => {
    let i6 = document.querySelector('.i-6').value;
    let out6 = document.querySelector('.out-6');
    out6.innerHTML = i6;
}
// Task 7
document.querySelector('.b-9').onclick = () => {
    let i7 = document.querySelector('.i-7').value.length;
    let out71 = document.querySelector('.out-71');
    let out72 = document.querySelector('.out-72');
    out71.innerHTML = i7;
    if (i7 >= 6) {
        out72.innerHTML = 1;
    }
    else {
        out72.innerHTML = 0;
    }
}
// Task 8
document.querySelector('.b-10').onclick = () => {
    let out8 = document.querySelector('.out-8');
    out8.innerHTML = `<input id="i81"> <button id="b81" onclick="f81()">go</button>`;
    document.querySelector('#b81').onclick = function f81() {
        let i81 = document.querySelector('#i81').value;
        let out81 = document.querySelector('.out-81');
        out81.innerHTML = i81;
    }
    
}
// Task 9
document.querySelector('.b-11').onclick = () => {
    let r9 = document.querySelector('.r-9');
    if (r9.checked) {
        console.log(r9.value);
    }
    else {
        console.log(0);
    }
}
// Task 10
document.querySelector('.b-12').onclick = () => {
    let i111 = document.querySelector('.i-111').value;
    document.querySelector('.out-10').style.backgroundColor = i111;
}
// Task 11
document.querySelector('.b-13').onclick = () => {
    let i112 = document.querySelector('.i-112').value;
    document.querySelector('.i-113').value = i112;
}
// Task 12
document.querySelector('.b-14').onclick = () => {
    let i12 = document.querySelector('.i-12').value;
    let out12 = document.querySelector('.out-12');
    out12.innerHTML = i12;
}
// Task 13
document.querySelector('.i-13').oninput = () => {
    let i13 = document.querySelector('.i-13').value;
    document.querySelector('.out-13').innerHTML = i13;
}

// Task 14
document.querySelector('.b-15').onclick = () => {
    let out14 = document.querySelector('.out-14');
    out14.innerHTML = document.querySelector('#t-14').value;
}
// Task 15
document.querySelector('.b-16').onclick = () => {

    let out15 = document.querySelector('.out-15');
    let i15 = document.querySelector('.i-15').value;
    let t15 = document.querySelector('#t-15').value = i15;
    out15.innerHTML = t15;
}
// Task 16
document.querySelector('.b-17').onclick = () => {
    let out16 = document.querySelector('.out-16');
    let s16 = document.querySelector('.s-16').value;
    out16.innerHTML = s16;
}
// Task 17
function f17() {
    let s17 = document.querySelector('.s-17').value;
    let out17 = document.querySelector('.out-17');
    out17.innerHTML = s17;
}
// Task 18
function f18() {
    document.querySelector('.i-18').value = document.querySelector('.s-18').value;
}
// Task 19
document.querySelector('.b-19').onclick = () => {
    let i191 = document.querySelector('.i-191').value;    
    let i192 = document.querySelector('.i-192').value; 
    let out19 = document.querySelector('.out-19'); 
    out19.innerHTML = i191 + ' ' + i192;
}
// Task 20
document.querySelector('.b-20').onclick = (event) => {
    let formek = document.querySelector('.f-20');
    event.preventDefault();
    let out20 = document.querySelector('.out-20');
    out20.innerHTML = formek.elements.i193.value + ' ' + formek.elements.i194.value;
}