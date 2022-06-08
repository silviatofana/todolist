const addTask = (tasklist, newTask) => {
  newTask.id = tasklist.length + 1 || 1;
  newTask.completed = false;
  tasklist.push(newTask);
  return tasklist;
};

export default addTask;
