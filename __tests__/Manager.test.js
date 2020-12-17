const Manager = require('../lib/Manager');


test('creates an Engineer object', () => {
    const teammate = new Manager();
    expect(teammate.number).toBeFalsy();
});

test('check to see if getRole and setNumber methods work', () => {
    const teammate = new Manager();
    teammate.setNumber('313-444-7777');
    expect(teammate.number).toBe('313-444-7777');
    expect(teammate.getRole()).toBe('Manager');

});
