const Engineer = require('../lib/Engineer.js');

test('returns engineer github', () => {
    const emp = new Engineer('Dave', 1,'dave@company.com','github');
  
    expect(emp.getGithub()).toBe(`github`)
    
  });