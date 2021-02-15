const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
const USER_LS = "currentUser";
const greetings = document.querySelector(".js-greetings");
const SHOWING = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function removeName(){
    localStorage.removeItem(USER_LS);
}

function handleSubmit(e){
    e.preventDefault(); //기본 이벤트를 막음 - submit이 폼 내용이 사라지고 이동하는 것 -
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue); //폼을 없애고 텍스트 색칠
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING);
    //submit 시 이벤트 리스너
    form.addEventListener("submit", handleSubmit);
}

function deleteGreeting(event){
    const btn = event.target;
    const greetings = btn.parentNode;
    greetings.removeChild(btn);
    greetings.classList.remove(SHOWING);
    removeName();
    askForName();
}

function paintGreeting(text){
    form.classList.remove(SHOWING); //입력폼을 없앤다
    greetings.classList.add(SHOWING);
    greetings.innerText = `Hello ${text}`;
    const delBtn = document.createElement("button");
    delBtn.classList.add('delBtn');
    delBtn.innerText = "x";
    delBtn.addEventListener("click", deleteGreeting);
    greetings.appendChild(delBtn);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        askForName();
    } else { //유저 있음
        paintGreeting(currentUser);
    }

}

function init(){
    loadName();
}

init();