const Manager = require('../lib/Manager');
test('testing employee class in manager', () => {
    const manager = new Manager('Juan', '1', 'juan@flex.com', '1');
    expect(manager.getName()).toEqual('Juan');
    expect(manager.getId()).toEqual('1');
    expect(manager.getEmail()).toEqual('juan@flex.com');
})
test('testing manager get functions', () => {
    const manager = new Manager('Juan', '1', 'juan@flex.com', '1');
    expect(manager.getOfficeNum()).toEqual('1');
    expect(manager.getRole()).toEqual('Manager');
})