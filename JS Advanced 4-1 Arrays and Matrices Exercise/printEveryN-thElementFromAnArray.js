function printNthElement(array) {
    let elementN = Number(array.pop());
    for (let i = 0; i < array.length; i++) {
        if (i % elementN === 0) {
            console.log(array[i])
        }
    }

}