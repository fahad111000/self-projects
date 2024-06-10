
let body = document.getElementById("body");
let colorCode = document.getElementById('colorCode');
let button = document.getElementById('btn');

button.addEventListener('click', () => {
    
    // colors
    let colors = ["red", "green", "blue", "aqua", "orange"];
    
    // get random color
    let randomColor = Math.floor(Math.random() * colors.length);

    body.style.backgroundColor = colors[randomColor];
    colorCode.innerText = `color Code: ${colors[randomColor]}`;
    colorCode.style.color = '#fff';
});
