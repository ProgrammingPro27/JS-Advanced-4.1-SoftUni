function subtract() {
    let firstNumber = Number(document.getElementById("firstNumber").getAttribute("value"));
    let secondNumber = Number(document.getElementById("secondNumber").getAttribute("value"));
    let resultArea = document.getElementById("result");

    resultArea.innerHTML = firstNumber - secondNumber;

}