function getDiagonalSum(matrix) {
    let box = [];
    box.push(diagonalSum(matrix))
    let secondDiagonal = matrix.map(x => { return x.reverse() });
    box.push(diagonalSum(secondDiagonal))
    function diagonalSum() {
        let counter = 0;
        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                if (y === x) {
                    counter += matrix[x][y];
                }
            }
        }
        return counter;
    }

    console.log(box.join(" "))
}