function growingWord() {
  let contentToChange = document.getElementsByTagName("p");
  let lastEl = contentToChange[contentToChange.length - 1];

  let buttonHolder = document.getElementById("colors");
  lastEl.style.color = buttonHolder.children[0].innerHTML.toLowerCase();
  let removedChild = buttonHolder.removeChild(buttonHolder.children[0]);

  buttonHolder.appendChild(removedChild)
  let parsedValue = Number(lastEl.style.fontSize.substring(0, lastEl.style.fontSize.length - 2));

  if (parsedValue == 0) {
    lastEl.style.fontSize = `${2}px`;
  } else {

    lastEl.style.fontSize = `${parsedValue * 2}px`;

  }
}