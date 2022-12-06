// slick slider
$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./images/vector-left.svg"/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="./images/vector-right.svg"/></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", function (event) {
  menu.classList.add("is-show");
  event.target.classList.toggle("fa-bars");
  event.target.classList.toggle("fa-xmark");
});
document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    console.log(1);
  }
});
