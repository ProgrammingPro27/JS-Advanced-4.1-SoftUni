function diagonalAttack(matrix) {
    let mappedFirst = matrix.map(x => { return x.split(" ") })
    let copyOfMatrixV2 = mappedFirst.map(x => { return x.slice(); })
    let mapped = matrix.map(x => { return x.split(" ") })
    let copyOfMatrix = mapped.map(x => { return x.slice(); })
    let reversedMatrix = copyOfMatrix.map(x => { return x.reverse() });

    function diagonalSum(matrix) {
        let box = [];
        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                if (x === y) {
                    let index = matrix[x].indexOf(matrix[x][y])
                    let copyOfElement = Number(matrix[x].slice(index, index + 1));
                    box.push(copyOfElement);
                } else {
                    matrix[x][y] = "X";
                }
            }
        }
        return box;
    }

    let matrixResult = diagonalSum(mapped);
    let reversedMatrixResult = diagonalSum(reversedMatrix);

    let reversedRealMatrix = reversedMatrix.map(x => { return x.reverse() });

    for (let x = 0; x < mapped.length; x++) {
        for (let y = 0; y < mapped[x].length; y++) {
            if (mapped[x][y] === "X") {
                mapped[x][y] = reversedRealMatrix[x][y]
            }
        }
    }

    function sumOfDiagonals(matrixResult, reversedMatrixResult) {
        let firstSum = matrixResult.reduce((count, el) => { return count + el })
        let secondSum = reversedMatrixResult.reduce((count, el) => { return count + el });
        if (firstSum === secondSum) {
            return [true, firstSum];
        } else {
            return [false]
        }

    }
    let decision = sumOfDiagonals(matrixResult, reversedMatrixResult)
    if (decision[0] === true) {
        for (let x = 0; x < mapped.length; x++) {
            for (let y = 0; y < mapped[x].length; y++) {
                if (mapped[x][y] === "X") {
                    mapped[x][y] = decision[1];
                }
            }
        }
       let done= mapped.map(x=>{return x.join(" ")})
        console.log(done.join("\n"))
        return
    } else {
        let done2 = copyOfMatrixV2.map(x=>{return x.join(" ")})
        console.log(done2.join("\n"))
        return
    }

}