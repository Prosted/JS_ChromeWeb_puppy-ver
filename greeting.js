const form=document.querySelector(".js-form"),
      input=form.querySelector("input"),
      greetings=document.querySelector(".js-greetings");

const USER_LS="currentUser",
      SHOWING_CN="showing";


function saveName(name){
    localStorage.setItem(USER_LS,name);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    paintName(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}


function paintName(name){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerHTML=`Hello! ${name}`;   
}

function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName();
    }else{
        paintName(currentUser);
    }
}

function init(){
    loadName();
}

init();