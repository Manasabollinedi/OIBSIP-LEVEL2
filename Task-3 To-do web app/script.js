const form = document.getElementById("form");
const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

let tasks = [];

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const title = document.createElement("div");
    const desc = document.createElement("div");
    const deleteBtn = document.createElement("button");

    title.classList.add("task-title");
    title.textContent = task.title;

    desc.classList.add("task-desc");
    desc.textContent = task.description;

    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteTask(index);
    });

    li.appendChild(title);
    li.appendChild(desc);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}

function addTask() {
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();

  if (title !== "" && desc !== "") {
    tasks.push({ title, description: desc });
    renderTasks();
    titleInput.value = "";
    descInput.value = "";
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

addBtn.addEventListener("click", addTask);
