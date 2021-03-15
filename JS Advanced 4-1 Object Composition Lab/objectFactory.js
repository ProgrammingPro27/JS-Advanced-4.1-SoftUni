function factoryObject(input) {
    let objects = JSON.parse(input);
    let objectToPrint = {};

    for (let i of objects) {
        Object.assign(objectToPrint, i)
    }
    return objectToPrint;
}
factoryObject(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);