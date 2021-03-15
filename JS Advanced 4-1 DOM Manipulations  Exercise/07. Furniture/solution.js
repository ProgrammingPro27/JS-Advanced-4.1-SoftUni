function solve() {
  let placeToStoreFurniture = document.getElementsByTagName("tbody")[0]
  let generateFurnitureButton = document.getElementsByTagName("button")[0]
  let buyFurnitureButton = document.getElementsByTagName("button")[1]
  let shoppingCardField = document.getElementsByTagName("textarea")[1];
  document.getElementsByTagName("input")[0].disabled = false


  function createFurnitureElement(elementType, propertyToAccess, valueType) {
    let objectFrame = document.createElement("td");
    let x = document.createElement(elementType);
    x[propertyToAccess] = valueType
    objectFrame.appendChild(x);
    return objectFrame;
  }
  generateFurnitureButton.addEventListener("click", function () {
    let objectGenerateField = document.getElementsByTagName("textarea")[0];

    if (objectGenerateField.value !== "") {
      let arrayOfFurniture = JSON.parse(objectGenerateField.value);
      for (let i = 0; i < arrayOfFurniture.length; i++) {

        let objectFrame = document.createElement("tr");
        let x1 = createFurnitureElement("img", "src", arrayOfFurniture[i].img)
        let x2 = createFurnitureElement("p", "innerHTML", arrayOfFurniture[i].name)
        let x3 = createFurnitureElement("p", "innerHTML", arrayOfFurniture[i].price)
        let x4 = createFurnitureElement("p", "innerHTML", arrayOfFurniture[i].decFactor)
        let x5 = createFurnitureElement("input", "type", "checkbox")

        let bullshit = [x1, x2, x3, x4, x5];
        for (let j = 0; j < bullshit.length; j++) {
          objectFrame.appendChild(bullshit[j]);
        }

        placeToStoreFurniture.appendChild(objectFrame)
      }

    }

  })
  buyFurnitureButton.addEventListener("click", function () {

    let inputButtons = document.getElementsByTagName("input");
    let totalSum = 0;
    let averageDecorationFactor = [];
    let boughtFurnitureStash = [];
    for (let i = 0; i < inputButtons.length; i++) {

      if (inputButtons[i].checked == true) {
        shoppingCardField.disabled = false
        let name = inputButtons[i].parentElement.parentElement.children[1].children[0].innerHTML
        let price = Number(inputButtons[i].parentElement.parentElement.children[2].children[0].innerHTML)
        let decorationFactor = Number(inputButtons[i].parentElement.parentElement.children[3].children[0].innerHTML)
        totalSum += price;
        averageDecorationFactor.push(decorationFactor);
        boughtFurnitureStash.push(name)
      }
    }
    let average = averageDecorationFactor.reduce((p, c) => p + c, 0) / averageDecorationFactor.length;
    shoppingCardField.value = `Bought furniture: ${boughtFurnitureStash.join(", ")}\n`
    shoppingCardField.value += `Total price: ${totalSum.toFixed(2)}\n`
    shoppingCardField.value += `Average decoration factor: ${average}`
  })

}