function townsToJSON(towns) {
    towns.shift();
    return JSON.stringify(towns.map(e => {
        const [name, lat, long] = e.split(/\s*\|\s*/gm).filter(x => x !== '');
        return {
            Town: name,
            Latitude: Number(Number(lat).toFixed(2)),
            Longitude: Number(Number(long).toFixed(2))
        };
    }));
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
));