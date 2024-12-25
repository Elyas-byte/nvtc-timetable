import { timetables } from "./timetable.js";

function getClassSchedule(selectedClass, selectedDay) {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM format
    const currentDay = now.getDay(); // 0-6 (Sun-Sat)

    const dayClasses = timetables[selectedClass][selectedDay] || [];
    let currentClass = null;
    let nextClass = null;

    if (selectedDay === currentDay) {
        dayClasses.forEach((classInfo, index) => {
            if (currentTime >= classInfo.start && currentTime < classInfo.end) {
                currentClass = classInfo;
                nextClass = dayClasses[index + 1] || null;
            }
        });
    }

    return { currentClass, nextClass, dayClasses, currentDay };
}

function displayClasses() {
    const classSelect = document.getElementById('class-select');
    const daySelect = document.getElementById('day');
    const selectedClass = classSelect.value;
    const selectedDay = parseInt(daySelect.value);
    const currentClassDiv = document.getElementById('current-class');
    const timeRemainingDiv = document.getElementById('time-remaining');
    const nextClassDiv = document.getElementById('next-class');
    const scheduleBody = document.getElementById('schedule-body');
    const timeElapsedDiv = document.getElementById('time-elapsed');
    const currentTimeDiv = document.getElementById('current-time');

    scheduleBody.innerHTML = '';

    const now = new Date();
    const currentDay = now.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const { currentClass, nextClass, dayClasses } = getClassSchedule(selectedClass, selectedDay);

    dayClasses.forEach((classInfo) => {
        const row = document.createElement('tr');

        if (selectedDay === currentDay && currentClass &&
            classInfo.subject === currentClass.subject &&
            classInfo.teacher === currentClass.teacher) {
            row.classList.add('highlight');
        }

        row.innerHTML = `
            <td>${classInfo.start}</td>
            <td>${classInfo.end}</td>
            <td>${classInfo.subject}</td>
            <td>${classInfo.teacher}</td>
            <td>${classInfo.room}</td>
        `;
        scheduleBody.appendChild(row);
    });

    if (selectedDay === currentDay && currentClass) {
        currentClassDiv.innerHTML = `Current Class: ${currentClass.subject} (Room: ${currentClass.room}, ${currentClass.teacher})`;

        const currentClassEnd = new Date();
        const [endHour, endMinute] = currentClass.end.split(':');
        currentClassEnd.setHours(endHour, endMinute, 0);
        const remainingTime = Math.ceil((currentClassEnd - new Date()) / 1000);

        const currentClassStart = new Date();
        const [startHour, startMinute] = currentClass.start.split(':');
        currentClassStart.setHours(startHour, startMinute, 0);
        const elapsedTime = Math.ceil((new Date() - currentClassStart) / 1000);

        if (remainingTime > 0) {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            const elapsedMinutes = Math.floor(elapsedTime / 60);
            const elapsedSeconds = elapsedTime % 60;

            timeRemainingDiv.innerHTML = `Time Remaining: ${minutes} minutes and ${seconds} seconds`;
            currentTimeDiv.innerHTML = `Current Time: ${now.toLocaleTimeString('en-US', { hour12: false })} (${days[currentDay]})`;
            timeElapsedDiv.innerHTML = `Elapsed Time: ${elapsedMinutes} minutes and ${elapsedSeconds} seconds`;
        } else {
            timeRemainingDiv.innerHTML = "Class has ended.";
            timeElapsedDiv.innerHTML = "";
        }
    } else {
        currentClassDiv.innerHTML = selectedDay === currentDay ? "No current class." : `Viewing schedule for ${days[selectedDay]}`;
        timeRemainingDiv.innerHTML = "";
        timeElapsedDiv.innerHTML = "";
        currentTimeDiv.innerHTML = selectedDay === currentDay ? now.toLocaleTimeString('en-US', { hour12: false }) : "";
    }

    if (selectedDay === currentDay && nextClass) {
        nextClassDiv.innerHTML = `Next Class: ${nextClass.subject} (Room: ${nextClass.room})`;

        const nextClassStart = new Date();
        const [startHour, startMinute] = nextClass.start.split(':');
        nextClassStart.setHours(startHour, startMinute, 0);
        const timeUntilNextClass = Math.ceil((nextClassStart - new Date()) / 1000);

        if (timeUntilNextClass <= 300 && timeUntilNextClass > 0) {
            nextClassDiv.classList.add('blinking-red');
        } else {
            nextClassDiv.classList.remove('blinking-red');
        }
    } else {
        nextClassDiv.innerHTML = selectedDay === currentDay ? "No more classes for today." : "";
        nextClassDiv.classList.remove('blinking-red');
    }
}

function initializeDaySelect() {
    const daySelect = document.getElementById('day');
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date().getDay();

    days.forEach((day, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = day;
        daySelect.appendChild(option);
    });

    daySelect.value = currentDay;
}

initializeDaySelect();

document.getElementById('day').addEventListener('change', displayClasses);

displayClasses();
setInterval(displayClasses, 1000);
document.getElementById('class-select').addEventListener('change', displayClasses);

const toggleThemeButton = document.getElementById('toggle-theme');

function setTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    const container = document.querySelector('.container');
    container.classList.toggle('dark', theme === 'dark');
    const header = document.querySelector('h1');
    header.classList.toggle('dark', theme === 'dark');
    const label = document.querySelector('label');
    label.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
}

toggleThemeButton.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(currentTheme);
});

const savedClass = localStorage.getItem('selectedClass');
if (savedClass) {
    document.getElementById('class-select').value = savedClass;
}

document.getElementById('class-select').addEventListener('change', function () {
    localStorage.setItem('selectedClass', this.value);
    displayClasses();
});

displayClasses();