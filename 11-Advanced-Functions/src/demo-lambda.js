let obj = {
    name: 'Gosho',
    method: function () {
        const inner = () => console.log(this);
        inner();
    }
}

obj.method();