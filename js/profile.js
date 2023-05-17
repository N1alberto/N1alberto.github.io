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
         {
            title:"Hoger Lager",
            description:"Hoger lager is een spel waarbij je tegen een computer speelt. Je probeert te raden of je een hoger getal gooit dan de bank of een lager getal. Als je goed raad verdien je credits. Credits gebruik je aan het einde van het spel om te bepalen welke prijs je krijgt. Hoe meer credits je hebt aan het einde van het spel, hoe meer je verdient.",
            teamMate1:
            {
                    fullName:"David Aalderink",
                    link:"https://daalderink.github.io"
            },
            teamMate2:
            {
                    fullName:"Emiel Van Velzen",
                    link:"https://evanvelzen.github.io"
            },    
            img:"img/Hoger-Lager.png",
            link:"Hoger-Lager-Normal/index.html",
        },
         {
            title:"TicTacToe",
            description:"Tic Tac Toe of terwijl Boter kaas en eiren is een spel die al bekend is door heel veel mensen. Ik heb een na maak spel gemaakt met niets meer dan Javascript Css en HTML code. Je spelt tegen iemand anders en spelt volgens de normale regels. Je herstart na een win door of de refresh knop te drukken. Je kunt ook een donkere thema kiezen waarbij de kleuren veranderen. Daar naast kun je ook naar de beste muziek luisteren die er is.",
            teamMate1:
            {
                    fullName:"David Aalderink",
                    link:"https://daalderink.github.io"
            },
            teamMate2:
            {
                    fullName:"Emiel Van Velzen",
                    link:"https://evanvelzen.github.io"
            },    
            img:"img/TicTacToe.png",
            link:"https://github.com/ROCMondriaanTIN/sd22-project-p02-boter-kaas-en-eieren-N1alberto",
        },
         {
            title:"Webcatalogus",
            description:"De webcatalogus werd gemaakt door mij en mijn team genoten. Samen hebben we een reclame gemaakt voor video games. De website is gemaakt in 3 genres. Naamelijk Mobile, Console en PC. Ik was bezig met Console games en gebruikte voor het meeste horror games. ",
            teamMate1:
            {
                    fullName:"David Aalderink",
                    link:"https://daalderink.github.io"
            },
            teamMate2:
            {
                    fullName:"Emiel Van Velzen",
                    link:"https://evanvelzen.github.io"
            },    
            img:"https://www.fantv.nl/images/stories/digitaal/24762-catawiki-webcatalogus-voor-verzamelaars-2.jpg",
            link:"https://github.com/ROCMondriaanTIN/sd22-p03-project-webcatalogus-ned",
        },
        {
           title:"Dashboard",
           description:"En onze vierde periode moesten we in een team een dashboard pagina maken. Ieder teamlid moest zijn of haar eigen onderwerp kiezen. Onze 3 onderwerpen waren valuta, weerstation en arcade. Ik heb het arcade gedeelte gedaan en daaronder moest een chatbot en een statistiek.",
           teamMate1:
           {
                   fullName:"David Aalderink",
                   link:"https://daalderink.github.io"
           },
           teamMate2:
           {
                   fullName:"Emiel Van Velzen",
                   link:"https://evanvelzen.github.io"
           },    
           img:"img/dashboard.png",
           link:"https://github.com/ROCMondriaanTIN/sd22-p04-project-dashboard-team-den",
       },
       {
          title:"Slender The Missing Soul",
          description:"Onze keuzendeel periode was het allerleukste van alle vakken. Eindelijk maken we onze eigen game. Ik zit als gewoonlijk met de twee zelfde personen zoals altijd. In de derde periode moest iedereen een game idee bedeken en een prototype maken. Mijn idee was een horror game op een verlaten schip en mijn teamgenoot had een slenderman game. Dus in de vierde periode hebben we de game ideeën samen gevoegd.",
          teamMate1:
          {
                  fullName:"David Aalderink",
                  link:"https://daalderink.github.io"
          },
          teamMate2:
          {
                  fullName:"Emiel Van Velzen",
                  link:"https://evanvelzen.github.io"
          },    
          img:"img/Slenderman.png",
          link:"https://github.com/ROCMondriaanTIN/sd22-p04-kdl-gp-game-slender-the-missing-soul.git",
      }
    ]

    
}
console.log(myProfile);

const contactButton = document.querySelector(`.contactButton`);
const homeButton = document.querySelector(`.homeButton`);
const planButton = document.querySelector(`.planButton`);
const myUsernameView = document.querySelector(`.my-Username`);
const myEmailAdressView = document.querySelector(`.my-EmailAdress`);
const myPfp = document.querySelector(`.my-Pfp`);
const dateOfBirth = document.querySelector(`.my-DateOfBirth`);
const myBiographyView = document.querySelector(`.my-Biography`);
const mySchoolView = document.querySelector(`.my-School`);
const myEducationView = document.querySelector(`.my-Education`);
const myAbillities = document.querySelector(`.my-Abillities`);
const myProjects = document.querySelector(`.my-Projects`);

planButton.onclick = pressPlanButton;
homeButton.onclick = pressHome;
contactButton.onclick = pressContactButton;

function pressPlanButton(){
    window.location.href = "plan-van-aanpak.html"
}
function pressHome(){
    window.location.href = "index.html"
}
function pressContactButton(){
    window.location.href = "contact.html"
}

myUsernameView.innerHTML = myProfile.username;
myEmailAdressView.innerHTML = "Mijn Email adress: " + myProfile.emailAdress;
myPfp.innerHTML = '<img class="logo" src="' + myProfile.pfp +'" alt="">';
dateOfBirth.innerHTML = "Mijn geboorte datum: " + myProfile.birthDate;
myBiographyView.innerHTML = "Info: " + "<br>" + myProfile.biography;
mySchoolView.innerHTML = "School: " + myProfile.school;
myEducationView.innerHTML = "Education: " + myProfile.education;
myAbillities.innerHTML = "Skills: " + myProfile.skills;

for (let index = 0; index < myProfile.projects.length; index++) {
    const project = myProfile.projects[index];
    const card = `<div class="col-md-4 align-item d-flex"><div class="card align-item d-flex">
        <img class="card-img-top" src="` + project.img+ `" alt="Title">
        <div class="card-body">
            <h4 class="card-title">` + project.title + `</h4>
            <p class="card-text">` + project.description + `</p>
            <a href='` + project.link + `' class="card-text">Project Link</a>
            <p class="card-text">` + project.teamMate1.fullName+ `</p>
            <a href="https://daalderink.github.io/"><p class="card-text">` + project.teamMate1.link+ `</p></a>
            <br>
            <p class="card-text">` + project.teamMate2.fullName+ `</p>
            <a href="https://evanvelzen.github.io"><p class="card-text">` + project.teamMate2.link+ `</p></a>
        </div>
    </div></div>`
    myProjects.innerHTML += card
}
