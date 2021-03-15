function carsCatalogueObject(input) {
    let carCatalogue = {};
    for (let i in input) {
        let carData = input[i].split(" | ");
        let carBrand = carData[0];
        let carModel = carData[1];
        let producedCarsNumber = Number(carData[2]);

        if (!carCatalogue.hasOwnProperty(carBrand)) {
            carCatalogue[carBrand] = { [carModel]: producedCarsNumber };

        } else {

            if (carCatalogue[carBrand].hasOwnProperty(carModel)) {
                carCatalogue[carBrand][carModel] += producedCarsNumber
            } else {
                Object.assign(carCatalogue[carBrand], { [carModel]: producedCarsNumber });
            }

        }

    }

    for (let i in carCatalogue) {
        console.log(i);
        for (let j in carCatalogue[i]) {
            console.log(`###${j} -> ${carCatalogue[i][j]}`)
        }

    }
}
carsCatalogueObject([`Mercedes-Benz | 50PS | 123`,
    `Mini | Clubman | 20000`,
    `Mini | Convertible | 1000`,
    `Mercedes-Benz | 60PS | 3000`,
    `Hyunday | Elantra GT | 20000`,
    `Mini | Countryman | 100`,
    `Mercedes-Benz | W210 | 100`,
    `Mini | Clubman | 1000`,
    `Mercedes-Benz | W163 | 200`]);