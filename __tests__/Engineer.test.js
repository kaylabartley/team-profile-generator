const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer');

test('creates an Engineer object', () => {
    const teammate = new Engineer();
    expect(teammate.username).toBeFalsy();
    expect(teammate.engineerArr).toEqual([]);
});
test('check if getEngineerArray and promptUser methods work', () => {
    const teammate = new Engineer();
    expect(teammate.getEngineerArray()).toEqual([]);
    teammate.promptUser();
    expect(teammate.getEngineerArray()).toEqual(expect.arrayContaining([expect.any(Object)]));
});
test('check to see if getRole and setUserName methods work', () => {
    const teammate = new Engineer();
    teammate.setValues('Kayla', '124324', 'kayla@gmail.com');
    teammate.setUsername('kaylatoocool');
    expect(teammate.getRole()).toEqual(expect.objectContaining({
        name: 'Kayla',
        id: '124324',
        email: 'kayla@gmail.com',
        username: 'kaylatoocool'
      }));

});