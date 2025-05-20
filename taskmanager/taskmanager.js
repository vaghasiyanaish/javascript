let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  document.getElementById("taskForm").addEventListener("submit", handleFormSubmit);
  document.getElementById("filterPriority").addEventListener("change", displayTasks);
});

function handleFormSubmit(e) {
  e.preventDefault();
  let taskId = document.getElementById("taskId").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let dueDate = document.getElementById("dueDate").value;
  let priority = document.getElementById("priority").value;

  if (!title || !dueDate) {
    alert("Title and due date are required.");
    return;
  }

  if (taskId) {
    editTask(taskId, title, description, dueDate, priority);
  } else {
    addTask(title, description, dueDate, priority);
  }

  clearForm();
  saveTasks();
  displayTasks();
}

function addTask(title, description, dueDate, priority) {
  let task = {
    id: Date.now().toString(),
    title,
    description,
    dueDate,
    priority
  };
  tasks.push(task);
}

function editTask(id, title, description, dueDate, priority) {
  let index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks[index] = { id, title, description, dueDate, priority };
  }
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  displayTasks();
}

function loadTasks() {
  let storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
  displayTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  let filter = document.getElementById("filterPriority").value;
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  let filteredTasks = tasks;
  if (filter !== "all") {
    filteredTasks = tasks.filter(task => task.priority === filter);
  }

  filteredTasks.forEach(task => {
    let div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <div class="task-header">
        <strong>${task.title}</strong>
        <div>
          <button onclick="loadTaskForEdit('${task.id}')">Edit</button>
          <button onclick="deleteTask('${task.id}')">Delete</button>
        </div>
      </div>
      <p>${task.description}</p>
      <p><strong>Due:</strong> ${task.dueDate}</p>
      <p><strong>Priority:</strong> ${task.priority}</p>
    `;
    taskList.appendChild(div);
  });
}

function loadTaskForEdit(id) {
  let task = tasks.find(t => t.id === id);
  if (!task) return;

  document.getElementById("taskId").value = task.id;
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("priority").value = task.priority;
}

function clearForm() {
  document.getElementById("taskForm").reset();
  document.getElementById("taskId").value = "";
}
