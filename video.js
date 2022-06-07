// setTimeout(() => {
//     document.getElementById("plyr").play();
// }, 30);
chrome.storage.sync.get(['theaterMode'], function (result) {
    if(result) {
        var link = document.createElement("link");
        link.href = chrome.runtime.getURL('customVideoStylesheet.css');
        link.type = "text/css";
        link.rel = "stylesheet";
        document.documentElement.insertBefore(link, document.documentElement.firstChild);
    }
});