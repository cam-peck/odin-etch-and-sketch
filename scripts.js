let numberOfSquares = 16;
let pixelHeight = `${550 / numberOfSquares}px`
let pixelWidth = `${550 / numberOfSquares}px`

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
const sliderText = document.querySelector('#slider-text')

const drawContainer = document.querySelector('.drawing-container');
const blackButton = document.querySelector('#black-btn')
const rainbowButton = document.querySelector('#rainbow-btn')
const chooseButton = document.querySelector('#colorpicker')
const eraserButton = document.querySelector('#eraser-btn')
const clearButton = document.querySelector('#clear-btn')

chooseButton.addEventListener('change', watchColorPicker, true)

function getRandomColor () {
    let randomColorTag = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColorTag}`
}

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

blackButton.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        // change color whne hovered over
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'black';
        });
    });
});

rainbowButton.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        // change color whne hovered over
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = getRandomColor();
        });
    });
});


function watchColorPicker (event) {
   let chosenColor = event.target.value
   pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = `${chosenColor}`;
        });
    });
};

eraserButton.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        // change color whne hovered over
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'white';
        });
    });
});

clearButton.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = 'white'
    });
});
