function solution(num) {
    let number = num;
    let add5 = (num) => { return number + num };
    return add5

}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));