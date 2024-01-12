// Создаем функциональный блок для открытия и заакрытия модального окна, чтобы переменные находились в локальной области видимости
const modalFunc = () => {
  const modal = document.querySelector('.cart-modal-overlay');
  const cartBtn = document.querySelector('#cart-button');

  const openModal = () => {
    modal.classList.add('open');
  };

  const closeModal = () => {
    modal.classList.remove('open');
  }

  cartBtn.addEventListener('click', openModal);

  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart-modal-overlay') || event.target.closest('.cart-modal__header-close')) {
      closeModal();
    }
  });
}

const restsFunc = () => {
  const container = document.querySelector('#rests-container');
  console.log('container: ', container);
}


modalFunc();
restsFunc();
