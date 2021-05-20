export default class OrderHistoryView {
  constructor(orderHistory) {
    this.orderHistoryBlock = document.querySelector(".order-history-list");
    this.renderOrderHistory(orderHistory);
  }
  renderOrderHistory(orderHistory) {
    this.orderHistoryBlock.innerHTML += orderHistory
      .map((order) => this.getTemplateOrder(order))
      .join("");
  }
  getTemplateOrder(order) {
    return (
      `<div class="col order-item d-flex justify-content-between">
    <div class="client-info"><p><b>Name</b>: ${order.client.name}</p> <p><b>Email</b>: ${order.client.email}</p> <p><b>Phone</b>: ${order.client.phone}</p> </div>
    <div class="order-products">
    
      ` +
      order.cart.map((product) => this.getTemplateProduct(product)).join("") +
      `
    
    </div>
    <div class="input-group  quantity-goods cart">
          <p><b>Total: ${order.total} UAH</b></p>
     </div>

  </div>`
    );
  }

  getTemplateProduct(product) {
    return `<p>${product.productName} <b>${product.quantity} X ${product.price} UAH</b></p>`;
  }
}
