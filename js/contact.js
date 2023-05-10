const planButton = document.querySelector(`.planButton`);
const profileButton = document.querySelector(`.profileButton`);
const homeButton = document.querySelector(`.homeButton`);


profileButton.onclick = pressProfile;
homeButton.onclick = pressHome;
planButton.onclick = pressPlanButton;


function pressProfile(){
    window.location.href = "profile.html"
}
function pressHome(){
    window.location.href = "index.html"
}
function pressPlanButton(){
    window.location.href = "plan-van-aanpak.html"
}