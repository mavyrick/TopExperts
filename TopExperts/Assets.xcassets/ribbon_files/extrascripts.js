var oldAlert = window.alert;
window.alert = function (str) {
    if ((str.indexOf('expired') !== -1) || str.indexOf('expires') !== -1) { return; }
    else { oldAlert.call(window, str); }
};

if (typeof angular !== 'undefined') {
    var parentMatches = function (el, predicate) {
        do {
            if (predicate(el)) {
                return true;
            } if (el === null) {
                return false;
            }
        } while (el = el.parentElement);
    }
    var handler = function (e) {
        if (parentMatches(e.target, function (el) { return (el.href || '').indexOf('stocks/') !== -1; })) {
            e.stopPropagation();
        }
    };
    document.addEventListener('click', handler, true);
    document.addEventListener('keydown', handler, true);
}

setInterval(function () {
    var cryptoHeaderUrls = document.querySelectorAll(".client-components-header-header-sub-menu__text[href='/crypto']");
    if (cryptoHeaderUrls.length > 0) {
        var cryptoHeaderUrl =cryptoHeaderUrls[0]; 
        cryptoHeaderUrl.href = 'https://www.coinwatch.com/';
        cryptoHeaderUrl.addEventListener('click', function (e) {
            e.stopPropagation();
            window.location.href = 'https://www.coinwatch.com/';
        });
    }
}, 100);