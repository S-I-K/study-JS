const todoForm = document.querySelector('.js-todoForm'),
    todoInput = todoForm.querySelector('input'),
    todoList = document.querySelector('.js-todoList');

const todos_ls = 'todos';
const todos = [];



function loadTodos(){
    const loadTodos = localStorage.getItem(todos_ls);
    if(loadTodos !== null){
        const parsedToDos = JSON.parse(loadTodos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}
function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = todos.length + 1;
    delBtn.innerText = 'X';
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        text: text,
        id: newId
    };
    todos.push(todoObj);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(todos_ls, JSON.stringify(todos));
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = '';
}

function init(){
    loadTodos();
    todoForm.addEventListener('submit', handleSubmit);
}
init();