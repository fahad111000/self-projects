// let variable = 0;
// let counterVart = document.querySelector('p');
// let increaseBtn = document.querySelector('#increase');
// let decreaseBtn = document.querySelector('#decrease');
// let resetBtn = document.querySelector('#reset');


// increaseBtn.addEventListener('click', () => {
//     if (variable >= 0) {
//         counterVart.style.color = 'green';
//     }
//     variable++;
//     counterVart.innerText = variable;
// });

// decreaseBtn.addEventListener('click', () => {
//     if (variable <= 0) {
//         counterVart.style.color = 'red';

//     }
//     variable--;
//     counterVart.innerText = variable;
// });

// resetBtn.addEventListener('click', () => {
//     variable = 0;
//     if (variable == 0) {
//         counterVart.style.color = 'black';
//     }
//     counterVart.innerText = '0';
// });



// _____________________Advance code__________________________

let btns = document.querySelectorAll('.btn');
let counterVar = document.querySelector('#counterVar');
let counter = 0;


// ForEach to get all buttons(btns) in btn
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let checkingButton = e.currentTarget.classList;

        if (checkingButton.contains('increase')) {
            counter++;
        }

        else if (checkingButton.contains('decrease')) {
            counter--;
        }

        else {
            counter = 0;
        }
        counterVar.innerText = counter;
    });
});













