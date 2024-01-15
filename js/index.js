// Создаем функциональный блок для открытия и заакрытия модального окна, чтобы переменные находились в локальной области видимости
const modalFunc = () => {
  const modal = document.querySelector('.cart-modal-overlay');
  const cartBtn = document.querySelector('#cart-button');

  const openModal = () => {
    modal.classList.add('open');
  };

  const closeModal = () => {
    modal.classList.remove('open');
  };

  cartBtn.addEventListener('click', openModal);

  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart-modal-overlay') || event.target.closest('.cart-modal__header-close')) {
      closeModal();
    }
  });
}

// Создаем функцианальный блок для динамического формирования контейнера с ресторанами в index.html
const restsFunc = () => {
  const container = document.querySelector('#rests-container');
  // Создадим массив с объектами ресторанов
  const restArray = [
    {
      id: 0,
      title: 'Пицца плюс',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'pizza-plus.jpg'
    },
    {
      id: 1,
      title: 'Тануки',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'tanuki.jpg'
    },
    {
      id: 2,
      title: 'FoodBand',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'foodBand.jpg'
    },
    {
      id: 3,
      title: 'Жадина-пицца',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'greedy-pizza.jpg'
    },
    {
      id: 4,
      title: 'Точка еды',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'food-point.jpg'
    },
    {
      id: 5,
      title: 'PizzaBurger',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'pizzaBurger.jpg'
    },
  ]

  const loading = () => {
    //  Затираем карточки в контейнере
    container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>';

  }

  // Создаем функцию кототрая отвечает за получение массива ресторанов и отрисовку карточек ресторанов из этого массива на странице (в контейнере)
  const renderRests = (array) => {
    container.innerHTML = '';
    array.forEach((card) => {
      //  отрисовываем объект в виде карточки
      container.insertAdjacentHTML('beforeEnd', `
      <a href="./goods.html?id=${card.id}" class="products__card card">
        <div class="card__image">
          <img src="./images/rests/${card.image}" alt="${card.image}">
        </div>
        <div class="card__description">
          <div class="card__row">
            <h4 class="card__title">${card.title}</h4>
            <span class="card__badge">${card.time} мин</span>
          </div>

          <div class="card__row">
            <div class="card__info">
              <div class="card__info-raiting">
                <img src="./images/icons/star.svg" alt="star">
                ${card.rating}
              </div>
              <div class="card__info-price">
              От ${card.price} ₽
              </div>
              <div class="card__info-group">
                ${card.type}
              </div>
            </div>
          </div>

        </div>
      </a>      
      `);
    });
  }

  // Если в HTML странице нет кода контейнера с ресторанами, то не запускаем функцию restsFunc();
  if (container) {
    loading();
    setTimeout(() => {
      renderRests(restArray)
    }, 1000);
  }
}

// Создаем функцианальный блок для динамического формирования контейнера с карточками  товаров для каждого ресторана в goods.html
const goodsFunc = () => {
  const container = document.querySelector("#goods-container");
  // Создаем массив с объектами товаров ресторана
  const goodsArray = [
    {
      id: 0,
      name: 'Ролл угорь стандарт',
      components: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
      price: 250,
      image: 'goods-1.jpg',
    },
    {
      id: 1,
      name: 'Калифорния лосось стандарт',
      components: ' Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
      price: 250,
      image: 'goods-2.jpg',
    },
    {
      id: 2,
      name: 'Окинава стандарт',
      components: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
      price: 250,
      image: 'goods-3.jpg',
    },
    {
      id: 3,
      name: 'Цезарь маки хl',
      components: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
      price: 250,
      image: 'goods-4.jpg',
    },
    {
      id: 4,
      name: 'Ясай маки стандарт 185 г',
      components: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
      price: 250,
      image: 'goods-5.jpg',
    },
    {
      id: 5,
      name: 'Ролл с креветкой стандарт',
      components: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
      price: 250,
      image: 'goods-6.jpg',
    },
  ]

  const loading = () => {
    //  Затираем карточки в контейнере и вместо них в контейнере отображаем слово ЗАГРУЗКА
    container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  // Создаем функцию кототрая отвечает за получение массива объектов с данными карточек товаров ресторана и отрисовку карточек товаров из этого массива на странице (в контейнере) goods.html
  const renderGoods = (array) => {
    // Очищаем контейнер
    container.innerHTML = '';
    // Перебираем массив с данными карточек и отрисовываем каждую карточку на странице 
    array.forEach(card => {
      // Отрисовываем каждый объект массива в виде карточки и вставляем её в контейнер
      container.insertAdjacentHTML('beforeend',
        `
        <div class="products__card card">
          <div class="card__image">
            <img src="./images/goods/${card.image}" alt="${card.image}">
          </div>
          <div class="card__description card-description">
            <div class="card__row">
              <h4 class="card-description__name">${card.name}</h4>
            </div>

            <div class="card__row">
              <p class="card-description__text">
                ${card.components}
              </p>
            </div>

            <div class="card__row">
              <div class="card-description__controls">
                <button class="btn btn-primary">
                  <span>В корзину</span>
                  <img src="./images/icons/shopping-cart-white.svg" alt="shopping cart">
                </button>
                <sppan class="card-description__controls-prise">
                  ${card.price} ₽
                </sppan>
              </div>
            </div>    
          </div>
        </div>
      `
      )
    })


  }


  if (container) {
    loading();
    setTimeout(() => {
      renderGoods(goodsArray);
    }, 3000)
  };
}



modalFunc();
restsFunc();
goodsFunc();
