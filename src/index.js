import './styles.css';
import {grabCurrentWeatherData, grabForecastWeatherData, getRelaventData} from './api-functions';

// Global variables
const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    // Top
const daily = document.querySelector('.daily');
const hourly = document.querySelector('.hourly');
const labels = document.querySelectorAll('.label');
const sevenDayIcons = document.querySelectorAll('.seven-day-icon');
const sevenDayHighs = document.querySelectorAll('.high');
const sevenDayLows = document.querySelectorAll('.low');
const dailyBtn = document.querySelector('.daily');
const hourlyBtn = document.querySelector('.hourly');
    // Middle
const search = document.getElementById('searchBar');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const conditionIcon = document.querySelector('.condition-icon');
const currentCondition = document.querySelector('.condition');
const tempUnitToggle = document.getElementById('unitToggle');
    // Bottom
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const chanceOfRain = document.querySelector('.chance-rain');
const wind = document.querySelector('.wind');


const elementList = [city, temp, time, date, conditionIcon, feelsLike, humidity, chanceOfRain, wind, 'sevenDay'];


// Event listeners 

    // Displays all weather information onto screen, refreshes on search bar entry.
search.addEventListener('search', () => {
    if (tempUnitToggle.checked) {
        displayData(search.value, 'celsius');
    } else {
        displayData(search.value, 'fahrenheit');
    };
    search.value = ''
});

    // Defaults to display Seattle weather data on load.
search.addEventListener('load', displayData('Seattle', 'fahrenheit'));

    // Switches top display to daily weather forecast, showing up to three days.
dailyBtn.addEventListener('click', () => {
    dailyBtn.style.border = '2px solid black';
    hourlyBtn.style.border = '2px solid rgba(0, 0, 0, 0)';
})

    // Switches top display to hourly weather forecast for the day.
hourlyBtn.addEventListener('click', () => {
    hourlyBtn.style.border = '2px solid black';
    dailyBtn.style.border = '2px solid rgba(0, 0, 0, 0)';
})

    // Toggles temperature unit from fahrenheit to celsius.
tempUnitToggle.addEventListener('click', () => changeTempUnit());

// Functions

    // Takes in a location as a parameter and fetches the weather data for the location then displays weather data. Returns the object 'data' that contains relevant data.
async function displayData(location, unit) {
    let index = -1;
    const data = await getRelaventData(location);
    console.log('data in event', data);
    
    for (let key in data) {
        index++;
        if (index >= elementList.length) { // Only shows displayable data, which is determiend by elementList array.
            break;
        };
        if (key === 'temp') {
            if (unit === 'celsius') {
                elementList[index].textContent = data['cTemp'] + '°C';
            } else {
                elementList[index].textContent = data[key];      
            };
            continue
        };
        if (key === 'feelsLike') {
            if (unit === 'celsius') {
                elementList[index].textContent = data['cFeelsLike'];
            } else {
                elementList[index].textContent = data[key];
            };
            continue
        }
        // Displaying current weather icon
        if (key === 'condition') { 
          conditionIcon.src = displayCorrectIcon(data.condition);
          currentCondition.textContent = data.condition;
          continue
        };
        // Displaying 7 day forecast or hourly forecast
        if (key === 'sevenDay') {
            if (hourlyBtn.style.border === '2px solid black') {
                if (tempUnitToggle.checked) {
                    displayHourly(data, 'temp_c');
                    break
                } else {
                    displayHourly(data, 'temp_f');
                    break
                };
            }
            if (tempUnitToggle.checked) {
                displayDaily(data, 'cMax', 'cMin');
                break
            } else {
                displayDaily(data, 'fMax', 'fMin');
                break
            };
        };
        elementList[index].textContent = data[key];
    };

    // Removes previous event listeners and adds new ones specific to current location and temp unit
    hourly.removeEventListener('click', () => displayHourly(data, 'temp_c'));
    daily.removeEventListener('click', () => displayDaily(data, 'cMax', 'cMin'));
    hourly.removeEventListener('click', () => displayHourly(data, 'temp_f'));
    daily.removeEventListener('click', () => displayDaily(data, 'fMax', 'fMin'));
    if (unit === 'celsius') {
        hourly.addEventListener('click', () => displayHourly(data, 'temp_c'));
        daily.addEventListener('click', () => displayDaily(data, 'cMax', 'cMin'));
    } else {
        hourly.addEventListener('click', () => displayHourly(data, 'temp_f'));
        daily.addEventListener('click', () => displayDaily(data, 'fMax', 'fMin'));
    }
}


    // Takes in the weather condition as a paramter and displays the corresponding icon 
function displayCorrectIcon(condition) {
    condition = condition.toLowerCase();
    if (condition === 'sunny') {
        return './src/images/sun.png';
    } else if (condition === 'clear') {
        return './src/images/moon.png';
    } else if (condition.includes('partly')) {
        return './src/images/partly.png';
    } else if (condition === 'cloudy') {
        return './src/images/cloudy.png';
    } else if (condition === 'overcast') {
        return './src/images/overcast.png';
    } else if (condition === 'mist' || condition.includes('fog')) {
        return './src/images/mist.png';
    } else if (condition.includes('freezing') || condition.includes('ice')) {
        return './src/images/icons8-hail-96.png';
    } else if (condition.includes('snow')) {
        return './src/images/snow.png';
    } else if (condition.includes('thunder')) {
        return './src/images/thunderstorm.png';
    } else if (condition.includes('rain') || condition.includes('drizzle')) {
        return './src/images/rainy.png';
    } else if (condition.includes('sleet')) {
        return './src/images/sleet.png';
    }
}
    // Takes in the relavent data object as a parameter and displays a 7 day forecast, including the high, low, and an icon that corresponds to the weather condition.
function displayDaily(data, unitMax, unitMin) {
    removeHourlyDisp();
    for (let key in data.sevenDay) {
        sevenDayIcons[key].src = displayCorrectIcon(data.sevenDay[key].condition); //fix icon assigning
        sevenDayHighs[key].textContent = data.sevenDay[key][unitMax];
        sevenDayLows[key].textContent = data.sevenDay[key][unitMin];
        labels[key].textContent = weekdays[new Date(data.sevenDay[key].date).getDay()];
    };
}
    // Takes in relavent data object as a parameter and displays an hourly forecast, including the current temperature and an icon that corresponds to the weather condition.
function displayHourly(data, tempUnit) {
    removeHourlyDisp();
    for (let i = 0; i < 4; i++) {
        makeHourlyDisplay();    // Adds additional blocks since only 3 day forecast can be displayed.
    };
    const labels = document.querySelectorAll('.label');
    const day = document.querySelectorAll('.seven-day-icon');
    const topTempDisp = document.querySelectorAll('.high');
    const botTempDisp = document.querySelectorAll('.low');
    const currentTime = new Date();
    let currentHour = currentTime.getHours() + 1;
    for (let i = 0; i < 7; i++) {
        if (currentHour > 23) {
            currentHour = 0;
        };
        labels[i].textContent = data.hourly[currentHour].time.slice(11, 16);
        day[i].src = displayCorrectIcon(data.hourly[currentHour].condition.text);
        topTempDisp[i].textContent = data.hourly[currentHour][tempUnit];
        botTempDisp[i].innerHTML = '<br>';
        currentHour++
    }
}
    // Changes temperature units from fahrenheit to celsius and vice-versa. Takes in relavant data object as a parameter.
function changeTempUnit() {
    if (tempUnitToggle.checked) {
        displayData(city.textContent, 'celsius');
    } else {
       displayData(city.textContent, 'fahrenheit');
    };
}

    // Adds additional weather display blocks for the hourly forecast.
function makeHourlyDisplay() {
    const day = document.createElement('div');
    const label = document.createElement('p');
    const icon = document.createElement('img');
    const tempCont = document.createElement('div');
    const high = document.createElement('p');
    const low = document.createElement('p');

    day.classList.add('day');
    label.classList.add('label');
    icon.classList.add('icon', 'seven-day-icon');
    high.classList.add('high');
    low.classList.add('low');

    tempCont.append(high, low);
    day.append(label, icon, tempCont);
    document.querySelector('.weather-disp').appendChild(day);
}

    // Removes added weather display blocks from the hourly forecast.
function removeHourlyDisp() {
    const sevenDayDisp = document.querySelector('.weather-disp');
    const currentLength = sevenDayDisp.children.length;
    for (let i = 3; i < currentLength; i++) {
        sevenDayDisp.removeChild(sevenDayDisp.children[2].nextElementSibling);
    };
}