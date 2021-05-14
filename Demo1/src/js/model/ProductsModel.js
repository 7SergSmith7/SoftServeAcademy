import { PRODUCTS_LIST_URL } from "../config.js";
// import { PRODUCTS_LIST_URL_NEW } from "../config.js";
export default class ProductsModel {
  constructor() {
    this.productsList = [];
    // this.productsListNew = this.getProductsList();
    // console.log(this.productsListNew);
  }

  // getProductsList() {
  //   return fetch(PRODUCTS_LIST_URL)
  //     .then((res) => res.json())
  //     .then((data) => (this.productsList = data));
  // }

  getProductsList() {
    return fetch(
      "https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json"
    )
      .then((res) => res.json())
      .then((data) => (this.productsList = this.makeProductsList(data)));
  }
  makeProductsList(data) {
    const productFields = [
      "id",
      "productName",
      "manufacture",
      "category",
      "ingridients",
      "amounts",
      "units",
      "price",
      "imgLink",
    ];
    let products = [];
    for (let i = 9; i < data.feed.entry.length; i += 9) {
      let productWithValuePairs = [];
      for (let j = 0; j < 9; j++) {
        productWithValuePairs.push([
          productFields[j],
          data.feed.entry[i + j].content.$t,
        ]);
      }
      products.push(Object.fromEntries(new Map(productWithValuePairs)));
    }
    return products;
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
