function supportsHEVCAlpha() {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase();
  const hasMediaCapabilities = !!(
    navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
  );
  const isSafari =
    ua.indexOf("safari") != -1 &&
    !(ua.indexOf("chrome") != -1) &&
    ua.indexOf("version/") != -1;
  return isSafari && hasMediaCapabilities;
}

const player1 = document.getElementById("eich");
player1.src = supportsHEVCAlpha()
  ? "media/video/HEVCalpha/eich-hevc.mov"
  : "media/video/chrome-vp9/eich.webm";
player1.type = supportsHEVCAlpha() ? "video/mov" : "video/webm";

const player2 = document.getElementById("prem");
player2.src = supportsHEVCAlpha()
  ? "media/video/HEVCalpha/premium-hevc.mov"
  : "media/video/chrome-vp9/premium.webm";
player2.type = supportsHEVCAlpha() ? "video/mov" : "video/webm";

const player3 = document.getElementById("spaze");
player3.src = supportsHEVCAlpha()
  ? "media/video/HEVCalpha/spaze-hevc.mov"
  : "media/video/chrome-vp9/spaze.webm";
player3.type = supportsHEVCAlpha() ? "video/mov" : "video/webm";

const player4 = document.getElementById("selma");
player4.src = supportsHEVCAlpha()
  ? "media/video/HEVCalpha/selma-hevc.mov"
  : "media/video/chrome-vp9/selma.webm";
player4.type = supportsHEVCAlpha() ? "video/mov" : "video/webm";

const player5 = document.getElementById("answer");
player5.src = supportsHEVCAlpha()
  ? "media/video/HEVCalpha/answer-hevc.mov"
  : "media/video/chrome-vp9/answer.webm";
player5.type = supportsHEVCAlpha() ? "video/mov" : "video/webm";
