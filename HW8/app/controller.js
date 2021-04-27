import Model from "./model.js";
import View from "./view.js";

export default class Contoller {
  constructor() {
    this.model = new Model(this.handleLoadData);
    this.view = new View(this.handleClickLoad);
  }

  handleClickLoad = () => {
    this.model.load(this.view.getCityName());
  };
  handleLoadData = (data) => {
    this.view.renderWeatherData(data);
  };
}
