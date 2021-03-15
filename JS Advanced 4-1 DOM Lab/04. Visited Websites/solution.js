function solve() {
  let elements = document.getElementsByClassName("link-1");
  for (let i = 0; i < elements.length; i++) {
    elements[i].getElementsByTagName('a')[0].addEventListener("click", function () {
      let element = elements[i].getElementsByTagName('p')[0];
      let match = /\d+/g.exec(element.innerHTML)[0];
      match++
      element.innerHTML = `visited ${match} times`;
    });
  }
}