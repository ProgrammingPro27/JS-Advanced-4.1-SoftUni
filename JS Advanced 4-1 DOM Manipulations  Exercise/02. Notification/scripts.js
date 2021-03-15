function notify(e) {
    let newsPanel = document.getElementById("notification");
    newsPanel.style.display = "block"
    newsPanel.innerText = e;
    if (newsPanel.style.display == "block") {
        setTimeout(function () { newsPanel.style.display = "none" }, 2000);
    }

}