//Toggle script mobile nav
var el = document.querySelectorAll(".hamburger");
var main = document.querySelector(".main-page");
var collapse = document.querySelector(".navbar-collapse");

for (i = 0; i <= el.length; i++) {
  el[i].addEventListener(
    "click",
    function () {
      if (this.classList.contains("collapsed")) {
        this.classList.remove("active");
        main.classList.remove("blurred");
      } else {
        this.classList.add("active");
        main.classList.add("blurred");
      }
    },
    false
  );
}
