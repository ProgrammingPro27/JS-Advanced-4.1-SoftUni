function arrayMap(array, func) {
    let inputs = array.reduce((passedArray, video) => {
        passedArray.push(func(video));
        return passedArray;
    }, []);
    return inputs
}
let nums = [1, 2, 3, 4, 5];
console.log(arrayMap(nums, (item) => item * 2));
let letters = ["a", "b", "c"];
console.log(arrayMap(letters, (l) => l.toLocaleUpperCase())) 