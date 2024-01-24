class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get department() {
      return this._department;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;  // The -= operator is an assignment operator combined with subtraction, and it's a shorthand way of writing this._remainingVacationDays = this._remainingVacationDays - daysOff;
    }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
  
  // Example: Take 5 vacation days for surgeonRomero
  surgeonRomero.takeVacationDays(5);
  
  // Example: Take 3 vacation days for surgeonJackson
  surgeonJackson.takeVacationDays(3);
  
  console.log(surgeonRomero.name); // Output: Francisco Romero
  console.log(surgeonRomero.department); // Output: Cardiovascular
  console.log(surgeonRomero.remainingVacationDays); // Output: 15 (deducted 5 days)
  
  console.log(surgeonJackson.name); // Output: Ruth Jackson
  console.log(surgeonJackson.department); // Output: Orthopedics
  console.log(surgeonJackson.remainingVacationDays); // Output: 17 (deducted 3 days)
  
  
