function sumTowns(input) {
    let townsObject = {};
    while (input.length !== 0) {
        let key = input.shift();
        let value = Number(input.shift());
        if (!townsObject.hasOwnProperty(key)) {
            townsObject[key] = value
        } else {
            townsObject[key] += value
        }
    }


    console.log(JSON.stringify(townsObject))
}
sumTowns(["Sofia", "20", "Varna", "3", "sofia", "5", "varna", "4"]);