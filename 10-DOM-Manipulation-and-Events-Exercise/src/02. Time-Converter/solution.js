function attachEventsListeners() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    document.getElementById("daysBtn").addEventListener("click", onDaysBtnClick);
    document.getElementById("hoursBtn").addEventListener("click", onHoursBtnClick);
    document.getElementById("minutesBtn").addEventListener("click", onMinutesBtnClick);
    document.getElementById("secondsBtn").addEventListener("click", onSecondsBtnClick);

    function onDaysBtnClick() {
        const days = Number(daysElement.value);
        hoursElement.value = days * 24;
        minutesElement.value = days * 1440;
        secondsElement.value = days * 86400;
    }

    function onHoursBtnClick() {
        const hours = Number(hoursElement.value);
        daysElement.value = hours / 24;
        minutesElement.value = hours * 60;
        secondsElement.value = hours * 60 * 60;
    }

    function onMinutesBtnClick() {
        const minutes = Number(minutesElement.value);
        daysElement.value = minutes / 24 / 60;
        hoursElement.value = minutes / 60;
        secondsElement.value = minutes * 60;
    }

    function onSecondsBtnClick() {
        const seconds = Number(secondsElement.value);
        daysElement.value = seconds / 24 / 60 / 60;
        hoursElement.value = seconds / 60 / 60;
        minutesElement.value = seconds / 60 ;
    }
}
