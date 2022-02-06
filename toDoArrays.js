const list = [];

const STATUS = {
  DEFAULT_TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

const PRIORITY = {
  DEFAULT_LOW_PRIORITY: "Low",
  HIGH_PRIORITY: "High",
};

function addTask(task) {
  let isTaskExist = list.find((item) => item.name === task);
  if (isTaskExist) {
    console.log("This task already in the list");
  } else {
    list.push({
      name: task,
      status: STATUS.DEFAULT_TO_DO,
      priority: PRIORITY.DEFAULT_LOW_PRIORITY,
    });
  }
}

function deleteTask(task) {
  list.splice(list.findIndex((item) => item.name === task),1);
}

function changeStatus(task, status) {
  let isTaskExist = list.find((item) => item.name === task);
  if (!isTaskExist) {
    console.log("This task does not exist");
  } else {
    list[list.findIndex((item) => item.name === task)].status = status;
  }
}

function showList() {
  let todo = "";
  let inProgress = "";
  let done = "";
  let noTask = "\t-\n";
  for (key of list) {
    if (key.status === STATUS.DEFAULT_TO_DO) {
      todo += "\t" + `${key.name}` + "\n";
    } else if (key.status === STATUS.IN_PROGRESS) {
      inProgress += "\t" + `${key.name}` + "\n";
    } else if (key.status === STATUS.DONE) {
      done += "\t" + `${key.name}` + "\n";
    }
  }

  console.log("To do:\n" + `${todo || noTask}`);
  console.log("In progress:\n" + `${inProgress || noTask}`);
  console.log("Done:\n" + `${done || noTask}`);
}

addTask("GET UP");
addTask("LEARN");
addTask("SLEEP");
changeStatus("SLEEP", "In Progress");
//changeStatus('SLEEPP','In progress');
//deleteTask('SLEEP');
//console.log(list);
showList();
