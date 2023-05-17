const username = document.querySelector(`.username`);
const planButton = document.querySelector(`.planButton`);
const profileButton = document.querySelector(`.profileButton`);
const contactButton = document.querySelector(`.contactButton`);

username.addEventListener("click", playSound);
profileButton.onclick = pressProfileButton;
planButton.onclick = pressPlanButton;
contactButton.onclick = pressContactButton;

function pressPlanButton(){
    window.location.href = "plan-van-aanpak.html"
}

function pressProfileButton(){
    window.location.href = "profile.html"
}

function pressContactButton(){
    window.location.href = "contact.html"
}

function playSound(){ 
    let audio = new Audio("/audio/Mario Coin Sound - Sound Effect (HD).mp3");
    audio.loop = false;
    audio.play(1);
}