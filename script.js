const gridContainer = document.querySelector('.gridContainer');
const sizeHeader = document.querySelector('#sizeHeader');
let divWidth = 30;
let rainbow = false;
let gridSize = 16;

//painting on mousedown
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Adds draw effect on all divs
const setColor = (e) => {
    if (e.type === 'mouseover' && !mouseDown) return
            if(rainbow){
                const R = Math.floor(Math.random() * 256);
                const B = Math.floor(Math.random() * 256);
                const G = Math.floor(Math.random() * 256);
                e.target.style.backgroundColor = `rgb(${R}, ${G},${B})`;
            }else{
                e.target.style.backgroundColor = "black";
            }
            
}

const setRainbow = () => {
    rainbow = true;
    setColor();
}
const setBlack = () => {
    rainbow = false;
    setColor();
}

const renderGrid = (divsPerSide) => {
    document.querySelector('#sizeHeader').textContent = `${divsPerSide} x ${divsPerSide}`;
    //calculating divs width(600px is grids width)
    divWidth = 600 / divsPerSide;

    //Creates divs inside grid
    for(let i = 0; i < (divsPerSide ** 2); i++) {
        const gridDiv = document.createElement('div');
        gridDiv.setAttribute('draggable', false);
        gridDiv.classList.toggle('gridDiv');
        gridDiv.style.cssText = `width: ${divWidth}px; border-style: solid; border-width: 1px; box-sizing: border-box; border-color: #ededed;`;
        gridDiv.addEventListener('mouseover', setColor);
        gridDiv.addEventListener('mousedown', setColor);
        gridContainer.appendChild(gridDiv);
    }
    setColor();

    sizeHeader.textContent = `${divsPerSide} x ${divsPerSide}`
};

function clearAndRender() {
    document.querySelectorAll('.gridDiv').forEach(e => e.remove());
    renderGrid(gridSize);
}


 function resizeGrid() {
    gridSize = prompt("Enter number of squares per side (0-100)", "16");

    if (gridSize === null || gridSize === ""){
        return;
    } else {
        gridSize = parseInt(gridSize);
        if(isNaN(gridSize) || (gridSize < 1 || gridSize > 100) ){
            alert("The input can only be number from 1 to 100!");
        }else{
            clearAndRender();
        }
    }
 };

 renderGrid(gridSize);