// trigger donatecall remove event
let s = document.createElement('script');
s.src = chrome.runtime.getURL('content-anime-donatecall.js');
s.onload = function() {};
(document.head || document.documentElement).appendChild(s);

chrome.storage.sync.get(['theaterMode'], function (result) {
    if(result && result['theaterMode']) {
        var nextHref = "";
        setTimeout(() => {
            let divNewButtonsTop = document.createElement("div");
            divNewButtonsTop.setAttribute("id", "topButtonMenu");
            let table = document.getElementById("wContainer");
            while(table.querySelector(".menu") != undefined) {
                let elem = table.querySelector(".menu");
                // next chapter
                if(elem.textContent.includes("Nächste") && !elem.textContent.includes("Watchlist")) {
                    elem.setAttribute("class", elem.getAttribute("class") + " next");
                    nextHref = elem.href;
                    elem.innerHTML = "&rarr;";
                }
                // previous chapter
                if(elem.textContent.includes("Vorherige")) {
                    elem.setAttribute("class", elem.getAttribute("class") + " previous");
                    elem.innerHTML = "&larr;";
                }
                // if next chapter + watchlist
                if(elem.getAttribute("title") == "reminder_next") {
                    elem.setAttribute("class", elem.getAttribute("class") + " reminderNext");
                    elem.innerHTML = "&#10004 + &rarr;";
                    elem.addEventListener("click", function () {
                        let lastPageLink = 'https://proxer.me' + getHREF();
                        chrome.storage.sync.set({ 'lastPageLinkAnime': lastPageLink }, function () {
                        });
                    
                        let lastPageTitle = document.title;
                        lastPageTitle = lastPageTitle.replace(" - Proxer.Me", "");
                        let lastPageTitle_array = lastPageTitle.split("Episode ");
                        let number = lastPageTitle_array[1].substring(0, lastPageTitle_array[1].indexOf(" "));
                        lastPageTitle = lastPageTitle_array[0] + 'Episode ' + (parseInt(number) + 1) + lastPageTitle_array[1].substring(number.length);
                    
                        chrome.storage.sync.set({ 'lastPageTitleAnime': lastPageTitle }, function () {
                        });
                        if(nextHref !== "") {
                            location.href = nextHref;
                        }
                    });
                }
                // if bookmark
                if(elem.getAttribute("title") == "reminder_this") {
                    elem.setAttribute("class", elem.getAttribute("class") + " reminderThis");
                    elem.innerHTML = "&#128278;";
                }
                divNewButtonsTop.append(elem);
            }
            // text
            let textMiddle = document.getElementById("wContainer").childNodes[3].childNodes[0];
            textMiddle.setAttribute("class", "textMiddle");
            divNewButtonsTop.append(textMiddle);
            // nav buttons
            let nav = document.getElementById("simple-navi");
            while(nav.querySelector("a") != undefined) {
                let elem = nav.querySelector("a");
                if(elem.querySelector(".wEp")) {
                    elem.remove();
                } else {
                    divNewButtonsTop.append(elem);
                }
            }
            document.body.appendChild(divNewButtonsTop);
        }, 5);
    }
});

function getHREF() {
    let href_array = window.location.pathname.split("/");
    let href = "";

    for (let i = 0; i < href_array.length; i++) {
        if (i === 0) {
            href += href_array[i];
        }
        if (i !== href_array.length - 2 && i !== 0) {
            href += "/" + href_array[i];
        }
        if (i === href_array.length - 2) {
            href += "/" + (parseInt(href_array[i]) + 1);
        }
    }
    return href;
}