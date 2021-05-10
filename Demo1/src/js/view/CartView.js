export default class CartView {
  constructor() {
    this.prodcutsListInCart = document.querySelector(".shopping-list");
  }

  renderProductsInCart(list) {
    this.prodcutsListInCart.innerHTML += list
      .map((product) => this.getProductInCartTemplate(product))
      .join("");
  }
  getProductInCartTemplate(product) {
    return `<div
      class="col product-item d-inline-flex justify-content-between"
      data-id="${product.id}"
    >
      <img
        src="${product.imgUrl}"
        data-id="${product.id}"
        class="card-img-cart"
        alt="${product.title}"
      />

      <h6 class="card-title" data-id="${product.id}">
        ${product.title}
      </h6>
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
}
