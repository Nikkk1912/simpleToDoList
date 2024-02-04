const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



function addTodo(event){
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

    if(item.classList[0] === 'remove-button'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        
    }

    if(item.classList[0] === 'done-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        
    }
}