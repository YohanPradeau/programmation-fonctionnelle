'use strict';

// Regex pour valider les champs
const nameRegex = /^[a-zA-Z]+$/;
const prenomRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// Référence aux éléments du formulaire
const nameInput = document.getElementById("nom");
const prenomInput = document.getElementById("prenom");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("mdp");
const submitButton = document.getElementById("submit-button");
const nameError = document.getElementById("nom-error");
const prenomError = document.getElementById("prenom-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("mdp-error");

// Ajouter un écouteur d'événement pour valider les champs lorsque le bouton de validation est cliqué
submitButton.addEventListener("click", validateForm);

function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    // Valider le champ nom
    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = "Le nom ne peut contenir que des lettres";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Valider le champ prénom
    if (!prenomRegex.test(prenomInput.value)) {
        prenomError.textContent = "Le prénom ne peut contenir que des lettres";
        isValid = false;
    } else {
        prenomError.textContent = "";
    }

    // Valider le champ email
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Entrez un email valide";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Valider le champ mot de passe
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (isValid) {
        nameInput.value       = ""
        prenomInput.value     = ""
        emailInput.value      = ""
        passwordInput.value   = ""
    }
}