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


console.log(laptop.isClassy())
console.log(laptop2.isClassy())