let weapons = {
  swords: {
    excalibur: {
      properties: ['hard hit', 'sweep', 'wall break'],
      damage: 1500,
      durability: 30000,
      multi: 3
    },
    rapier: {
      properties: ['fast hit', 'swirl', 'fast dash'],
      damage: 350,
      durability: 12500,
      multi: 2
    },
    common_sword: {
      properties: ['sword block', 'pierce', 'knight dash'],
      damage: 750,
      durability: 2200,
      multi: 3
    }
  },
  guns: {
    rifle: {
      properties: ['hard hit', 'sweep', 'wall break'],
      damage: 1500,
      durability: 30000,
      multi: 3
    },
    double_barrel: {
      properties: ['fast hit', 'swirl', 'fast dash'],
      damage: 350,
      durability: 12500,
      multi: 2
    },
    short_cannon: {
      properties: ['sword block', 'pierce', 'knight dash'],
      damage: 750,
      durability: 2200,
      multi: 3
    }
  },
  addSword(newSword, newProperties, newDamage, newDurability, newMulti) {
    this.swords[newSword] = {
      properties: newProperties,
      damage: newDamage,
      durability: newDurability,
      multi: newMulti
    };
  }
};

// Example usage of addSword method
weapons.addSword('katana', ['quick slash', 'counter', 'stealth'], 1200, 15000, 2.5);

console.log(weapons.swords);


/*//weapon builder

let weapons = {
    swords: {
      excalibur: {
        properties: ['hard hit', 'sweep', 'wall break'],
        damage: 1500,
        durability: 30000,
        multi: 3
      },
      rapier: {
        properties: ['fast hit', 'swirl', 'fast dash'],
        damage: 350,
        durability: 12500,
        multi: 2
      },
      common_sword: {
        properties: ['sword block', 'pierce', 'knight dash'],
        damage: 750,
        durability: 2200,
        multi: 3
      }
    },
    guns: {
      rifle: {
        properties: ['hard hit', 'sweep', 'wall break'],
        damage: 1500,
        durability: 30000,
        multi: 3
      },
      double_barrel: {
        properties: ['fast hit', 'swirl', 'fast dash'],
        damage: 350,
        durability: 12500,
        multi: 2
      },
      short_cannon: {
        properties: ['sword block', 'pierce', 'knight dash'],
        damage: 750,
        durability: 2200,
        multi: 3
      }
    },
    addSword(newSword, newProperties, newDamage, newDurability, newMulti) {
      this.swords[newSword] = {
        properties: newProperties,
        damage: newDamage,
        durability: newDurability,
        multi: newMulti
      };
    }
  };
  
  // Example usage of addSword method
  weapons.addSword('katana', ['quick slash', 'counter', 'stealth'], 1200, 15000, 2.5);
  
  console.log(weapons.swords);
  


 const weapon_builder = (type,damage,durability,multiplyer) =>{
return {
    type: type,
    damage: damage,
    durability: durability,
    multiplyer: multiplyer,
    attack: function(){
        return this.damage * this.multiplyer
    
    
}
}
}
const sword = weapon_builder("sword", 10, 100, 1.5);

// Call the attack function and log the result
console.log(sword.attack());

*/

