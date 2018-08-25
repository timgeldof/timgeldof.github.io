function init() {
    var xhttp = new XMLHttpRequest();
    var propraesidia = new Object;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            propraesidia = JSON.parse(xhttp.responseText);
        }
    }
    xhttp.open("GET", "propraesidia.json", true);
    xhttp.send();
}
window.onload = init;


/*
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 marge">
            <div class="card h-100">
                <img class="card-img-top" src="img/praesidium18-19/bert.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Praeses</h5>
                    <p class="card-text">Gegroet vrienden!</br></br> Mijn naam is Bert en het komend jaar zal ik vol trots de rol van praeses op mij nemen. 
                        De gouden pretcilinders zijn mij niet vreemd en daarom zullen jullie mij volgend jaar van tijd tot tijd wel 
                        eens op café terug vinden. Kom gerust eens af om een praatje te slaan en om eens te klinken 
                        op die mooie studententijd!</p>
                    <p class="card-text"><small class="text-muted">Bert Vynckier</small></p>
                </div>
            </div>
        </div>
*/

var propraesidia = [{
    "academiejaar": "2017-2018",
    "praesidium": {
        "praeses": "Claudia Vanhaverbeke",
        "penning": "Tibo Rigole",
        "Secretaris": "Eva Vlaminck",
        "Feest 1": "Iene Deroo",
        "Feest 2": "Bert Vynckier",
        "Sport": "Cas Decloedt",
        "Cultuur": "Sarah Holvoet",
        "PR": "Manon Vanhee",
        "Schachtentemmer": "Maxime Brabant",
        "Cantor": "Gilles Mommerency",
        "Zeden": "Christoph Wauters"
    }
},
{
    "academiejaar": "2016-2017",
    "praesidium": {
        "Praeses": "Wouter Debakker",
        "Penning": "Matthias Beckers",
        "Secretaris": "Pieter-Jan Tack",
        "Feest 1": "Valerie Lewyllie",
        "Feest 2": "Judith Dekoninck",
        "Sport": "Gilles Mommerency",
        "Cultuur": "Louis Vercaempt",
        "PR": "Lander Vansteeland",
        "Schachtentemmer": "Emiel Vanhaesebrouck",
        "Cantor": "Louis Plancke",
        "Zeden": "Maxime Brabant"
    }
}, {
    "academiejaar": "2015-2016",
    "praesidium": {
        "praeses": "Louis Vermeulen",
        "Vice": "Arnoud Deltour",
        "Penning": "Matthias Beckers",
        "Secretaris": "Clementine Vanoverberghe",
        "Feest 1": "Valerie Lewyllie",
        "Feest 2": "Astrid Demeulemeester",
        "Sport": "Jeroen Vlaminck",
        "Cultuur": "Maxime Brabant",
        "PR": "Laora Cornelio",
        "Schachtentemmer": "Louis Plancke",
        "Cantor": "Arnaud Deltour",
        "Zeden": "Wouter Debakker"
    }
},
{
    "academiejaar": "2014-2015",
    "praesidium": {
        "Praeses": "Cynthia Ghekiere",
        "Vice": "Thibault Degrande",
        "Penning": "Annabel Van Slembrouck",
        "Secretaris": "Lisa Boutens",
        "Feest 1": "Louis Vermeulen",
        "Feest 2": "David Vanquaethem",
        "Sport": " Arnaud Deltour",
        "Cultuur": " Valérie Populier",
        "PR": " Valerie Lewyllie",
        "Schachtentemmer": " Dimitri Delbeecke",
        "Cantor": " Alexander Casier",
        "Zeden": "Thibault Degrande"
    }
},
{
    "academiejaar": "2013-2014",
    "praesidium": {
        "Praeses": "Willem Vandamme",
        "Vice": "Arne Six",
        "Penning": "Thibault Degrande",
        "Secretaris": "Lore Logghe",
        "Feest 1": "Hannelore Minne",
        "Feest 2": "Louis Vermeulen",
        "Sport": "Bram Van Weehaege",
        "Cultuur": "Lonis Logghe",
        "PR": "Cynthia Ghekiere",
        "Schachtentemmer": "Isabelle Masschelein",
        "Cantor": "Arne Vanwalleghem",
        "Zeden": "Laurence Vanhecke"

    }
},
{
    "academiejaar": "2012-2013",
    "praesidium": {
        "Praeses": "Arne Vanwalleghem",
        "Vice": "Hannelore Minne",
        "Penning en cantor": "Elke Durnez",
        "Secretaris": "Lisa Declerck",
        "Feest 1": "Willem Vandamme",
        "Feest 2": "Simon Serrus",
        "Sport": "Wouter Willemyns",
        "Cultuur": "Laurence Vanhecke",
        "PR": "Isabelle Masschelein",
        "Schachtentemmer": "Arne Six",
        "Zeden": "Kenny Decruyenaere"

    }
},
{
    "academiejaar": "2011-2012",
    "praesidium": {
        "Praeses": "Francis Spillebeen",
        "Vice": "Willem Vandamme",
        "Penning": "Koen Flament",
        "Secretaris": "Elke Durnez",
        "Feest 1": "Klaas Bulcaen",
        "Feest 2": "Rens Bonnez",
        "Sport": "Jens Delrue",
        "Cultuur": "Arne Six",
        "PR": "Isabelle Masschelein",
        "Schachtentemmer": "Arne Vanwalleghem",
        "Cantor": "Aäron Ollivier",
        "Zeden": "Gaëlle Pattyn"

    }
},
{
    "academiejaar": "2010-2011",
    "praesidium": {
        "Praeses": "Emilyne Druïne",
        "Vice en zeden": "Kenny Decruyenaere",
        "Penning": "Julie Fournier",
        "Secretaris": "Koen Flament",
        "Feest 1": "Francis Spillebeen",
        "Feest 2": "Klaas Bulcaen",
        "Sport": "Arne Vanwalleghem",
        "Cultuur": "Alexander Casier",
        "PR": "Aäron Ollivier",
        "Schachtentemmer": "Ward Boydens",
        "Cantor": "Thomas Vandenberghe"

    }
},
{
    "academiejaar": "2009-2010",
    "praesidium": {
        "Praeses": "Thomas Vandenberghe",
        "Vice": "Charline Van Balen",
        "Penning": " Julie Fournier",
        "Secretaris en cantor": " Emilyne Druïne",
        "Feest": " Francis Spillebeen",
        "Sport en Cultuur": " Maxime Fournier & Kenny Decruyenaere",
        "PR": " Aäron Ollivier",
        "Schachtentemmer": " Thomas Vermeulen",
        "Zedenmeester": " Stephanie Gevaert"

    }
},
{
    "academiejaar": "2008-2009",
    "praesidium": {
        "Praeses": "Pieter-Paul Casier",
        "Vice en zeden": "Kevin Debevere",
        "Penning": " Julie Fournier",
        "Secretaris": "Emilyne Druïne",
        "Cultuur": "Lukas Van Duffel",
        "Temmer": "Nicolaas Vermeulen",
        "Cantor": "Thomas Vandenberghe"
    }
}

];