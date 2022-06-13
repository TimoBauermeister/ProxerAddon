let load = document.createElement("div");
load.id = "loadPre"
load.style = "height:100vh; width:100vw; background-color:#000; position: fixed; top:0; left:0; z-index:99;";
document.documentElement.appendChild(load);
searchAndReplace();

function searchAndReplace() {
    setTimeout(() => {
        for(let link of document.getElementsByTagName("LINK")) {
            if(link.getAttribute("href").includes("/templates/proxer14/css/color")) {
                if(link.getAttribute("href").includes("gray")) {
                    link.setAttribute("href", chrome.runtime.getURL("grey-override-stylesheet.css"));
                    return;
                } else if (link.getAttribute("href").includes("black")) {
                    link.setAttribute("href", chrome.runtime.getURL("grey-override-stylesheet.css"));
                    let rootChanger = document.createElement("link");
                    rootChanger.href = chrome.runtime.getURL('black-override-stylesheet.css');
                    rootChanger.type = "text/css";
                    rootChanger.rel = "stylesheet";
                    link.parentElement.appendChild(rootChanger);
                    return;
                }
                // add more styles here removes load if there is no link found
                load.remove();
                return;
            }
        }
        searchAndReplace();
    }, 10);
    
}