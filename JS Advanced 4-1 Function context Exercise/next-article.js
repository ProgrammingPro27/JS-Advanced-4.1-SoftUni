function getArticleGenerator(articles) {

    function showNext(){
        let articleElement = document.createElement("article");
        let placeToSendArticles = document.getElementById("content");
        let articleContent = articles.shift();
        if(articleContent !== undefined){
            articleElement.innerHTML = articleContent;
            placeToSendArticles.appendChild(articleElement)
        }

    }
   return showNext
}
