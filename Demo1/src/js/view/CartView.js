export default class CartView {
  deleteIcon = ".delete-icon";
  btnsChangeQty = ".button_quantity";
  constructor(onDeleteIconClick, onChangeQtyClick) {
    this.prodcutsListInCart = document.querySelector(".shopping-list");
    this.cartTotalInfo = document.querySelector(".cart-total-info");
    this.onDeleteIconClick = onDeleteIconClick;
    this.onChangeQtyClick = onChangeQtyClick;
  }

  addListeners() {
    [...document.querySelectorAll(this.deleteIcon)].forEach((icon) =>
      icon.addEventListener("click", this.onDeleteIconClick)
    );
    [...document.querySelectorAll(this.btnsChangeQty)].forEach((btn) =>
      btn.addEventListener("click", this.onChangeQtyClick)
    );
  }

  renderProductsInCart(list) {
    this.prodcutsListInCart.innerHTML = "";
    this.prodcutsListInCart.innerHTML += list
      .map((product) => this.getProductInCartTemplate(product))
      .join("");
    if (this.prodcutsListInCart.innerHTML != "") this.addListeners();
    else this.prodcutsListInCart.innerHTML = "No products in Cart.";
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
      <div class="card-info-cart">
      <p class="card-title" data-id="${product.id}">
        ${product.productName}
      </p>
      <p class="card-price" data-id="${product.id}">
        <b>${product.price} UAH</b>
      </p>
      </div>
      <div class="input-group  quantity-goods cart">
              <input type="button" value="-" data-id="${product.id}" class="button_quantity">
              <input  class="product-count" id="${product.id}" name="quantity" value="${product.quantity}" title="qty">
              
              <input type="button" value="+" data-id="${product.id}" class="button_quantity">
       </div>
     
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" data-id="${product.id}" class="bi bi-bag-x delete-icon" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708z"/>
       <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
     </svg>
   
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
  getCountProductInput(id) {
    return parseInt(document.getElementById(id).value);
  }
  setCountProductInput(id, newValue) {
    document.getElementById(id).value = newValue;
  }

  getNewQtyInProductCart(btn) {
    let countProduct = this.getCountProductInput(btn.dataset.id);

    if (btn.value == "-" && countProduct > 0) countProduct--;
    else if (btn.value == "+") countProduct++;
    this.setCountProductInput(btn.dataset.id, countProduct);
    return countProduct;
  }
}
