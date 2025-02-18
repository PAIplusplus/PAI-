const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const dropdown = document.getElementById('dropdown');
const closeDropdownButton = document.getElementById('close-dropdown');

hamburger.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('active');
});

const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.addEventListener('click', function (e) {
  e.preventDefault();
  dropdown.classList.toggle('active');
});

closeDropdownButton.addEventListener('click', function () {
  dropdown.classList.remove('active');
});

