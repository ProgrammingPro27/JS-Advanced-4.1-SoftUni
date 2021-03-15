function cappyJuice(input) {
    let juices = {};
    let finalBottles = {};
    for (let i in input) {
        let juiceInformation = input[i].split(" => ");
        if (!juices.hasOwnProperty(juiceInformation[0])) {
            juices[juiceInformation[0]] = Number(juiceInformation[1])
        } else {
            juices[juiceInformation[0]] += Number(juiceInformation[1])
        }
        addQuantityBottles(juices)
    }

    function addQuantityBottles(juices) {
        let quantity = 0;
        let newObject = {}
        for (let i in juices) {
            while (juices[i] >= 1000) {
                quantity++
                newObject[i] = quantity

                juices[i] -= 1000;

            }
        }
        for (let i in newObject) {
            if (!finalBottles.hasOwnProperty(i)) {
                finalBottles[i] = newObject[i]
            } else {
                finalBottles[i] += newObject[i]
            }
        }

    }
    for (let i in finalBottles) {
        console.log(`${i} => ${finalBottles[i]}`)
    }

}
cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);