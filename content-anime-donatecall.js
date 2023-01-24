setTimeout(() => {
  if (document.getElementById("donatecall") != undefined) {
    for (let aElem of document
      .getElementById("donatecall")
      .getElementsByTagName("A")) {
      if (aElem.textContent === "Später erinnern") {
        aElem.click();
      }
    }
  }
}, 200);
