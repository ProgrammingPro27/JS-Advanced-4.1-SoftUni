function solve() {
   let searchInput = document.getElementsByTagName("input")[0]
   let rowsToSearch = document.getElementsByTagName("tbody")[0].children
   let buttonToSearchMatch = document.getElementsByTagName("button")[0]

   buttonToSearchMatch.addEventListener("click", function () {
       for (let i = 0; i < rowsToSearch.length; i++) {
           rowsToSearch[i].classList.remove("select");
       }

   })
   buttonToSearchMatch.addEventListener("click", function () {
       let copy = "" + searchInput.value.toLowerCase()

       searchInput.value = "";

       for (let i = 0; i < rowsToSearch.length; i++) {
           for (let j = 0; j < rowsToSearch[i].children.length; j++) {
               if (rowsToSearch[i].children[j].innerHTML.toLowerCase().includes(copy)) {

                   rowsToSearch[i].className = "select"

               }

           }
       }

   })

}