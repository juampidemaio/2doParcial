import { Directive, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appRecaptcha]', // Esta directiva se debe usar en el HTML
  standalone: false
})
export class RecaptchaDirective {
  @Output() captchaValido = new EventEmitter<boolean>();

  onCaptchaResolved(captchaResponse: string): void {
    if (captchaResponse) {
      this.captchaValido.emit(true); // Emitimos true si el captcha es válido
    } else {
      this.captchaValido.emit(false); // Emitimos false si no lo es
    }
  }
}


// @Input() imageSrc!: string;
// @Input() rows: number = 3;
// @Input() cols: number = 3;
// @Output() solved: EventEmitter<boolean> = new EventEmitter();

// puzzlePieces: { element: HTMLElement, row: number, col: number }[] = [];
// originalPositions: { row: number, col: number }[] = [];
// isSolved: boolean = false;

// constructor(private el: ElementRef, private renderer: Renderer2) {}

// ngOnInit() {
//   if (this.imageSrc) {
//     this.createPuzzle();
//   }
// }

// createPuzzle() {
//   const container = this.el.nativeElement;
//   const containerSize = 300;
//   const pieceSize = containerSize / this.rows;

//   for (let row = 0; row < this.rows; row++) {
//     for (let col = 0; col < this.cols; col++) {
//       const piece = this.createPiece(row, col, pieceSize);
//       this.puzzlePieces.push(piece);
//       this.originalPositions.push({ row, col });
//       this.renderer.appendChild(container, piece.element);
//     }
//   }

//   this.shufflePieces(pieceSize);
// }

// createPiece(row: number, col: number, size: number) {
//   const piece = this.renderer.createElement('div');
//   this.renderer.setStyle(piece, 'background-image', `url(${this.imageSrc})`);
//   this.renderer.setStyle(piece, 'background-position', `-${col * size}px -${row * size}px`);
//   this.renderer.setStyle(piece, 'width', `${size}px`);
//   this.renderer.setStyle(piece, 'height', `${size}px`);
//   this.renderer.setStyle(piece, 'position', 'absolute');
//   this.renderer.setStyle(piece, 'border', '1px solid #000');

//   piece.addEventListener('click', () => this.handlePieceClick(piece, row, col));

//   return { element: piece, row, col };
// }

// shufflePieces(pieceSize: number) {
//   const shuffled = this.shuffleArray(Array.from({ length: this.rows * this.cols }, (_, i) => i));
//   shuffled.forEach((pos, i) => {
//     const targetRow = Math.floor(pos / this.cols);
//     const targetCol = pos % this.cols;
//     const piece = this.puzzlePieces[i];
//     this.renderer.setStyle(piece.element, 'top', `${targetRow * pieceSize}px`);
//     this.renderer.setStyle(piece.element, 'left', `${targetCol * pieceSize}px`);
//     piece.row = targetRow;
//     piece.col = targetCol;
//   });
// }

// handlePieceClick(piece: any, row: number, col: number) {
//   const emptyPiece = this.puzzlePieces.find(p => p.row === this.rows - 1 && p.col === this.cols - 1);

//   if (emptyPiece && this.isAdjacent(piece, emptyPiece)) {
//     this.swapPieces(piece, emptyPiece);
//     this.checkIfSolved();
//   }
// }

// isAdjacent(piece: any, emptyPiece: any) {
//   const rowDiff = Math.abs(piece.row - emptyPiece.row);
//   const colDiff = Math.abs(piece.col - emptyPiece.col);
//   return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
// }

// swapPieces(piece: any, emptyPiece: any) {
//   [piece.row, emptyPiece.row] = [emptyPiece.row, piece.row];
//   [piece.col, emptyPiece.col] = [emptyPiece.col, piece.col];

//   const pieceTop = piece.row * 100;
//   const pieceLeft = piece.col * 100;
//   const emptyTop = emptyPiece.row * 100;
//   const emptyLeft = emptyPiece.col * 100;

//   this.renderer.setStyle(piece.element, 'top', `${emptyTop}px`);
//   this.renderer.setStyle(piece.element, 'left', `${emptyLeft}px`);
//   this.renderer.setStyle(emptyPiece.element, 'top', `${pieceTop}px`);
//   this.renderer.setStyle(emptyPiece.element, 'left', `${pieceLeft}px`);
// }

// checkIfSolved() {
//   this.isSolved = this.puzzlePieces.every((piece, i) => {
//     const original = this.originalPositions[i];
//     return piece.row === original.row && piece.col === original.col;
//   });
//   if (this.isSolved) {
//     this.solved.emit(true);
//   }
// }

// shuffleArray(array: number[]) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

