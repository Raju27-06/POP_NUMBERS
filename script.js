// variables and DOM selectors
let timer = 60;
let score = 0;
let hitNum = 0;
const music = new Audio('./music/Balloon Pop Sound effect (64).mp3');
document.querySelector("#timerval").textContent = timer;
const container_rest = document.querySelector(".container-rest");


// main logic......
function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent = score;
}
function makeBubbles() {
    let bubbles = "";
    for(let i =1;i<=147;i++){
        let num = Math.floor(Math.random()*10);
        bubbles+=`<div class="bubble">${num}</div>`;
    }
    container_rest.innerHTML=bubbles;
}
function time() {
    let timeValue = setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
           clearInterval(timer);
           container_rest.innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}
function hit() {
   hitNum = Math.floor(Math.random()*10);
   document.querySelector("#hit").textContent = hitNum; 
}
container_rest.addEventListener("click",(e)=>{
     let number  = Number(e.target.textContent);
     if(number===hitNum){
    music.play();
      increaseScore();
      hit();
      makeBubbles();
     }
});

// functions calls...
time();
makeBubbles();
hit();