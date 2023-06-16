// Получаем элементы с помощью метода document.querySelector()
const nextButton = document.querySelector('.exclusive-icon-next');
const gamesBlock = document.querySelector('.exclusive-games');

// Добавляем обработчик события клика на элемент с классом .exclusive-icon-next
nextButton.addEventListener('click', function() {
  // Сдвигаем блок .exclusive-games влево на 55px с помощью свойства style.left
  gamesBlock.style.left = parseInt(gamesBlock.style.left || 0) - 55 + 'px';
});
