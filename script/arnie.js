//Reset video to start after new slide transition
$("#mywork-carousel").on("slide.bs.carousel", function (e) {
  var vid = $(e.relatedTarget).find("video");
  console.log(vid);
  if (vid.length > 0) {
    vid[0].load();
  }
});

//Toggle script mobile nav
var el = document.querySelectorAll(".hamburger");
for (i = 0; i <= el.length; i++) {
  el[i].addEventListener(
    "click",
    function () {
      this.classList.toggle("active");
    },
    false
  );
}
