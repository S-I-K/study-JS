const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings'),
    user_ls = 'currentUser',
    show = 'showing';

function saveName(text){
    localStorage.setItem(user_ls, text);
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(show);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(show);
    greeting.classList.add(show);
    greeting.innerText = `Hi, ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(user_ls);
    console.log(currentUser);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();