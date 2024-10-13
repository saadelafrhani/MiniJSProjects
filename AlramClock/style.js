let alarmTime = null;

const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const timeString = `${hours.toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")} ${ampm}`;
    document.getElementById('clock').textContent = timeString;

    if (alarmTime === timeString) {
        new Audio('https://pixabay.com/music/ambient-horror-background-atmosphere-16-246919/').play();
        alert("Alarm ringing!");
        alarmTime = null; // Reset alarm
    }
};

const populateTimeSelectors = () => {
    const hourSelect = document.getElementById('hourSelect');
    const minuteSelect = document.getElementById('minuteSelect');
    
    for (let i = 1; i <= 12; i++) hourSelect.innerHTML += `<option value="${i}">${i}</option>`;
    for (let i = 0; i < 60; i++) minuteSelect.innerHTML += `<option value="${i.toString().padStart(2, '0')}">${i.toString().padStart(2, '0')}</option>`;
};

const setAlarm = () => {
    const hour = document.getElementById('hourSelect').value;
    const minute = document.getElementById('minuteSelect').value;
    const ampm = document.getElementById('ampmSelect').value;
    if (hour && minute) alarmTime = `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:00 ${ampm}`;
    alert(`Alarm set for ${alarmTime}`);
};

populateTimeSelectors();
setInterval(updateClock, 1000);
