let titleAnime = 'No link has been set yet :/';
let linkAnime = 'No link has been set yet :/'
let aAnime = document.getElementById("linkAnime");

let titleManga = 'No link has been set yet :/';
let linkManga = 'No link has been set yet :/'
let aManga = document.getElementById("linkManga");

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