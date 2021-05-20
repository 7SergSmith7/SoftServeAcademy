import { TELEGRAM_TOKEN } from "../telegramConfig.js";
import { TELEGRAM_CHAT_ID } from "../telegramConfig.js";
export default class CheckoutModel {
  constructor() {
    this.productsInCart = this.getCartInfo();
    this.order;
  }

  sendOrderInfo(orderMsgInfo) {
    fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&parse_mode=markdown&text=${orderMsgInfo}`
    );
  }

  getCartInfo() {
    return JSON.parse(localStorage.getItem("productCart"));
  }
  clearLocalStorageCart() {
    localStorage.setItem("productCart", JSON.stringify([]));
  }

  creatOrder(clientInfo) {
    let productInCart = this.getCartInfo().map((product) => ({
      id: product.id,
      productName: product.productName,
      quantity: product.quantity,
      price: +product.price,
    }));
    let totalValue = productInCart
      .map((product) => +product.price * +product.quantity)
      .reduce((a, b) => a + b);
    this.order = {
      client: clientInfo,
      cart: productInCart,
      total: totalValue,
    };
  }
  getOrder() {
    return this.order;
  }

  updateLocalOrderHistory() {
    this.clearLocalStorageCart();
    let orderHistory = JSON.parse(localStorage.getItem("orderHistory"));
    if (orderHistory === null) {
      this.creatLocalOrder();
      orderHistory = [];
    }
    orderHistory.push(this.order);

    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
  }

  creatLocalOrder() {
    let orderHistoryEmpty = [];
    localStorage.setItem("orderHistory", JSON.stringify(orderHistoryEmpty));
  }
}
