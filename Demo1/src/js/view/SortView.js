export default class SortView {
  constructor(onSortOptionFormClick) {
    this.sortForm = document.querySelector(".options-blocks-form");
    this.sortForm.addEventListener("change", onSortOptionFormClick);
  }
}
