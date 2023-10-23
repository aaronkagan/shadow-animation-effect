const btn = document.querySelector('.btn');

const card = document.querySelector('.card-inner');
const cardShadow = document.querySelector('.card-shadow');

btn.addEventListener('click', () => {
  card.classList.toggle('appear');
  cardShadow.classList.toggle('appear');
});
