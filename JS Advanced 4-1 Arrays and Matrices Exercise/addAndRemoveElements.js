function addRemoveElement(array) {
    let box = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "add") {
            box.push(i + 1)
        }
        if (array[i] === "remove") {
            box.pop();
        }
    }
    if (box.length === 0) {
        console.log("Empty");
    } else {
        console.log(box.join("\n"))
    }

}