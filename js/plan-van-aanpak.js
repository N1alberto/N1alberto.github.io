const homeButton = document.querySelector(`.homeButton`);
const profileButton = document.querySelector(`.profileButton`);

homeButton.onclick = pressHome;
profileButton.onclick = pressProfile;

function pressHome(){
    window.location.href = "index.html"
}
function pressProfile(){
    window.location.href = "profile.html"
}