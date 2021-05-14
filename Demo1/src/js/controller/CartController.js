import CartModel from "../model/CartModel.js";
import CartView from "../view/CartView.js";

export default class CartController {
  constructor() {
    this.cartVeiw = new CartView();
    this.cartModel = new CartModel();
    this.cartVeiw.renderProductsInCart(this.cartModel.getProductInCart());
    this.cartVeiw.renderTotalInfo(this.cartModel.calculateCartValue());
  }
}
