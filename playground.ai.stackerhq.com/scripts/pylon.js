(function () {
    var e = window;
    var t = document;
    var n = function () {
        n.e(arguments)
    };
    n.q = [];
    n.e = function (e) {
        n.q.push(e)
    };
    e.Pylon = n;
    var r = function () {
        var e = t.createElement("script");
        e.setAttribute("type", "text/javascript");
        e.setAttribute("async", "true");
        e.setAttribute("src", "https://widget.usepylon.com/widget/ff138c3e-9043-400a-8972-1ae09ad2a5ef");
        var n = t.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n)
    };
    if (t.readyState === "complete") {
        r()
    } else if (e.addEventListener) {
        e.addEventListener("load", r, false)
    }
})();
