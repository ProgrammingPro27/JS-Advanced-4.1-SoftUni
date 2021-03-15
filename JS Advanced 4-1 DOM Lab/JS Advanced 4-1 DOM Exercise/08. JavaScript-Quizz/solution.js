function solve() {
  let questionsAnswered = 0;
  let choices = document.getElementsByClassName("answer-wrap");
  let firstPage = document.getElementsByTagName("section")
  let placeToPutScore = document.querySelector("#results > li > h1");
  let hiddenPage = document.querySelector("#results");

  function closePages(pageToOpen, pageToClose) {
      firstPage[pageToOpen].style.display = "block"; firstPage[pageToClose].style.display = "none";
  }
  function checkWinner() {
      firstPage[2].style.display = "none";
      hiddenPage.style.display = "block";
      if (questionsAnswered === 3) {
          placeToPutScore.innerHTML = "You are recognized as top JavaScript fan!";
      } else {
          placeToPutScore.innerHTML = `You have ${questionsAnswered} right answers`;
      };
  }
  for (let i = 0; i < choices.length; i++) {

      choices[i].addEventListener("click", function () {
          switch (i) {
              case 0: questionsAnswered++; closePages(1, 0); break;
              case 1: closePages(1, 0); break;

              case 2: closePages(2, 1); break;
              case 3: questionsAnswered++; closePages(2, 1); break;

              case 4: questionsAnswered++; checkWinner(questionsAnswered);
                  ; break;
              case 5: checkWinner(questionsAnswered);
                  ; break;
          }
      })
  }
}