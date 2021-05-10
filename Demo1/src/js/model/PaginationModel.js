export default class PaginationModel {
  constructor(products) {
    this.nElementsOnPage = 24;

    this.nPages = Math.ceil(products.length / this.nElementsOnPage);
    this.productsByPages = this.splitByPages(products);
  }

  getPageList(numPage) {
    return this.productsByPages[numPage - 1];
  }

  splitByPages(list) {
    let pagesPag = [];

    for (
      let i = 0, start = 0, end = this.nElementsOnPage;
      i < this.nPages;
      i++
    ) {
      pagesPag.push(list.slice(start, end));

      start += this.nElementsOnPage;
      end += this.nElementsOnPage;
    }

    return pagesPag;
  }
  firstPageData() {
    return this.getPageList(1);
  }
  reSplitByPages(list) {
    this.productsByPages = this.splitByPages(list);
  }
}
