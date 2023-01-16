'use strict';
function renderWorldMap(sum, segment) {
    // on r�cup la world map
    fetch('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')
    .then(response => response.text())
        .then(svgContent => {
            // On l'ajoute au body
            document.body.innerHTML = svgContent;

            // On ajoute un span pour le nom du pays s�lectionn�
            let d = document.createElement('span')
            document.body.appendChild(d)

            // On r�cup�re tout nos pays
            const countries = document.querySelectorAll('path');

            // On rajoute les events listeners
            countries.forEach(country => {
                // Lorsqu'on survole un pays, on le colore en blue sauf s'il est s�lectionn�
                country.addEventListener('mouseover', e => {
                    if (e.target.getAttribute('fill') === 'red')
                        return
                    e.target.setAttribute('fill', 'blue');
                });

                // Lorsqu'on arr�te de survoler un pays, on le colore en red sauf s'il est s�lectionn�
                country.addEventListener('mouseout', e => {
                    if (e.target.getAttribute('fill') === 'red')
                        return
                    e.target.setAttribute('fill', 'black');
                });

                // Lorsqu'on s�lectionne un pays, on le colore en rouge, et lorsqu'on le d�selectionne on lui enl�ve sa couleur
                // Aussi, on remplie un span avec le nom du pays
                country.addEventListener('click', e => {
                    if (e.target.getAttribute('fill') === 'red') {
                        e.target.setAttribute('fill', 'black');
                        document.querySelector('span').textContent = ""
                    } else {
                        e.target.setAttribute('fill', 'red');
                        document.querySelector('span').textContent = e.target.id
                    }
                });
            });
        });
}

renderWorldMap();
