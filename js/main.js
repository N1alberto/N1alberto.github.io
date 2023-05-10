const username = document.querySelector(`.username`);
const planButton = document.querySelector(`.planButton`);
const profileButton = document.querySelector(`.profileButton`);

username.addEventListener("click", playSound);
function playSound(){ 
    let audio = new Audio("/audio/Mario Coin Sound - Sound Effect (HD).mp3");
    audio.loop = false;
    audio.play(1);
}
profileButton.onclick = pressProfileButton;
planButton.onclick = pressPlanButton;

function pressPlanButton(){
    window.location.href = "plan-van-aanpak.html"
}

function pressProfileButton(){
    window.location.href = "profile.html"
}
