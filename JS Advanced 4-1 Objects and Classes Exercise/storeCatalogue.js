function storeCatalogue(items) {
    let catalogue = {};
    for (let i in items) {
        let format = items[i].split(" : ");
        let productName = format[0];
        let price = format[1];
        if (!catalogue.hasOwnProperty(productName[0])) {
            catalogue[productName[0]] = [{ productName, price }]
        } else {
            catalogue[productName[0]].push({ productName, price })

        }

    }

    for (let i in catalogue) {
        catalogue[i].sort((a, b) => { return a.productName.localeCompare(b.productName) })
    }
    let secondSort = Object.entries(catalogue).sort((a, b) => { return a[0].localeCompare(b[0]) })
    for (let i in secondSort) {
        console.log(secondSort[i][0])
        for (let j of secondSort[i][1]) {
            console.log(`${j.productName}: ${j.price}`)
        }

    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)