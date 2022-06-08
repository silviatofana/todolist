import './style.css';
import deleteTask from './modules/deleteTask.js';
import addTask from './modules/addTask.js';
import createLi from './modules/createLi.js';
import loadTaskList from './modules/loadTaskList.js';
import editTask from './modules/editTask.js';
import { update, clearAllComplete } from './modules/update.js';
import LocalStorage from './modules/storage.js';

const store = new LocalStorage();
loadTaskList(store.getItems());

const addToDo = document.querySelector('.addToDo');
const form = document.querySelector('form');

form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (addToDo.value === '') {
      addToDo.setCustomValidity('Please add task description.');
    } else {
      e.preventDefault();
      const tasklist = store.getItems();
      const newTask = { description: addToDo.value };
      const updatedList = addTask(tasklist, newTask);
      createLi(newTask);
      addToDo.value = '';
      store.setItems(updatedList);
    }
  }
});

document.addEventListener('click', (e) => {
  const tasklist = store.getItems();
  if (e.target.matches('.fa-trash-can')) {
    let index = e.target.parentElement.classList[0];
    index = parseInt(index, 10);
    const newTasklist = deleteTask(tasklist, index);
    store.setItems(newTasklist);
    window.location.reload();
  } else if (e.target.matches('.taskList input[type="text"]')) {
    const element = e.target.parentElement.querySelector('i');
    element.classList.toggle('fa-trash-can');
    element.classList.toggle('fa-ellipsis-vertical');
    e.target.parentElement.classList.toggle('active');
    e.target.classList.toggle('active');
    e.target.addEventListener('input', (event) => {
      let index = event.target.parentElement.classList[0];
      index = parseInt(index, 10);
      const input = event.target.value;
      const editedTaskList = editTask(tasklist, index, input);
      store.setItems(editedTaskList);
    });
  } else if (e.target.matches('.taskList input[type="checkbox"]')) {
    e.target.addEventListener('change', (event) => {
      let index = event.target.parentElement.classList[0];
      index = parseInt(index, 10);
      const updatedList = update(tasklist, index);
      store.setItems(updatedList);
      if (!e.target.checked) {
        e.target.parentElement.classList.remove('checked');
      } else {
        e.target.parentElement.classList.add('checked');
      }
    });
  } else if (e.target.matches('.clearButton')) {
    const filteredList = clearAllComplete(tasklist);
    store.setItems(filteredList);
    window.location.reload();
  }
});
