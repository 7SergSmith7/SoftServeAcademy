export default class CartModel {
  constructor() {
    this.getProductInCart();
  }

  getProductInCart() {
    return JSON.parse(localStorage.getItem("productCart"));
  }
  calculateCartValue() {
    let productsInCart = this.getProductInCart();
    if (productsInCart.length > 0)
      return productsInCart
        .map((product) => +product.price * +product.quantity)
        .reduce((a, b) => a + b);
    else return "0";
  }
  deleteProduct(id) {
    let productsInCart = this.getProductInCart().filter(
      (product) => product.id != id
    );
    this.updateLocalStorege(productsInCart);
  }
  updateLocalStorege(products) {
    localStorage.setItem("productCart", JSON.stringify(products));
  }
  setNewQtyProduct(idProduct, newValueQty) {
    let productsInCart = this.getProductInCart();
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == idProduct)
        productsInCart[i].quantity = newValueQty;
    }
    if (newValueQty == 0) this.deleteProduct(idProduct);
    else this.updateLocalStorege(productsInCart);
  }
}
