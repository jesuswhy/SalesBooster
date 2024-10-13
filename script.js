document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Закрываем все активные элементы
            faqItems.forEach(el => el.classList.remove('active'));
            // Переключаем класс активного на текущем элементе
            item.classList.toggle('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", type);

const textArray = ["Автоматизируй продажи", "Увеличь прибыль", "Торгуй как профи"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

// Рассчитываем максимальную длину строки
const maxTextLength = Math.max(...textArray.map(text => text.length));

function type() {
    const typedText = document.getElementById("typed-text");

    if (!isDeleting && charIndex < textArray[index].length) {
        // Добавляем символы
        currentText += textArray[index].charAt(charIndex);
        charIndex++;
        typedText.textContent = currentText;
    } else if (isDeleting && charIndex > 0) {
        // Удаляем символы
        currentText = currentText.substring(0, charIndex - 1);
        charIndex--;
        typedText.textContent = currentText;
    }

    if (charIndex === textArray[index].length) {
        // Если строка завершена, добавляем пробелы и пауза перед удалением
        currentText = textArray[index].padEnd(maxTextLength, " ");
        typedText.textContent = currentText;
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        // Переход к следующей строке
        isDeleting = false;
        index = (index + 1) % textArray.length;
        setTimeout(type, 500);
    } else {
        // Устанавливаем задержку между каждым шагом
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", type);
