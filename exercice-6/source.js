'use strict';

function init() {
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'numero')

    let button = document.createElement('button')
    button.setAttribute('id', 'valider')
    button.innerText = 'valider'


    button.addEventListener("click", function () {
        let numero = document.getElementById("numero").value;
        let isValid = checkNumero(numero);
        if (isValid) {
            console.log("Numero valide (06, 07, et de longueurs 8 sont valides)");
        } else {
            console.log("Numero non valide (06, 07, et de longueurs 8 sont valides)");
        }
    });


    document.body.appendChild(input)
    document.body.appendChild(button)
}

function checkNumero(numero) {
    let pattern = /^(06|07|01)[0-9]{8}$/;
    return pattern.test(numero);
}

init()


