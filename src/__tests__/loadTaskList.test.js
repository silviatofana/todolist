/**
 *@jest-environment jsdom
 */

import loadTaskList from '../modules/loadTaskList.js';
import LocalStorage from '../__mocks__/storage.js';

const store = new LocalStorage();

beforeAll(() => {
  document.body.innerHTML = '<div class="container">'
         + '<h1>Today\'s To Do <i class="fa-solid fa-arrows-rotate"></i></h1>'
         + '<form>'
           + '<input type="text" class="addToDo" required placeholder="Add to your list...">'
           + '<i class="fa-solid fa-arrow-turn-down"></i>'
         + '</form>'
         + '<ul class="taskList"></ul>'
         + '<p class="clearButton">Clear all completer</p>'
       + '</div>';
});

test('should load all taskList and dispalay them in DOM', () => {
  loadTaskList(store.getItems());
  expect(document.querySelectorAll('.taskList li').length).toBe(3);
});