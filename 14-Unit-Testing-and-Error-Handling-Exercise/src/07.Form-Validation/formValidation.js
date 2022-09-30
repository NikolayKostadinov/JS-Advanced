function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyNumber = document.getElementById('companyNumber');
    const company = document.getElementById('company');

    company.addEventListener('change', () => {
        document.getElementById('companyInfo').style.display =
            company.checked ? 'block' : 'none';
    });

    document.getElementById('submit')
        .addEventListener('click', validateFields)

    function isCorrectUserName(username) {
        let userNamePattern = /^[a-zA-Z0-9]{3,20}$/gm;
        return username && userNamePattern.test(username);
    }

    function isCorrectEmail(email) {
        const emailPattern = /^[^@.]+@[^@]*\.[^@]+$/;
        return emailPattern.test(email);
    }

    function isCorrectPassword(password) {
        let regExp = /^\w{5,15}$/gm;
        return regExp.test(password) && password.localeCompare(confirmPassword.value) === 0;
    }

    function isCorrectCompanyInfo(companyNumber) {
        let regExp = /^[0-9]{4}$/gm;
        return regExp.test(companyNumber);
    }

    function validateFields(ev) {
        ev.preventDefault();
        let isValid = true;
        if (!isCorrectUserName(username.value)) {
            username.style.borderColor = 'red';
            isValid = false;
        }

        if (!isCorrectEmail(email.value)) {
            email.style.borderColor = 'red';
            isValid = false;
        }

        if (!isCorrectPassword(password.value) || password.value !== confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            isValid = false;
        }

        if (company.checked) {
            if (!isCorrectCompanyInfo(companyNumber.value)) {
                companyNumber.style.borderColor = 'red';
                isValid = false;
            }
        }

        document.getElementById('valid').style.display =
            isValid ? 'block' : 'none';
    }
}
