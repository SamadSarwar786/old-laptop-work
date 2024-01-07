//challege

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },

    {
      text: "Clean Yard",
      completed: false,
    },
    {
      text: "Film Course",
      completed: false,
    },
  ],
  getTasksTodo() {
       return this.tasks.filter((task) => !task.completed )
  },
};

console.log(tasks.getTasksTodo());
;
