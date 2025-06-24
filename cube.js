class RubiksCube {
  constructor() {
    this.faces = {
      U: Array(9).fill("w"),
      D: Array(9).fill("y"),
      F: Array(9).fill("g"),
      B: Array(9).fill("b"),
      L: Array(9).fill("o"),
      R: Array(9).fill("r"),
    };

    this.moveHistory = [];
    };

  getCubeState() {
    return Object.values(this.faces).flat().join("");
  }

  print() {
    console.log("U:", this.faces.U.join(""));
    console.log("D:", this.faces.D.join(""));
    console.log("F:", this.faces.F.join(""));
    console.log("B:", this.faces.B.join(""));
    console.log("L:", this.faces.L.join(""));
    console.log("R:", this.faces.R.join(""));
  }

  rotateFace(face, clockwise = true) {
    const f = this.faces[face];
    // Rotate the 3x3 face itself
    this.faces[face] = clockwise
      ? [f[6], f[3], f[0], f[7], f[4], f[1], f[8], f[5], f[2]]
      : [f[2], f[5], f[8], f[1], f[4], f[7], f[0], f[3], f[6]];
  }

  rotateFront(clockwise = true) {
    this.rotateFace("F", clockwise);
    const { U, R, D, L } = this.faces;

    if (clockwise) {
      const temp = [U[6], U[7], U[8]];

      [U[6], U[7], U[8]] = [L[8], L[5], L[2]];
      [L[2], L[5], L[8]] = [D[2], D[1], D[0]];
      [D[0], D[1], D[2]] = [R[0], R[3], R[6]];
      [R[0], R[3], R[6]] = temp;
    } else {
      const temp = [U[6], U[7], U[8]];

      [U[6], U[7], U[8]] = [R[0], R[3], R[6]];
      [R[0], R[3], R[6]] = [D[0], D[1], D[2]];
      [D[0], D[1], D[2]] = [L[8], L[5], L[2]];
      [L[2], L[5], L[8]] = temp;
    }

    this.moveHistory.push({ move: "rotateFront", clockwise });
  }
  rotateBack(clockwise = true) {
    this.rotateFace("B", clockwise);
    const { U, L, D, R } = this.faces;

    if (clockwise) {
      const temp = [U[0], U[1], U[2]];

      [U[0], U[1], U[2]] = [R[2], R[5], R[8]];
      [R[2], R[5], R[8]] = [D[8], D[7], D[6]];
      [D[6], D[7], D[8]] = [L[6], L[3], L[0]];
      [L[0], L[3], L[6]] = temp;
    } else {
      const temp = [U[0], U[1], U[2]];

      [U[0], U[1], U[2]] = [L[0], L[3], L[6]];
      [L[0], L[3], L[6]] = [D[6], D[7], D[8]];
      [D[6], D[7], D[8]] = [R[8], R[5], R[2]];
      [R[2], R[5], R[8]] = temp;
    }

    this.moveHistory.push({ move: "rotateBack", clockwise });
  }
  rotateUp(clockwise = true) {
    this.rotateFace("U", clockwise);
    const { B, R, F, L } = this.faces;

    if (clockwise) {
      const temp = [B[0], B[1], B[2]];

      [B[0], B[1], B[2]] = [L[0], L[1], L[2]];
      [L[0], L[1], L[2]] = [F[0], F[1], F[2]];
      [F[0], F[1], F[2]] = [R[0], R[1], R[2]];
      [R[0], R[1], R[2]] = temp;
    } else {
      const temp = [B[0], B[1], B[2]];

      [B[0], B[1], B[2]] = [R[0], R[1], R[2]];
      [R[0], R[1], R[2]] = [F[0], F[1], F[2]];
      [F[0], F[1], F[2]] = [L[0], L[1], L[2]];
      [L[0], L[1], L[2]] = temp;
    }

    this.moveHistory.push({ move: "rotateUp", clockwise });
  }
  rotateDown(clockwise = true) {
    this.rotateFace("D", clockwise);
    const { F, R, B, L } = this.faces;

    if (clockwise) {
      const temp = [F[6], F[7], F[8]];

      [F[6], F[7], F[8]] = [L[6], L[7], L[8]];
      [L[6], L[7], L[8]] = [B[6], B[7], B[8]];
      [B[6], B[7], B[8]] = [R[6], R[7], R[8]];
      [R[6], R[7], R[8]] = temp;
    } else {
      const temp = [F[6], F[7], F[8]];

      [F[6], F[7], F[8]] = [R[6], R[7], R[8]];
      [R[6], R[7], R[8]] = [B[6], B[7], B[8]];
      [B[6], B[7], B[8]] = [L[6], L[7], L[8]];
      [L[6], L[7], L[8]] = temp;
    }

    this.moveHistory.push({ move: "rotateDown", clockwise });
  }
  rotateLeft(clockwise = true) {
    this.rotateFace("L", clockwise);
    const { U, F, D, B } = this.faces;

    if (clockwise) {
      const temp = [U[0], U[3], U[6]];

      [U[0], U[3], U[6]] = [B[8], B[5], B[2]];
      [B[2], B[5], B[8]] = [D[0], D[3], D[6]];
      [D[0], D[3], D[6]] = [F[0], F[3], F[6]];
      [F[0], F[3], F[6]] = temp;
    } else {
      const temp = [U[0], U[3], U[6]];

      [U[0], U[3], U[6]] = [F[0], F[3], F[6]];
      [F[0], F[3], F[6]] = [D[0], D[3], D[6]];
      [D[0], D[3], D[6]] = [B[8], B[5], B[2]];
      [B[2], B[5], B[8]] = temp;
    }

    this.moveHistory.push({ move: "rotateLeft", clockwise });
  }
  rotateRight(clockwise = true) {
    this.rotateFace("R", clockwise);
    const { U, B, D, F } = this.faces;

    if (clockwise) {
      const temp = [U[2], U[5], U[8]];

      [U[2], U[5], U[8]] = [F[2], F[5], F[8]];
      [F[2], F[5], F[8]] = [D[2], D[5], D[8]];
      [D[2], D[5], D[8]] = [B[6], B[3], B[0]];
      [B[0], B[3], B[6]] = temp;
    } else {
      const temp = [U[2], U[5], U[8]];

      [U[2], U[5], U[8]] = [B[0], B[3], B[6]];
      [B[0], B[3], B[6]] = [D[2], D[5], D[8]];
      [D[2], D[5], D[8]] = [F[2], F[5], F[8]];
      [F[2], F[5], F[8]] = temp;
    }

    this.moveHistory.push({ move: "rotateRight", clockwise });
  }
  
  scramble(moves = 20) {
    const methods = [
      "rotateFront",
      "rotateBack",
      "rotateUp",
      "rotateDown",
      "rotateLeft",
      "rotateRight",
    ];

    for (let i = 0; i < moves; i++) {
      const move = methods[Math.floor(Math.random() * methods.length)];
      const clockwise = Math.random() > 0.5;

      this[move](clockwise);
    }
  }
  solve() {
    for (let i = this.moveHistory.length - 1; i >= 0; i--) {
      const { move, clockwise } = this.moveHistory[i];
      this[move](!clockwise); // reverse the move
    }

    this.moveHistory = []; // clear history after solving
  }
}
