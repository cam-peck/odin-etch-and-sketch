let numberOfSquares = 16;
let pixelHeight = `${600 / numberOfSquares}px`
let pixelWidth = `${600 / numberOfSquares}px`

const drawContainer = document.querySelector('.drawing-container');

// create rows
for (let i = 0; i <= numberOfSquares - 1; i++) {
    const drawColumn = document.createElement('div');
    drawColumn.classList.add('column');
    drawContainer.appendChild(drawColumn);
}

// grab all columns
const gridColumn = document.querySelectorAll('.column')
//create columns
gridColumn.forEach((e) => {
    for (let i = 0; i <= numberOfSquares - 1; i++) {
        const drawRow = document.createElement('div');
        drawRow.classList.add('pixel');
        e.appendChild(drawRow);
    };
});

const pixels = document.querySelectorAll('.pixel')
pixels.forEach((pixel) => {
    // change color whne hovered over
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'red';
    });
    // match size of input container
    pixel.style.height = pixelHeight;
    pixel.style.width = pixelWidth;
});

