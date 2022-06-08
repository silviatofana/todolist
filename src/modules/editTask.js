const editTask = (tasklist, index, input) => {
  tasklist.forEach((item) => {
    if (item.id === index) {
      item.description = input;
    }
  });
  return tasklist;
};

export default editTask;
