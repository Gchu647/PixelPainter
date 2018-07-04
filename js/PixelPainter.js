function PixelPainter(width, height) {
  // Anchor the pixelPaiter div
  let painter = document.getElementById("pixelPainter");

  //create a big grid and append it later
  let grid = document.createElement("div");
  grid.className = "bigGrid";

  //create a palatte div and append it later
  let palatte = document.createElement("div");
  palatte.className = "palatteBox";

  //create a div to hold the buttons
  let buttons = document.createElement("div");
  buttons.className = "buttons";

  //This variable selects the color
  let currentColor = "#20B2AA";

  //Keep tracks of mouse being clicked
  let isMouseDown = false;

  function createGrid(gridWidth, gridHeight) {    
    for (let i = 0; i < height; i++) {
      let row = document.createElement("div");
      row.className = "gridRow"; // Same variable and class name okay here
      grid.appendChild(row);
      
      for(let j = 0; j < width; j++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("mousedown", startPaint);
        cell.addEventListener("mouseover", paintOver);
        cell.addEventListener("mouseup", stopPaint);
        row.appendChild(cell);
      }

    }

    // Attach it to the end of the scope so it doesn't flash.
    painter.appendChild(grid);
  }

  function startPaint() {
    this.style.backgroundColor = currentColor;
    isMouseDown = true;
    // console.log(this);
  }

  function paintOver() {
    if(isMouseDown === true) {
      this.style.backgroundColor = currentColor;
    }
  }

  function stopPaint() {
    isMouseDown = false;
  }

  //Codes for our palatte
  let colorSwatch = ["#FFA07A", "#20B2AA", "#87CEFA", "#B0C4DE", "#FAFAD2", "#1E90FF", "#ADD8E6", "#00FA9A"];

  function creatPalatte() {
    let row = document.createElement("div");
    row.className = "palRow";
    palatte.appendChild(row);

    for(let i = 0; i < colorSwatch.length; i++) {
      let palColor = document.createElement("div");
      palColor.className = "palColor";
      palColor.style.backgroundColor = colorSwatch[i];
      palColor.addEventListener("click", setColor);
      row.appendChild(palColor);
    }

    painter.appendChild(palatte);
  }

  function setColor() {
    currentColor = this.style.backgroundColor;
    //console.log(currentColor);
  }

  //Erase and Clear Buttons
  function createButtons() {
    let eraseButton = document.createElement("div");
    eraseButton.className = "eraseButton";
    eraseButton.innerHTML = "erase";
    eraseButton.addEventListener("click", eraseCells);
    buttons.appendChild(eraseButton);

    let clearButton = document.createElement("div");
    clearButton.className = "clearButton";
    clearButton.innerHTML = "clear";
    buttons.appendChild(clearButton);

    painter.appendChild(buttons);
    console.log("button created!");
  }

  // This function erases cells when pressed
  function eraseCells() {
    let newCell = document.getElementsByClassName("cell");
    let cellColor = newCell[0];
    cellColor.style.backgroundColor = null; //Use null instead of white
    console.log("changed");
  }

  /* Erase one cell;
    function eraseCells() {
    let newCell = document.getElementsByClassName("cell");
    let cellColor = newCell[0];
    cellColor.style.backgroundColor = null; //Use null instead of white
    console.log("changed");
  } 
  */

  createGrid(width, height);
  creatPalatte();
  createButtons();
}

PixelPainter(15, 15);
