function solve() {
   let parentElementTb = document.getElementsByTagName("tbody")[0];
   parentElementTb.addEventListener("click", coloriseCell);

   function coloriseCell(e) {
       if (e.target.tagName == "TD") {
           if (e.target.parentElement.style.backgroundColor == "") {
               for (let i = 0; i < parentElementTb.children.length; i++) {

                   parentElementTb.children[i].style.backgroundColor = "";

               }
               e.target.parentElement.style.backgroundColor = "#413f5e";
           } else {

               e.target.parentElement.style.backgroundColor = "";
           }



       }
   }
}