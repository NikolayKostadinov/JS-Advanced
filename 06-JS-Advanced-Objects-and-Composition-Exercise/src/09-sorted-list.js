function createSortedList() {
    const list = [];
    return {
        list,
        add(number) {
            list.push(number);
            list.sort((a, b) => a - b);
            this.size++
        },
        remove(index) {
            if (0 <= index && index < list.length) {
                list.splice(index, 1);
                this.size--;
            }
        },
        get(index) {
            if (0 <= index && index <list.length)
                return list[index];
        },
        size: list.length
    }
}


var myList = createSortedList();

// Generate random list of 20 numbers
var expectedArray = [];
for (let i = 0; i < 20; i++) {
    expectedArray.push(Math.floor(Math.random() * 200) - 100);
}
// Add to collection
for (let i = 0; i < expectedArray.length; i++) {
    myList.add(expectedArray[i]);
}


let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
