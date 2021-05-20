import CheckoutModel from "../model/CheckoutModel.js";
import CheckoutView from "../view/CheckoutView.js";

export default class CheckoutController {
  constructor() {
    this.checkoutView = new CheckoutView(this.onFormSubmitClick);
    this.checkoutModel = new CheckoutModel();
  }

  onFormSubmitClick = (ev) => {
    ev.preventDefault();
    this.checkoutModel.creatOrder(this.checkoutView.getCheckoutFormValue());
    this.saveOrderHistory();
    this.sendMesageToOwner();
    this.renderThankYou();
  };
  sendMesageToOwner() {
    this.checkoutModel.sendOrderInfo(
      this.checkoutView.getTemplateMsg(this.checkoutModel.getOrder())
    );
  }
  saveOrderHistory() {
    this.checkoutModel.updateLocalOrderHistory();
  }
  renderThankYou() {
    this.checkoutView.renderThankYouForOrder();
  }
}
