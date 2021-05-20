export default class CheckoutView {
  constructor(onFormSubmitClick) {
    this.checkoutBlock = document.querySelector(".checkout-block");
    this.checkoutForm = document.querySelector(".checkout-form");
    this.inputEmail = document.getElementById("inputEmail");
    this.inputName = document.getElementById("inputName");
    this.inputPhone = document.getElementById("inputPhone");

    this.checkoutForm.addEventListener("submit", onFormSubmitClick);
  }

  renderThankYouForOrder() {
    this.checkoutBlock.innerHTML = "";
    this.checkoutBlock.innerHTML += this.getTemplateThankYouForOrde();
  }

  getTemplateThankYouForOrde() {
    return `<div class="row">
    <div class="col-12">
      <p>Thank you for order</p>
      <a role="button" class="btn btn-primary" href="index.html"
        >Catalog</a
      >
    </div>
  </div>`;
  }

  getTemplateMsg({ client, cart, total }) {
    return (
      this.getTemplateClient(client) +
      this.getTemplateOrder(cart) +
      `%0A*Total* : ${total} UAH`
    );
  }

  getCheckoutFormValue() {
    return {
      name: this.inputName.value,
      email: this.inputEmail.value,
      phone: this.inputPhone.value,
    };
  }

  getTemplateClient({ name, email, phone }) {
    return `
    *New order*%0A 
    *Name* : ${name}%0A 
    *Email* : ${email}%0A 
    *Phone* : ${phone}%0A 
    *Cart* :%0A %0A`;
  }

  getTemplateOrder(productsInCart) {
    return productsInCart
      .map((product) => this.getTemplateProductInCart(product))
      .join("");
  }
  getTemplateProductInCart({ productName, quantity, price }) {
    return `
    *${productName}* %0A
    ${quantity} X ${price} UAH
    %0A`;
  }
}
