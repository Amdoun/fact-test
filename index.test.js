const fact = require('./service')

test('Expects fact result', () => {
    expect(fact(5)).toBe(120);
})