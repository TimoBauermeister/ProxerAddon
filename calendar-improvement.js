/* Proxer gay robo abfrage fickt das hier LUL kann ja nen knopf drauß machen oder so...
for(let calendarEntry of document.getElementsByClassName("calendarTable")) {
    let descriptionContainer = document.createElement("tr");
    let descriptionTd = document.createElement("td");

    descriptionTd.setAttribute("colspan","2");
    descriptionTd.setAttribute("class","descriptionText");
    descriptionTd.textContent = "loading...";

    descriptionContainer.appendChild(descriptionTd);

    calendarEntry.getElementsByTagName("table")[0].lastChild.previousElementSibling.appendChild(descriptionContainer);
    
    var xmlr = new XMLHttpRequest();
    xmlr.responseType = "document";
    if(calendarEntry.getElementsByClassName("titelRow")[0].firstChild.nextElementSibling.firstChild.nextElementSibling.href != null) {
        xmlr.open("GET",calendarEntry.getElementsByClassName("titelRow")[0].firstChild.nextElementSibling.firstChild.nextElementSibling.href,true);
        xmlr.send();
        xmlr.onreadystatechange = function() {
            if (this.readyState == 4 && this.response != null) {
                if( this.response.getElementsByClassName("details")[0] != undefined &&
                    this.response.getElementsByClassName("details")[0].lastChild != undefined &&
                    this.response.getElementsByClassName("details")[0].lastChild.lastChild != undefined &&
                    this.response.getElementsByClassName("details")[0].lastChild.lastChild.previousElementSibling != undefined) {
                    descriptionTd.textContent = this.response.getElementsByClassName("details")[0].lastChild.lastChild.previousElementSibling.textContent;
                }
            }
        }
    }
}*/

for(let calendarEntry of document.getElementsByClassName("calendarTable")) {
    let descriptionContainer = document.createElement("tr");
    let descriptionTd = document.createElement("td");

    descriptionTd.setAttribute("colspan","2");
    descriptionTd.setAttribute("class","descriptionText");
    descriptionTd.textContent = "hier draufhauen um Beschreibung zu laden";

    descriptionContainer.appendChild(descriptionTd);

    calendarEntry.getElementsByTagName("table")[0].lastChild.previousElementSibling.appendChild(descriptionContainer); // deine Schwester
    
    descriptionTd.onclick = function () {
        if(descriptionContainer.textContent == "hier draufhauen um Beschreibung zu laden") {
            descriptionTd.textContent = "Laden..."; // nein ich werde nicht richtig Deutsch schreiben
            var xmlr = new XMLHttpRequest();
            xmlr.responseType = "document";
            if(calendarEntry.getElementsByClassName("titelRow")[0].firstChild.nextElementSibling.firstChild.nextElementSibling.href != null) {
                xmlr.open("GET",calendarEntry.getElementsByClassName("titelRow")[0].firstChild.nextElementSibling.firstChild.nextElementSibling.href,true);
                xmlr.send();
                xmlr.onreadystatechange = function() {
                    if (this.readyState == 4 && this.response != null) {
                        if( this.response.getElementsByClassName("details")[0] != undefined && /* YES THIS IS VERY CLEAN :( */
                            this.response.getElementsByClassName("details")[0].lastChild != undefined &&
                            this.response.getElementsByClassName("details")[0].lastChild.lastChild != undefined &&
                            this.response.getElementsByClassName("details")[0].lastChild.lastChild.previousElementSibling != undefined) {
                            descriptionTd.textContent = this.response.getElementsByClassName("details")[0].lastChild.lastChild.previousElementSibling.textContent;
                        }
                    }
                }
            }
        }
    }
    
}