// css files here
import './style.css';
import TodoList from './todolist.js';
import * as Element from './elements.js';

const newTask = new TodoList();

const getCheck = (element) => ` ${
  element.completed
    ? `<input type="checkbox" aria-label="${element.index}" data-name="status" name="check" checked>`
    : `<input type="checkbox" aria-label="${element.index}" data-name="status" name="check">`
} `;

const showTaskItem = (element) => `<div class="list show">
                ${getCheck(element)}                
                <p class="taskdescription ${
  element.completed ? 'strike' : ''
}">${element.description}</p>
               <i class="fa fa-ellipsis-v fa-2x menu-icon" aria-label="${
  element.index
}"  data-name="edit"></i>
          </div>`;

const editDescription = (element) => `<div class="list edit">
                 ${getCheck(element)} 
                <input type="text" class="desc" value="${
  element.description
}" aria-label ="${element.index}" >
                <i class="fa fa-trash-o fa-2x" aria-label="${
  element.index
}"  data-name="delete"></i>
          </div>`;

const refresh = () => {
  const list = newTask.listArray;
  let content = '';
  if (list) {
    list.forEach((element) => {
      content += `${
        element.edit ? editDescription(element) : showTaskItem(element)
      }`;
    });
  }
  Element.listBody.innerHTML = content;
};
refresh();

// Event Listeners
Element.addList.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const val = Element.addList.value;
    if (val) {
      newTask.addTask(val);
      Element.addList.value = '';
      refresh();
    }
  }
});

Element.listBody.addEventListener('click', (e) => {
  if (e.target.nodeName === 'I') {
    if (e.target.dataset.name === 'edit') {
      newTask.setEdit(e.target.ariaLabel);
      refresh();
    } else if (e.target.dataset.name === 'delete') {
      newTask.removeTask(parseInt(e.target.ariaLabel, 10));
      refresh();
    }
  }
});

Element.listBody.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    if (e.target.value) {
      const id = parseInt(e.target.ariaLabel, 10);
      newTask.editTask(id, e.target.value);
      refresh();
    }
  }
});

Element.listBody.addEventListener('change', (e) => {
  if (e.target.dataset.name === 'status') {
    newTask.changeComplete(parseInt(e.target.ariaLabel, 10));
    refresh();
  }
});

Element.clear.addEventListener('click', () => {
  newTask.clearCompleted();
  refresh();
});