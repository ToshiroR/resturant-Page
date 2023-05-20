import './style.css';

const content = document.querySelector('#content');

function createMenu(name) {
  let div = document.createElement('div');
  div.textContent = name;
  div.id = name;

  return div;
}

function createHeader() {
  const header = document.createElement('header');
  header.classList = 'top-header';

  const hOne = document.createElement('h1');
  hOne.classList = 'title';
  hOne.textContent = 'Pupusas R Us';
  header.appendChild(hOne);

  return header;
}

content.appendChild(createHeader());
