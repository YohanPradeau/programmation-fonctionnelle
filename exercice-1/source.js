'use strict';
function gridGenerator(xAxis, yAxis) {
    let c, r, t;
    t = document.createElement('table');
    for (let row = 0; row < xAxis; row++) {
        r = t.insertRow(0);
        for (let col = 0; col < yAxis; col++) {
            c = r.insertCell(0);
            c.width = 50;
            c.height = 50;
            c.bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
    }
    document.body.appendChild(t);
};

function randomColorGenerator() {
    let t = document.getElementsByTagName('tbody');

    for (let row of t[0].children) {
        for (let col of row.children) {
            col.bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
    }

    setTimeout(randomColorGenerator, Math.random(0) + 1000);
};

gridGenerator(4, 4);
randomColorGenerator();