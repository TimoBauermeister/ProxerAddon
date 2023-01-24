browser.storage.sync.set(["theaterMode"], function (result) {
  if (result) {
    var link = document.createElement("link");
    link.href = browser.runtime.getURL("content-anime-theater-stylesheet.css");
    link.type = "text/css";
    link.rel = "stylesheet";
    document.documentElement.insertBefore(
      link,
      document.documentElement.firstChild
    );
  }
});
browser.storage.sync.get(["autoplay"], function (result) {
  if (result) {
    setTimeout(() => {
      // trigger autoplay
      let s = document.createElement("script");
      s.src = browser.runtime.getURL("autoplay.js");
      s.onload = function () {};
      (document.head || document.documentElement).appendChild(s);
    }, 300);
  }
});
