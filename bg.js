const body=document.querySelector("body");


const IMAGE_NUMBER=5;

function paintImage(number){
    const image=new Image();
    image.src=`picture/${number+1}.jpg`;
    image.classList.add("bgPicture");
    body.appendChild(image);
}

function setRandomNumber(){
    const number=Math.ceil(Math.random()*IMAGE_NUMBER);
    return number;
}

function init(){
    const randomNumber=setRandomNumber();
    paintImage(randomNumber);
}

init();
