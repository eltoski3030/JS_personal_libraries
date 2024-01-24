// scripts.js
let section1 = document.getElementById('section1')
section1.style.fontSize = '40px';
section1.style.color = 'blue';

// Use querySelectorAll to select all elements with the class 'btn'
let buttons = document.querySelectorAll('.btn');

let color_btn = (event) => {
  // Get the clicked button
  let clickedButton = event.target;

  // Change the color of the clicked button to blue
  clickedButton.style.backgroundColor = 'blue';
};

// Attach click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', color_btn);
});







