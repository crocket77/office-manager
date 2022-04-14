class Employee {

    constructor(name = 'no name',id='no ID',email='no email', role='Employee') {
        // super(name);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        
  
    };
        
    getName() {
      return this.name;
    };
    
    getId(){
      return this.id;
    };

    getEmail(){
      return this.email;
    };

    getRole(){
      return this.role;
    }

  }
    
    module.exports = Employee;