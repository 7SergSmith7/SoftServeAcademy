export default class CheckoutView {
  constructor(onFormSubmitClick) {
    this.checkoutForm = document.querySelector(".checkout-form");
    this.inputEmail = document.getElementById("inputEmail");
    this.inputName = document.getElementById("inputName");
    this.inputPhone = document.getElementById("inputPhone");
    this.checkoutForm.addEventListener("submit", onFormSubmitClick);
  }

  getTemplateMsg(client, productsInCart) {
    return (
      this.getTemplateClient(client) + this.getTemplateOrder(productsInCart)
    );
  }

  getCheckoutFormValue() {
    return {
      name: this.inputName.value,
      email: this.inputEmail.value,
      phone: this.inputPhone.value,
    };
  }

  getTemplateClient(clientsData) {
    return `*New order*%0A 
    *Name* : ${clientsData.name}%0A 
    *Email* : ${clientsData.email}%0A 
    *Phone* : ${clientsData.phone}%0A 
    *Cart* :%0A 
    `;
  }

  getTemplateOrder(productsInCart) {
    return productsInCart
      .map((product) => this.getTemplateProductInCart(product))
      .join("");
  }
  getTemplateProductInCart(product) {
    return `*${product.productName}*
    *Qty* : ${product.quantity}%0A 
    `;
  }
}
