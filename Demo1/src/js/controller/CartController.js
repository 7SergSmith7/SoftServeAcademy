import CartModel from "../model/CartModel.js";
import CartView from "../view/CartView.js";

export default class CartController {
  constructor() {
    this.cartView = new CartView(this.onDeleteIconClick, this.onChangeQtyClick);
    this.cartModel = new CartModel();
    this.loadAndRenderProductsInCart();
  }
  loadAndRenderProductsInCart() {
    this.cartView.renderProductsInCart(this.cartModel.getProductInCart());
    this.cartView.renderTotalInfo(this.cartModel.calculateCartValue());
  }
  onDeleteIconClick = ({ target: deleteIcon }) => {
    this.cartModel.deleteProduct(deleteIcon.dataset.id);
    this.loadAndRenderProductsInCart();
  };

  onChangeQtyClick = ({ target: btn }) => {
    this.cartModel.setNewQtyProduct(
      btn.dataset.id,
      this.cartView.getNewQtyInProductCart(btn)
    );
    this.loadAndRenderProductsInCart();
  };
}
