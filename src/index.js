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





$(document).scroll(function() {
  let scrolled = $(window).scrollTop();
  
  if(scrolled > 350) {
    $('.scroll-btn').addClass('active');
  } else {
    $('.scroll-btn').removeClass('active');
  }
});

$('.scroll-btn').click(function() {
    $('body,html').animate({ scrollTop: 0}, 800);
});