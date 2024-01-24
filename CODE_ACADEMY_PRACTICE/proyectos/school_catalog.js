class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    set numberOfStudents(students) {
      if (typeof students === 'number' && students >= 0) {
        this._numberOfStudents = students;
      } else {
        console.log('Invalid input. Please provide a non-negative number for numberOfStudents.');
      }
    }
  
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
  }
  
  const substituteTeachersArray = ['Teacher1', 'Teacher2', 'Teacher3', 'Teacher4'];
  const randomSubstitute = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  console.log('Random Substitute Teacher:', randomSubstitute);
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents); // Set the level as 'primary' here
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams = []) {
      super(name, 'High School', numberOfStudents); // Set the level as 'High School' here
      this._sportsTeams = sportsTeams;
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  console.log('Quick Facts for Lorraine Hansbury:');
  lorraineHansbury.quickFacts(); // Invoke the method to log quick facts
  
  // Example of creating a HighSchool instance
  const highSchoolExample = new HighSchool('Example High School', 1000, ['Football', 'Basketball', 'Soccer']);
  console.log('Sports Teams for Example High School:', highSchoolExample._sportsTeams);
  
  console.log(randomSubstitute)
  
  