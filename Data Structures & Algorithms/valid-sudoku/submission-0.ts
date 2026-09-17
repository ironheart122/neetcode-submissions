class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board: string[][]): boolean {
    const size = 9;

    // Validate rows
    // O(n * n)
    // WAIT. Cant believe i didnt realize this but n is fixed at 9.
    for (let row = 0; row < size; row++) {
      const filtered = board[row].filter((c) => c !== ".");

      // dedupe filtered and check if both are not equal in length. IF not, return false.
      if (filtered.length !== new Set(filtered).size) {
        return false;
      }
    }

    // Validate columns
    for (let column = 0; column < size; column++) {
      const seen = new Set<string>();

      for (let row = 0; row < size; row++) {
        const cell = board[row][column];

        if (cell !== "." && seen.has(cell)) {
            return false;
        }

        seen.add(cell)
      }
    }

    // Validate 3 x 3 sub boxes
    // Loop through a row of 3 boxes (0,3, 6)
    for (let bigRow = 0; bigRow <= 6; bigRow += 3) {
        for (let bigCol = 0; bigCol <= 6; bigCol += 3) {
            // bigRow and bigCol are basically boundaries.
            // Pick how you want to scan. Column or row?
            // Scan row (hold row and vary column)
                    const seen = new Set<string>
            for (let row = bigRow; row <= bigRow + 2; row++) {
                for (let column = bigCol; column <= bigCol + 2; column++) {
                    
                    const cell = board[row][column]

                    if (cell === ".") continue;
                    
                    if (seen.has(cell)) {
                        return false;
                    }

                    seen.add(cell)
                }
            }
        }

    }

    return true;
  }
}
