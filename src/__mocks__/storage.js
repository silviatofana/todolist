export default class LocalStorage {
  constructor() {
    this.store = [
      { id: 1, description: 'task 1', completed: false },
      { id: 2, description: 'task 2', completed: false },
      { id: 3, description: 'task 3', completed: false },
    ];
  }

  getItems() {
    return this.store;
  }

  setItems(value) {
    this.store.push(value);
  }
}