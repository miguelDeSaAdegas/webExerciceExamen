var message = "tkt billy";
const onClick = document.getElementById("onClick")
const count = document.getElementById("counter");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
var cpt = 0;

function addDateTime(message) {
    const dateTimeNow = new Date;
    message = dateTimeNow.toLocaleDateString() + " " + dateTimeNow.toLocaleTimeString() + " : " + message;
    console.log(message);
}

window.addEventListener("click", () => {
    cpt++;
    count.innerText = cpt;
    if (cpt > 4 && cpt < 10) {
        onClick.textContent = "Bravo, bel échauffement !"
    }
    if (cpt > 9) {
        onClick.textContent = "Vous êtes passé maître en l'art du clic !"
    }
})

var i = 0;

function tkt() {
    setInterval(alternerCouleur,8000);
}

function alternerCouleur() {
        setTimeout(changeRed,2000);
        setTimeout(changeYellow,4000);
        setTimeout(changeGreen,6000);
        setTimeout(changeYellow,8000);  
        
}

function changeRed() {
    red.style.backgroundColor = "red";
    green.style.backgroundColor = "";
    yellow.style.backgroundColor = "";
}

function changeGreen() {
    red.style.backgroundColor = "";
    green.style.backgroundColor = "green";
    yellow.style.backgroundColor = "";
}

function changeYellow() {
    red.style.backgroundColor = "";
    green.style.backgroundColor = "";
    yellow.style.backgroundColor = "yellow";
}

addDateTime(message);
tkt();