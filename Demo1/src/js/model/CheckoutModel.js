import { TELEGRAM_TOKEN } from "../telegramConfig.js";
import { TELEGRAM_CHAT_ID } from "../telegramConfig.js";
export default class CheckoutModel {
  constructor() {
    this.productsInCart = this.getCartInfo();
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
    localStorage.SetItem("productCart", JSON.stringify([]));
  }
}
