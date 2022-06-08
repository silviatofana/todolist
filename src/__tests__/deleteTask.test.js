import deleteTask from '../modules/deleteTask.js';
import addTask from '../modules/addTask.js';
import LocalStorage from '../__mocks__/storage.js';

const store = new LocalStorage();
let taskList = store.getItems();

describe('delete task from storage', () => {
  taskList = deleteTask(taskList, 2);
  test('check if task deleted', () => {
    expect(taskList.length).toBe(2);
  });
  test('check if task reorder after deleted', () => {
    expect(taskList[0].id).toBe(1);
    expect(taskList[1].id).toBe(2);
  });
  test('check if after delete task, new task id to equal last id + 1', () => {
    const newTask = { description: 'My new task' };
    addTask(taskList, newTask);
    expect(taskList[2].id).toBe(3);
  });
});
