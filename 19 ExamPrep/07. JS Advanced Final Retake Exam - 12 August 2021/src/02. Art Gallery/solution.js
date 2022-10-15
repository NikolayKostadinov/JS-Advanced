class ArtGallery {
    _articles = {};
    _guests = {};

    personalities = {
        Vip: 500,
        Middle: 250,
        default: 50
    }

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {"picture": 200, "photo": 50, "item": 250};
    }


    get listOfArticles() {
        return Object.values(this._articles);
    }

    get guests() {
        return Object.values(this._guests);
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw Error('This article model is not included in this gallery!');
        }

        if (this._articles.hasOwnProperty(articleName) && this._articles[articleName].articleModel === articleModel) {
            this._articles[articleName].quantity += quantity;
        } else {
            this._articles[articleName] = {articleModel, articleName, quantity};
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }

    inviteGuest(guestName, personality) {
        if (this._guests.hasOwnProperty(guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }

        let points = 0;
        if (!this.personalities.hasOwnProperty(personality)) {
            points = this.personalities.default;
        } else {
            points = this.personalities[personality];
        }

        this._guests[guestName] = {guestName, points, purchaseArticle: 0};

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        if (!this._articles.hasOwnProperty(articleName)
            || this._articles[articleName].articleModel !== articleModel) {
            throw new Error('This article is not found.');
        }

        if (this._articles[articleName].quantity === 0) {
            return `The ${articleName} is not available.`
        }

        if (!this._guests.hasOwnProperty(guestName)){
            return 'This guest is not invited.'
        }

        if (this.possibleArticles[articleModel] > this._guests[guestName].points) {
            return 'You need to more points to purchase the article.';
        }

        this._guests[guestName].points -= this.possibleArticles[articleModel];
        this._guests[guestName].purchaseArticle++;
        this._articles[articleName].quantity--;


        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            return 'Articles information:\n' +
                this.listOfArticles
                    .map(a => `${a.articleModel} - ${a.articleName} - ${a.quantity}`)
                    .join('\n');
        } else {
            return 'Guests information:\n' +
                this.guests
                    .map(g => `${g.guestName} - ${g.purchaseArticle}`)
                    .join('\n');
        }
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));
