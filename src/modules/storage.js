export default class LocalStorage {
  constructor() {
    this.store = [];
  }

    setItems = (obj) => {
      localStorage.setItem('taskList', JSON.stringify(obj));
    };

    getItems = () => {
      this.store = JSON.parse(localStorage.getItem('taskList') || '[]');
      return this.store;
    };
}
