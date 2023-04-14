
function openWindow() {
    const name = document.querySelector(`.name`);

    let username = prompt('Vul uw naam in');

    name.innerHTML = username;
}
openWindow()

function startGame() {



    alert('Welcome bij hoger lager');





    let result = confirm('Bent u 18 jaar of ouder');

    let message = result ? 'Geweldig. Ik ga u het spel nu uitleggen' : 'U bent niet oud genoeg om dit te spelen. Sluit het programma. Als u nu doorgaat stelt dit programma zich niet verantwoordelijk.';

    alert(message);

    alert('u speelt tegen de bank.');

    alert('De bank rolt twee dobble stenen en jij moet raden of u hoger of lager gaat rollen');

    alert('Als u denkt dat u hoger gooit dan de bank druk op Ok');

    alert('Als u denkt dat u lager gooit dan de bank Druk op Annuleren');

    alert('U kunt credits winnen door goed te raden, maar u kunt ook credits verliezen als u fout raad');

    alert('Als uw credits op zijn heb u verloren');

    alert('U begint met 10 credits');

    alert('U speelt 10 rondes');

    alert(`Vergeet niet zelf u credits bij te houden`);

    alert('Druk op Ok om te starten');





    let Credits = 10;




    let Round = 1;


    while (Credits > 0 && Credits < 50 && Round < 10) {

        console.log(Round);

        Round++;

        let min = 2

        let max = 12

        let x = Math.floor(Math.random() * (max - min + 1) + min);

        let y = Math.floor(Math.random() * (max - min + 1) + min);

        // x = De bank

        // y = Player







        alert(`De bank gooit ${x}`);

        let hoger = confirm(`Gooit u hoger of lager dan de bank?`);

        if (hoger)

            alert('U koos hoger');

        else

            alert('U koos lager');


        if (y > x) {

            alert(`U heeft 5 credits gewonnen.`); Credits + 5;



        } else if (y < x) {

            alert(`U heeft 5 credits verloren`); Credits - 5;



        } else if (y == x) {

            alert(`U heeft even veel gegooit als de bank. U heeft niks verloren of gewonnen.`);


        }

    }




    alert(`Dit is het einde van het spel. U kunt 2 prijzen winnen.`);

    alert(`Als u niet gewonnen hebt druk op de eerste link`);

    alert(`Als u gewonnen heeft druk op de tweede link`);

    alert(`Dank u wel voor het spelen ${username}`);

}
