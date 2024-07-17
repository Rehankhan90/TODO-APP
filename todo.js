document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const newTaskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = newTaskInput.value.trim();
        if (taskText === '') {
            alert('Please Enter  a Task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const dlbtn = document.createElement('button');
        dlbtn.textContent = 'Delete';
        dlbtn.addEventListener('click', () => {
            tasksList.removeChild(taskItem);
        });

        taskItem.appendChild(dlbtn);
        tasksList.appendChild(taskItem);

        newTaskInput.value = '';
    });
});
