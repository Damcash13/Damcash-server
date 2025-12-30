export function computeBestMove(board, turn, difficulty="medium") {
  // IA simple mais réelle (à améliorer ensuite)
  // Pour l’instant : retourne toujours un coup valide si possible

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (board[r][c] === 1) {
        if (r + 1 < 8 && c + 1 < 8 && board[r+1][c+1] === 0) {
          return { from:[r,c], to:[r+1,c+1], captures:[] };
        }
      }
    }
  }

  return null;
}
