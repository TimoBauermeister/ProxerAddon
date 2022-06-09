/* for(let link of document.getElementsByTagName("LINK")) {
    if(link.getAttribute("href").includes("/templates/proxer14/css/color")) {
        link.setAttribute("href", chrome.runtime.getURL("grey-override-stylesheet.css")); // make it so it checks what color style is used and change stylesheet maybe change color in root? idk
    }
} */
// reloads site on every route change so that custom js is loaded
let oldHref = document.location.href;

window.onload = function() {
    let bodyList = document.querySelector("body")

    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (oldHref !== document.location.href && !document.location.href.includes("proxer.me/read/")) { // reload bad on manga
                oldHref = document.location.href;
                reload();
            }
        });
    });

    let config = {
        childList: true,
        subtree: true
    };

    observer.observe(bodyList, config);
};


function reload() {
    console.log('test');
    location.reload();
}