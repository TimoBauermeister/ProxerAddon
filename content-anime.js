browser.storage.sync.get(["theaterMode"], function (result) {
  if (result && !result["theaterMode"]) {
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

    let button = div.children[1].children[1];
    div.children[1].setAttribute("colspan", "3");
    button.setAttribute("href", href);
    button.innerHTML = "Nächste und abhaken >";
    button.addEventListener("click", function () {
      let lastPageLink = "https://proxer.me" + href;
      browser.storage.sync.set(
        { lastPageLinkAnime: lastPageLink },
        function () {}
      );

      let lastPageTitle = document.title;
      lastPageTitle = lastPageTitle.replace(" - Proxer.Me", "");
      let lastPageTitle_array = lastPageTitle.split("Episode ");
      let number = lastPageTitle_array[1].substring(
        0,
        lastPageTitle_array[1].indexOf(" ")
      );
      lastPageTitle =
        lastPageTitle_array[0] +
        "Episode " +
        (parseInt(number) + 1) +
        lastPageTitle_array[1].substring(number.length);

      browser.storage.sync.set(
        { lastPageTitleAnime: lastPageTitle },
        function () {}
      );
    });

    // Move buttons to new locations

    let button_0 = div.children[0].children[0];
    let button_1 = div.children[1].children[0];
    let button_2 = div.children[2].children[0];
    let button_3 = div.children[1].children[1];
    let button_array = [button_0, button_1, button_2, button_3];

    let table = document.createElement("table");
    table.setAttribute("id", "customButtons");
    let tr = table.insertRow();
    tr.insertCell();

    for (let i = 0; i < button_array.length; i++) {
      let td = tr.insertCell();
      if (button_array[i] !== undefined || button_array[i] != null) {
        td.appendChild(button_array[i]);
      }
    }

    div.children[1].appendChild(table);
    div.children[0].remove();

    document.getElementsByTagName("table")[2].remove();
  }
});
