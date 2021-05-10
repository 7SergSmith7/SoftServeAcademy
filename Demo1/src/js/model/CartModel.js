export default class CartModel {
  constructor() {
    this.getProductInCart();
  }

  getProductInCart() {
    return JSON.parse(localStorage.getItem("productCart"));
  }
}
