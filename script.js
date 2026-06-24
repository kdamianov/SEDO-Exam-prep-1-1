function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

document.getElementById('btn-add').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = add(a, b);
});

<<<<<<< Updated upstream
document.getElementById('btn-subtract').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = subtract(a, b);
=======
function calculateAndDisplay(fn) {
  const rawA = document.getElementById('a').value;
  const rawB = document.getElementById('b').value;

  if (rawA === '' || rawB === '') {
    document.getElementById('result').textContent = 'Please fill both inputs';
    return;
  }

  const a = Number(rawA);
  const b = Number(rawB);
  document.getElementById('result').textContent = fn(a, b);
}

['add', 'subtract', 'multiply'].forEach(op => {
  document.getElementById(`btn-${op}`)
    .addEventListener('click', () => calculateAndDisplay(window[op]));
>>>>>>> Stashed changes
});