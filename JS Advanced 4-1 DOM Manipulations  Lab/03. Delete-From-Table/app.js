function deleteByEmail() {
    let flag;
    let emailsInEachRow = document.getElementsByTagName("tbody")[0].children;
    let labelValue = document.getElementsByTagName("input")[0]
    let operationMessage = document.getElementById("result");
    for (let i = 0; i < emailsInEachRow.length; i++) {
        let result = emailsInEachRow[i].children[1]
        if (labelValue.value === result.innerText) {
            flag = "Deleted.";
            emailsInEachRow[i].remove()
            operationMessage.innerText = flag;
            flag = "";
        }
        if (labelValue.value !== result.innerText) {
            if (flag !== "") {
                operationMessage.innerText = "Not found.";
            }

        }

    }
}