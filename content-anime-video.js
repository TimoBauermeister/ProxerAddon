browser.storage.sync.get(["theaterMode"], function (result) {
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
