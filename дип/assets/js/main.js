// assets/js/main.js

// Данные товаров
const products = [
    { id: 1, name: 'Смартфон Samsung Galaxy', category: 'Техника', price: 45990, rating: 5, image: 'assets/images/phone.webp', categoryId: 'tech', description: 'Современный смартфон с отличной камерой и большим экраном. Идеальный подарок для любителей технологий.' },
    { id: 2, name: 'Духи Chanel Chance', category: 'Красота', price: 8990, rating: 5, image: 'assets/images/chanel.webp', categoryId: 'beauty', description: 'Изысканный аромат для особых случаев. Цветочные ноты с оттенками ванили и мускуса.' },
    { id: 3, name: 'Умные часы Apple Watch', category: 'Техника', price: 29990, rating: 5, image: 'assets/images/watch.jpg', categoryId: 'tech', description: 'Смарт-часы с множеством функций. Отслеживание здоровья, уведомления и многое другое.' },
    { id: 4, name: 'Набор для выжигания', category: 'Для детей', price: 2490, rating: 4, image: 'assets/images/wood.webp', categoryId: 'kids', description: 'Творческий набор для развития художественных способностей.' },
    { id: 5, name: 'Портативная колонка JBL', category: 'Техника', price: 5990, rating: 5, image: 'assets/images/jbl.png.webp', categoryId: 'tech', description: 'Мощная портативная колонка с отличным звуком.' },
    { id: 6, name: 'Сертификат в спа-салон', category: 'Развлечения', price: 5000, rating: 5, image: 'assets/images/spa.jpg', categoryId: 'entertainment', description: 'Подарочный сертификат на спа-процедуры.' },
    { id: 7, name: 'Кожаный портфель', category: 'Аксессуары', price: 12990, rating: 4, image: 'assets/images/backpack.webp', categoryId: 'accessories', description: 'Стильный кожаный портфель для работы.' },
    { id: 8, name: 'Подарочный набор для чая', category: 'Дом', price: 1990, rating: 4, image: 'assets/images/tea.webp', categoryId: 'home', description: 'Набор элитного чая в подарочной упаковке.' },
    { id: 9, name: 'Квест-комната сертификат', category: 'Развлечения', price: 3000, rating: 5, image: 'assets/images/quest.jpg', categoryId: 'entertainment', description: 'Сертификат на прохождение квеста.' },
    { id: 10, name: 'Фитнес-браслет Xiaomi', category: 'Техника', price: 3990, rating: 4, image: 'assets/images/xiaomi.webp', categoryId: 'tech', description: 'Фитнес-браслет с отслеживанием активности.' },
    { id: 11, name: 'Набор профессиональных красок', category: 'Искусство', price: 4490, rating: 5, image: 'assets/images/paint.jpg', categoryId: 'art', description: 'Профессиональные краски для художников.' },
    { id: 12, name: 'Электронная книга PocketBook', category: 'Техника', price: 15990, rating: 5, image: 'assets/images/book.webp', categoryId: 'tech', description: 'Электронная книга с подсветкой.' },
    { id: 13, name: 'Ювелирное украшение', category: 'Ювелирка', price: 15990, rating: 5, image: 'assets/images/ring.webp', categoryId: 'jewelry', description: 'Изящное ювелирное украшение.' },
    { id: 14, name: 'Настольная игра', category: 'Развлечения', price: 2990, rating: 5, image: 'assets/images/monopoly.webp', categoryId: 'entertainment', description: 'Увлекательная настольная игра для всей семьи.' },
    { id: 15, name: 'Домашний кинотеатр', category: 'Техника', price: 45990, rating: 5, image: 'assets/images/proector.webp', categoryId: 'tech', description: 'Домашний кинотеатр с объемным звуком.' },
    { id: 16, name: 'Плед из натуральной шерсти', category: 'Дом', price: 3490, rating: 4, image: 'assets/images/pled.webp', categoryId: 'home', description: 'Теплый и мягкий плед из натуральной шерсти.' }
];

// Данные акций
const promos = [
    { id: 1, title: 'Скидка 20% на технику', date: 'до 31.03.2026', desc: 'На всю электронику и гаджеты', image: '📱', icon: '💻' },
    { id: 2, title: 'Подарочная упаковка бесплатно', date: 'до 15.03.2026', desc: 'При заказе от 3000 рублей', image: '🎁', icon: '🎀' },
    { id: 3, title: '2=3', date: 'до 10.03.2026', desc: 'Третий товар в подарок', image: '🎉', icon: '✨' },
];

// Глобальные переменные
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Функции для работы с пользователем
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser')) || null;
}

function isLoggedIn() {
    const user = getCurrentUser();
    return user && user.isLoggedIn === true;
}

function updateAuthButtons() {
    const userActions = document.querySelector('.user-actions');
    if (!userActions) return;
    
    const loggedIn = isLoggedIn();
    const currentUser = getCurrentUser();
    
    if (loggedIn && currentUser) {
        // Пользователь авторизован - показываем кнопки личного кабинета и выхода
        userActions.innerHTML = `
            <a href="profile.html" class="login-btn">👤 ${currentUser.name}</a>
            <a href="#" onclick="logoutUser(event)" class="logout-link">Выйти</a>
            <a href="cart.html" class="cart-link">🛒<span class="cart-count" id="cartCount">${cart.length}</span></a>
        `;
    } else {
        // Пользователь не авторизован - показываем кнопки входа и регистрации
        userActions.innerHTML = `
            <a href="login.html" class="login-btn">Войти</a>
            <a href="register.html">Регистрация</a>
            <a href="cart.html" class="cart-link">🛒<span class="cart-count" id="cartCount">${cart.length}</span></a>
        `;
    }
}

// Выход из аккаунта
function logoutUser(event) {
    if (event) event.preventDefault();
    
    // Очищаем данные пользователя
    localStorage.removeItem('currentUser');
    
    // Обновляем кнопки
    updateAuthButtons();
    
    // Показываем уведомление
    showNotification('Вы вышли из аккаунта');
    
    // Если на странице профиля или корзины, перенаправляем на главную
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'profile.html' || currentPage === 'checkout.html') {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
}

// Регистрация пользователя
function registerUser(name, email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Проверка, существует ли пользователь
    if (users.find(u => u.email === email)) {
        showNotification('Пользователь с таким email уже существует');
        return false;
    }
    
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        registeredAt: new Date().toISOString(),
        addresses: [],
        settings: {
            notifications: true,
            newsletter: false
        }
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Автоматический вход после регистрации
    const currentUser = {
        isLoggedIn: true,
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone || '',
        registeredAt: newUser.registeredAt,
        addresses: newUser.addresses || [],
        settings: newUser.settings || { notifications: true, newsletter: false }
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    return true;
}

// Вход пользователя
function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        const currentUser = {
            isLoggedIn: true,
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone || '',
            registeredAt: user.registeredAt,
            addresses: user.addresses || [],
            settings: user.settings || { notifications: true, newsletter: false }
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        return true;
    }
    return false;
}

// Обновление счетчика корзины
function updateCartCount() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = cart.length;
    });
}

// Добавление в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`Товар "${product.name}" добавлен в корзину`);
}

// Удаление из корзины
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        const product = cart[index];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification(`Товар "${product.name}" удален из корзины`);
        
        // Если мы на странице корзины, обновляем её
        if (window.location.pathname.includes('cart.html')) {
            initCartPage();
        }
    }
}

// Переключение избранного
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index === -1) {
        favorites.push(productId);
        showNotification('Товар добавлен в избранное');
    } else {
        favorites.splice(index, 1);
        showNotification('Товар удален из избранного');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Обновляем кнопки избранного на странице
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        if (btn.dataset.productId == productId) {
            btn.classList.toggle('active');
        }
    });
}

// Уведомления
function showNotification(message, duration = 3000) {
    let notification = document.getElementById('notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, duration);
}

// Копирование в буфер
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Скопировано!');
    });
}

// Плавный скролл к секции
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Обработка формы контактов
function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    
    showNotification(`Спасибо, ${name}! Ваше сообщение отправлено. Мы ответим вам на ${email}`);
    event.target.reset();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateAuthButtons();
    updateCartCount();
    highlightActiveNav();
    
    // Проверяем, на какой странице мы находимся
    const path = window.location.pathname.split('/').pop() || 'index.html';
    
    if (path === 'catalog.html') {
        initCatalog();
    } else if (path === 'product.html') {
        initProductPage();
    } else if (path === 'cart.html') {
        initCartPage();
    } else if (path === 'promotions.html') {
        initPromotionsPage();
    } else if (path === 'index.html' || path === '') {
        initHomePage();
    }
});

// Подсветка активной ссылки
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// Инициализация главной страницы
function initHomePage() {
    const popularGrid = document.getElementById('popularProducts');
    if (popularGrid) {
        const popularProducts = products.slice(0, 4);
        popularGrid.innerHTML = popularProducts.map(product => `
            <div class="product-card">
                <a href="product.html?id=${product.id}" class="product-image">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='assets/images/placeholder.png'">
                </a>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <div class="product-title"><a href="product.html?id=${product.id}">${product.name}</a></div>
                    <div class="product-price">${product.price.toLocaleString()} ₽</div>
                    <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">В корзину</button>
                </div>
            </div>
        `).join('');
    }
}    


// Инициализация каталога
function initCatalog() {
    let currentPage = 1;
    const itemsPerPage = 8;
    let filteredProducts = [...products];
    
    const catalogGrid = document.getElementById('catalogGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const searchInput = document.getElementById('searchInput');
    const pagination = document.getElementById('pagination');
    
function renderCatalog() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageProducts = filteredProducts.slice(start, end);
    
    if (catalogGrid) {
        catalogGrid.innerHTML = pageProducts.map(product => `
            <div class="product-card">
                <a href="product.html?id=${product.id}" class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='assets/images/placeholder.png'">
                </a>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <div class="product-title"><a href="product.html?id=${product.id}">${product.name}</a></div>
                    <div class="product-price">${product.price.toLocaleString()} ₽</div>
                    <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
                    <div class="product-actions">
                        <button class="add-to-cart" onclick="addToCart(${product.id})">В корзину</button>
                        <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" data-product-id="${product.id}" onclick="toggleFavorite(${product.id})">❤️</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    renderPagination();
}
    
    function renderPagination() {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        
        if (pagination) {
            let html = '<a class="page-link" onclick="changePage(1)">«</a>';
            
            for (let i = 1; i <= totalPages; i++) {
                html += `<a class="page-link ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</a>`;
            }
            
            html += `<a class="page-link" onclick="changePage(${totalPages})">»</a>`;
            pagination.innerHTML = html;
        }
    }
    
    window.changePage = function(page) {
        currentPage = page;
        renderCatalog();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    window.filterProducts = function() {
        const category = categoryFilter.value;
        
        if (category === 'all') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter(p => p.category === category);
        }
        
        currentPage = 1;
        renderCatalog();
    };
    
    window.sortProducts = function() {
        const sort = sortFilter.value;
        
        switch(sort) {
            case 'priceAsc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                filteredProducts = [...products];
                if (categoryFilter.value !== 'all') {
                    filteredProducts = filteredProducts.filter(p => p.category === categoryFilter.value);
                }
                return;
        }
        
        currentPage = 1;
        renderCatalog();
    };
    
    window.searchProducts = function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        if (searchTerm) {
            filteredProducts = products.filter(p => 
                p.name.toLowerCase().includes(searchTerm) || 
                p.category.toLowerCase().includes(searchTerm)
            );
        } else {
            filteredProducts = [...products];
            if (categoryFilter.value !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.category === categoryFilter.value);
            }
        }
        
        currentPage = 1;
        renderCatalog();
    };
    
    renderCatalog();
}


// Инициализация страницы товара
function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (product) {
        document.title = `${product.name} - PerfectGift`;
        
        const productDetail = document.getElementById('productDetail');
        if (productDetail) {
            productDetail.innerHTML = `
                <div class="product-gallery">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain;" onerror="this.src='assets/images/placeholder.png'">
                </div>
                <div class="product-info-detailed">
                    <h1>${product.name}</h1>
                    <div class="product-meta">
                        <span class="product-category">${product.category}</span>
                        <span class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</span>
                    </div>
                    <div class="product-price-large">${product.price.toLocaleString()} ₽</div>
                    <div class="product-description">
                        <p>${product.description || 'Описание товара временно отсутствует.'}</p>
                    </div>
                    <div class="product-specs">
                        <h3>Характеристики</h3>
                        <ul>
                            <li>Бренд: ${product.category}</li>
                            <li>Гарантия: 12 месяцев</li>
                            <li>Страна производства: Китай</li>
                        </ul>
                    </div>
                    <div class="product-actions">
                        <button class="btn" onclick="addToCart(${product.id})">Добавить в корзину</button>
                        <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" onclick="toggleFavorite(${product.id})">❤️ В избранное</button>
                    </div>
                </div>
            `;
        }
        
        const similarGrid = document.getElementById('similarProducts');
        if (similarGrid) {
            const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
            similarGrid.innerHTML = similarProducts.map(p => `
                <div class="product-card">
                    <a href="product.html?id=${p.id}" class="product-image">
                        <img src="${p.image}" alt="${p.name}" onerror="this.src='assets/images/placeholder.png'">
                    </a>
                    <div class="product-info">
                        <div class="product-category">${p.category}</div>
                        <div class="product-title"><a href="product.html?id=${p.id}">${p.name}</a></div>
                        <div class="product-price">${p.price.toLocaleString()} ₽</div>
                        <div class="product-rating">${'★'.repeat(p.rating)}${'☆'.repeat(5-p.rating)}</div>
                        <button class="add-to-cart" onclick="addToCart(${p.id})">В корзину</button>
                    </div>
                </div>
            `).join('');
        }
    } else {
        window.location.href = 'catalog.html';
    }
}

// Инициализация страницы корзины
function initCartPage() {
    const cartContainer = document.getElementById('cartContainer');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Корзина пуста</h2>
                <p>Добавьте товары в корзину, чтобы оформить заказ</p>
                <a href="catalog.html" class="btn">Перейти в каталог</a>
            </div>
        `;
    } else {
        let total = 0;
        
        const cartItemsHtml = cart.map(item => {
            total += item.price;
            return `
                <tr>
                    <td>
                        <div class="cart-product">
                            <a href="product.html?id=${item.id}" class="cart-product-image">${item.image}</a>
                            <div class="cart-product-info">
                                <a href="product.html?id=${item.id}">${item.name}</a>
                                <div>${item.category}</div>
                            </div>
                        </div>
                    </td>
                    <td>${item.price.toLocaleString()} ₽</td>
                    <td><input type="number" class="cart-quantity" value="1" min="1" onchange="updateCartTotal()"></td>
                    <td>${item.price.toLocaleString()} ₽</td>
                    <td><button class="cart-remove" onclick="removeFromCart(${item.id})">✕</button></td>
                </tr>
            `;
        }).join('');
        
        cartContainer.innerHTML = `
            <table class="cart-table">
                <thead>
                    <tr>
                        <th>Товар</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Сумма</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${cartItemsHtml}
                </tbody>
            </table>
            
            <div class="cart-summary">
                <h3>Итого</h3>
                <div class="summary-row">
                    <span>Товары (${cart.length})</span>
                    <span>${total.toLocaleString()} ₽</span>
                </div>
                <div class="summary-row">
                    <span>Доставка</span>
                    <span>Бесплатно</span>
                </div>
                <div class="summary-row total">
                    <span>К оплате</span>
                    <span>${total.toLocaleString()} ₽</span>
                </div>
                <a href="checkout.html" class="checkout-btn">Оформить заказ</a>
            </div>
        `;
    }
}

function initCartPage() {
    const cartContainer = document.getElementById('cartContainer');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Корзина пуста</h2>
                <p>Добавьте товары в корзину, чтобы оформить заказ</p>
                <a href="catalog.html" class="btn">Перейти в каталог</a>
            </div>
        `;
    } else {
        let total = 0;
        
        const cartItemsHtml = cart.map(item => {
            total += item.price;
            return `
                <tr>
                    <td>
                        <div class="cart-product">
                            <a href="product.html?id=${item.id}" class="cart-product-image">
                                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='assets/images/placeholder.png'">
                            </a>
                            <div class="cart-product-info">
                                <a href="product.html?id=${item.id}">${item.name}</a>
                                <div>${item.category}</div>
                            </div>
                        </div>
                    </td>
                    <td>${item.price.toLocaleString()} ₽</td>
                    <td><input type="number" class="cart-quantity" value="1" min="1" onchange="updateCartTotal()"></td>
                    <td>${item.price.toLocaleString()} ₽</td>
                    <td><button class="cart-remove" onclick="removeFromCart(${item.id})">✕</button></td>
                </tr>
            `;
        }).join('');
        
        cartContainer.innerHTML = `
            <table class="cart-table">
                <thead>
                    <tr>
                        <th>Товар</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Сумма</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${cartItemsHtml}
                </tbody>
            </table>
            
            <div class="cart-summary">
                <h3>Итого</h3>
                <div class="summary-row">
                    <span>Товары (${cart.length})</span>
                    <span>${total.toLocaleString()} ₽</span>
                </div>
                <div class="summary-row">
                    <span>Доставка</span>
                    <span>Бесплатно</span>
                </div>
                <div class="summary-row total">
                    <span>К оплате</span>
                    <span>${total.toLocaleString()} ₽</span>
                </div>
                <a href="checkout.html" class="checkout-btn">Оформить заказ</a>
            </div>
        `;
    }
}

// Инициализация страницы акций
function initPromotionsPage() {
    const promoGrid = document.getElementById('promoGrid');
    
    if (promoGrid) {
        promoGrid.innerHTML = promos.map(promo => `
            <a href="#" class="promo-card" onclick="showPromoDetails('${promo.title}')">
                <div class="promo-image">${promo.icon}</div>
                <div class="promo-content">
                    <div class="promo-title">${promo.title}</div>
                    <div class="promo-dates">Действует ${promo.date}</div>
                    <p>${promo.desc}</p>
                </div>
            </a>
        `).join('');
    }
}

function showPromoDetails(title) {
    showNotification(`Подробности акции "${title}" отправлены на email`);
}

function copyPromoCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        showNotification('Промокод скопирован!');
    });
}

// Делаем функции глобальными
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.toggleFavorite = toggleFavorite;
window.copyPromoCode = copyPromoCode;
window.showPromoDetails = showPromoDetails;
window.handleContactForm = handleContactForm;
window.copyToClipboard = copyToClipboard;
window.scrollToSection = scrollToSection;
window.showNotification = showNotification;
window.logoutUser = logoutUser;
window.isLoggedIn = isLoggedIn;
window.getCurrentUser = getCurrentUser;