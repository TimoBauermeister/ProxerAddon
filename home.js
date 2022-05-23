let h1 = document.createElement("h1");
h1.textContent = 'Chronik: ';
try {
const topElement = document.getElementsByTagName("table")[0].children[0].children[0].children[0];

if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
    xmlhttp = new XMLHttpRequest();
} else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        let div = document.createElement("div")
        div.innerHTML = xmlhttp.responseText;
        let table = div.getElementsByTagName("table")[0];
        for (let i = 11; i < 51; i++) {
            if (table.children[0].children[11] === null) {
                break;
            }
            table.children[0].children[11].remove();
        }
        table.style.marginBottom = '50px';
        document.getElementsByClassName("inner")[0].prepend(table)
        document.getElementsByClassName("inner")[0].prepend(h1);
        // trigger tooltip function of proxer to get images
        var s = document.createElement('script');
        s.src = chrome.runtime.getURL('tooltip.js');
        s.onload = function() {
            this.remove();
        };
        (document.head || document.documentElement).appendChild(s);
    }
}

xmlhttp.open("GET", 'https://proxer.me/ucp?s=history', false);
xmlhttp.send();
} catch (error) {
    console.log(error);
}