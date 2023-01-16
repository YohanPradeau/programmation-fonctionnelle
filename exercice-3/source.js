'use strict';

let moves = 0
let x = []

function MyMorpionXO() {

    let c, r, t, id;
    id = 0
    t = document.createElement('table');
    t.style.width = "420px";
    t.style.height = "420px";
    t.style.border = "0px";
    t.style.borderSpacing = "0px";
    t.setAttribute("id", 'main')

    for (let row = 0; row < 3; row++) {
        r = t.insertRow(0);
        for (let col = 0; col < 3; col++) {
            c = r.insertCell(0);;
            c.setAttribute("id", id)
            c.style.border = "1px solid black";
            c.style.width = "140px";
            c.style.height = "140px";
            c.style.fontSize = "50px"

            id++
            x.push(c)
        }
    }

    x.forEach(cell => {
        cell.addEventListener('click', function () {
            clickCell(cell.getAttribute("id"))
        })
    })


    // On ajoute notre div containeur a notre page.
    document.body.appendChild(t);
}

function clickCell(id) {
    if (id === undefined || id === null)
        throw "invalid id"
    let targetCell = document.getElementById(id)
    if (targetCell.innerHTML !== "")
        throw "Cette case est deja utilisee"

    if (moves % 2) 
        targetCell.innerHTML = "X"
    else
        targetCell.innerHTML = "O"

    moves++
    checking(id)
}

function checking(id) {
    const myPlayer = document.getElementById(id).innerHTML
    let win = false

    if (checkingRow(myPlayer) || checkingCol(myPlayer) || checkingDiag(myPlayer) )
        myPlayerWin(myPlayer)

    if (checkingDraw())
        reset()

    return false;
}

function checkingRow(myPlayer) {
    // Vérification des lignes
    if ((x[0].innerHTML === myPlayer && x[1].innerHTML === myPlayer && x[2].innerHTML === myPlayer)
        || (x[3].innerHTML === myPlayer && x[4].innerHTML === myPlayer && x[5].innerHTML === myPlayer)
        || (x[6].innerHTML === myPlayer && x[7].innerHTML === myPlayer && x[8].innerHTML === myPlayer)) {
        return true
    }
    return false
}

function checkingCol(myPlayer) {
    // Vérification des colonnes
    if ((x[0].innerHTML === myPlayer && x[3].innerHTML === myPlayer && x[6].innerHTML === myPlayer)
        || (x[1].innerHTML === myPlayer && x[4].innerHTML === myPlayer && x[7].innerHTML === myPlayer)
        || (x[2].innerHTML === myPlayer && x[5].innerHTML === myPlayer && x[8].innerHTML === myPlayer)) {
            return true
    }
    return false
}

function checkingDiag(myPlayer) {
    // Vérification des diagonales
    if (x[0].innerHTML === myPlayer && x[4].innerHTML === myPlayer && x[8].innerHTML === myPlayer) {
        return true
    }
    if (x[2].innerHTML === myPlayer && x[4].innerHTML === myPlayer && x[6].innerHTML === myPlayer) {
        return true
    }
    return false
}

function checkingDraw() {
    //si on a une case de vide, alors on est pas en draw
    for (let i = 0; i < x.length; i++) {
        if (x[i].innerHTML === "")
            return false
    }
    alert("Egalite, on repart pour un tour !");
    return true
}

function myPlayerWin(myPlayer) {
    alert(`Victoire du joueur ${myPlayer}!`);
    reset()
}

function reset() {
    x = [];
    moves = 0

    document.getElementById('main').remove()

    MyMorpionXO()
}

MyMorpionXO()
