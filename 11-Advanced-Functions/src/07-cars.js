function solve(input) {
    function cars() {
        const state = {};

        function create(name, inherit, parentName) {
            const obj = {};
            state[name] = obj;
            if (inherit){
                Object.entries(state[parentName])
                .forEach(p=>obj[p.key] = p.value);
            }
        }

       
        function set(name, propName, value) {
            state[name][propName] = value;
        }

        function print(name) {
            console.log(
                Object.entries(state[name])
                    .map(e => `${e.key}:${e.value}`)
                    .join(','));
        }

        return {
            create,
            set,
            print
        }
    }

    let carsProcessor = cars();

    array.forEach(element => {
        let tokens = element.split(' ');
        cars[tokens.splice(1)](...tokens);
    });
}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);