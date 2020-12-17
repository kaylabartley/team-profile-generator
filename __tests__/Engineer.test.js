const Engineer = require('../lib/Engineer');


test('creates an Engineer object', () => {
    const teammate = new Engineer();
    expect(teammate.username).toBeFalsy();
});

test('check to see if getRole and setUserName methods work', () => {
    const teammate = new Engineer();
    teammate.setUsername('kaylatoocool');
    expect(teammate.username).toBe('kaylatoocool');
    expect(teammate.getRole()).toBe('Engineer');

});