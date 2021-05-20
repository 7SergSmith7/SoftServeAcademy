export default class OrderHistoryModel {
  constructor() {
    this.orderHistory = this.getOrderHistory();
    console.log(this.orderHistory);
  }
  getOrderHistory() {
    return JSON.parse(localStorage.getItem("orderHistory"));
  }
}
