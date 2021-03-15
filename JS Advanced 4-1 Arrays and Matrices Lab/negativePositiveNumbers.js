function evenOddPosition(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {

        if (input[i] < 0) {
            arr.unshift(input[i]);
        }
        if (input[i] > 0 || input[i] == 0) {
            arr.push(input[i]);
        }
    }
    console.log(arr)
}