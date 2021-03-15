function lockedProfile() {
    let profilesHolder = document.getElementsByTagName("main")[0];
    profilesHolder.addEventListener("click", showAndHideInformation);
    function showAndHideInformation(e) {

        if (e.target.tagName == "BUTTON") {
            if (e.target.parentElement.children[4].checked === true) {
                if (e.target.parentElement.children[10].innerHTML === "Show more") {
                    e.target.parentElement.children[10].innerHTML = "Hide it"
                    e.target.parentElement.children[9].style.display = "block"
                } else {
                    e.target.parentElement.children[10].innerHTML = "Show more"
                    e.target.parentElement.children[9].style.display = "none"
                }
            }

        }

    }
}