class Media {
    constructor(author, title, ratings = [], isCheckedOut = false) {
      this._author = author;
      this._title = title;
      this._ratings = ratings;
      this._isCheckedOut = isCheckedOut;
    }
  
    getAverageRating() {
      if (this._ratings.length === 0) {
        return 0;
      }
      const sum = this._ratings.reduce((total, rating) => total + rating, 0);
      return sum / this._ratings.length;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    addRating(rating) {
      this._ratings.push(rating);
    }
  }
  
  class Book extends Media {
    constructor(author, title, ratings, pages, isCheckedOut) {
      super(author, title, ratings, isCheckedOut);
      this._pages = pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, ratings, runTime, isCheckedOut) {
      super(director, title, ratings, isCheckedOut);
      this._runTime = runTime;
    }
  }
  
  class CD extends Media {
    constructor(author, title, ratings, isCheckedOut) {
      super(author, title, ratings, isCheckedOut);
    }
  }

// Create an instance of the Book class
const bookExample = new Book('John Doe', 'Fantastic Book', [4, 5, 3], 300, false);

// Create an instance of the Movie class
const movieExample = new Movie('Jane Smith', 'Awesome Movie', [5, 4, 4], 120, true);

// Create an instance of the CD class
const cdExample = new CD('Alice Johnson', 'Cool Album', [3, 4, 5], false);

// Example usage of the methods
console.log('--- Book Example ---');
console.log(bookExample)
console.log('Average Rating:', bookExample.getAverageRating());
console.log('Toggle CheckOut Status:', bookExample.toggleCheckOutStatus());
console.log('After CheckOut:', bookExample._isCheckedOut);

console.log('\n--- Movie Example ---');
console.log('Average Rating:', movieExample.getAverageRating());
console.log('Toggle CheckOut Status:', movieExample.toggleCheckOutStatus());
console.log('After CheckOut:', movieExample._isCheckedOut);

console.log('\n--- CD Example ---');
console.log('Average Rating:', cdExample.getAverageRating());
console.log('Toggle CheckOut Status:', cdExample.toggleCheckOutStatus());
console.log('After CheckOut:', cdExample._isCheckedOut);
