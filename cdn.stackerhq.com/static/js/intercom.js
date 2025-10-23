var w = window,
    ic = w.Intercom
if ("function" == typeof ic) ic("reattach_activator"), ic("update", intercomSettings)
else {
    var d = document,
        i = function() {
            i.c(arguments)
        }
    function l() {
        var t = d.createElement("script")
        ;(t.type = "text/javascript"),
            (t.async = !0),
            (t.src = "https://widget.intercom.io/widget/bu5482h5")
        var e = d.getElementsByTagName("script")[0]
        e.parentNode.insertBefore(t, e)
    }
    ;(i.q = []),
        (i.c = function(t) {
            i.q.push(t)
        }),
        (w.Intercom = i),
        w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)
}
