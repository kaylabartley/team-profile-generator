const Intern = require('../lib/Intern');

test('creates an Engineer object', () => {
    const teammate = new Intern();
    expect(teammate.school).toBeFalsy();
});

test('check to see if getRole and setSchool methods work', () => {
    const teammate = new Intern();
    teammate.setSchool('Vanderbilt');
    expect(teammate.school).toBe('Vanderbilt');
    expect(teammate.getRole()).toBe('Intern');

});
