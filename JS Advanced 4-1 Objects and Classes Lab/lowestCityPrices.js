function lowestCityPrices(input) {
    let cityObjects = {};
    let copyReference = {};
    for (let i = 0; i < input.length; i++) {
        let [cityName, productName, price] = input[i].split(" | ");
        price = Number(price)
        if (!cityObjects.hasOwnProperty(productName)) {
            cityObjects[productName] = { price: price, cityName: cityName }
            copyReference[productName] = { price: price, cityName: cityName }
        } else {
            if (cityObjects[productName].cityName === cityName) {
                cityObjects[productName] = copyReference[productName]
            }
            if (cityObjects[productName].price > price) {
                cityObjects[productName].price = price
                cityObjects[productName].cityName = cityName
            }

        }
    }

    for (let i in cityObjects) {
        console.log(`${i} -> ${cityObjects[i].price} (${cityObjects[i].cityName})`)
    }
}

lowestCityPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

lowestCityPrices(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']);
