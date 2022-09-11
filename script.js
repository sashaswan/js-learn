let key = ['zhrgB3DxC8LoG7Gcilzg'];
let getData = [
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

document.querySelector('.b-1').onclick = () => {
    out = ['.out-1']
    data = [getData[0]];
    f1(out, data);
}


document.querySelector('.b-2').onclick = () => {
    out = ['.out-2']
    data = [getData[1]];
    f1(out, data);
}

document.querySelector('.b-3').onclick = () => {
    out = ['.out-3']
    data = [getData[2]];
    f1(out, data);
}

document.querySelector('.b-4').onclick = () => {
    out = ['.out-4']
    data = [getData[3]];
    f1(out, data);
}

document.querySelector('.b-5').onclick = () => {
    out = ['.out-5']
    data = [getData[4]];
    f1(out, data);
}

document.querySelector('.b-6').onclick = () => {
    out = ['.out-6']
    data = [getData[5]];
    f1(out, data);
}

document.querySelector('.b-7').onclick = () => {
    out = ['.out-7']
    data = [getData[6]];
    f2(out, data);
}

document.querySelector('.b-8').onclick = () => {
    out = ['.out-8']
    data = [getData[7]];
    f1(out, data);
}

document.querySelector('.b-9').onclick = () => {
    out = ['.out-9']
    data = [getData[8]];
    f1(out, data);
}

function f1() {
    fetch(`http://localhost:8888/index2.php?auth=${key}&${data}`)
        .then(data => data.text())
        .then(data => {
            document.querySelector(out).innerHTML = data;
        })
}
function f2() {
    fetch(`http://localhost:8888/index2.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `auth=${key}&${data}`,
    })
        .then(response => response.text())
        .then(response => {
            document.querySelector(out).innerHTML = response;
            if (response.indexOf('https') > -1) {
                document.querySelector(out).innerHTML = `<img src="${response}" style="width:50px;">`
            }
        })
}