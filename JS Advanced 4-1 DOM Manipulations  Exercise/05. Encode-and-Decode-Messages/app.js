function encodeAndDecodeMessages() {
    let encodeButton = document.getElementsByTagName("button")[0];
    let decodeButton = document.getElementsByTagName("button")[1];

    let messageSecond;
    encodeButton.addEventListener("click", function () {
        let messageToEncodeArea = document.getElementsByTagName("textarea")[0];
        if (messageToEncodeArea.value !== "") {
            let arrayToDecode = messageToEncodeArea.value;
            let encodedMessage = [];
            for (let i = 0; i < arrayToDecode.length; i++) {
                encodedMessage.push(arrayToDecode.charCodeAt(i))
            }

            let mapped = encodedMessage.map(x => x + 1);
            messageSecond = mapped;
            let theOneToPutOnScreen = mapped.map(x => String.fromCharCode(x));
            messageToEncodeArea.value = ""
            document.getElementsByTagName("textarea")[1].value = theOneToPutOnScreen.join("")
        }

    })
    decodeButton.addEventListener("click", function () {
        let messageToDecodeArea = document.getElementsByTagName("textarea")[1];
        if (messageToDecodeArea.value) {

            let recreated = messageSecond.map(x => x - 1)

            let decriptedMessage = recreated.map(x => String.fromCharCode(x))

            messageToDecodeArea.value = decriptedMessage.join("");

        }

    })

}