function solve() {
   let everyButton = document.getElementsByTagName("button");
   let productNames = document.getElementsByClassName("product-title");
   let productPrices = document.getElementsByClassName("product-line-price");
   let placeToKeepProducts = document.querySelector("body > div > textarea");
   let names = [];
   let prices = [];
   function addProduct(name, price) {
      if (!names.includes(name)) {
         names.push(name);
         prices.push(price)
      } else {
         prices.push(price)
      }
      placeToKeepProducts.value += `Added ${name} for ${price} to the cart.\n`;
   }
   for (let i = 0; i < everyButton.length - 1; i++) {
      everyButton[i].addEventListener("click", function () {
         addProduct(productNames[i].textContent, productPrices[i].textContent)
      })
   }
   everyButton[everyButton.length - 1].addEventListener("click", function () {
         for (let i = 0; i < everyButton.length; i++) {
            everyButton[i].disabled = true;
         }
         let totalPrice = prices.reduce((a, b) => Number(a) + Number(b), 0)
         placeToKeepProducts.value += `You bought ${names.join(", ")} for ${totalPrice.toFixed(2)}.`
      
   });
}