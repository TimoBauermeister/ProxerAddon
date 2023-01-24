browser.storage.sync.get(["theaterMode"], function (result) {
  if (result && result["theaterMode"]) {
    let load = document.createElement("div");
    load.style =
      "height:100vh; width:100vw; background-color:#000; position: fixed; top:40px; left:0; z-index:1;";
    document.documentElement.appendChild(load);
    let link = document.createElement("link");
    link.href = browser.runtime.getURL("content-anime-theater-stylesheet.css");
    link.type = "text/css";
    link.rel = "stylesheet";
    document.documentElement.insertBefore(
      link,
      document.documentElement.firstChild
    );
  }
});
