function fromJSONToHTMLTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");
    function makeKeyRow(arr) {
        let firstRow = arr[0];
        let row = ['   <tr>'];
        for (const key in firstRow) {
            row.push(`<th>${escapeHtml(key)}</th>`)
        }

        row.push('</tr>');
        return row.join('');
    }
    function makeValueRow(obj) {

        let row = ['   <tr>'];
        Object.keys(obj)
            .forEach(key => row.push(`<td>${obj[key]}</td>`));
        row.push('</tr>');
        return row.join('');
    }
    function escapeHtml(value) {
        return value.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
    console.log(outputArr.join('\n'));
}
