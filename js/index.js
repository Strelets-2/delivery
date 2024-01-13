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

const restsFunc = () => {
  const container = document.querySelector('#rests-container');
  // Создадим массив с объектами
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

  // Создаем функцию кототрая отвечает за получение массива данных и его отрисовку в контейнере
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

modalFunc();
restsFunc();
