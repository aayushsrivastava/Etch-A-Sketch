"use strict";

let mouseController = {
    'method': 'mouseover'
};

drawCanvas(3);

let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', resetCanvas);

let resizeButton = document.querySelector('#resize-btn');
resizeButton.addEventListener('click', resizeCanvas);

let radioButtons = document.querySelectorAll('input[name=mouse-control]');
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', (e) => {
        if (e.target.id === 'mouse-click') {
            mouseController['method'] = 'click';
        }
        else if (e.target.id === 'mouse-hover') {
            mouseController['method'] = 'mouseover';
        }
    });
});

function resizeCanvas(e) {
    let n = prompt('How many squares per side to make the new grid?');
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
        cell.addEventListener('click', paintCell);
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
    if (e.type !== mouseController['method']) return;
    if (mouseController['method'] === 'mouseover') {
        e.target.classList.add('drawn');
    }
    else if (mouseController['method'] === 'click') {
        e.target.classList.toggle('drawn');
    }
}