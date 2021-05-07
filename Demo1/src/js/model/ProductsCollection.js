import { PRODUCTS_LIST_URL } from "../config.js";
export default class ProductsCollection {
  constructor() {
    this.productsList = [];
  }

  getProductsList() {
    return fetch(PRODUCTS_LIST_URL)
      .then((res) => res.json())
      .then((data) => (this.productsList = data));
  }
}
