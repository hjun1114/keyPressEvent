function removeTransition (e) {
  if (e.propertyName !== 'transform'){ return; }
  this.classList.remove('pressed');
}

function play(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // let and const are alternatives to var
  // Both let and const declare local variables with block scope rather than function scope
  key.classList.toggle("pressed");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', play);
