const Intern = require('../lib/Intern.js');

test('returns interns school', () => {
    const emp = new Intern('Dave', 1,'dave@company.com','school');
  
    expect(emp.getInternSchool()).toEqual('school');
  
    
  }); 