const todoForm = document.querySelector(".js-todo"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");
const TODOS_LS = 'todos';

let todos = [];
let idNumbers = 1;

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
                            //filter는 array의 모든아이템에 함수를 실행하고 조건에 맞는 것을 리턴함
    const cleanTodos = todos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    console.log(cleanTodos);
    todos = cleanTodos;
    saveTodos();
}

function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function paintTodo(text){
    const li = document.createElement("li");
    li.classList.add('todoElement');
    const delBtn = document.createElement("button");
    delBtn.classList.add('delBtn');
    const span = document.createElement("span");
    span.classList.add('todoText');
    const newId = idNumbers;
    idNumbers += 1;
    delBtn.innerText = "x";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);

    //todo를 작성할 때마다 배열에 추가된다
    const todoObj = {
        text: text,
        id : newId
    };
    todos.push(todoObj);
    saveTodos();
}

function handleSubmit(e){
    e.preventDefault();
    console.log(e.currentTarget);
    if(todoForm === e.currentTarget){
        const currentValue = todoInput.value;
        paintTodo(currentValue);
        todoInput.value = "";
    }
} 

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null){
        const parsedTodos = JSON.parse(loadedTodos);
        //오브젝트마다 함수 실행
        parsedTodos.forEach(function(list) {
            paintTodo(list.text);
            console.log(list.text);
        });
    }
}

function init() {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();