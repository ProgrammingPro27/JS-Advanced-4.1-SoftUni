function carMaker(carObject) {
    let storage = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 },
        "hatchback": { type: "hatchback", color: null },
        "coupe": { type: "coupe", color: null },
    };
    let clientOrder = {};
    clientOrder.model = carObject.model
    if (carObject.power <= 90) {
        clientOrder.engine = storage["Small engine"];
    } else if (carObject.power > 90 && carObject.power <= 120) {
        clientOrder.engine = storage["Normal engine"];
    } else if (carObject.power > 120) {
        clientOrder.engine = storage["Monster engine"];
    }

    clientOrder.carriage = storage[carObject.carriage];
    clientOrder.carriage.color = carObject.color;

    if (carObject.wheelsize % 2 === 0) {
        carObject.wheelsize -= 1;
    }
    let wheels = carObject.wheelsize;
    clientOrder.wheels = [wheels, wheels, wheels, wheels];

    return clientOrder;
}
carMaker({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
});