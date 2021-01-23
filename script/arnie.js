$("#mywork-carousel").on("slide.bs.carousel", function (e) {
  var vid = $(e.relatedTarget).find("video");
  console.log(vid);
  if (vid.length > 0) {
    vid[0].load();
  }
});
