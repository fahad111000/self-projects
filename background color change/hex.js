
let body = document.getElementById("body");
let colorCode = document.getElementById('colorCode');
let button = document.getElementById('btn');
button.addEventListener('click', () => {

    // combination of hexical color code 
    let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    // start with hash symboll which is important for hexical
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * colors.length);

        // Storing a hexical code in hexColor
        hexColor += colors[randomNumber];
    }

    body.style.backgroundColor = hexColor;
    colorCode.innerText = `Color Code ${hexColor}`;
    colorCode.style.color = '#fff';
});

