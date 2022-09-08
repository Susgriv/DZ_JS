class ProductList {
    constructor(container = '.products') { // Содержит блок на HTML
        // Поля класса как глобальные переменные
        this.container = container; // Обращаемся к нему с метода render() и заполняем его товароми
        this.goods = [];  // Массив товаров
        this._fetchProducts();  // Рекомендация, чтобы метод был вызван в текущем классе
        this.render();  // Вывод товаров на страницу
    }

    _fetchProducts() {
        this.goods = [  // Обращаемся к this.goods
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    render() {
        const block = document.querySelector(this.container); // Ищем элемент с this.container в глобальных
        for (let product of this.goods) { // В цикле обходим наш массив товаров
            const item = new ProductItem(product); // создает новый объект класса ProductItem
            block.insertAdjacentHTML("beforeend", item.render()); // Вызываем метод render() из ProductItem и наполняем данными с верстки класса
//              block.innerHTML += item.render();  медленный способ каждый раз перерисовывает HTML
        }
    }

    calcSum() {
        return this.goods.reduce((accum, item) => accum += item.price, 0);
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') { // Вызывается конструктор и принимает два параметра: объект товар и img по умолчанию.
        this.title = product.title; // Извлекаем свойство название
        this.id = product.id; // Извлекаем свойство id
        this.price = product.price; // Извлекаем свойство Цена
        this.img = img; // И ЗАПИСЫВАЕМ В item
    }

    render() { // Метод рендер вернет верстку с нашим товаром
        // Подcтавляем в нашу верстку img, title, price
        return `<div class="product-item">
                <img src="${this.img}">  
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList(); // Создаем объект класса

class Cart {
    constructor() {
    }

    addCart() {

    }

    removeCard() {

    }

    updateCart() {

    }
}

class CartItems {
    constructor() {
    }

    render() {

    }
}