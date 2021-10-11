const shemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
let cost = 800;
let totalPrice = 0;

shemeSvg.addEventListener('click', (event) => {
  if (!event.target.classList.contains('booked')) {
    event.target.classList.toggle('active');
    let totalSeats = shemeSvg.querySelectorAll('.active').length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
  }
})

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
})