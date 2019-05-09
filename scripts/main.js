"use strict";

drawCanvas(3);

let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', resetCanvas);

let resizeButton = document.querySelector('#resize-btn');
resizeButton.addEventListener('click', resizeCanvas);

function resizeCanvas(e) {
    let n = prompt('State the number of sqares on one side?');
    destroyCanvas();
    drawCanvas(n);
}

function drawCanvas(n) {
    let container = document.querySelector('#container');
    container.style.gridTemplateColumns = 'auto '.repeat(n);
    container.style.gridTemplateRows = 'auto '.repeat(n);
    
    for (let i = 0; i < n * n; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', paintCell);
        container.appendChild(cell);
    }
}

function resetCanvas() {
    let container = document.querySelector('#container');
    container.childNodes.forEach(cell => {
        cell.classList.remove('drawn');
    });
}

function destroyCanvas() {
    let container = document.querySelector('#container');
    Array.from(container.childNodes).forEach(cell => {
        container.removeChild(cell);
    });
}

function paintCell(e) {
    e.target.classList.add('drawn');
}