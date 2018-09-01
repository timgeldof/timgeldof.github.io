const activiteitenJSON = [
    {
        name: "Wieltjesfeesten",
        descr: "De Wieltjesfeesten zijn een jaarlijks terugkerend feest in de stad Menen, West-Vlaanderen. In 1969 werd met dit initiatief van start gegaan om mensen naar Menen te lokken. Het stadsfeest had de twee jaren daarvoor de noemer Grensfeesten gekregen. Dat Grensfeest stond in 1968 in het teken van het wiel.",
        date: "01/09/2018"
    },
    {
        name: "Start Academiejaar",
        descr: "Het nieuwe academiejaar gaat van start. Het nieuwe praesidium onder leiding van Bert Vynckier zal er weer een schitterend jaar van maken!",
        date: "24/09/2018"
    },
    {
        name: "Bierbowling",
        descr: "We tonen onze sportiviteit in de Overpoort bowl. Tussen de worpen door nemen we wel eens een slokje van ons pintje.",
        date: "02/10/2018"
    },
    {
        name: "Openingscantus",
        descr: "Haal die codex maar weer boven! We kunnen weer genieten van elkaars nachtegalenstem.",
        date: "03/10/2018"
    },
    {
        name: "Cocktailnight",
        descr: "Het praesidium verzorgt een breed assortiment cocktails in de coulissen voor een zeer schappelijke prijs.",
        date: "08/10/2018"
    },
    {
        name: "Jeneverpetanque",
        descr: "We smijten grote metalen ballen om het dichtst bij een klein balletje. Tijdens het intensief sporten hydrateren we onze lichamen met een paar glaasjes jenever met verschillende smaken.",
        date: "10/10/2018"
    },
    {
        name: "Sport: parkloop en touwtrekken",
        descr: "Competitie parkloop en touwtrekken tussen de studentenclubs die aangesloten zijn bij het SK Gent.",
        date: "11/10/2018"
    },
    {
        name: "Hotdogverkoop",
        descr: "De feuten worden voorgesteld aan de commilitones aan de hand van een korte persoonlijke introductie. Daarnaast ook gratis hotdogs!",
        date: "15/10/2018"
    },
    {
        name: "Schachtenverkoop",
        descr: "De schachten moeten aan de commilitones tonen dat ze geld waard zijn. Ze doen dit aan de hand van een korte voorbereide act.",
        date: "21/10/2018"
    },
    {
        name: "Doop",
        descr: "De feuten worden gehuldigd als officieel lid na een gezellig dagje chillen met het praesidium.",
        date: "22/10/2018"
    },
    {
        name: "Kroegentocht",
        descr: "We maken een mooie wandeling door onze geliefde studentenstad waarbij korte pauzes nemen bij een paar van de vele kroegen.",
        date: "30/10/2018"
    },
    {
        name: "Gravensteenfeesten",
        descr: "We herdenken de Slag om het Gravensteen van 16 november 1949 aan de hand van een herbezetting. Een dag vol leute en vertier, niet te missen!",
        date: "14/11/2018"
    },
    {
        name: "Cantus",
        descr: "Liedjes zingen in het zaaltje van de Salamander met Potti en Rita.",
        date: "21/11/2018"
    },
    {
        name: "Rich and Famous Cavanight",
        descr: "Dames trek jullie schoonste galakleed aan! Mannen kom strak in het pak op de dansvloer! En laat ons gezamenlijk cava drinken tot in de vroege uurtjes!",
        date: "26/11/2018"
    },
    {
        name: "Kickertoernooi",
        descr: "Verdedig onze club door mee te doen met het Kickertoernooi van het SK!",
        date: "29/11/2018"
    },
    {
        name: "Wielke goes Amadeus",
        descr: "Men steke zo veel mogelijk ribben in zijn fretter!",
        date: "5/12/2018"
    },
    {
        name: "Massacantus",
        descr: "Samen met nog en paar duizend studenten zingen we onze keel uit vlak voor we weer onze boeken van onder het stof halen!",
        date: "12/12/2018"
    },


]
function init() {
    var activiteiten = document.getElementById("activiteiten");
    for (let i = 0; i < activiteitenJSON.length; i++) {
        var current = activiteitenJSON[i];
        activiteiten.insertAdjacentHTML("beforeend", `
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${current.name}</h5>
            <small>${current.date}</small>
        </div>
        <p class="mb-1">${current.descr}</p>
    </a>`
        )
    }
}
window.onload = init;