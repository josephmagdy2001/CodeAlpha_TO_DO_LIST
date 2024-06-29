document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText) {
        const taskList = document.getElementById('taskList');

        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
});
