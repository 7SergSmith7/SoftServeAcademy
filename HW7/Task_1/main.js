// Task 1

class PaginationHelper {
  constructor(itemsArray, itemOnPage) {
    this.items = itemsArray;
    this.onPage = itemOnPage;
    this.pagesWithItems = this.fillPages();
  }

  pageCount() {
    return this.pagesWithItems.length;
  }

  itemCount() {
    return this.items.length;
  }

  pageItemCount(n) {
    return n < this.pagesWithItems.length ? this.pagesWithItems[n].length : -1;
  }

  pageIndex(n) {
    return n < this.items.length && n >= 0 ? parseInt(n / this.onPage) : -1;
  }

  fillPages() {
    let sliced_array = [];

    for (let i = 0; i < this.items.length; i += this.onPage) {
      sliced_array.push(this.items.slice(i, i + this.onPage));
    }
    return sliced_array;
  }
}

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

console.log(helper.pagesWithItems);

console.log(helper.pageCount()); // должно == 2

console.log(helper.itemCount()); // должно == 6

console.log(helper.pageItemCount(0)); // должно == 4

console.log(helper.pageItemCount(1)); // последняя страница - следует == 2

console.log(helper.pageItemCount(2)); // должно == -1, так как страница недействительна

// // pageIndex принимает индекс элемента и возвращает страницу, которой он принадлежит

console.log(helper.pageIndex(5)); // должен == 1 (индекс, отсчитываемый от нуля)

console.log(helper.pageIndex(2)); // должно == 0

console.log(helper.pageIndex(20)); // должно == -1

console.log(helper.pageIndex(-10)); // должно == -1
