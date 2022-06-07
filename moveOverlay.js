chrome.storage.sync.set({ 'theaterMode': false }, function () {
});
chrome.storage.sync.get(['theaterMode'], function (result) {
    if(result) {
        var link = document.createElement("link");
        link.href = chrome.runtime.getURL('customVideoStylesheet.css');
        link.type = "text/css";
        link.rel = "stylesheet";
        document.documentElement.insertBefore(link, document.documentElement.firstChild);
        setTimeout(() => {
            var divNewButtonsTop = document.createElement("div");
            divNewButtonsTop.setAttribute("id", "topButtonMenu");

            var navBtns = document.getElementsByClassName("no_details")[0].getElementsByTagName("A");
            var naechste = document.getElementsByClassName("no_details")[0].getElementsByClassName("menu");
            var streamBtns = document.getElementsByClassName("wMirror")[0].getElementsByClassName("menu");
            var detailAndEpisodes = document.getElementById("simple-navi").getElementsByTagName("A");
            var nextHref = "";
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
                        elem.textContent = "Nächste und abhaken >";
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
                            if(nextHref != "") {
                                location.href = nextHref;
                            }
                        });
                        divNewButtonsTop.append(elem);
                    }
                } else {
                    if(elem.textContent.includes("Vorherige")) {
                        divNewButtonsTop.append(elem);
                    }
                }
            
            }

            for(let elem of streamBtns) {
                divNewButtonsTop.prepend(elem);
            }

            for(let elem of detailAndEpisodes) {
                divNewButtonsTop.prepend(elem);
            }

            divNewButtonsTop.prepend(document.getElementsByClassName("wName")[0]);
            document.body.appendChild(divNewButtonsTop);

            setTimeout(() => {
                document.getElementsByTagName("IFRAME")[0].addEventListener("mousemove", transitionIn(divNewButtonsTop));
            }, 3000);
        }, 5);
    }
});

function getHREF() {
    let href_array = window.location.pathname.split("/");
    let href = "";

    for (let i = 0; i < href_array.length; i++) {
        if (i == 0) {
            href += href_array[i];
        }
        if (i != href_array.length - 2 && i != 0) {
            href += "/" + href_array[i];
        }
        if (i == href_array.length - 2) {
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