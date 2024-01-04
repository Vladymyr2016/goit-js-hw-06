class Storage {
  #items = [];

  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    const index = this.#items.findIndex(item => item === itemToRemove);
    this.#items.splice(index, 1);
    return this.#items;
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
console.log(storage.removeItem('Prolonger'));
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
