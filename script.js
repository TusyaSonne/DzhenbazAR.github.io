const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form');
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

// Функция для удаления класса 'active'
function removeActiveClasses() {
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");
    navbar.classList.remove("active");
}

//Классы для показания активности нажатых иконок
searchIcon.addEventListener('click', () =>{ 
    if (searchForm.classList.contains("active")) {
        searchForm.classList.remove("active");
    } else {
        removeActiveClasses();
        searchForm.classList.add("active");
    }
});

/* --Поиск заголовков по странице-- */
const searchBox = document.getElementById('search-box');
const sections = document.querySelectorAll('section');

searchBox.addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase();
    
    sections.forEach(section => {
        const title = section.querySelector('.title'); 
        
        if (title) {
            const sectionTitle = title.innerText.toLowerCase();
            
            if (sectionTitle.includes(searchText)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        }
    });
});


menuIcon.addEventListener('click', () =>{ 
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
    } else {
        removeActiveClasses();
        navbar.classList.add("active");
    }
});


const cartIcon = document.querySelector('.cart-icon');
const cartItemsContainer = document.querySelector('.cart-items-container');

cartIcon.addEventListener('click', () =>{ 
    if (cartItemsContainer.classList.contains("active")) {
        cartItemsContainer.classList.remove("active");
    } else {
        removeActiveClasses();
        cartItemsContainer.classList.add("active");
    }

});

//Изчезание значков при скролле
window.onscroll = ()=>{
    // searchForm.classList.remove("active");
    // cartItemsContainer.classList.remove("active");
    navbar.classList.remove("active");
}


/* -- Удаление элемента из корзины -- */
const cartItems = document.querySelectorAll('.cart-item');
const removeButtons = document.querySelectorAll('.cart-item .fas.fa-times');

// Добавляем обработчики событий для каждой иконки крестика
removeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Удаляем соответствующий элемент корзины при нажатии на крестик
        cartItems[index].remove();
    });
});

/* ОБРАБОТЧИК СОБЫТИЙ КОРЗИНЫ РАЗДЕЛА КОНФЕТ */

// Получаем все кнопки "добавить в корзину" в разделе конфет
const addToCartButtons = document.querySelectorAll('.candy-card .btn');

// Добавляем обработчик событий для каждой кнопки "добавить в корзину"
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); //предотвращение стандартного поведения кнопок (обновления страницы)
        // Получаем информацию о товаре из блока candy-card, который был выбран
        const candyCard = button.closest('.candy-card');
        const itemName = candyCard.querySelector('h3').innerText;
        const itemPrice = candyCard.querySelector('.price').innerText;

        // Создаем новый элемент корзины
        const newCartItem = document.createElement('div');
        newCartItem.classList.add('cart-item');

        // Добавляем информацию о товаре в новый элемент корзины
        newCartItem.innerHTML = `
            <span class="fas fa-times"></span>
            ${candyCard.querySelector('img').outerHTML}
            <div class="content">
                <h3>${itemName}</h3>
                <div class="price">${itemPrice}</div>
            </div>
        `;

        // Добавляем обработчик события для удаления товара из корзины
        const removeButton = newCartItem.querySelector('.fa-times');
        removeButton.addEventListener('click', () => {
            newCartItem.remove();
        });

        // Находим элемент, перед которым нужно добавить новый элемент корзины
        const orderButton = document.querySelector('.cart-items-container .btn');
        
        // Добавляем новый элемент перед кнопкой "Заказать сейчас"
        cartItemsContainer.insertBefore(newCartItem, orderButton);
    });
});

/* ОБРАБОТЧИК СОБЫТИЙ КОРЗИНЫ РАЗДЕЛА МАРМЕЛАДА */

// Получаем все элементы с классом cart-add (значки корзины) в разделе мармелада
const cartAddIcons = document.querySelectorAll('.marmelade-card .icons');

// Добавляем обработчик событий для каждого элемента значка корзины
cartAddIcons.forEach((icon, index) => {
    icon.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение значка корзины

        // Получаем информацию о товаре из блока marmelade-card, который был выбран
        const marmeladeCard = icon.closest('.marmelade-card');
        const itemName = marmeladeCard.querySelector('h3').innerText;
        const itemPrice = marmeladeCard.querySelector('.price').innerText;

        // Создаем новый элемент корзины
        const newCartItem = document.createElement('div');
        newCartItem.classList.add('cart-item');

        // Добавляем информацию о товаре в новый элемент корзины
        newCartItem.innerHTML = `
            <span class="fas fa-times"></span>
            ${marmeladeCard.querySelector('.img').innerHTML}
            <div class="content">
                <h3>${itemName}</h3>
                <div class="price">${itemPrice}</div>
            </div>
        `;

        // Добавляем обработчик события для удаления товара из корзины
        const removeButton = newCartItem.querySelector('.fa-times');
        removeButton.addEventListener('click', () => {
            newCartItem.remove();
        });

        // Находим элемент, перед которым нужно добавить новый элемент корзины
        const orderButton = document.querySelector('.cart-items-container .btn');

        // Добавляем новый элемент перед кнопкой "Заказать сейчас"
        cartItemsContainer.insertBefore(newCartItem, orderButton);
    });
});


/* Реализация поиска по странице */




//Выдвижение карточек с часто задаваемыми вопросами
const faqs = document.querySelectorAll('.faqs article')

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        //смена иконок при открытии карточек
        const icon = faq.querySelector('.icon i');
        if(icon.className === 'fas fa-plus') {
            icon.className = 'fas fa-minus';
        }
        else {
            icon.className = 'fas fa-plus';
        }
    })
})
