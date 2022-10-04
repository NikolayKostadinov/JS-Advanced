class Contact {
    #online;

    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    get online() {
        return this.#online;
    }

    set online(value) {
        this.#online = value;

        if (this.divTitle) {
            this.divTitle.className = this.#online ? 'title online' : 'title';
        }
    }

    render(id) {
        this.article = document.createElement("article");
        this.divTitle = document.createElement('div');

        this.divTitle.classList.add('title');
        this.divTitle.textContent = `${this.firstName} ${this.lastName}`

        this.btn = document.createElement('button');
        this.btn.textContent = '\u2139';

        this.btn.addEventListener('click', (e) => {
            this.divInfo.style.display =
                this.divInfo.style.display === 'none' ? 'block' : 'none';
        })

        this.divTitle.appendChild(this.btn);

        this.divInfo = document.createElement('div');
        this.divInfo.classList.add('info');
        this.divInfo.style.display = 'none';

        this.spanPhone = document.createElement('span');
        this.spanPhone.textContent = `\u260E ${this.phone}`

        this.spanEmail = document.createElement('span');
        this.spanEmail.textContent = `\u2709 ${this.email}`;

        this.divInfo.appendChild(this.spanPhone);
        this.divInfo.appendChild(this.spanEmail);

        this.article.appendChild(this.divTitle);
        this.article.appendChild(this.divInfo);

        document.getElementById(id).appendChild(this.article);
    }
}
