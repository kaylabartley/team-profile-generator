const Intern = require('../lib/Intern');

jest.mock('../lib/Intern');

test('creates a intern object', () => {
    const teammate = new Intern();
    expect(teammate.getInternArray()).toBe(false);
    teammate.promptUser();
    expect(teammate.getInternArray()).toEqual(expect.arrayContaining([expect.any(Object)]));


});