export default class CartModel {
  constructor() {
    this.getProductInCart();
  }

  getProductInCart() {
    console;
    return JSON.parse(localStorage.getItem("productCart"));
  }
  calculateCartValue() {
    return this.getProductInCart()
      .map((product) => product.price)
      .reduce((a, b) => a + b);
  }
}
