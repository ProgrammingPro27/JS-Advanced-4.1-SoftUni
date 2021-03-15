function heroicInventory(input) {
    let heroStorage = [];
    for (let i in input) {
        let infoCast = input[i].split(" / ");
        let heroObject = {
            name: infoCast[0],
            level: Number(infoCast[1]),
        }

        heroObject.items = infoCast[2] ? infoCast[2].split(", ") : [];

        heroStorage.push(heroObject);
    }
    console.log(JSON.stringify((heroStorage)));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / '])