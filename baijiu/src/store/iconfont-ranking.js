!(function(e) {
  var t,
    n,
    a,
    o,
    i,
    l =
      '<svg><symbol id="icon-paiming" viewBox="0 0 1226 1024"><path d="M846.938856 0a157.180969 157.180969 0 0 1 157.180969 157.242248v237.027675a393.105619 393.105619 0 0 1-314.300658 385.200611v86.587411h78.559844a69.490533 69.490533 0 0 1 78.559845 78.621124 69.490533 69.490533 0 0 1-78.559845 78.621123H454.078354a69.490533 69.490533 0 0 1-78.559845-78.621123 69.490533 69.490533 0 0 1 78.559845-78.621124h78.559844v-86.64869a393.105619 393.105619 0 0 1-314.300658-385.200612V157.180969A157.180969 157.180969 0 0 1 375.518509 0h471.481626z m-91.918695 331.213698a39.279922 39.279922 0 0 0-25.247001 9.191869l-2.573724 2.328607-166.801792 167.046909a39.341201 39.341201 0 0 0-2.389886 52.883889l2.389886 2.635003a39.279922 39.279922 0 0 0 53.067727 2.389886l2.573723-2.328607L782.779607 398.314345a39.279922 39.279922 0 0 0 2.389886-52.883889l-2.389886-2.635003a39.341201 39.341201 0 0 0-27.882004-11.336639z m-134.140016-157.487364a39.279922 39.279922 0 0 0-25.247001 9.191869l-2.512444 2.328607-111.221621 111.405458a39.279922 39.279922 0 0 0-2.389887 52.88389l2.389887 2.635002a39.279922 39.279922 0 0 0 53.067726 2.389886l2.512444-2.328607 111.221621-111.405458a39.279922 39.279922 0 0 0 2.389887-52.883889l-2.389887-2.635003a39.341201 39.341201 0 0 0-27.943283-11.520476z" fill="" ></path><path d="M87.935552 142.106303h102.581263a4.90233 4.90233 0 0 1 4.902331 4.90233v337.035215A195.419146 195.419146 0 0 1 0 288.685982v-58.644128a87.935552 87.935552 0 0 1 87.935552-87.935551z" fill="" ></path><path d="M1035.065785 142.106303h102.581264A87.935552 87.935552 0 0 1 1225.582601 230.041854v58.644128A195.419146 195.419146 0 0 1 1030.163455 484.105127V147.008633a4.90233 4.90233 0 0 1 4.90233-4.90233z" fill="" ></path></symbol></svg>',
    d = (d = document.getElementsByTagName("script"))[
      d.length - 1
    ].getAttribute("data-injectcss"),
    c = function(e, t) {
      t.parentNode.insertBefore(e, t);
    };
  if (d && !e.__iconfont__svg__cssinject__) {
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
    i || ((i = !0), a());
  }
  function r() {
    try {
      o.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(r, 50);
    }
    s();
  }
  (t = function() {
    var e, t;
    ((t = document.createElement("div")).innerHTML = l),
      (l = null),
      (e = t.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (t = e),
        (e = document.body).firstChild ? c(t, e.firstChild) : e.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function() {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((a = t),
        (o = e.document),
        (i = !1),
        r(),
        (o.onreadystatechange = function() {
          "complete" == o.readyState && ((o.onreadystatechange = null), s());
        }));
})(window);
