function t1() {
    localStorage.setItem('5', 11);
    localStorage.getItem('5');
}
document.querySelector('.b-1').onclick = t1;

function t2() {
    a2 = [7, 6, 5]
    localStorage.setItem('a2', JSON.stringify(a2));
    let arr = localStorage.getItem('a2');
    arr = JSON.parse(arr);
}
document.querySelector('.b-2').onclick = t2;

function t3() {
    let out = '';
    let a = localStorage.getItem('a2');
    a = JSON.parse(a);
    a.forEach(element => {
        out += `a2 ${element} <br>`;
    });
    document.querySelector('.out-3').innerHTML = out;
}
document.querySelector('.b-3').onclick = t3;

function t4() {
    a4 = { hello: 'world', hi: 'mahai' }
    localStorage.setItem('a4', JSON.stringify(a4));
    let arr = localStorage.getItem('a4');
    arr = JSON.parse(arr);
}
document.querySelector('.b-4').onclick = t4;

function t5() {
    let out = '';
    let a = localStorage.getItem('a4');
    a = JSON.parse(a);
    for (let key in a) {
        out += key + ': ' + a[key] + '<br>';
    }
    document.querySelector('.out-5').innerHTML = out;
}
document.querySelector('.b-5').onclick = t5;

function t6() {
    localStorage.clear();
}
document.querySelector('.b-6').onclick = t6;

a7 = [];
function t7() {
    let a = document.querySelector('.i-7').value;
    a7.push(a);
	localStorage.setItem('a7', JSON.stringify(a7));
	document.querySelector('.i-7').value = '';
}
document.querySelector('.b-7').onclick = t7;

function t8() {
    let a = localStorage.getItem('a7');
    a = JSON.parse(a);
    a.pop();
    localStorage.setItem('a7', a);
}
document.querySelector('.b-8').onclick = t8;


	