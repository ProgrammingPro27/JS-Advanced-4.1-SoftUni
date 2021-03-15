function solution() {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let manager = function (information) {
        let menu = {
            apple: { carbohydrate: 1, flavour: 2 },
            lemonade: { carbohydrate: 10, flavour: 20 },
            burger: { carbohydrate: 5, fat: 7, flavour: 3 },
            eggs: { protein: 5, fat: 1, flavour: 1 },
            turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
        }
        let informationProcess = information.split(" ");
        let command = informationProcess[0];
        let ingrediant = informationProcess[1];
        let quantity = Number(informationProcess[2]);
        let ingred = {};
        switch (command) {
            case "restock":
                storage[ingrediant] += quantity;
                return "Success";
            case "prepare":

                let neededAmountOfIngrediants = Object.values(menu[ingrediant]).length
                    for (let j in menu[ingrediant]) {
                        if (storage[j] >= menu[ingrediant][j] * quantity) {
                            ingred[j] = menu[ingrediant][j] * quantity

                        } else {
                            return`Error: not enough ${j} in stock`
                        }

                

                    }
                    if(Object.values(ingred).length === neededAmountOfIngrediants){
                        for (let j in ingred) {
                            storage[j] -= ingred[j]
                        }
                        return "Success"
                    }
                ; break;
            case "report":
                return Object.entries(storage).map(x => x.join("=")).join(" ");
                
        }
    }
    return manager
}
 let manager = solution();
console.log(manager('restock protein 100'))
console.log(manager('restock carbohydrate 100'))
console.log(manager('restock fat 100' ))
console.log(manager('restock flavour 100'))
console.log(manager('report'))
console.log(manager('prepare apple 2'))
console.log(manager('report'))
console.log(manager('prepare apple 1'))
console.log(manager('report'))