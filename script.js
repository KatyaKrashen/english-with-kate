// Get the button and menu elements
const menuButton = document.getElementById('menu-button');
const menuContent = document.getElementById('menu-content');

// Toggle the visibility of the menu when the button is clicked
menuButton.addEventListener('click', function () {
  menuContent.classList.toggle('show');
});
