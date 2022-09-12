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

function f1() {
    let a = new Promise((resolve, reject) => {
        fetch(`http://localhost:8888/index2.php?auth=${key}&${data}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(data => resolve(data.text()))
    })

    let b = new Promise((resolve, reject) => {
        fetch(`http://localhost:8888/index2.php?auth=${key}&${dataP}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(data => resolve(data.text()))
    })
    Promise.all([a, b]).then(value => {
        console.log(value);
        document.querySelector(out).innerHTML = value[0];
        document.querySelector(outP).innerHTML = value[1];
        if (value[1].indexOf('https') > -1) {
            document.querySelector(outP).innerHTML = `<img src="${value[1]}" style="width:50px;">`
        }
    });
}

document.querySelector('.b-1').onclick = () => {
    out = ['.out-1']
    data = [getData[0]];

    outP = ['.out-1-1']
    dataP = [getData[1]];

    f1(out, data, outP, dataP);
}

document.querySelector('.b-2').onclick = () => {
    out = ['.out-2']
    data = [getData[2]];

    outP = ['.out-2-2']
    dataP = [getData[3]];


    f1(out, data, outP, dataP);
}

document.querySelector('.b-3').onclick = () => {
    out = ['.out-3']
    data = [getData[4]];

    outP = ['.out-3-3']
    dataP = [getData[5]];


    f1(out, data, outP, dataP);
}

document.querySelector('.b-4').onclick = () => {
    
    outP = ['.out-4-4']
    dataP = [getData[6]];

    out = ['.out-4']
    data = [getData[7]];


    f1(out, data, outP, dataP);
}

document.querySelector('.b-5').onclick = () => {
    out = ['.out-5']
    data = [getData[8]];

    outP = ['.out-5-5']
    dataP = [getData[8]];

    f1(out, data, outP, dataP);
}