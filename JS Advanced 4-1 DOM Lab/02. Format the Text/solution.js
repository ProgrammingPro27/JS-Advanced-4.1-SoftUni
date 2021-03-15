function solve() {
  let paragraphText = document.getElementById("input");
  let filtration = paragraphText.innerHTML.split(".").filter(x => x.length > 0).map(x => { return x += "." });
  let containerOver = document.getElementById("output");
  let container = [];
  let part = [];

  while (filtration.length !== 0) {
    part.push(filtration.shift(), filtration.shift(), filtration.shift());
    if (part.length === 3) {
      container.push(part);
      part = [];
    }
  }
  container.forEach(x => {
    let el = document.createElement("p");
    el.innerHTML = x.join("\n");
    containerOver.appendChild(el)
  });

}