import ProductsCollection from "../model/ProductsCollection.js";
import ProductsView from "../view/ProductsView.js";

export default class ProductsController {
  constructor() {
    this.productVeiw = new ProductsView();
    this.productModel = new ProductsCollection();
    this.productModel
      .getProductsList()
      .then(() =>
        this.productVeiw.renderProducts(this.productModel.productsList)
      );
  }
}
