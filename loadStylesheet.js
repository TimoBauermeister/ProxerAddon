let load = document.createElement("div");
load.id = "loadPre";
load.style =
  "height:100vh; width:100vw; background-color:#000; position: fixed; top:0; left:0; z-index:99;";
document.documentElement.appendChild(load);
searchAndReplaceColors();
searchAndReplaceManga(10);

function searchAndReplaceManga(count) {
  setTimeout(() => {
    for (let link of document.getElementsByTagName("LINK")) {
      if (
        link
          .getAttribute("href")
          .includes("/components/com_proxer/css/read/default.css")
      ) {
        link.setAttribute("href", chrome.runtime.getURL("default.css"));
        return;
      }
    }
    searchAndReplaceManga(count - 1);
  }, 50);
}

function searchAndReplaceColors() {
  setTimeout(() => {
    for (let link of document.getElementsByTagName("LINK")) {
      if (link.getAttribute("href").includes("/templates/proxer14/css/color")) {
        if (link.getAttribute("href").includes("gray")) {
          link.setAttribute(
            "href",
            chrome.runtime.getURL("grey-override-stylesheet.css")
          );
          return;
        } else if (link.getAttribute("href").includes("black")) {
          // load grey override for changes in form and color
          link.setAttribute(
            "href",
            chrome.runtime.getURL("grey-override-stylesheet.css")
          );
          // set root to user colors
          chrome.storage.sync.get(
            {
              customColors: [
                "#282a36",
                "#1e212f",
                "#282a35",
                "#121419",
                "#181823",
                "#41445a",
                "#c1c1c1",
                "#41c721",
                "#66d14b",
              ],
            },
            function (data) {
              //console.log(data.customColors);
              document.documentElement.setAttribute(
                "style",
                `
                        --body-background: ` +
                  data.customColors[0] +
                  `;
                        --element: ` +
                  data.customColors[1] +
                  `;
                        --element-accent: ` +
                  data.customColors[2] +
                  `;
                        --element-darkend: ` +
                  data.customColors[3] +
                  `;
                        --main: ` +
                  data.customColors[4] +
                  `;
                        --main-accent: ` +
                  data.customColors[5] +
                  `;
                        --textOnElem: ` +
                  data.customColors[6] +
                  `;
                        --colorLink: ` +
                  data.customColors[7] +
                  `;
                        --colorLinkHover: ` +
                  data.customColors[8] +
                  `;
                        `
              );
            }
          );
          return;
        } else if (link.getAttribute("href").includes("blue")) {
          // load grey override for changes in form and color
          link.setAttribute(
            "href",
            chrome.runtime.getURL("grey-override-stylesheet.css")
          );
          // set root to user colors
          chrome.storage.sync.get(
            {
              customColorsTwo: [
                "#15232D",
                "#051824",
                "#26506f",
                "#071015",
                "#193549",
                "#0D3A58",
                "#ffc600",
                "#ff9d00",
                "#e5b10a",
              ],
            },
            function (data) {
              document.documentElement.setAttribute(
                "style",
                `
                        --body-background: ` +
                  data.customColorsTwo[0] +
                  `;
                        --element: ` +
                  data.customColorsTwo[1] +
                  `;
                        --element-accent: ` +
                  data.customColorsTwo[2] +
                  `;
                        --element-darkend: ` +
                  data.customColorsTwo[3] +
                  `;
                        --main: ` +
                  data.customColorsTwo[4] +
                  `;
                        --main-accent: ` +
                  data.customColorsTwo[5] +
                  `;
                        --textOnElem: ` +
                  data.customColorsTwo[6] +
                  `;
                        --colorLink: ` +
                  data.customColorsTwo[7] +
                  `;
                        --colorLinkHover: ` +
                  data.customColorsTwo[8] +
                  `;
                        `
              );
            }
          );
          return;
        } else {
          load.remove();
        }
        return;
      }
    }
    searchAndReplaceColors();
  }, 10);
}
