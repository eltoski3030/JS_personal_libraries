class Weapons {
    constructor(properties, damage, durability, multiplicator) {
      this._properties = properties;
      this._damage = damage;
      this._durability = durability;
      this._multiplicator = multiplicator;
    }
  
    get multiplicator() {
      return this._multiplicator * this._damage;
    }
  }

  
  class Swords extends Weapons {
    constructor(properties, damage, durability, multiplicator, slashDamage, swordName) {
      super(properties, damage, durability, multiplicator);
      this._swordName = swordName;
      this._slashDamage = slashDamage;
    }
  
    get name() {
      return `${this._swordName} 
          With the special properties of: ${this._properties}
          The damage would be ${this._damage}
          and a slash damage of ${this._slashDamage}.
          The multiplicator is ${this._multiplicator} with a total damage of  ${this.multiplicator}`;
    }
  }
  
  
  // Create an array to store instances of Swords
  let swordsArray = [];
  
  // Create an instance of Swords and push it to the array
  let katanaSword = new Swords(['slash', 'master', 'dodge'], 1500, 10000, 1.5,200,'katana');
  swordsArray.push(katanaSword);
  
  console.log(swordsArray);
  console.log(katanaSword.name)