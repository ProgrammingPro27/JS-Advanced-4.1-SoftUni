function solution() {
    let stringToModify = "";
    return {
        append(string) {
            return stringToModify += string;
        },
        removeStart(n) {
           let modifiedString = stringToModify.substr(0, n);
            return stringToModify =stringToModify.replace(modifiedString,"");
        },
        removeEnd(n) {
            let modifiedString = stringToModify.substring(0, stringToModify.length-n);
            return stringToModify =  modifiedString
        },
        print() {
            console.log(stringToModify)
        }
    }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print()