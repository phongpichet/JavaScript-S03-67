function canMove(piece, from, to) {
    const [fromCol, fromRow] = [from.charCodeAt(0), parseInt(from[1])];
    const [toCol, toRow] = [to.charCodeAt(0), parseInt(to[1])];
  
    switch (piece.toLowerCase()) {
      case "pawn":
        // Pawns move one square forward, or two squares forward from the second rank
        if (fromCol === toCol) {
          if (fromRow === 2 && toRow === 4) return true; // Two-square move
          return toRow - fromRow === 1; // One-square move
        }
        break;
  
      case "knight":
        // Knights move in an L-shape
        const dx = Math.abs(toCol - fromCol);
        const dy = Math.abs(toRow - fromRow);
        return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
  
      case "bishop":
        // Bishops move diagonally
        return Math.abs(toCol - fromCol) === Math.abs(toRow - fromRow);
  
      case "rook":
        // Rooks move in straight lines (same column or same row)
        return fromCol === toCol || fromRow === toRow;
  
      case "queen":
        // Queens move like both a rook and a bishop
        return (
          Math.abs(toCol - fromCol) === Math.abs(toRow - fromRow) || // Diagonal
          fromCol === toCol || fromRow === toRow // Straight line
        );
  
      case "king":
        // Kings move one square in any direction
        return (
          Math.abs(toCol - fromCol) <= 1 && Math.abs(toRow - fromRow) <= 1
        );
  
      default:
        return false;
    }
  
    return false;
  }
console.log(canMove("Rook", "A8", "H8")); // true
console.log(canMove("Bishop", "A7", "G1")); // true
console.log(canMove("Queen", "C4", "D6")); // false
