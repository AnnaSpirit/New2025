// ===== GAME STATE AND CONFIGURATION =====

// ===== COLOR PALETTE =====
// Array of colors to display in the palette

// const colors = [
//     '#ffffff',
//     '#ffff00',
//     '#ffa500',
//     '#ee82ee',
//     '#ffb6c1',
//     '#ff4500',
//     '#ff0000',
//     '#90ee90',
//     '#9acd32',
//     '#008000',
//     '#40e0d0',
//     '#00ffff',
//     '#54b8f7',
//     '#0000ff',
//     '#8b008b',
//     '#4b0082',
//     '#00008b',
//     '#d3d3d3',
//     '#808080',
//     '#000000',
// ]; //from model

//my colors
const colors = [
    '#ffffff',
    '#ffff66',
    '#ffea00',
    '#ffa500',
    '#ff7f00',
    '#ff4500',
    '#ff0000',
    '#ff4d6d',
    '#ff66cc',
    '#cc33ff',
    '#7b2cff',
    '#4b0082',
    '#0000ff',
    '#00aaff',
    '#00ffff',
    '#00cc99',
    '#00cc44',
    '#66cc33',
    '#99cc00',
    '#808080',
    '#000000',
];

// ===== GAME STATE =====
// Variable to store the currently selected color
let selectedColor = null;
// Variable to track if user is currently drawing (mouse held down)
let isDrawing = false;

// ===== INITIALIZATION =====
// Run when the page loads
function init() {
    // Create all color squares in the palette
    createColorPalette();

    // Create all drawing squares in the grid
    createDrawingGrid();

    // Add event listener to clear button
    document.getElementById('clearButton').addEventListener('click', clearAllSquares);

    // Add global mouse up event to stop drawing anywhere on the page
    document.addEventListener('mouseup', stopDrawing);

    // Prevent text selection while dragging
    document.getElementById('drawingGrid').addEventListener('selectstart', (e) => e.preventDefault());
}

// ===== CREATE COLOR PALETTE =====
// Function to generate all color palette squares
function createColorPalette() {
    // Get the color palette container
    const paletteContainer = document.getElementById('colorPalette');

    // Loop through each color
    colors.forEach((color) => {
        // Create a new div for each color square
        const colorSquare = document.createElement('div');

        // Add the color-square class for styling
        colorSquare.classList.add('color-square');

        // Set the background color
        colorSquare.style.backgroundColor = color;

        // Add click event to select this color
        colorSquare.addEventListener('click', () => selectColor(color, colorSquare));

        // Add the square to the container
        paletteContainer.appendChild(colorSquare);
    });
}

// ===== SELECT COLOR FUNCTION =====
// Called when user clicks a color in the palette
function selectColor(color, element) {
    // Store the selected color
    selectedColor = color;

    // Get all color squares
    const allColorSquares = document.querySelectorAll('.color-square');

    // Remove selected class from all squares
    allColorSquares.forEach((square) => {
        square.classList.remove('selected');
    });

    // Add selected class to the clicked square
    element.classList.add('selected');

    // Update the color name display with hex code
    document.getElementById('selectedColorName').textContent = color;

    // Update the color preview box
    document.getElementById('colorPreview').style.backgroundColor = color;
}

// ===== CREATE DRAWING GRID =====
// Function to generate all drawing squares
function createDrawingGrid() {
    // Get the drawing grid container
    const drawingGridContainer = document.getElementById('drawingGrid');

    // Create 900 squares (30x30 grid)
    for (let i = 0; i < 900; i++) {
        // Create a new div for each drawing square
        const drawingSquare = document.createElement('div');

        // Add the drawing-square class for styling
        drawingSquare.classList.add('drawing-square');

        // Mouse down event - start drawing
        drawingSquare.addEventListener('mousedown', startDrawing);

        // Mouse over event - draw while dragging
        drawingSquare.addEventListener('mouseover', draw);

        // Mouse enter event - also draw on enter while mouse button is held
        drawingSquare.addEventListener('mouseenter', draw);

        // Add the square to the grid
        drawingGridContainer.appendChild(drawingSquare);
    }
}

// ===== DRAWING EVENT HANDLERS =====
// Called when user presses mouse button on a square
function startDrawing(event) {
    // Prevent default behavior
    event.preventDefault();

    // Set drawing state to true
    isDrawing = true;

    // Color the square being clicked
    colorSquare(event.target);
}

// Called when mouse moves over a square or enters it while drawing
function draw(event) {
    // Only color if currently drawing (mouse button is held down)
    if (isDrawing) {
        // Prevent default behavior
        event.preventDefault();

        // Color the square under the mouse
        colorSquare(event.target);
    }
}

// Called when user releases mouse button
function stopDrawing(event) {
    // Set drawing state to false
    isDrawing = false;
}

// ===== COLOR SQUARE FUNCTION =====
// Function to color a single square
function colorSquare(square) {
    // Check if the element is actually a drawing square
    if (!square.classList.contains('drawing-square')) {
        return;
    }

    // Check if a color has been selected
    if (selectedColor !== null) {
        // Set the square's background to the selected color
        square.style.backgroundColor = selectedColor;
    }
}

// ===== CLEAR ALL SQUARES =====
// Function to reset all drawing squares to white
function clearAllSquares() {
    // Get all drawing squares
    const allDrawingSquares = document.querySelectorAll('.drawing-square');

    // Reset each square to white
    allDrawingSquares.forEach((square) => {
        square.style.backgroundColor = 'white';
    });
}

// ===== RUN ON PAGE LOAD =====
// Wait for DOM to load before running init
document.addEventListener('DOMContentLoaded', init);
