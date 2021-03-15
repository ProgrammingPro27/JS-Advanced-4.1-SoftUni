function toggle() {
    let hiddenDiv = document.getElementById("extra");
    let buttonElement = document.getElementsByClassName("button")[0]
    if (buttonElement.innerHTML == "More") {
        buttonElement.innerHTML = "Less"
        hiddenDiv.style.display = "block";
    } else {
        buttonElement.innerHTML = "More"
        hiddenDiv.style.display = "none"
    }
}