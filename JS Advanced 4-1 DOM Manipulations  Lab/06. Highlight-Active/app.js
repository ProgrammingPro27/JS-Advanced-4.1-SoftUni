function focus() {
    let divContainer = document.getElementsByTagName("div");
    for (let i = 1; i < divContainer.length; i++) {

        divContainer[i].children[1].addEventListener("focus", function () {
            divContainer[i].className = "focused";
        })
        divContainer[i].children[1].addEventListener("blur", function () {
            divContainer[i].classList.remove("focused");
        })
    }
}