let a1_res = [],
    a2_res = [],
    a3_res = [],
    a4_res = [],
    a5_res = [],
    a6_res = [],
    a7_res = [],
    a8_res = [],
    a9_res = [],
    a10_res = [];

function t1() {
    let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
    a1.forEach(elem => {
        a1_res.push(elem * 2);
    });
    document.querySelector('.out-1').innerHTML = a1_res;
}

document.querySelector('.b-1').onclick = t1;

function t2() {
    let a2 = [2, 3, 4, 5, 10, 11, 12]
    a2.forEach(elem => {
        a2_res.push(elem / 2);
    });
    document.querySelector('.out-2').innerHTML = a2_res;
}

document.querySelector('.b-2').onclick = t2;

function t3() {
    a3 = [2, "hello", 3, "hi", 4, "Mazai"]
    a3.forEach(elem => {
        if (typeof elem == 'number') {
            console.log(elem);
        }
    });
    document.querySelector('.out-3').innerHTML = a3_res;
}
document.querySelector('.b-3').onclick = t3;

function t4() {
    let a4 = document.querySelectorAll('.task-4');
    a4.forEach(elem => {
        elem.innerHTML = elem.attributes.data.value;
    });
    document.querySelector('.out-4').innerHTML = a4_res;
}
document.querySelector('.b-4').onclick = t4;

function t5(elem) {
    a5_res.push(elem.srcElement.attributes.data.value);
    document.querySelector(".out-5").textContent = a5_res;
}

document.querySelectorAll('.task-5').forEach(elem => {
    elem.onclick = t5;
});


function t6() {
    let str6 = "helloworld";
    a6_res.push(Array.from(str6));
    console.log(a6_res);
}
document.querySelector('.b-6').onclick = t6;

function t7() {
    str7 = "hello world hi mazai";
    a7_res = str7.split(' '); 
    console.log(a7_res);
}
document.querySelector('.b-7').onclick = t7;


function t8() {
    a8 = [1,2,66,77,15];
    console.log(a8.join('-'));
}
document.querySelector('.b-8').onclick = t8;


function t9() {
    a9 = [['hi', 'mahai'], ['test', 'best']];
    let res = a9.map(function(item){
        return item.join('-');
    }) 
    a9_res = res.join('-');
    console.log(a9_res);
}
document.querySelector('.b-9').onclick = t9;

function t10() {
    let a10 = { name: 'ivan', age: 15, sex: 1, id: 45 };
    a10_res = '&' + new URLSearchParams(a10);
    document.querySelector('.out-10').textContent = a10_res;
}
document.querySelector('.b-10').onclick = t10;
