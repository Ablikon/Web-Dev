document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks();

    function addTask(text) {
        if (text.trim() === '') return;
        
        const task = {
            id: Date.now(),
            text: text,
            completed: false
        };
        
        tasks.push(task);
        saveTasks();
        renderTasks();
        taskInput.value = '';
    }

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }

    function toggleTask(id) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        saveTasks();
        renderTasks();
    }


    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'task-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => toggleTask(task.id));

            const span = document.createElement('span');
            span.className = `task-text ${task.completed ? 'completed' : ''}`;
            span.textContent = task.text;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
            deleteButton.addEventListener('click', () => deleteTask(task.id));

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }

    addTaskButton.addEventListener('click', () => addTask(taskInput.value));
    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
});
