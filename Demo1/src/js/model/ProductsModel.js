import { PRODUCTS_LIST_URL } from "../config.js";
export default class ProductsModel {
  constructor() {
    this.productsList = [];
    // this.creatLocalCart();
  }

  getProductsList() {
    return fetch(PRODUCTS_LIST_URL)
      .then((res) => res.json())
      .then((data) => (this.productsList = data));
  }
  sortPrice(options) {
    if (options === "descending")
      return this.productsList.sort((a, b) => this.comparePrice(a, b));
    if (options === "ascending")
      return this.productsList.sort((a, b) => this.comparePrice(b, a));
  }
  comparePrice(a, b) {
    return a.price - b.price;
  }
  getProductById(productId) {
    const product = this.productsList.filter((el) => el.id === productId);
    return product[0];
  }
  creatLocalCart() {
    let productsInCart = [];
    localStorage.setItem("productCart", JSON.stringify(productsInCart));
  }
  addProductToCart(product) {
    let productsInCart = JSON.parse(localStorage.getItem("productCart"));
    if (productsInCart === "null") this.creatLocalCart();
    productsInCart.push(product);
    localStorage.setItem("productCart", JSON.stringify(productsInCart));
  }
}
