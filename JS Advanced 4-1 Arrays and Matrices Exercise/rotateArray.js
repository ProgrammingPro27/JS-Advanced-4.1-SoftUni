function rotateArray(array) {
    let rotations = Number(array[array.length - 1]);
    array.length = array.length - 1
    for (let j = 0; j < rotations % array.length; j++) {
        let lastEl = array[array.length - 1]
        array.unshift(lastEl);
        array.length = array.length - 1

    }
    console.log(array.join(" "));
}