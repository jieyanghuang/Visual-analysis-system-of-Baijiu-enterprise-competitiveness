!(function(e) {
  var t,
    n,
    o,
    i,
    l,
    d =
      '<svg><symbol id="icon-jz" viewBox="0 0 1024 1024"><path d="M698.81 598.73l55.93-55.93 93.96 93.96-62.64 62.64 125.28 125.28-93.96 93.97L692.1 793.36 629.45 856l-93.96-93.96 55.93-55.93L175.3 370.53 97 104.31l266.23 78.3z" fill="#1892ff" ></path><path d="M432.58 706.11l55.93 55.93L394.55 856l-62.64-62.64-125.29 125.29-93.96-93.97L237.95 699.4l-62.65-62.64 93.97-93.96 55.93 55.93 335.58-416.12L927 104.31l-78.3 266.22z" fill="#83c5fd" ></path></symbol></svg>',
    c = (c = document.getElementsByTagName("script"))[
      c.length - 1
    ].getAttribute("data-injectcss"),
    a = function(e, t) {
      t.parentNode.insertBefore(e, t);
    };
  if (c && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    l || ((l = !0), o());
  }
  function r() {
    try {
      i.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(r, 50);
    }
    s();
  }
  (t = function() {
    var e, t;
    ((t = document.createElement("div")).innerHTML = d),
      (d = null),
      (e = t.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (t = e),
        (e = document.body).firstChild ? a(t, e.firstChild) : e.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function() {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (l = !1),
        r(),
        (i.onreadystatechange = function() {
          "complete" == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
