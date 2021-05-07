export default class ProductsView {
  constructor() {
    this.prodcutsList = document.querySelector(".products-list");
  }

  renderProducts(list) {
    this.prodcutsList.innerHTML += list
      .map((product) => this.getProductTemplate(product))
      .join("");
  }

  getProductTemplate(product) {
    return `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card">
        <img src="${product.imgUrl}" class="card-img-top" alt="${product.title}" />
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-price">${product.price}</p>
          <a href="#" class="btn btn-primary">Buy</a>
        </div>
      </div>
    </div>`;
  }
}
