'use strict';
function drawBar(sum, segment) {
    // On vérifie que les valeurs soient justes.
    if (segment > sum)
        throw "Erreur: votre pourcent(segment) ne peux etre supperieur a votre total(sum) !"

    // Containeur de la barre de progression.
    var progressBarContainer = document.createElement("div");
    progressBarContainer.style.width = "100%";
    progressBarContainer.style.height = "30px";
    progressBarContainer.style.border = "1px solid black";
    progressBarContainer.style.display = "flex";

    // Partie coloré de la barre de progression.
    var coloredSegment = document.createElement("div");
    coloredSegment.style.width = (segment * 100) / sum + "%";
    coloredSegment.style.height = "100%";
    coloredSegment.style.backgroundColor = "green";

    // Partie non-coloré de la barre de progression.
    var nonColoredSegment = document.createElement("div");
    nonColoredSegment.style.width = 100 - ((segment * 100) / sum) + "%";
    nonColoredSegment.style.height = "100%";
    nonColoredSegment.style.backgroundColor = "white";

    // On ajoute les segment a notre div containeur.
    progressBarContainer.appendChild(coloredSegment);
    progressBarContainer.appendChild(nonColoredSegment);

    // On ajoute notre div containeur a notre page.
    document.body.appendChild(progressBarContainer);
}

drawBar(1245,722)
