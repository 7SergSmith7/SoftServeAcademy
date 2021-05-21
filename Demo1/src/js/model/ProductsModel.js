import { PRODUCTS_LIST_URL } from "../config.js";

export default class ProductsModel {
  constructor() {
    this.productsList = [];
    this.productsListOriginal = [];
    this.productsCategories = [];
    this.cortOption = 0;
    this.searchStr = "";
  }
  setSearchOption(searchInput) {
    if (searchInput != "") {
      this.searchStr = searchInput;
      console.log(this.searchStr);
      this.getSearchedProducts(this.productsListOriginal);
      console.log(this.productsList);
    }
  }

  getProductsList() {
    return fetch(PRODUCTS_LIST_URL)
      .then((res) => res.json())
      .then((data) => (this.productsListOriginal = this.makeProductsList(data)))
      .then(() => this.setOriginalProducts());
  }

  setOriginalProducts() {
    this.productsList = this.productsListOriginal;
  }

  getCategories(products) {
    let categories = [];
    let categoryOfProduct;
    for (let i = 0; i < products.length; i++) {
      categoryOfProduct = products[i].category;
      if (!categories.includes(categoryOfProduct))
        categories.push(products[i].category);
    }

    this.productsCategories = categories;
  }

  getProductsByCategory(category) {
    this.productsList = this.productsListOriginal.filter(
      (product) => product.category === category
    );
    if (this.searchStr !== "") this.getSearchedProducts(this.productsList);
    if (this.cortOption !== 0) this.sortPrice(this.cortOption);
  }

  getSearchedProducts(products) {
    this.productsList = products.filter((product) => {
      if (
        product.productName.toLowerCase().includes(this.searchStr) ||
        product.manufacture.toLowerCase().includes(this.searchStr)
      )
        return product;
    });
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
    this.cortOption = options;
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
    let productsInCartEmpty = [];
    localStorage.setItem("productCart", JSON.stringify(productsInCartEmpty));
  }
  addProductToCart(id, countProducts) {
    let productsInCart = JSON.parse(localStorage.getItem("productCart"));
    let product = Object.assign(this.getProductById(id));
    product.quantity = countProducts;
    if (productsInCart === null) {
      this.creatLocalCart();
      productsInCart = [];
    }
    // for (let i = 0; i < productsInCart.length; i++) {
    //   if (productsInCart[i].id == product.id) {
    //     productsInCart[i].quantity += product.quantity;
    //     break;
    //   }
    // }
    productsInCart.push(product);
    localStorage.setItem("productCart", JSON.stringify(productsInCart));
  }
  resetOptions() {
    this.cortOption = 0;
    this.searchStr = "";
    this.setOriginalProducts();
  }
}
