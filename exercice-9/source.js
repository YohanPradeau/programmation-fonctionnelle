'use strict';

function init() {
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'input')

    let button = document.createElement('button')
    button.setAttribute('id', 'valider')
    button.innerText = 'valider'

    button.addEventListener("click", function () {
        let input = document.getElementById("input").value;
        let isPalindrome = checkPalindrome(input);
        if (isPalindrome) {
            console.log("C'est un palindrome");
        } else {
            console.log("Ce n'est pas un palindrome");
        }
    });


    document.body.appendChild(input)
    document.body.appendChild(button)
}

function checkPalindrome(str) {
    let lowerCaseStr = str.toLowerCase();
    let reverseStr = lowerCaseStr.split('').reverse().join('');
    return lowerCaseStr === reverseStr;
};


init()