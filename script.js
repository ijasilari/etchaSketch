const gridContainer = document.querySelector('.gridContainer');

for(let i = 0; i < 256; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.toggle('gridDiv');
    gridDiv.style.cssText = 'width: 30px; border-style: solid; border-width: 1px; box-sizing: border-box';
    gridContainer.appendChild(gridDiv);
}

const divs = document.querySelectorAll('.gridDiv');
divs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'black';
    })
})

 function resizeGrid() {
    let gridSize = prompt("Enter number of squares per side", "16");
    if (gridSize === null || gridSize === ""){
        return;
    } else {
        alert("yeet");
    }
 }