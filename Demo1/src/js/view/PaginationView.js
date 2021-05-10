export default class PaginationView {
  constructor(onPaginationLinkClick) {
    this.paginationContainer = document.querySelector(".pagination");
    this.paginationContainer.addEventListener("click", onPaginationLinkClick);
  }

  renderPaginationLinks(nPages, nActivePage = 1) {
    this.paginationContainer.innerHTML = "";
    for (let i = 1; i <= nPages; i++) {
      if (i === +nActivePage)
        this.paginationContainer.innerHTML += this.getActivePaginationLinksTemplate(
          i
        );
      else
        this.paginationContainer.innerHTML += this.getPaginationLinksTemplate(
          i
        );
    }
  }
  getPaginationLinksTemplate(num) {
    return `<li class="page-item" "><a class="page-link" id="${num}" href="#${num}">${num}</a></li>`;
  }

  getActivePaginationLinksTemplate(num) {
    return `<li class="page-item active" "><a class="page-link" id="${num} href="#${num}">${num}</a></li>`;
  }
}
