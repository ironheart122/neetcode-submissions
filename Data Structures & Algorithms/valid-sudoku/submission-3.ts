class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // Set + 2D constraint book-keeping basically
        
        
        // 1st pass - scan every row for any dupe. If found, kill it and return false
        const MAX_LENGTH: number = board[0].length;

        for (let row = 0; row < MAX_LENGTH; row++) {
            const seen = new Set<string>()

            for (let col = 0; col < MAX_LENGTH; col++) {
                const cell = board[row][col];

                if (cell === '.') continue

                // One dupe found in a row of cells? the board is invalid
                if (seen.has(cell)) {
                    return false
                }

                seen.add(cell)
            }
        }

        // 2nd pass - scan every column for any dupe, if found, kill it and return false
        for (let col = 0; col < MAX_LENGTH; col++) {
            const seen = new Set<string>()

            for (let row = 0; row < MAX_LENGTH; row++) {
                const cell = board[row][col]

                if (cell === '.') continue

                if (seen.has(cell)) {
                    return false
                }

                seen.add(cell) // Oops, 2nd submission failed cos I forgot to add this
            }
        }

        // 3rd pass - scan every cell in a 3x3 subbox. There are 9 3x3 sub boxes
        // The top level loop iterates through each sub box
        // for each sub box, we start with the top left cell. We scan each 1x3 row. If we find any dupe, we return false
        /**
         * 0,0 | 0,3 | 0,6
         * 3,0 | 3,3 | 3,6
         * 6,0 | 6,3 | 6,6
         */
        for (let bigRow = 0; bigRow < 7; bigRow += 3) {
            for (let bigCol = 0; bigCol < 7; bigCol += 3) {
                // bigRow,bigCol is the starting location (top left) of the next sub box in this iteration
                // ARGHHHHH WHY AM I  BLANKING ON THIS??? WTF
                    const seen = new Set<string>() // First submission failed cos I had this inside the the bigRow loop of being here outside the loop

                for (let r = bigRow; r < bigRow + 3; r++) {

                    for (let c = bigCol; c < bigCol + 3; c++) {
                        const cell = board[r][c]

                        if (cell === '.') continue

                        if (seen.has(cell)) {
                            return false
                        }

                        seen.add(cell)
                    }

                }
            }
        }

        return true
    }
}
