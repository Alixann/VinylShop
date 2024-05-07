const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetElement = document.getElementById(item.dataset.target);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

//сердечко избранное
const hearts = document.querySelectorAll('.heart');
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('active');
  });
});
