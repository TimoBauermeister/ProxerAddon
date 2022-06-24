{let h1 = document.createElement("h1");
h1.textContent = 'Lesezeichen: ';
let a = document.createElement("a");
a.textContent = "All";
a.href = "https://proxer.me/ucp?s=reminder";
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
        let table = div.getElementsByClassName("inner")[0].childNodes[1];
        /* Delete Unusable Elements */
        while(table.querySelector(".deleteReminder") != undefined) {
            table.querySelector(".deleteReminder").parentElement.remove();
        }
        let animelist = table.getElementsByTagName("TABLE")[0];
        animelist.firstChild.firstChild.lastChild.remove();
        let mangalist = table.getElementsByTagName("TABLE")[1];
        mangalist.firstChild.firstChild.lastChild.remove();

        table.style.marginBottom = '50px';
        document.getElementsByClassName("inner")[0].prepend(table);
        document.getElementsByClassName("inner")[0].prepend(a);
        document.getElementsByClassName("inner")[0].prepend(h1);
        // trigger tooltip function of proxer to get images
        let s = document.createElement('script');
        s.src = chrome.runtime.getURL('home-tooltip.js');
        s.onload = function() {
            this.remove();
        };
        (document.head || document.documentElement).appendChild(s);
    }
}

xmlhttp.open("GET", 'https://proxer.me/ucp?s=reminder&search_available', false);
xmlhttp.send();
} catch (error) {
    console.log(error);
}}

/* Chronik */
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
        let s = document.createElement('script');
        s.src = chrome.runtime.getURL('home-tooltip.js');
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