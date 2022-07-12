const todoForm = document.querySelector('.js-todoForm'),
    todoInput = todoForm.querySelector('input'),
    todoList = document.querySelector('.js-todoList');

const todos_ls = 'todos';
let todos = [];


function deleteToDo(event){
    const btn = this;
    const li = btn.parentNode;
    todoList.removeChild(li);
    
    const cleanToDos = todos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    todos = cleanToDos;
    saveToDos();
}

function loadTodos(){
    const loadTodos = localStorage.getItem(todos_ls);
    if(loadTodos !== null){
        const parsedToDos = JSON.parse(loadTodos);
        /* forEach를 쓰기 위한 array로 위와 같이 변환 */
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
    delBtn.addEventListener('click', deleteToDo);
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