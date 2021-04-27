export default class View {
  constructor(handleClickLoad) {
    this.weatherContainer = document.querySelector(".weather-info");
    this.weatherBtn = document.querySelector("#input-btn");
    this.weatherInput = document.querySelector(".weather-input").value;

    this.weatherBtn.addEventListener(
      "click",
      handleClickLoad(this.weatherInput)
    );
  }

  renderWeatherData(wetherInfo) {
    console.log(wetherInfo);
    const { main } = wetherInfo;

    const wetherHtml = `<div class="alert alert-primary" role="alert">
    Temp: ${main.temp}
  </div>
    `;
    this.weatherContainer.innerHTML += wetherHtml;
  }

  getCityName() {
    return this.weatherInput;
  }
}
