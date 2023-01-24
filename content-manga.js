let div = document.getElementsByClassName("no_details").item(0);

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

let button = document.querySelector('[title="reminder_next"]');
button.setAttribute("href", href);
button.innerHTML = "Nächste und abhaken >";
button.addEventListener("click", function () {
  let lastPageLink = "https://proxer.me" + href;
  browser.storage.sync.set({ lastPageLinkManga: lastPageLink }, function () {});

  let lastPageTitle = document.title;
  lastPageTitle = lastPageTitle.replace(" - Proxer.Me", "");
  let lastPageTitle_array = lastPageTitle.split("Kapitel ");
  let number = lastPageTitle_array[1].substring(
    0,
    lastPageTitle_array[1].indexOf(" ")
  );
  lastPageTitle =
    lastPageTitle_array[0] +
    "Kapitel " +
    (parseInt(number) + 1) +
    lastPageTitle_array[1].substring(number.length);

  browser.storage.sync.set(
    { lastPageTitleManga: lastPageTitle },
    function () {}
  );
});
