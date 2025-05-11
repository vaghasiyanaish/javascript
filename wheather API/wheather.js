document.getElementById("searchButton").addEventListener("click", () => {
    let city = document.getElementById("cvalue").value.trim();
    let wdetails = document.getElementById("wheather");

    wdetails.innerHTML = "";

    if (!city) {
        wdetails.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

   setTimeout(() => {
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b905ad3bc3c6e08d4c99b8c0a850072b&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
           wdetails.innerHTML = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <div class="current-weather">
                <div class="temperature">${data.main.temp}°C</div>
                <div class="weather-description">${data.weather[0].description}</div>
            </div>
            <div class="details-grid">
                <div class="detail-item">
                    <strong>Humidity</strong>
                    <span>${data.main.humidity}%</span>
                </div>
                <div class="detail-item">
                    <strong>Wind Speed</strong>
                    <span>${data.wind.speed} m/s</span>
                </div>
            </div>
`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            wdetails.innerHTML = `<p>Something went wrong. Please try again later.</p>`
        });
        document.getElementById("wheather").classList.add("show");
    }, 300);
});