document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");
  const newGridButton = document.querySelector("#new-grid-button");

  function createGrid(gridSize) {
    container.innerHTML = ''; // Clear the container

    const squareSize = 960 / gridSize; // Calculate the size of each square
    for (let i = 0; i < gridSize * gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.dataset.darkness = 0;
      square.addEventListener("mouseover", () => {
        let darkness = parseFloat(square.dataset.darkness);
        if (darkness < 1) {
          darkness += 0.1;
          square.dataset.darkness = darkness;

          // square.style.backgroundColor = `rgba(0, 0, 0, ${darkness})`;

          // implementing randomized rgb color
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);

          square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${darkness})`;

        }
      });
      container.appendChild(square);
    }
  }

  newGridButton.addEventListener("click", () => {
    let gridSize = prompt("Enter the number of squares per side for the new grid (maximum 100):");
    gridSize = parseInt(gridSize);

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
      alert("Invalid input! Please enter a number between 1 and 100.");
    } else {
      createGrid(gridSize);
    }
  });

  // Initialize the grid with a default size of 16x16
  createGrid(16);
});
