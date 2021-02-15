const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImage(imgNumber){
                    //==document.createElement("img")
    const image = new Image();
    image.src = `images/${imgNumber +1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);

    //image.addEventListener("loaded", handleImgLoad); API를 쓰면 이게 필요함
}

function genRandom(){ //floor 버림 ceiling 높임
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();