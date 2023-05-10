const homeButton = document.querySelector(`.homeButton`);
const profileButton = document.querySelector(`.profileButton`);
const contactButton = document.querySelector(`.contactButton`);

homeButton.onclick = pressHome;
profileButton.onclick = pressProfile;
contactButton.onclick = pressContactButton;

function pressHome(){
    window.location.href = "index.html"
}
function pressProfile(){
    window.location.href = "profile.html"
}
function pressContactButton(){
    window.location.href = "contact.html"
}