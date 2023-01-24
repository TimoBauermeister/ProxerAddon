/*Custom Color*/
browser.storage.sync.get(
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
    /* input read write here */
    let body_background = document.getElementById("body_background");
    body_background.value = data.customColors[0];
    body_background.onchange = function () {
      data.customColors[0] = body_background.value;
      update(data.customColors, false);
    };
    let element = document.getElementById("element");
    element.value = data.customColors[1];
    element.onchange = function () {
      data.customColors[1] = element.value;
      update(data.customColors, false);
    };
    let element_accent = document.getElementById("element_accent");
    element_accent.value = data.customColors[2];
    element_accent.onchange = function () {
      data.customColors[2] = element_accent.value;
      update(data.customColors, false);
    };
    let element_darkend = document.getElementById("element_darkend");
    element_darkend.value = data.customColors[3];
    element_darkend.onchange = function () {
      data.customColors[3] = element_darkend.value;
      update(data.customColors, false);
    };
    let main = document.getElementById("main");
    main.value = data.customColors[4];
    main.onchange = function () {
      data.customColors[4] = main.value;
      update(data.customColors, false);
    };
    let main_accent = document.getElementById("main_accent");
    main_accent.value = data.customColors[5];
    main_accent.onchange = function () {
      data.customColors[5] = main_accent.value;
      update(data.customColors, false);
    };
    let textOnElem = document.getElementById("textOnElem");
    textOnElem.value = data.customColors[6];
    textOnElem.onchange = function () {
      data.customColors[6] = textOnElem.value;
      update(data.customColors, false);
    };
    let colorLink = document.getElementById("colorLink");
    colorLink.value = data.customColors[7];
    colorLink.onchange = function () {
      data.customColors[7] = colorLink.value;
      update(data.customColors, false);
    };
    let colorLinkHover = document.getElementById("colorLinkHover");
    colorLinkHover.value = data.customColors[8];
    colorLinkHover.onchange = function () {
      data.customColors[8] = colorLinkHover.value;
      update(data.customColors, false);
    };
  }
);
/*Custom Color Two*/
browser.storage.sync.get(
  {
    customColorsTwo: [
      "#000000",
      "#045b62",
      "#0f565e",
      "#02393e",
      "#0d484e",
      "#3d8086",
      "#d7dadc",
      "#b3d0e4",
      "#8dbbda",
    ],
  },
  function (data) {
    //console.log(data.customColorsTwo);
    /* input read write here */
    let body_background = document.getElementById("body_background_two");
    body_background.value = data.customColorsTwo[0];
    body_background.onchange = function () {
      data.customColorsTwo[0] = body_background.value;
      update(data.customColorsTwo, true);
    };
    let element = document.getElementById("element_two");
    element.value = data.customColorsTwo[1];
    element.onchange = function () {
      data.customColorsTwo[1] = element.value;
      update(data.customColorsTwo, true);
    };
    let element_accent = document.getElementById("element_accent_two");
    element_accent.value = data.customColorsTwo[2];
    element_accent.onchange = function () {
      data.customColorsTwo[2] = element_accent.value;
      update(data.customColorsTwo, true);
    };
    let element_darkend = document.getElementById("element_darkend_two");
    element_darkend.value = data.customColorsTwo[3];
    element_darkend.onchange = function () {
      data.customColorsTwo[3] = element_darkend.value;
      update(data.customColorsTwo, true);
    };
    let main = document.getElementById("main_two");
    main.value = data.customColorsTwo[4];
    main.onchange = function () {
      data.customColorsTwo[4] = main.value;
      update(data.customColorsTwo, true);
    };
    let main_accent = document.getElementById("main_accent_two");
    main_accent.value = data.customColorsTwo[5];
    main_accent.onchange = function () {
      data.customColorsTwo[5] = main_accent.value;
      update(data.customColorsTwo, true);
    };
    let textOnElem = document.getElementById("textOnElem_two");
    textOnElem.value = data.customColorsTwo[6];
    textOnElem.onchange = function () {
      data.customColorsTwo[6] = textOnElem.value;
      update(data.customColorsTwo, true);
    };
    let colorLink = document.getElementById("colorLink_two");
    colorLink.value = data.customColorsTwo[7];
    colorLink.onchange = function () {
      data.customColorsTwo[7] = colorLink.value;
      update(data.customColorsTwo, true);
    };
    let colorLinkHover = document.getElementById("colorLinkHover_two");
    colorLinkHover.value = data.customColorsTwo[8];
    colorLinkHover.onchange = function () {
      data.customColorsTwo[8] = colorLinkHover.value;
      update(data.customColorsTwo, true);
    };
  }
);

/*OTHER*/
let titleAnime = "No link has been set yet :/";
let linkAnime = "No link has been set yet :/";
let aAnime = document.getElementById("linkAnime");

let titleManga = "No link has been set yet :/";
let linkManga = "No link has been set yet :/";
let aManga = document.getElementById("linkManga");

let checkboxTheaterMode = document.getElementById("inputEnableTheaterMode");
checkboxTheaterMode.addEventListener("click", theaterModeToggle);

browser.storage.sync.get(["theaterMode"], function (result) {
  if (result) {
    checkboxTheaterMode.checked = result["theaterMode"];
  }
});

let checkboxAutoplay = document.getElementById("inputEnableAutoplay");
checkboxAutoplay.addEventListener("click", autoplayToggle);

browser.storage.sync.get(["autoplay"], function (result) {
  if (result) {
    checkboxAutoplay.checked = result["autoplay"];
  }
});

aAnime.onclick = function () {
  tabs.create({ active: true, url: linkAnime });
};
aManga.onclick = function () {
  tabs.create({ active: true, url: linkManga });
};

browser.storage.sync.get(["lastPageLinkAnime"], function (result) {
  linkAnime = result.lastPageLinkAnime;
  aAnime.setAttribute("href", result.lastPageLinkAnime);
});
browser.storage.sync.get(["lastPageTitleAnime"], function (result) {
  titleAnime = result.lastPageTitleAnime
    ? result.lastPageTitleAnime
    : "No link has been set yet :/";
  aAnime.innerHTML = titleAnime;
});

browser.storage.sync.get(["lastPageLinkManga"], function (result) {
  linkManga = result.lastPageLinkManga;
  aManga.setAttribute("href", result.lastPageLinkManga);
});
browser.storage.sync.get(["lastPageTitleManga"], function (result) {
  titleManga = result.lastPageTitleManga
    ? result.lastPageTitleManga
    : "No link has been set yet :/";
  aManga.innerHTML = titleManga;
});

function theaterModeToggle() {
  browser.storage.sync.set(
    { theaterMode: checkboxTheaterMode.checked },
    function () {}
  );
}

function autoplayToggle() {
  browser.storage.sync.set(
    { autoplay: checkboxAutoplay.checked },
    function () {}
  );
}

function update(array, isTwo) {
  if (!isTwo) {
    browser.storage.sync.set(
      {
        customColors: array,
      },
      function () {
        console.log("custom colors saved");
      }
    );
  } else {
    browser.storage.sync.set(
      {
        customColorsTwo: array,
      },
      function () {
        console.log("custom colors two saved");
      }
    );
  }
}
