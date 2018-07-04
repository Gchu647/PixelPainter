function PixelPainter(width, height) {

  function createGrid(gridWidth, gridHeight) {
    // Anchor the pixelPaiter div
    let painter = document.getElementById("pixelPainter");

    //creating the big grid and append it to PixelPainter div
    let grid = document.createElement("div");
    grid.className = "bigGrid";
    
    for (let i = 0; i < height; i++) {
      let row = document.createElement("div");
      row.className = "row"; // Same variable and class name okay here
      grid.appendChild(row);
      
      for(let j = 0; j < width; j++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("click", colorGrid);
        cell.addEventListener("dragenter", colorGrid);
        row.appendChild(cell);
      }

    }

    // Attach it to the end of the scope so it doesn't flash.
    painter.appendChild(grid);
  }

  function colorGrid() {
    this.style.backgroundColor = "lightseagreen";
  }

  createGrid(width, height);
}

PixelPainter(20, 20);
