export default class ProductsView {
  constructor(onProductCartClick) {
    this.prodcutsList = document.querySelector(".products-list");
    this.modalContainer = document.querySelector(".modal-product");

    this.prodcutsList.addEventListener("click", onProductCartClick);
  }

  renderProducts(list) {
    this.clearProductsList();
    this.prodcutsList.innerHTML += list
      .map((product) => this.getProductTemplate(product))
      .join("");
  }

  getProductTemplate(product) {
    return `<div class="col-12 col-sm-6 col-md-4 col-lg-3" data-id="${product.id}>
      <div class="card"  data-id="${product.id}" >
        <img data-bs-toggle="modal" data-bs-target="#productModal" src="${product.imgUrl}" data-id="${product.id}" class="card-img-top" alt="${product.title}" />
        <div  class="card-body" data-id="${product.id}">
          <h5 data-bs-toggle="modal" data-bs-target="#productModal" class="card-title" data-id="${product.id}">${product.title}</h5>
          <p data-bs-toggle="modal" data-bs-target="#productModal" class="card-price" data-id="${product.id}">${product.price} UAH</p>
          <button type="button" id="buy-product" data-id="${product.id}" class="btn btn-primary buy-product">Buy</button>
        </div>
      </div>
    </div>`;
  }
  clearProductsList() {
    this.prodcutsList.innerHTML = "";
  }

  addModalProduct(product) {
    this.modalContainer.innerHTML = "";
    this.modalContainer.innerHTML += this.getModalProductTemplate(product);
  }

  getModalProductTemplate(product) {
    return ` <div class="modal fade" id="productModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productModalLabel">${product.title}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body"> <img src="${product.imgUrl}" class="card-img-top" alt="${product.title}" /></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary buy-product">
           Buy
          </button>
        </div>
      </div>
    </div>
  </div>`;
  }
}
