document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------
    // 1. Кнопка "Наверх" (Back to Top)
    // -------------------------------------
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener('scroll', () => {
        // Показать кнопку, если прокрутка больше 200px
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Плавная прокрутка вверх при клике
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // -------------------------------------
    // 2. Аккордеон
    // -------------------------------------
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const currentItem = this.parentNode;
            const isActive = currentItem.classList.contains('active');

            // Закрываем все открытые элементы
            document.querySelectorAll('.accordion-item.active').forEach(item => {
                item.classList.remove('active');
            });

            // Если текущий элемент не был активен, открываем его
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });


    // -------------------------------------
    // 3. Фотогалерея с фильтрацией
    // -------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Управление активным классом кнопки
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || filter === category) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });


    // -------------------------------------
    // 4. Модальное окно с увеличением фото
    // -------------------------------------
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".modal .close-btn");
    const galleryImages = document.querySelectorAll('.gallery-item img');

    // Открытие модального окна при клике на фото
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src; // Копируем путь изображения
            modalImg.alt = this.alt;
        });
    });

    // Закрытие по крестику
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Закрытие по клику на фон
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

});