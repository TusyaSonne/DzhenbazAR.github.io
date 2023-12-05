const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form');
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

//Классы для показания активности нажатых иконок
searchIcon.addEventListener('click', () =>{ 
    searchForm.classList.add("active");
    cartItemsContainer.classList.remove("active"); //убираем корзину при активации поиска
    navbar.classList.remove("active");
});


menuIcon.addEventListener('click', () =>{ 
    navbar.classList.add("active");
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active"); 
});


const cartIcon = document.querySelector('.cart-icon');
const cartItemsContainer = document.querySelector('.cart-items-container');

cartIcon.addEventListener('click', () =>{ 
    cartItemsContainer.classList.add("active");
    searchForm.classList.remove("active"); //убираем поиск при активации корзины
    navbar.classList.remove("active");

});

//Изчезание значков при скролле
window.onscroll = ()=>{
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");
    navbar.classList.remove("active");
}


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