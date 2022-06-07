import createLi from './createLi.js';

const loadTaskList = (taskList) => {
  taskList.sort((a, b) => b.id - a.id)
    .forEach((task) => {
      createLi(task);
    });
};
export default loadTaskList;
