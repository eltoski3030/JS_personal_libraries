const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today’s Special is ${this._meal} for $ ${this._price}!`;
      } else {
        return 'Meal or price was not set correctly';
      }
    }
  };
  
  // Set meal and price
  menu.meal = 'shawarma';
  menu.price = 15;
  
  // Display meal and price
  console.log(menu._meal);
  console.log(menu._price);
  
  // Display today's special
  console.log(menu.todaysSpecial);
  