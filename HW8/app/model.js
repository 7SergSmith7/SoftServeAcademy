export default class Model {
  constructor(handleLoadData) {
    this.handleLoadData = handleLoadData;
  }
  load(cityName) {
    const APIkey = "ef2048aa0dd213b8bb9d31c5779261ad";

    const USERS_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`;
    fetch(USERS_URL)
      .then((response) => {
        if (response.status < 200 && response.status >= 300)
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.handleLoadData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
