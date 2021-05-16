import ProductsModel from "../model/ProductsModel.js";
import ProductsView from "../view/ProductsView.js";
import SortView from "../view/SortView.js";
import PaginationModel from "../model/PaginationModel.js";
import PaginationView from "../view/PaginationView.js";
import CategoryView from "../view/CategoryView.js";
import SearchView from "../view/SearchView.js";
export default class ProductsController {
  constructor() {
    this.productVeiw = new ProductsView(
      this.onProductCartClick,
      this.onAddToCartClick,
      this.onResetBtnClick
    );
    this.productModel = new ProductsModel();
    this.paginationView = new PaginationView(this.onPaginationLinkClick);
    this.sortView = new SortView(this.onSortOptionFormClick);
    this.categoryView = new CategoryView(this.onCategoryFormClick);
    this.searchView = new SearchView(this.onSearchBtnClick);
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
        this.categoryView.renderCategories(
          this.productModel.productsCategories
        );
      });
  }
  renderProductsList() {
    this.productVeiw.renderProducts(this.paginationModel.firstPageData());
    this.paginationView.renderPaginationLinks(this.paginationModel.nPages);
  }
  resertForms() {
    this.searchView.clearSearchInput();
    this.productModel.resetOptions();
    this.sortView.resetForm();
    this.categoryView.resetForm();
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
    this.productVeiw.renderProducts(
      this.paginationModel.getPageList(paginationPage.id)
    );

    this.paginationView.renderPaginationLinks(
      this.paginationModel.nPages,
      paginationPage.id
    );
  };

  onProductCartClick = ({ target: productId }) => {
    if (!isNaN(productId.dataset.id) && productId.type != "button")
      this.productVeiw.addModalProduct(
        this.productModel.getProductById(productId.dataset.id)
      );
  };

  onAddToCartClick = ({ target: productId }) => {
    this.productModel.addProductToCart(
      this.productModel.getProductById(productId.dataset.id)
    );
  };
  onSearchBtnClick = (ev) => {
    ev.preventDefault();
    this.productModel.setSearchOption(this.searchView.getSearchInput());
    this.paginationModel.reSplitByPages(this.productModel.productsList);
    this.renderProductsList();
  };
  onResetBtnClick = () => {
    this.resertForms();
    this.paginationModel.reSplitByPages(this.productModel.productsList);
    this.renderProductsList();
  };
}
