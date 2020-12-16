const Manager = require('../lib/Manager');

jest.mock('../lib/Manager');

test('creates a manager object', () => {
    const teammate = new Manager();
    expect(teammate.number).toBeFalsy();
    expect(teammate.managerArr).toEqual([]);
});
test('check if getManagarArray and promptUser methods work', () => {
    const teammate = new Manager();
    expect(teammate.getManagerArray()).toEqual([]);
    teammate.promptUser();
    expect(teammate.getManagerArray()).toEqual(expect.arrayContaining([expect.any(Object)]));
});
test('check to see if getRole and setNumber methods work', () => {
    const teammate = new Manager();
    teammate.setValues('Kayla', '124324', 'kayla@gmail.com');
    teammate.setNumber('313-222-2222');
    expect(teammate.getRole()).toEqual(expect.objectContaining({
        name: 'Kayla',
        id: '124324',
        email: 'kayla@gmail.com',
        number: '313-222-2222'
      }));

});