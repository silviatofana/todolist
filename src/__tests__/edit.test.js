import editTask from '../modules/editTask.js';
import LocalStorage from '../__mocks__/storage.js';

const store = new LocalStorage();
let taskList = store.getItems();

test('Task description should be edited', () => {
  const input = 'My task edited';
  taskList = editTask(taskList, 1, input);
  expect(taskList[0].description).toBe('My task edited');
});
