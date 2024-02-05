const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');



todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', todoSetsChange);



function addTodo(event) {
    event.preventDefault();

    //Creating div for todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Creating Li for todo
    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value;
    todoLi.classList.add('todo-Item');

    //Making Li child of Div
    todoDiv.appendChild(todoLi);

    //Creating Done button
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add('done-button');

    //Making done button child of div
    todoDiv.appendChild(doneButton);

    //Creating Remove button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fas fa-trash"></i>';
    removeButton.classList.add('remove-button');

    //Making remove button child of div
    todoDiv.appendChild(removeButton);

    //append to list
    todoList.appendChild(todoDiv);

    todoInput.value = '';
}

function deleteCheck(event) {
    const item = event.target;

    if (item.classList[0] === 'remove-button') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });

    }

    if (item.classList[0] === 'done-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');

    }
}

function todoSetsChange(event) {
    const todos = todoList.children;
    console.log(todos);

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];

        switch (event.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    }
}