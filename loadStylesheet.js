let load = document.createElement("div");
load.id = "loadPre"
load.style = "height:calc(100vh - 40px); width:100vw; background-color:#000; position: fixed; top:40px; left:0; z-index:99;";
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
                    // load grey override for changes in form and color
                    link.setAttribute("href", chrome.runtime.getURL("grey-override-stylesheet.css"));
                    // set root to user colors
                    
                    chrome.storage.sync.get({
                        customColors:["#000","#045b62","#0f565e","#02393e","#0d484e","#3d8086","#D7DADC","#b3d0e4","#8dbbda"]
                    },
                    function(data) {
                       //console.log(data.customColors);
                       document.documentElement.setAttribute("style",
                        `
                        --body-background: ` + data.customColors[0] + `;
                        --element: `         + data.customColors[1] + `;
                        --element-accent: `  + data.customColors[2] + `;
                        --element-darkend: ` + data.customColors[3] + `;
                        --main: `            + data.customColors[4] + `;
                        --main-accent: `     + data.customColors[5] + `;
                        --textOnElem: `      + data.customColors[6] + `;
                        --colorLink: `       + data.customColors[7] + `;
                        --colorLinkHover: `  + data.customColors[8] + `;
                        `
                   )
                       update(data.customColors); //storing the storage value in a variable and passing to update function
                    }
                    );
                    
                    return;
                } else if (link.getAttribute("href").includes("blue")) {
                    // load grey override for changes in form and color
                    link.setAttribute("href", chrome.runtime.getURL("grey-override-stylesheet.css"));
                    // create link element and override grey color scheme by changing :root
                    let rootChanger = document.createElement("link");
                    rootChanger.href = chrome.runtime.getURL('blue-override-stylesheet.css');
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
function update(array) {
    chrome.storage.sync.set({
        customColors:array
    }, function() {
        console.log("added to list with new values");
    });
}