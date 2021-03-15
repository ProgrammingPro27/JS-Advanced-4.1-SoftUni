function solve() {
    let inputField = document.querySelector("#input");
    let optionList = document.getElementById("selectMenuTo");
    let option1 = document.createElement("option");
    let resultText = document.querySelector("#result");

    option1.text = "Binary";
    option1.value = "binary";
    let option2 = document.createElement("option");
    option2.text = "Hexadecimal";
    option2.value = "hexadecimal";

    optionList.add(option1);
    optionList.add(option2);

    let button = document.querySelector("#container > button");
    button.addEventListener("click", function () {
        if (optionList.value !== "") {
            if (optionList.value == option1.value && inputField.value.length !== 0) {

                resultText.value = Number(inputField.value).toString(2);

            } else if (optionList.value == option2.value  && inputField.value.length !== 0) {
             
                resultText.value = Number(inputField.value).toString(16).toUpperCase();
            }
        }

    });

}