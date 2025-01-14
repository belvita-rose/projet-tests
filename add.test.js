const { add } = require('./add');

test('Additionne deux nombres positifs', () => {
    expect(add(2, 3)).toBe(5);
});

test('Additionne un nombre positif et un négatif', () => {
    expect(add(2, -3)).toBe(-1);
});

test('Additionne deux nombres négatifs', () => {
    expect(add(-2, -3)).toBe(-5);
});
