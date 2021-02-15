const clockContatiner = document.querySelector(".js-clock"),
    clockTitle = clockContatiner.querySelector("h1"),
    currentDate = document.querySelector(".js-date");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    currentDate.innerText = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`;      
    clockTitle.innerText = 
    //삼항연산자
    `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
    
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();