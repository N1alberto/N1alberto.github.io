const username = document.querySelector(`.username`);

username.addEventListener("click", playSound);
function playSound(){ 
    let audio = new Audio("/audio/Mario Coin Sound - Sound Effect (HD).mp3");
    audio.loop = false;
    audio.play(1);
}