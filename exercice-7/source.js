'use strict';

function computeNotes(notes) {
    let sum = notes.reduce((a, b) => a + b, 0);
    let avg = sum / notes.length;
    return avg.toFixed(1);
}

const nbMinNotes = 12;
const nbMaxNotes = 30;
const nbNotes = Math.floor(Math.random() * (nbMaxNotes - nbMinNotes) + nbMinNotes);
const notes = Array.from({ length: nbNotes }, () => Math.floor(Math.random() * 21));

let avg = computeNotes(notes);


console.log("Mes notes : ", notes)
console.log("Moyenne : " + avg);
