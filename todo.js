const todoForm=document.querySelector(".js-todo-form"),
      todoInput=todoForm.querySelector("input"),
      todoList=document.querySelector(".js-todo-list");

const TODOS_LS="toDos";
let toDos=[];
let idNumbers=1;

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function deleteToDo(event){
    const btn=event.target;
    const li=btn.parentNode;
    todoList.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id!==parseInt(li.id);
    });
    toDos=cleanToDos;
    saveToDos();
}

function paintTodo(text){
    const li=document.createElement("li");
    const delbtn=document.createElement("button");
    const span=document.createElement("span");
    const newId=idNumbers;
    idNumbers+=1;
    delbtn.innerHTML="✖";
    delbtn.addEventListener("click",deleteToDo);
    span.innerText=text;
    li.appendChild(delbtn);
    li.appendChild(span);
    todoList.appendChild(li);
    li.id=newId;
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue=todoInput.value;
    paintTodo(currentValue);
    todoInput.value="";
}

function loadTodos(){
    const loadedTodos=localStorage.getItem("toDos");
    if (loadedTodos!==null){
        const parsedToDos=JSON.parse(loadedTodos);
        parsedToDos.forEach(function(toDo){
            paintTodo(toDo.text);
        });
    }
}


function init(){
    loadTodos();
    todoForm.addEventListener("submit",handleSubmit);
}


init();