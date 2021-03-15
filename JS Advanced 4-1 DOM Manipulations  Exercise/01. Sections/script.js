function create(words) {
   let contentElement = document.getElementById("content");
   for (let i = 0; i < words.length; i++) {
      let paragraphHolder = document.createElement("div");
      let paragraphElement = document.createElement("p");
      paragraphElement.innerHTML = words[i];
      paragraphElement.style.display = "none"
      paragraphHolder.appendChild(paragraphElement);
      contentElement.appendChild(paragraphHolder)
   }
   contentElement.addEventListener("click",showParagraph)
   function showParagraph(e) {
   if(e.target.tagName === "DIV"){
      e.target.children[0].style.display = "block"
   }
   }
}