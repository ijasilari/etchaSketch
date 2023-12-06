const gridContainer = document.querySelector('.gridContainer');
const sizeHeader = document.querySelector('#sizeHeader');
let divWidth = 30;
let rainbow = false;

//Adds draw effect on all divs
const setColor = () => {
    let R = 0;
    let B = 0;
    let G = 0;

    const divs = document.querySelectorAll('.gridDiv');
    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            if(rainbow){
                R = Math.floor(Math.random() * 256);
                B = Math.floor(Math.random() * 256);
                G = Math.floor(Math.random() * 256);
                div.style.backgroundColor = `rgb(${R}, ${G},${B})`;
            }else{
                div.style.backgroundColor = "black";
            }
            
        })
    })
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

    //calculating divs width(600px is grids width)
    divWidth = 600 / divsPerSide;

    //Creates divs inside grid
    for(let i = 0; i < (divsPerSide ** 2); i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.toggle('gridDiv');
        gridDiv.style.cssText = `width: ${divWidth}px; border-style: solid; border-width: 1px; box-sizing: border-box; border-color: #ededed;`;
        gridContainer.appendChild(gridDiv);
    }
    setColor();

    sizeHeader.textContent = `${divsPerSide} x ${divsPerSide}`
};


 function resizeGrid() {
    let gridSize = prompt("Enter number of squares per side (0-100)", "16");

    if (gridSize === null || gridSize === ""){
        return;
    } else {
        gridSize = parseInt(gridSize);
        if(isNaN(gridSize) || (gridSize < 1 || gridSize > 100) ){
            alert("The input can only be number from 1 to 100!");
        }else{
            //removes current divs from grid
            document.querySelectorAll('.gridDiv').forEach(e => e.remove());
            
            renderGrid(gridSize);
        }
    }
 };

 renderGrid(16);