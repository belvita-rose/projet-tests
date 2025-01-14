const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert'); // Pour vérifier les résultats
let nombre1, nombre2, resultat;

Given('les nombres {int} et {int}', function (num1, num2) {
  nombre1 = num1;
  nombre2 = num2;
});

When("j'additionne les deux nombres", function () {
  resultat = nombre1 + nombre2;
});

Then('le resultat devrait être {int}', function (expectedResult) {
  assert.strictEqual(resultat, expectedResult);
});
