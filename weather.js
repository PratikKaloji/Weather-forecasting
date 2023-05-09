let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", e => {
  e.stopPropagation();

  getWeather(input.value);
});

let getWeather = async place => {
  try {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=43dcf17ccd618ea974bfaf9d59225334`
    );
    let data = await response.json();
    console.log(data);

    let content = document.getElementById("section2");

    let date = new Date();
    console.log(date);
    content.innerHTML = `<main><h1 style="color:white">CURRENT WEATHER</h1>
  <h3 style="color:white">${date}</h3>
  <div>
  <div><img src="http://openweathermap.org/img/w/${
    data.weather[0].icon
  }.png" alt="icon"> </div>
  <div style="color:white">${Math.round(
    data.main.temp - 273.15
  )}<sup>o</sup>C</div>
  <div style="color:white">${data.weather[0].description}</div>
  </div>
  <p style="color:white">The skies will be ${
    data.weather[0].description
  }.The low will be ${Math.round(data.main.temp_min - 273.15)}<sup>o</sup>C</p>
        <div>
          <ul>
            <li style="color:white">wind :${data.wind.speed}km/hr</li>
            <li style="color:white">Humidity :${data.main.humidity}%</li>
            <li style="color:white">Visibility :${data.visibility / 1000}km</li>
            <li style="color:white"> Pressure :${data.main.pressure}mb</li>
            <li style="color:white"></li>
            <li></li>
          </ul>
        </div></main>`;
    console.log(data.visibility);
  } catch (error) {
    alert("City not found");
  }
};
