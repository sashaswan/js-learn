

let xhttp = new XMLHttpRequest();

let key = ['zhrgB3DxC8LoG7Gcilzg'];

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText)
    }
}

let action = [
    'action=1',
    'action=2&name=Alex',
    'action=3&num1=10&num2=10',
    'action=4&num1=1&num2=100',
    'action=5',
    'action=6&num1=1&num2=10',
    'action=7',
    'action=8&year=2001',
    'action=9&m=1&d=1&y=1',
]

function f1() {
    xhttp.open("GET", `http://localhost:8888/index2.php?auth=${key}&${action[0]}`, true);
    xhttp.send();
}
document.querySelector('.b-1').onclick = () => f1(out = ['.out-1']);

function f2() {
    xhttp.open("GET", `http://localhost:8888/index2.php?auth=${key}&${action[1]}`, true);
    xhttp.send();
}
document.querySelector('.b-2').onclick = () => f2(out = ['.out-2']);


function f3() {
    xhttp.open("GET", `http://localhost:8888/index2.php?auth=${key}&${action[2]}`, true);
    xhttp.send();
}
document.querySelector('.b-3').onclick = () => f3(out = ['.out-3']);

function f4() {
    xhttp.open("GET", `http://localhost:8888/index2.php?auth=${key}&${action[3]}`, true);
    xhttp.send();
}
document.querySelector('.b-4').onclick = () => f4(out = ['.out-4']);

function f5() {
    xhttp.open("GET", `http://localhost:8888/index2.php?auth=${key}&${action[4]}`, true);
    xhttp.send();
}
document.querySelector('.b-5').onclick = () => f5(out = ['.out-5']);

function f6() {
    xhttp.open("GET", `http://localhost:8888/index2.php?auth=${key}&${action[5]}`, true);
    xhttp.send();
}
document.querySelector('.b-6').onclick = () => f6(out = ['.out-6']);

function f7() {
    xhttp.open("GET", `http://localhost:8888/index2.php?auth=${key}&${action[6]}`, true);
    xhttp.send();
}
document.querySelector('.b-7').onclick = () => f7(out = ['.out-7']);

function f8() {
    xhttp.open("GET", `http://localhost:8888/index2.php?auth=${key}&${action[7]}`, true);
    xhttp.send();
}
document.querySelector('.b-8').onclick = () => f8(out = ['.out-8']);

function f9() {
    xhttp.open("GET", `http://localhost:8888/index2.php?auth=${key}&${action[8]}`, true);
    xhttp.send();
}
document.querySelector('.b-9').onclick = () => f9(out = ['.out-9']);

function f11() {
    xhttp.open("POST", `http://localhost:8888/index2.php?auth=${key}&${action[1]}`, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('auth=zhrgB3DxC8LoG7Gcilzg&action=1')
}
document.querySelector('.b-11').onclick = () => f11(out = ['.out-11']);

function f12() {
    xhttp.open("POST", `http://localhost:8888/index2.php?auth=${key}&${action[2]}`, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('auth=zhrgB3DxC8LoG7Gcilzg&action=1')
}
document.querySelector('.b-12').onclick = () => f12(out = ['.out-12']);

function myFunction(data) {
    document.querySelector(out).innerHTML = data;
    if (data.indexOf('https') > -1) {
        document.querySelector('.out-7').innerHTML = `<img src='${data}' style='width: 50px'>`;
    }
}
