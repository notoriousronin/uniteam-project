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



// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//         document.getElementById(".scroll-btn").style.display = block;
//     } else {
//         document.getElementById(".scroll-btn").style.display = none;
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }