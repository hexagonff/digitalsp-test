const toggleButton = document.getElementById('header-toggle');
const navMenu = document.getElementById('header-nav');

// Функция для переключения меню
toggleButton.addEventListener('click', function (event) {
    navMenu.classList.toggle('open');
    event.stopPropagation();
});

// Закрытие меню при клике вне его
document.addEventListener('click', function (event) {
    if (!navMenu.contains(event.target) && !toggleButton.contains(event.target)) {
        navMenu.classList.remove('open');
    }
});