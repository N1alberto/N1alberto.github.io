const myProfile = {
    username:"Nathan Alberto",
    emailAdress:"302328036@student.rocmondriaan.nl",
    pfp:"img/Ferret-Studio-Logo.png",
    birthDate:"15-02-2006",
    biography:"Nathan Alberto is een student op de school van ROC Mondriaan.<br> Hij zit op de opleiding ICT software development met keuzendeel Video Game developer.<br> Momenteel zit hij op zijn eerste jaar en is hij in zijn vierde periode.<br> Hij heeft nu al een paar video spellen gemaakt en verbreid zijn kenis op basis van 2D en 3D video games.<br> Ook is hij bezig met websites creëren en portfolios te schrijven.",
    school:"ROC Mondriaan",
    education:"Ict Software Development, Game developer",
    bannerColor:"#994E33 #AC5435 #FAF3F0",
    skills:["Javascript", "HTML", "CSS"],
    projects:[
        project1 = {
            title:"hogerLager",
            description:"Hoger lager is een spel waarbij je tegen een computer speelt. Je probeert te raden of je een hoger getal gooit dan de bank of een lager getal. Als je goed raad verdien je credits. Credits gebruik je aan het einde van het spel om te bepalen welke prijs je krijgt. Hoe meer credits je hebt aan het einde van het spel, hoe meer je verdient.",
            teamMates:[
                teamMate1 = {
                    fullName:"David Aalderink",
                    link:"https://daalderink.github.io"
                },
                teamMate2 = {
                    fullName:"Emiel Van Velzen",
                    link:"https://evanvelzen.github.io"
                }
            ],
            img:"",
            link:"",
        },
        project2 = {
            title:"ticTacToe",
            description:"",
            teamMates:[
                teamMate1 = {
                    fullName:"David Aalderink",
                    link:"https://daalderink.github.io"
                },
                teamMate2 = {
                    fullName:"Emiel Van Velzen",
                    link:"https://evanvelzen.github.io"
                }
            ],
            img:"",
            link:"",
        },
        project3 = {
            title:"webcatalogus",
            description:"",
            teamMates:[
                teamMate1 = {
                    fullName:"David Aalderink",
                    link:"https://daalderink.github.io"
                },
                teamMate2 = {
                    fullName:"Emiel Van Velzen",
                    link:"https://evanvelzen.github.io"
                }
            ],
            img:"",
            link:"",
        }
    ]

    
}
console.log(myProfile);


const myUsernameView = document.querySelector(`.my-Username`);
const myEmailAdressView = document.querySelector(`.my-EmailAdress`);
const myPfp = document.querySelector(`.my-Pfp`);
const dateOfBirth = document.querySelector(`.my-DateOfBirth`);
const myBiographyView = document.querySelector(`.my-Biography`);
const mySchoolView = document.querySelector(`.my-School`);
const myEducationView = document.querySelector(`.my-Education`);
const myAbillities = document.querySelector(`.my-Abillities`);
const myProjects = document.querySelector(`.my-Projects`);

myUsernameView.innerHTML = myProfile.username;
myEmailAdressView.innerHTML = "Mijn Email adress: " + myProfile.emailAdress;
myPfp.innerHTML = '<img class="logo" src="' + myProfile.pfp +'" alt="">';
dateOfBirth.innerHTML = "Mijn geboorte datum: " + myProfile.birthDate;
myBiographyView.innerHTML = "Info: " + "<br>" + myProfile.biography;
mySchoolView.innerHTML = "School: " + myProfile.school;
myEducationView.innerHTML = "Education: " + myProfile.education;
myAbillities.innerHTML = "Skills: " + myProfile.skills;

