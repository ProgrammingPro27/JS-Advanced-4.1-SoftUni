function solve() {
    let showOptionsButton = document.getElementById("dropdown");
    let options = document.getElementById("dropdown-ul");
    let boxButton = document.getElementById("box");
    showOptionsButton.addEventListener("click", function () {
        if (options.style.display !== "block") {
            options.style.display = "block";
        } else {
            boxButton.style.backgroundColor = "black";
            options.style.display = "none";
            boxButton.style.color = "white"
        }

    });
    options.addEventListener("click", changeColor);
    function changeColor(e) {
        if (e.target.tagName === "LI") {
            boxButton.style.backgroundColor = e.target.innerHTML
            boxButton.style.color = "black"
        }
    }
}