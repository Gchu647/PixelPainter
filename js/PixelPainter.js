function PixelPainter(width, height) {

  function createGrid(gridWidth, gridHeight) {
    let painter = document.getElementById("pixelPainter");

    //creating the big grid and append it to PixelPainter div
    let grid = document.createElement("div");
    grid.className = "cellsParent";
    painter.appendChild(grid); // Attach it to the end so it doesn't flash
    
    
    for(let i = 0; i < 10; i++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      grid.appendChild(cell);
      // We threw a lot of the style DOM out to make it more clean
    }
    
    grid.children[0].style.backgroundColor="black";
  }

  createGrid(width, height);
}

PixelPainter(3, 3);
