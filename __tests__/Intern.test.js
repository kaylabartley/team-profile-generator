const Intern = require('../lib/Intern');

jest.mock('../lib/Intern');

test('creates an intern object', () => {
    const teammate = new Intern();
    expect(teammate.school).toBeFalsy();
    expect(teammate.internArr).toEqual([]);
});
test('check if getInternArray and promptUser methods work', () => {
    const teammate = new Intern();
    expect(teammate.getInternArray()).toEqual([]);
    teammate.promptUser();
    expect(teammate.getInternArray()).toEqual(expect.arrayContaining([expect.any(Object)]));
});
test('check to see if getRole and setSchool methods work', () => {
    const teammate = new Intern();
    teammate.setValues('Kayla', '124324', 'kayla@gmail.com');
    teammate.setSchool('Vanderbilt University');
    expect(teammate.getRole()).toEqual(expect.objectContaining({
        name: 'Kayla',
        id: '124324',
        email: 'kayla@gmail.com',
        school: 'Vanderbilt University'
      }));

});