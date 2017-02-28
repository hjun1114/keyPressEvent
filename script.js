window.addEventListener('keydown', function(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.toggle("pressed");
});
