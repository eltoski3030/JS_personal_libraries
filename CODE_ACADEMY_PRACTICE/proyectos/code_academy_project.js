let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route, you literally cross back into New York! At this point, you are very close to the end.';

// Task 1: Turn the story into an array and log it
let storyWords = story.split(' ');
console.log(storyWords);

// Task 2: Convert the array back to a string using join and log the final story
console.log(storyWords.join(' '));

// Task 3: Count the number of words
let count = 0;
storyWords.forEach(word => {
  count++;
});
console.log(count);

// Task 4: Filter out instances of the word "literally"
let unnecessaryWord = 'literally';
storyWords = storyWords.filter(word => word !== unnecessaryWord);

// Task 5: Log the filtered story to the console
console.log(storyWords.join(' '));

// Task 6: Replace misspelled words
let misspelledWord = 'beautifull';
storyWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
});

// Task 7: Log the final corrected story to the console
console.log(storyWords.join(' '));
