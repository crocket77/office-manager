const Employee = require('../lib/Employee.js');


// jest.mock('../lib/Potion.js');

test('creates a employee object', () => {
  const emp = new Employee('Dave', 1,'dave@company.com');

  expect(emp.name).toBe('Dave');
  expect((emp.id).toString()).toEqual(expect.any(String));
  expect(emp.email).toEqual(expect.any(String));
  expect(emp.role).toEqual(expect.any(String));
});

test('returns employee name', () => {
  const emp = new Employee('Dave', 1,'dave@company.com','manager');

  expect(emp.getName()).toBe('Dave');

  
});

test('returns employee ID', () => {
  const emp = new Employee('Dave', 1,'dave@company.com','manager');

  expect(emp.getId().toString()).toBe('1');

});

test('returns employee email', () => {
  const emp = new Employee('Dave', 1,'dave@company.com','manager');

  expect(emp.getEmail()).toBe('dave@company.com');

});

test('returns employee role', () => {
  const emp = new Employee('Dave', 1,'dave@company.com','manager');

  expect(emp.getRole()).toBe('manager');

});




// test("gets player's health value", () => {
//   const player = new Player('Dave');

//   expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
// });

// test("gets player's stats as an object", () => {
//   const player = new Player('Dave');

//   expect(player.getStats()).toHaveProperty('potions');
//   expect(player.getStats()).toHaveProperty('health');
//   expect(player.getStats()).toHaveProperty('strength');
//   expect(player.getStats()).toHaveProperty('agility');
// });

// test('checks if player is alive or not', () => {
//   const player = new Player('Dave');

//   expect(player.isAlive()).toBeTruthy();

//   player.health = 0;

//   expect(player.isAlive()).toBeFalsy();
// });

// test('gets inventory from player or returns false', () => {
//   const player = new Player('Dave');

//   expect(player.getInventory()).toEqual(expect.any(Array));

//   player.inventory = [];

//   expect(player.getInventory()).toEqual(false);
// });

// test('adds a potion to the inventory', () => {
//   const player = new Player('Dave');
//   const oldCount = player.inventory.length;

//   player.addPotion(new Potion());

//   expect(player.inventory.length).toBeGreaterThan(oldCount);
// });

// test('uses a potion from inventory', () => {
//   const player = new Player('Dave');
//   player.inventory = [new Potion(), new Potion(), new Potion()];
//   const oldCount = player.inventory.length;

//   player.usePotion(1);

//   expect(player.inventory.length).toBeLessThan(oldCount);
// });

// test("gets player's attack value", () => {
//   const player = new Player('Dave');
//   player.strength = 10;

//   expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
//   expect(player.getAttackValue()).toBeLessThanOrEqual(15);
// });

// test("subtracts from player's health", () => {
//   const player = new Player('Dave');
//   const oldHealth = player.health;

//   player.reduceHealth(5);

//   expect(player.health).toBe(oldHealth - 5);

//   player.reduceHealth(99999);

//   expect(player.health).toBe(0);
// });
