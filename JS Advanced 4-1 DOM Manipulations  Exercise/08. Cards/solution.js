function solve() {
   let playerOneCards = document.getElementById("player1Div");
   let playerTwoCards = document.getElementById("player2Div");
   let cardDisplay = document.getElementsByTagName("span");

   playerOneCards.addEventListener("click", cardsBattle);
   playerTwoCards.addEventListener("click", cardsBattle);

   let player1Count = 0;
   let player2Count = 0;
   let lastSelectedTargetFromPlayerOne;
   let lastSelectedTargetFromPlayerTwo;
   let decisions = [];
   function cardsBattle(x) {
      if (x.target.parentElement.id == "player1Div") {
         x.target.src = "./images/whiteCard.jpg"
         cardDisplay[0].innerHTML = x.target.name
         player1Count++
         lastSelectedTargetFromPlayerOne = x.target
      }
      if (x.target.parentElement.id == "player2Div") {
         x.target.src = "./images/whiteCard.jpg"
         cardDisplay[2].innerHTML = x.target.name
         player2Count++
         lastSelectedTargetFromPlayerTwo = x.target
      }

      if (cardDisplay[0].innerHTML !== "" && cardDisplay[2].innerHTML !== "") {
         if (player1Count >= 1 && player2Count >= 1) {
            if (Number(cardDisplay[0].innerHTML) > Number(cardDisplay[2].innerHTML)) {

               lastSelectedTargetFromPlayerOne.style.border = "2px solid green"
               lastSelectedTargetFromPlayerTwo.style.border = "2px solid red"
            } else if (Number(cardDisplay[0].innerHTML) < Number(cardDisplay[2].innerHTML)) {

               lastSelectedTargetFromPlayerOne.style.border = "2px solid red"
               lastSelectedTargetFromPlayerTwo.style.border = "2px solid green"
            }

            player1Count = 0
            player2Count = 0
            decisions.push(`[${cardDisplay[0].innerHTML} vs ${cardDisplay[2].innerHTML}]`)
            document.getElementById("history").innerHTML = decisions.join(" ") + " "
         }

      }
   }
}