function addAndRemoveElements(commands) {
    const arr = [];
    let ix = 0;
    commands.forEach(element => {
        ix++;
        if (element === 'add') {
            arr.push(ix);
        } else {
            arr.pop();
        }
    });
    console.log(arr.length ? arr.join('\n') : 'Empty');
}

addAndRemoveElements(['add',
    'add',
    'add',
    'add']
);

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);

addAndRemoveElements(['remove',
    'remove',
    'remove']
);