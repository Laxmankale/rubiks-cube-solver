let cube = new RubiksCube();

// --- Scramble Button ---
function scrambleCube() {
  cube.scramble(10); // Scramble with 10 random moves
  cube.print(); // Console output
  drawCube(); // Visual update
}

// --- Solve Button ---
function solveCube() {
  cube.solve(); // Reverse scramble
  cube.print(); // Console output
  drawCube(); // Visual update
}

// --- Map single-letter to actual color ---
function getColor(char) {
  const map = {
    w: "white",
    y: "yellow",
    r: "red",
    o: "orange",
    b: "blue",
    g: "green",
  };
  return map[char] || "gray";
}

// --- Draw cube on screen ---
function drawCube() {
  const display = document.getElementById("cubeDisplay");
  display.innerHTML = ""; // Clear old cells

  const { U, D, F, B, L, R } = cube.faces;

  const position = {
    U: [0, 3],
    L: [3, 0],
    F: [3, 3],
    R: [3, 6],
    B: [3, 9],
    D: [6, 3],
  };

  for (let face in cube.faces) {
    const [rowOffset, colOffset] = position[face];

    for (let i = 0; i < 9; i++) {
      const row = rowOffset + Math.floor(i / 3);
      const col = colOffset + (i % 3);

      const cell = document.createElement("div");
      cell.className = "cube-cell";
      cell.style.backgroundColor = getColor(cube.faces[face][i]);
      cell.style.gridRow = row + 1;
      cell.style.gridColumn = col + 1;

      display.appendChild(cell);
    }
  }
}

// --- On page load, draw solved cube ---
window.onload = () => {
  drawCube();
  cube.print();
};
