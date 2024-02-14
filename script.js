const input = document.getElementById('input');
const sketchBoard = document.querySelector('.sketchboard');

// buttons
const strokeButton = document.querySelector('button#stroke');
const resetButton = document.querySelector('button#reset');

let boxes = null;

const sbHeight = 600;
const sbWidth = 600;

function clearBoard() {
    while (sketchBoard.lastChild) {
        sketchBoard.removeChild(sketchBoard.lastChild);
    }
}

strokeButton.addEventListener('click', () => {
    let stroke = input.value;

    if (stroke < 0 || stroke > 100) {
        alert("Invalid input")
        return;
    }


    clearBoard();

    const side = sbHeight / stroke -2; // +1 due to the border thickness;

    for (let i = 0; i < stroke; i++) {
        const row = document.createElement('div');
        row.setAttribute('id', 'inner-row');
        for (let j = 0; j < stroke; j++) {
            const div = document.createElement('div');
            div.setAttribute('id', 'inner-box');
            div.style.height = `${side}px`;
            div.style.width = `${side}px`;
            row.appendChild(div);
        }
        sketchBoard.appendChild(row);
    }

    const boxes = document.querySelectorAll('div#inner-box');

    boxes.forEach((elem) => {
        elem.addEventListener('mouseover', () => {
            let color = `rgb(${getRandInt(256)}, ${getRandInt(256)}, ${getRandInt(256)})`;
            elem.style.backgroundColor = color;
        });
    });
    
})

resetButton.addEventListener('click', () => {
    clearBoard();
})

function getRandInt(n) {
    return Math.floor(Math.random() * n);
  }








