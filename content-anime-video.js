chrome.storage.sync.get(['theaterMode'], function (result) {
    if(result) {
        var link = document.createElement("link");
        link.href = chrome.runtime.getURL('content-anime-theater-stylesheet.css');
        link.type = "text/css";
        link.rel = "stylesheet";
        document.documentElement.insertBefore(link, document.documentElement.firstChild);
    }
});
setTimeout(() => {
    // trigger autoplay
    let s = document.createElement('script');
    s.src = chrome.runtime.getURL('autoplay.js');
    s.onload = function() {};
    (document.head || document.documentElement).appendChild(s);
}, 300);