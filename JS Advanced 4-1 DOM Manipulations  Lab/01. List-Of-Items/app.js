function addItem(){
    let listOfItems = document.getElementById("items");
    let inputFieldValue = document.getElementsByTagName("input")[0];
    if(inputFieldValue.value !== ""){
        let newLiElement = document.createElement("li");
        newLiElement.textContent =  inputFieldValue.value
        listOfItems.appendChild(newLiElement);
        inputFieldValue.value = ""
    }
}