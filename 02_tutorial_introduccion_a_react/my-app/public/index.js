const w = window;
const d = document;

w.addEventListener('mousedown', function(e) {
  d.body.classList.add('mouse-navigation');
  d.body.classList.remove('kbd-navigation');
});

w.addEventListener('keydown', function(e) {
  if (e.keyCode === 9) {
    d.body.classList.add('kbd-navigation');
    d.body.classList.remove('mouse-navigation');
  }
});

w.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
    e.preventDefault();
  }
});

w.onerror = function(message, source, line, col, error) {
  var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
  errors.textContent += text + '\n';
  errors.style.display = '';
};

console.error = (function(old) {
  return function error() {
    errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
    errors.style.display = '';
    old.apply(this, arguments);
  }
})(console.error);