export default class CheckoutModel {
  constructor() {}

  sendOrderInfo(clientsData) {
    let productsInCart = this.getCartInfo();
    let orderMsgInfo = this.getTemplateMsg(clientsData, productsInCart);
    //   .replaceAll(`<`, `&lt;`)
    //   .replaceAll(`>`, `&gt;`);
    console.log(orderMsgInfo);
    fetch(
      `https://api.telegram.org/bot1719259924:AAFjcqbDCQthYxjfZGnweLk-pXyHu1-8pzo/sendMessage?chat_id=-1001158867115&parse_mode=markdown&text=${orderMsgInfo}`
    );
  }

  getCartInfo() {
    return JSON.parse(localStorage.getItem("productCart"));
  }
  clearLocalStorageCart() {}

  getTemplateClient(clientsData) {
    return `*New order*%0A 
    *Name* : ${clientsData.name}%0A 
    *Email* : ${clientsData.email}%0A 
    *Phone* : ${clientsData.phone}%0A 
    *Cart* :%0A 
    `;
  }

  getTemplateMsg(clientsData, productsInCart) {
    return (
      this.getTemplateClient(clientsData) +
      this.getTemplateOrder(productsInCart)
    );
  }
  getTemplateOrder(productsInCart) {
    return productsInCart
      .map((product) => this.getTemplateProductInCart(product))
      .join("");
  }
  getTemplateProductInCart(product) {
    return `*Product* : ${product.productName} 
    *Qty* : ${product.quantity}%0A 
    `;
  }
}
