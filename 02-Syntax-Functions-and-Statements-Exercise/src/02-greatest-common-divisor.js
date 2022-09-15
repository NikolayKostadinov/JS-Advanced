function greatestCommonDevisor(...args) {
    for (let devisor = Math.min(...args); devisor > 0; devisor--) {
        if (args[0] % devisor == 0 && args[1] % devisor == 0) {
            console.log(devisor);
            break;
        }
    }
}

greatestCommonDevisor(15,5);
greatestCommonDevisor(2154,458);