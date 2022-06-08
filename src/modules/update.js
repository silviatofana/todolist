const update = (tasklist, index) => {
  tasklist.forEach((item) => {
    if (item.id === index) {
      if (item.completed) {
        item.completed = false;
      } else {
        item.completed = true;
      }
    }
  });
  return tasklist;
};

const clearAllComplete = (tasklist) => {
  const filteredtaskList = tasklist.filter((item) => item.completed === false);
  return filteredtaskList;
};

export { update, clearAllComplete };
