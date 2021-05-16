export default class ProductsView {
  btnsAddToCart = ".buy-product";
  constructor(onProductCartClick, onAddToCartClick, onResetBtnClick) {
    this.prodcutsList = document.querySelector(".products-list");
    this.modalContainer = document.querySelector(".modal-product");
    this.resetBtn = document.querySelector(".reset-btn");

    this.onAddToCartClick = onAddToCartClick;
    this.prodcutsList.addEventListener("click", onProductCartClick);
    this.resetBtn.addEventListener("click", onResetBtnClick);
  }

  renderProducts(list) {
    this.clearProductsList();
    this.prodcutsList.innerHTML += list
      .map((product) => this.getProductTemplate(product))
      .join("");
    this.addListeners();
  }

  getProductTemplate(product) {
    return `<div class="col-12 col-sm-6 col-md-4 col-lg-3" data-id="${product.id}">
      <div class="card"  data-id="${product.id}" >
      <div class="card-img align-self-center" data-id="${product.id}">
        <img  src="${product.imgLink}" data-id="${product.id}" class="card-img-top" alt="${product.productName}" /></div>
        <div  class="card-body" data-id="${product.id}">
        <div  class="product_title" data-id="${product.id}">  <p  class="card-title" data-id="${product.id}">${product.productName}</p></div>
          <p class="card-price" data-id="${product.id}"><b>${product.price} UAH</b></p>
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
    this.showProduct();
  }
  showProduct() {
    $("#productModal").modal("show");
    this.addListeners();
  }

  addListeners() {
    [...document.querySelectorAll(this.btnsAddToCart)].forEach((btn) =>
      btn.addEventListener("click", this.onAddToCartClick)
    );
  }

  getModalProductTemplate(product) {
    return ` <div class="modal fade" id="productModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productModalLabel">${product.productName}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body"> <img src="${product.imgLink}" class="card-img-top" alt="${product.productName}" /></div>
        <div class="modal-info">
        <p class="product-manufacture" ><b>Manufacture:</b> ${product.manufacture}</p>
        <p class="product-units" ><b>Units:</b> ${product.units}</p>
        <p class="product-price" ><b>Price:</b> ${product.price} UAH</p>
        </div>
        <div class="modal-footer">
          <button type="button" data-id="${product.id}" data-bs-dismiss="modal" class="btn btn-primary buy-product">
           Buy
          </button>
        </div>
      </div>
    </div>
  </div>`;
  }
}
