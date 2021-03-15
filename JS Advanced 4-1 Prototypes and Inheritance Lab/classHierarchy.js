function result() {
    class Figure {
        constructor(units = "cm") {
            this.units = units;
        }
        changeUnits(measureUnit) {
            this.units = measureUnit
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units)
            this.radius = radius;
        }
        get area() {
            if (this.units == "mm") {
                return Math.PI * ((this.radius*10) ** 2)
            } else if (this.units == "m") {
                return Math.PI * ((this.radius/10) ** 2)
            }
            return Math.PI * (this.radius ** 2)
        }
        toString() {
            if (this.units == "mm") {
                `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius*10}`
            } else if (this.units == "m") {
                `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius/10}`
            }
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units)
            this.width = width;
            this.height = height;
        }
        get area() {
            if (this.units == "mm") {
                return this.width * 10 * this.height * 10
            } else if (this.units == "m") {
                return this.width / 10 * this.height / 10
            }
            return this.width * this.height
        }
        toString() {
            if (this.units == "mm") {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width*10}, height: ${this.height*10}`
            } else if (this.units == "m") {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width/10}, height: ${this.height/10}`
            }
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}
let classes = result();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 5