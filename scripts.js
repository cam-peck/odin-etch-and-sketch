let defaultSquares = 16;

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
const sliderText = document.querySelector('#slider-text')

const drawContainer = document.querySelector('.drawing-container');
const blackButton = document.querySelector('#black-btn')
const rainbowButton = document.querySelector('#rainbow-btn')
const chooseButton = document.querySelector('#colorpicker')
const eraserButton = document.querySelector('#eraser-btn')
const clearButton = document.querySelector('#clear-btn')



function getRandomColor () {
    let randomColorTag = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColorTag}`
}

function newGrid(newVal){
    // updates dimensions value and creates new grid
    document.getElementById("valBox").innerHTML=newVal;
    drawContainer.textContent = '' // reset drawing container to blank
    numberOfSquares = newVal
    play(numberOfSquares)
}

function play (dimensions) {
    // creates a grid with dimensions given as argument inside drawing-container // 
    // create rows
    for (let i = 0; i <= dimensions - 1; i++) {
        const drawColumn = document.createElement('div');
        drawColumn.classList.add('column');
        drawContainer.appendChild(drawColumn);
    }

    // create pixels
    const gridColumn = document.querySelectorAll('.column')
    gridColumn.forEach((e) => {
        for (let i = 0; i <= dimensions - 1; i++) {
            const drawRow = document.createElement('div');
            drawRow.classList.add('pixel');
            e.appendChild(drawRow);
        };
    });

    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach((pixel) => {
        // change color when hovered over
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'red';
        });
        // match size of input container
        pixel.style.height = `${550 / dimensions}px`;
        pixel.style.width = `${550 / dimensions}px`;
    });

    blackButton.addEventListener('click', () => {
        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = 'black';
            });
        });
    });
    
    rainbowButton.addEventListener('click', () => {
        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = getRandomColor();
            });
        });
    });
    
    chooseButton.addEventListener('change', watchColorPicker, true)
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
}

// creates initial grid
play(defaultSquares)