import './style.css';

function hello() {
  const button = document.createElement('button');

  button.id = 'stuff';
  button.textContent = 'hello';

  return button;
}
