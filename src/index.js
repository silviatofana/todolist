// css files here
import './style.css';

const tasks = [
  {
    id: 1,
    task: 'Morning Run',
    completed: true,
  },
  {
    id: 2,
    task: '30 Push Up',
    completed: true,
  },
  {
    id: 3,
    task: 'Morning Walk',
    completed: false,
  },
  {
    id: 4,
    task: '30 Squats',
    completed: false,
  },
];

const toDo = document.getElementById('todo-list');

function TaskObject() {
  let workout = '';
  tasks.forEach((job) => {
    workout += `
              <div class="list">
                  <input type="checkbox">
                  <p>${job.task}</p>
             
         <a><i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
                  </a>
              </div>`;
  });
  toDo.innerHTML = workout;
}
TaskObject();
