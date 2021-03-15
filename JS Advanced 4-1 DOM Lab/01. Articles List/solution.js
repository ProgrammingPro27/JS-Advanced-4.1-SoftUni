function createArticle() {
	let placeToAppedArticles = document.getElementById("articles");
	let articleElement = document.createElement("article");

	let articleHead = document.createElement("h3");
	let content = document.createElement("p");

	let titleContent = document.getElementById("createTitle");
	let contentTextarea = document.getElementById("createContent");

	articleHead.innerHTML = titleContent.value;
	content.innerHTML = contentTextarea.value;

	articleElement.appendChild(articleHead);
	articleElement.appendChild(content);

	if (titleContent.value.length !== 0 && contentTextarea.value.length !== 0) {
		placeToAppedArticles.appendChild(articleElement);
		titleContent.value = "";
		contentTextarea.value = "";
	}
}