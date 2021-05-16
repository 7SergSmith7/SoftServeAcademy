export default class SearchView {
  constructor(onSearchBtnClick) {
    this.searchInput = document.querySelector(".search-input");
    this.searchBtn = document.querySelector(".search-btn");
    this.searchBtn.addEventListener("click", onSearchBtnClick);
  }
  getSearchInput() {
    return this.searchInput.value;
  }
  clearSearchInput() {
    this.searchInput.value = "";
  }
}
