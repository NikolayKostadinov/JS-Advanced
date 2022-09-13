function squireOfStars(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
}

squireOfStars(1);
squireOfStars(2);
squireOfStars(5);
squireOfStars(7);
