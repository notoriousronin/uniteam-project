(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-btn__open'),
    closeMenuBtn: document.querySelector('.menu-btn__close'),
    menu: document.querySelector('.menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu, openNav);
  refs.closeMenuBtn.addEventListener('click', toggleMenu, closeNav);
  
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    }
    function openNav() {
    document.getElementById(".menu").style.width = "100%";
}

    function closeNav() {
    document.getElementById(".menu").style.width = "0";
    }
}
)();

(() => {
  const refs = {
    openModalBtn: document.querySelector(".buy-btn"),

    closeModalBtn: document.querySelector(".modal--btn"),
    modal: document.querySelector(".buy-menu"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();


const sttElem = document.querySelector('.scroll-btn');
const screanHeight = window.innerHeight;

const sttScroll = () => {
  document.addEventListener('scroll', (e) => {
    if (screanHeight <= window.scrollY) {
      sttElem.classList.add('scroll-btn__active');
    } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
      sttElem.classList.remove('scroll-btn__active');
      sttElem.style.pointerEvents = 'auto';
    }
  });
};

// Кнопка вверх

const sttClick = () => {
  sttElem.addEventListener('click', () => {
    const docHeight = window.scrollY;
    let progress = 0;
    let position = docHeight;
    const speed = 5;

    sttElem.style.pointerEvents = 'none';

    const sttAnim = () => {
      progress += 1;
      position -= progress * speed;
      window.scrollTo(0, position);
      if (position > 0) {
        requestAnimationFrame(sttAnim);
      } 
    };
    requestAnimationFrame(sttAnim);
  });
};

const sttFunc = () => {
  sttScroll();
  sttClick();
};

document.addEventListener('DOMContentLoaded', sttFunc);
