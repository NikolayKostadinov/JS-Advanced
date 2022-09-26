function attachEventsListeners() {
    const fromSelect = document.getElementById('inputUnits');
    const toSelect = document.getElementById('outputUnits');
    const fromDistanceElement = document.getElementById('inputDistance');
    const toDistanceElement = document.getElementById('outputDistance');
    const rates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    function convert(value, unitsFrom, unitsTo){
        const meters = value * rates[unitsFrom];
        return meters / rates[unitsTo];
    }

    function convertHandler() {
        const fromDistance = Number(fromDistanceElement.value);
        toDistanceElement.value = convert(fromDistance, fromSelect.value, toSelect.value)
    }

    document.getElementById('convert')
        .addEventListener('click', convertHandler);
}