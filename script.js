

// let div = document.querySelectorAll('.one');

// for (let i = 0; i < div.length; i++) {
//     div[i].style.background = 'red';
//     div[i].onclick = two; 
// }

// function two() {
//     console.log('work!');
// }

// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);

// for (let i = 0; i < b.length; i++) {
//     b[i].style.border = '1px solid black';
// }

// document.querySelector('button').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     for (let i = 0; i < r.length; i++) {
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }
//     }
// }
// let out = '';
// for (let i = 0; i < 10; i++) {
//     if (i == 6) continue;
//     out += i + ' ';
//     // if (i == 6) break;
// }
// document.querySelector('#out').innerHTML = out;
// Task 1
document.querySelector('.b-1').onclick = () => {
    for (i = 1; i < 51; i++) {
        document.querySelector('.out-1').innerHTML += i + ' ';
    }
}
// Task 2
document.querySelector('.b-2').onclick = () => {
    for (i = 2; i < 51; i += 2) {
        document.querySelector('.out-2').innerHTML += i + ' ';
    }
}
// Task 3
document.querySelector('.b-3').onclick = () => {
    for (i = 25; i > 6; i--) {
        document.querySelector('.out-3').innerHTML += i + ' ';
    }
}
// Task 4
document.querySelector('.b-4').onclick = () => {
    for (i = 77; i > 34; i -= 3) {
        document.querySelector('.out-4').innerHTML += i + '_';
    }
}
// Task 5
document.querySelector('.b-5').onclick = () => {
    for (i = 1; i < 18; i++) {
        if (i % 2 == 1) {
            document.querySelector('.out-5').innerHTML += i + '_*';
        }
        else {
            document.querySelector('.out-5').innerHTML += i + '_**';
        }
    }
}
// Task 6
document.querySelector('.b-6').onclick = () => {
    let i6 = document.querySelector('.i-6');
    let count = 0;
    document.querySelector('.out-6').innerHTML = '';
    for (let i = 0; i < i6.value; i++) {
        document.querySelector('.out-6').innerHTML += '******' + '<br>';
        count += 1;
    }
    i6.value = count;
}
// Task 7
document.querySelector('.b-7').onclick = () => {
    let i7 = document.querySelector('.i-7');
    for (let i = i7.value; i >= 0; i--) {
        document.querySelector('.out-7').innerHTML += i + ' ';
    }
}
// Task 8

document.querySelector('.b-8').onclick = () => {
    let i81 = +document.querySelector('.i-81').value;
    let i82 = +document.querySelector('.i-82').value;
    c = i81;
    for (let i = i81; i <= i82; i++) {
        document.querySelector('.out-8').innerHTML += c++ + " ";;
    }
}

// Task 9

document.querySelector('.b-9').onclick = () => {
    let i91 = +document.querySelector('.i-91').value;
    let i92 = +document.querySelector('.i-92').value;
    let start = Math.min(i91, i92);
    let end = Math.max(i91, i92);

    for (let i = start; i <= end; i++) {
        document.querySelector('.out-9').innerHTML += i + ' ';;;
    }
}

//Task 10
document.querySelector('.b-10').onclick = () => {
    for (i = 1950; i < 2000; i++) {
        if (i % 2 == 0) {
            document.querySelector('.out-10').innerHTML += i;
        }
    }
}
// Task 11
let div = document.querySelectorAll('.div-11');
document.querySelector('.b-11').onclick = () => {
    let out11 = document.querySelector('.out-11');
    for (i = 0; i < div.length; i++) {
        out11.innerHTML += div[i].innerHTML + ' ';
    }
}
// Task 12
let div1 = document.querySelectorAll('.div-12');
document.querySelector('.b-12').onclick = () => {
    for (i = 0; i < div.length; i++) {
        div1[i].style.background = 'orange';
    }
}



// Task 13
let input_13 = document.querySelectorAll('.i-13');
function t13() {
    for (let i = 0; i <= input_13.length; i++){
        input_13[i].value = i + 1;   
    } 
}
document.querySelector('.b-14').onclick = t13;

// Task 14

document.querySelector('.b-13').onclick = () => {
    let inputs = document.querySelectorAll('.i-4');
    let out13 = '';

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            out13 = inputs[i].value;
        }
        document.querySelector('.out-13').innerHTML += out13;
    }
}

// Task 15
document.querySelector('.b-15').onclick = () => {
    let out15 = document.querySelector('.out-15');
    for (let i = 0; i < 11; i++) { 
        out15.innerHTML += 10-i + ' ' + i + ' '; 
    }
}