// script.js

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const progressBar = document.getElementById('progressBar');
const achievements = document.getElementById('achievements');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push({ task, completed: false, score: 0 });
        renderTasks();
        taskInput.value = '';
        updateProgressBar();
    }
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.task;
        li.style.textDecoration = task.completed ? 'line-through' : 'none';
        li.addEventListener('click', () => {
            if (!task.completed) {
                const score = prompt('Enter your score (0-100):');
                if (score !== null && !isNaN(score) && score >= 0 && score <= 100) {
                    task.completed = true;
                    task.score = parseInt(score);
                    renderTasks();
                    updateProgressBar();
                }
            }
        });
        taskList.appendChild(li);
    });
}

function updateProgressBar() {
    const completedTasks = tasks.filter(task => task.completed);
    const totalScore = completedTasks.reduce((total, task) => total + task.score, 0);
    const totalPossibleScore = completedTasks.length * 100;
    const progress = (totalScore / totalPossibleScore) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.style.backgroundColor = '#007bff'; // Blue color for progress bar
}

// Placeholder for achievements from the last month
achievements.textContent = "Achievements from the last month will be displayed here.";