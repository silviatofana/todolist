/* eslint-disable no-restricted-syntax */
const reorder = (obj) => {
  let count = 0;
  obj.forEach(() => {
    if (count === 0) {
      obj[count].id = 1;
    } else {
      obj[count].id = obj[count - 1].id + 1;
    }
    count += 1;
  });
  return obj;
};

const deleteTask = (taskList, index) => {
  const newTaskList = taskList.filter((task) => task.id !== index);
  const orderedTaskList = reorder(newTaskList);
  return orderedTaskList;
};

export default deleteTask;
