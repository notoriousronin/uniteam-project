(() => {
    const refs = {
      Btn: document.querySelector(".reviews__marker"),
      Btn1: document.querySelector(".reviews__marker-1"),
      Btn2: document.querySelector(".reviews__marker-2"),

      svg: document.querySelector(".reviews__marker-icon"),
      svg1: document.querySelector(".reviews__marker-icon-1"),
      svg2: document.querySelector(".reviews__marker-icon-2"),
  
      RBtn: document.querySelector(".reviews__button-right"),
      LBtn: document.querySelector(".reviews__button-left"),
  
      box: document.querySelector(".reviews__box-1"),
      box1: document.querySelector(".reviews__box-2"),
      box2: document.querySelector(".reviews__box-3"),
    };
  
    refs.Btn.classList.add("reviews__marker--current");
  
    refs.LBtn.addEventListener("click", Left);
    refs.RBtn.addEventListener("click", Right);
  
    function Left() {
      if (document.querySelector(".reviews__box-1.hidden") == null) {
        refs.box.classList.toggle("hidden");
        refs.box.classList.remove("amination-l");
        refs.box.classList.remove("amination-r");
        refs.Btn.classList.remove("reviews__marker--current");
        refs.svg.classList.add("hidden");
        refs.svg.classList.remove("animation-icon");
  
        refs.box2.classList.toggle("hidden");
        refs.box2.classList.add("amination-l");
        refs.Btn2.classList.add("reviews__marker--current");
        refs.svg2.classList.remove("hidden");
        refs.svg2.classList.add("animation-icon");
      } else if (document.querySelector(".reviews__box-2.hidden") == null) {
        refs.box1.classList.toggle("hidden");
        refs.box1.classList.remove("amination-l");
        refs.box1.classList.remove("amination-r");
        refs.Btn1.classList.remove("reviews__marker--current");
        refs.svg1.classList.add("hidden");
        refs.svg1.classList.remove("animation-icon");
  
        refs.box.classList.toggle("hidden");
        refs.box.classList.add("amination-l");
        refs.Btn.classList.add("reviews__marker--current");
        refs.svg.classList.remove("hidden");
        refs.svg.classList.add("animation-icon");
      } else if (document.querySelector(".reviews__box-3.hidden") == null) {
        refs.box2.classList.toggle("hidden");
        refs.box2.classList.remove("amination-l");
        refs.box2.classList.remove("amination-r");
        refs.Btn2.classList.remove("reviews__marker--current");
        refs.svg2.classList.add("hidden");
        refs.svg2.classList.remove("animation-icon");
  
        refs.box1.classList.toggle("hidden");
        refs.box1.classList.add("amination-l");
        refs.Btn1.classList.add("reviews__marker--current");
        refs.svg1.classList.remove("hidden");
        refs.svg1.classList.add("animation-icon");
      }
    }
  
    function Right() {
      if (document.querySelector(".reviews__box-1.hidden") == null) {
        refs.box.classList.toggle("hidden");
        refs.box.classList.remove("amination-r");
        refs.box.classList.remove("amination-l");
        refs.Btn.classList.remove("reviews__marker--current");
        refs.svg.classList.add("hidden");
        refs.svg.classList.remove("animation-icon");
  
        refs.box1.classList.toggle("hidden");
        refs.box1.classList.add("amination-r");
        refs.Btn1.classList.add("reviews__marker--current");
        refs.svg1.classList.remove("hidden");
        refs.svg1.classList.add("animation-icon");
      } else if (document.querySelector(".reviews__box-2.hidden") == null) {
        refs.box1.classList.toggle("hidden");
        refs.box1.classList.remove("amination-r");
        refs.box1.classList.remove("amination-l");
        refs.Btn1.classList.remove("reviews__marker--current");
        refs.svg1.classList.add("hidden");
        refs.svg1.classList.remove("animation-icon");
  
        refs.box2.classList.toggle("hidden");
        refs.box2.classList.add("amination-r");
        refs.Btn2.classList.add("reviews__marker--current");
        refs.svg2.classList.remove("hidden");
        refs.svg2.classList.add("animation-icon");
      } else if (document.querySelector(".reviews__box-3.hidden") == null) {
        refs.box2.classList.toggle("hidden");
        refs.box2.classList.remove("amination-r");
        refs.box2.classList.remove("amination-l");
        refs.Btn2.classList.remove("reviews__marker--current");
        refs.svg2.classList.add("hidden");
        refs.svg2.classList.remove("animation-icon");
        
        refs.box.classList.toggle("hidden");
        refs.box.classList.add("amination-r");
        refs.Btn.classList.add("reviews__marker--current");
        refs.svg.classList.remove("hidden");
        refs.svg.classList.add("animation-icon");
      }
    }
  })();