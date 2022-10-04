class Contact {
    #online = false;
    #titleElement;
    #article;

    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.#article = this.getRendition();
    }


    get online() {
        return this.#online;
    }

    set online(value) {
        this.#online = value;
        const title = this.#article.querySelector('div.title');
        if (this.#online) {
            title.classList.add('online');
        } else {
            title.classList.remove('online');
        }
    }

    render(id) {
        const element = document.getElementById(id);
        element.appendChild(this.#article);
    }

    getRendition() {
        const article = document.createElement("article");
        const divTitle = document.createElement('div');
        divTitle.classList.add('title');
        divTitle.textContent = `${this.firstName} ${this.lastName}`

        const btn = document.createElement('button');
        btn.textContent = '\u2139';

        btn.addEventListener('click', toggleVisibility)

        function toggleVisibility() {
            divInfo.style.display = divInfo.style.display === 'none' ? 'block' : 'none';
        }

        divTitle.appendChild(btn);

        const divInfo = document.createElement('div');
        divInfo.classList.add('info');
        divInfo.style.display = 'none';

        const spanPhone = document.createElement('span');
        spanPhone.textContent = `\u260E ${this.phone}`

        const spanEmail = document.createElement('span');
        spanEmail.textContent = `\u2709 ${this.email}`;

        divInfo.appendChild(spanPhone);
        divInfo.appendChild(spanEmail);

        article.appendChild(divTitle);
        article.appendChild(divInfo);

        return article;
    }
}
