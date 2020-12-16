const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer');

test('creates a engineer object', () => {
    const teammate = new Engineer();
    expect(teammate.getEngineerArray()).toBe(false);
    teammate.promptUser();
    expect(teammate.getEngineerArray()).toEqual(expect.arrayContaining([expect.any(Object)]));


});