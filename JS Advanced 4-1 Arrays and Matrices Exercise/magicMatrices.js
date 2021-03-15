function magicMatrices(matrix) {
    function checkEqual(matrix) {
        let array = [];
        matrix.map(el => {
            let reduced = el.reduce((count, val) => {
                return count + val
            })
            array.push(reduced);
        })
        return array;
    }
    let first = checkEqual(matrix)
    let secondArray = [];
    matrix.forEach(element => {
        while (element.length !== 0) {
            let miniBox = [];
            for (let x = 0; x < matrix.length; x++) {
                miniBox.push(matrix[x].shift())
            }
            secondArray.push(miniBox)
        }
    });
    let second = checkEqual(secondArray)


    function isEqual(array) {
        return array.every((val, i, arr) => val === arr[0]);
    }
    if (isEqual(first) && isEqual(second)) {
        console.log(true)
    } else {
        console.log(false)
    }

}