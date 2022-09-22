function generateReport() {
    const cols = getSelectedColumns();
    const selectedData = getSelectedData(cols);

    document.getElementById('output').value = JSON.stringify(selectedData);

    function getSelectedColumns() {
        const colHeaders = document.getElementsByTagName('th');
        const selectedCols = Array.from(colHeaders)
            .map((th, ix) => (
                {
                    ix,
                    checked: th.querySelector('input').checked,
                    propName: th.textContent.toLowerCase().trim()
                }))
            .filter(c=>c.checked);
        return selectedCols;
    }

    function getSelectedData(selectedCols){
        const rows = Array.from(document.querySelectorAll('tbody tr'));
        const result =[];
        rows.forEach(row=>{
            const cols = Array.from(row.querySelectorAll('td'));
            const record = {}
            selectedCols.forEach(col => {
                record[col.propName] = cols[col.ix].textContent;
            })
            result.push(record);
        })

        return result;
    }
}
