var modal = document.querySelector('.login-modal');
var userButton = document.querySelector('.user-btn');
var close = document.querySelector('.m-close');

modal.classList.remove('login-modal--active');
userButton.onclick = function() {
  modal.classList.add('login-modal--active');
};

close.onclick = function() {
  modal.classList.remove('login-modal--active');
};