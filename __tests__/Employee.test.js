const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const teammate = new Employee();
    expect(teammate.name).toBeFalsy();
    expect(teammate.id).toBeFalsy();
    expect(teammate.email).toBeFalsy();
    expect(teammate.employeeCards).toEqual([]);
});
test('check if getName, getId, getEmail, setValues, and getRole methods work', () => {
    const teammate = new Employee();
    teammate.setValues('Kayla', '124324', 'kayla@gmail.com');
    expect(teammate.getName()).toBe('Kayla');
    expect(teammate.getId()).toBe('124324');
    expect(teammate.getEmail()).toBe('kayla@gmail.com');
    expect(teammate.getRole()).toBe('Employee');
});

test('check if getEmployeeCards and getEmployeeCards methods work', () => {
    const teammate = new Employee();
    expect(teammate.getEmployeeCards()).toEqual([]);
    teammate.addEmployeeCard(new Object);
    expect(teammate.getEmployeeCards()).toEqual(expect.arrayContaining([expect.any(Object)]));
});
