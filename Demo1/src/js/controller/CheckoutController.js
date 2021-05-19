import CheckoutModel from "../model/CheckoutModel.js";
import CheckoutView from "../view/CheckoutView.js";

export default class CheckoutController {
  constructor() {
    this.checkoutView = new CheckoutView(this.onFormSubmitClick);
    this.checkoutModel = new CheckoutModel();
  }

  onFormSubmitClick = (ev) => {
    ev.preventDefault();
    this.checkoutModel.sendOrderInfo(this.checkoutView.getCheckoutFormValue());
  };
}
