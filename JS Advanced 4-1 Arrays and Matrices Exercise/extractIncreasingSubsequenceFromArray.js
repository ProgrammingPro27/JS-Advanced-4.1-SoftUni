function nonDecreasingSubsequence(arr) {
    let array = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (Math.max(...array) <= arr[i]) {
            array.push(arr[i])
        }
    }
    console.log(array.join("\n"));
}