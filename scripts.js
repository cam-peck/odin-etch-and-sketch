let numberOfSquares = 16;

const drawContainer = document.querySelector('.drawing-container');


// create rows
for (let i = 0; i <= numberOfSquares - 1; i++) {
    const drawColumn = document.createElement('div');
    drawColumn.classList.add('pixel');
    drawColumn.classList.add('column');
    drawContainer.appendChild(drawColumn);
}

const gridColumn = document.querySelectorAll('.column')
console.log(gridColumn)

//create columns
gridColumn.forEach((e) => {
    for (let i = 0; i <= numberOfSquares - 1; i++) {
        const drawRow = document.createElement('div');
        drawRow.classList.add('pixel')
        e.appendChild(drawRow)
    }
});
