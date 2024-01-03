class Category {
  constructor(categoryName, categoryList) {
    this.categoryName = categoryName;
    this.categoryList = categoryList;
  }

  getName() {
    return this.categoryName;
  }

  getList() {
    return this.categoryList;
  }

  setName(newName) {
    this.newName = newName;
  }

  setList(categoryList) {
    this.categoryList = categoryList;
  }
}

export default Category;
