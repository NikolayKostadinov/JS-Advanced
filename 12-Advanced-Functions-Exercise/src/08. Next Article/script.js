function getArticleGenerator(articles) {
    const art = articles

    return ()=>{
        if (art.length > 0){
            const article = document.createElement('article');
            article.textContent = art.shift();
            document.getElementById('content').appendChild(article);
        }
    }
}
