function townsPopulation(input) {
    let townsObject = {};

    for (let i = 0; i < input.length; i++) {

        let phase = input[i].split(" <-> ")
        let key = phase[0];
        let value = Number(phase[1]);
        if (!townsObject.hasOwnProperty(key)) {
            townsObject[key] = value
        } else {
            townsObject[key] += value
        }
    }
    for (let i in townsObject) {
        console.log(`${i} : ${townsObject[i]}`)
    }

}
townsPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);