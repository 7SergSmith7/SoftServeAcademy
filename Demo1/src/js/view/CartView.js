export default class CartView {
  constructor() {
    this.prodcutsListInCart = document.querySelector(".shopping-list");
    this.cartTotalInfo = document.querySelector(".cart-total-info");
  }

  renderProductsInCart(list) {
    this.prodcutsListInCart.innerHTML += list
      .map((product) => this.getProductInCartTemplate(product))
      .join("");
  }
  getProductInCartTemplate(product) {
    return `<div
      class="col product-item d-flex justify-content-between"
      data-id="${product.id}"
    >
      <img
        src="${product.imgLink}"
        data-id="${product.id}"
        class="card-img-cart"
        alt="${product.title}"
      />

      <p class="card-title" data-id="${product.id}">
        ${product.productName}
      </p>
      <p class="card-price" data-id="${product.id}">
        ${product.price} UAH
      </p>
      <button
        type="button"
        id="delete-product"
        data-id="${product.id}"
        class="btn btn-primary delete"
      >
        Delete
      </button>
    </div>`;
  }

  renderTotalInfo(totalValue) {
    this.cartTotalInfo.innerHTML = "";
    this.cartTotalInfo.innerHTML += this.getTotalInfoTemplate(totalValue);
  }

  getTotalInfoTemplate(totalValue) {
    return `
    <p><b>Total:</b></p>
    <p><b>${totalValue} UAH</b></p>`;
  }
}
