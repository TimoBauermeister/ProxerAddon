// reloads site on every route change so that custom js is loaded
let oldHref = document.location.href;

window.onload = function() {
    let bodyList = document.querySelector("body")

    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (oldHref !== document.location.href) {
                oldHref = document.location.href;
                reload();
            }
        });
    });

    let config = {
        childList: true,
        subtree: true
    };

    observer.observe(bodyList, config);
};


function reload() {
    console.log('test');
    location.reload();
}