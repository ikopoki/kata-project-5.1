
const swiper = new Swiper('.swiper', {  
  direction: 'horizontal',
  loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    }
});
const buttonMore = document.querySelector(".more");

let resizeWrapper = function(){
  if (buttonMore.textContent == "Показать всё") {
    document.querySelector(".content__wrapper").classList.add("openMore");
    buttonMore.classList.add("more--up");
    buttonMore.textContent = "Скрыть";
  } else {
    document.querySelector(".content__wrapper").classList.remove("openMore");
    buttonMore.classList.remove("more--up");
    buttonMore.textContent = "Показать всё";
  }
};
buttonMore.addEventListener("click", resizeWrapper);
