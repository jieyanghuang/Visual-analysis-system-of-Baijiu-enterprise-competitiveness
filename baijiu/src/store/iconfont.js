!(function(t) {
  var e,
    n,
    c,
    l,
    i,
    o =
      '<svg><symbol id="icon-xingxing" viewBox="0 0 1024 1024"><path d="M275.7 653.7c0.4-8.2-2.2-16.2-7.3-22.6L100.7 421 352 348.6c8.1-2.3 15-7.6 19.4-14.9l137.5-229.4 142.2 226.1c4.5 7.2 11.5 12.4 19.7 14.5l252.7 66.5-163.3 214c-4.9 6.5-7.4 14.5-6.8 22.7l17.6 272-242.2-95.5c-3.9-1.5-8-2.3-12.1-2.3-4.4 0-8.7 0.9-12.8 2.6l-240.1 101 11.9-272.2z" fill="#......" ></path><path d="M509.4 152.1L630 343.8c7.9 12.6 20.2 21.6 34.5 25.4l216.5 57-140.7 184.2c-8.6 11.3-12.8 25.3-11.9 39.5l15.1 232.7-205.5-81c-6.8-2.7-14-4-21.3-4-7.8 0-15.3 1.5-22.5 4.5l-203.7 85.7 10.2-232.9c0.6-14.2-3.9-28.2-12.8-39.2l-144.4-181 215.4-62c14.2-4.1 26.3-13.4 33.9-26.1l116.6-194.5m-0.9-88.1c-2.7 0-5.4 1.4-7.1 4.1L349.9 320.9c-1.1 1.8-2.8 3.2-4.8 3.8l-275 79.2c-5.8 1.7-8 9-4.2 13.8l183 229.3c1.3 1.6 2 3.7 1.9 5.9L237.7 951c-0.2 5.1 3.8 9 8.3 9 1 0 2.1-0.2 3.1-0.6l264.5-111.2c1-0.4 2.1-0.6 3.1-0.6s2 0.2 3 0.6l266.7 105.1c1 0.4 2 0.6 3 0.6 4.6 0 8.6-4 8.3-9.2l-19.3-298c-0.1-2.1 0.5-4.2 1.8-5.9l178.1-233.4c3.7-4.9 1.4-12.1-4.5-13.7l-276.6-72.8c-2-0.5-3.8-1.8-4.9-3.6L515.5 67.9c-1.7-2.6-4.3-3.9-7-3.9z" fill="#......" ></path><path d="M291 876l177.8-95 179.4 32.9c4.8 1.3 9.7 1.9 14.7 1.9 16 0 31.5-6.7 42.4-18.4 9.9-10.6 15.6-24.6 15.8-39.1l7.5-106.5 15 230.9-205.5-81c-6.8-2.7-14-4-21.3-4-7.8 0-15.3 1.5-22.5 4.5l-203.7 85.7 0.4-11.9z m444.4-321.9l85.2-143.8 60.3 15.9-140.6 184.2c-5 6.6-8.6 14.1-10.5 22.1l5.6-78.4z" fill="#......" ></path><path d="M370.9 633.4L240.1 406.8l49.5-14.3 124.6 215.8c4.1 7.1 1.7 16.4-5.5 20.5l-17.3 10c-7.1 4.2-16.4 1.7-20.5-5.4z m191 30.8L384.6 357.1s-7.6 8.1-16.3 11.9c-3.3 2.4-29.2 9.3-29.2 9.3L516.8 686c4.1 7.1 13.3 9.6 20.5 5.5l17.3-10c7.1-4.1 9.6-13.4 7.3-17.3z" fill="#......" ></path></symbol></svg>',
    d = (d = document.getElementsByTagName("script"))[
      d.length - 1
    ].getAttribute("data-injectcss"),
    a = function(t, e) {
      e.parentNode.insertBefore(t, e);
    };
  if (d && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (t) {
      console && console.log(t);
    }
  }
  function s() {
    i || ((i = !0), c());
  }
  function r() {
    try {
      l.documentElement.doScroll("left");
    } catch (t) {
      return void setTimeout(r, 50);
    }
    s();
  }
  (e = function() {
    var t, e;
    ((e = document.createElement("div")).innerHTML = o),
      (o = null),
      (t = e.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (e = t),
        (t = document.body).firstChild ? a(e, t.firstChild) : t.appendChild(e));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(e, 0)
        : ((n = function() {
            document.removeEventListener("DOMContentLoaded", n, !1), e();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((c = e),
        (l = t.document),
        (i = !1),
        r(),
        (l.onreadystatechange = function() {
          "complete" == l.readyState && ((l.onreadystatechange = null), s());
        }));
})(window);
