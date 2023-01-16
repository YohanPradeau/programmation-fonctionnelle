'use strict';
// Noms des bateaux utilisé
const NOMS = ["Sous-marin", "Torpilleur", "Destroyer", "Croiseur", "Cuirasse"]



// Grille de jeu
let positions =[[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
                [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

let myCells = []

function init() {
    // On initialise notre interface de jeu (tableau et liste)
    let c, r, t, u, l;

    // TABLEAU
    t = document.createElement('table');
    t.style.width = "580px";
    t.style.height = "580px";
    t.style.border = "0px";
    t.style.borderSpacing = "0px";
    t.setAttribute("id", 'main')

    for (let row = 12; row >= 0; row--) {
        r = t.insertRow(0);
        for (let col = 12; col >= 0; col--) {

            c = r.insertCell(0);
            c.setAttribute("id", row+"-"+col)
            c.style.border = "1px solid black";
            c.style.width = "40px";
            c.style.height = "40px";
            c.style.textAlign = "center";

            // première ligne sur l'affichage (on met les chiffres des colonnes)
            if (row === 0 && col !== 0) {
                c.innerText = col
            }

            // colonne la plus à gauche sur l'affichage (on met des lettres)
            if (row > 0 && col === 0) {
                c.innerText = (row + 9).toString(36).toUpperCase()
            }

            // toutes nos autres cases, sauf celle tout en haut à gauche qu'on ignore
            if (row !== 0 && col > 0) {
                myCells.push(c)
            }
        }
    }

    // Les event listener des cellules de jeu
    myCells.forEach(cell => {
        cell.addEventListener('click', function () {
            clickCell(cell.getAttribute("id"))
        })
    })

    // On ajoute notre div containeur à notre page.
    document.body.appendChild(t);

    // LISTE

    u = document.createElement("ul");
    for (let i = 1; i < 6; i++) {
        l = document.createElement("li");
        l.innerText = NOMS[i-1];
        l.id = i;
        u.appendChild(l);
    }

    // On ajoute notre liste à notre page.
    document.body.appendChild(u);

}

function clickCell(id) {
    let row = parseInt(id.split('-')[0])-1
    let col = parseInt(id.split('-')[1]) - 1
    let targetId = positions[row][col]

    // si c'est un bateau
    if (positions[row][col] > 0 && positions[row][col] < 6)
        return cellUsed(id, row, col, targetId)

    // si ce n'est pas un bateau ni une case déjà touché
    if (positions[row][col] === 0)
        return cellEmpty(id, row, col, targetId)
}

function cellUsed(id, row, col, targetId) {
    // On colorie la case en rouge
    document.getElementById(id).style.backgroundColor = "red"

    // On change la valeur de la case pour l'ignorer a l'avenir
    positions[row][col] = -1

    // On vérifie si y'a encore une partie du bateau non touché
    for (let row = 11; row >= 0; row--) {
        for (let col = 11; col >= 0; col--) {
            // Le bateau est encore en vie, on arrête donc la fonction ici
            if (positions[row][col] === targetId)
                return
        }
    }
    // Le bateau est mort, alors on barre son nom dans la liste des bateau
    let targetName = NOMS[targetId - 1]
    let t = document.getElementById(targetId)
    t.innerHTML = "<s>" + targetName + "</s>"

    // Vue qu'un nouveau bateau est mort, on check pour s'avoir si la partie est finit
    checkWinCond()
}

function cellEmpty(id, row, col, targetId) {
    document.getElementById(id).style.backgroundColor = "blue"
    positions[row][col] = -1
}

function checkWinCond() {
    // On vérifie si y'a encore une partie de bateau non touché
    for (let row = 11; row >= 0; row--) {
        for (let col = 11; col >= 0; col--) {
            if (positions[row][col] >= 1 )
                return
        }
    }

    // Tout les bateau sont coulés, victoire !
    alert('Victoire ! Vous avez gagne !')
}

init()