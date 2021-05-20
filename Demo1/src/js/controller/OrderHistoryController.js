import OrderHistoryModel from "../model/OrderHistoryModel.js";
import OrderHistoryView from "../view/OrderHistoryView.js";

export default class OrderHistoryController {
  constructor() {
    this.orderHistoryModel = new OrderHistoryModel();
    this.orderHistoryView = new OrderHistoryView(
      this.orderHistoryModel.orderHistory
    );
  }
}
