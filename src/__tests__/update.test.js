import { update, clearAllComplete } from '../modules/update.js';

import LocalStorage from '../__mocks__/storage.js';

const store = new LocalStorage();
let taskList = store.getItems();

describe('Update task completed status and Clear all task completed', () => {
  test('when task is updated, it should have completed at True ', () => {
    taskList = update(taskList, 3);
    expect(taskList[2].completed).toBe(true);
  });

  test('when clear all completed,tasklist should not contain completed tasks',
    () => {
      taskList = clearAllComplete(taskList);
      taskList.forEach((task) => expect(task.completed).toBe(false));
    });
});