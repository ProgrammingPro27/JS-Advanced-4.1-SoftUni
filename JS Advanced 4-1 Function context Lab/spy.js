function Spy(object, method) {
    let originalFunction = object[method];
    let count = {
        count: 0
    }
    object[method] = function () {
        count.count++
        return originalFunction.apply(this, arguments)
    }
    return count

}
let obj = {
    method: () => "invoked"
}

obj.method();
obj.method();
obj.method();
let spy = Spy(obj, "method");
console.log(spy) 