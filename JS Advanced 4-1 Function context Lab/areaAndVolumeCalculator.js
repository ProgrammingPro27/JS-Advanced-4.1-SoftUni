function area() {
    return this.x * this.y;
};
function vol() {
    return this.x * this.y * this.z;
};
function solve(area, vol, input) {
    let parsedInput = JSON.parse(input)
    let objects = [];
    for (let i = 0; i < parsedInput.length; i++) {
        parsedInput[i].x = Number(parsedInput[i].x);
        parsedInput[i].y = Number(parsedInput[i].y);
        parsedInput[i].z = Number(parsedInput[i].z);
        parsedInput[i].area = area;
        parsedInput[i].vol = vol;
        let answereObject = {
            area: Math.abs(parsedInput[i].area()),
            volume: Math.abs(parsedInput[i].vol())

        }
        objects.push(answereObject);
    };
    return objects;
}
solve(area, vol, `[
        {"x":"1","y":"2","z":"10"},
        {"x":"7","y":"7","z":"10"},
        {"x":"5","y":"2","z":"10"}
        ]`);