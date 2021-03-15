function addItem() {
    let newItemText = document.getElementById("newItemText");
    let newItemValue = document.getElementById("newItemValue");
    let optionHolder = document.getElementById("menu");
    let option = document.createElement("option");
    if (newItemValue.value.length !== 0 && newItemValue.value.length !== 0) {
        option.setAttribute("value", newItemValue.value)
        option.innerHTML = newItemText.value;
        optionHolder.add(option)
        newItemText.value = ""
        newItemValue.value = ""
    }
}