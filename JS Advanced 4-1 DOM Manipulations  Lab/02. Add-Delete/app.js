function addItem() {
    let listOfItems = document.getElementById("items");
    let inputFieldValue = document.getElementsByTagName("input")[0];
    if (inputFieldValue.value !== "") {
        let newLiElement = document.createElement("li");
        let deleteButton = document.createElement("a");
        deleteButton.innerHTML = "[Delete]"
        deleteButton.href = "#"
        newLiElement.textContent = inputFieldValue.value;
        newLiElement.appendChild(deleteButton)
        deleteButton.addEventListener("click", function () {
            deleteButton.parentElement.remove()
        })
        listOfItems.appendChild(newLiElement);
        inputFieldValue.value = ""
    }
}