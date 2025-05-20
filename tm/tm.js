let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

// --- Utility ---
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// --- CRUD Operations ---
function addTask(e) {
    e.preventDefault();
    const id = document.getElementById('taskId').value;
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (!title || !dueDate || !priority) {
        alert('Please fill in all required fields.');
        return;
    }

    if (id) {
        // Edit existing
        const idx = tasks.findIndex(t => t.id === id);
        if (idx !== -1) {
            tasks[idx] = { id, title, description, dueDate, priority };
        }
    } else {
        // Add new
        tasks.push({
            id: Date.now().toString(),
            title,
            description,
            dueDate,
            priority
        });
    }
    saveTasks();
    clearForm();
    displayTasks();
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    document.getElementById('taskId').value = task.id;
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('dueDate').value = task.dueDate;
    document.getElementById('priority').value = task.priority;
    document.getElementById('addBtn').textContent = 'Update Task';
}

function deleteTask(id) {
    if (!confirm('Delete this task?')) return;
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    displayTasks();
    clearForm();
}

// --- Display & Filtering ---
function displayTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    let filtered = [...tasks];

    // Priority filter
    const filterPriority = document.getElementById('filterPriority').value;
    if (filterPriority) {
        filtered = filtered.filter(t => t.priority === filterPriority);
    }

    // Search filter
    const search = document.getElementById('searchInput').value.trim().toLowerCase();
    if (search) {
        filtered = filtered.filter(t => t.title.toLowerCase().includes(search));
    }

    if (filtered.length === 0) {
        list.innerHTML = '<li style="text-align:center;color:#888;">No tasks found.</li>';
        return;
    }

    filtered.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.priority}`;
        li.innerHTML = `
            <div class="task-title">${task.title}</div>
            <div class="task-desc">${task.description || ''}</div>
            <div class="task-meta">
                Due: ${task.dueDate} | 
                Priority: <span style="text-transform:capitalize">${task.priority}</span>
            </div>
            <div class="task-actions">
                <button onclick="editTask('${task.id}')">✏️</button>
                <button class="delete" onclick="deleteTask('${task.id}')">🗑️</button>
            </div>
        `;
        list.appendChild(li);
    });
}

function clearForm() {
    document.getElementById('taskForm').reset();
    document.getElementById('taskId').value = '';
    document.getElementById('addBtn').textContent = 'Add Task';
}

// --- Event Listeners ---
document.getElementById('taskForm').addEventListener('submit', addTask);
document.getElementById('filterPriority').addEventListener('change', displayTasks);
document.getElementById('searchInput').addEventListener('input', displayTasks);

// --- Initial Load ---
displayTasks();