function t1() {
    let a = 22;
    try {
        let c = a + d;
    }
    catch {
        document.querySelector('.out-1').innerHTML += 1;
    }


}
document.querySelector('.b-1').onclick = t1;

function t2() {
    let a = 4;
    let b = 5;
    try {
        document.querySelector('.out-2222222').innerHTML = a * b;
    }
    catch (err) {
        console.log(err);
        document.querySelector('.out-2').innerHTML = a * b;
    }
}

document.querySelector('.b-2').onclick = t2;

function t3() {
    let a = 4;
    let b = 5;
    try {
        document.querySelector('.out-3').innerHTML = a * b;
    }
    catch (err) {
        let tag = document.createElement("div");
        tag.innerHTML = a + b;
        myDiv = document.getElementById("out-3");
        document.body.insertBefore(tag, myDiv);
    }
}
document.querySelector('.b-3').onclick = t3;

let a = [2, 3, 4];

function t4() {
    try {
        a.push(7);
    }
    catch (err) {
        a = 0;
        document.querySelector('.out-4').innerHTML = a;
    }
    document.querySelector('.out-4').innerHTML = a;
}

document.querySelector('.b-4').onclick = t4;


function t5() {
    let p = document.querySelectorAll('p');
    try {
        p.push('p');
    }
    catch(err) {
        a = 0
        document.querySelector('.out-5').innerHTML = a;
    }
    finally {
        document.querySelector('.out-5-1').innerHTML = 'finally';
    }
}

document.querySelector('.b-5').onclick = t5;