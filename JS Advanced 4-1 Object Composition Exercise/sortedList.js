function result() {
    let collection = [];

    return {
        add(el) {
            collection.push(el)
            collection = collection.sort((a, b) => { return a - b })
            return collection
        },
        remove(index) {
            if (index !== -1) {
                collection.splice(index, 1)

            }
            collection = collection.sort((a, b) => { return a - b })
            return collection
        },
        get(index) {
            if (index !== -1) {
                return collection[index]
            }
            collection = collection.sort((a, b) => { return a - b })
            return collection
        },
        get size() {
            return collection.length
        }
    }
}


var myList = result();
var failsafe = 'failsafe';

for (let i = 0; i < 10; i++) {
    myList.add(i);
}

try {
    failsafe = myList.get(-1) ? myList.get(-1) : 'failsafe';
} catch (e) { }
expect(myList.size).to.equal(10, "Unexpected behaviour with negative index.");
expect(failsafe).to.equal('failsafe', "Unexpected behaviour with negative index.");

try {
    failsafe = myList.get(11) ? myList.get(11) : 'failsafe';
} catch (e) { }
expect(myList.size).to.equal(10, "Unexpected behaviour with index outside of range.");
expect(failsafe).to.equal('failsafe', "Unexpected behaviour with index outside of range.");

var expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
try {
    myList.remove(-1);
} catch (e) { }

expect(myList.size).to.equal(10, "Unexpected behaviour with index outside of range.");
for (let i = 0; i < expectedArray.length; i++) {
    expect(myList.get(i)).to.equal(expectedArray[i], "Unexpected behaviour with index outside of range.");
}

try {
    myList.remove(11);
} catch (e) { }

expect(myList.size).to.equal(10, "Unexpected behaviour with index outside of range.");
for (let i = 0; i < expectedArray.length; i++) {
    expect(myList.get(i)).to.equal(expectedArray[i], "Unexpected behaviour with index outside of range.");
}