const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const teammate = new Employee();
    expect(teammate.name).toBeFalsy();
    expect(teammate.id).toBeFalsy();
    expect(teammate.email).toBeFalsy();
});
test('check if getName, getId, getEmail, setValues, and getRole methods work', () => {
    const teammate = new Employee();
    teammate.setValues('Kayla', '124324', 'kayla@gmail.com');
    expect(teammate.getName()).toBe('Kayla');
    expect(teammate.getId()).toBe('124324');
    expect(teammate.getEmail()).toBe('kayla@gmail.com');
    expect(teammate.getRole()).toEqual(expect.objectContaining({
        name: 'Kayla',
        id: '124324',
        email: 'kayla@gmail.com'
      }));
});