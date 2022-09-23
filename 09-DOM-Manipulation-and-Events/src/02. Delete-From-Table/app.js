function deleteByEmail() {
    const value = document.querySelector('input[name="email"]').value;
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    let message = 'Not found.';
    rows.forEach(row => {
        if (row.children[1].textContent === value){
            row.parentElement.removeChild(row);
            message = "Deleted."
        }
    })

    document.getElementById('result').textContent = message;
}