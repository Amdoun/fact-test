const fact = require('./index')

test('Expects fact result', () => {
    expect(fact(5)).toBe(120);
})