const games = document.querySelector('.dump');

fetch("/FerretStudio/Data/Projects.JSON")
.then(myData => myData.json())
.then(gameData => showOnPage(gameData));

function showOnPage(data) {
    for (let i = 0; i < data.Projects.length; i++) {
        const projects = data.Projects[i];
        console.log(projects)
        games.innerHTML += `<div class="col-md-4">
        <div class="card">
    <img class="card-img-top" src="`+ projects.img +`" alt="Title" />
    <div class="card-body">
        <h4 class="card-title">`+ projects.title +`</h4>
        <p class="card-text"> `+ projects.description +`</p>
        <br>
        Release Date: `+ projects.release +`
    </div>
</div></div>
        `
        
    }
}
