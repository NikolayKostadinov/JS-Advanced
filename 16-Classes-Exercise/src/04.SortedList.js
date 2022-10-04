class List {
    #list = [];


    add(number) {
        this.#list.push(number);
        this.#list.sort((a, b) => a - b);
    }

    remove(index){
        this.#ensureInside(index);
        this.#list.splice(index,1);
    }

    get(index){
        this.#ensureInside(index);
        return this.#list[index];
    }

    get size() {
        return this.#list.length;
    }


    #ensureInside(index) {
        if (!this.#isInsideList(index)) {
            throw RangeError("Index out of range!");
        }
    }

    #isInsideList(index) {
        return 0 <= index && index < this.#list.length;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));