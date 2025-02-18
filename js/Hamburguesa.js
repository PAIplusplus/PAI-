const hamburgerBtn = document.getElementById('hamburger-btn');
const nav = document.getElementById('nav');
const dropdown = document.getElementById('dropdown');


hamburgerBtn.addEventListener('click', function () {
  nav.classList.toggle('active');


  if (nav.classList.contains('active')) {
    hamburgerBtn.innerHTML = '<i class="bi bi-x"></i>';
  } else {
    hamburgerBtn.innerHTML = '<i class="bi bi-list"></i>';
  }
});


const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.addEventListener('click', function (e) {
  e.preventDefault();
  dropdown.classList.toggle('active');
});


window.addEventListener('click', function (e) {
  if (!nav.contains(e.target) && !hamburgerBtn.contains(e.target) && !dropdown.contains(e.target)) {
    nav.classList.remove('active');
    hamburgerBtn.innerHTML = '<i class="bi bi-list"></i>';
    dropdown.classList.remove('active');
  }
});

