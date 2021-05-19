import ProductsModel from "../model/ProductsModel.js";
import ProductsView from "../view/ProductsView.js";

import PaginationModel from "../model/PaginationModel.js";
import PaginationView from "../view/PaginationView.js";

export default class ProductsController {
  constructor() {
    this.productView = new ProductsView(
      this.onProductCartClick,
      this.onAddToCartClick,
      this.onResetBtnClick,
      this.onSortOptionFormClick,
      this.onSearchBtnClick,
      this.onCategoryFormClick,
      this.onChangeQtyClick
    );
    this.productModel = new ProductsModel();
    this.paginationView = new PaginationView(this.onPaginationLinkClick);

    this.viewInit();
  }

  viewInit() {
    this.productModel
      .getProductsList()
      .then(() => {
        this.paginationModel = new PaginationModel(
          this.productModel.productsList
        );
      })
      .then(() => {
        this.productModel.getCategories(this.productModel.productsList);
        this.renderProductsList();
        this.productView.renderCategories(this.productModel.productsCategories);
      });
  }
  renderProductsList() {
    this.productView.renderProducts(this.paginationModel.firstPageData());
    this.paginationView.renderPaginationLinks(this.paginationModel.nPages);
  }
  resetForms() {
    this.productView.clearSearchInput();
    this.productModel.resetOptions();
    this.productView.resetSortForm();
    this.productView.resetCategoryForm();
  }

  onCategoryFormClick = ({ target: categoryOptionInput }) => {
    this.productModel.getProductsByCategory(categoryOptionInput.value);
    this.paginationModel.reSplitByPages(this.productModel.productsList);
    this.renderProductsList();
  };

  onSortOptionFormClick = ({ target: sortOptionInput }) => {
    this.productModel.sortPrice(sortOptionInput.value);
    this.paginationModel.reSplitByPages(this.productModel.productsList);
    this.renderProductsList();
  };

  onPaginationLinkClick = ({ target: paginationPage }) => {
    this.productView.renderProducts(
      this.paginationModel.getPageList(paginationPage.id)
    );

    this.paginationView.renderPaginationLinks(
      this.paginationModel.nPages,
      paginationPage.id
    );
  };

  onProductCartClick = ({ target: productId }) => {
    if (
      !isNaN(productId.dataset.id) &&
      productId.type != "button" &&
      productId.type != "text"
    )
      this.productView.addModalProduct(
        this.productModel.getProductById(productId.dataset.id)
      );
  };

  onAddToCartClick = ({ target: productId }) => {
    this.productModel.addProductToCart(
      productId.dataset.id,
      this.productView.getCountProductInput(productId.dataset.id)
    );
  };
  onSearchBtnClick = (ev) => {
    ev.preventDefault();
    if (this.productView.getSearchInput() != "") {
      this.productModel.setSearchOption(this.productView.getSearchInput());
      this.paginationModel.reSplitByPages(this.productModel.productsList);
      this.productView.resetSortForm();
      this.productView.resetCategoryForm();
      this.renderProductsList();
    }
  };
  onResetBtnClick = () => {
    this.resetForms();
    this.paginationModel.reSplitByPages(this.productModel.productsList);
    this.renderProductsList();
  };
  onChangeQtyClick = ({ target: btn }) => {
    this.productView.changeQtyInProductCart(btn);
  };
}
