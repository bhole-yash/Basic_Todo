const todoList = document.getElementById("todo-list");
const addTaskForm = document.getElementById("add-task-form");
const newTaskInput = document.getElementById("new-task-input");
const addTaskBtn = document.getElementById("add-task-btn");

addTaskBtn.addEventListener("click", function () {
  const newTaskText = newTaskInput.value.trim();
  if (newTaskText) {
    const newTask = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      this.parentNode.classList.toggle("completed");
    });
    const taskText = document.createElement("span");
    taskText.innerText = newTaskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", function () {
      this.parentNode.remove();
    });
    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteBtn);
    todoList.appendChild(newTask);
    newTaskInput.value = "";
  }
});
