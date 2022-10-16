class Story {
    static commentId = 1;

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = {};
        this._likes = {};
    }

    get likesCount() {
        return Object.keys(this._likes).length;
    }

    get likes() {
        let usersLikeStory = Object.keys(this._likes);
        if (this.likesCount === 0) {
            return `${this.title} has 0 likes`;
        }

        if (this.likesCount === 1) {
            return `${usersLikeStory[0]} likes this story!`
        }

        return `${usersLikeStory[0]} and ${this.likesCount - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.hasOwnProperty(username)) {
            throw new Error('You can\'t like the same story twice!');
        }
        if (this.creator === username) {
            throw new Error('You can\'t like your own story!')
        }

        this._likes[username] = '';
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.hasOwnProperty(username)) {
            throw Error(`You can't dislike this story!`);
        }

        delete this._likes[username];
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (!id || !this._comments.hasOwnProperty(id)) {
            this._comments[Story.commentId] = {
                id: Story.commentId++,
                username: username,
                content: content,
                replies: []
            };
            return `${username} commented on ${this.title}`;
        } else {
            this._comments[id].replies.push({
                id: `${id}.${this._comments[id].replies.length + 1}`,
                username: username,
                content: content
            });
            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        const sortTypes = {
            asc: (a, b) => a.id - b.id,
            desc: (a, b) => b.id - a.id,
            username: (a, b) => a.username.localeCompare(b.username)
        }

        const result = [];
        result.push(`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this.likesCount}`, `Comments:`);

        Object.values(this._comments)
            .sort(sortTypes[sortingType])
            .forEach(c => {
                result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
                c.replies
                    .sort(sortTypes[sortingType])
                    .forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`));
            });

        return result.join('\n');
    }
}

// let art = new Story("My Story", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));
