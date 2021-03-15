function biggestElement(matrix) {
    let maxElements = [];
    matrix.forEach(element => {
        maxElements.push(Math.max(...element))
    });
    console.log(Math.max(...maxElements))
}
