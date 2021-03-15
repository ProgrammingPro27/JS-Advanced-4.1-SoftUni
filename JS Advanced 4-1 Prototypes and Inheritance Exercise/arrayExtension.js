(function () {
    Array.prototype.last = function () {
        return this[this.length-1]
    }
    Array.prototype.skip = function (n) {
        return this.slice(n)
    }
    Array.prototype.take = function (n) {
        return this.slice(0,n)
    }
    Array.prototype.sum = function () {
        return this.reduce((accumulator, value) => accumulator + value)
    }
    Array.prototype.average = function () {
        return this.reduce((accumulator, value) => accumulator + value) / this.length
    }
}())

let testArray = [1, 2, 3];
console.log(testArray.last())
console.log(testArray.skip(1))
console.log(testArray.skip(1))
console.log(testArray.take(2))
console.log(testArray.take(2))
console.log(testArray.sum())
console.log(testArray.average())
// expect(testArray.skip(1)[0]).to.equal(2, 'Incorrect result of skip()');
// expect(testArray.skip(1)[1]).to.equal(3, 'Incorrect result of skip()');
// 
// expect(Array.prototype.hasOwnProperty('take')).to.equal(true, "Couldn't find take() function");
// expect(testArray.take(2)[0]).to.equal(1, 'Incorrect result of take()');
// expect(testArray.take(2)[1]).to.equal(2, 'Incorrect result of take()');
// 
// expect(Array.prototype.hasOwnProperty('sum')).to.equal(true, "Couldn't find sum() function");
// expect(testArray.sum()).to.equal(6, 'Incorrect sum');
// 
// expect(Array.prototype.hasOwnProperty('average')).to.equal(true, "Couldn't find average() function");
// expect(testArray.average()).to.equal(2, 'Incorrect average value');