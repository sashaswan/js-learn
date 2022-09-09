let key = ['zhrgB3DxC8LoG7Gcilzg'];

( () => {
    fetch(`http://localhost:8888/index2.php?auth=${key}&action=1`).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.out-1').innerHTML = text;
        });
    });

    fetch(`http://localhost:8888/index2.php?auth=${key}&action=2&name=Alex`).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.out-2').innerHTML = text;
        });
    });

    fetch(`http://localhost:8888/index2.php?auth=${key}&action=4&num1=1&num2=100`).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.out-4').innerHTML = text;
        });
    });

    fetch(`http://localhost:8888/index2.php?auth=${key}&action=5`).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.out-5').innerHTML = text;
        });
    });

    fetch(`http://localhost:8888/index2.php?auth=${key}&action=6&num1=1&num2=10`).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.out-6').innerHTML = text;
        });
    });

    fetch(`http://localhost:8888/index2.php?auth=${key}&action=7`).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.out-7').innerHTML = `<img src="${text}" style="width:80px">`;
        });
    });

    fetch(`http://localhost:8888/index2.php?auth=${key}&action=8&year=2001`).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.out-8').innerHTML = text;
        });
    });

    fetch(`http://localhost:8888/index2.php?auth=${key}&action=9&m=1&d=1&y=1`).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.out-9').innerHTML = text;
        });
    });
    
} )();



