class ToDoList {
  constructor() {
    this.getTasks();
  }

  updateTasks() {
    localStorage.setItem('toDoList', JSON.stringify(this.listArray));
  }

  getTasks() {
    this.listArray = JSON.parse(localStorage.getItem('toDoList')) || [];
  }

    showTasks = () => JSON.parse(localStorage.getItem('toDoList')) || [];

    setEdit(i) {
      const task = this.listArray.find(
        (item) => parseInt(item.index, 10) === parseInt(i, 10),
      );
      task.edit = true;
      this.updateTasks();
    }

    // add a task
    addTask(description) {
      const task = {
        description,
        completed: false,
        index: this.listArray.length + 1,
        edit: false,
      };
      this.listArray = [...this.listArray, task];
      this.updateTasks();
    }

    // remove a task
    clearCompleted() {
      this.listArray = this.listArray.filter((item) => item.completed !== true);
      if (this.listArray.length > 0) {
        this.listArray = this.listArray.map((list, i) => {
          list.index = i + 1;
          return list;
        });
      }
      this.updateTasks();
    }

    // remove a task
    removeTask(index) {
      this.listArray = this.listArray.filter((item) => item.index !== index);
      this.listArray = this.listArray.map((list, i) => {
        list.index = i + 1;
        return list;
      });
      this.updateTasks();
    }

    // Edit a task
    editTask(index, description) {
      this.listArray[index - 1].description = description;
      this.listArray[index - 1].edit = false;
      this.updateTasks();
    }

    changeComplete(i) {
      const status = this.listArray[i - 1].completed;
      this.listArray[i - 1] = {
        ...this.listArray[i - 1],
        completed: !status,
      };
      this.updateTasks();
    }
}

export default ToDoList;