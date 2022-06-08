import addTask from '../modules/addTask.js';
import LocalStorage from '../__mocks__/storage.js';

const store = new LocalStorage();
let taskList = store.getItems();
const newTask = { description: 'My new task' };

describe('Add new task to storage', () => {
  taskList = addTask(taskList, newTask);

  test('chech new task added properly in taskList', () => {
    expect(taskList[3].description).toBe('My new task');
  });
  test('check completed is false by default', () => {
    expect(taskList[3].completed).toBe(false);
  });
  test('check Id is order from 1', () => {
    expect(taskList[3].id).toBe(4);
    expect(taskList[0].id).toBe(1);
  });
});
