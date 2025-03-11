touch assets / js / scripts.js
// Находим кнопку и элемент для изменения текста
const changeTextButton = document.querySelector('#change-text-button');
const textElement = document.querySelector('#text-to-change');

// Добавляем обработчик события "click"
changeTextButton.addEventListener('click', function () {
    textElement.textContent = 'Текст успешно изменен!';
});
