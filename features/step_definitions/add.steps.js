const { Given, When, Then } = require('@cucumber/cucumber');
const { add } = require('../../add');
const assert = require('assert');

let a, b, resultat;

Given('les nombres {int} et {int}', (nombre1, nombre2) => {
    a = nombre1;
    b = nombre2;
});

When("j'additionne les deux nombres", () => {
    resultat = add(a, b);
});

Then('le résultat devrait être {int}', (resultatAttendu) => {
    assert.strictEqual(resultat, resultatAttendu);
});
