// https://d3js.org/d3-hierarchy/ v2.0.0 Copyright 2020 Mike Bostock
!(function (n, r) {
    "object" == typeof exports && "undefined" != typeof module
        ? r(exports)
        : "function" == typeof define && define.amd
            ? define(["exports"], r)
            : r(((n = n || self).d3 = n.d3 || {}));
})(this, function (n) {
    "use strict";
    function r(n, r) {
        return n.parent === r.parent ? 1 : 2;
    }
    function t(n, r) {
        return n + r.x;
    }
    function e(n, r) {
        return Math.max(n, r.y);
    }
    function i(n) {
        var r = 0,
            t = n.children,
            e = t && t.length;
        if (e) for (; --e >= 0;) r += t[e].value;
        else r = 1;
        n.value = r;
    }
    function u(n, r) {
        n instanceof Map
            ? ((n = [void 0, n]), void 0 === r && (r = a))
            : void 0 === r && (r = o);
        for (var t, e, i, u, f, h = new Node(n), l = [h]; (t = l.pop());)
            if ((i = r(t.data)) && (f = (i = Array.from(i)).length))
                for (t.children = i, u = f - 1; u >= 0; --u)
                    l.push((e = i[u] = new Node(i[u]))),
                        (e.parent = t),
                        (e.depth = t.depth + 1);
        return h.eachBefore(c);
    }
    function o(n) {
        return n.children;
    }
    function a(n) {
        return Array.isArray(n) ? n[1] : null;
    }
    function f(n) {
        void 0 !== n.data.value && (n.value = n.data.value), (n.data = n.data.data);
    }
    function c(n) {
        var r = 0;
        do {
            n.height = r;
        } while ((n = n.parent) && n.height < ++r);
    }
    function Node(n) {
        (this.data = n), (this.depth = this.height = 0), (this.parent = null);
    }
    function h(n) {
        for (
            var r,
            t,
            e = 0,
            i = (n = (function (n) {
                for (var r, t, e = n.length; e;)
                    (t = (Math.random() * e--) | 0),
                        (r = n[e]),
                        (n[e] = n[t]),
                        (n[t] = r);
                return n;
            })(Array.from(n))).length,
            u = [];
            e < i;

        )
            (r = n[e]), t && d(t, r) ? ++e : ((t = v((u = l(u, r)))), (e = 0));
        return t;
    }
    function l(n, r) {
        var t, e;
        if (s(r, n)) return [r];
        for (t = 0; t < n.length; ++t)
            if (p(r, n[t]) && s(x(n[t], r), n)) return [n[t], r];
        for (t = 0; t < n.length - 1; ++t)
            for (e = t + 1; e < n.length; ++e)
                if (
                    p(x(n[t], n[e]), r) &&
                    p(x(n[t], r), n[e]) &&
                    p(x(n[e], r), n[t]) &&
                    s(y(n[t], n[e], r), n)
                )
                    return [n[t], n[e], r];
        throw new Error();
    }
    function p(n, r) {
        var t = n.r - r.r,
            e = r.x - n.x,
            i = r.y - n.y;
        return t < 0 || t * t < e * e + i * i;
    }
    function d(n, r) {
        var t = n.r - r.r + 1e-9 * Math.max(n.r, r.r, 1),
            e = r.x - n.x,
            i = r.y - n.y;
        return t > 0 && t * t > e * e + i * i;
    }
    function s(n, r) {
        for (var t = 0; t < r.length; ++t) if (!d(n, r[t])) return !1;
        return !0;
    }
    function v(n) {
        switch (n.length) {
            case 1:
                return { x: (r = n[0]).x, y: r.y, r: r.r };
            case 2:
                return x(n[0], n[1]);
            case 3:
                return y(n[0], n[1], n[2]);
        }
        var r;
    }
    function x(n, r) {
        var t = n.x,
            e = n.y,
            i = n.r,
            u = r.x,
            o = r.y,
            a = r.r,
            f = u - t,
            c = o - e,
            h = a - i,
            l = Math.sqrt(f * f + c * c);
        return {
            x: (t + u + (f / l) * h) / 2,
            y: (e + o + (c / l) * h) / 2,
            r: (l + i + a) / 2,
        };
    }
    function y(n, r, t) {
        var e = n.x,
            i = n.y,
            u = n.r,
            o = r.x,
            a = r.y,
            f = r.r,
            c = t.x,
            h = t.y,
            l = t.r,
            p = e - o,
            d = e - c,
            s = i - a,
            v = i - h,
            x = f - u,
            y = l - u,
            g = e * e + i * i - u * u,
            m = g - o * o - a * a + f * f,
            w = g - c * c - h * h + l * l,
            _ = d * s - p * v,
            M = (s * w - v * m) / (2 * _) - e,
            z = (v * x - s * y) / _,
            B = (d * m - p * w) / (2 * _) - i,
            A = (p * y - d * x) / _,
            q = z * z + A * A - 1,
            b = 2 * (u + M * z + B * A),
            E = M * M + B * B - u * u,
            S = -(q ? (b + Math.sqrt(b * b - 4 * q * E)) / (2 * q) : E / b);
        return { x: e + M + z * S, y: i + B + A * S, r: S };
    }
    function g(n, r, t) {
        var e,
            i,
            u,
            o,
            a = n.x - r.x,
            f = n.y - r.y,
            c = a * a + f * f;
        c
            ? ((i = r.r + t.r),
                (i *= i),
                (o = n.r + t.r),
                i > (o *= o)
                    ? ((e = (c + o - i) / (2 * c)),
                        (u = Math.sqrt(Math.max(0, o / c - e * e))),
                        (t.x = n.x - e * a - u * f),
                        (t.y = n.y - e * f + u * a))
                    : ((e = (c + i - o) / (2 * c)),
                        (u = Math.sqrt(Math.max(0, i / c - e * e))),
                        (t.x = r.x + e * a - u * f),
                        (t.y = r.y + e * f + u * a)))
            : ((t.x = r.x + t.r), (t.y = r.y));
    }
    function m(n, r) {
        var t = n.r + r.r - 1e-6,
            e = r.x - n.x,
            i = r.y - n.y;
        return t > 0 && t * t > e * e + i * i;
    }
    function w(n) {
        var r = n._,
            t = n.next._,
            e = r.r + t.r,
            i = (r.x * t.r + t.x * r.r) / e,
            u = (r.y * t.r + t.y * r.r) / e;
        return i * i + u * u;
    }
    function _(n) {
        (this._ = n), (this.next = null), (this.previous = null);
    }
    function M(n) {
        if (
            !(u = ((r = n),
                (n = "object" == typeof r && "length" in r ? r : Array.from(r))).length)
        )
            return 0;
        var r, t, e, i, u, o, a, f, c, l, p, d;
        if ((((t = n[0]).x = 0), (t.y = 0), !(u > 1))) return t.r;
        if (((e = n[1]), (t.x = -e.r), (e.x = t.r), (e.y = 0), !(u > 2)))
            return t.r + e.r;
        g(e, t, (i = n[2])),
            (t = new _(t)),
            (e = new _(e)),
            (i = new _(i)),
            (t.next = i.previous = e),
            (e.next = t.previous = i),
            (i.next = e.previous = t);
        n: for (f = 3; f < u; ++f) {
            g(t._, e._, (i = n[f])),
                (i = new _(i)),
                (c = e.next),
                (l = t.previous),
                (p = e._.r),
                (d = t._.r);
            do {
                if (p <= d) {
                    if (m(c._, i._)) {
                        (e = c), (t.next = e), (e.previous = t), --f;
                        continue n;
                    }
                    (p += c._.r), (c = c.next);
                } else {
                    if (m(l._, i._)) {
                        ((t = l).next = e), (e.previous = t), --f;
                        continue n;
                    }
                    (d += l._.r), (l = l.previous);
                }
            } while (c !== l.next);
            for (
                i.previous = t, i.next = e, t.next = e.previous = e = i, o = w(t);
                (i = i.next) !== e;

            )
                (a = w(i)) < o && ((t = i), (o = a));
            e = t.next;
        }
        for (t = [e._], i = e; (i = i.next) !== e;) t.push(i._);
        for (i = h(t), f = 0; f < u; ++f) ((t = n[f]).x -= i.x), (t.y -= i.y);
        return i.r;
    }
    function z(n) {
        return null == n ? null : B(n);
    }
    function B(n) {
        if ("function" != typeof n) throw new Error();
        return n;
    }
    function A() {
        return 0;
    }
    function q(n) {
        return function () {
            return n;
        };
    }
    function b(n) {
        return Math.sqrt(n.value);
    }
    function E(n) {
        return function (r) {
            r.children || (r.r = Math.max(0, +n(r) || 0));
        };
    }
    function S(n, r) {
        return function (t) {
            if ((e = t.children)) {
                var e,
                    i,
                    u,
                    o = e.length,
                    a = n(t) * r || 0;
                if (a) for (i = 0; i < o; ++i) e[i].r += a;
                if (((u = M(e)), a)) for (i = 0; i < o; ++i) e[i].r -= a;
                t.r = u + a;
            }
        };
    }
    function k(n) {
        return function (r) {
            var t = r.parent;
            (r.r *= n), t && ((r.x = t.x + n * r.x), (r.y = t.y + n * r.y));
        };
    }
    function I(n) {
        (n.x0 = Math.round(n.x0)),
            (n.y0 = Math.round(n.y0)),
            (n.x1 = Math.round(n.x1)),
            (n.y1 = Math.round(n.y1));
    }
    function j(n, r, t, e, i) {
        for (
            var u,
            o = n.children,
            a = -1,
            f = o.length,
            c = n.value && (e - r) / n.value;
            ++a < f;

        )
            ((u = o[a]).y0 = t), (u.y1 = i), (u.x0 = r), (u.x1 = r += u.value * c);
    }
    Node.prototype = u.prototype = {
        constructor: Node,
        count: function () {
            return this.eachAfter(i);
        },
        each: function (n, r) {
            let t = -1;
            for (const e of this) n.call(r, e, ++t, this);
            return this;
        },
        eachAfter: function (n, r) {
            for (var t, e, i, u = this, o = [u], a = [], f = -1; (u = o.pop());)
                if ((a.push(u), (t = u.children)))
                    for (e = 0, i = t.length; e < i; ++e) o.push(t[e]);
            for (; (u = a.pop());) n.call(r, u, ++f, this);
            return this;
        },
        eachBefore: function (n, r) {
            for (var t, e, i = this, u = [i], o = -1; (i = u.pop());)
                if ((n.call(r, i, ++o, this), (t = i.children)))
                    for (e = t.length - 1; e >= 0; --e) u.push(t[e]);
            return this;
        },
        find: function (n, r) {
            let t = -1;
            for (const e of this) if (n.call(r, e, ++t, this)) return e;
        },
        sum: function (n) {
            return this.eachAfter(function (r) {
                for (
                    var t = +n(r.data) || 0, e = r.children, i = e && e.length;
                    --i >= 0;

                )
                    t += e[i].value;
                r.value = t;
            });
        },
        sort: function (n) {
            return this.eachBefore(function (r) {
                r.children && r.children.sort(n);
            });
        },
        path: function (n) {
            for (
                var r = this,
                t = (function (n, r) {
                    if (n === r) return n;
                    var t = n.ancestors(),
                        e = r.ancestors(),
                        i = null;
                    for (n = t.pop(), r = e.pop(); n === r;)
                        (i = n), (n = t.pop()), (r = e.pop());
                    return i;
                })(r, n),
                e = [r];
                r !== t;

            )
                (r = r.parent), e.push(r);
            for (var i = e.length; n !== t;) e.splice(i, 0, n), (n = n.parent);
            return e;
        },
        ancestors: function () {
            for (var n = this, r = [n]; (n = n.parent);) r.push(n);
            return r;
        },
        descendants: function () {
            return Array.from(this);
        },
        leaves: function () {
            var n = [];
            return (
                this.eachBefore(function (r) {
                    r.children || n.push(r);
                }),
                n
            );
        },
        links: function () {
            var n = this,
                r = [];
            return (
                n.each(function (t) {
                    t !== n && r.push({ source: t.parent, target: t });
                }),
                r
            );
        },
        copy: function () {
            return u(this).eachBefore(f);
        },
        [Symbol.iterator]: function* () {
            var n,
                r,
                t,
                e,
                i = this,
                u = [i];
            do {
                for (n = u.reverse(), u = []; (i = n.pop());)
                    if ((yield i, (r = i.children)))
                        for (t = 0, e = r.length; t < e; ++t) u.push(r[t]);
            } while (u.length);
        },
    };
    var O = { depth: -1 },
        R = {};
    function T(n) {
        return n.id;
    }
    function D(n) {
        return n.parentId;
    }
    function L(n, r) {
        return n.parent === r.parent ? 1 : 2;
    }
    function P(n) {
        var r = n.children;
        return r ? r[0] : n.t;
    }
    function C(n) {
        var r = n.children;
        return r ? r[r.length - 1] : n.t;
    }
    function F(n, r, t) {
        var e = t / (r.i - n.i);
        (r.c -= e), (r.s += t), (n.c += e), (r.z += t), (r.m += t);
    }
    function G(n, r, t) {
        return n.a.parent === r.parent ? n.a : t;
    }
    function H(n, r) {
        (this._ = n),
            (this.parent = null),
            (this.children = null),
            (this.A = null),
            (this.a = this),
            (this.z = 0),
            (this.m = 0),
            (this.c = 0),
            (this.s = 0),
            (this.t = null),
            (this.i = r);
    }
    function J(n, r, t, e, i) {
        for (
            var u,
            o = n.children,
            a = -1,
            f = o.length,
            c = n.value && (i - t) / n.value;
            ++a < f;

        )
            ((u = o[a]).x0 = r), (u.x1 = e), (u.y0 = t), (u.y1 = t += u.value * c);
    }
    H.prototype = Object.create(Node.prototype);
    var K = (1 + Math.sqrt(5)) / 2;
    function N(n, r, t, e, i, u) {
        for (
            var o,
            a,
            f,
            c,
            h,
            l,
            p,
            d,
            s,
            v,
            x,
            y = [],
            g = r.children,
            m = 0,
            w = 0,
            _ = g.length,
            M = r.value;
            m < _;

        ) {
            (f = i - t), (c = u - e);
            do {
                h = g[w++].value;
            } while (!h && w < _);
            for (
                l = p = h,
                x = h * h * (v = Math.max(c / f, f / c) / (M * n)),
                s = Math.max(p / x, x / l);
                w < _;
                ++w
            ) {
                if (
                    ((h += a = g[w].value),
                        a < l && (l = a),
                        a > p && (p = a),
                        (x = h * h * v),
                        (d = Math.max(p / x, x / l)) > s)
                ) {
                    h -= a;
                    break;
                }
                s = d;
            }
            y.push((o = { value: h, dice: f < c, children: g.slice(m, w) })),
                o.dice
                    ? j(o, t, e, i, M ? (e += (c * h) / M) : u)
                    : J(o, t, e, M ? (t += (f * h) / M) : i, u),
                (M -= h),
                (m = w);
        }
        return y;
    }
    var Q = (function n(r) {
        function t(n, t, e, i, u) {
            N(r, n, t, e, i, u);
        }
        return (
            (t.ratio = function (r) {
                return n((r = +r) > 1 ? r : 1);
            }),
            t
        );
    })(K);
    var U = (function n(r) {
        function t(n, t, e, i, u) {
            if ((o = n._squarify) && o.ratio === r)
                for (var o, a, f, c, h, l = -1, p = o.length, d = n.value; ++l < p;) {
                    for (
                        f = (a = o[l]).children, c = a.value = 0, h = f.length;
                        c < h;
                        ++c
                    )
                        a.value += f[c].value;
                    a.dice
                        ? j(a, t, e, i, d ? (e += ((u - e) * a.value) / d) : u)
                        : J(a, t, e, d ? (t += ((i - t) * a.value) / d) : i, u),
                        (d -= a.value);
                }
            else (n._squarify = o = N(r, n, t, e, i, u)), (o.ratio = r);
        }
        return (
            (t.ratio = function (r) {
                return n((r = +r) > 1 ? r : 1);
            }),
            t
        );
    })(K);
    (n.cluster = function () {
        var n = r,
            i = 1,
            u = 1,
            o = !1;
        function a(r) {
            var a,
                f = 0;
            r.eachAfter(function (r) {
                var i = r.children;
                i
                    ? ((r.x = (function (n) {
                        return n.reduce(t, 0) / n.length;
                    })(i)),
                        (r.y = (function (n) {
                            return 1 + n.reduce(e, 0);
                        })(i)))
                    : ((r.x = a ? (f += n(r, a)) : 0), (r.y = 0), (a = r));
            });
            var c = (function (n) {
                for (var r; (r = n.children);) n = r[0];
                return n;
            })(r),
                h = (function (n) {
                    for (var r; (r = n.children);) n = r[r.length - 1];
                    return n;
                })(r),
                l = c.x - n(c, h) / 2,
                p = h.x + n(h, c) / 2;
            return r.eachAfter(
                o
                    ? function (n) {
                        (n.x = (n.x - r.x) * i), (n.y = (r.y - n.y) * u);
                    }
                    : function (n) {
                        (n.x = ((n.x - l) / (p - l)) * i),
                            (n.y = (1 - (r.y ? n.y / r.y : 1)) * u);
                    }
            );
        }
        return (
            (a.separation = function (r) {
                return arguments.length ? ((n = r), a) : n;
            }),
            (a.size = function (n) {
                return arguments.length
                    ? ((o = !1), (i = +n[0]), (u = +n[1]), a)
                    : o
                        ? null
                        : [i, u];
            }),
            (a.nodeSize = function (n) {
                return arguments.length
                    ? ((o = !0), (i = +n[0]), (u = +n[1]), a)
                    : o
                        ? [i, u]
                        : null;
            }),
            a
        );
    }),
        (n.hierarchy = u),
        (n.pack = function () {
            var n = null,
                r = 1,
                t = 1,
                e = A;
            function i(i) {
                return (
                    (i.x = r / 2),
                    (i.y = t / 2),
                    n
                        ? i
                            .eachBefore(E(n))
                            .eachAfter(S(e, 0.5))
                            .eachBefore(k(1))
                        : i
                            .eachBefore(E(b))
                            .eachAfter(S(A, 1))
                            .eachAfter(S(e, i.r / Math.min(r, t)))
                            .eachBefore(k(Math.min(r, t) / (2 * i.r))),
                    i
                );
            }
            return (
                (i.radius = function (r) {
                    return arguments.length ? ((n = z(r)), i) : n;
                }),
                (i.size = function (n) {
                    return arguments.length ? ((r = +n[0]), (t = +n[1]), i) : [r, t];
                }),
                (i.padding = function (n) {
                    return arguments.length
                        ? ((e = "function" == typeof n ? n : q(+n)), i)
                        : e;
                }),
                i
            );
        }),
        (n.packEnclose = h),
        (n.packSiblings = function (n) {
            return M(n), n;
        }),
        (n.partition = function () {
            var n = 1,
                r = 1,
                t = 0,
                e = !1;
            function i(i) {
                var u = i.height + 1;
                return (
                    (i.x0 = i.y0 = t),
                    (i.x1 = n),
                    (i.y1 = r / u),
                    i.eachBefore(
                        (function (n, r) {
                            return function (e) {
                                e.children &&
                                    j(
                                        e,
                                        e.x0,
                                        (n * (e.depth + 1)) / r,
                                        e.x1,
                                        (n * (e.depth + 2)) / r
                                    );
                                var i = e.x0,
                                    u = e.y0,
                                    o = e.x1 - t,
                                    a = e.y1 - t;
                                o < i && (i = o = (i + o) / 2),
                                    a < u && (u = a = (u + a) / 2),
                                    (e.x0 = i),
                                    (e.y0 = u),
                                    (e.x1 = o),
                                    (e.y1 = a);
                            };
                        })(r, u)
                    ),
                    e && i.eachBefore(I),
                    i
                );
            }
            return (
                (i.round = function (n) {
                    return arguments.length ? ((e = !!n), i) : e;
                }),
                (i.size = function (t) {
                    return arguments.length ? ((n = +t[0]), (r = +t[1]), i) : [n, r];
                }),
                (i.padding = function (n) {
                    return arguments.length ? ((t = +n), i) : t;
                }),
                i
            );
        }),
        (n.stratify = function () {
            var n = T,
                r = D;
            function t(t) {
                var e,
                    i,
                    u,
                    o,
                    a,
                    f,
                    h,
                    l = Array.from(t),
                    p = l.length,
                    d = new Map();
                for (i = 0; i < p; ++i)
                    (e = l[i]),
                        (a = l[i] = new Node(e)),
                        null != (f = n(e, i, t)) &&
                        (f += "") &&
                        ((h = a.id = f), d.set(h, d.has(h) ? R : a)),
                        null != (f = r(e, i, t)) && (f += "") && (a.parent = f);
                for (i = 0; i < p; ++i)
                    if ((f = (a = l[i]).parent)) {
                        if (!(o = d.get(f))) throw new Error("missing: " + f);
                        if (o === R) throw new Error("ambiguous: " + f);
                        o.children ? o.children.push(a) : (o.children = [a]),
                            (a.parent = o);
                    } else {
                        if (u) throw new Error("multiple roots");
                        u = a;
                    }
                if (!u) throw new Error("no root");
                if (
                    ((u.parent = O),
                        u
                            .eachBefore(function (n) {
                                (n.depth = n.parent.depth + 1), --p;
                            })
                            .eachBefore(c),
                        (u.parent = null),
                        p > 0)
                )
                    throw new Error("cycle");
                return u;
            }
            return (
                (t.id = function (r) {
                    return arguments.length ? ((n = B(r)), t) : n;
                }),
                (t.parentId = function (n) {
                    return arguments.length ? ((r = B(n)), t) : r;
                }),
                t
            );
        }),
        (n.tree = function () {
            var n = L,
                r = 1,
                t = 1,
                e = null;
            function i(i) {
                var f = (function (n) {
                    for (var r, t, e, i, u, o = new H(n, 0), a = [o]; (r = a.pop());)
                        if ((e = r._.children))
                            for (
                                r.children = new Array((u = e.length)), i = u - 1;
                                i >= 0;
                                --i
                            )
                                a.push((t = r.children[i] = new H(e[i], i))), (t.parent = r);
                    return ((o.parent = new H(null, 0)).children = [o]), o;
                })(i);
                if ((f.eachAfter(u), (f.parent.m = -f.z), f.eachBefore(o), e))
                    i.eachBefore(a);
                else {
                    var c = i,
                        h = i,
                        l = i;
                    i.eachBefore(function (n) {
                        n.x < c.x && (c = n),
                            n.x > h.x && (h = n),
                            n.depth > l.depth && (l = n);
                    });
                    var p = c === h ? 1 : n(c, h) / 2,
                        d = p - c.x,
                        s = r / (h.x + p + d),
                        v = t / (l.depth || 1);
                    i.eachBefore(function (n) {
                        (n.x = (n.x + d) * s), (n.y = n.depth * v);
                    });
                }
                return i;
            }
            function u(r) {
                var t = r.children,
                    e = r.parent.children,
                    i = r.i ? e[r.i - 1] : null;
                if (t) {
                    !(function (n) {
                        for (var r, t = 0, e = 0, i = n.children, u = i.length; --u >= 0;)
                            ((r = i[u]).z += t), (r.m += t), (t += r.s + (e += r.c));
                    })(r);
                    var u = (t[0].z + t[t.length - 1].z) / 2;
                    i ? ((r.z = i.z + n(r._, i._)), (r.m = r.z - u)) : (r.z = u);
                } else i && (r.z = i.z + n(r._, i._));
                r.parent.A = (function (r, t, e) {
                    if (t) {
                        for (
                            var i,
                            u = r,
                            o = r,
                            a = t,
                            f = u.parent.children[0],
                            c = u.m,
                            h = o.m,
                            l = a.m,
                            p = f.m;
                            (a = C(a)), (u = P(u)), a && u;

                        )
                            (f = P(f)),
                                ((o = C(o)).a = r),
                                (i = a.z + l - u.z - c + n(a._, u._)) > 0 &&
                                (F(G(a, r, e), r, i), (c += i), (h += i)),
                                (l += a.m),
                                (c += u.m),
                                (p += f.m),
                                (h += o.m);
                        a && !C(o) && ((o.t = a), (o.m += l - h)),
                            u && !P(f) && ((f.t = u), (f.m += c - p), (e = r));
                    }
                    return e;
                })(r, i, r.parent.A || e[0]);
            }
            function o(n) {
                (n._.x = n.z + n.parent.m), (n.m += n.parent.m);
            }
            function a(n) {
                (n.x *= r), (n.y = n.depth * t);
            }
            return (
                (i.separation = function (r) {
                    return arguments.length ? ((n = r), i) : n;
                }),
                (i.size = function (n) {
                    return arguments.length
                        ? ((e = !1), (r = +n[0]), (t = +n[1]), i)
                        : e
                            ? null
                            : [r, t];
                }),
                (i.nodeSize = function (n) {
                    return arguments.length
                        ? ((e = !0), (r = +n[0]), (t = +n[1]), i)
                        : e
                            ? [r, t]
                            : null;
                }),
                i
            );
        }),
        (n.treemap = function () {
            var n = Q,
                r = !1,
                t = 1,
                e = 1,
                i = [0],
                u = A,
                o = A,
                a = A,
                f = A,
                c = A;
            function h(n) {
                return (
                    (n.x0 = n.y0 = 0),
                    (n.x1 = t),
                    (n.y1 = e),
                    n.eachBefore(l),
                    (i = [0]),
                    r && n.eachBefore(I),
                    n
                );
            }
            function l(r) {
                var t = i[r.depth],
                    e = r.x0 + t,
                    h = r.y0 + t,
                    l = r.x1 - t,
                    p = r.y1 - t;
                l < e && (e = l = (e + l) / 2),
                    p < h && (h = p = (h + p) / 2),
                    (r.x0 = e),
                    (r.y0 = h),
                    (r.x1 = l),
                    (r.y1 = p),
                    r.children &&
                    ((t = i[r.depth + 1] = u(r) / 2),
                        (e += c(r) - t),
                        (h += o(r) - t),
                        (l -= a(r) - t) < e && (e = l = (e + l) / 2),
                        (p -= f(r) - t) < h && (h = p = (h + p) / 2),
                        n(r, e, h, l, p));
            }
            return (
                (h.round = function (n) {
                    return arguments.length ? ((r = !!n), h) : r;
                }),
                (h.size = function (n) {
                    return arguments.length ? ((t = +n[0]), (e = +n[1]), h) : [t, e];
                }),
                (h.tile = function (r) {
                    return arguments.length ? ((n = B(r)), h) : n;
                }),
                (h.padding = function (n) {
                    return arguments.length
                        ? h.paddingInner(n).paddingOuter(n)
                        : h.paddingInner();
                }),
                (h.paddingInner = function (n) {
                    return arguments.length
                        ? ((u = "function" == typeof n ? n : q(+n)), h)
                        : u;
                }),
                (h.paddingOuter = function (n) {
                    return arguments.length
                        ? h
                            .paddingTop(n)
                            .paddingRight(n)
                            .paddingBottom(n)
                            .paddingLeft(n)
                        : h.paddingTop();
                }),
                (h.paddingTop = function (n) {
                    return arguments.length
                        ? ((o = "function" == typeof n ? n : q(+n)), h)
                        : o;
                }),
                (h.paddingRight = function (n) {
                    return arguments.length
                        ? ((a = "function" == typeof n ? n : q(+n)), h)
                        : a;
                }),
                (h.paddingBottom = function (n) {
                    return arguments.length
                        ? ((f = "function" == typeof n ? n : q(+n)), h)
                        : f;
                }),
                (h.paddingLeft = function (n) {
                    return arguments.length
                        ? ((c = "function" == typeof n ? n : q(+n)), h)
                        : c;
                }),
                h
            );
        }),
        (n.treemapBinary = function (n, r, t, e, i) {
            var u,
                o,
                a = n.children,
                f = a.length,
                c = new Array(f + 1);
            for (c[0] = o = u = 0; u < f; ++u) c[u + 1] = o += a[u].value;
            !(function n(r, t, e, i, u, o, f) {
                if (r >= t - 1) {
                    var h = a[r];
                    return (h.x0 = i), (h.y0 = u), (h.x1 = o), void (h.y1 = f);
                }
                for (var l = c[r], p = e / 2 + l, d = r + 1, s = t - 1; d < s;) {
                    var v = (d + s) >>> 1;
                    c[v] < p ? (d = v + 1) : (s = v);
                }
                p - c[d - 1] < c[d] - p && r + 1 < d && --d;
                var x = c[d] - l,
                    y = e - x;
                if (o - i > f - u) {
                    var g = e ? (i * y + o * x) / e : o;
                    n(r, d, x, i, u, g, f), n(d, t, y, g, u, o, f);
                } else {
                    var m = e ? (u * y + f * x) / e : f;
                    n(r, d, x, i, u, o, m), n(d, t, y, i, m, o, f);
                }
            })(0, f, n.value, r, t, e, i);
        }),
        (n.treemapDice = j),
        (n.treemapResquarify = U),
        (n.treemapSlice = J),
        (n.treemapSliceDice = function (n, r, t, e, i) {
            (1 & n.depth ? J : j)(n, r, t, e, i);
        }),
        (n.treemapSquarify = Q),
        Object.defineProperty(n, "__esModule", { value: !0 });
});
