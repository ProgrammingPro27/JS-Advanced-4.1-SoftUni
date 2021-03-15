function objectRectangleOrder(input) {
    let objectArray = input.map(([width, height]) => {
        let rectangleObject = {
            width, height,
            area() { return this.width * this.height },
            compareTo(other) {
                let result = other.area() - this.area();
                if (result == 0) {
                    return other.width - this.width
                }
                return result

            }
        }
        return rectangleObject;
    });
    return objectArray.sort((a, b) => { return a.compareTo(b) })
}
console.log(...objectRectangleOrder([[10, 5], [3, 20], [5, 12]]));