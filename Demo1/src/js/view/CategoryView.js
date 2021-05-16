export default class CategoryView {
  constructor(onCategoryFormClick) {
    this.categoriesList = document.querySelector(".categories-products");
    this.categoryForm = document.querySelector(".category-blocks-form");
    this.categoryForm.addEventListener("change", onCategoryFormClick);
  }

  renderCategories(list) {
    this.clearCategoriesList();
    this.categoriesList.innerHTML += list
      .map((category) => this.getCategoryTemplate(category))
      .join("");
  }

  clearCategoriesList() {
    this.categoriesList.innerHTML = "";
  }

  getCategoryTemplate(category) {
    return ` <div class="category-blocks-radio">
        <input
          type="radio"
          class="radio-input"
          id="${category}"
          name="category"
          value="${category}"
        />
        <label class="category-option" for="${category}">
          <span>${category}</span></label
        >
      </div>`;
  }
  resetForm() {
    this.categoryForm.reset();
  }
}
