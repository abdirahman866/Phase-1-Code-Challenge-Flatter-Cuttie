// Sample tasks (simulating server data)
const tasks = [
    { id: 1, text: "Learn JavaScript", completed: false },
    { id: 2, text: "Build a project", completed: false }
];

// DOM Elements
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

// Event listeners
addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);

// Functions
function renderTasks() {
    taskList.innerHTML = ''; // Clear current list
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        li.classList.toggle('completed', task.completed);
        li.innerHTML = `
            <span>${task.text}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const newTaskText = newTaskInput.value.trim();
    if (newTaskText) {
        const newTask = { id: Date.now(), text: newTaskText, completed: false };
        tasks.push(newTask);
        newTaskInput.value = ''; // Clear input
        renderTasks(); // Re-render task list
    }
}

function handleTaskClick(event) {
    const li = event.target.closest('li');
    if (event.target.classList.contains('delete')) {
        deleteTask(li);
    } else {
        toggleTaskCompletion(li);
    }
}

function toggleTaskCompletion(li) {
    const taskId = li.getAttribute('data-id');
    const task = tasks.find(task => task.id == taskId);
    task.completed = !task.completed;
    renderTasks();
}

function deleteTask(li) {
    const taskId = li.getAttribute('data-id');
    const taskIndex = tasks.findIndex(task => task.id == taskId);
    tasks.splice(taskIndex, 1);
    renderTasks();
}

// Simulate a server fetch
function fetchTasksFromServer() {
    // Simulate a server response with a delay
    setTimeout(() => {
        tasks.push({ id: 3, text: "Complete code challenge", completed: false });
        renderTasks();
    }, 1000);
}

// Initial render
fetchTasksFromServer();
