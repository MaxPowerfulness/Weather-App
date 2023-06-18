const middle = document.getElementById('middle')

function makeErrorMessage() {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Enter search in the form of "City", "City, State", "City, Country", or "Zip Code"'
    middle.insertBefore(errorMessage, document.querySelector('.temp-units'));
}

function removeErrorMessage() {
    middle.removeChild(document.querySelector('.error-message'));
}

// Takes a location as a parameter and returns weather information for the location using weatherapi
async function grabCurrentWeatherData(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3e2d011cbd1d4bf4996154952233105&q=${location}`, {mode:'cors'}); // Fetches data from server
    const data = await response.json(); // Converts into usable JS code
    return data
};

async function grabForecastWeatherData(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3e2d011cbd1d4bf4996154952233105&q=${location}&days=7`, {mode: 'cors'});
    const data = await response.json();
    return data;
}

// Takes location of interst as a parameter and returns an object that contains all relavent information for the weather app.
async function getRelaventData(location) {
    try {
        if (document.querySelector('.error-message')) {
            removeErrorMessage();
        };
        const current = await grabCurrentWeatherData(location);
        const forecast = await grabForecastWeatherData(location);
        const relaventData = {
            city: current.location.name,
            temp: current.current.temp_f,
            time: current.location.localtime.slice(11, 16),
            date: current.location.localtime.slice(0, 10),
            condition: current.current.condition.text,
            feelsLike: current.current.feelslike_f,
            humidity: current.current.humidity + ' %',
            chanceOfRain: forecast.forecast.forecastday[0].day.daily_chance_of_rain + ' %',
            wind: current.current.wind_mph + ' mph',
            sevenDay: {
                0: {
                    condition: forecast.forecast.forecastday[0].day.condition.text,
                    fMax: forecast.forecast.forecastday[0].day.maxtemp_f,
                    fMin: forecast.forecast.forecastday[0].day.mintemp_f,
                    cMax: forecast.forecast.forecastday[0].day.maxtemp_c,
                    cMin: forecast.forecast.forecastday[0].day.mintemp_c,
                    date: forecast.forecast.forecastday[0].date
                },
                1: {
                    condition: forecast.forecast.forecastday[1].day.condition.text,
                    fMax: forecast.forecast.forecastday[1].day.maxtemp_f,
                    fMin: forecast.forecast.forecastday[1].day.mintemp_f,
                    cMax: forecast.forecast.forecastday[1].day.maxtemp_c,
                    cMin: forecast.forecast.forecastday[1].day.mintemp_c,
                    date: forecast.forecast.forecastday[1].date
                },
                2: {
                    condition: forecast.forecast.forecastday[2].day.condition.text,
                    fMax: forecast.forecast.forecastday[2].day.maxtemp_f,
                    fMin: forecast.forecast.forecastday[2].day.mintemp_f,
                    cMax: forecast.forecast.forecastday[2].day.maxtemp_c,
                    cMin: forecast.forecast.forecastday[2].day.mintemp_c,
                    date: forecast.forecast.forecastday[2].date
                }
            },
            hourly: forecast.forecast.forecastday[0].hour,
            cTemp: current.current.temp_c,
            cFeelsLike: current.current.feelslike_c,
        };
        return relaventData;
    } catch {
        makeErrorMessage();
    }
}

export {grabCurrentWeatherData, grabForecastWeatherData, getRelaventData}