function solve() {
   let messageContainer = document.getElementById("chat_messages");
   let button = document.getElementById("send");
   let chatBox = document.getElementsByTagName("textarea")[0];
   button.addEventListener("click", function () {
       if (chatBox.value.length > 0) {
           let message = document.createElement("div");
           message.className = "message my-message";
           message.innerHTML = chatBox.value
           if (message.innerHTML.trim() !== "") {
               messageContainer.appendChild(message)
           }
       }
       chatBox.value = "";
   }
   )
}