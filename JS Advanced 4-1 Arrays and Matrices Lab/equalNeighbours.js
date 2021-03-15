function equalNeighbours(matrix) {
    let counter = 0;
    let box = [];
    function checkMatrix(matrix) {
        let partCounter = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let firstEl = matrix[i][j]
                let secondEl = matrix[i][j + 1];
                if (firstEl === secondEl) {
                    partCounter++
                }
            }
        }
        counter += partCounter;
    }
    checkMatrix(matrix)
    matrix.forEach(element => {
        while (element.length !== 0) {
            let miniBox = [];
            for (let x = 0; x < matrix.length; x++) {
                miniBox.push(matrix[x].shift())
            }
            box.push(miniBox)
        }

    });
    checkMatrix(box)
    console.log(counter)
}