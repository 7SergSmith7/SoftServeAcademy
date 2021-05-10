import ProductsModel from "../model/ProductsModel.js";
import ProductsView from "../view/ProductsView.js";
import SortView from "../view/SortView.js";
import PaginationModel from "../model/PaginationModel.js";
import PaginationView from "../view/PaginationView.js";

export default class ProductsController {
  constructor() {
    this.productVeiw = new ProductsView(this.onProductCartClick);
    this.productModel = new ProductsModel();
    this.paginationView = new PaginationView(this.onPaginationLinkClick);
    this.sortView = new SortView(this.onSortOptionFormClick);
    this.productModel
      .getProductsList()
      .then(() => {
        this.paginationModel = new PaginationModel(
          this.productModel.productsList
        );
      })
      .then(() => {
        this.productVeiw.renderProducts(this.paginationModel.firstPageData());
        this.paginationView.renderPaginationLinks(this.paginationModel.nPages);
      });
  }
  onSortOptionFormClick = ({ target: sortOptionInput }) => {
    this.productModel.sortPrice(sortOptionInput.value);
    this.paginationModel.reSplitByPages(this.productModel.productsList);
    this.productVeiw.renderProducts(this.paginationModel.firstPageData());
    this.paginationView.renderPaginationLinks(this.paginationModel.nPages);
  };

  onPaginationLinkClick = ({ target: paginationPage }) => {
    this.productVeiw.renderProducts(
      this.paginationModel.getPageList(paginationPage.id)
    );

    this.paginationView.renderPaginationLinks(
      this.paginationModel.nPages,
      paginationPage.id
    );
  };

  onProductCartClick = ({ target: productId }) => {
    if (!isNaN(productId.dataset.id))
      this.productVeiw.addModalProduct(
        this.productModel.getProductById(productId.dataset.id)
      );
    if (productId.type === "button")
      this.productModel.addProductToCart(
        this.productModel.getProductById(productId.dataset.id)
      );
  };
}
