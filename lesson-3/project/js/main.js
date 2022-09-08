const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') { // Содержит блок на HTML
        // Поля класса как глобальные переменные
        this.container = container; // Обращаемся к нему с метода render() и заполняем его товарами
        this.goods = [];  // Массив товаров
        this._getProducts() // Запускаем метод _getProducts
            .then(data => { // Используем что вернулось с метода _getProducts. data - это массив объектов
                this.goods = data; // В data запишем goods
                this.render()   // вызываем массив объектов для вывода массива на экран
            });
        // this.render();  // Вывод товаров на страницу
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`) // С помощью fetch делаем коннект к нашему ресурсу
            .then(result => result.json()) // Получаем объект с нашим исходником => преобразуем в массив объектов и вернем промис, then возвращает промис
            .catch(error => console.log(error));   // Если не найден запустится catch с ошибкой

    }

    render() {
        const block = document.querySelector(this.container); // Ищем элемент с this.container в глобальных
        for (let product of this.goods) { // В цикле обходим наш массив товаров
            const itemObj = new ProductItem(product); // создает новый объект класса ProductItem
            block.insertAdjacentHTML("beforeend", itemObj.render()); // Вызываем метод render() из ProductItem и наполняем данными с верстки класса
            //  block.innerHTML += item.render();  медленный способ каждый раз перерисовывает HTML
        }
    }

    // calcSum() {
    //     return this.goods.reduce((accum, item) => accum += item.price, 0);
    // }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') { // Вызывается конструктор и принимает два параметра: объект товар и img по умолчанию.
        this.title = product.product_name; // Извлекаем свойство название
        this.id = product.id_product; // Извлекаем свойство id
        this.price = product.price; // Извлекаем свойство Цена
        this.img = img; // И ЗАПИСЫВАЕМ В item
    }

    render() { // Метод рендер вернет верстку с нашим товаром.
        // Подставляем в нашу верстку img, title, price
        return `<div class="product-item">
                <img src="${this.img}">  
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Cart {
    constructor(containerCart = ".cart-block") {
        this.containerCart = containerCart;
        this.goodCart = [];
        this._getProducts() // Запускаем метод _getProducts
            .then(data => { // Используем что вернулось с метода _getProducts. data - это массив объектов
                this.goodCart = [...data.contents]; // В data запишем goods
                this.render()   // вызываем массив объектов для вывода массива на экран
            });
        this.render();  // Вывод товаров на страницу
    }

    _getProducts() {
        return fetch(`${API}/getBasket.json`) // С помощью fetch делаем коннект к нашему ресурсу
            .then(result => result.json()) // Получаем объект с нашим исходником => преобразуем в массив объектов и вернем промис, then возвращает промис
            .catch(error => console.log(error));   // Если не найден запустится catch с ошибкой
    }

    render() {
        const carti = document.querySelector(this.containerCart);
        for (let productCart of this.goodCart) {
            const cartObj = new CartItems(productCart);
            carti.insertAdjacentHTML('beforeend', cartObj.render());
        }
    }
}

class CartItems {
    constructor(product, img = 'https://via.placeholder.com/100x100') { // Вызывается конструктор и принимает два параметра: объект товар и img по умолчанию.
        this.title = product.product_name; // Извлекаем свойство название
        this.id = product.id_product; // Извлекаем свойство id
        this.price = product.price; // Извлекаем свойство Цена
        this.quantity = product.quantity;
        this.img = img; // И ЗАПИСЫВАЕМ В item
    }

    render() { // Метод рендер вернет верстку с нашим товаром.
        return `<div class="product-item">
                <img src="${this.img}">  
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <p>${this.quantity}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList(); // Создаем объект класса
let carte = new Cart();

