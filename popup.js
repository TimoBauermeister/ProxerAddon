/*Custom Color*/
chrome.storage.sync.get({
    customColors:["#000","#045b62","#0f565e","#02393e","#0d484e","#3d8086"]
},
function(data) {
    //console.log(data.customColors);
    /* input read write here */
    let body_background = document.getElementById("body_background");
    body_background.value = data.customColors[0];
    body_background.onchange = function() {
        data.customColors[0] = body_background.value;
        update(data.customColors);
    }
    let element = document.getElementById("element");
    element.value = data.customColors[1];
    element.onchange = function() {
        data.customColors[1] = element.value;
        update(data.customColors);
    }
    let element_accent = document.getElementById("element_accent");
    element_accent.value = data.customColors[2];
    element_accent.onchange = function() {
        data.customColors[2] = element_accent.value;
        update(data.customColors);
    }
    let element_darkend = document.getElementById("element_darkend");
    element_darkend.value = data.customColors[3];
    element_darkend.onchange = function() {
        data.customColors[3] = element_darkend.value;
        update(data.customColors);
    }
    let main = document.getElementById("main");
    main.value = data.customColors[4];
    main.onchange = function() {
        data.customColors[4] = main.value;
        update(data.customColors);
    }
    let main_accent = document.getElementById("main_accent");
    main_accent.value = data.customColors[5];
    main_accent.onchange = function() {
        data.customColors[5] = main_accent.value;
        update(data.customColors);
    }
}
);

/*OTHER*/
let titleAnime = 'No link has been set yet :/';
let linkAnime = 'No link has been set yet :/'
let aAnime = document.getElementById("linkAnime");

let titleManga = 'No link has been set yet :/';
let linkManga = 'No link has been set yet :/'
let aManga = document.getElementById("linkManga");

let checkbox = document.getElementById('inputEnableTheaterMode');
checkbox.addEventListener("click", theaterModeToggle);

chrome.storage.sync.get(['theaterMode'], function (result) {
    if (result) {
        checkbox.checked = result['theaterMode'];
    }
});

aAnime.onclick = function() {
    chrome.tabs.create({active: true, url: linkAnime});
}
aManga.onclick = function() {
    chrome.tabs.create({active: true, url: linkManga});
}

chrome.storage.sync.get(['lastPageLinkAnime'], function (result) {
    linkAnime = result.lastPageLinkAnime;
    aAnime.setAttribute('href', result.lastPageLinkAnime);
});
chrome.storage.sync.get(['lastPageTitleAnime'], function (result) {
    titleAnime = result.lastPageTitleAnime ? result.lastPageTitleAnime : 'No link has been set yet :/';
    aAnime.innerHTML = titleAnime;
});

chrome.storage.sync.get(['lastPageLinkManga'], function (result) {
    linkManga = result.lastPageLinkManga;
    aManga.setAttribute('href', result.lastPageLinkManga);
});
chrome.storage.sync.get(['lastPageTitleManga'], function (result) {
    titleManga = result.lastPageTitleManga ? result.lastPageTitleManga : 'No link has been set yet :/';
    aManga.innerHTML = titleManga;
});

function theaterModeToggle() {
    chrome.storage.sync.set({ 'theaterMode': checkbox.checked }, function () {
    });
}

function update(array) {
    chrome.storage.sync.set({
        customColors:array
    }, function() {
        console.log("custom colors saved");
    });
}