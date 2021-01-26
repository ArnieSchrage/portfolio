window.onload = function () {
  //Toggle script mobile nav
  var el = document.querySelectorAll(".hamburger");
  var main = document.querySelectorAll(".sect");

  for (i = 0; i <= el.length; i++) {
    el[i].addEventListener(
      "click",
      function () {
        console.log(main);
        this.classList.toggle("active");
        for (let i = 0; i < main.length; i += 1) {
          main.item(i).classList.toggle("blurred");
        }
      },
      false
    );
  }
};
