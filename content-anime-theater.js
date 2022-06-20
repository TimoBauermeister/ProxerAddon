// trigger donatecall remove event
let s = document.createElement('script');
s.src = chrome.runtime.getURL('content-anime-donatecall.js');
s.onload = function() {
    
};
(document.head || document.documentElement).appendChild(s);

chrome.storage.sync.get(['theaterMode'], function (result) {
    if(result && result['theaterMode']) {
        let link = document.createElement("link");
        link.href = chrome.runtime.getURL('content-anime-theater-stylesheet.css');
        link.type = "text/css";
        link.rel = "stylesheet";
        document.documentElement.insertBefore(link, document.documentElement.firstChild);
        setTimeout(() => {
            let divNewButtonsTop = document.createElement("div");
            divNewButtonsTop.setAttribute("id", "topButtonMenu");
            if(document.getElementsByClassName("no_details") !== "undefined") {
                let navBtns = document.getElementsByClassName("no_details")[0].getElementsByTagName("A");
                let naechste = document.getElementsByClassName("no_details")[0].getElementsByClassName("menu");
                let streamBtns = document.getElementsByClassName("wMirror")[0].getElementsByClassName("menu");
                let detailAndEpisodes = document.getElementById("simple-navi").getElementsByTagName("A");
                let nextHref = "";
                for(let elem of naechste) {
                    if(elem.textContent.includes("Nächste") && !elem.textContent.includes("Watchlist")) {
                        nextHref = elem.href;
                    }
                }

                for(let elem of navBtns) {
                    if(elem.textContent.includes("Nächste") && !elem.textContent.includes("Watchlist")) {
                        nextHref = elem.href;
                    }
                    if(elem.textContent.includes("Watchlist")) {
                        if(elem.textContent.includes("Nächste")) {
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
                            divNewButtonsTop.append(elem);
                        }
                    } else {
                        if(elem.textContent.includes("Vorherige")) {
                            elem.innerHTML = "&larr;";
                            divNewButtonsTop.append(elem);
                        }
                    }
                
                }
                
                for(let elem of streamBtns) {
                    divNewButtonsTop.prepend(elem);
                }
                let elen = 0;
                for(let elem of detailAndEpisodes) {
                    //if(!elem.innerHTML.includes("span class=")) {
                        elem.setAttribute("id", "navi"+elen)
                        divNewButtonsTop.append(elem);
                        elen++;
                    //}
                }

                let reminder = document.getElementsByClassName("menu")[1];
                reminder.innerHTML = "&#128278;";
                divNewButtonsTop.prepend(reminder);

                let naechsteOhne = document.getElementsByClassName("menu")[1];
                naechsteOhne.innerHTML = "&rarr;";
                naechsteOhne.setAttribute("class","menu order6");
                divNewButtonsTop.prepend(naechsteOhne);
                

                let textMiddle = document.getElementById("wContainer").childNodes[3].childNodes[0];
                divNewButtonsTop.prepend(textMiddle);
                
                document.body.appendChild(divNewButtonsTop);
            }
            /* setTimeout(() => {
                document.getElementsByTagName("IFRAME")[0].addEventListener("mousemove", transitionIn(divNewButtonsTop));
            }, 3000); */
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

function transitionIn(toTransition) {
    toTransition.setAttribute("class", "transitionIn");
    setTimeout(() => {
        toTransition.setAttribute("class", "");
    }, 1000);
}