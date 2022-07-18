const hambergur = document.querySelector('.allign');
const contacts = document.querySelector('.contacts');
const closes = document.querySelector('.close');
const main = document.querySelector('.main');
const navlink = document.querySelector('.navlinks1');
hambergur.addEventListener('click', (e) => {
  e.preventDefault();
  hambergur.classList.toggle('close');
  closes.style.display = 'block';
  hambergur.style.display = 'none';
  contacts.style.display = 'block';
  main.style.opacity = '0';
});

closes.addEventListener('click', (e) => {
  e.preventDefault();
  closes.classList.toggle('allign');
  hambergur.style.display = 'block';
  closes.style.display = 'none';
  contacts.style.display = 'none';
  main.style.opacity = '1';
});
navlink.addEventListener('click', (e) => {
  e.preventDefault();
  hambergur.style.display = 'block';
  closes.style.display = 'none';
  contacts.style.display = 'none';
  main.style.opacity = '1';
});
contacts.addEventListener('click', (e) => {
  e.preventDefault();
  contacts.style.display = 'block';
  main.style.opacity = '1';
});
