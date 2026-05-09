class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const squares = [[],[],[],[],[],[],[],[],[]]
        const rows = [[],[],[],[],[],[],[],[],[]]
        const columns = [[],[],[],[],[],[],[],[],[]]

        for(let y = 0;y<board.length;y++) {
            for(let x = 0;x<board[y].length;x++) {
                const current = board[y][x]
                if(current===".") {
                    continue;
                }
                try {
                this.addCheckDuplicate(current,rows[y]);
                this.addCheckDuplicate(current,columns[x]);
                this.addCheckDuplicate(current,squares[this.getCurrentSquare(x,y)])
                } catch (e) {
                    return false;
                }

            }

        }
        return true;
    }

    getCurrentSquare(x,y) {
        if(x<3 && y<3) {
            return 0;
        }
        if(x<6 && y <3) {
            return 1;
        }
        if(y<3) {
            return 2;
        }
         if(x<3 && y<6) {
            return 3;
        }
        if(x<6 && y <6) {
            return 4;
        }
        if(y<6) {
            return 5;
        }
         if(x<3) {
            return 6;
        }
        if(x<6) {
            return 7;
        }
        return 8;
    }

    addCheckDuplicate(num, container) {
        if(container.includes(num)) {
            throw new Error("Duplicate")
        }
        container.push(num);
    }

}
