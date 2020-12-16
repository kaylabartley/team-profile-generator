const Manager = require('../lib/Manager');

jest.mock('../lib/Manager');

test('creates a manager object', () => {
    const teammate = new Manager();
    expect(teammate.getManagerArray()).toBe(false);
    teammate.promptUser();
    expect(teammate.getManagerArray()).toEqual(expect.arrayContaining([expect.any(Object)]));


});