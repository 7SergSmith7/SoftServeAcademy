export default class CheckoutView {
  constructor(onFormSubmitClick) {
    this.checkoutForm = document.querySelector(".checkout-form");
    this.inputEmail = document.getElementById("inputEmail");
    this.inputName = document.getElementById("inputName");
    this.inputPhone = document.getElementById("inputPhone");
    this.checkoutForm.addEventListener("submit", onFormSubmitClick);
  }

  getCheckoutFormValue() {
    return {
      name: this.inputName.value,
      email: this.inputEmail.value,
      phone: this.inputPhone.value,
    };
  }
}
