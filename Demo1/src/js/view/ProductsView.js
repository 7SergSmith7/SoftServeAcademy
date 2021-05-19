export default class ProductsView {
  btnsAddToCart = ".buy-product";
  btnsChangeQty = ".button_quantity";

  constructor(
    onProductCartClick,
    onAddToCartClick,
    onResetBtnClick,
    onSortOptionFormClick,
    onSearchBtnClick,
    onCategoryFormClick,
    onChangeQtyClick
  ) {
    this.categoriesList = document.querySelector(".categories-products");
    this.categoryForm = document.querySelector(".category-blocks-form");
    this.searchInput = document.querySelector(".search-input");
    this.searchBtn = document.querySelector(".search-btn");
    this.prodcutsList = document.querySelector(".products-list");
    this.modalContainer = document.querySelector(".modal-product");
    this.resetBtn = document.querySelector(".reset-btn");
    this.sortForm = document.querySelector(".options-blocks-form");
    // this.productsCountInput;

    this.onChangeQtyClick = onChangeQtyClick;
    this.onAddToCartClick = onAddToCartClick;
    this.sortForm.addEventListener("change", onSortOptionFormClick);
    this.prodcutsList.addEventListener("click", onProductCartClick);
    this.resetBtn.addEventListener("click", onResetBtnClick);
    this.categoryForm.addEventListener("change", onCategoryFormClick);
    this.searchBtn.addEventListener("click", onSearchBtnClick);
  }

  renderProducts(list) {
    this.clearProductsList();
    if (list == undefined)
      this.prodcutsList.innerHTML += "No product in this Category";
    else {
      this.prodcutsList.innerHTML += list
        .map((product) => this.getProductTemplate(product))
        .join("");
      this.addListeners();
    }
  }

  getProductTemplate(product) {
    return `<div class="col-12 col-sm-6 col-md-4 col-lg-3" data-id="${product.id}">
      <div class="card"  data-id="${product.id}" >
      <div class="card-img align-self-center" data-id="${product.id}">
        <img  src="${product.imgLink}" data-id="${product.id}" class="card-img-top" alt="${product.productName}" /></div>
        <div  class="card-body" data-id="${product.id}">
        <div  class="product_title" data-id="${product.id}">  <p  class="card-title" data-id="${product.id}">${product.productName}</p></div>
          <p class="card-price" data-id="${product.id}"><b>${product.price} UAH</b></p>
          <div class="footer-card d-flex">
            <div class="input-group  quantity-goods">
              <input type="button" value="-" data-id="${product.id}" class="button_quantity">
              <input  class="product-count" id="${product.id}" name="quantity" value="1" title="qty">
              <input type="button" value="+" data-id="${product.id}" class="button_quantity">
            </div>
            <button type="button" id="buy-product" data-id="${product.id}" class="btn btn-primary buy-product">Buy</button>
          </div>
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
    [...document.querySelectorAll(this.btnsChangeQty)].forEach((btn) =>
      btn.addEventListener("click", this.onChangeQtyClick)
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
        <div class="input-group  quantity-goods">
        <input type="button" value="-" data-id="${product.id}" class="button_quantity">
        <input  class="product-count" id="${product.id}" name="quantity" value="1" title="qty">
        <input type="button" value="+" data-id="${product.id}" class="button_quantity">
      </div>
          <button type="button" data-id="${product.id}" data-bs-dismiss="modal" class="btn btn-primary buy-product">
           Buy
          </button>
        </div>
      </div>
    </div>
  </div>`;
  }

  resetSortForm() {
    this.sortForm.reset();
  }
  getSearchInput() {
    return this.searchInput.value;
  }
  clearSearchInput() {
    this.searchInput.value = "";
  }

  renderCategories(list) {
    this.clearCategoriesList();
    this.categoriesList.innerHTML += list
      .map((category) => this.getCategoryTemplate(category))
      .join("");
  }

  clearCategoriesList() {
    this.categoriesList.innerHTML = "";
  }

  getCategoryTemplate(category) {
    return ` <div class="category-blocks-radio">
        <input
          type="radio"
          class="radio-input"
          id="${category}"
          name="category"
          value="${category}"
        />
        <label class="category-option" for="${category}">
          <span>${category}</span></label
        >
      </div>`;
  }
  resetCategoryForm() {
    this.categoryForm.reset();
  }
  getCountProductInput(id) {
    return parseInt(document.getElementById(id).value);
  }
  setCountProductInput(id, newValue) {
    document.getElementById(id).value = newValue;
  }

  changeQtyInProductCart(btn) {
    let countProduct = this.getCountProductInput(btn.dataset.id);
    if (btn.value == "-" && countProduct > 0) countProduct--;
    else if (btn.value == "+") countProduct++;
    this.setCountProductInput(btn.dataset.id, countProduct);
  }
}
