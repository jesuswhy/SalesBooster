document.addEventListener('DOMContentLoaded', function() {
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
