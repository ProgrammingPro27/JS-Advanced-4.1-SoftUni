function result() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error;
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }

    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
        get battery() {
            return this._battery;
        }
        set battery(arg) {
            if (arg instanceof Battery) {
                this._battery = arg;
            } else {
                throw new TypeError;
            }

        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;
        }
        set keyboard(arg) {
            if (arg instanceof Keyboard) {
                this._keyboard = arg;
            } else {
                throw new TypeError;
            }
        }

        get monitor() {
            return this._monitor;
        }
        set monitor(arg) {
            if (arg instanceof Monitor) {
                this._monitor = arg;
            } else {
                throw new TypeError;
            }

        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

//=============================================================================

function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3
        }
        classToExtend.prototype.isFast = function () {
            if (this.processorSpeed > (this.ram / 4)) {
                return true
            }
            return false
        }
        classToExtend.prototype.isRoomy = function () {
            if (this.hardDiskSpace > (Math.floor(this.ram * this.processorSpeed))) {
                return true
            }
            return false
        }
    }
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            let array = [this.manufacturer, this.keyboard.manufacturer, this.monitor.manufacturer]
            for (var i = 0; i < array.length - 1; i++) {
                if (array[i] !== array[i + 1]) {
                    return false;
                }
            }
            return true;

        }
        classToExtend.prototype.isClassy = function () {
            if (this.battery.expectedLife >= 3 && (this.color == "Silver" || this.color == "Black") && this.weight < 3) {
                return true
            }
            return false
        }
    }
    return {
        computerQualityMixin,
        styleMixin
    }
}

//=============================================================================

let mixins = createMixins();
let computerQualityMixin = mixins.computerQualityMixin;
let styleMixin = mixins.styleMixin;

computerQualityMixin(Desktop);
styleMixin(Desktop);
computerQualityMixin(Laptop);
styleMixin(Laptop);

let keyboard = new Keyboard('Logitech', 70);
let keyboard2 = new Keyboard('A-4', 70);
let monitor = new Monitor('Logitech', 28, 18);
let battery = new Battery('Energy', 3);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 2.99, "Silver", battery);
let laptop2 = new Laptop("Hewlett Packard", 2.4, 4, 12, 3.12, "Silver", battery);
let desktop = new Desktop("Logitech", 3.3, 8, 1, keyboard, monitor);
let desktop2 = new Desktop("Logitech", 1.3, 8, 10, keyboard2, monitor);

// console.log(desktop.isFullSet())//).to.be.true;
// console.log(desktop2.isFullSet())//).to.be.false;


console.log(laptop.isClassy())
console.log(laptop2.isClassy())