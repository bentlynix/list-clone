!(function (a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  function c(a, b) {
    b = b || ba;
    var c = b.createElement("script");
    (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
  }
  function d(a) {
    var b = !!a && "length" in a && a.length,
      c = oa.type(a);
    return (
      "function" !== c &&
      !oa.isWindow(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  function e(a, b, c) {
    return oa.isFunction(b)
      ? oa.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        })
      : b.nodeType
      ? oa.grep(a, function (a) {
          return (a === b) !== c;
        })
      : "string" != typeof b
      ? oa.grep(a, function (a) {
          return ga.call(b, a) > -1 !== c;
        })
      : ya.test(b)
      ? oa.filter(b, a, c)
      : ((b = oa.filter(b, a)),
        oa.grep(a, function (a) {
          return ga.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
  }
  function f(a, b) {
    for (; (a = a[b]) && 1 !== a.nodeType; );
    return a;
  }
  function g(a) {
    var b = {};
    return (
      oa.each(a.match(Ea) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  function h(a) {
    return a;
  }
  function i(a) {
    throw a;
  }
  function j(a, b, c) {
    var d;
    try {
      a && oa.isFunction((d = a.promise))
        ? d.call(a).done(b).fail(c)
        : a && oa.isFunction((d = a.then))
        ? d.call(a, b, c)
        : b.call(void 0, a);
    } catch (a) {
      c.call(void 0, a);
    }
  }
  function k() {
    ba.removeEventListener("DOMContentLoaded", k),
      a.removeEventListener("load", k),
      oa.ready();
  }
  function l() {
    this.expando = oa.expando + l.uid++;
  }
  function m(a) {
    return (
      "true" === a ||
      ("false" !== a &&
        ("null" === a
          ? null
          : a === +a + ""
          ? +a
          : La.test(a)
          ? JSON.parse(a)
          : a))
    );
  }
  function n(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Ma, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c = m(c);
        } catch (a) {}
        Ka.set(a, b, c);
      } else c = void 0;
    return c;
  }
  function o(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return oa.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (oa.cssNumber[b] ? "" : "px"),
      k = (oa.cssNumber[b] || ("px" !== j && +i)) && Oa.exec(oa.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), oa.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  function p(a) {
    var b,
      c = a.ownerDocument,
      d = a.nodeName,
      e = Sa[d];
    return e
      ? e
      : ((b = c.body.appendChild(c.createElement(d))),
        (e = oa.css(b, "display")),
        b.parentNode.removeChild(b),
        "none" === e && (e = "block"),
        (Sa[d] = e),
        e);
  }
  function q(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
      (d = a[f]),
        d.style &&
          ((c = d.style.display),
          b
            ? ("none" === c &&
                ((e[f] = Ja.get(d, "display") || null),
                e[f] || (d.style.display = "")),
              "" === d.style.display && Qa(d) && (e[f] = p(d)))
            : "none" !== c && ((e[f] = "none"), Ja.set(d, "display", c)));
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
    return a;
  }
  function r(a, b) {
    var c;
    return (
      (c =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : []),
      void 0 === b || (b && oa.nodeName(a, b)) ? oa.merge([a], c) : c
    );
  }
  function s(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      Ja.set(a[c], "globalEval", !b || Ja.get(b[c], "globalEval"));
  }
  function t(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        n = 0,
        o = a.length;
      n < o;
      n++
    )
      if (((f = a[n]), f || 0 === f))
        if ("object" === oa.type(f)) oa.merge(m, f.nodeType ? [f] : f);
        else if (Xa.test(f)) {
          for (
            g = g || l.appendChild(b.createElement("div")),
              h = (Ua.exec(f) || ["", ""])[1].toLowerCase(),
              i = Wa[h] || Wa._default,
              g.innerHTML = i[1] + oa.htmlPrefilter(f) + i[2],
              k = i[0];
            k--;

          )
            g = g.lastChild;
          oa.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    for (l.textContent = "", n = 0; (f = m[n++]); )
      if (d && oa.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = oa.contains(f.ownerDocument, f)),
        (g = r(l.appendChild(f), "script")),
        j && s(g),
        c)
      )
        for (k = 0; (f = g[k++]); ) Va.test(f.type || "") && c.push(f);
    return l;
  }
  function u() {
    return !0;
  }
  function v() {
    return !1;
  }
  function w() {
    try {
      return ba.activeElement;
    } catch (a) {}
  }
  function x(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) x(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = v;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return oa().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = oa.guid++))),
      a.each(function () {
        oa.event.add(this, b, e, d, c);
      })
    );
  }
  function y(a, b) {
    return oa.nodeName(a, "table") &&
      oa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] || a
      : a;
  }
  function z(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function A(a) {
    var b = db.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function B(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        Ja.hasData(a) &&
        ((f = Ja.access(a)), (g = Ja.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) oa.event.add(b, e, j[e][c]);
      }
      Ka.hasData(a) &&
        ((h = Ka.access(a)), (i = oa.extend({}, h)), Ka.set(b, i));
    }
  }
  function C(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && Ta.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function D(a, b, d, e) {
    b = ea.apply([], b);
    var f,
      g,
      h,
      i,
      j,
      k,
      l = 0,
      m = a.length,
      n = m - 1,
      o = b[0],
      p = oa.isFunction(o);
    if (p || (m > 1 && "string" == typeof o && !ma.checkClone && cb.test(o)))
      return a.each(function (c) {
        var f = a.eq(c);
        p && (b[0] = o.call(this, c, f.html())), D(f, b, d, e);
      });
    if (
      m &&
      ((f = t(b, a[0].ownerDocument, !1, a, e)),
      (g = f.firstChild),
      1 === f.childNodes.length && (f = g),
      g || e)
    ) {
      for (h = oa.map(r(f, "script"), z), i = h.length; l < m; l++)
        (j = f),
          l !== n &&
            ((j = oa.clone(j, !0, !0)), i && oa.merge(h, r(j, "script"))),
          d.call(a[l], j, l);
      if (i)
        for (k = h[h.length - 1].ownerDocument, oa.map(h, A), l = 0; l < i; l++)
          (j = h[l]),
            Va.test(j.type || "") &&
              !Ja.access(j, "globalEval") &&
              oa.contains(k, j) &&
              (j.src
                ? oa._evalUrl && oa._evalUrl(j.src)
                : c(j.textContent.replace(eb, ""), k));
    }
    return a;
  }
  function E(a, b, c) {
    for (var d, e = b ? oa.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || oa.cleanData(r(d)),
        d.parentNode &&
          (c && oa.contains(d.ownerDocument, d) && s(r(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  function F(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || hb(a)),
      c &&
        ((g = c.getPropertyValue(b) || c[b]),
        "" !== g || oa.contains(a.ownerDocument, a) || (g = oa.style(a, b)),
        !ma.pixelMarginRight() &&
          gb.test(g) &&
          fb.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function G(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  function H(a) {
    if (a in mb) return a;
    for (var b = a[0].toUpperCase() + a.slice(1), c = lb.length; c--; )
      if (((a = lb[c] + b), a in mb)) return a;
  }
  function I(a, b, c) {
    var d = Oa.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function J(a, b, c, d, e) {
    var f,
      g = 0;
    for (
      f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
      f < 4;
      f += 2
    )
      "margin" === c && (g += oa.css(a, c + Pa[f], !0, e)),
        d
          ? ("content" === c && (g -= oa.css(a, "padding" + Pa[f], !0, e)),
            "margin" !== c &&
              (g -= oa.css(a, "border" + Pa[f] + "Width", !0, e)))
          : ((g += oa.css(a, "padding" + Pa[f], !0, e)),
            "padding" !== c &&
              (g += oa.css(a, "border" + Pa[f] + "Width", !0, e)));
    return g;
  }
  function K(a, b, c) {
    var d,
      e = !0,
      f = hb(a),
      g = "border-box" === oa.css(a, "boxSizing", !1, f);
    if (
      (a.getClientRects().length && (d = a.getBoundingClientRect()[b]),
      d <= 0 || null == d)
    ) {
      if (
        ((d = F(a, b, f)), (d < 0 || null == d) && (d = a.style[b]), gb.test(d))
      )
        return d;
      (e = g && (ma.boxSizingReliable() || d === a.style[b])),
        (d = parseFloat(d) || 0);
    }
    return d + J(a, b, c || (g ? "border" : "content"), e, f) + "px";
  }
  function L(a, b, c, d, e) {
    return new L.prototype.init(a, b, c, d, e);
  }
  function M() {
    ob && (a.requestAnimationFrame(M), oa.fx.tick());
  }
  function N() {
    return (
      a.setTimeout(function () {
        nb = void 0;
      }),
      (nb = oa.now())
    );
  }
  function O(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      (c = Pa[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function P(a, b, c) {
    for (
      var d,
        e = (S.tweeners[b] || []).concat(S.tweeners["*"]),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Q(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = "width" in b || "height" in b,
      m = this,
      n = {},
      o = a.style,
      p = a.nodeType && Qa(a),
      r = Ja.get(a, "fxshow");
    c.queue ||
      ((g = oa._queueHooks(a, "fx")),
      null == g.unqueued &&
        ((g.unqueued = 0),
        (h = g.empty.fire),
        (g.empty.fire = function () {
          g.unqueued || h();
        })),
      g.unqueued++,
      m.always(function () {
        m.always(function () {
          g.unqueued--, oa.queue(a, "fx").length || g.empty.fire();
        });
      }));
    for (d in b)
      if (((e = b[d]), pb.test(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          p = !0;
        }
        n[d] = (r && r[d]) || oa.style(a, d);
      }
    if (((i = !oa.isEmptyObject(b)), i || !oa.isEmptyObject(n))) {
      l &&
        1 === a.nodeType &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = r && r.display),
        null == j && (j = Ja.get(a, "display")),
        (k = oa.css(a, "display")),
        "none" === k &&
          (j
            ? (k = j)
            : (q([a], !0),
              (j = a.style.display || j),
              (k = oa.css(a, "display")),
              q([a]))),
        ("inline" === k || ("inline-block" === k && null != j)) &&
          "none" === oa.css(a, "float") &&
          (i ||
            (m.done(function () {
              o.display = j;
            }),
            null == j && ((k = o.display), (j = "none" === k ? "" : k))),
          (o.display = "inline-block"))),
        c.overflow &&
          ((o.overflow = "hidden"),
          m.always(function () {
            (o.overflow = c.overflow[0]),
              (o.overflowX = c.overflow[1]),
              (o.overflowY = c.overflow[2]);
          })),
        (i = !1);
      for (d in n)
        i ||
          (r
            ? "hidden" in r && (p = r.hidden)
            : (r = Ja.access(a, "fxshow", { display: j })),
          f && (r.hidden = !p),
          p && q([a], !0),
          m.done(function () {
            p || q([a]), Ja.remove(a, "fxshow");
            for (d in n) oa.style(a, d, n[d]);
          })),
          (i = P(p ? r[d] : 0, d, m)),
          d in r || ((r[d] = i.start), p && ((i.end = i.start), (i.start = 0)));
    }
  }
  function R(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = oa.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        oa.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = oa.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function S(a, b, c) {
    var d,
      e,
      f = 0,
      g = S.prefilters.length,
      h = oa.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = nb || N(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          g < i;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: oa.extend({}, b),
        opts: oa.extend(
          !0,
          { specialEasing: {}, easing: oa.easing._default },
          c
        ),
        originalProperties: b,
        originalOptions: c,
        startTime: nb || N(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = oa.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; c < d; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (R(k, j.opts.specialEasing); f < g; f++)
      if ((d = S.prefilters[f].call(j, a, k, j.opts)))
        return (
          oa.isFunction(d.stop) &&
            (oa._queueHooks(j.elem, j.opts.queue).stop = oa.proxy(d.stop, d)),
          d
        );
    return (
      oa.map(k, P, j),
      oa.isFunction(j.opts.start) && j.opts.start.call(a, j),
      oa.fx.timer(oa.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  function T(a) {
    var b = a.match(Ea) || [];
    return b.join(" ");
  }
  function U(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  function V(a, b, c, d) {
    var e;
    if (oa.isArray(b))
      oa.each(b, function (b, e) {
        c || Ab.test(a)
          ? d(a, e)
          : V(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== oa.type(b)) d(a, b);
    else for (e in b) V(a + "[" + e + "]", b[e], c, d);
  }
  function W(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(Ea) || [];
      if (oa.isFunction(c))
        for (; (d = f[e++]); )
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function X(a, b, c, d) {
    function e(h) {
      var i;
      return (
        (f[h] = !0),
        oa.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || g || f[j]
            ? g
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), e(j), !1);
        }),
        i
      );
    }
    var f = {},
      g = a === Mb;
    return e(b.dataTypes[0]) || (!f["*"] && e("*"));
  }
  function Y(a, b) {
    var c,
      d,
      e = oa.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && oa.extend(!0, a, d), a;
  }
  function Z(a, b, c) {
    for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function $(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    for (f = k.shift(); f; )
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a.throws) b = g(b);
            else
              try {
                b = g(b);
              } catch (a) {
                return {
                  state: "parsererror",
                  error: g ? a : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  function _(a) {
    return oa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  var aa = [],
    ba = a.document,
    ca = Object.getPrototypeOf,
    da = aa.slice,
    ea = aa.concat,
    fa = aa.push,
    ga = aa.indexOf,
    ha = {},
    ia = ha.toString,
    ja = ha.hasOwnProperty,
    ka = ja.toString,
    la = ka.call(Object),
    ma = {},
    na = "3.1.1",
    oa = function (a, b) {
      return new oa.fn.init(a, b);
    },
    pa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    qa = /^-ms-/,
    ra = /-([a-z])/g,
    sa = function (a, b) {
      return b.toUpperCase();
    };
  (oa.fn = oa.prototype = {
    jquery: na,
    constructor: oa,
    length: 0,
    toArray: function () {
      return da.call(this);
    },
    get: function (a) {
      return null == a
        ? da.call(this)
        : a < 0
        ? this[a + this.length]
        : this[a];
    },
    pushStack: function (a) {
      var b = oa.merge(this.constructor(), a);
      return (b.prevObject = this), b;
    },
    each: function (a) {
      return oa.each(this, a);
    },
    map: function (a) {
      return this.pushStack(
        oa.map(this, function (b, c) {
          return a.call(b, c, b);
        })
      );
    },
    slice: function () {
      return this.pushStack(da.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (a < 0 ? b : 0);
      return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: fa,
    sort: aa.sort,
    splice: aa.splice,
  }),
    (oa.extend = oa.fn.extend = function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for (
        "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
          "object" == typeof g || oa.isFunction(g) || (g = {}),
          h === i && ((g = this), h--);
        h < i;
        h++
      )
        if (null != (a = arguments[h]))
          for (b in a)
            (c = g[b]),
              (d = a[b]),
              g !== d &&
                (j && d && (oa.isPlainObject(d) || (e = oa.isArray(d)))
                  ? (e
                      ? ((e = !1), (f = c && oa.isArray(c) ? c : []))
                      : (f = c && oa.isPlainObject(c) ? c : {}),
                    (g[b] = oa.extend(j, f, d)))
                  : void 0 !== d && (g[b] = d));
      return g;
    }),
    oa.extend({
      expando: "jQuery" + (na + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === oa.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = oa.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
      },
      isPlainObject: function (a) {
        var b, c;
        return (
          !(!a || "[object Object]" !== ia.call(a)) &&
          (!(b = ca(a)) ||
            ((c = ja.call(b, "constructor") && b.constructor),
            "function" == typeof c && ka.call(c) === la))
        );
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? ha[ia.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        c(a);
      },
      camelCase: function (a) {
        return a.replace(qa, "ms-").replace(ra, sa);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          e = 0;
        if (d(a))
          for (c = a.length; e < c && b.call(a[e], e, a[e]) !== !1; e++);
        else for (e in a) if (b.call(a[e], e, a[e]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(pa, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (d(Object(a))
              ? oa.merge(c, "string" == typeof a ? [a] : a)
              : fa.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : ga.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var e,
          f,
          g = 0,
          h = [];
        if (d(a))
          for (e = a.length; g < e; g++)
            (f = b(a[g], g, c)), null != f && h.push(f);
        else for (g in a) (f = b(a[g], g, c)), null != f && h.push(f);
        return ea.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, e;
        if (
          ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          oa.isFunction(a))
        )
          return (
            (d = da.call(arguments, 2)),
            (e = function () {
              return a.apply(b || this, d.concat(da.call(arguments)));
            }),
            (e.guid = a.guid = a.guid || oa.guid++),
            e
          );
      },
      now: Date.now,
      support: ma,
    }),
    "function" == typeof Symbol &&
      (oa.fn[Symbol.iterator] = aa[Symbol.iterator]),
    oa.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        ha["[object " + b + "]"] = b.toLowerCase();
      }
    );
  var ta = (function (a) {
    function b(a, b, c, d) {
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        m = b && b.ownerDocument,
        o = b ? b.nodeType : 9;
      if (
        ((c = c || []),
        "string" != typeof a || !a || (1 !== o && 9 !== o && 11 !== o))
      )
        return c;
      if (
        !d &&
        ((b ? b.ownerDocument || b : P) !== H && G(b), (b = b || H), J)
      ) {
        if (11 !== o && (i = ra.exec(a)))
          if ((e = i[1])) {
            if (9 === o) {
              if (!(g = b.getElementById(e))) return c;
              if (g.id === e) return c.push(g), c;
            } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e)
              return c.push(g), c;
          } else {
            if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
            if (
              (e = i[3]) &&
              w.getElementsByClassName &&
              b.getElementsByClassName
            )
              return $.apply(c, b.getElementsByClassName(e)), c;
          }
        if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
          if (1 !== o) (m = b), (k = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            for (
              (h = b.getAttribute("id"))
                ? (h = h.replace(va, wa))
                : b.setAttribute("id", (h = O)),
                j = A(a),
                f = j.length;
              f--;

            )
              j[f] = "#" + h + " " + n(j[f]);
            (k = j.join(",")), (m = (sa.test(a) && l(b.parentNode)) || b);
          }
          if (k)
            try {
              return $.apply(c, m.querySelectorAll(k)), c;
            } catch (a) {
            } finally {
              h === O && b.removeAttribute("id");
            }
        }
      }
      return C(a.replace(ha, "$1"), b, c, d);
    }
    function c() {
      function a(c, d) {
        return (
          b.push(c + " ") > x.cacheLength && delete a[b.shift()],
          (a[c + " "] = d)
        );
      }
      var b = [];
      return a;
    }
    function d(a) {
      return (a[O] = !0), a;
    }
    function e(a) {
      var b = H.createElement("fieldset");
      try {
        return !!a(b);
      } catch (a) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function f(a, b) {
      for (var c = a.split("|"), d = c.length; d--; ) x.attrHandle[c[d]] = b;
    }
    function g(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          a.sourceIndex - b.sourceIndex;
      if (d) return d;
      if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function h(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function i(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function j(a) {
      return function (b) {
        return "form" in b
          ? b.parentNode && b.disabled === !1
            ? "label" in b
              ? "label" in b.parentNode
                ? b.parentNode.disabled === a
                : b.disabled === a
              : b.isDisabled === a || (b.isDisabled !== !a && ya(b) === a)
            : b.disabled === a
          : "label" in b && b.disabled === a;
      };
    }
    function k(a) {
      return d(function (b) {
        return (
          (b = +b),
          d(function (c, d) {
            for (var e, f = a([], c.length, b), g = f.length; g--; )
              c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function l(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    function m() {}
    function n(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d;
    }
    function o(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = R++;
      return b.first
        ? function (b, c, e) {
            for (; (b = b[d]); ) if (1 === b.nodeType || g) return a(b, c, e);
            return !1;
          }
        : function (b, c, i) {
            var j,
              k,
              l,
              m = [Q, h];
            if (i) {
              for (; (b = b[d]); )
                if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
            } else
              for (; (b = b[d]); )
                if (1 === b.nodeType || g)
                  if (
                    ((l = b[O] || (b[O] = {})),
                    (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                    e && e === b.nodeName.toLowerCase())
                  )
                    b = b[d] || b;
                  else {
                    if ((j = k[f]) && j[0] === Q && j[1] === h)
                      return (m[2] = j[2]);
                    if (((k[f] = m), (m[2] = a(b, c, i)))) return !0;
                  }
            return !1;
          };
    }
    function p(a) {
      return a.length > 1
        ? function (b, c, d) {
            for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function q(a, c, d) {
      for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
      return d;
    }
    function r(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function s(a, b, c, e, f, g) {
      return (
        e && !e[O] && (e = s(e)),
        f && !f[O] && (f = s(f, g)),
        d(function (d, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = d || q(b || "*", h.nodeType ? [h] : h, []),
            s = !a || (!d && b) ? p : r(p, m, a, h, i),
            t = c ? (f || (d ? a : o || e) ? [] : g) : s;
          if ((c && c(s, t, h, i), e))
            for (j = r(t, n), e(j, [], h, i), k = j.length; k--; )
              (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
          if (d) {
            if (f || a) {
              if (f) {
                for (j = [], k = t.length; k--; )
                  (l = t[k]) && j.push((s[k] = l));
                f(null, (t = []), j, i);
              }
              for (k = t.length; k--; )
                (l = t[k]) &&
                  (j = f ? aa(d, l) : m[k]) > -1 &&
                  (d[j] = !(g[j] = l));
            }
          } else (t = r(t === g ? t.splice(o, t.length) : t)), f ? f(null, g, t, i) : $.apply(g, t);
        })
      );
    }
    function t(a) {
      for (
        var b,
          c,
          d,
          e = a.length,
          f = x.relative[a[0].type],
          g = f || x.relative[" "],
          h = f ? 1 : 0,
          i = o(
            function (a) {
              return a === b;
            },
            g,
            !0
          ),
          j = o(
            function (a) {
              return aa(b, a) > -1;
            },
            g,
            !0
          ),
          k = [
            function (a, c, d) {
              var e =
                (!f && (d || c !== D)) ||
                ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
              return (b = null), e;
            },
          ];
        h < e;
        h++
      )
        if ((c = x.relative[a[h].type])) k = [o(p(k), c)];
        else {
          if (((c = x.filter[a[h].type].apply(null, a[h].matches)), c[O])) {
            for (d = ++h; d < e && !x.relative[a[d].type]; d++);
            return s(
              h > 1 && p(k),
              h > 1 &&
                n(
                  a
                    .slice(0, h - 1)
                    .concat({ value: " " === a[h - 2].type ? "*" : "" })
                ).replace(ha, "$1"),
              c,
              h < d && t(a.slice(h, d)),
              d < e && t((a = a.slice(d))),
              d < e && n(a)
            );
          }
          k.push(c);
        }
      return p(k);
    }
    function u(a, c) {
      var e = c.length > 0,
        f = a.length > 0,
        g = function (d, g, h, i, j) {
          var k,
            l,
            m,
            n = 0,
            o = "0",
            p = d && [],
            q = [],
            s = D,
            t = d || (f && x.find.TAG("*", j)),
            u = (Q += null == s ? 1 : Math.random() || 0.1),
            v = t.length;
          for (
            j && (D = g === H || g || j);
            o !== v && null != (k = t[o]);
            o++
          ) {
            if (f && k) {
              for (
                l = 0, g || k.ownerDocument === H || (G(k), (h = !J));
                (m = a[l++]);

              )
                if (m(k, g || H, h)) {
                  i.push(k);
                  break;
                }
              j && (Q = u);
            }
            e && ((k = !m && k) && n--, d && p.push(k));
          }
          if (((n += o), e && o !== n)) {
            for (l = 0; (m = c[l++]); ) m(p, q, g, h);
            if (d) {
              if (n > 0) for (; o--; ) p[o] || q[o] || (q[o] = Y.call(i));
              q = r(q);
            }
            $.apply(i, q),
              j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i);
          }
          return j && ((Q = u), (D = s)), p;
        };
      return e ? d(g) : g;
    }
    var v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O = "sizzle" + 1 * new Date(),
      P = a.document,
      Q = 0,
      R = 0,
      S = c(),
      T = c(),
      U = c(),
      V = function (a, b) {
        return a === b && (F = !0), 0;
      },
      W = {}.hasOwnProperty,
      X = [],
      Y = X.pop,
      Z = X.push,
      $ = X.push,
      _ = X.slice,
      aa = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      ba =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ca = "[\\x20\\t\\r\\n\\f]",
      da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ea =
        "\\[" +
        ca +
        "*(" +
        da +
        ")(?:" +
        ca +
        "*([*^$|!~]?=)" +
        ca +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        da +
        "))|)" +
        ca +
        "*\\]",
      fa =
        ":(" +
        da +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ea +
        ")*)|.*)\\)|)",
      ga = new RegExp(ca + "+", "g"),
      ha = new RegExp(
        "^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$",
        "g"
      ),
      ia = new RegExp("^" + ca + "*," + ca + "*"),
      ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
      ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
      la = new RegExp(fa),
      ma = new RegExp("^" + da + "$"),
      na = {
        ID: new RegExp("^#(" + da + ")"),
        CLASS: new RegExp("^\\.(" + da + ")"),
        TAG: new RegExp("^(" + da + "|[*])"),
        ATTR: new RegExp("^" + ea),
        PSEUDO: new RegExp("^" + fa),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ca +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ca +
            "*(?:([+-]|)" +
            ca +
            "*(\\d+)|))" +
            ca +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + ba + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ca +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ca +
            "*((?:-\\d)?\\d*)" +
            ca +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      oa = /^(?:input|select|textarea|button)$/i,
      pa = /^h\d$/i,
      qa = /^[^{]+\{\s*\[native \w/,
      ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      sa = /[+~]/,
      ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
      ua = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : d < 0
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      wa = function (a, b) {
        return b
          ? "\0" === a
            ? "�"
            : a.slice(0, -1) +
              "\\" +
              a.charCodeAt(a.length - 1).toString(16) +
              " "
          : "\\" + a;
      },
      xa = function () {
        G();
      },
      ya = o(
        function (a) {
          return a.disabled === !0 && ("form" in a || "label" in a);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      $.apply((X = _.call(P.childNodes)), P.childNodes),
        X[P.childNodes.length].nodeType;
    } catch (a) {
      $ = {
        apply: X.length
          ? function (a, b) {
              Z.apply(a, _.call(b));
            }
          : function (a, b) {
              for (var c = a.length, d = 0; (a[c++] = b[d++]); );
              a.length = c - 1;
            },
      };
    }
    (w = b.support = {}),
      (z = b.isXML = function (a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return !!b && "HTML" !== b.nodeName;
      }),
      (G = b.setDocument = function (a) {
        var b,
          c,
          d = a ? a.ownerDocument || a : P;
        return d !== H && 9 === d.nodeType && d.documentElement
          ? ((H = d),
            (I = H.documentElement),
            (J = !z(H)),
            P !== H &&
              (c = H.defaultView) &&
              c.top !== c &&
              (c.addEventListener
                ? c.addEventListener("unload", xa, !1)
                : c.attachEvent && c.attachEvent("onunload", xa)),
            (w.attributes = e(function (a) {
              return (a.className = "i"), !a.getAttribute("className");
            })),
            (w.getElementsByTagName = e(function (a) {
              return (
                a.appendChild(H.createComment("")),
                !a.getElementsByTagName("*").length
              );
            })),
            (w.getElementsByClassName = qa.test(H.getElementsByClassName)),
            (w.getById = e(function (a) {
              return (
                (I.appendChild(a).id = O),
                !H.getElementsByName || !H.getElementsByName(O).length
              );
            })),
            w.getById
              ? ((x.filter.ID = function (a) {
                  var b = a.replace(ta, ua);
                  return function (a) {
                    return a.getAttribute("id") === b;
                  };
                }),
                (x.find.ID = function (a, b) {
                  if ("undefined" != typeof b.getElementById && J) {
                    var c = b.getElementById(a);
                    return c ? [c] : [];
                  }
                }))
              : ((x.filter.ID = function (a) {
                  var b = a.replace(ta, ua);
                  return function (a) {
                    var c =
                      "undefined" != typeof a.getAttributeNode &&
                      a.getAttributeNode("id");
                    return c && c.value === b;
                  };
                }),
                (x.find.ID = function (a, b) {
                  if ("undefined" != typeof b.getElementById && J) {
                    var c,
                      d,
                      e,
                      f = b.getElementById(a);
                    if (f) {
                      if (((c = f.getAttributeNode("id")), c && c.value === a))
                        return [f];
                      for (e = b.getElementsByName(a), d = 0; (f = e[d++]); )
                        if (
                          ((c = f.getAttributeNode("id")), c && c.value === a)
                        )
                          return [f];
                    }
                    return [];
                  }
                })),
            (x.find.TAG = w.getElementsByTagName
              ? function (a, b) {
                  return "undefined" != typeof b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : w.qsa
                    ? b.querySelectorAll(a)
                    : void 0;
                }
              : function (a, b) {
                  var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                  if ("*" === a) {
                    for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                    return d;
                  }
                  return f;
                }),
            (x.find.CLASS =
              w.getElementsByClassName &&
              function (a, b) {
                if ("undefined" != typeof b.getElementsByClassName && J)
                  return b.getElementsByClassName(a);
              }),
            (L = []),
            (K = []),
            (w.qsa = qa.test(H.querySelectorAll)) &&
              (e(function (a) {
                (I.appendChild(a).innerHTML =
                  "<a id='" +
                  O +
                  "'></a><select id='" +
                  O +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  a.querySelectorAll("[msallowcapture^='']").length &&
                    K.push("[*^$]=" + ca + "*(?:''|\"\")"),
                  a.querySelectorAll("[selected]").length ||
                    K.push("\\[" + ca + "*(?:value|" + ba + ")"),
                  a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="),
                  a.querySelectorAll(":checked").length || K.push(":checked"),
                  a.querySelectorAll("a#" + O + "+*").length ||
                    K.push(".#.+[+~]");
              }),
              e(function (a) {
                a.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = H.createElement("input");
                b.setAttribute("type", "hidden"),
                  a.appendChild(b).setAttribute("name", "D"),
                  a.querySelectorAll("[name=d]").length &&
                    K.push("name" + ca + "*[*^$|!~]?="),
                  2 !== a.querySelectorAll(":enabled").length &&
                    K.push(":enabled", ":disabled"),
                  (I.appendChild(a).disabled = !0),
                  2 !== a.querySelectorAll(":disabled").length &&
                    K.push(":enabled", ":disabled"),
                  a.querySelectorAll("*,:x"),
                  K.push(",.*:");
              })),
            (w.matchesSelector = qa.test(
              (M =
                I.matches ||
                I.webkitMatchesSelector ||
                I.mozMatchesSelector ||
                I.oMatchesSelector ||
                I.msMatchesSelector)
            )) &&
              e(function (a) {
                (w.disconnectedMatch = M.call(a, "*")),
                  M.call(a, "[s!='']:x"),
                  L.push("!=", fa);
              }),
            (K = K.length && new RegExp(K.join("|"))),
            (L = L.length && new RegExp(L.join("|"))),
            (b = qa.test(I.compareDocumentPosition)),
            (N =
              b || qa.test(I.contains)
                ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                    return (
                      a === d ||
                      !(
                        !d ||
                        1 !== d.nodeType ||
                        !(c.contains
                          ? c.contains(d)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(d))
                      )
                    );
                  }
                : function (a, b) {
                    if (b) for (; (b = b.parentNode); ) if (b === a) return !0;
                    return !1;
                  }),
            (V = b
              ? function (a, b) {
                  if (a === b) return (F = !0), 0;
                  var c =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return c
                    ? c
                    : ((c =
                        (a.ownerDocument || a) === (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1),
                      1 & c ||
                      (!w.sortDetached && b.compareDocumentPosition(a) === c)
                        ? a === H || (a.ownerDocument === P && N(P, a))
                          ? -1
                          : b === H || (b.ownerDocument === P && N(P, b))
                          ? 1
                          : E
                          ? aa(E, a) - aa(E, b)
                          : 0
                        : 4 & c
                        ? -1
                        : 1);
                }
              : function (a, b) {
                  if (a === b) return (F = !0), 0;
                  var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                  if (!e || !f)
                    return a === H
                      ? -1
                      : b === H
                      ? 1
                      : e
                      ? -1
                      : f
                      ? 1
                      : E
                      ? aa(E, a) - aa(E, b)
                      : 0;
                  if (e === f) return g(a, b);
                  for (c = a; (c = c.parentNode); ) h.unshift(c);
                  for (c = b; (c = c.parentNode); ) i.unshift(c);
                  for (; h[d] === i[d]; ) d++;
                  return d
                    ? g(h[d], i[d])
                    : h[d] === P
                    ? -1
                    : i[d] === P
                    ? 1
                    : 0;
                }),
            H)
          : H;
      }),
      (b.matches = function (a, c) {
        return b(a, null, null, c);
      }),
      (b.matchesSelector = function (a, c) {
        if (
          ((a.ownerDocument || a) !== H && G(a),
          (c = c.replace(ka, "='$1']")),
          w.matchesSelector &&
            J &&
            !U[c + " "] &&
            (!L || !L.test(c)) &&
            (!K || !K.test(c)))
        )
          try {
            var d = M.call(a, c);
            if (
              d ||
              w.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (a) {}
        return b(c, H, null, [a]).length > 0;
      }),
      (b.contains = function (a, b) {
        return (a.ownerDocument || a) !== H && G(a), N(a, b);
      }),
      (b.attr = function (a, b) {
        (a.ownerDocument || a) !== H && G(a);
        var c = x.attrHandle[b.toLowerCase()],
          d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
        return void 0 !== d
          ? d
          : w.attributes || !J
          ? a.getAttribute(b)
          : (d = a.getAttributeNode(b)) && d.specified
          ? d.value
          : null;
      }),
      (b.escape = function (a) {
        return (a + "").replace(va, wa);
      }),
      (b.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (b.uniqueSort = function (a) {
        var b,
          c = [],
          d = 0,
          e = 0;
        if (
          ((F = !w.detectDuplicates),
          (E = !w.sortStable && a.slice(0)),
          a.sort(V),
          F)
        ) {
          for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
          for (; d--; ) a.splice(c[d], 1);
        }
        return (E = null), a;
      }),
      (y = b.getText = function (a) {
        var b,
          c = "",
          d = 0,
          e = a.nodeType;
        if (e) {
          if (1 === e || 9 === e || 11 === e) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += y(a);
          } else if (3 === e || 4 === e) return a.nodeValue;
        } else for (; (b = a[d++]); ) c += y(b);
        return c;
      }),
      (x = b.selectors = {
        cacheLength: 50,
        createPseudo: d,
        match: na,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (a) {
            return (
              (a[1] = a[1].replace(ta, ua)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function (a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || b.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && b.error(a[0]),
              a
            );
          },
          PSEUDO: function (a) {
            var b,
              c = !a[6] && a[2];
            return na.CHILD.test(a[0])
              ? null
              : (a[3]
                  ? (a[2] = a[4] || a[5] || "")
                  : c &&
                    la.test(c) &&
                    (b = A(c, !0)) &&
                    (b = c.indexOf(")", c.length - b) - c.length) &&
                    ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                a.slice(0, 3));
          },
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(ta, ua).toLowerCase();
            return "*" === a
              ? function () {
                  return !0;
                }
              : function (a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b;
                };
          },
          CLASS: function (a) {
            var b = S[a + " "];
            return (
              b ||
              ((b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) &&
                S(a, function (a) {
                  return b.test(
                    ("string" == typeof a.className && a.className) ||
                      ("undefined" != typeof a.getAttribute &&
                        a.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (a, c, d) {
            return function (e) {
              var f = b.attr(e, a);
              return null == f
                ? "!=" === c
                : !c ||
                    ((f += ""),
                    "=" === c
                      ? f === d
                      : "!=" === c
                      ? f !== d
                      : "^=" === c
                      ? d && 0 === f.indexOf(d)
                      : "*=" === c
                      ? d && f.indexOf(d) > -1
                      : "$=" === c
                      ? d && f.slice(-d.length) === d
                      : "~=" === c
                      ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1
                      : "|=" === c &&
                        (f === d || f.slice(0, d.length + 1) === d + "-"));
            };
          },
          CHILD: function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e
              ? function (a) {
                  return !!a.parentNode;
                }
              : function (b, c, i) {
                  var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p = f !== g ? "nextSibling" : "previousSibling",
                    q = b.parentNode,
                    r = h && b.nodeName.toLowerCase(),
                    s = !i && !h,
                    t = !1;
                  if (q) {
                    if (f) {
                      for (; p; ) {
                        for (m = b; (m = m[p]); )
                          if (
                            h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType
                          )
                            return !1;
                        o = p = "only" === a && !o && "nextSibling";
                      }
                      return !0;
                    }
                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                      for (
                        m = q,
                          l = m[O] || (m[O] = {}),
                          k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                          j = k[a] || [],
                          n = j[0] === Q && j[1],
                          t = n && j[2],
                          m = n && q.childNodes[n];
                        (m = (++n && m && m[p]) || (t = n = 0) || o.pop());

                      )
                        if (1 === m.nodeType && ++t && m === b) {
                          k[a] = [Q, n, t];
                          break;
                        }
                    } else if (
                      (s &&
                        ((m = b),
                        (l = m[O] || (m[O] = {})),
                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                        (j = k[a] || []),
                        (n = j[0] === Q && j[1]),
                        (t = n)),
                      t === !1)
                    )
                      for (
                        ;
                        (m = (++n && m && m[p]) || (t = n = 0) || o.pop()) &&
                        ((h
                          ? m.nodeName.toLowerCase() !== r
                          : 1 !== m.nodeType) ||
                          !++t ||
                          (s &&
                            ((l = m[O] || (m[O] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (k[a] = [Q, t])),
                          m !== b));

                      );
                    return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                  }
                };
          },
          PSEUDO: function (a, c) {
            var e,
              f =
                x.pseudos[a] ||
                x.setFilters[a.toLowerCase()] ||
                b.error("unsupported pseudo: " + a);
            return f[O]
              ? f(c)
              : f.length > 1
              ? ((e = [a, a, "", c]),
                x.setFilters.hasOwnProperty(a.toLowerCase())
                  ? d(function (a, b) {
                      for (var d, e = f(a, c), g = e.length; g--; )
                        (d = aa(a, e[g])), (a[d] = !(b[d] = e[g]));
                    })
                  : function (a) {
                      return f(a, 0, e);
                    })
              : f;
          },
        },
        pseudos: {
          not: d(function (a) {
            var b = [],
              c = [],
              e = B(a.replace(ha, "$1"));
            return e[O]
              ? d(function (a, b, c, d) {
                  for (var f, g = e(a, null, d, []), h = a.length; h--; )
                    (f = g[h]) && (a[h] = !(b[h] = f));
                })
              : function (a, d, f) {
                  return (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop();
                };
          }),
          has: d(function (a) {
            return function (c) {
              return b(a, c).length > 0;
            };
          }),
          contains: d(function (a) {
            return (
              (a = a.replace(ta, ua)),
              function (b) {
                return (b.textContent || b.innerText || y(b)).indexOf(a) > -1;
              }
            );
          }),
          lang: d(function (a) {
            return (
              ma.test(a || "") || b.error("unsupported lang: " + a),
              (a = a.replace(ta, ua).toLowerCase()),
              function (b) {
                var c;
                do
                  if (
                    (c = J
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-")
                    );
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function (a) {
            return a === I;
          },
          focus: function (a) {
            return (
              a === H.activeElement &&
              (!H.hasFocus || H.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: j(!1),
          disabled: j(!0),
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            );
          },
          selected: function (a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            );
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0;
          },
          parent: function (a) {
            return !x.pseudos.empty(a);
          },
          header: function (a) {
            return pa.test(a.nodeName);
          },
          input: function (a) {
            return oa.test(a.nodeName);
          },
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function (a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: k(function () {
            return [0];
          }),
          last: k(function (a, b) {
            return [b - 1];
          }),
          eq: k(function (a, b, c) {
            return [c < 0 ? c + b : c];
          }),
          even: k(function (a, b) {
            for (var c = 0; c < b; c += 2) a.push(c);
            return a;
          }),
          odd: k(function (a, b) {
            for (var c = 1; c < b; c += 2) a.push(c);
            return a;
          }),
          lt: k(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
            return a;
          }),
          gt: k(function (a, b, c) {
            for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
            return a;
          }),
        },
      }),
      (x.pseudos.nth = x.pseudos.eq);
    for (v in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      x.pseudos[v] = h(v);
    for (v in { submit: !0, reset: !0 }) x.pseudos[v] = i(v);
    return (
      (m.prototype = x.filters = x.pseudos),
      (x.setFilters = new m()),
      (A = b.tokenize = function (a, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = T[a + " "];
        if (k) return c ? 0 : k.slice(0);
        for (h = a, i = [], j = x.preFilter; h; ) {
          (d && !(e = ia.exec(h))) ||
            (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
            (d = !1),
            (e = ja.exec(h)) &&
              ((d = e.shift()),
              f.push({ value: d, type: e[0].replace(ha, " ") }),
              (h = h.slice(d.length)));
          for (g in x.filter)
            !(e = na[g].exec(h)) ||
              (j[g] && !(e = j[g](e))) ||
              ((d = e.shift()),
              f.push({ value: d, type: g, matches: e }),
              (h = h.slice(d.length)));
          if (!d) break;
        }
        return c ? h.length : h ? b.error(a) : T(a, i).slice(0);
      }),
      (B = b.compile = function (a, b) {
        var c,
          d = [],
          e = [],
          f = U[a + " "];
        if (!f) {
          for (b || (b = A(a)), c = b.length; c--; )
            (f = t(b[c])), f[O] ? d.push(f) : e.push(f);
          (f = U(a, u(e, d))), (f.selector = a);
        }
        return f;
      }),
      (C = b.select = function (a, b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j = "function" == typeof a && a,
          k = !d && A((a = j.selector || a));
        if (((c = c || []), 1 === k.length)) {
          if (
            ((f = k[0] = k[0].slice(0)),
            f.length > 2 &&
              "ID" === (g = f[0]).type &&
              9 === b.nodeType &&
              J &&
              x.relative[f[1].type])
          ) {
            if (
              ((b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0]), !b)
            )
              return c;
            j && (b = b.parentNode), (a = a.slice(f.shift().value.length));
          }
          for (
            e = na.needsContext.test(a) ? 0 : f.length;
            e-- && ((g = f[e]), !x.relative[(h = g.type)]);

          )
            if (
              (i = x.find[h]) &&
              (d = i(
                g.matches[0].replace(ta, ua),
                (sa.test(f[0].type) && l(b.parentNode)) || b
              ))
            ) {
              if ((f.splice(e, 1), (a = d.length && n(f)), !a))
                return $.apply(c, d), c;
              break;
            }
        }
        return (
          (j || B(a, k))(
            d,
            b,
            !J,
            c,
            !b || (sa.test(a) && l(b.parentNode)) || b
          ),
          c
        );
      }),
      (w.sortStable = O.split("").sort(V).join("") === O),
      (w.detectDuplicates = !!F),
      G(),
      (w.sortDetached = e(function (a) {
        return 1 & a.compareDocumentPosition(H.createElement("fieldset"));
      })),
      e(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        f("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (w.attributes &&
        e(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        f("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      e(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        f(ba, function (a, b, c) {
          var d;
          if (!c)
            return a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
        }),
      b
    );
  })(a);
  (oa.find = ta),
    (oa.expr = ta.selectors),
    (oa.expr[":"] = oa.expr.pseudos),
    (oa.uniqueSort = oa.unique = ta.uniqueSort),
    (oa.text = ta.getText),
    (oa.isXMLDoc = ta.isXML),
    (oa.contains = ta.contains),
    (oa.escapeSelector = ta.escape);
  var ua = function (a, b, c) {
      for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
        if (1 === a.nodeType) {
          if (e && oa(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    va = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    wa = oa.expr.match.needsContext,
    xa = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    ya = /^.[^:#\[\.,]*$/;
  (oa.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? oa.find.matchesSelector(d, a)
          ? [d]
          : []
        : oa.find.matches(
            a,
            oa.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    oa.fn.extend({
      find: function (a) {
        var b,
          c,
          d = this.length,
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            oa(a).filter(function () {
              for (b = 0; b < d; b++) if (oa.contains(e[b], this)) return !0;
            })
          );
        for (c = this.pushStack([]), b = 0; b < d; b++) oa.find(a, e[b], c);
        return d > 1 ? oa.uniqueSort(c) : c;
      },
      filter: function (a) {
        return this.pushStack(e(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(e(this, a || [], !0));
      },
      is: function (a) {
        return !!e(
          this,
          "string" == typeof a && wa.test(a) ? oa(a) : a || [],
          !1
        ).length;
      },
    });
  var za,
    Aa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    Ba = (oa.fn.init = function (a, b, c) {
      var d, e;
      if (!a) return this;
      if (((c = c || za), "string" == typeof a)) {
        if (
          ((d =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : Aa.exec(a)),
          !d || (!d[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (d[1]) {
          if (
            ((b = b instanceof oa ? b[0] : b),
            oa.merge(
              this,
              oa.parseHTML(
                d[1],
                b && b.nodeType ? b.ownerDocument || b : ba,
                !0
              )
            ),
            xa.test(d[1]) && oa.isPlainObject(b))
          )
            for (d in b)
              oa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
          return this;
        }
        return (
          (e = ba.getElementById(d[2])),
          e && ((this[0] = e), (this.length = 1)),
          this
        );
      }
      return a.nodeType
        ? ((this[0] = a), (this.length = 1), this)
        : oa.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(oa)
        : oa.makeArray(a, this);
    });
  (Ba.prototype = oa.fn), (za = oa(ba));
  var Ca = /^(?:parents|prev(?:Until|All))/,
    Da = { children: !0, contents: !0, next: !0, prev: !0 };
  oa.fn.extend({
    has: function (a) {
      var b = oa(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; a < c; a++) if (oa.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && oa(a);
      if (!wa.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && oa.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
      return this.pushStack(f.length > 1 ? oa.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? ga.call(oa(a), this[0])
          : ga.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(oa.uniqueSort(oa.merge(this.get(), oa(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  }),
    oa.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
          return ua(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return ua(a, "parentNode", c);
        },
        next: function (a) {
          return f(a, "nextSibling");
        },
        prev: function (a) {
          return f(a, "previousSibling");
        },
        nextAll: function (a) {
          return ua(a, "nextSibling");
        },
        prevAll: function (a) {
          return ua(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return ua(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return ua(a, "previousSibling", c);
        },
        siblings: function (a) {
          return va((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return va(a.firstChild);
        },
        contents: function (a) {
          return a.contentDocument || oa.merge([], a.childNodes);
        },
      },
      function (a, b) {
        oa.fn[a] = function (c, d) {
          var e = oa.map(this, b, c);
          return (
            "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = oa.filter(d, e)),
            this.length > 1 &&
              (Da[a] || oa.uniqueSort(e), Ca.test(a) && e.reverse()),
            this.pushStack(e)
          );
        };
      }
    );
  var Ea = /[^\x20\t\r\n\f]+/g;
  (oa.Callbacks = function (a) {
    a = "string" == typeof a ? g(a) : oa.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      h = [],
      i = -1,
      j = function () {
        for (e = a.once, d = b = !0; h.length; i = -1)
          for (c = h.shift(); ++i < f.length; )
            f[i].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((i = f.length), (c = !1));
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      k = {
        add: function () {
          return (
            f &&
              (c && !b && ((i = f.length - 1), h.push(c)),
              (function b(c) {
                oa.each(c, function (c, d) {
                  oa.isFunction(d)
                    ? (a.unique && k.has(d)) || f.push(d)
                    : d && d.length && "string" !== oa.type(d) && b(d);
                });
              })(arguments),
              c && !b && j()),
            this
          );
        },
        remove: function () {
          return (
            oa.each(arguments, function (a, b) {
              for (var c; (c = oa.inArray(b, f, c)) > -1; )
                f.splice(c, 1), c <= i && i--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? oa.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = h = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = h = []), c || b || (f = c = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              h.push(c),
              b || j()),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return k;
  }),
    oa.extend({
      Deferred: function (b) {
        var c = [
            [
              "notify",
              "progress",
              oa.Callbacks("memory"),
              oa.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              oa.Callbacks("once memory"),
              oa.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              oa.Callbacks("once memory"),
              oa.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          d = "pending",
          e = {
            state: function () {
              return d;
            },
            always: function () {
              return f.done(arguments).fail(arguments), this;
            },
            catch: function (a) {
              return e.then(null, a);
            },
            pipe: function () {
              var a = arguments;
              return oa
                .Deferred(function (b) {
                  oa.each(c, function (c, d) {
                    var e = oa.isFunction(a[d[4]]) && a[d[4]];
                    f[d[1]](function () {
                      var a = e && e.apply(this, arguments);
                      a && oa.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(b.notify)
                            .done(b.resolve)
                            .fail(b.reject)
                        : b[d[0] + "With"](this, e ? [a] : arguments);
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            then: function (b, d, e) {
              function f(b, c, d, e) {
                return function () {
                  var j = this,
                    k = arguments,
                    l = function () {
                      var a, l;
                      if (!(b < g)) {
                        if (((a = d.apply(j, k)), a === c.promise()))
                          throw new TypeError("Thenable self-resolution");
                        (l =
                          a &&
                          ("object" == typeof a || "function" == typeof a) &&
                          a.then),
                          oa.isFunction(l)
                            ? e
                              ? l.call(a, f(g, c, h, e), f(g, c, i, e))
                              : (g++,
                                l.call(
                                  a,
                                  f(g, c, h, e),
                                  f(g, c, i, e),
                                  f(g, c, h, c.notifyWith)
                                ))
                            : (d !== h && ((j = void 0), (k = [a])),
                              (e || c.resolveWith)(j, k));
                      }
                    },
                    m = e
                      ? l
                      : function () {
                          try {
                            l();
                          } catch (a) {
                            oa.Deferred.exceptionHook &&
                              oa.Deferred.exceptionHook(a, m.stackTrace),
                              b + 1 >= g &&
                                (d !== i && ((j = void 0), (k = [a])),
                                c.rejectWith(j, k));
                          }
                        };
                  b
                    ? m()
                    : (oa.Deferred.getStackHook &&
                        (m.stackTrace = oa.Deferred.getStackHook()),
                      a.setTimeout(m));
                };
              }
              var g = 0;
              return oa
                .Deferred(function (a) {
                  c[0][3].add(f(0, a, oa.isFunction(e) ? e : h, a.notifyWith)),
                    c[1][3].add(f(0, a, oa.isFunction(b) ? b : h)),
                    c[2][3].add(f(0, a, oa.isFunction(d) ? d : i));
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? oa.extend(a, e) : e;
            },
          },
          f = {};
        return (
          oa.each(c, function (a, b) {
            var g = b[2],
              h = b[5];
            (e[b[1]] = g.add),
              h &&
                g.add(
                  function () {
                    d = h;
                  },
                  c[3 - a][2].disable,
                  c[0][2].lock
                ),
              g.add(b[3].fire),
              (f[b[0]] = function () {
                return (
                  f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                );
              }),
              (f[b[0] + "With"] = g.fireWith);
          }),
          e.promise(f),
          b && b.call(f, f),
          f
        );
      },
      when: function (a) {
        var b = arguments.length,
          c = b,
          d = Array(c),
          e = da.call(arguments),
          f = oa.Deferred(),
          g = function (a) {
            return function (c) {
              (d[a] = this),
                (e[a] = arguments.length > 1 ? da.call(arguments) : c),
                --b || f.resolveWith(d, e);
            };
          };
        if (
          b <= 1 &&
          (j(a, f.done(g(c)).resolve, f.reject),
          "pending" === f.state() || oa.isFunction(e[c] && e[c].then))
        )
          return f.then();
        for (; c--; ) j(e[c], g(c), f.reject);
        return f.promise();
      },
    });
  var Fa = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (oa.Deferred.exceptionHook = function (b, c) {
    a.console &&
      a.console.warn &&
      b &&
      Fa.test(b.name) &&
      a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }),
    (oa.readyException = function (b) {
      a.setTimeout(function () {
        throw b;
      });
    });
  var Ga = oa.Deferred();
  (oa.fn.ready = function (a) {
    return (
      Ga.then(a).catch(function (a) {
        oa.readyException(a);
      }),
      this
    );
  }),
    oa.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? oa.readyWait++ : oa.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --oa.readyWait : oa.isReady) ||
          ((oa.isReady = !0),
          (a !== !0 && --oa.readyWait > 0) || Ga.resolveWith(ba, [oa]));
      },
    }),
    (oa.ready.then = Ga.then),
    "complete" === ba.readyState ||
    ("loading" !== ba.readyState && !ba.documentElement.doScroll)
      ? a.setTimeout(oa.ready)
      : (ba.addEventListener("DOMContentLoaded", k),
        a.addEventListener("load", k));
  var Ha = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === oa.type(c)) {
        e = !0;
        for (h in c) Ha(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        oa.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(oa(a), c);
              }))),
        b)
      )
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    Ia = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  (l.uid = 1),
    (l.prototype = {
      cache: function (a) {
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            Ia(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[oa.camelCase(b)] = c;
        else for (d in b) e[oa.camelCase(d)] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][oa.camelCase(b)];
      },
      access: function (a, b, c) {
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? this.get(a, b)
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d = a[this.expando];
        if (void 0 !== d) {
          if (void 0 !== b) {
            oa.isArray(b)
              ? (b = b.map(oa.camelCase))
              : ((b = oa.camelCase(b)), (b = b in d ? [b] : b.match(Ea) || [])),
              (c = b.length);
            for (; c--; ) delete d[b[c]];
          }
          (void 0 === b || oa.isEmptyObject(d)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !oa.isEmptyObject(b);
      },
    });
  var Ja = new l(),
    Ka = new l(),
    La = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ma = /[A-Z]/g;
  oa.extend({
    hasData: function (a) {
      return Ka.hasData(a) || Ja.hasData(a);
    },
    data: function (a, b, c) {
      return Ka.access(a, b, c);
    },
    removeData: function (a, b) {
      Ka.remove(a, b);
    },
    _data: function (a, b, c) {
      return Ja.access(a, b, c);
    },
    _removeData: function (a, b) {
      Ja.remove(a, b);
    },
  }),
    oa.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = Ka.get(f)), 1 === f.nodeType && !Ja.get(f, "hasDataAttrs"))
          ) {
            for (c = g.length; c--; )
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = oa.camelCase(d.slice(5))), n(f, d, e[d])));
            Ja.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              Ka.set(this, a);
            })
          : Ha(
              this,
              function (b) {
                var c;
                if (f && void 0 === b) {
                  if (((c = Ka.get(f, a)), void 0 !== c)) return c;
                  if (((c = n(f, a)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    Ka.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          Ka.remove(this, a);
        });
      },
    }),
    oa.extend({
      queue: function (a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = Ja.get(a, b)),
            c &&
              (!d || oa.isArray(c)
                ? (d = Ja.access(a, b, oa.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = oa.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = oa._queueHooks(a, b),
          g = function () {
            oa.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          Ja.get(a, c) ||
          Ja.access(a, c, {
            empty: oa.Callbacks("once memory").add(function () {
              Ja.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    oa.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? oa.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = oa.queue(this, a, b);
                oa._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && oa.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          oa.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = oa.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        for (
          "string" != typeof a && ((b = a), (a = void 0)), a = a || "fx";
          g--;

        )
          (c = Ja.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var Na = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Oa = new RegExp("^(?:([+-])=|)(" + Na + ")([a-z%]*)$", "i"),
    Pa = ["Top", "Right", "Bottom", "Left"],
    Qa = function (a, b) {
      return (
        (a = b || a),
        "none" === a.style.display ||
          ("" === a.style.display &&
            oa.contains(a.ownerDocument, a) &&
            "none" === oa.css(a, "display"))
      );
    },
    Ra = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Sa = {};
  oa.fn.extend({
    show: function () {
      return q(this, !0);
    },
    hide: function () {
      return q(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a
        ? a
          ? this.show()
          : this.hide()
        : this.each(function () {
            Qa(this) ? oa(this).show() : oa(this).hide();
          });
    },
  });
  var Ta = /^(?:checkbox|radio)$/i,
    Ua = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Va = /^$|\/(?:java|ecma)script/i,
    Wa = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Wa.optgroup = Wa.option),
    (Wa.tbody = Wa.tfoot = Wa.colgroup = Wa.caption = Wa.thead),
    (Wa.th = Wa.td);
  var Xa = /<|&#?\w+;/;
  !(function () {
    var a = ba.createDocumentFragment(),
      b = a.appendChild(ba.createElement("div")),
      c = ba.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (ma.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (ma.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var Ya = ba.documentElement,
    Za = /^key/,
    $a = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    _a = /^([^.]*)(?:\.(.+)|)/;
  (oa.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = Ja.get(a);
      if (q)
        for (
          c.handler && ((f = c), (c = f.handler), (e = f.selector)),
            e && oa.find.matchesSelector(Ya, e),
            c.guid || (c.guid = oa.guid++),
            (i = q.events) || (i = q.events = {}),
            (g = q.handle) ||
              (g = q.handle = function (b) {
                return "undefined" != typeof oa && oa.event.triggered !== b.type
                  ? oa.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
            b = (b || "").match(Ea) || [""],
            j = b.length;
          j--;

        )
          (h = _a.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n &&
              ((l = oa.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = oa.event.special[n] || {}),
              (k = oa.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && oa.expr.match.needsContext.test(e),
                  namespace: o.join("."),
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(n, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (oa.event.global[n] = !0));
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = Ja.hasData(a) && Ja.get(a);
      if (q && (i = q.events)) {
        for (b = (b || "").match(Ea) || [""], j = b.length; j--; )
          if (
            ((h = _a.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n)
          ) {
            for (
              l = oa.event.special[n] || {},
                n = (d ? l.delegateType : l.bindType) || n,
                m = i[n] || [],
                h =
                  h[2] &&
                  new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                g = f = m.length;
              f--;

            )
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                oa.removeEvent(a, n, q.handle),
              delete i[n]);
          } else for (n in i) oa.event.remove(a, n + b[j], c, d, !0);
        oa.isEmptyObject(i) && Ja.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = oa.event.fix(a),
        i = new Array(arguments.length),
        j = (Ja.get(this, "events") || {})[h.type] || [],
        k = oa.event.special[h.type] || {};
      for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
      if (
        ((h.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, h) !== !1)
      ) {
        for (
          g = oa.event.handlers.call(this, h, j), b = 0;
          (e = g[b++]) && !h.isPropagationStopped();

        )
          for (
            h.currentTarget = e.elem, c = 0;
            (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();

          )
            (h.rnamespace && !h.rnamespace.test(f.namespace)) ||
              ((h.handleObj = f),
              (h.data = f.data),
              (d = (
                (oa.event.special[f.origType] || {}).handle || f.handler
              ).apply(e.elem, i)),
              void 0 !== d &&
                (h.result = d) === !1 &&
                (h.preventDefault(), h.stopPropagation()));
        return k.postDispatch && k.postDispatch.call(this, h), h.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++)
              (d = b[c]),
                (e = d.selector + " "),
                void 0 === g[e] &&
                  (g[e] = d.needsContext
                    ? oa(e, this).index(j) > -1
                    : oa.find(e, this, null, [j]).length),
                g[e] && f.push(d);
            f.length && h.push({ elem: j, handlers: f });
          }
      return (
        (j = this), i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
      );
    },
    addProp: function (a, b) {
      Object.defineProperty(oa.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: oa.isFunction(b)
          ? function () {
              if (this.originalEvent) return b(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[a];
            },
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b,
          });
        },
      });
    },
    fix: function (a) {
      return a[oa.expando] ? a : new oa.Event(a);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== w() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === w() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            "checkbox" === this.type &&
            this.click &&
            oa.nodeName(this, "input")
          )
            return this.click(), !1;
        },
        _default: function (a) {
          return oa.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (oa.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (oa.Event = function (a, b) {
      return this instanceof oa.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? u
                  : v),
              (this.target =
                a.target && 3 === a.target.nodeType
                  ? a.target.parentNode
                  : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
          b && oa.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || oa.now()),
          void (this[oa.expando] = !0))
        : new oa.Event(a, b);
    }),
    (oa.Event.prototype = {
      constructor: oa.Event,
      isDefaultPrevented: v,
      isPropagationStopped: v,
      isImmediatePropagationStopped: v,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = u),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = u),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = u),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    oa.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var b = a.button;
          return null == a.which && Za.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== b && $a.test(a.type)
            ? 1 & b
              ? 1
              : 2 & b
              ? 3
              : 4 & b
              ? 2
              : 0
            : a.which;
        },
      },
      oa.event.addProp
    ),
    oa.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        oa.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || oa.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    oa.fn.extend({
      on: function (a, b, c, d) {
        return x(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return x(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            oa(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = v),
          this.each(function () {
            oa.event.remove(this, a, c, b);
          })
        );
      },
    });
  var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    bb = /<script|<style|<link/i,
    cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
    db = /^true\/(.*)/,
    eb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  oa.extend({
    htmlPrefilter: function (a) {
      return a.replace(ab, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = oa.contains(a.ownerDocument, a);
      if (
        !(
          ma.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          oa.isXMLDoc(a)
        )
      )
        for (g = r(h), f = r(a), d = 0, e = f.length; d < e; d++) C(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || r(a), g = g || r(h), d = 0, e = f.length; d < e; d++)
            B(f[d], g[d]);
        else B(a, h);
      return (
        (g = r(h, "script")), g.length > 0 && s(g, !i && r(a, "script")), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = oa.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (Ia(c)) {
          if ((b = c[Ja.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? oa.event.remove(c, d) : oa.removeEvent(c, d, b.handle);
            c[Ja.expando] = void 0;
          }
          c[Ka.expando] && (c[Ka.expando] = void 0);
        }
    },
  }),
    oa.fn.extend({
      detach: function (a) {
        return E(this, a, !0);
      },
      remove: function (a) {
        return E(this, a);
      },
      text: function (a) {
        return Ha(
          this,
          function (a) {
            return void 0 === a
              ? oa.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return D(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = y(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return D(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = y(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return D(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return D(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (oa.cleanData(r(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return oa.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return Ha(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !bb.test(a) &&
              !Wa[(Ua.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = oa.htmlPrefilter(a);
              try {
                for (; c < d; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (oa.cleanData(r(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (a) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return D(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            oa.inArray(this, a) < 0 &&
              (oa.cleanData(r(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    oa.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        oa.fn[a] = function (a) {
          for (var c, d = [], e = oa(a), f = e.length - 1, g = 0; g <= f; g++)
            (c = g === f ? this : this.clone(!0)),
              oa(e[g])[b](c),
              fa.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var fb = /^margin/,
    gb = new RegExp("^(" + Na + ")(?!px)[a-z%]+$", "i"),
    hb = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    };
  !(function () {
    function b() {
      if (h) {
        (h.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (h.innerHTML = ""),
          Ya.appendChild(g);
        var b = a.getComputedStyle(h);
        (c = "1%" !== b.top),
          (f = "2px" === b.marginLeft),
          (d = "4px" === b.width),
          (h.style.marginRight = "50%"),
          (e = "4px" === b.marginRight),
          Ya.removeChild(g),
          (h = null);
      }
    }
    var c,
      d,
      e,
      f,
      g = ba.createElement("div"),
      h = ba.createElement("div");
    h.style &&
      ((h.style.backgroundClip = "content-box"),
      (h.cloneNode(!0).style.backgroundClip = ""),
      (ma.clearCloneStyle = "content-box" === h.style.backgroundClip),
      (g.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      g.appendChild(h),
      oa.extend(ma, {
        pixelPosition: function () {
          return b(), c;
        },
        boxSizingReliable: function () {
          return b(), d;
        },
        pixelMarginRight: function () {
          return b(), e;
        },
        reliableMarginLeft: function () {
          return b(), f;
        },
      }));
  })();
  var ib = /^(none|table(?!-c[ea]).+)/,
    jb = { position: "absolute", visibility: "hidden", display: "block" },
    kb = { letterSpacing: "0", fontWeight: "400" },
    lb = ["Webkit", "Moz", "ms"],
    mb = ba.createElement("div").style;
  oa.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = F(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = oa.camelCase(b),
          i = a.style;
        return (
          (b = oa.cssProps[h] || (oa.cssProps[h] = H(h) || h)),
          (g = oa.cssHooks[b] || oa.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = Oa.exec(c)) &&
                e[1] &&
                ((c = o(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (oa.cssNumber[h] ? "" : "px")),
                ma.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = oa.camelCase(b);
      return (
        (b = oa.cssProps[h] || (oa.cssProps[h] = H(h) || h)),
        (g = oa.cssHooks[b] || oa.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = F(a, b, d)),
        "normal" === e && b in kb && (e = kb[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    oa.each(["height", "width"], function (a, b) {
      oa.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return !ib.test(oa.css(a, "display")) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? K(a, b, d)
              : Ra(a, jb, function () {
                  return K(a, b, d);
                });
        },
        set: function (a, c, d) {
          var e,
            f = d && hb(a),
            g =
              d &&
              J(a, b, d, "border-box" === oa.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = Oa.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = oa.css(a, b))),
            I(a, c, g)
          );
        },
      };
    }),
    (oa.cssHooks.marginLeft = G(ma.reliableMarginLeft, function (a, b) {
      if (b)
        return (
          (parseFloat(F(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              Ra(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    oa.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (oa.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            d < 4;
            d++
          )
            e[a + Pa[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        fb.test(a) || (oa.cssHooks[a + b].set = I);
    }),
    oa.fn.extend({
      css: function (a, b) {
        return Ha(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (oa.isArray(b)) {
              for (d = hb(a), e = b.length; g < e; g++)
                f[b[g]] = oa.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? oa.style(a, b, c) : oa.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
    }),
    (oa.Tween = L),
    (L.prototype = {
      constructor: L,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || oa.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (oa.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = L.propHooks[this.prop];
        return a && a.get ? a.get(this) : L.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = L.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b = oa.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : L.propHooks._default.set(this),
          this
        );
      },
    }),
    (L.prototype.init.prototype = L.prototype),
    (L.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = oa.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          oa.fx.step[a.prop]
            ? oa.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[oa.cssProps[a.prop]] &&
                !oa.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : oa.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (L.propHooks.scrollTop = L.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
    }),
    (oa.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (oa.fx = L.prototype.init),
    (oa.fx.step = {});
  var nb,
    ob,
    pb = /^(?:toggle|show|hide)$/,
    qb = /queueHooks$/;
  (oa.Animation = oa.extend(S, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return o(c.elem, a, Oa.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      oa.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(Ea));
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (S.tweeners[c] = S.tweeners[c] || []),
          S.tweeners[c].unshift(b);
    },
    prefilters: [Q],
    prefilter: function (a, b) {
      b ? S.prefilters.unshift(a) : S.prefilters.push(a);
    },
  })),
    (oa.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? oa.extend({}, a)
          : {
              complete: c || (!c && b) || (oa.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !oa.isFunction(b) && b),
            };
      return (
        oa.fx.off || ba.hidden
          ? (d.duration = 0)
          : "number" != typeof d.duration &&
            (d.duration in oa.fx.speeds
              ? (d.duration = oa.fx.speeds[d.duration])
              : (d.duration = oa.fx.speeds._default)),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          oa.isFunction(d.old) && d.old.call(this),
            d.queue && oa.dequeue(this, d.queue);
        }),
        d
      );
    }),
    oa.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(Qa)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = oa.isEmptyObject(a),
          f = oa.speed(b, c, d),
          g = function () {
            var b = S(this, oa.extend({}, a), f);
            (e || Ja.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = oa.timers,
              g = Ja.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && qb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || oa.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = Ja.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = oa.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                oa.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; b < g; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    oa.each(["toggle", "show", "hide"], function (a, b) {
      var c = oa.fn[b];
      oa.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(O(b, !0), a, d, e);
      };
    }),
    oa.each(
      {
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        oa.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (oa.timers = []),
    (oa.fx.tick = function () {
      var a,
        b = 0,
        c = oa.timers;
      for (nb = oa.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || oa.fx.stop(), (nb = void 0);
    }),
    (oa.fx.timer = function (a) {
      oa.timers.push(a), a() ? oa.fx.start() : oa.timers.pop();
    }),
    (oa.fx.interval = 13),
    (oa.fx.start = function () {
      ob ||
        (ob = a.requestAnimationFrame
          ? a.requestAnimationFrame(M)
          : a.setInterval(oa.fx.tick, oa.fx.interval));
    }),
    (oa.fx.stop = function () {
      a.cancelAnimationFrame ? a.cancelAnimationFrame(ob) : a.clearInterval(ob),
        (ob = null);
    }),
    (oa.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (oa.fn.delay = function (b, c) {
      return (
        (b = oa.fx ? oa.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = ba.createElement("input"),
        b = ba.createElement("select"),
        c = b.appendChild(ba.createElement("option"));
      (a.type = "checkbox"),
        (ma.checkOn = "" !== a.value),
        (ma.optSelected = c.selected),
        (a = ba.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (ma.radioValue = "t" === a.value);
    })();
  var rb,
    sb = oa.expr.attrHandle;
  oa.fn.extend({
    attr: function (a, b) {
      return Ha(this, oa.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        oa.removeAttr(this, a);
      });
    },
  }),
    oa.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? oa.prop(a, b, c)
            : ((1 === f && oa.isXMLDoc(a)) ||
                (e =
                  oa.attrHooks[b.toLowerCase()] ||
                  (oa.expr.match.bool.test(b) ? rb : void 0)),
              void 0 !== c
                ? null === c
                  ? void oa.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = oa.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!ma.radioValue && "radio" === b && oa.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d = 0,
          e = b && b.match(Ea);
        if (e && 1 === a.nodeType) for (; (c = e[d++]); ) a.removeAttribute(c);
      },
    }),
    (rb = {
      set: function (a, b, c) {
        return b === !1 ? oa.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    oa.each(oa.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = sb[b] || oa.find.attr;
      sb[b] = function (a, b, d) {
        var e,
          f,
          g = b.toLowerCase();
        return (
          d ||
            ((f = sb[g]),
            (sb[g] = e),
            (e = null != c(a, b, d) ? g : null),
            (sb[g] = f)),
          e
        );
      };
    });
  var tb = /^(?:input|select|textarea|button)$/i,
    ub = /^(?:a|area)$/i;
  oa.fn.extend({
    prop: function (a, b) {
      return Ha(this, oa.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[oa.propFix[a] || a];
      });
    },
  }),
    oa.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && oa.isXMLDoc(a)) ||
              ((b = oa.propFix[b] || b), (e = oa.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = oa.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : tb.test(a.nodeName) || (ub.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ma.optSelected ||
      (oa.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    oa.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        oa.propFix[this.toLowerCase()] = this;
      }
    ),
    oa.fn.extend({
      addClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
        if (oa.isFunction(a))
          return this.each(function (b) {
            oa(this).addClass(a.call(this, b, U(this)));
          });
        if ("string" == typeof a && a)
          for (b = a.match(Ea) || []; (c = this[i++]); )
            if (((e = U(c)), (d = 1 === c.nodeType && " " + T(e) + " "))) {
              for (g = 0; (f = b[g++]); )
                d.indexOf(" " + f + " ") < 0 && (d += f + " ");
              (h = T(d)), e !== h && c.setAttribute("class", h);
            }
        return this;
      },
      removeClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
        if (oa.isFunction(a))
          return this.each(function (b) {
            oa(this).removeClass(a.call(this, b, U(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof a && a)
          for (b = a.match(Ea) || []; (c = this[i++]); )
            if (((e = U(c)), (d = 1 === c.nodeType && " " + T(e) + " "))) {
              for (g = 0; (f = b[g++]); )
                for (; d.indexOf(" " + f + " ") > -1; )
                  d = d.replace(" " + f + " ", " ");
              (h = T(d)), e !== h && c.setAttribute("class", h);
            }
        return this;
      },
      toggleClass: function (a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c
          ? b
            ? this.addClass(a)
            : this.removeClass(a)
          : oa.isFunction(a)
          ? this.each(function (c) {
              oa(this).toggleClass(a.call(this, c, U(this), b), b);
            })
          : this.each(function () {
              var b, d, e, f;
              if ("string" === c)
                for (d = 0, e = oa(this), f = a.match(Ea) || []; (b = f[d++]); )
                  e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
              else
                (void 0 !== a && "boolean" !== c) ||
                  ((b = U(this)),
                  b && Ja.set(this, "__className__", b),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      b || a === !1 ? "" : Ja.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (a) {
        var b,
          c,
          d = 0;
        for (b = " " + a + " "; (c = this[d++]); )
          if (1 === c.nodeType && (" " + T(U(c)) + " ").indexOf(b) > -1)
            return !0;
        return !1;
      },
    });
  var vb = /\r/g;
  oa.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = oa.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, oa(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : oa.isArray(e) &&
                    (e = oa.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  oa.valHooks[this.type] ||
                  oa.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = oa.valHooks[e.type] || oa.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(vb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    oa.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = oa.find.attr(a, "value");
            return null != b ? b : T(oa.text(a));
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;
            for (d = f < 0 ? i : g ? f : 0; d < i; d++)
              if (
                ((c = e[d]),
                (c.selected || d === f) &&
                  !c.disabled &&
                  (!c.parentNode.disabled ||
                    !oa.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = oa(c).val()), g)) return b;
                h.push(b);
              }
            return h;
          },
          set: function (a, b) {
            for (
              var c, d, e = a.options, f = oa.makeArray(b), g = e.length;
              g--;

            )
              (d = e[g]),
                (d.selected = oa.inArray(oa.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    oa.each(["radio", "checkbox"], function () {
      (oa.valHooks[this] = {
        set: function (a, b) {
          if (oa.isArray(b))
            return (a.checked = oa.inArray(oa(a).val(), b) > -1);
        },
      }),
        ma.checkOn ||
          (oa.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var wb = /^(?:focusinfocus|focusoutblur)$/;
  oa.extend(oa.event, {
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = [d || ba],
        n = ja.call(b, "type") ? b.type : b,
        o = ja.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((g = h = d = d || ba),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !wb.test(n + oa.event.triggered) &&
          (n.indexOf(".") > -1 &&
            ((o = n.split(".")), (n = o.shift()), o.sort()),
          (j = n.indexOf(":") < 0 && "on" + n),
          (b = b[oa.expando] ? b : new oa.Event(n, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = o.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : oa.makeArray(c, [b])),
          (l = oa.event.special[n] || {}),
          e || !l.trigger || l.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !l.noBubble && !oa.isWindow(d)) {
          for (
            i = l.delegateType || n, wb.test(i + n) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            m.push(g), (h = g);
          h === (d.ownerDocument || ba) &&
            m.push(h.defaultView || h.parentWindow || a);
        }
        for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
          (b.type = f > 1 ? i : l.bindType || n),
            (k = (Ja.get(g, "events") || {})[b.type] && Ja.get(g, "handle")),
            k && k.apply(g, c),
            (k = j && g[j]),
            k &&
              k.apply &&
              Ia(g) &&
              ((b.result = k.apply(g, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = n),
          e ||
            b.isDefaultPrevented() ||
            (l._default && l._default.apply(m.pop(), c) !== !1) ||
            !Ia(d) ||
            (j &&
              oa.isFunction(d[n]) &&
              !oa.isWindow(d) &&
              ((h = d[j]),
              h && (d[j] = null),
              (oa.event.triggered = n),
              d[n](),
              (oa.event.triggered = void 0),
              h && (d[j] = h))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = oa.extend(new oa.Event(), c, { type: a, isSimulated: !0 });
      oa.event.trigger(d, null, b);
    },
  }),
    oa.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          oa.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        if (c) return oa.event.trigger(a, b, c, !0);
      },
    }),
    oa.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (a, b) {
        oa.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    oa.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (ma.focusin = "onfocusin" in a),
    ma.focusin ||
      oa.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          oa.event.simulate(b, a.target, oa.event.fix(a));
        };
        oa.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = Ja.access(d, b);
            e || d.addEventListener(a, c, !0), Ja.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = Ja.access(d, b) - 1;
            e
              ? Ja.access(d, b, e)
              : (d.removeEventListener(a, c, !0), Ja.remove(d, b));
          },
        };
      });
  var xb = a.location,
    yb = oa.now(),
    zb = /\?/;
  oa.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (a) {
      c = void 0;
    }
    return (
      (c && !c.getElementsByTagName("parsererror").length) ||
        oa.error("Invalid XML: " + b),
      c
    );
  };
  var Ab = /\[\]$/,
    Bb = /\r?\n/g,
    Cb = /^(?:submit|button|image|reset|file)$/i,
    Db = /^(?:input|select|textarea|keygen)/i;
  (oa.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        var c = oa.isFunction(b) ? b() : b;
        d[d.length] =
          encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
      };
    if (oa.isArray(a) || (a.jquery && !oa.isPlainObject(a)))
      oa.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) V(c, a[c], b, e);
    return d.join("&");
  }),
    oa.fn.extend({
      serialize: function () {
        return oa.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = oa.prop(this, "elements");
          return a ? oa.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !oa(this).is(":disabled") &&
              Db.test(this.nodeName) &&
              !Cb.test(a) &&
              (this.checked || !Ta.test(a))
            );
          })
          .map(function (a, b) {
            var c = oa(this).val();
            return null == c
              ? null
              : oa.isArray(c)
              ? oa.map(c, function (a) {
                  return { name: b.name, value: a.replace(Bb, "\r\n") };
                })
              : { name: b.name, value: c.replace(Bb, "\r\n") };
          })
          .get();
      },
    });
  var Eb = /%20/g,
    Fb = /#.*$/,
    Gb = /([?&])_=[^&]*/,
    Hb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ib = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Jb = /^(?:GET|HEAD)$/,
    Kb = /^\/\//,
    Lb = {},
    Mb = {},
    Nb = "*/".concat("*"),
    Ob = ba.createElement("a");
  (Ob.href = xb.href),
    oa.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: xb.href,
        type: "GET",
        isLocal: Ib.test(xb.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Nb,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": oa.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (a, b) {
        return b ? Y(Y(a, oa.ajaxSettings), b) : Y(oa.ajaxSettings, a);
      },
      ajaxPrefilter: W(Lb),
      ajaxTransport: W(Mb),
      ajax: function (b, c) {
        function d(b, c, d, h) {
          var j,
            m,
            n,
            u,
            v,
            w = c;
          k ||
            ((k = !0),
            i && a.clearTimeout(i),
            (e = void 0),
            (g = h || ""),
            (x.readyState = b > 0 ? 4 : 0),
            (j = (b >= 200 && b < 300) || 304 === b),
            d && (u = Z(o, x, d)),
            (u = $(o, u, x, j)),
            j
              ? (o.ifModified &&
                  ((v = x.getResponseHeader("Last-Modified")),
                  v && (oa.lastModified[f] = v),
                  (v = x.getResponseHeader("etag")),
                  v && (oa.etag[f] = v)),
                204 === b || "HEAD" === o.type
                  ? (w = "nocontent")
                  : 304 === b
                  ? (w = "notmodified")
                  : ((w = u.state), (m = u.data), (n = u.error), (j = !n)))
              : ((n = w), (!b && w) || ((w = "error"), b < 0 && (b = 0))),
            (x.status = b),
            (x.statusText = (c || w) + ""),
            j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]),
            x.statusCode(t),
            (t = void 0),
            l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]),
            s.fireWith(p, [x, w]),
            l &&
              (q.trigger("ajaxComplete", [x, o]),
              --oa.active || oa.event.trigger("ajaxStop")));
        }
        "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = oa.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? oa(p) : oa.event,
          r = oa.Deferred(),
          s = oa.Callbacks("once memory"),
          t = o.statusCode || {},
          u = {},
          v = {},
          w = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (a) {
              var b;
              if (k) {
                if (!h)
                  for (h = {}; (b = Hb.exec(g)); ) h[b[1].toLowerCase()] = b[2];
                b = h[a.toLowerCase()];
              }
              return null == b ? null : b;
            },
            getAllResponseHeaders: function () {
              return k ? g : null;
            },
            setRequestHeader: function (a, b) {
              return (
                null == k &&
                  ((a = v[a.toLowerCase()] = v[a.toLowerCase()] || a),
                  (u[a] = b)),
                this
              );
            },
            overrideMimeType: function (a) {
              return null == k && (o.mimeType = a), this;
            },
            statusCode: function (a) {
              var b;
              if (a)
                if (k) x.always(a[x.status]);
                else for (b in a) t[b] = [t[b], a[b]];
              return this;
            },
            abort: function (a) {
              var b = a || w;
              return e && e.abort(b), d(0, b), this;
            },
          };
        if (
          (r.promise(x),
          (o.url = ((b || o.url || xb.href) + "").replace(
            Kb,
            xb.protocol + "//"
          )),
          (o.type = c.method || c.type || o.method || o.type),
          (o.dataTypes = (o.dataType || "*").toLowerCase().match(Ea) || [""]),
          null == o.crossDomain)
        ) {
          j = ba.createElement("a");
          try {
            (j.href = o.url),
              (j.href = j.href),
              (o.crossDomain =
                Ob.protocol + "//" + Ob.host != j.protocol + "//" + j.host);
          } catch (a) {
            o.crossDomain = !0;
          }
        }
        if (
          (o.data &&
            o.processData &&
            "string" != typeof o.data &&
            (o.data = oa.param(o.data, o.traditional)),
          X(Lb, o, c, x),
          k)
        )
          return x;
        (l = oa.event && o.global),
          l && 0 === oa.active++ && oa.event.trigger("ajaxStart"),
          (o.type = o.type.toUpperCase()),
          (o.hasContent = !Jb.test(o.type)),
          (f = o.url.replace(Fb, "")),
          o.hasContent
            ? o.data &&
              o.processData &&
              0 ===
                (o.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (o.data = o.data.replace(Eb, "+"))
            : ((n = o.url.slice(f.length)),
              o.data &&
                ((f += (zb.test(f) ? "&" : "?") + o.data), delete o.data),
              o.cache === !1 &&
                ((f = f.replace(Gb, "$1")),
                (n = (zb.test(f) ? "&" : "?") + "_=" + yb++ + n)),
              (o.url = f + n)),
          o.ifModified &&
            (oa.lastModified[f] &&
              x.setRequestHeader("If-Modified-Since", oa.lastModified[f]),
            oa.etag[f] && x.setRequestHeader("If-None-Match", oa.etag[f])),
          ((o.data && o.hasContent && o.contentType !== !1) || c.contentType) &&
            x.setRequestHeader("Content-Type", o.contentType),
          x.setRequestHeader(
            "Accept",
            o.dataTypes[0] && o.accepts[o.dataTypes[0]]
              ? o.accepts[o.dataTypes[0]] +
                  ("*" !== o.dataTypes[0] ? ", " + Nb + "; q=0.01" : "")
              : o.accepts["*"]
          );
        for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
        if (o.beforeSend && (o.beforeSend.call(p, x, o) === !1 || k))
          return x.abort();
        if (
          ((w = "abort"),
          s.add(o.complete),
          x.done(o.success),
          x.fail(o.error),
          (e = X(Mb, o, c, x)))
        ) {
          if (((x.readyState = 1), l && q.trigger("ajaxSend", [x, o]), k))
            return x;
          o.async &&
            o.timeout > 0 &&
            (i = a.setTimeout(function () {
              x.abort("timeout");
            }, o.timeout));
          try {
            (k = !1), e.send(u, d);
          } catch (a) {
            if (k) throw a;
            d(-1, a);
          }
        } else d(-1, "No Transport");
        return x;
      },
      getJSON: function (a, b, c) {
        return oa.get(a, b, c, "json");
      },
      getScript: function (a, b) {
        return oa.get(a, void 0, b, "script");
      },
    }),
    oa.each(["get", "post"], function (a, b) {
      oa[b] = function (a, c, d, e) {
        return (
          oa.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          oa.ajax(
            oa.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              oa.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (oa._evalUrl = function (a) {
      return oa.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    oa.fn.extend({
      wrapAll: function (a) {
        var b;
        return (
          this[0] &&
            (oa.isFunction(a) && (a = a.call(this[0])),
            (b = oa(a, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                for (var a = this; a.firstElementChild; )
                  a = a.firstElementChild;
                return a;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (a) {
        return oa.isFunction(a)
          ? this.each(function (b) {
              oa(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = oa(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = oa.isFunction(a);
        return this.each(function (c) {
          oa(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function (a) {
        return (
          this.parent(a)
            .not("body")
            .each(function () {
              oa(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (oa.expr.pseudos.hidden = function (a) {
      return !oa.expr.pseudos.visible(a);
    }),
    (oa.expr.pseudos.visible = function (a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }),
    (oa.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (a) {}
    });
  var Pb = { 0: 200, 1223: 204 },
    Qb = oa.ajaxSettings.xhr();
  (ma.cors = !!Qb && "withCredentials" in Qb),
    (ma.ajax = Qb = !!Qb),
    oa.ajaxTransport(function (b) {
      var c, d;
      if (ma.cors || (Qb && !b.crossDomain))
        return {
          send: function (e, f) {
            var g,
              h = b.xhr();
            if (
              (h.open(b.type, b.url, b.async, b.username, b.password),
              b.xhrFields)
            )
              for (g in b.xhrFields) h[g] = b.xhrFields[g];
            b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
              b.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest");
            for (g in e) h.setRequestHeader(g, e[g]);
            (c = function (a) {
              return function () {
                c &&
                  ((c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null),
                  "abort" === a
                    ? h.abort()
                    : "error" === a
                    ? "number" != typeof h.status
                      ? f(0, "error")
                      : f(h.status, h.statusText)
                    : f(
                        Pb[h.status] || h.status,
                        h.statusText,
                        "text" !== (h.responseType || "text") ||
                          "string" != typeof h.responseText
                          ? { binary: h.response }
                          : { text: h.responseText },
                        h.getAllResponseHeaders()
                      ));
              };
            }),
              (h.onload = c()),
              (d = h.onerror = c("error")),
              void 0 !== h.onabort
                ? (h.onabort = d)
                : (h.onreadystatechange = function () {
                    4 === h.readyState &&
                      a.setTimeout(function () {
                        c && d();
                      });
                  }),
              (c = c("abort"));
            try {
              h.send((b.hasContent && b.data) || null);
            } catch (a) {
              if (c) throw a;
            }
          },
          abort: function () {
            c && c();
          },
        };
    }),
    oa.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1);
    }),
    oa.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return oa.globalEval(a), a;
        },
      },
    }),
    oa.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    oa.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (d, e) {
            (b = oa("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && e("error" === a.type ? 404 : 200, a.type);
                })
              )),
              ba.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Rb = [],
    Sb = /(=)\?(?=&|$)|\?\?/;
  oa.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Rb.pop() || oa.expando + "_" + yb++;
      return (this[a] = !0), a;
    },
  }),
    oa.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Sb.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Sb.test(b.data) &&
              "data");
      if (h || "jsonp" === b.dataTypes[0])
        return (
          (e = b.jsonpCallback = oa.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Sb, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (zb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || oa.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? oa(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Rb.push(e)),
              g && oa.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script"
        );
    }),
    (ma.createHTMLDocument = (function () {
      var a = ba.implementation.createHTMLDocument("").body;
      return (
        (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length
      );
    })()),
    (oa.parseHTML = function (a, b, c) {
      if ("string" != typeof a) return [];
      "boolean" == typeof b && ((c = b), (b = !1));
      var d, e, f;
      return (
        b ||
          (ma.createHTMLDocument
            ? ((b = ba.implementation.createHTMLDocument("")),
              (d = b.createElement("base")),
              (d.href = ba.location.href),
              b.head.appendChild(d))
            : (b = ba)),
        (e = xa.exec(a)),
        (f = !c && []),
        e
          ? [b.createElement(e[1])]
          : ((e = t([a], b, f)),
            f && f.length && oa(f).remove(),
            oa.merge([], e.childNodes))
      );
    }),
    (oa.fn.load = function (a, b, c) {
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h > -1 && ((d = T(a.slice(h))), (a = a.slice(0, h))),
        oa.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          oa
            .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
            .done(function (a) {
              (f = arguments),
                g.html(d ? oa("<div>").append(oa.parseHTML(a)).find(d) : a);
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(this, f || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
    oa.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        oa.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (oa.expr.pseudos.animated = function (a) {
      return oa.grep(oa.timers, function (b) {
        return a === b.elem;
      }).length;
    }),
    (oa.offset = {
      setOffset: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = oa.css(a, "position"),
          l = oa(a),
          m = {};
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = oa.css(a, "top")),
          (i = oa.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            (f + i).indexOf("auto") > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          oa.isFunction(b) && (b = b.call(a, c, oa.extend({}, h))),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m);
      },
    }),
    oa.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                oa.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d,
          e,
          f = this[0];
        if (f)
          return f.getClientRects().length
            ? ((d = f.getBoundingClientRect()),
              d.width || d.height
                ? ((e = f.ownerDocument),
                  (c = _(e)),
                  (b = e.documentElement),
                  {
                    top: d.top + c.pageYOffset - b.clientTop,
                    left: d.left + c.pageXOffset - b.clientLeft,
                  })
                : d)
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === oa.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                oa.nodeName(a[0], "html") || (d = a.offset()),
                (d = {
                  top: d.top + oa.css(a[0], "borderTopWidth", !0),
                  left: d.left + oa.css(a[0], "borderLeftWidth", !0),
                })),
            {
              top: b.top - d.top - oa.css(c, "marginTop", !0),
              left: b.left - d.left - oa.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var a = this.offsetParent;
            a && "static" === oa.css(a, "position");

          )
            a = a.offsetParent;
          return a || Ya;
        });
      },
    }),
    oa.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      a,
      b
    ) {
      var c = "pageYOffset" === b;
      oa.fn[a] = function (d) {
        return Ha(
          this,
          function (a, d, e) {
            var f = _(a);
            return void 0 === e
              ? f
                ? f[b]
                : a[d]
              : void (f
                  ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                  : (a[d] = e));
          },
          a,
          d,
          arguments.length
        );
      };
    }),
    oa.each(["top", "left"], function (a, b) {
      oa.cssHooks[b] = G(ma.pixelPosition, function (a, c) {
        if (c)
          return (c = F(a, b)), gb.test(c) ? oa(a).position()[b] + "px" : c;
      });
    }),
    oa.each({ Height: "height", Width: "width" }, function (a, b) {
      oa.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (
        c,
        d
      ) {
        oa.fn[d] = function (e, f) {
          var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");
          return Ha(
            this,
            function (b, c, e) {
              var f;
              return oa.isWindow(b)
                ? 0 === d.indexOf("outer")
                  ? b["inner" + a]
                  : b.document.documentElement["client" + a]
                : 9 === b.nodeType
                ? ((f = b.documentElement),
                  Math.max(
                    b.body["scroll" + a],
                    f["scroll" + a],
                    b.body["offset" + a],
                    f["offset" + a],
                    f["client" + a]
                  ))
                : void 0 === e
                ? oa.css(b, c, h)
                : oa.style(b, c, e, h);
            },
            b,
            g ? e : void 0,
            g
          );
        };
      });
    }),
    oa.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (oa.parseJSON = JSON.parse),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return oa;
      });
  var Tb = a.jQuery,
    Ub = a.$;
  return (
    (oa.noConflict = function (b) {
      return (
        a.$ === oa && (a.$ = Ub), b && a.jQuery === oa && (a.jQuery = Tb), oa
      );
    }),
    b || (a.jQuery = a.$ = oa),
    oa
  );
}),
  function () {
    function a(a) {
      function b(b, c, d, e, f, g) {
        for (; f >= 0 && f < g; f += a) {
          var h = e ? e[f] : f;
          d = c(d, b[h], h, b);
        }
        return d;
      }
      return function (c, d, e, f) {
        d = t(d, f, 4);
        var g = !A(c) && s.keys(c),
          h = (g || c).length,
          i = a > 0 ? 0 : h - 1;
        return (
          arguments.length < 3 && ((e = c[g ? g[i] : i]), (i += a)),
          b(c, d, e, g, i, h)
        );
      };
    }
    function b(a) {
      return function (b, c, d) {
        c = u(c, d);
        for (var e = z(b), f = a > 0 ? 0 : e - 1; f >= 0 && f < e; f += a)
          if (c(b[f], f, b)) return f;
        return -1;
      };
    }
    function c(a, b, c) {
      return function (d, e, f) {
        var g = 0,
          h = z(d);
        if ("number" == typeof f)
          a > 0
            ? (g = f >= 0 ? f : Math.max(f + h, g))
            : (h = f >= 0 ? Math.min(f + 1, h) : f + h + 1);
        else if (c && f && h) return (f = c(d, e)), d[f] === e ? f : -1;
        if (e !== e)
          return (f = b(k.call(d, g, h), s.isNaN)), f >= 0 ? f + g : -1;
        for (f = a > 0 ? g : h - 1; f >= 0 && f < h; f += a)
          if (d[f] === e) return f;
        return -1;
      };
    }
    function d(a, b) {
      var c = F.length,
        d = a.constructor,
        e = (s.isFunction(d) && d.prototype) || h,
        f = "constructor";
      for (s.has(a, f) && !s.contains(b, f) && b.push(f); c--; )
        (f = F[c]), f in a && a[f] !== e[f] && !s.contains(b, f) && b.push(f);
    }
    var e = this,
      f = e._,
      g = Array.prototype,
      h = Object.prototype,
      i = Function.prototype,
      j = g.push,
      k = g.slice,
      l = h.toString,
      m = h.hasOwnProperty,
      n = Array.isArray,
      o = Object.keys,
      p = i.bind,
      q = Object.create,
      r = function () {},
      s = function (a) {
        return a instanceof s
          ? a
          : this instanceof s
          ? void (this._wrapped = a)
          : new s(a);
      };
    "undefined" != typeof exports
      ? ("undefined" != typeof module &&
          module.exports &&
          (exports = module.exports = s),
        (exports._ = s))
      : (e._ = s),
      (s.VERSION = "1.8.3");
    var t = function (a, b, c) {
        if (void 0 === b) return a;
        switch (null == c ? 3 : c) {
          case 1:
            return function (c) {
              return a.call(b, c);
            };
          case 2:
            return function (c, d) {
              return a.call(b, c, d);
            };
          case 3:
            return function (c, d, e) {
              return a.call(b, c, d, e);
            };
          case 4:
            return function (c, d, e, f) {
              return a.call(b, c, d, e, f);
            };
        }
        return function () {
          return a.apply(b, arguments);
        };
      },
      u = function (a, b, c) {
        return null == a
          ? s.identity
          : s.isFunction(a)
          ? t(a, b, c)
          : s.isObject(a)
          ? s.matcher(a)
          : s.property(a);
      };
    s.iteratee = function (a, b) {
      return u(a, b, 1 / 0);
    };
    var v = function (a, b) {
        return function (c) {
          var d = arguments.length;
          if (d < 2 || null == c) return c;
          for (var e = 1; e < d; e++)
            for (
              var f = arguments[e], g = a(f), h = g.length, i = 0;
              i < h;
              i++
            ) {
              var j = g[i];
              (b && void 0 !== c[j]) || (c[j] = f[j]);
            }
          return c;
        };
      },
      w = function (a) {
        if (!s.isObject(a)) return {};
        if (q) return q(a);
        r.prototype = a;
        var b = new r();
        return (r.prototype = null), b;
      },
      x = function (a) {
        return function (b) {
          return null == b ? void 0 : b[a];
        };
      },
      y = Math.pow(2, 53) - 1,
      z = x("length"),
      A = function (a) {
        var b = z(a);
        return "number" == typeof b && b >= 0 && b <= y;
      };
    (s.each = s.forEach = function (a, b, c) {
      b = t(b, c);
      var d, e;
      if (A(a)) for (d = 0, e = a.length; d < e; d++) b(a[d], d, a);
      else {
        var f = s.keys(a);
        for (d = 0, e = f.length; d < e; d++) b(a[f[d]], f[d], a);
      }
      return a;
    }),
      (s.map = s.collect = function (a, b, c) {
        b = u(b, c);
        for (
          var d = !A(a) && s.keys(a), e = (d || a).length, f = Array(e), g = 0;
          g < e;
          g++
        ) {
          var h = d ? d[g] : g;
          f[g] = b(a[h], h, a);
        }
        return f;
      }),
      (s.reduce = s.foldl = s.inject = a(1)),
      (s.reduceRight = s.foldr = a(-1)),
      (s.find = s.detect = function (a, b, c) {
        var d;
        if (
          ((d = A(a) ? s.findIndex(a, b, c) : s.findKey(a, b, c)),
          void 0 !== d && d !== -1)
        )
          return a[d];
      }),
      (s.filter = s.select = function (a, b, c) {
        var d = [];
        return (
          (b = u(b, c)),
          s.each(a, function (a, c, e) {
            b(a, c, e) && d.push(a);
          }),
          d
        );
      }),
      (s.reject = function (a, b, c) {
        return s.filter(a, s.negate(u(b)), c);
      }),
      (s.every = s.all = function (a, b, c) {
        b = u(b, c);
        for (
          var d = !A(a) && s.keys(a), e = (d || a).length, f = 0;
          f < e;
          f++
        ) {
          var g = d ? d[f] : f;
          if (!b(a[g], g, a)) return !1;
        }
        return !0;
      }),
      (s.some = s.any = function (a, b, c) {
        b = u(b, c);
        for (
          var d = !A(a) && s.keys(a), e = (d || a).length, f = 0;
          f < e;
          f++
        ) {
          var g = d ? d[f] : f;
          if (b(a[g], g, a)) return !0;
        }
        return !1;
      }),
      (s.contains = s.includes = s.include = function (a, b, c, d) {
        return (
          A(a) || (a = s.values(a)),
          ("number" != typeof c || d) && (c = 0),
          s.indexOf(a, b, c) >= 0
        );
      }),
      (s.invoke = function (a, b) {
        var c = k.call(arguments, 2),
          d = s.isFunction(b);
        return s.map(a, function (a) {
          var e = d ? b : a[b];
          return null == e ? e : e.apply(a, c);
        });
      }),
      (s.pluck = function (a, b) {
        return s.map(a, s.property(b));
      }),
      (s.where = function (a, b) {
        return s.filter(a, s.matcher(b));
      }),
      (s.findWhere = function (a, b) {
        return s.find(a, s.matcher(b));
      }),
      (s.max = function (a, b, c) {
        var d,
          e,
          f = -(1 / 0),
          g = -(1 / 0);
        if (null == b && null != a) {
          a = A(a) ? a : s.values(a);
          for (var h = 0, i = a.length; h < i; h++)
            (d = a[h]), d > f && (f = d);
        } else
          (b = u(b, c)),
            s.each(a, function (a, c, d) {
              (e = b(a, c, d)),
                (e > g || (e === -(1 / 0) && f === -(1 / 0))) &&
                  ((f = a), (g = e));
            });
        return f;
      }),
      (s.min = function (a, b, c) {
        var d,
          e,
          f = 1 / 0,
          g = 1 / 0;
        if (null == b && null != a) {
          a = A(a) ? a : s.values(a);
          for (var h = 0, i = a.length; h < i; h++)
            (d = a[h]), d < f && (f = d);
        } else
          (b = u(b, c)),
            s.each(a, function (a, c, d) {
              (e = b(a, c, d)),
                (e < g || (e === 1 / 0 && f === 1 / 0)) && ((f = a), (g = e));
            });
        return f;
      }),
      (s.shuffle = function (a) {
        for (
          var b, c = A(a) ? a : s.values(a), d = c.length, e = Array(d), f = 0;
          f < d;
          f++
        )
          (b = s.random(0, f)), b !== f && (e[f] = e[b]), (e[b] = c[f]);
        return e;
      }),
      (s.sample = function (a, b, c) {
        return null == b || c
          ? (A(a) || (a = s.values(a)), a[s.random(a.length - 1)])
          : s.shuffle(a).slice(0, Math.max(0, b));
      }),
      (s.sortBy = function (a, b, c) {
        return (
          (b = u(b, c)),
          s.pluck(
            s
              .map(a, function (a, c, d) {
                return { value: a, index: c, criteria: b(a, c, d) };
              })
              .sort(function (a, b) {
                var c = a.criteria,
                  d = b.criteria;
                if (c !== d) {
                  if (c > d || void 0 === c) return 1;
                  if (c < d || void 0 === d) return -1;
                }
                return a.index - b.index;
              }),
            "value"
          )
        );
      });
    var B = function (a) {
      return function (b, c, d) {
        var e = {};
        return (
          (c = u(c, d)),
          s.each(b, function (d, f) {
            var g = c(d, f, b);
            a(e, d, g);
          }),
          e
        );
      };
    };
    (s.groupBy = B(function (a, b, c) {
      s.has(a, c) ? a[c].push(b) : (a[c] = [b]);
    })),
      (s.indexBy = B(function (a, b, c) {
        a[c] = b;
      })),
      (s.countBy = B(function (a, b, c) {
        s.has(a, c) ? a[c]++ : (a[c] = 1);
      })),
      (s.toArray = function (a) {
        return a
          ? s.isArray(a)
            ? k.call(a)
            : A(a)
            ? s.map(a, s.identity)
            : s.values(a)
          : [];
      }),
      (s.size = function (a) {
        return null == a ? 0 : A(a) ? a.length : s.keys(a).length;
      }),
      (s.partition = function (a, b, c) {
        b = u(b, c);
        var d = [],
          e = [];
        return (
          s.each(a, function (a, c, f) {
            (b(a, c, f) ? d : e).push(a);
          }),
          [d, e]
        );
      }),
      (s.first = s.head = s.take = function (a, b, c) {
        if (null != a)
          return null == b || c ? a[0] : s.initial(a, a.length - b);
      }),
      (s.initial = function (a, b, c) {
        return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)));
      }),
      (s.last = function (a, b, c) {
        if (null != a)
          return null == b || c
            ? a[a.length - 1]
            : s.rest(a, Math.max(0, a.length - b));
      }),
      (s.rest = s.tail = s.drop = function (a, b, c) {
        return k.call(a, null == b || c ? 1 : b);
      }),
      (s.compact = function (a) {
        return s.filter(a, s.identity);
      });
    var C = function (a, b, c, d) {
      for (var e = [], f = 0, g = d || 0, h = z(a); g < h; g++) {
        var i = a[g];
        if (A(i) && (s.isArray(i) || s.isArguments(i))) {
          b || (i = C(i, b, c));
          var j = 0,
            k = i.length;
          for (e.length += k; j < k; ) e[f++] = i[j++];
        } else c || (e[f++] = i);
      }
      return e;
    };
    (s.flatten = function (a, b) {
      return C(a, b, !1);
    }),
      (s.without = function (a) {
        return s.difference(a, k.call(arguments, 1));
      }),
      (s.uniq = s.unique = function (a, b, c, d) {
        s.isBoolean(b) || ((d = c), (c = b), (b = !1)),
          null != c && (c = u(c, d));
        for (var e = [], f = [], g = 0, h = z(a); g < h; g++) {
          var i = a[g],
            j = c ? c(i, g, a) : i;
          b
            ? ((g && f === j) || e.push(i), (f = j))
            : c
            ? s.contains(f, j) || (f.push(j), e.push(i))
            : s.contains(e, i) || e.push(i);
        }
        return e;
      }),
      (s.union = function () {
        return s.uniq(C(arguments, !0, !0));
      }),
      (s.intersection = function (a) {
        for (var b = [], c = arguments.length, d = 0, e = z(a); d < e; d++) {
          var f = a[d];
          if (!s.contains(b, f)) {
            for (var g = 1; g < c && s.contains(arguments[g], f); g++);
            g === c && b.push(f);
          }
        }
        return b;
      }),
      (s.difference = function (a) {
        var b = C(arguments, !0, !0, 1);
        return s.filter(a, function (a) {
          return !s.contains(b, a);
        });
      }),
      (s.zip = function () {
        return s.unzip(arguments);
      }),
      (s.unzip = function (a) {
        for (
          var b = (a && s.max(a, z).length) || 0, c = Array(b), d = 0;
          d < b;
          d++
        )
          c[d] = s.pluck(a, d);
        return c;
      }),
      (s.object = function (a, b) {
        for (var c = {}, d = 0, e = z(a); d < e; d++)
          b ? (c[a[d]] = b[d]) : (c[a[d][0]] = a[d][1]);
        return c;
      }),
      (s.findIndex = b(1)),
      (s.findLastIndex = b(-1)),
      (s.sortedIndex = function (a, b, c, d) {
        c = u(c, d, 1);
        for (var e = c(b), f = 0, g = z(a); f < g; ) {
          var h = Math.floor((f + g) / 2);
          c(a[h]) < e ? (f = h + 1) : (g = h);
        }
        return f;
      }),
      (s.indexOf = c(1, s.findIndex, s.sortedIndex)),
      (s.lastIndexOf = c(-1, s.findLastIndex)),
      (s.range = function (a, b, c) {
        null == b && ((b = a || 0), (a = 0)), (c = c || 1);
        for (
          var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0;
          f < d;
          f++, a += c
        )
          e[f] = a;
        return e;
      });
    var D = function (a, b, c, d, e) {
      if (!(d instanceof b)) return a.apply(c, e);
      var f = w(a.prototype),
        g = a.apply(f, e);
      return s.isObject(g) ? g : f;
    };
    (s.bind = function (a, b) {
      if (p && a.bind === p) return p.apply(a, k.call(arguments, 1));
      if (!s.isFunction(a))
        throw new TypeError("Bind must be called on a function");
      var c = k.call(arguments, 2),
        d = function () {
          return D(a, d, b, this, c.concat(k.call(arguments)));
        };
      return d;
    }),
      (s.partial = function (a) {
        var b = k.call(arguments, 1),
          c = function () {
            for (var d = 0, e = b.length, f = Array(e), g = 0; g < e; g++)
              f[g] = b[g] === s ? arguments[d++] : b[g];
            for (; d < arguments.length; ) f.push(arguments[d++]);
            return D(a, c, this, this, f);
          };
        return c;
      }),
      (s.bindAll = function (a) {
        var b,
          c,
          d = arguments.length;
        if (d <= 1) throw new Error("bindAll must be passed function names");
        for (b = 1; b < d; b++) (c = arguments[b]), (a[c] = s.bind(a[c], a));
        return a;
      }),
      (s.memoize = function (a, b) {
        var c = function (d) {
          var e = c.cache,
            f = "" + (b ? b.apply(this, arguments) : d);
          return s.has(e, f) || (e[f] = a.apply(this, arguments)), e[f];
        };
        return (c.cache = {}), c;
      }),
      (s.delay = function (a, b) {
        var c = k.call(arguments, 2);
        return setTimeout(function () {
          return a.apply(null, c);
        }, b);
      }),
      (s.defer = s.partial(s.delay, s, 1)),
      (s.throttle = function (a, b, c) {
        var d,
          e,
          f,
          g = null,
          h = 0;
        c || (c = {});
        var i = function () {
          (h = c.leading === !1 ? 0 : s.now()),
            (g = null),
            (f = a.apply(d, e)),
            g || (d = e = null);
        };
        return function () {
          var j = s.now();
          h || c.leading !== !1 || (h = j);
          var k = b - (j - h);
          return (
            (d = this),
            (e = arguments),
            k <= 0 || k > b
              ? (g && (clearTimeout(g), (g = null)),
                (h = j),
                (f = a.apply(d, e)),
                g || (d = e = null))
              : g || c.trailing === !1 || (g = setTimeout(i, k)),
            f
          );
        };
      }),
      (s.debounce = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i = function () {
            var j = s.now() - g;
            j < b && j >= 0
              ? (d = setTimeout(i, b - j))
              : ((d = null), c || ((h = a.apply(f, e)), d || (f = e = null)));
          };
        return function () {
          (f = this), (e = arguments), (g = s.now());
          var j = c && !d;
          return (
            d || (d = setTimeout(i, b)),
            j && ((h = a.apply(f, e)), (f = e = null)),
            h
          );
        };
      }),
      (s.wrap = function (a, b) {
        return s.partial(b, a);
      }),
      (s.negate = function (a) {
        return function () {
          return !a.apply(this, arguments);
        };
      }),
      (s.compose = function () {
        var a = arguments,
          b = a.length - 1;
        return function () {
          for (var c = b, d = a[b].apply(this, arguments); c--; )
            d = a[c].call(this, d);
          return d;
        };
      }),
      (s.after = function (a, b) {
        return function () {
          if (--a < 1) return b.apply(this, arguments);
        };
      }),
      (s.before = function (a, b) {
        var c;
        return function () {
          return (
            --a > 0 && (c = b.apply(this, arguments)), a <= 1 && (b = null), c
          );
        };
      }),
      (s.once = s.partial(s.before, 2));
    var E = !{ toString: null }.propertyIsEnumerable("toString"),
      F = [
        "valueOf",
        "isPrototypeOf",
        "toString",
        "propertyIsEnumerable",
        "hasOwnProperty",
        "toLocaleString",
      ];
    (s.keys = function (a) {
      if (!s.isObject(a)) return [];
      if (o) return o(a);
      var b = [];
      for (var c in a) s.has(a, c) && b.push(c);
      return E && d(a, b), b;
    }),
      (s.allKeys = function (a) {
        if (!s.isObject(a)) return [];
        var b = [];
        for (var c in a) b.push(c);
        return E && d(a, b), b;
      }),
      (s.values = function (a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++)
          d[e] = a[b[e]];
        return d;
      }),
      (s.mapObject = function (a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = e.length, g = {}, h = 0; h < f; h++)
          (d = e[h]), (g[d] = b(a[d], d, a));
        return g;
      }),
      (s.pairs = function (a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++)
          d[e] = [b[e], a[b[e]]];
        return d;
      }),
      (s.invert = function (a) {
        for (var b = {}, c = s.keys(a), d = 0, e = c.length; d < e; d++)
          b[a[c[d]]] = c[d];
        return b;
      }),
      (s.functions = s.methods = function (a) {
        var b = [];
        for (var c in a) s.isFunction(a[c]) && b.push(c);
        return b.sort();
      }),
      (s.extend = v(s.allKeys)),
      (s.extendOwn = s.assign = v(s.keys)),
      (s.findKey = function (a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = 0, g = e.length; f < g; f++)
          if (((d = e[f]), b(a[d], d, a))) return d;
      }),
      (s.pick = function (a, b, c) {
        var d,
          e,
          f = {},
          g = a;
        if (null == g) return f;
        s.isFunction(b)
          ? ((e = s.allKeys(g)), (d = t(b, c)))
          : ((e = C(arguments, !1, !1, 1)),
            (d = function (a, b, c) {
              return b in c;
            }),
            (g = Object(g)));
        for (var h = 0, i = e.length; h < i; h++) {
          var j = e[h],
            k = g[j];
          d(k, j, g) && (f[j] = k);
        }
        return f;
      }),
      (s.omit = function (a, b, c) {
        if (s.isFunction(b)) b = s.negate(b);
        else {
          var d = s.map(C(arguments, !1, !1, 1), String);
          b = function (a, b) {
            return !s.contains(d, b);
          };
        }
        return s.pick(a, b, c);
      }),
      (s.defaults = v(s.allKeys, !0)),
      (s.create = function (a, b) {
        var c = w(a);
        return b && s.extendOwn(c, b), c;
      }),
      (s.clone = function (a) {
        return s.isObject(a) ? (s.isArray(a) ? a.slice() : s.extend({}, a)) : a;
      }),
      (s.tap = function (a, b) {
        return b(a), a;
      }),
      (s.isMatch = function (a, b) {
        var c = s.keys(b),
          d = c.length;
        if (null == a) return !d;
        for (var e = Object(a), f = 0; f < d; f++) {
          var g = c[f];
          if (b[g] !== e[g] || !(g in e)) return !1;
        }
        return !0;
      });
    var G = function (a, b, c, d) {
      if (a === b) return 0 !== a || 1 / a === 1 / b;
      if (null == a || null == b) return a === b;
      a instanceof s && (a = a._wrapped), b instanceof s && (b = b._wrapped);
      var e = l.call(a);
      if (e !== l.call(b)) return !1;
      switch (e) {
        case "[object RegExp]":
        case "[object String]":
          return "" + a == "" + b;
        case "[object Number]":
          return +a !== +a
            ? +b !== +b
            : 0 === +a
            ? 1 / +a === 1 / b
            : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
          return +a === +b;
      }
      var f = "[object Array]" === e;
      if (!f) {
        if ("object" != typeof a || "object" != typeof b) return !1;
        var g = a.constructor,
          h = b.constructor;
        if (
          g !== h &&
          !(
            s.isFunction(g) &&
            g instanceof g &&
            s.isFunction(h) &&
            h instanceof h
          ) &&
          "constructor" in a &&
          "constructor" in b
        )
          return !1;
      }
      (c = c || []), (d = d || []);
      for (var i = c.length; i--; ) if (c[i] === a) return d[i] === b;
      if ((c.push(a), d.push(b), f)) {
        if (((i = a.length), i !== b.length)) return !1;
        for (; i--; ) if (!G(a[i], b[i], c, d)) return !1;
      } else {
        var j,
          k = s.keys(a);
        if (((i = k.length), s.keys(b).length !== i)) return !1;
        for (; i--; )
          if (((j = k[i]), !s.has(b, j) || !G(a[j], b[j], c, d))) return !1;
      }
      return c.pop(), d.pop(), !0;
    };
    (s.isEqual = function (a, b) {
      return G(a, b);
    }),
      (s.isEmpty = function (a) {
        return (
          null == a ||
          (A(a) && (s.isArray(a) || s.isString(a) || s.isArguments(a))
            ? 0 === a.length
            : 0 === s.keys(a).length)
        );
      }),
      (s.isElement = function (a) {
        return !(!a || 1 !== a.nodeType);
      }),
      (s.isArray =
        n ||
        function (a) {
          return "[object Array]" === l.call(a);
        }),
      (s.isObject = function (a) {
        var b = typeof a;
        return "function" === b || ("object" === b && !!a);
      }),
      s.each(
        [
          "Arguments",
          "Function",
          "String",
          "Number",
          "Date",
          "RegExp",
          "Error",
        ],
        function (a) {
          s["is" + a] = function (b) {
            return l.call(b) === "[object " + a + "]";
          };
        }
      ),
      s.isArguments(arguments) ||
        (s.isArguments = function (a) {
          return s.has(a, "callee");
        }),
      "function" != typeof /./ &&
        "object" != typeof Int8Array &&
        (s.isFunction = function (a) {
          return "function" == typeof a || !1;
        }),
      (s.isFinite = function (a) {
        return isFinite(a) && !isNaN(parseFloat(a));
      }),
      (s.isNaN = function (a) {
        return s.isNumber(a) && a !== +a;
      }),
      (s.isBoolean = function (a) {
        return a === !0 || a === !1 || "[object Boolean]" === l.call(a);
      }),
      (s.isNull = function (a) {
        return null === a;
      }),
      (s.isUndefined = function (a) {
        return void 0 === a;
      }),
      (s.has = function (a, b) {
        return null != a && m.call(a, b);
      }),
      (s.noConflict = function () {
        return (e._ = f), this;
      }),
      (s.identity = function (a) {
        return a;
      }),
      (s.constant = function (a) {
        return function () {
          return a;
        };
      }),
      (s.noop = function () {}),
      (s.property = x),
      (s.propertyOf = function (a) {
        return null == a
          ? function () {}
          : function (b) {
              return a[b];
            };
      }),
      (s.matcher = s.matches = function (a) {
        return (
          (a = s.extendOwn({}, a)),
          function (b) {
            return s.isMatch(b, a);
          }
        );
      }),
      (s.times = function (a, b, c) {
        var d = Array(Math.max(0, a));
        b = t(b, c, 1);
        for (var e = 0; e < a; e++) d[e] = b(e);
        return d;
      }),
      (s.random = function (a, b) {
        return (
          null == b && ((b = a), (a = 0)),
          a + Math.floor(Math.random() * (b - a + 1))
        );
      }),
      (s.now =
        Date.now ||
        function () {
          return new Date().getTime();
        });
    var H = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
      },
      I = s.invert(H),
      J = function (a) {
        var b = function (b) {
            return a[b];
          },
          c = "(?:" + s.keys(a).join("|") + ")",
          d = RegExp(c),
          e = RegExp(c, "g");
        return function (a) {
          return (a = null == a ? "" : "" + a), d.test(a) ? a.replace(e, b) : a;
        };
      };
    (s.escape = J(H)),
      (s.unescape = J(I)),
      (s.result = function (a, b, c) {
        var d = null == a ? void 0 : a[b];
        return void 0 === d && (d = c), s.isFunction(d) ? d.call(a) : d;
      });
    var K = 0;
    (s.uniqueId = function (a) {
      var b = ++K + "";
      return a ? a + b : b;
    }),
      (s.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
      });
    var L = /(.)^/,
      M = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      N = /\\|'|\r|\n|\u2028|\u2029/g,
      O = function (a) {
        return "\\" + M[a];
      };
    (s.template = function (a, b, c) {
      !b && c && (b = c), (b = s.defaults({}, b, s.templateSettings));
      var d = RegExp(
          [
            (b.escape || L).source,
            (b.interpolate || L).source,
            (b.evaluate || L).source,
          ].join("|") + "|$",
          "g"
        ),
        e = 0,
        f = "__p+='";
      a.replace(d, function (b, c, d, g, h) {
        return (
          (f += a.slice(e, h).replace(N, O)),
          (e = h + b.length),
          c
            ? (f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'")
            : d
            ? (f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'")
            : g && (f += "';\n" + g + "\n__p+='"),
          b
        );
      }),
        (f += "';\n"),
        b.variable || (f = "with(obj||{}){\n" + f + "}\n"),
        (f =
          "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
          f +
          "return __p;\n");
      try {
        var g = new Function(b.variable || "obj", "_", f);
      } catch (a) {
        throw ((a.source = f), a);
      }
      var h = function (a) {
          return g.call(this, a, s);
        },
        i = b.variable || "obj";
      return (h.source = "function(" + i + "){\n" + f + "}"), h;
    }),
      (s.chain = function (a) {
        var b = s(a);
        return (b._chain = !0), b;
      });
    var P = function (a, b) {
      return a._chain ? s(b).chain() : b;
    };
    (s.mixin = function (a) {
      s.each(s.functions(a), function (b) {
        var c = (s[b] = a[b]);
        s.prototype[b] = function () {
          var a = [this._wrapped];
          return j.apply(a, arguments), P(this, c.apply(s, a));
        };
      });
    }),
      s.mixin(s),
      s.each(
        ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
        function (a) {
          var b = g[a];
          s.prototype[a] = function () {
            var c = this._wrapped;
            return (
              b.apply(c, arguments),
              ("shift" !== a && "splice" !== a) ||
                0 !== c.length ||
                delete c[0],
              P(this, c)
            );
          };
        }
      ),
      s.each(["concat", "join", "slice"], function (a) {
        var b = g[a];
        s.prototype[a] = function () {
          return P(this, b.apply(this._wrapped, arguments));
        };
      }),
      (s.prototype.value = function () {
        return this._wrapped;
      }),
      (s.prototype.valueOf = s.prototype.toJSON = s.prototype.value),
      (s.prototype.toString = function () {
        return "" + this._wrapped;
      }),
      "function" == typeof define &&
        define.amd &&
        define("underscore", [], function () {
          return s;
        });
  }.call(this),
  (function (a) {
    var b =
      ("object" == typeof self && self.self === self && self) ||
      ("object" == typeof global && global.global === global && global);
    if ("function" == typeof define && define.amd)
      define(["underscore", "jquery", "exports"], function (c, d, e) {
        b.Backbone = a(b, e, c, d);
      });
    else if ("undefined" != typeof exports) {
      var c,
        d = require("underscore");
      try {
        c = require("jquery");
      } catch (a) {}
      a(b, exports, d, c);
    } else b.Backbone = a(b, {}, b._, b.jQuery || b.Zepto || b.ender || b.$);
  })(function (a, b, c, d) {
    var e = a.Backbone,
      f = Array.prototype.slice;
    (b.VERSION = "1.3.3"),
      (b.$ = d),
      (b.noConflict = function () {
        return (a.Backbone = e), this;
      }),
      (b.emulateHTTP = !1),
      (b.emulateJSON = !1);
    var g = function (a, b, d) {
        switch (a) {
          case 1:
            return function () {
              return c[b](this[d]);
            };
          case 2:
            return function (a) {
              return c[b](this[d], a);
            };
          case 3:
            return function (a, e) {
              return c[b](this[d], i(a, this), e);
            };
          case 4:
            return function (a, e, f) {
              return c[b](this[d], i(a, this), e, f);
            };
          default:
            return function () {
              var a = f.call(arguments);
              return a.unshift(this[d]), c[b].apply(c, a);
            };
        }
      },
      h = function (a, b, d) {
        c.each(b, function (b, e) {
          c[e] && (a.prototype[e] = g(b, e, d));
        });
      },
      i = function (a, b) {
        return c.isFunction(a)
          ? a
          : c.isObject(a) && !b._isModel(a)
          ? j(a)
          : c.isString(a)
          ? function (b) {
              return b.get(a);
            }
          : a;
      },
      j = function (a) {
        var b = c.matches(a);
        return function (a) {
          return b(a.attributes);
        };
      },
      k = (b.Events = {}),
      l = /\s+/,
      m = function (a, b, d, e, f) {
        var g,
          h = 0;
        if (d && "object" == typeof d) {
          void 0 !== e &&
            "context" in f &&
            void 0 === f.context &&
            (f.context = e);
          for (g = c.keys(d); h < g.length; h++) b = m(a, b, g[h], d[g[h]], f);
        } else if (d && l.test(d))
          for (g = d.split(l); h < g.length; h++) b = a(b, g[h], e, f);
        else b = a(b, d, e, f);
        return b;
      };
    k.on = function (a, b, c) {
      return n(this, a, b, c);
    };
    var n = function (a, b, c, d, e) {
      if (
        ((a._events = m(o, a._events || {}, b, c, {
          context: d,
          ctx: a,
          listening: e,
        })),
        e)
      ) {
        var f = a._listeners || (a._listeners = {});
        f[e.id] = e;
      }
      return a;
    };
    k.listenTo = function (a, b, d) {
      if (!a) return this;
      var e = a._listenId || (a._listenId = c.uniqueId("l")),
        f = this._listeningTo || (this._listeningTo = {}),
        g = f[e];
      if (!g) {
        var h = this._listenId || (this._listenId = c.uniqueId("l"));
        g = f[e] = { obj: a, objId: e, id: h, listeningTo: f, count: 0 };
      }
      return n(a, b, d, this, g), this;
    };
    var o = function (a, b, c, d) {
      if (c) {
        var e = a[b] || (a[b] = []),
          f = d.context,
          g = d.ctx,
          h = d.listening;
        h && h.count++,
          e.push({ callback: c, context: f, ctx: f || g, listening: h });
      }
      return a;
    };
    (k.off = function (a, b, c) {
      return this._events
        ? ((this._events = m(p, this._events, a, b, {
            context: c,
            listeners: this._listeners,
          })),
          this)
        : this;
    }),
      (k.stopListening = function (a, b, d) {
        var e = this._listeningTo;
        if (!e) return this;
        for (var f = a ? [a._listenId] : c.keys(e), g = 0; g < f.length; g++) {
          var h = e[f[g]];
          if (!h) break;
          h.obj.off(b, d, this);
        }
        return this;
      });
    var p = function (a, b, d, e) {
      if (a) {
        var f,
          g = 0,
          h = e.context,
          i = e.listeners;
        if (b || d || h) {
          for (var j = b ? [b] : c.keys(a); g < j.length; g++) {
            b = j[g];
            var k = a[b];
            if (!k) break;
            for (var l = [], m = 0; m < k.length; m++) {
              var n = k[m];
              (d && d !== n.callback && d !== n.callback._callback) ||
              (h && h !== n.context)
                ? l.push(n)
                : ((f = n.listening),
                  f &&
                    0 === --f.count &&
                    (delete i[f.id], delete f.listeningTo[f.objId]));
            }
            l.length ? (a[b] = l) : delete a[b];
          }
          return a;
        }
        for (var o = c.keys(i); g < o.length; g++)
          (f = i[o[g]]), delete i[f.id], delete f.listeningTo[f.objId];
      }
    };
    (k.once = function (a, b, d) {
      var e = m(q, {}, a, b, c.bind(this.off, this));
      return (
        "string" == typeof a && null == d && (b = void 0), this.on(e, b, d)
      );
    }),
      (k.listenToOnce = function (a, b, d) {
        var e = m(q, {}, b, d, c.bind(this.stopListening, this, a));
        return this.listenTo(a, e);
      });
    var q = function (a, b, d, e) {
      if (d) {
        var f = (a[b] = c.once(function () {
          e(b, f), d.apply(this, arguments);
        }));
        f._callback = d;
      }
      return a;
    };
    k.trigger = function (a) {
      if (!this._events) return this;
      for (
        var b = Math.max(0, arguments.length - 1), c = Array(b), d = 0;
        d < b;
        d++
      )
        c[d] = arguments[d + 1];
      return m(r, this._events, a, void 0, c), this;
    };
    var r = function (a, b, c, d) {
        if (a) {
          var e = a[b],
            f = a.all;
          e && f && (f = f.slice()), e && s(e, d), f && s(f, [b].concat(d));
        }
        return a;
      },
      s = function (a, b) {
        var c,
          d = -1,
          e = a.length,
          f = b[0],
          g = b[1],
          h = b[2];
        switch (b.length) {
          case 0:
            for (; ++d < e; ) (c = a[d]).callback.call(c.ctx);
            return;
          case 1:
            for (; ++d < e; ) (c = a[d]).callback.call(c.ctx, f);
            return;
          case 2:
            for (; ++d < e; ) (c = a[d]).callback.call(c.ctx, f, g);
            return;
          case 3:
            for (; ++d < e; ) (c = a[d]).callback.call(c.ctx, f, g, h);
            return;
          default:
            for (; ++d < e; ) (c = a[d]).callback.apply(c.ctx, b);
            return;
        }
      };
    (k.bind = k.on), (k.unbind = k.off), c.extend(b, k);
    var t = (b.Model = function (a, b) {
      var d = a || {};
      b || (b = {}),
        (this.cid = c.uniqueId(this.cidPrefix)),
        (this.attributes = {}),
        b.collection && (this.collection = b.collection),
        b.parse && (d = this.parse(d, b) || {});
      var e = c.result(this, "defaults");
      (d = c.defaults(c.extend({}, e, d), e)),
        this.set(d, b),
        (this.changed = {}),
        this.initialize.apply(this, arguments);
    });
    c.extend(t.prototype, k, {
      changed: null,
      validationError: null,
      idAttribute: "id",
      cidPrefix: "c",
      initialize: function () {},
      toJSON: function (a) {
        return c.clone(this.attributes);
      },
      sync: function () {
        return b.sync.apply(this, arguments);
      },
      get: function (a) {
        return this.attributes[a];
      },
      escape: function (a) {
        return c.escape(this.get(a));
      },
      has: function (a) {
        return null != this.get(a);
      },
      matches: function (a) {
        return !!c.iteratee(a, this)(this.attributes);
      },
      set: function (a, b, d) {
        if (null == a) return this;
        var e;
        if (
          ("object" == typeof a ? ((e = a), (d = b)) : ((e = {})[a] = b),
          d || (d = {}),
          !this._validate(e, d))
        )
          return !1;
        var f = d.unset,
          g = d.silent,
          h = [],
          i = this._changing;
        (this._changing = !0),
          i ||
            ((this._previousAttributes = c.clone(this.attributes)),
            (this.changed = {}));
        var j = this.attributes,
          k = this.changed,
          l = this._previousAttributes;
        for (var m in e)
          (b = e[m]),
            c.isEqual(j[m], b) || h.push(m),
            c.isEqual(l[m], b) ? delete k[m] : (k[m] = b),
            f ? delete j[m] : (j[m] = b);
        if (
          (this.idAttribute in e && (this.id = this.get(this.idAttribute)), !g)
        ) {
          h.length && (this._pending = d);
          for (var n = 0; n < h.length; n++)
            this.trigger("change:" + h[n], this, j[h[n]], d);
        }
        if (i) return this;
        if (!g)
          for (; this._pending; )
            (d = this._pending),
              (this._pending = !1),
              this.trigger("change", this, d);
        return (this._pending = !1), (this._changing = !1), this;
      },
      unset: function (a, b) {
        return this.set(a, void 0, c.extend({}, b, { unset: !0 }));
      },
      clear: function (a) {
        var b = {};
        for (var d in this.attributes) b[d] = void 0;
        return this.set(b, c.extend({}, a, { unset: !0 }));
      },
      hasChanged: function (a) {
        return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a);
      },
      changedAttributes: function (a) {
        if (!a) return !!this.hasChanged() && c.clone(this.changed);
        var b = this._changing ? this._previousAttributes : this.attributes,
          d = {};
        for (var e in a) {
          var f = a[e];
          c.isEqual(b[e], f) || (d[e] = f);
        }
        return !!c.size(d) && d;
      },
      previous: function (a) {
        return null != a && this._previousAttributes
          ? this._previousAttributes[a]
          : null;
      },
      previousAttributes: function () {
        return c.clone(this._previousAttributes);
      },
      fetch: function (a) {
        a = c.extend({ parse: !0 }, a);
        var b = this,
          d = a.success;
        return (
          (a.success = function (c) {
            var e = a.parse ? b.parse(c, a) : c;
            return (
              !!b.set(e, a) &&
              (d && d.call(a.context, b, c, a), void b.trigger("sync", b, c, a))
            );
          }),
          P(this, a),
          this.sync("read", this, a)
        );
      },
      save: function (a, b, d) {
        var e;
        null == a || "object" == typeof a
          ? ((e = a), (d = b))
          : ((e = {})[a] = b),
          (d = c.extend({ validate: !0, parse: !0 }, d));
        var f = d.wait;
        if (e && !f) {
          if (!this.set(e, d)) return !1;
        } else if (!this._validate(e, d)) return !1;
        var g = this,
          h = d.success,
          i = this.attributes;
        (d.success = function (a) {
          g.attributes = i;
          var b = d.parse ? g.parse(a, d) : a;
          return (
            f && (b = c.extend({}, e, b)),
            !(b && !g.set(b, d)) &&
              (h && h.call(d.context, g, a, d), void g.trigger("sync", g, a, d))
          );
        }),
          P(this, d),
          e && f && (this.attributes = c.extend({}, i, e));
        var j = this.isNew() ? "create" : d.patch ? "patch" : "update";
        "patch" !== j || d.attrs || (d.attrs = e);
        var k = this.sync(j, this, d);
        return (this.attributes = i), k;
      },
      destroy: function (a) {
        a = a ? c.clone(a) : {};
        var b = this,
          d = a.success,
          e = a.wait,
          f = function () {
            b.stopListening(), b.trigger("destroy", b, b.collection, a);
          };
        a.success = function (c) {
          e && f(),
            d && d.call(a.context, b, c, a),
            b.isNew() || b.trigger("sync", b, c, a);
        };
        var g = !1;
        return (
          this.isNew()
            ? c.defer(a.success)
            : (P(this, a), (g = this.sync("delete", this, a))),
          e || f(),
          g
        );
      },
      url: function () {
        var a =
          c.result(this, "urlRoot") || c.result(this.collection, "url") || O();
        if (this.isNew()) return a;
        var b = this.get(this.idAttribute);
        return a.replace(/[^\/]$/, "$&/") + encodeURIComponent(b);
      },
      parse: function (a, b) {
        return a;
      },
      clone: function () {
        return new this.constructor(this.attributes);
      },
      isNew: function () {
        return !this.has(this.idAttribute);
      },
      isValid: function (a) {
        return this._validate({}, c.extend({}, a, { validate: !0 }));
      },
      _validate: function (a, b) {
        if (!b.validate || !this.validate) return !0;
        a = c.extend({}, this.attributes, a);
        var d = (this.validationError = this.validate(a, b) || null);
        return (
          !d ||
          (this.trigger(
            "invalid",
            this,
            d,
            c.extend(b, { validationError: d })
          ),
          !1)
        );
      },
    });
    var u = {
      keys: 1,
      values: 1,
      pairs: 1,
      invert: 1,
      pick: 0,
      omit: 0,
      chain: 1,
      isEmpty: 1,
    };
    h(t, u, "attributes");
    var v = (b.Collection = function (a, b) {
        b || (b = {}),
          b.model && (this.model = b.model),
          void 0 !== b.comparator && (this.comparator = b.comparator),
          this._reset(),
          this.initialize.apply(this, arguments),
          a && this.reset(a, c.extend({ silent: !0 }, b));
      }),
      w = { add: !0, remove: !0, merge: !0 },
      x = { add: !0, remove: !1 },
      y = function (a, b, c) {
        c = Math.min(Math.max(c, 0), a.length);
        var d,
          e = Array(a.length - c),
          f = b.length;
        for (d = 0; d < e.length; d++) e[d] = a[d + c];
        for (d = 0; d < f; d++) a[d + c] = b[d];
        for (d = 0; d < e.length; d++) a[d + f + c] = e[d];
      };
    c.extend(v.prototype, k, {
      model: t,
      initialize: function () {},
      toJSON: function (a) {
        return this.map(function (b) {
          return b.toJSON(a);
        });
      },
      sync: function () {
        return b.sync.apply(this, arguments);
      },
      add: function (a, b) {
        return this.set(a, c.extend({ merge: !1 }, b, x));
      },
      remove: function (a, b) {
        b = c.extend({}, b);
        var d = !c.isArray(a);
        a = d ? [a] : a.slice();
        var e = this._removeModels(a, b);
        return (
          !b.silent &&
            e.length &&
            ((b.changes = { added: [], merged: [], removed: e }),
            this.trigger("update", this, b)),
          d ? e[0] : e
        );
      },
      set: function (a, b) {
        if (null != a) {
          (b = c.extend({}, w, b)),
            b.parse && !this._isModel(a) && (a = this.parse(a, b) || []);
          var d = !c.isArray(a);
          a = d ? [a] : a.slice();
          var e = b.at;
          null != e && (e = +e),
            e > this.length && (e = this.length),
            e < 0 && (e += this.length + 1);
          var f,
            g,
            h = [],
            i = [],
            j = [],
            k = [],
            l = {},
            m = b.add,
            n = b.merge,
            o = b.remove,
            p = !1,
            q = this.comparator && null == e && b.sort !== !1,
            r = c.isString(this.comparator) ? this.comparator : null;
          for (g = 0; g < a.length; g++) {
            f = a[g];
            var s = this.get(f);
            if (s) {
              if (n && f !== s) {
                var t = this._isModel(f) ? f.attributes : f;
                b.parse && (t = s.parse(t, b)),
                  s.set(t, b),
                  j.push(s),
                  q && !p && (p = s.hasChanged(r));
              }
              l[s.cid] || ((l[s.cid] = !0), h.push(s)), (a[g] = s);
            } else
              m &&
                ((f = a[g] = this._prepareModel(f, b)),
                f &&
                  (i.push(f),
                  this._addReference(f, b),
                  (l[f.cid] = !0),
                  h.push(f)));
          }
          if (o) {
            for (g = 0; g < this.length; g++)
              (f = this.models[g]), l[f.cid] || k.push(f);
            k.length && this._removeModels(k, b);
          }
          var u = !1,
            v = !q && m && o;
          if (
            (h.length && v
              ? ((u =
                  this.length !== h.length ||
                  c.some(this.models, function (a, b) {
                    return a !== h[b];
                  })),
                (this.models.length = 0),
                y(this.models, h, 0),
                (this.length = this.models.length))
              : i.length &&
                (q && (p = !0),
                y(this.models, i, null == e ? this.length : e),
                (this.length = this.models.length)),
            p && this.sort({ silent: !0 }),
            !b.silent)
          ) {
            for (g = 0; g < i.length; g++)
              null != e && (b.index = e + g),
                (f = i[g]),
                f.trigger("add", f, this, b);
            (p || u) && this.trigger("sort", this, b),
              (i.length || k.length || j.length) &&
                ((b.changes = { added: i, removed: k, merged: j }),
                this.trigger("update", this, b));
          }
          return d ? a[0] : a;
        }
      },
      reset: function (a, b) {
        b = b ? c.clone(b) : {};
        for (var d = 0; d < this.models.length; d++)
          this._removeReference(this.models[d], b);
        return (
          (b.previousModels = this.models),
          this._reset(),
          (a = this.add(a, c.extend({ silent: !0 }, b))),
          b.silent || this.trigger("reset", this, b),
          a
        );
      },
      push: function (a, b) {
        return this.add(a, c.extend({ at: this.length }, b));
      },
      pop: function (a) {
        var b = this.at(this.length - 1);
        return this.remove(b, a);
      },
      unshift: function (a, b) {
        return this.add(a, c.extend({ at: 0 }, b));
      },
      shift: function (a) {
        var b = this.at(0);
        return this.remove(b, a);
      },
      slice: function () {
        return f.apply(this.models, arguments);
      },
      get: function (a) {
        if (null != a)
          return (
            this._byId[a] ||
            this._byId[this.modelId(a.attributes || a)] ||
            (a.cid && this._byId[a.cid])
          );
      },
      has: function (a) {
        return null != this.get(a);
      },
      at: function (a) {
        return a < 0 && (a += this.length), this.models[a];
      },
      where: function (a, b) {
        return this[b ? "find" : "filter"](a);
      },
      findWhere: function (a) {
        return this.where(a, !0);
      },
      sort: function (a) {
        var b = this.comparator;
        if (!b) throw new Error("Cannot sort a set without a comparator");
        a || (a = {});
        var d = b.length;
        return (
          c.isFunction(b) && (b = c.bind(b, this)),
          1 === d || c.isString(b)
            ? (this.models = this.sortBy(b))
            : this.models.sort(b),
          a.silent || this.trigger("sort", this, a),
          this
        );
      },
      pluck: function (a) {
        return this.map(a + "");
      },
      fetch: function (a) {
        a = c.extend({ parse: !0 }, a);
        var b = a.success,
          d = this;
        return (
          (a.success = function (c) {
            var e = a.reset ? "reset" : "set";
            d[e](c, a),
              b && b.call(a.context, d, c, a),
              d.trigger("sync", d, c, a);
          }),
          P(this, a),
          this.sync("read", this, a)
        );
      },
      create: function (a, b) {
        b = b ? c.clone(b) : {};
        var d = b.wait;
        if (((a = this._prepareModel(a, b)), !a)) return !1;
        d || this.add(a, b);
        var e = this,
          f = b.success;
        return (
          (b.success = function (a, b, c) {
            d && e.add(a, c), f && f.call(c.context, a, b, c);
          }),
          a.save(null, b),
          a
        );
      },
      parse: function (a, b) {
        return a;
      },
      clone: function () {
        return new this.constructor(this.models, {
          model: this.model,
          comparator: this.comparator,
        });
      },
      modelId: function (a) {
        return a[this.model.prototype.idAttribute || "id"];
      },
      _reset: function () {
        (this.length = 0), (this.models = []), (this._byId = {});
      },
      _prepareModel: function (a, b) {
        if (this._isModel(a)) return a.collection || (a.collection = this), a;
        (b = b ? c.clone(b) : {}), (b.collection = this);
        var d = new this.model(a, b);
        return d.validationError
          ? (this.trigger("invalid", this, d.validationError, b), !1)
          : d;
      },
      _removeModels: function (a, b) {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = this.get(a[d]);
          if (e) {
            var f = this.indexOf(e);
            this.models.splice(f, 1), this.length--, delete this._byId[e.cid];
            var g = this.modelId(e.attributes);
            null != g && delete this._byId[g],
              b.silent || ((b.index = f), e.trigger("remove", e, this, b)),
              c.push(e),
              this._removeReference(e, b);
          }
        }
        return c;
      },
      _isModel: function (a) {
        return a instanceof t;
      },
      _addReference: function (a, b) {
        this._byId[a.cid] = a;
        var c = this.modelId(a.attributes);
        null != c && (this._byId[c] = a), a.on("all", this._onModelEvent, this);
      },
      _removeReference: function (a, b) {
        delete this._byId[a.cid];
        var c = this.modelId(a.attributes);
        null != c && delete this._byId[c],
          this === a.collection && delete a.collection,
          a.off("all", this._onModelEvent, this);
      },
      _onModelEvent: function (a, b, c, d) {
        if (b) {
          if (("add" === a || "remove" === a) && c !== this) return;
          if (("destroy" === a && this.remove(b, d), "change" === a)) {
            var e = this.modelId(b.previousAttributes()),
              f = this.modelId(b.attributes);
            e !== f &&
              (null != e && delete this._byId[e],
              null != f && (this._byId[f] = b));
          }
        }
        this.trigger.apply(this, arguments);
      },
    });
    var z = {
      forEach: 3,
      each: 3,
      map: 3,
      collect: 3,
      reduce: 0,
      foldl: 0,
      inject: 0,
      reduceRight: 0,
      foldr: 0,
      find: 3,
      detect: 3,
      filter: 3,
      select: 3,
      reject: 3,
      every: 3,
      all: 3,
      some: 3,
      any: 3,
      include: 3,
      includes: 3,
      contains: 3,
      invoke: 0,
      max: 3,
      min: 3,
      toArray: 1,
      size: 1,
      first: 3,
      head: 3,
      take: 3,
      initial: 3,
      rest: 3,
      tail: 3,
      drop: 3,
      last: 3,
      without: 0,
      difference: 0,
      indexOf: 3,
      shuffle: 1,
      lastIndexOf: 3,
      isEmpty: 1,
      chain: 1,
      sample: 3,
      partition: 3,
      groupBy: 3,
      countBy: 3,
      sortBy: 3,
      indexBy: 3,
      findIndex: 3,
      findLastIndex: 3,
    };
    h(v, z, "models");
    var A = (b.View = function (a) {
        (this.cid = c.uniqueId("view")),
          c.extend(this, c.pick(a, C)),
          this._ensureElement(),
          this.initialize.apply(this, arguments);
      }),
      B = /^(\S+)\s*(.*)$/,
      C = [
        "model",
        "collection",
        "el",
        "id",
        "attributes",
        "className",
        "tagName",
        "events",
      ];
    c.extend(A.prototype, k, {
      tagName: "div",
      $: function (a) {
        return this.$el.find(a);
      },
      initialize: function () {},
      render: function () {
        return this;
      },
      remove: function () {
        return this._removeElement(), this.stopListening(), this;
      },
      _removeElement: function () {
        this.$el.remove();
      },
      setElement: function (a) {
        return (
          this.undelegateEvents(),
          this._setElement(a),
          this.delegateEvents(),
          this
        );
      },
      _setElement: function (a) {
        (this.$el = a instanceof b.$ ? a : b.$(a)), (this.el = this.$el[0]);
      },
      delegateEvents: function (a) {
        if ((a || (a = c.result(this, "events")), !a)) return this;
        this.undelegateEvents();
        for (var b in a) {
          var d = a[b];
          if ((c.isFunction(d) || (d = this[d]), d)) {
            var e = b.match(B);
            this.delegate(e[1], e[2], c.bind(d, this));
          }
        }
        return this;
      },
      delegate: function (a, b, c) {
        return this.$el.on(a + ".delegateEvents" + this.cid, b, c), this;
      },
      undelegateEvents: function () {
        return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
      },
      undelegate: function (a, b, c) {
        return this.$el.off(a + ".delegateEvents" + this.cid, b, c), this;
      },
      _createElement: function (a) {
        return document.createElement(a);
      },
      _ensureElement: function () {
        if (this.el) this.setElement(c.result(this, "el"));
        else {
          var a = c.extend({}, c.result(this, "attributes"));
          this.id && (a.id = c.result(this, "id")),
            this.className && (a.class = c.result(this, "className")),
            this.setElement(this._createElement(c.result(this, "tagName"))),
            this._setAttributes(a);
        }
      },
      _setAttributes: function (a) {
        this.$el.attr(a);
      },
    }),
      (b.sync = function (a, d, e) {
        var f = D[a];
        c.defaults(e || (e = {}), {
          emulateHTTP: b.emulateHTTP,
          emulateJSON: b.emulateJSON,
        });
        var g = { type: f, dataType: "json" };
        if (
          (e.url || (g.url = c.result(d, "url") || O()),
          null != e.data ||
            !d ||
            ("create" !== a && "update" !== a && "patch" !== a) ||
            ((g.contentType = "application/json"),
            (g.data = JSON.stringify(e.attrs || d.toJSON(e)))),
          e.emulateJSON &&
            ((g.contentType = "application/x-www-form-urlencoded"),
            (g.data = g.data ? { model: g.data } : {})),
          e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f))
        ) {
          (g.type = "POST"), e.emulateJSON && (g.data._method = f);
          var h = e.beforeSend;
          e.beforeSend = function (a) {
            if ((a.setRequestHeader("X-HTTP-Method-Override", f), h))
              return h.apply(this, arguments);
          };
        }
        "GET" === g.type || e.emulateJSON || (g.processData = !1);
        var i = e.error;
        e.error = function (a, b, c) {
          (e.textStatus = b),
            (e.errorThrown = c),
            i && i.call(e.context, a, b, c);
        };
        var j = (e.xhr = b.ajax(c.extend(g, e)));
        return d.trigger("request", d, j, e), j;
      });
    var D = {
      create: "POST",
      update: "PUT",
      patch: "PATCH",
      delete: "DELETE",
      read: "GET",
    };
    b.ajax = function () {
      return b.$.ajax.apply(b.$, arguments);
    };
    var E = (b.Router = function (a) {
        a || (a = {}),
          a.routes && (this.routes = a.routes),
          this._bindRoutes(),
          this.initialize.apply(this, arguments);
      }),
      F = /\((.*?)\)/g,
      G = /(\(\?)?:\w+/g,
      H = /\*\w+/g,
      I = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    c.extend(E.prototype, k, {
      initialize: function () {},
      route: function (a, d, e) {
        c.isRegExp(a) || (a = this._routeToRegExp(a)),
          c.isFunction(d) && ((e = d), (d = "")),
          e || (e = this[d]);
        var f = this;
        return (
          b.history.route(a, function (c) {
            var g = f._extractParameters(a, c);
            f.execute(e, g, d) !== !1 &&
              (f.trigger.apply(f, ["route:" + d].concat(g)),
              f.trigger("route", d, g),
              b.history.trigger("route", f, d, g));
          }),
          this
        );
      },
      execute: function (a, b, c) {
        a && a.apply(this, b);
      },
      navigate: function (a, c) {
        return b.history.navigate(a, c), this;
      },
      _bindRoutes: function () {
        if (this.routes) {
          this.routes = c.result(this, "routes");
          for (var a, b = c.keys(this.routes); null != (a = b.pop()); )
            this.route(a, this.routes[a]);
        }
      },
      _routeToRegExp: function (a) {
        return (
          (a = a
            .replace(I, "\\$&")
            .replace(F, "(?:$1)?")
            .replace(G, function (a, b) {
              return b ? a : "([^/?]+)";
            })
            .replace(H, "([^?]*?)")),
          new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
        );
      },
      _extractParameters: function (a, b) {
        var d = a.exec(b).slice(1);
        return c.map(d, function (a, b) {
          return b === d.length - 1
            ? a || null
            : a
            ? decodeURIComponent(a)
            : null;
        });
      },
    });
    var J = (b.History = function () {
        (this.handlers = []),
          (this.checkUrl = c.bind(this.checkUrl, this)),
          "undefined" != typeof window &&
            ((this.location = window.location),
            (this.history = window.history));
      }),
      K = /^[#\/]|\s+$/g,
      L = /^\/+|\/+$/g,
      M = /#.*$/;
    (J.started = !1),
      c.extend(J.prototype, k, {
        interval: 50,
        atRoot: function () {
          var a = this.location.pathname.replace(/[^\/]$/, "$&/");
          return a === this.root && !this.getSearch();
        },
        matchRoot: function () {
          var a = this.decodeFragment(this.location.pathname),
            b = a.slice(0, this.root.length - 1) + "/";
          return b === this.root;
        },
        decodeFragment: function (a) {
          return decodeURI(a.replace(/%25/g, "%2525"));
        },
        getSearch: function () {
          var a = this.location.href.replace(/#.*/, "").match(/\?.+/);
          return a ? a[0] : "";
        },
        getHash: function (a) {
          var b = (a || this).location.href.match(/#(.*)$/);
          return b ? b[1] : "";
        },
        getPath: function () {
          var a = this.decodeFragment(
            this.location.pathname + this.getSearch()
          ).slice(this.root.length - 1);
          return "/" === a.charAt(0) ? a.slice(1) : a;
        },
        getFragment: function (a) {
          return (
            null == a &&
              (a =
                this._usePushState || !this._wantsHashChange
                  ? this.getPath()
                  : this.getHash()),
            a.replace(K, "")
          );
        },
        start: function (a) {
          if (J.started)
            throw new Error("Backbone.history has already been started");
          if (
            ((J.started = !0),
            (this.options = c.extend({ root: "/" }, this.options, a)),
            (this.root = this.options.root),
            (this._wantsHashChange = this.options.hashChange !== !1),
            (this._hasHashChange =
              "onhashchange" in window &&
              (void 0 === document.documentMode || document.documentMode > 7)),
            (this._useHashChange =
              this._wantsHashChange && this._hasHashChange),
            (this._wantsPushState = !!this.options.pushState),
            (this._hasPushState = !(!this.history || !this.history.pushState)),
            (this._usePushState = this._wantsPushState && this._hasPushState),
            (this.fragment = this.getFragment()),
            (this.root = ("/" + this.root + "/").replace(L, "/")),
            this._wantsHashChange && this._wantsPushState)
          ) {
            if (!this._hasPushState && !this.atRoot()) {
              var b = this.root.slice(0, -1) || "/";
              return this.location.replace(b + "#" + this.getPath()), !0;
            }
            this._hasPushState &&
              this.atRoot() &&
              this.navigate(this.getHash(), { replace: !0 });
          }
          if (
            !this._hasHashChange &&
            this._wantsHashChange &&
            !this._usePushState
          ) {
            (this.iframe = document.createElement("iframe")),
              (this.iframe.src = "javascript:0"),
              (this.iframe.style.display = "none"),
              (this.iframe.tabIndex = -1);
            var d = document.body,
              e = d.insertBefore(this.iframe, d.firstChild).contentWindow;
            e.document.open(),
              e.document.close(),
              (e.location.hash = "#" + this.fragment);
          }
          var f =
            window.addEventListener ||
            function (a, b) {
              return attachEvent("on" + a, b);
            };
          if (
            (this._usePushState
              ? f("popstate", this.checkUrl, !1)
              : this._useHashChange && !this.iframe
              ? f("hashchange", this.checkUrl, !1)
              : this._wantsHashChange &&
                (this._checkUrlInterval = setInterval(
                  this.checkUrl,
                  this.interval
                )),
            !this.options.silent)
          )
            return this.loadUrl();
        },
        stop: function () {
          var a =
            window.removeEventListener ||
            function (a, b) {
              return detachEvent("on" + a, b);
            };
          this._usePushState
            ? a("popstate", this.checkUrl, !1)
            : this._useHashChange &&
              !this.iframe &&
              a("hashchange", this.checkUrl, !1),
            this.iframe &&
              (document.body.removeChild(this.iframe), (this.iframe = null)),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            (J.started = !1);
        },
        route: function (a, b) {
          this.handlers.unshift({ route: a, callback: b });
        },
        checkUrl: function (a) {
          var b = this.getFragment();
          return (
            b === this.fragment &&
              this.iframe &&
              (b = this.getHash(this.iframe.contentWindow)),
            b !== this.fragment &&
              (this.iframe && this.navigate(b), void this.loadUrl())
          );
        },
        loadUrl: function (a) {
          return (
            !!this.matchRoot() &&
            ((a = this.fragment = this.getFragment(a)),
            c.some(this.handlers, function (b) {
              if (b.route.test(a)) return b.callback(a), !0;
            }))
          );
        },
        navigate: function (a, b) {
          if (!J.started) return !1;
          (b && b !== !0) || (b = { trigger: !!b }),
            (a = this.getFragment(a || ""));
          var c = this.root;
          ("" !== a && "?" !== a.charAt(0)) || (c = c.slice(0, -1) || "/");
          var d = c + a;
          if (
            ((a = this.decodeFragment(a.replace(M, ""))), this.fragment !== a)
          ) {
            if (((this.fragment = a), this._usePushState))
              this.history[b.replace ? "replaceState" : "pushState"](
                {},
                document.title,
                d
              );
            else {
              if (!this._wantsHashChange) return this.location.assign(d);
              if (
                (this._updateHash(this.location, a, b.replace),
                this.iframe && a !== this.getHash(this.iframe.contentWindow))
              ) {
                var e = this.iframe.contentWindow;
                b.replace || (e.document.open(), e.document.close()),
                  this._updateHash(e.location, a, b.replace);
              }
            }
            return b.trigger ? this.loadUrl(a) : void 0;
          }
        },
        _updateHash: function (a, b, c) {
          if (c) {
            var d = a.href.replace(/(javascript:|#).*$/, "");
            a.replace(d + "#" + b);
          } else a.hash = "#" + b;
        },
      }),
      (b.history = new J());
    var N = function (a, b) {
      var d,
        e = this;
      return (
        (d =
          a && c.has(a, "constructor")
            ? a.constructor
            : function () {
                return e.apply(this, arguments);
              }),
        c.extend(d, e, b),
        (d.prototype = c.create(e.prototype, a)),
        (d.prototype.constructor = d),
        (d.__super__ = e.prototype),
        d
      );
    };
    t.extend = v.extend = E.extend = A.extend = J.extend = N;
    var O = function () {
        throw new Error('A "url" property or function must be specified');
      },
      P = function (a, b) {
        var c = b.error;
        b.error = function (d) {
          c && c.call(b.context, a, d, b), a.trigger("error", a, d, b);
        };
      };
    return b;
  }),
  (function (a) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
      var b;
      (b =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : this),
        (b.dragula = a());
    }
  })(function () {
    return (function a(b, c, d) {
      function e(g, h) {
        if (!c[g]) {
          if (!b[g]) {
            var i = "function" == typeof require && require;
            if (!h && i) return i(g, !0);
            if (f) return f(g, !0);
            var j = new Error("Cannot find module '" + g + "'");
            throw ((j.code = "MODULE_NOT_FOUND"), j);
          }
          var k = (c[g] = { exports: {} });
          b[g][0].call(
            k.exports,
            function (a) {
              var c = b[g][1][a];
              return e(c ? c : a);
            },
            k,
            k.exports,
            a,
            b,
            c,
            d
          );
        }
        return c[g].exports;
      }
      for (
        var f = "function" == typeof require && require, g = 0;
        g < d.length;
        g++
      )
        e(d[g]);
      return e;
    })(
      {
        1: [
          function (a, b, c) {
            "use strict";
            function d(a) {
              var b = g[a];
              return (
                b ? (b.lastIndex = 0) : (g[a] = b = new RegExp(h + a + i, "g")),
                b
              );
            }
            function e(a, b) {
              var c = a.className;
              c.length
                ? d(b).test(c) || (a.className += " " + b)
                : (a.className = b);
            }
            function f(a, b) {
              a.className = a.className.replace(d(b), " ").trim();
            }
            var g = {},
              h = "(?:^|\\s)",
              i = "(?:\\s|$)";
            b.exports = { add: e, rm: f };
          },
          {},
        ],
        2: [
          function (a, b, c) {
            (function (c) {
              "use strict";
              function d(a, b) {
                function c(a) {
                  return ka.containers.indexOf(a) !== -1 || ja.isContainer(a);
                }
                function d(a) {
                  var b = a ? "remove" : "add";
                  e(x, b, "mousedown", z), e(x, b, "mouseup", I);
                }
                function h(a) {
                  var b = a ? "remove" : "add";
                  e(x, b, "mousemove", A);
                }
                function p(a) {
                  var b = a ? "remove" : "add";
                  u[b](x, "selectstart", y), u[b](x, "click", y);
                }
                function r() {
                  d(!0), I({});
                }
                function y(a) {
                  ha && a.preventDefault();
                }
                function z(a) {
                  (ba = a.clientX), (ca = a.clientY);
                  var b = 1 !== f(a) || a.metaKey || a.ctrlKey;
                  if (!b) {
                    var c = a.target,
                      d = B(c);
                    d &&
                      ((ha = d),
                      h(),
                      "mousedown" === a.type &&
                        (o(c) ? c.focus() : a.preventDefault()));
                  }
                }
                function A(a) {
                  if (ha) {
                    if (0 === f(a)) return void I({});
                    if (
                      void 0 === a.clientX ||
                      a.clientX !== ba ||
                      void 0 === a.clientY ||
                      a.clientY !== ca
                    ) {
                      if (ja.ignoreInputTextSelection) {
                        var b = s("clientX", a),
                          c = s("clientY", a),
                          d = w.elementFromPoint(b, c);
                        if (o(d)) return;
                      }
                      var e = ha;
                      h(!0), p(), G(), E(e);
                      var i = g($);
                      (_ = s("pageX", a) - i.left),
                        (aa = s("pageY", a) - i.top),
                        v.add(fa || $, "gu-transit"),
                        S(),
                        P(a);
                    }
                  }
                }
                function B(a) {
                  if (!((ka.dragging && Y) || c(a))) {
                    for (var b = a; n(a) && c(n(a)) === !1; ) {
                      if (ja.invalid(a, b)) return;
                      if (((a = n(a)), !a)) return;
                    }
                    var d = n(a);
                    if (d && !ja.invalid(a, b)) {
                      var e = ja.moves(a, d, b, q(a));
                      if (e) return { item: a, source: d };
                    }
                  }
                }
                function C(a) {
                  return !!B(a);
                }
                function D(a) {
                  var b = B(a);
                  b && E(b);
                }
                function E(a) {
                  W(a.item, a.source) &&
                    ((fa = a.item.cloneNode(!0)),
                    ka.emit("cloned", fa, a.item, "copy")),
                    (Z = a.source),
                    ($ = a.item),
                    (da = ea = q(a.item)),
                    (ka.dragging = !0),
                    ka.emit("drag", $, Z);
                }
                function F() {
                  return !1;
                }
                function G() {
                  if (ka.dragging) {
                    var a = fa || $;
                    J(a, n(a));
                  }
                }
                function H() {
                  (ha = !1), h(!0), p(!0);
                }
                function I(a) {
                  if ((H(), ka.dragging)) {
                    var b = fa || $,
                      c = s("clientX", a),
                      d = s("clientY", a),
                      e = i(Y, c, d),
                      f = O(e, c, d);
                    f && ((fa && ja.copySortSource) || !fa || f !== Z)
                      ? J(b, f)
                      : ja.removeOnSpill
                      ? K()
                      : L();
                  }
                }
                function J(a, b) {
                  var c = n(a);
                  fa && ja.copySortSource && b === Z && c.removeChild($),
                    N(b)
                      ? ka.emit("cancel", a, Z, Z)
                      : ka.emit("drop", a, b, Z, ea),
                    M();
                }
                function K() {
                  if (ka.dragging) {
                    var a = fa || $,
                      b = n(a);
                    b && b.removeChild(a),
                      ka.emit(fa ? "cancel" : "remove", a, b, Z),
                      M();
                  }
                }
                function L(a) {
                  if (ka.dragging) {
                    var b = arguments.length > 0 ? a : ja.revertOnSpill,
                      c = fa || $,
                      d = n(c),
                      e = N(d);
                    e === !1 &&
                      b &&
                      (fa ? d && d.removeChild(fa) : Z.insertBefore(c, da)),
                      e || b
                        ? ka.emit("cancel", c, Z, Z)
                        : ka.emit("drop", c, d, Z, ea),
                      M();
                  }
                }
                function M() {
                  var a = fa || $;
                  H(),
                    T(),
                    a && v.rm(a, "gu-transit"),
                    ga && clearTimeout(ga),
                    (ka.dragging = !1),
                    ia && ka.emit("out", a, ia, Z),
                    ka.emit("dragend", a),
                    (Z = $ = fa = da = ea = ga = ia = null);
                }
                function N(a, b) {
                  var c;
                  return (
                    (c = void 0 !== b ? b : Y ? ea : q(fa || $)),
                    a === Z && c === da
                  );
                }
                function O(a, b, d) {
                  function e() {
                    var e = c(f);
                    if (e === !1) return !1;
                    var g = U(f, a),
                      h = V(f, g, b, d),
                      i = N(f, h);
                    return !!i || ja.accepts($, f, Z, h);
                  }
                  for (var f = a; f && !e(); ) f = n(f);
                  return f;
                }
                function P(a) {
                  function b(a) {
                    ka.emit(a, j, ia, Z);
                  }
                  function c() {
                    m && b("over");
                  }
                  function d() {
                    ia && b("out");
                  }
                  if (Y) {
                    a.preventDefault();
                    var e = s("clientX", a),
                      f = s("clientY", a),
                      g = e - _,
                      h = f - aa;
                    (Y.style.left = g + "px"), (Y.style.top = h + "px");
                    var j = fa || $,
                      k = i(Y, e, f),
                      l = O(k, e, f),
                      m = null !== l && l !== ia;
                    (m || null === l) && (d(), (ia = l), c());
                    var o = n(j);
                    if (l === Z && fa && !ja.copySortSource)
                      return void (o && o.removeChild(j));
                    var p,
                      r = U(l, k);
                    if (null !== r) p = V(l, r, e, f);
                    else {
                      if (ja.revertOnSpill !== !0 || fa)
                        return void (fa && o && o.removeChild(j));
                      (p = da), (l = Z);
                    }
                    ((null === p && m) || (p !== j && p !== q(j))) &&
                      ((ea = p),
                      l.insertBefore(j, p),
                      ka.emit("shadow", j, l, Z));
                  }
                }
                function Q(a) {
                  v.rm(a, "gu-hide");
                }
                function R(a) {
                  ka.dragging && v.add(a, "gu-hide");
                }
                function S() {
                  if (!Y) {
                    var a = $.getBoundingClientRect();
                    (Y = $.cloneNode(!0)),
                      (Y.style.width = l(a) + "px"),
                      (Y.style.height = m(a) + "px"),
                      v.rm(Y, "gu-transit"),
                      v.add(Y, "gu-mirror"),
                      ja.mirrorContainer.appendChild(Y),
                      e(x, "add", "mousemove", P),
                      v.add(ja.mirrorContainer, "gu-unselectable"),
                      ka.emit("cloned", Y, $, "mirror");
                  }
                }
                function T() {
                  Y &&
                    (v.rm(ja.mirrorContainer, "gu-unselectable"),
                    e(x, "remove", "mousemove", P),
                    n(Y).removeChild(Y),
                    (Y = null));
                }
                function U(a, b) {
                  for (var c = b; c !== a && n(c) !== a; ) c = n(c);
                  return c === x ? null : c;
                }
                function V(a, b, c, d) {
                  function e() {
                    var b,
                      e,
                      f,
                      g = a.children.length;
                    for (b = 0; b < g; b++) {
                      if (
                        ((e = a.children[b]),
                        (f = e.getBoundingClientRect()),
                        h && f.left + f.width / 2 > c)
                      )
                        return e;
                      if (!h && f.top + f.height / 2 > d) return e;
                    }
                    return null;
                  }
                  function f() {
                    var a = b.getBoundingClientRect();
                    return g(h ? c > a.left + l(a) / 2 : d > a.top + m(a) / 2);
                  }
                  function g(a) {
                    return a ? q(b) : b;
                  }
                  var h = "horizontal" === ja.direction,
                    i = b !== a ? f() : e();
                  return i;
                }
                function W(a, b) {
                  return "boolean" == typeof ja.copy ? ja.copy : ja.copy(a, b);
                }
                var X = arguments.length;
                1 === X && Array.isArray(a) === !1 && ((b = a), (a = []));
                var Y,
                  Z,
                  $,
                  _,
                  aa,
                  ba,
                  ca,
                  da,
                  ea,
                  fa,
                  ga,
                  ha,
                  ia = null,
                  ja = b || {};
                void 0 === ja.moves && (ja.moves = k),
                  void 0 === ja.accepts && (ja.accepts = k),
                  void 0 === ja.invalid && (ja.invalid = F),
                  void 0 === ja.containers && (ja.containers = a || []),
                  void 0 === ja.isContainer && (ja.isContainer = j),
                  void 0 === ja.copy && (ja.copy = !1),
                  void 0 === ja.copySortSource && (ja.copySortSource = !1),
                  void 0 === ja.revertOnSpill && (ja.revertOnSpill = !1),
                  void 0 === ja.removeOnSpill && (ja.removeOnSpill = !1),
                  void 0 === ja.direction && (ja.direction = "vertical"),
                  void 0 === ja.ignoreInputTextSelection &&
                    (ja.ignoreInputTextSelection = !0),
                  void 0 === ja.mirrorContainer &&
                    (ja.mirrorContainer = w.body);
                var ka = t({
                  containers: ja.containers,
                  start: D,
                  end: G,
                  cancel: L,
                  remove: K,
                  destroy: r,
                  canMove: C,
                  dragging: !1,
                });
                return (
                  ja.removeOnSpill === !0 && ka.on("over", Q).on("out", R),
                  d(),
                  ka
                );
              }
              function e(a, b, d, e) {
                var f = {
                    mouseup: "touchend",
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                  },
                  g = {
                    mouseup: "pointerup",
                    mousedown: "pointerdown",
                    mousemove: "pointermove",
                  },
                  h = {
                    mouseup: "MSPointerUp",
                    mousedown: "MSPointerDown",
                    mousemove: "MSPointerMove",
                  };
                c.navigator.pointerEnabled
                  ? u[b](a, g[d], e)
                  : c.navigator.msPointerEnabled
                  ? u[b](a, h[d], e)
                  : (u[b](a, f[d], e), u[b](a, d, e));
              }
              function f(a) {
                if (void 0 !== a.touches) return a.touches.length;
                if (void 0 !== a.which && 0 !== a.which) return a.which;
                if (void 0 !== a.buttons) return a.buttons;
                var b = a.button;
                return void 0 !== b
                  ? 1 & b
                    ? 1
                    : 2 & b
                    ? 3
                    : 4 & b
                    ? 2
                    : 0
                  : void 0;
              }
              function g(a) {
                var b = a.getBoundingClientRect();
                return {
                  left: b.left + h("scrollLeft", "pageXOffset"),
                  top: b.top + h("scrollTop", "pageYOffset"),
                };
              }
              function h(a, b) {
                return "undefined" != typeof c[b]
                  ? c[b]
                  : x.clientHeight
                  ? x[a]
                  : w.body[a];
              }
              function i(a, b, c) {
                var d,
                  e = a || {},
                  f = e.className;
                return (
                  (e.className += " gu-hide"),
                  (d = w.elementFromPoint(b, c)),
                  (e.className = f),
                  d
                );
              }
              function j() {
                return !1;
              }
              function k() {
                return !0;
              }
              function l(a) {
                return a.width || a.right - a.left;
              }
              function m(a) {
                return a.height || a.bottom - a.top;
              }
              function n(a) {
                return a.parentNode === w ? null : a.parentNode;
              }
              function o(a) {
                return (
                  "INPUT" === a.tagName ||
                  "TEXTAREA" === a.tagName ||
                  "SELECT" === a.tagName ||
                  p(a)
                );
              }
              function p(a) {
                return (
                  !!a &&
                  "false" !== a.contentEditable &&
                  ("true" === a.contentEditable || p(n(a)))
                );
              }
              function q(a) {
                function b() {
                  var b = a;
                  do b = b.nextSibling;
                  while (b && 1 !== b.nodeType);
                  return b;
                }
                return a.nextElementSibling || b();
              }
              function r(a) {
                return a.targetTouches && a.targetTouches.length
                  ? a.targetTouches[0]
                  : a.changedTouches && a.changedTouches.length
                  ? a.changedTouches[0]
                  : a;
              }
              function s(a, b) {
                var c = r(b),
                  d = { pageX: "clientX", pageY: "clientY" };
                return a in d && !(a in c) && d[a] in c && (a = d[a]), c[a];
              }
              var t = a("contra/emitter"),
                u = a("crossvent"),
                v = a("./classes"),
                w = document,
                x = w.documentElement;
              b.exports = d;
            }.call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            ));
          },
          { "./classes": 1, "contra/emitter": 5, crossvent: 6 },
        ],
        3: [
          function (a, b, c) {
            b.exports = function (a, b) {
              return Array.prototype.slice.call(a, b);
            };
          },
          {},
        ],
        4: [
          function (a, b, c) {
            "use strict";
            var d = a("ticky");
            b.exports = function (a, b, c) {
              a &&
                d(function () {
                  a.apply(c || null, b || []);
                });
            };
          },
          { ticky: 9 },
        ],
        5: [
          function (a, b, c) {
            "use strict";
            var d = a("atoa"),
              e = a("./debounce");
            b.exports = function (a, b) {
              var c = b || {},
                f = {};
              return (
                void 0 === a && (a = {}),
                (a.on = function (b, c) {
                  return f[b] ? f[b].push(c) : (f[b] = [c]), a;
                }),
                (a.once = function (b, c) {
                  return (c._once = !0), a.on(b, c), a;
                }),
                (a.off = function (b, c) {
                  var d = arguments.length;
                  if (1 === d) delete f[b];
                  else if (0 === d) f = {};
                  else {
                    var e = f[b];
                    if (!e) return a;
                    e.splice(e.indexOf(c), 1);
                  }
                  return a;
                }),
                (a.emit = function () {
                  var b = d(arguments);
                  return a.emitterSnapshot(b.shift()).apply(this, b);
                }),
                (a.emitterSnapshot = function (b) {
                  var g = (f[b] || []).slice(0);
                  return function () {
                    var f = d(arguments),
                      h = this || a;
                    if ("error" === b && c.throws !== !1 && !g.length)
                      throw 1 === f.length ? f[0] : f;
                    return (
                      g.forEach(function (d) {
                        c.async ? e(d, f, h) : d.apply(h, f),
                          d._once && a.off(b, d);
                      }),
                      a
                    );
                  };
                }),
                a
              );
            };
          },
          { "./debounce": 4, atoa: 3 },
        ],
        6: [
          function (a, b, c) {
            (function (c) {
              "use strict";
              function d(a, b, c, d) {
                return a.addEventListener(b, c, d);
              }
              function e(a, b, c) {
                return a.attachEvent("on" + b, j(a, b, c));
              }
              function f(a, b, c, d) {
                return a.removeEventListener(b, c, d);
              }
              function g(a, b, c) {
                var d = k(a, b, c);
                if (d) return a.detachEvent("on" + b, d);
              }
              function h(a, b, c) {
                function d() {
                  var a;
                  return (
                    o.createEvent
                      ? ((a = o.createEvent("Event")), a.initEvent(b, !0, !0))
                      : o.createEventObject && (a = o.createEventObject()),
                    a
                  );
                }
                function e() {
                  return new m(b, { detail: c });
                }
                var f = n.indexOf(b) === -1 ? e() : d();
                a.dispatchEvent ? a.dispatchEvent(f) : a.fireEvent("on" + b, f);
              }
              function i(a, b, d) {
                return function (b) {
                  var e = b || c.event;
                  (e.target = e.target || e.srcElement),
                    (e.preventDefault =
                      e.preventDefault ||
                      function () {
                        e.returnValue = !1;
                      }),
                    (e.stopPropagation =
                      e.stopPropagation ||
                      function () {
                        e.cancelBubble = !0;
                      }),
                    (e.which = e.which || e.keyCode),
                    d.call(a, e);
                };
              }
              function j(a, b, c) {
                var d = k(a, b, c) || i(a, b, c);
                return r.push({ wrapper: d, element: a, type: b, fn: c }), d;
              }
              function k(a, b, c) {
                var d = l(a, b, c);
                if (d) {
                  var e = r[d].wrapper;
                  return r.splice(d, 1), e;
                }
              }
              function l(a, b, c) {
                var d, e;
                for (d = 0; d < r.length; d++)
                  if (
                    ((e = r[d]), e.element === a && e.type === b && e.fn === c)
                  )
                    return d;
              }
              var m = a("custom-event"),
                n = a("./eventmap"),
                o = c.document,
                p = d,
                q = f,
                r = [];
              c.addEventListener || ((p = e), (q = g)),
                (b.exports = { add: p, remove: q, fabricate: h });
            }.call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            ));
          },
          { "./eventmap": 7, "custom-event": 8 },
        ],
        7: [
          function (a, b, c) {
            (function (a) {
              "use strict";
              var c = [],
                d = "",
                e = /^on/;
              for (d in a) e.test(d) && c.push(d.slice(2));
              b.exports = c;
            }.call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            ));
          },
          {},
        ],
        8: [
          function (a, b, c) {
            (function (a) {
              function c() {
                try {
                  var a = new d("cat", { detail: { foo: "bar" } });
                  return "cat" === a.type && "bar" === a.detail.foo;
                } catch (a) {}
                return !1;
              }
              var d = a.CustomEvent;
              b.exports = c()
                ? d
                : "function" == typeof document.createEvent
                ? function (a, b) {
                    var c = document.createEvent("CustomEvent");
                    return (
                      b
                        ? c.initCustomEvent(
                            a,
                            b.bubbles,
                            b.cancelable,
                            b.detail
                          )
                        : c.initCustomEvent(a, !1, !1, void 0),
                      c
                    );
                  }
                : function (a, b) {
                    var c = document.createEventObject();
                    return (
                      (c.type = a),
                      b
                        ? ((c.bubbles = Boolean(b.bubbles)),
                          (c.cancelable = Boolean(b.cancelable)),
                          (c.detail = b.detail))
                        : ((c.bubbles = !1),
                          (c.cancelable = !1),
                          (c.detail = void 0)),
                      c
                    );
                  };
            }.call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            ));
          },
          {},
        ],
        9: [
          function (a, b, c) {
            var d,
              e = "function" == typeof setImmediate;
            (d = e
              ? function (a) {
                  setImmediate(a);
                }
              : function (a) {
                  setTimeout(a, 0);
                }),
              (b.exports = d);
          },
          {},
        ],
      },
      {},
      [2]
    )(2);
  }),
  (function (a, b) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = b())
      : "function" == typeof define && define.amd
      ? define([], b)
      : "object" == typeof exports
      ? (exports.Handlebars = b())
      : (a.Handlebars = b());
  })(this, function () {
    return (function (a) {
      function b(d) {
        if (c[d]) return c[d].exports;
        var e = (c[d] = { exports: {}, id: d, loaded: !1 });
        return (
          a[d].call(e.exports, e, e.exports, b), (e.loaded = !0), e.exports
        );
      }
      var c = {};
      return (b.m = a), (b.c = c), (b.p = ""), b(0);
    })([
      function (a, b, c) {
        "use strict";
        function d() {
          var a = r();
          return (
            (a.compile = function (b, c) {
              return k.compile(b, c, a);
            }),
            (a.precompile = function (b, c) {
              return k.precompile(b, c, a);
            }),
            (a.AST = i.default),
            (a.Compiler = k.Compiler),
            (a.JavaScriptCompiler = m.default),
            (a.Parser = j.parser),
            (a.parse = j.parse),
            a
          );
        }
        var e = c(1).default;
        b.__esModule = !0;
        var f = c(2),
          g = e(f),
          h = c(21),
          i = e(h),
          j = c(22),
          k = c(27),
          l = c(28),
          m = e(l),
          n = c(25),
          o = e(n),
          p = c(20),
          q = e(p),
          r = g.default.create,
          s = d();
        (s.create = d),
          q.default(s),
          (s.Visitor = o.default),
          (s.default = s),
          (b.default = s),
          (a.exports = b.default);
      },
      function (a, b) {
        "use strict";
        (b.default = function (a) {
          return a && a.__esModule ? a : { default: a };
        }),
          (b.__esModule = !0);
      },
      function (a, b, c) {
        "use strict";
        function d() {
          var a = new h.HandlebarsEnvironment();
          return (
            n.extend(a, h),
            (a.SafeString = j.default),
            (a.Exception = l.default),
            (a.Utils = n),
            (a.escapeExpression = n.escapeExpression),
            (a.VM = p),
            (a.template = function (b) {
              return p.template(b, a);
            }),
            a
          );
        }
        var e = c(3).default,
          f = c(1).default;
        b.__esModule = !0;
        var g = c(4),
          h = e(g),
          i = c(18),
          j = f(i),
          k = c(6),
          l = f(k),
          m = c(5),
          n = e(m),
          o = c(19),
          p = e(o),
          q = c(20),
          r = f(q),
          s = d();
        (s.create = d),
          r.default(s),
          (s.default = s),
          (b.default = s),
          (a.exports = b.default);
      },
      function (a, b) {
        "use strict";
        (b.default = function (a) {
          if (a && a.__esModule) return a;
          var b = {};
          if (null != a)
            for (var c in a)
              Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
          return (b.default = a), b;
        }),
          (b.__esModule = !0);
      },
      function (a, b, c) {
        "use strict";
        function d(a, b, c) {
          (this.helpers = a || {}),
            (this.partials = b || {}),
            (this.decorators = c || {}),
            i.registerDefaultHelpers(this),
            j.registerDefaultDecorators(this);
        }
        var e = c(1).default;
        (b.__esModule = !0), (b.HandlebarsEnvironment = d);
        var f = c(5),
          g = c(6),
          h = e(g),
          i = c(7),
          j = c(15),
          k = c(17),
          l = e(k),
          m = "4.0.5";
        b.VERSION = m;
        var n = 7;
        b.COMPILER_REVISION = n;
        var o = {
          1: "<= 1.0.rc.2",
          2: "== 1.0.0-rc.3",
          3: "== 1.0.0-rc.4",
          4: "== 1.x.x",
          5: "== 2.0.0-alpha.x",
          6: ">= 2.0.0-beta.1",
          7: ">= 4.0.0",
        };
        b.REVISION_CHANGES = o;
        var p = "[object Object]";
        d.prototype = {
          constructor: d,
          logger: l.default,
          log: l.default.log,
          registerHelper: function (a, b) {
            if (f.toString.call(a) === p) {
              if (b)
                throw new h.default("Arg not supported with multiple helpers");
              f.extend(this.helpers, a);
            } else this.helpers[a] = b;
          },
          unregisterHelper: function (a) {
            delete this.helpers[a];
          },
          registerPartial: function (a, b) {
            if (f.toString.call(a) === p) f.extend(this.partials, a);
            else {
              if ("undefined" == typeof b)
                throw new h.default(
                  'Attempting to register a partial called "' +
                    a +
                    '" as undefined'
                );
              this.partials[a] = b;
            }
          },
          unregisterPartial: function (a) {
            delete this.partials[a];
          },
          registerDecorator: function (a, b) {
            if (f.toString.call(a) === p) {
              if (b)
                throw new h.default(
                  "Arg not supported with multiple decorators"
                );
              f.extend(this.decorators, a);
            } else this.decorators[a] = b;
          },
          unregisterDecorator: function (a) {
            delete this.decorators[a];
          },
        };
        var q = l.default.log;
        (b.log = q), (b.createFrame = f.createFrame), (b.logger = l.default);
      },
      function (a, b) {
        "use strict";
        function c(a) {
          return k[a];
        }
        function d(a) {
          for (var b = 1; b < arguments.length; b++)
            for (var c in arguments[b])
              Object.prototype.hasOwnProperty.call(arguments[b], c) &&
                (a[c] = arguments[b][c]);
          return a;
        }
        function e(a, b) {
          for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
          return -1;
        }
        function f(a) {
          if ("string" != typeof a) {
            if (a && a.toHTML) return a.toHTML();
            if (null == a) return "";
            if (!a) return a + "";
            a = "" + a;
          }
          return m.test(a) ? a.replace(l, c) : a;
        }
        function g(a) {
          return (!a && 0 !== a) || !(!p(a) || 0 !== a.length);
        }
        function h(a) {
          var b = d({}, a);
          return (b._parent = a), b;
        }
        function i(a, b) {
          return (a.path = b), a;
        }
        function j(a, b) {
          return (a ? a + "." : "") + b;
        }
        (b.__esModule = !0),
          (b.extend = d),
          (b.indexOf = e),
          (b.escapeExpression = f),
          (b.isEmpty = g),
          (b.createFrame = h),
          (b.blockParams = i),
          (b.appendContextPath = j);
        var k = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
            "=": "&#x3D;",
          },
          l = /[&<>"'`=]/g,
          m = /[&<>"'`=]/,
          n = Object.prototype.toString;
        b.toString = n;
        var o = function (a) {
          return "function" == typeof a;
        };
        o(/x/) &&
          (b.isFunction = o = function (a) {
            return "function" == typeof a && "[object Function]" === n.call(a);
          }),
          (b.isFunction = o);
        var p =
          Array.isArray ||
          function (a) {
            return (
              !(!a || "object" != typeof a) && "[object Array]" === n.call(a)
            );
          };
        b.isArray = p;
      },
      function (a, b) {
        "use strict";
        function c(a, b) {
          var e = b && b.loc,
            f = void 0,
            g = void 0;
          e &&
            ((f = e.start.line),
            (g = e.start.column),
            (a += " - " + f + ":" + g));
          for (
            var h = Error.prototype.constructor.call(this, a), i = 0;
            i < d.length;
            i++
          )
            this[d[i]] = h[d[i]];
          Error.captureStackTrace && Error.captureStackTrace(this, c),
            e && ((this.lineNumber = f), (this.column = g));
        }
        b.__esModule = !0;
        var d = [
          "description",
          "fileName",
          "lineNumber",
          "message",
          "name",
          "number",
          "stack",
        ];
        (c.prototype = new Error()), (b.default = c), (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        function d(a) {
          g.default(a),
            i.default(a),
            k.default(a),
            m.default(a),
            o.default(a),
            q.default(a),
            s.default(a);
        }
        var e = c(1).default;
        (b.__esModule = !0), (b.registerDefaultHelpers = d);
        var f = c(8),
          g = e(f),
          h = c(9),
          i = e(h),
          j = c(10),
          k = e(j),
          l = c(11),
          m = e(l),
          n = c(12),
          o = e(n),
          p = c(13),
          q = e(p),
          r = c(14),
          s = e(r);
      },
      function (a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5);
        (b.default = function (a) {
          a.registerHelper("blockHelperMissing", function (b, c) {
            var e = c.inverse,
              f = c.fn;
            if (b === !0) return f(this);
            if (b === !1 || null == b) return e(this);
            if (d.isArray(b))
              return b.length > 0
                ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c))
                : e(this);
            if (c.data && c.ids) {
              var g = d.createFrame(c.data);
              (g.contextPath = d.appendContextPath(c.data.contextPath, c.name)),
                (c = { data: g });
            }
            return f(b, c);
          });
        }),
          (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        var d = c(1).default;
        b.__esModule = !0;
        var e = c(5),
          f = c(6),
          g = d(f);
        (b.default = function (a) {
          a.registerHelper("each", function (a, b) {
            function c(b, c, f) {
              j &&
                ((j.key = b),
                (j.index = c),
                (j.first = 0 === c),
                (j.last = !!f),
                k && (j.contextPath = k + b)),
                (i += d(a[b], {
                  data: j,
                  blockParams: e.blockParams([a[b], b], [k + b, null]),
                }));
            }
            if (!b) throw new g.default("Must pass iterator to #each");
            var d = b.fn,
              f = b.inverse,
              h = 0,
              i = "",
              j = void 0,
              k = void 0;
            if (
              (b.data &&
                b.ids &&
                (k = e.appendContextPath(b.data.contextPath, b.ids[0]) + "."),
              e.isFunction(a) && (a = a.call(this)),
              b.data && (j = e.createFrame(b.data)),
              a && "object" == typeof a)
            )
              if (e.isArray(a))
                for (var l = a.length; h < l; h++)
                  h in a && c(h, h, h === a.length - 1);
              else {
                var m = void 0;
                for (var n in a)
                  a.hasOwnProperty(n) &&
                    (void 0 !== m && c(m, h - 1), (m = n), h++);
                void 0 !== m && c(m, h - 1, !0);
              }
            return 0 === h && (i = f(this)), i;
          });
        }),
          (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        var d = c(1).default;
        b.__esModule = !0;
        var e = c(6),
          f = d(e);
        (b.default = function (a) {
          a.registerHelper("helperMissing", function () {
            if (1 !== arguments.length)
              throw new f.default(
                'Missing helper: "' + arguments[arguments.length - 1].name + '"'
              );
          });
        }),
          (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5);
        (b.default = function (a) {
          a.registerHelper("if", function (a, b) {
            return (
              d.isFunction(a) && (a = a.call(this)),
              (!b.hash.includeZero && !a) || d.isEmpty(a)
                ? b.inverse(this)
                : b.fn(this)
            );
          }),
            a.registerHelper("unless", function (b, c) {
              return a.helpers.if.call(this, b, {
                fn: c.inverse,
                inverse: c.fn,
                hash: c.hash,
              });
            });
        }),
          (a.exports = b.default);
      },
      function (a, b) {
        "use strict";
        (b.__esModule = !0),
          (b.default = function (a) {
            a.registerHelper("log", function () {
              for (
                var b = [void 0], c = arguments[arguments.length - 1], d = 0;
                d < arguments.length - 1;
                d++
              )
                b.push(arguments[d]);
              var e = 1;
              null != c.hash.level
                ? (e = c.hash.level)
                : c.data && null != c.data.level && (e = c.data.level),
                (b[0] = e),
                a.log.apply(a, b);
            });
          }),
          (a.exports = b.default);
      },
      function (a, b) {
        "use strict";
        (b.__esModule = !0),
          (b.default = function (a) {
            a.registerHelper("lookup", function (a, b) {
              return a && a[b];
            });
          }),
          (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5);
        (b.default = function (a) {
          a.registerHelper("with", function (a, b) {
            d.isFunction(a) && (a = a.call(this));
            var c = b.fn;
            if (d.isEmpty(a)) return b.inverse(this);
            var e = b.data;
            return (
              b.data &&
                b.ids &&
                ((e = d.createFrame(b.data)),
                (e.contextPath = d.appendContextPath(
                  b.data.contextPath,
                  b.ids[0]
                ))),
              c(a, {
                data: e,
                blockParams: d.blockParams([a], [e && e.contextPath]),
              })
            );
          });
        }),
          (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        function d(a) {
          g.default(a);
        }
        var e = c(1).default;
        (b.__esModule = !0), (b.registerDefaultDecorators = d);
        var f = c(16),
          g = e(f);
      },
      function (a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5);
        (b.default = function (a) {
          a.registerDecorator("inline", function (a, b, c, e) {
            var f = a;
            return (
              b.partials ||
                ((b.partials = {}),
                (f = function (e, f) {
                  var g = c.partials;
                  c.partials = d.extend({}, g, b.partials);
                  var h = a(e, f);
                  return (c.partials = g), h;
                })),
              (b.partials[e.args[0]] = e.fn),
              f
            );
          });
        }),
          (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5),
          e = {
            methodMap: ["debug", "info", "warn", "error"],
            level: "info",
            lookupLevel: function (a) {
              if ("string" == typeof a) {
                var b = d.indexOf(e.methodMap, a.toLowerCase());
                a = b >= 0 ? b : parseInt(a, 10);
              }
              return a;
            },
            log: function (a) {
              if (
                ((a = e.lookupLevel(a)),
                "undefined" != typeof console && e.lookupLevel(e.level) <= a)
              ) {
                var b = e.methodMap[a];
                console[b] || (b = "log");
                for (
                  var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1;
                  f < c;
                  f++
                )
                  d[f - 1] = arguments[f];
                console[b].apply(console, d);
              }
            },
          };
        (b.default = e), (a.exports = b.default);
      },
      function (a, b) {
        "use strict";
        function c(a) {
          this.string = a;
        }
        (b.__esModule = !0),
          (c.prototype.toString = c.prototype.toHTML = function () {
            return "" + this.string;
          }),
          (b.default = c),
          (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        function d(a) {
          var b = (a && a[0]) || 1,
            c = r.COMPILER_REVISION;
          if (b !== c) {
            if (b < c) {
              var d = r.REVISION_CHANGES[c],
                e = r.REVISION_CHANGES[b];
              throw new q.default(
                "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                  d +
                  ") or downgrade your runtime to an older version (" +
                  e +
                  ")."
              );
            }
            throw new q.default(
              "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
                a[1] +
                ")."
            );
          }
        }
        function e(a, b) {
          function c(c, d, e) {
            e.hash && ((d = o.extend({}, d, e.hash)), e.ids && (e.ids[0] = !0)),
              (c = b.VM.resolvePartial.call(this, c, d, e));
            var f = b.VM.invokePartial.call(this, c, d, e);
            if (
              (null == f &&
                b.compile &&
                ((e.partials[e.name] = b.compile(c, a.compilerOptions, b)),
                (f = e.partials[e.name](d, e))),
              null != f)
            ) {
              if (e.indent) {
                for (
                  var g = f.split("\n"), h = 0, i = g.length;
                  h < i && (g[h] || h + 1 !== i);
                  h++
                )
                  g[h] = e.indent + g[h];
                f = g.join("\n");
              }
              return f;
            }
            throw new q.default(
              "The partial " +
                e.name +
                " could not be compiled when running in runtime-only mode"
            );
          }
          function d(b) {
            function c(b) {
              return "" + a.main(e, b, e.helpers, e.partials, g, i, h);
            }
            var f =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              g = f.data;
            d._setup(f), !f.partial && a.useData && (g = j(b, g));
            var h = void 0,
              i = a.useBlockParams ? [] : void 0;
            return (
              a.useDepths &&
                (h = f.depths
                  ? b !== f.depths[0]
                    ? [b].concat(f.depths)
                    : f.depths
                  : [b]),
              (c = k(a.main, c, e, f.depths || [], g, i))(b, f)
            );
          }
          if (!b) throw new q.default("No environment passed to template");
          if (!a || !a.main)
            throw new q.default("Unknown template object: " + typeof a);
          (a.main.decorator = a.main_d), b.VM.checkRevision(a.compiler);
          var e = {
            strict: function (a, b) {
              if (!(b in a))
                throw new q.default('"' + b + '" not defined in ' + a);
              return a[b];
            },
            lookup: function (a, b) {
              for (var c = a.length, d = 0; d < c; d++)
                if (a[d] && null != a[d][b]) return a[d][b];
            },
            lambda: function (a, b) {
              return "function" == typeof a ? a.call(b) : a;
            },
            escapeExpression: o.escapeExpression,
            invokePartial: c,
            fn: function (b) {
              var c = a[b];
              return (c.decorator = a[b + "_d"]), c;
            },
            programs: [],
            program: function (a, b, c, d, e) {
              var g = this.programs[a],
                h = this.fn(a);
              return (
                b || e || d || c
                  ? (g = f(this, a, h, b, c, d, e))
                  : g || (g = this.programs[a] = f(this, a, h)),
                g
              );
            },
            data: function (a, b) {
              for (; a && b--; ) a = a._parent;
              return a;
            },
            merge: function (a, b) {
              var c = a || b;
              return a && b && a !== b && (c = o.extend({}, b, a)), c;
            },
            noop: b.VM.noop,
            compilerInfo: a.compiler,
          };
          return (
            (d.isTop = !0),
            (d._setup = function (c) {
              c.partial
                ? ((e.helpers = c.helpers),
                  (e.partials = c.partials),
                  (e.decorators = c.decorators))
                : ((e.helpers = e.merge(c.helpers, b.helpers)),
                  a.usePartial &&
                    (e.partials = e.merge(c.partials, b.partials)),
                  (a.usePartial || a.useDecorators) &&
                    (e.decorators = e.merge(c.decorators, b.decorators)));
            }),
            (d._child = function (b, c, d, g) {
              if (a.useBlockParams && !d)
                throw new q.default("must pass block params");
              if (a.useDepths && !g)
                throw new q.default("must pass parent depths");
              return f(e, b, a[b], c, 0, d, g);
            }),
            d
          );
        }
        function f(a, b, c, d, e, f, g) {
          function h(b) {
            var e =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              h = g;
            return (
              g && b !== g[0] && (h = [b].concat(g)),
              c(
                a,
                b,
                a.helpers,
                a.partials,
                e.data || d,
                f && [e.blockParams].concat(f),
                h
              )
            );
          }
          return (
            (h = k(c, h, a, g, d, f)),
            (h.program = b),
            (h.depth = g ? g.length : 0),
            (h.blockParams = e || 0),
            h
          );
        }
        function g(a, b, c) {
          return (
            a
              ? a.call || c.name || ((c.name = a), (a = c.partials[a]))
              : (a =
                  "@partial-block" === c.name
                    ? c.data["partial-block"]
                    : c.partials[c.name]),
            a
          );
        }
        function h(a, b, c) {
          (c.partial = !0),
            c.ids && (c.data.contextPath = c.ids[0] || c.data.contextPath);
          var d = void 0;
          if (
            (c.fn &&
              c.fn !== i &&
              ((c.data = r.createFrame(c.data)),
              (d = c.data["partial-block"] = c.fn),
              d.partials &&
                (c.partials = o.extend({}, c.partials, d.partials))),
            void 0 === a && d && (a = d),
            void 0 === a)
          )
            throw new q.default(
              "The partial " + c.name + " could not be found"
            );
          if (a instanceof Function) return a(b, c);
        }
        function i() {
          return "";
        }
        function j(a, b) {
          return (
            (b && "root" in b) ||
              ((b = b ? r.createFrame(b) : {}), (b.root = a)),
            b
          );
        }
        function k(a, b, c, d, e, f) {
          if (a.decorator) {
            var g = {};
            (b = a.decorator(b, g, c, d && d[0], e, f, d)), o.extend(b, g);
          }
          return b;
        }
        var l = c(3).default,
          m = c(1).default;
        (b.__esModule = !0),
          (b.checkRevision = d),
          (b.template = e),
          (b.wrapProgram = f),
          (b.resolvePartial = g),
          (b.invokePartial = h),
          (b.noop = i);
        var n = c(5),
          o = l(n),
          p = c(6),
          q = m(p),
          r = c(4);
      },
      function (a, b) {
        (function (c) {
          "use strict";
          (b.__esModule = !0),
            (b.default = function (a) {
              var b = "undefined" != typeof c ? c : window,
                d = b.Handlebars;
              a.noConflict = function () {
                return b.Handlebars === a && (b.Handlebars = d), a;
              };
            }),
            (a.exports = b.default);
        }.call(
          b,
          (function () {
            return this;
          })()
        ));
      },
      function (a, b) {
        "use strict";
        b.__esModule = !0;
        var c = {
          helpers: {
            helperExpression: function (a) {
              return (
                "SubExpression" === a.type ||
                (("MustacheStatement" === a.type ||
                  "BlockStatement" === a.type) &&
                  !!((a.params && a.params.length) || a.hash))
              );
            },
            scopedId: function (a) {
              return /^\.|this\b/.test(a.original);
            },
            simpleId: function (a) {
              return 1 === a.parts.length && !c.helpers.scopedId(a) && !a.depth;
            },
          },
        };
        (b.default = c), (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        function d(a, b) {
          if ("Program" === a.type) return a;
          (h.default.yy = n),
            (n.locInfo = function (a) {
              return new n.SourceLocation(b && b.srcName, a);
            });
          var c = new j.default(b);
          return c.accept(h.default.parse(a));
        }
        var e = c(1).default,
          f = c(3).default;
        (b.__esModule = !0), (b.parse = d);
        var g = c(23),
          h = e(g),
          i = c(24),
          j = e(i),
          k = c(26),
          l = f(k),
          m = c(5);
        b.parser = h.default;
        var n = {};
        m.extend(n, l);
      },
      function (a, b) {
        "use strict";
        var c = (function () {
          function a() {
            this.yy = {};
          }
          var b = {
              trace: function () {},
              yy: {},
              symbols_: {
                error: 2,
                root: 3,
                program: 4,
                EOF: 5,
                program_repetition0: 6,
                statement: 7,
                mustache: 8,
                block: 9,
                rawBlock: 10,
                partial: 11,
                partialBlock: 12,
                content: 13,
                COMMENT: 14,
                CONTENT: 15,
                openRawBlock: 16,
                rawBlock_repetition_plus0: 17,
                END_RAW_BLOCK: 18,
                OPEN_RAW_BLOCK: 19,
                helperName: 20,
                openRawBlock_repetition0: 21,
                openRawBlock_option0: 22,
                CLOSE_RAW_BLOCK: 23,
                openBlock: 24,
                block_option0: 25,
                closeBlock: 26,
                openInverse: 27,
                block_option1: 28,
                OPEN_BLOCK: 29,
                openBlock_repetition0: 30,
                openBlock_option0: 31,
                openBlock_option1: 32,
                CLOSE: 33,
                OPEN_INVERSE: 34,
                openInverse_repetition0: 35,
                openInverse_option0: 36,
                openInverse_option1: 37,
                openInverseChain: 38,
                OPEN_INVERSE_CHAIN: 39,
                openInverseChain_repetition0: 40,
                openInverseChain_option0: 41,
                openInverseChain_option1: 42,
                inverseAndProgram: 43,
                INVERSE: 44,
                inverseChain: 45,
                inverseChain_option0: 46,
                OPEN_ENDBLOCK: 47,
                OPEN: 48,
                mustache_repetition0: 49,
                mustache_option0: 50,
                OPEN_UNESCAPED: 51,
                mustache_repetition1: 52,
                mustache_option1: 53,
                CLOSE_UNESCAPED: 54,
                OPEN_PARTIAL: 55,
                partialName: 56,
                partial_repetition0: 57,
                partial_option0: 58,
                openPartialBlock: 59,
                OPEN_PARTIAL_BLOCK: 60,
                openPartialBlock_repetition0: 61,
                openPartialBlock_option0: 62,
                param: 63,
                sexpr: 64,
                OPEN_SEXPR: 65,
                sexpr_repetition0: 66,
                sexpr_option0: 67,
                CLOSE_SEXPR: 68,
                hash: 69,
                hash_repetition_plus0: 70,
                hashSegment: 71,
                ID: 72,
                EQUALS: 73,
                blockParams: 74,
                OPEN_BLOCK_PARAMS: 75,
                blockParams_repetition_plus0: 76,
                CLOSE_BLOCK_PARAMS: 77,
                path: 78,
                dataName: 79,
                STRING: 80,
                NUMBER: 81,
                BOOLEAN: 82,
                UNDEFINED: 83,
                NULL: 84,
                DATA: 85,
                pathSegments: 86,
                SEP: 87,
                $accept: 0,
                $end: 1,
              },
              terminals_: {
                2: "error",
                5: "EOF",
                14: "COMMENT",
                15: "CONTENT",
                18: "END_RAW_BLOCK",
                19: "OPEN_RAW_BLOCK",
                23: "CLOSE_RAW_BLOCK",
                29: "OPEN_BLOCK",
                33: "CLOSE",
                34: "OPEN_INVERSE",
                39: "OPEN_INVERSE_CHAIN",
                44: "INVERSE",
                47: "OPEN_ENDBLOCK",
                48: "OPEN",
                51: "OPEN_UNESCAPED",
                54: "CLOSE_UNESCAPED",
                55: "OPEN_PARTIAL",
                60: "OPEN_PARTIAL_BLOCK",
                65: "OPEN_SEXPR",
                68: "CLOSE_SEXPR",
                72: "ID",
                73: "EQUALS",
                75: "OPEN_BLOCK_PARAMS",
                77: "CLOSE_BLOCK_PARAMS",
                80: "STRING",
                81: "NUMBER",
                82: "BOOLEAN",
                83: "UNDEFINED",
                84: "NULL",
                85: "DATA",
                87: "SEP",
              },
              productions_: [
                0,
                [3, 2],
                [4, 1],
                [7, 1],
                [7, 1],
                [7, 1],
                [7, 1],
                [7, 1],
                [7, 1],
                [7, 1],
                [13, 1],
                [10, 3],
                [16, 5],
                [9, 4],
                [9, 4],
                [24, 6],
                [27, 6],
                [38, 6],
                [43, 2],
                [45, 3],
                [45, 1],
                [26, 3],
                [8, 5],
                [8, 5],
                [11, 5],
                [12, 3],
                [59, 5],
                [63, 1],
                [63, 1],
                [64, 5],
                [69, 1],
                [71, 3],
                [74, 3],
                [20, 1],
                [20, 1],
                [20, 1],
                [20, 1],
                [20, 1],
                [20, 1],
                [20, 1],
                [56, 1],
                [56, 1],
                [79, 2],
                [78, 1],
                [86, 3],
                [86, 1],
                [6, 0],
                [6, 2],
                [17, 1],
                [17, 2],
                [21, 0],
                [21, 2],
                [22, 0],
                [22, 1],
                [25, 0],
                [25, 1],
                [28, 0],
                [28, 1],
                [30, 0],
                [30, 2],
                [31, 0],
                [31, 1],
                [32, 0],
                [32, 1],
                [35, 0],
                [35, 2],
                [36, 0],
                [36, 1],
                [37, 0],
                [37, 1],
                [40, 0],
                [40, 2],
                [41, 0],
                [41, 1],
                [42, 0],
                [42, 1],
                [46, 0],
                [46, 1],
                [49, 0],
                [49, 2],
                [50, 0],
                [50, 1],
                [52, 0],
                [52, 2],
                [53, 0],
                [53, 1],
                [57, 0],
                [57, 2],
                [58, 0],
                [58, 1],
                [61, 0],
                [61, 2],
                [62, 0],
                [62, 1],
                [66, 0],
                [66, 2],
                [67, 0],
                [67, 1],
                [70, 1],
                [70, 2],
                [76, 1],
                [76, 2],
              ],
              performAction: function (a, b, c, d, e, f, g) {
                var h = f.length - 1;
                switch (e) {
                  case 1:
                    return f[h - 1];
                  case 2:
                    this.$ = d.prepareProgram(f[h]);
                    break;
                  case 3:
                    this.$ = f[h];
                    break;
                  case 4:
                    this.$ = f[h];
                    break;
                  case 5:
                    this.$ = f[h];
                    break;
                  case 6:
                    this.$ = f[h];
                    break;
                  case 7:
                    this.$ = f[h];
                    break;
                  case 8:
                    this.$ = f[h];
                    break;
                  case 9:
                    this.$ = {
                      type: "CommentStatement",
                      value: d.stripComment(f[h]),
                      strip: d.stripFlags(f[h], f[h]),
                      loc: d.locInfo(this._$),
                    };
                    break;
                  case 10:
                    this.$ = {
                      type: "ContentStatement",
                      original: f[h],
                      value: f[h],
                      loc: d.locInfo(this._$),
                    };
                    break;
                  case 11:
                    this.$ = d.prepareRawBlock(
                      f[h - 2],
                      f[h - 1],
                      f[h],
                      this._$
                    );
                    break;
                  case 12:
                    this.$ = {
                      path: f[h - 3],
                      params: f[h - 2],
                      hash: f[h - 1],
                    };
                    break;
                  case 13:
                    this.$ = d.prepareBlock(
                      f[h - 3],
                      f[h - 2],
                      f[h - 1],
                      f[h],
                      !1,
                      this._$
                    );
                    break;
                  case 14:
                    this.$ = d.prepareBlock(
                      f[h - 3],
                      f[h - 2],
                      f[h - 1],
                      f[h],
                      !0,
                      this._$
                    );
                    break;
                  case 15:
                    this.$ = {
                      open: f[h - 5],
                      path: f[h - 4],
                      params: f[h - 3],
                      hash: f[h - 2],
                      blockParams: f[h - 1],
                      strip: d.stripFlags(f[h - 5], f[h]),
                    };
                    break;
                  case 16:
                    this.$ = {
                      path: f[h - 4],
                      params: f[h - 3],
                      hash: f[h - 2],
                      blockParams: f[h - 1],
                      strip: d.stripFlags(f[h - 5], f[h]),
                    };
                    break;
                  case 17:
                    this.$ = {
                      path: f[h - 4],
                      params: f[h - 3],
                      hash: f[h - 2],
                      blockParams: f[h - 1],
                      strip: d.stripFlags(f[h - 5], f[h]),
                    };
                    break;
                  case 18:
                    this.$ = {
                      strip: d.stripFlags(f[h - 1], f[h - 1]),
                      program: f[h],
                    };
                    break;
                  case 19:
                    var i = d.prepareBlock(
                        f[h - 2],
                        f[h - 1],
                        f[h],
                        f[h],
                        !1,
                        this._$
                      ),
                      j = d.prepareProgram([i], f[h - 1].loc);
                    (j.chained = !0),
                      (this.$ = {
                        strip: f[h - 2].strip,
                        program: j,
                        chain: !0,
                      });
                    break;
                  case 20:
                    this.$ = f[h];
                    break;
                  case 21:
                    this.$ = {
                      path: f[h - 1],
                      strip: d.stripFlags(f[h - 2], f[h]),
                    };
                    break;
                  case 22:
                    this.$ = d.prepareMustache(
                      f[h - 3],
                      f[h - 2],
                      f[h - 1],
                      f[h - 4],
                      d.stripFlags(f[h - 4], f[h]),
                      this._$
                    );
                    break;
                  case 23:
                    this.$ = d.prepareMustache(
                      f[h - 3],
                      f[h - 2],
                      f[h - 1],
                      f[h - 4],
                      d.stripFlags(f[h - 4], f[h]),
                      this._$
                    );
                    break;
                  case 24:
                    this.$ = {
                      type: "PartialStatement",
                      name: f[h - 3],
                      params: f[h - 2],
                      hash: f[h - 1],
                      indent: "",
                      strip: d.stripFlags(f[h - 4], f[h]),
                      loc: d.locInfo(this._$),
                    };
                    break;
                  case 25:
                    this.$ = d.preparePartialBlock(
                      f[h - 2],
                      f[h - 1],
                      f[h],
                      this._$
                    );
                    break;
                  case 26:
                    this.$ = {
                      path: f[h - 3],
                      params: f[h - 2],
                      hash: f[h - 1],
                      strip: d.stripFlags(f[h - 4], f[h]),
                    };
                    break;
                  case 27:
                    this.$ = f[h];
                    break;
                  case 28:
                    this.$ = f[h];
                    break;
                  case 29:
                    this.$ = {
                      type: "SubExpression",
                      path: f[h - 3],
                      params: f[h - 2],
                      hash: f[h - 1],
                      loc: d.locInfo(this._$),
                    };
                    break;
                  case 30:
                    this.$ = {
                      type: "Hash",
                      pairs: f[h],
                      loc: d.locInfo(this._$),
                    };
                    break;
                  case 31:
                    this.$ = {
                      type: "HashPair",
                      key: d.id(f[h - 2]),
                      value: f[h],
                      loc: d.locInfo(this._$),
                    };
                    break;
                  case 32:
                    this.$ = d.id(f[h - 1]);
                    break;
                  case 33:
                    this.$ = f[h];
                    break;
                  case 34:
                    this.$ = f[h];
                    break;
                  case 35:
                    this.$ = {
                      type: "StringLiteral",
                      value: f[h],
                      original: f[h],
                      loc: d.locInfo(this._$),
                    };
                    break;
                  case 36:
                    this.$ = {
                      type: "NumberLiteral",
                      value: Number(f[h]),
                      original: Number(f[h]),
                      loc: d.locInfo(this._$),
                    };
                    break;
                  case 37:
                    this.$ = {
                      type: "BooleanLiteral",
                      value: "true" === f[h],
                      original: "true" === f[h],
                      loc: d.locInfo(this._$),
                    };
                    break;
                  case 38:
                    this.$ = {
                      type: "UndefinedLiteral",
                      original: void 0,
                      value: void 0,
                      loc: d.locInfo(this._$),
                    };
                    break;
                  case 39:
                    this.$ = {
                      type: "NullLiteral",
                      original: null,
                      value: null,
                      loc: d.locInfo(this._$),
                    };
                    break;
                  case 40:
                    this.$ = f[h];
                    break;
                  case 41:
                    this.$ = f[h];
                    break;
                  case 42:
                    this.$ = d.preparePath(!0, f[h], this._$);
                    break;
                  case 43:
                    this.$ = d.preparePath(!1, f[h], this._$);
                    break;
                  case 44:
                    f[h - 2].push({
                      part: d.id(f[h]),
                      original: f[h],
                      separator: f[h - 1],
                    }),
                      (this.$ = f[h - 2]);
                    break;
                  case 45:
                    this.$ = [{ part: d.id(f[h]), original: f[h] }];
                    break;
                  case 46:
                    this.$ = [];
                    break;
                  case 47:
                    f[h - 1].push(f[h]);
                    break;
                  case 48:
                    this.$ = [f[h]];
                    break;
                  case 49:
                    f[h - 1].push(f[h]);
                    break;
                  case 50:
                    this.$ = [];
                    break;
                  case 51:
                    f[h - 1].push(f[h]);
                    break;
                  case 58:
                    this.$ = [];
                    break;
                  case 59:
                    f[h - 1].push(f[h]);
                    break;
                  case 64:
                    this.$ = [];
                    break;
                  case 65:
                    f[h - 1].push(f[h]);
                    break;
                  case 70:
                    this.$ = [];
                    break;
                  case 71:
                    f[h - 1].push(f[h]);
                    break;
                  case 78:
                    this.$ = [];
                    break;
                  case 79:
                    f[h - 1].push(f[h]);
                    break;
                  case 82:
                    this.$ = [];
                    break;
                  case 83:
                    f[h - 1].push(f[h]);
                    break;
                  case 86:
                    this.$ = [];
                    break;
                  case 87:
                    f[h - 1].push(f[h]);
                    break;
                  case 90:
                    this.$ = [];
                    break;
                  case 91:
                    f[h - 1].push(f[h]);
                    break;
                  case 94:
                    this.$ = [];
                    break;
                  case 95:
                    f[h - 1].push(f[h]);
                    break;
                  case 98:
                    this.$ = [f[h]];
                    break;
                  case 99:
                    f[h - 1].push(f[h]);
                    break;
                  case 100:
                    this.$ = [f[h]];
                    break;
                  case 101:
                    f[h - 1].push(f[h]);
                }
              },
              table: [
                {
                  3: 1,
                  4: 2,
                  5: [2, 46],
                  6: 3,
                  14: [2, 46],
                  15: [2, 46],
                  19: [2, 46],
                  29: [2, 46],
                  34: [2, 46],
                  48: [2, 46],
                  51: [2, 46],
                  55: [2, 46],
                  60: [2, 46],
                },
                { 1: [3] },
                { 5: [1, 4] },
                {
                  5: [2, 2],
                  7: 5,
                  8: 6,
                  9: 7,
                  10: 8,
                  11: 9,
                  12: 10,
                  13: 11,
                  14: [1, 12],
                  15: [1, 20],
                  16: 17,
                  19: [1, 23],
                  24: 15,
                  27: 16,
                  29: [1, 21],
                  34: [1, 22],
                  39: [2, 2],
                  44: [2, 2],
                  47: [2, 2],
                  48: [1, 13],
                  51: [1, 14],
                  55: [1, 18],
                  59: 19,
                  60: [1, 24],
                },
                { 1: [2, 1] },
                {
                  5: [2, 47],
                  14: [2, 47],
                  15: [2, 47],
                  19: [2, 47],
                  29: [2, 47],
                  34: [2, 47],
                  39: [2, 47],
                  44: [2, 47],
                  47: [2, 47],
                  48: [2, 47],
                  51: [2, 47],
                  55: [2, 47],
                  60: [2, 47],
                },
                {
                  5: [2, 3],
                  14: [2, 3],
                  15: [2, 3],
                  19: [2, 3],
                  29: [2, 3],
                  34: [2, 3],
                  39: [2, 3],
                  44: [2, 3],
                  47: [2, 3],
                  48: [2, 3],
                  51: [2, 3],
                  55: [2, 3],
                  60: [2, 3],
                },
                {
                  5: [2, 4],
                  14: [2, 4],
                  15: [2, 4],
                  19: [2, 4],
                  29: [2, 4],
                  34: [2, 4],
                  39: [2, 4],
                  44: [2, 4],
                  47: [2, 4],
                  48: [2, 4],
                  51: [2, 4],
                  55: [2, 4],
                  60: [2, 4],
                },
                {
                  5: [2, 5],
                  14: [2, 5],
                  15: [2, 5],
                  19: [2, 5],
                  29: [2, 5],
                  34: [2, 5],
                  39: [2, 5],
                  44: [2, 5],
                  47: [2, 5],
                  48: [2, 5],
                  51: [2, 5],
                  55: [2, 5],
                  60: [2, 5],
                },
                {
                  5: [2, 6],
                  14: [2, 6],
                  15: [2, 6],
                  19: [2, 6],
                  29: [2, 6],
                  34: [2, 6],
                  39: [2, 6],
                  44: [2, 6],
                  47: [2, 6],
                  48: [2, 6],
                  51: [2, 6],
                  55: [2, 6],
                  60: [2, 6],
                },
                {
                  5: [2, 7],
                  14: [2, 7],
                  15: [2, 7],
                  19: [2, 7],
                  29: [2, 7],
                  34: [2, 7],
                  39: [2, 7],
                  44: [2, 7],
                  47: [2, 7],
                  48: [2, 7],
                  51: [2, 7],
                  55: [2, 7],
                  60: [2, 7],
                },
                {
                  5: [2, 8],
                  14: [2, 8],
                  15: [2, 8],
                  19: [2, 8],
                  29: [2, 8],
                  34: [2, 8],
                  39: [2, 8],
                  44: [2, 8],
                  47: [2, 8],
                  48: [2, 8],
                  51: [2, 8],
                  55: [2, 8],
                  60: [2, 8],
                },
                {
                  5: [2, 9],
                  14: [2, 9],
                  15: [2, 9],
                  19: [2, 9],
                  29: [2, 9],
                  34: [2, 9],
                  39: [2, 9],
                  44: [2, 9],
                  47: [2, 9],
                  48: [2, 9],
                  51: [2, 9],
                  55: [2, 9],
                  60: [2, 9],
                },
                {
                  20: 25,
                  72: [1, 35],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  20: 36,
                  72: [1, 35],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  4: 37,
                  6: 3,
                  14: [2, 46],
                  15: [2, 46],
                  19: [2, 46],
                  29: [2, 46],
                  34: [2, 46],
                  39: [2, 46],
                  44: [2, 46],
                  47: [2, 46],
                  48: [2, 46],
                  51: [2, 46],
                  55: [2, 46],
                  60: [2, 46],
                },
                {
                  4: 38,
                  6: 3,
                  14: [2, 46],
                  15: [2, 46],
                  19: [2, 46],
                  29: [2, 46],
                  34: [2, 46],
                  44: [2, 46],
                  47: [2, 46],
                  48: [2, 46],
                  51: [2, 46],
                  55: [2, 46],
                  60: [2, 46],
                },
                { 13: 40, 15: [1, 20], 17: 39 },
                {
                  20: 42,
                  56: 41,
                  64: 43,
                  65: [1, 44],
                  72: [1, 35],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  4: 45,
                  6: 3,
                  14: [2, 46],
                  15: [2, 46],
                  19: [2, 46],
                  29: [2, 46],
                  34: [2, 46],
                  47: [2, 46],
                  48: [2, 46],
                  51: [2, 46],
                  55: [2, 46],
                  60: [2, 46],
                },
                {
                  5: [2, 10],
                  14: [2, 10],
                  15: [2, 10],
                  18: [2, 10],
                  19: [2, 10],
                  29: [2, 10],
                  34: [2, 10],
                  39: [2, 10],
                  44: [2, 10],
                  47: [2, 10],
                  48: [2, 10],
                  51: [2, 10],
                  55: [2, 10],
                  60: [2, 10],
                },
                {
                  20: 46,
                  72: [1, 35],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  20: 47,
                  72: [1, 35],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  20: 48,
                  72: [1, 35],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  20: 42,
                  56: 49,
                  64: 43,
                  65: [1, 44],
                  72: [1, 35],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  33: [2, 78],
                  49: 50,
                  65: [2, 78],
                  72: [2, 78],
                  80: [2, 78],
                  81: [2, 78],
                  82: [2, 78],
                  83: [2, 78],
                  84: [2, 78],
                  85: [2, 78],
                },
                {
                  23: [2, 33],
                  33: [2, 33],
                  54: [2, 33],
                  65: [2, 33],
                  68: [2, 33],
                  72: [2, 33],
                  75: [2, 33],
                  80: [2, 33],
                  81: [2, 33],
                  82: [2, 33],
                  83: [2, 33],
                  84: [2, 33],
                  85: [2, 33],
                },
                {
                  23: [2, 34],
                  33: [2, 34],
                  54: [2, 34],
                  65: [2, 34],
                  68: [2, 34],
                  72: [2, 34],
                  75: [2, 34],
                  80: [2, 34],
                  81: [2, 34],
                  82: [2, 34],
                  83: [2, 34],
                  84: [2, 34],
                  85: [2, 34],
                },
                {
                  23: [2, 35],
                  33: [2, 35],
                  54: [2, 35],
                  65: [2, 35],
                  68: [2, 35],
                  72: [2, 35],
                  75: [2, 35],
                  80: [2, 35],
                  81: [2, 35],
                  82: [2, 35],
                  83: [2, 35],
                  84: [2, 35],
                  85: [2, 35],
                },
                {
                  23: [2, 36],
                  33: [2, 36],
                  54: [2, 36],
                  65: [2, 36],
                  68: [2, 36],
                  72: [2, 36],
                  75: [2, 36],
                  80: [2, 36],
                  81: [2, 36],
                  82: [2, 36],
                  83: [2, 36],
                  84: [2, 36],
                  85: [2, 36],
                },
                {
                  23: [2, 37],
                  33: [2, 37],
                  54: [2, 37],
                  65: [2, 37],
                  68: [2, 37],
                  72: [2, 37],
                  75: [2, 37],
                  80: [2, 37],
                  81: [2, 37],
                  82: [2, 37],
                  83: [2, 37],
                  84: [2, 37],
                  85: [2, 37],
                },
                {
                  23: [2, 38],
                  33: [2, 38],
                  54: [2, 38],
                  65: [2, 38],
                  68: [2, 38],
                  72: [2, 38],
                  75: [2, 38],
                  80: [2, 38],
                  81: [2, 38],
                  82: [2, 38],
                  83: [2, 38],
                  84: [2, 38],
                  85: [2, 38],
                },
                {
                  23: [2, 39],
                  33: [2, 39],
                  54: [2, 39],
                  65: [2, 39],
                  68: [2, 39],
                  72: [2, 39],
                  75: [2, 39],
                  80: [2, 39],
                  81: [2, 39],
                  82: [2, 39],
                  83: [2, 39],
                  84: [2, 39],
                  85: [2, 39],
                },
                {
                  23: [2, 43],
                  33: [2, 43],
                  54: [2, 43],
                  65: [2, 43],
                  68: [2, 43],
                  72: [2, 43],
                  75: [2, 43],
                  80: [2, 43],
                  81: [2, 43],
                  82: [2, 43],
                  83: [2, 43],
                  84: [2, 43],
                  85: [2, 43],
                  87: [1, 51],
                },
                { 72: [1, 35], 86: 52 },
                {
                  23: [2, 45],
                  33: [2, 45],
                  54: [2, 45],
                  65: [2, 45],
                  68: [2, 45],
                  72: [2, 45],
                  75: [2, 45],
                  80: [2, 45],
                  81: [2, 45],
                  82: [2, 45],
                  83: [2, 45],
                  84: [2, 45],
                  85: [2, 45],
                  87: [2, 45],
                },
                {
                  52: 53,
                  54: [2, 82],
                  65: [2, 82],
                  72: [2, 82],
                  80: [2, 82],
                  81: [2, 82],
                  82: [2, 82],
                  83: [2, 82],
                  84: [2, 82],
                  85: [2, 82],
                },
                {
                  25: 54,
                  38: 56,
                  39: [1, 58],
                  43: 57,
                  44: [1, 59],
                  45: 55,
                  47: [2, 54],
                },
                { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] },
                { 13: 63, 15: [1, 20], 18: [1, 62] },
                { 15: [2, 48], 18: [2, 48] },
                {
                  33: [2, 86],
                  57: 64,
                  65: [2, 86],
                  72: [2, 86],
                  80: [2, 86],
                  81: [2, 86],
                  82: [2, 86],
                  83: [2, 86],
                  84: [2, 86],
                  85: [2, 86],
                },
                {
                  33: [2, 40],
                  65: [2, 40],
                  72: [2, 40],
                  80: [2, 40],
                  81: [2, 40],
                  82: [2, 40],
                  83: [2, 40],
                  84: [2, 40],
                  85: [2, 40],
                },
                {
                  33: [2, 41],
                  65: [2, 41],
                  72: [2, 41],
                  80: [2, 41],
                  81: [2, 41],
                  82: [2, 41],
                  83: [2, 41],
                  84: [2, 41],
                  85: [2, 41],
                },
                {
                  20: 65,
                  72: [1, 35],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                { 26: 66, 47: [1, 67] },
                {
                  30: 68,
                  33: [2, 58],
                  65: [2, 58],
                  72: [2, 58],
                  75: [2, 58],
                  80: [2, 58],
                  81: [2, 58],
                  82: [2, 58],
                  83: [2, 58],
                  84: [2, 58],
                  85: [2, 58],
                },
                {
                  33: [2, 64],
                  35: 69,
                  65: [2, 64],
                  72: [2, 64],
                  75: [2, 64],
                  80: [2, 64],
                  81: [2, 64],
                  82: [2, 64],
                  83: [2, 64],
                  84: [2, 64],
                  85: [2, 64],
                },
                {
                  21: 70,
                  23: [2, 50],
                  65: [2, 50],
                  72: [2, 50],
                  80: [2, 50],
                  81: [2, 50],
                  82: [2, 50],
                  83: [2, 50],
                  84: [2, 50],
                  85: [2, 50],
                },
                {
                  33: [2, 90],
                  61: 71,
                  65: [2, 90],
                  72: [2, 90],
                  80: [2, 90],
                  81: [2, 90],
                  82: [2, 90],
                  83: [2, 90],
                  84: [2, 90],
                  85: [2, 90],
                },
                {
                  20: 75,
                  33: [2, 80],
                  50: 72,
                  63: 73,
                  64: 76,
                  65: [1, 44],
                  69: 74,
                  70: 77,
                  71: 78,
                  72: [1, 79],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                { 72: [1, 80] },
                {
                  23: [2, 42],
                  33: [2, 42],
                  54: [2, 42],
                  65: [2, 42],
                  68: [2, 42],
                  72: [2, 42],
                  75: [2, 42],
                  80: [2, 42],
                  81: [2, 42],
                  82: [2, 42],
                  83: [2, 42],
                  84: [2, 42],
                  85: [2, 42],
                  87: [1, 51],
                },
                {
                  20: 75,
                  53: 81,
                  54: [2, 84],
                  63: 82,
                  64: 76,
                  65: [1, 44],
                  69: 83,
                  70: 77,
                  71: 78,
                  72: [1, 79],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                { 26: 84, 47: [1, 67] },
                { 47: [2, 55] },
                {
                  4: 85,
                  6: 3,
                  14: [2, 46],
                  15: [2, 46],
                  19: [2, 46],
                  29: [2, 46],
                  34: [2, 46],
                  39: [2, 46],
                  44: [2, 46],
                  47: [2, 46],
                  48: [2, 46],
                  51: [2, 46],
                  55: [2, 46],
                  60: [2, 46],
                },
                { 47: [2, 20] },
                {
                  20: 86,
                  72: [1, 35],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  4: 87,
                  6: 3,
                  14: [2, 46],
                  15: [2, 46],
                  19: [2, 46],
                  29: [2, 46],
                  34: [2, 46],
                  47: [2, 46],
                  48: [2, 46],
                  51: [2, 46],
                  55: [2, 46],
                  60: [2, 46],
                },
                { 26: 88, 47: [1, 67] },
                { 47: [2, 57] },
                {
                  5: [2, 11],
                  14: [2, 11],
                  15: [2, 11],
                  19: [2, 11],
                  29: [2, 11],
                  34: [2, 11],
                  39: [2, 11],
                  44: [2, 11],
                  47: [2, 11],
                  48: [2, 11],
                  51: [2, 11],
                  55: [2, 11],
                  60: [2, 11],
                },
                { 15: [2, 49], 18: [2, 49] },
                {
                  20: 75,
                  33: [2, 88],
                  58: 89,
                  63: 90,
                  64: 76,
                  65: [1, 44],
                  69: 91,
                  70: 77,
                  71: 78,
                  72: [1, 79],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  65: [2, 94],
                  66: 92,
                  68: [2, 94],
                  72: [2, 94],
                  80: [2, 94],
                  81: [2, 94],
                  82: [2, 94],
                  83: [2, 94],
                  84: [2, 94],
                  85: [2, 94],
                },
                {
                  5: [2, 25],
                  14: [2, 25],
                  15: [2, 25],
                  19: [2, 25],
                  29: [2, 25],
                  34: [2, 25],
                  39: [2, 25],
                  44: [2, 25],
                  47: [2, 25],
                  48: [2, 25],
                  51: [2, 25],
                  55: [2, 25],
                  60: [2, 25],
                },
                {
                  20: 93,
                  72: [1, 35],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  20: 75,
                  31: 94,
                  33: [2, 60],
                  63: 95,
                  64: 76,
                  65: [1, 44],
                  69: 96,
                  70: 77,
                  71: 78,
                  72: [1, 79],
                  75: [2, 60],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  20: 75,
                  33: [2, 66],
                  36: 97,
                  63: 98,
                  64: 76,
                  65: [1, 44],
                  69: 99,
                  70: 77,
                  71: 78,
                  72: [1, 79],
                  75: [2, 66],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  20: 75,
                  22: 100,
                  23: [2, 52],
                  63: 101,
                  64: 76,
                  65: [1, 44],
                  69: 102,
                  70: 77,
                  71: 78,
                  72: [1, 79],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  20: 75,
                  33: [2, 92],
                  62: 103,
                  63: 104,
                  64: 76,
                  65: [1, 44],
                  69: 105,
                  70: 77,
                  71: 78,
                  72: [1, 79],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                { 33: [1, 106] },
                {
                  33: [2, 79],
                  65: [2, 79],
                  72: [2, 79],
                  80: [2, 79],
                  81: [2, 79],
                  82: [2, 79],
                  83: [2, 79],
                  84: [2, 79],
                  85: [2, 79],
                },
                { 33: [2, 81] },
                {
                  23: [2, 27],
                  33: [2, 27],
                  54: [2, 27],
                  65: [2, 27],
                  68: [2, 27],
                  72: [2, 27],
                  75: [2, 27],
                  80: [2, 27],
                  81: [2, 27],
                  82: [2, 27],
                  83: [2, 27],
                  84: [2, 27],
                  85: [2, 27],
                },
                {
                  23: [2, 28],
                  33: [2, 28],
                  54: [2, 28],
                  65: [2, 28],
                  68: [2, 28],
                  72: [2, 28],
                  75: [2, 28],
                  80: [2, 28],
                  81: [2, 28],
                  82: [2, 28],
                  83: [2, 28],
                  84: [2, 28],
                  85: [2, 28],
                },
                {
                  23: [2, 30],
                  33: [2, 30],
                  54: [2, 30],
                  68: [2, 30],
                  71: 107,
                  72: [1, 108],
                  75: [2, 30],
                },
                {
                  23: [2, 98],
                  33: [2, 98],
                  54: [2, 98],
                  68: [2, 98],
                  72: [2, 98],
                  75: [2, 98],
                },
                {
                  23: [2, 45],
                  33: [2, 45],
                  54: [2, 45],
                  65: [2, 45],
                  68: [2, 45],
                  72: [2, 45],
                  73: [1, 109],
                  75: [2, 45],
                  80: [2, 45],
                  81: [2, 45],
                  82: [2, 45],
                  83: [2, 45],
                  84: [2, 45],
                  85: [2, 45],
                  87: [2, 45],
                },
                {
                  23: [2, 44],
                  33: [2, 44],
                  54: [2, 44],
                  65: [2, 44],
                  68: [2, 44],
                  72: [2, 44],
                  75: [2, 44],
                  80: [2, 44],
                  81: [2, 44],
                  82: [2, 44],
                  83: [2, 44],
                  84: [2, 44],
                  85: [2, 44],
                  87: [2, 44],
                },
                { 54: [1, 110] },
                {
                  54: [2, 83],
                  65: [2, 83],
                  72: [2, 83],
                  80: [2, 83],
                  81: [2, 83],
                  82: [2, 83],
                  83: [2, 83],
                  84: [2, 83],
                  85: [2, 83],
                },
                { 54: [2, 85] },
                {
                  5: [2, 13],
                  14: [2, 13],
                  15: [2, 13],
                  19: [2, 13],
                  29: [2, 13],
                  34: [2, 13],
                  39: [2, 13],
                  44: [2, 13],
                  47: [2, 13],
                  48: [2, 13],
                  51: [2, 13],
                  55: [2, 13],
                  60: [2, 13],
                },
                {
                  38: 56,
                  39: [1, 58],
                  43: 57,
                  44: [1, 59],
                  45: 112,
                  46: 111,
                  47: [2, 76],
                },
                {
                  33: [2, 70],
                  40: 113,
                  65: [2, 70],
                  72: [2, 70],
                  75: [2, 70],
                  80: [2, 70],
                  81: [2, 70],
                  82: [2, 70],
                  83: [2, 70],
                  84: [2, 70],
                  85: [2, 70],
                },
                { 47: [2, 18] },
                {
                  5: [2, 14],
                  14: [2, 14],
                  15: [2, 14],
                  19: [2, 14],
                  29: [2, 14],
                  34: [2, 14],
                  39: [2, 14],
                  44: [2, 14],
                  47: [2, 14],
                  48: [2, 14],
                  51: [2, 14],
                  55: [2, 14],
                  60: [2, 14],
                },
                { 33: [1, 114] },
                {
                  33: [2, 87],
                  65: [2, 87],
                  72: [2, 87],
                  80: [2, 87],
                  81: [2, 87],
                  82: [2, 87],
                  83: [2, 87],
                  84: [2, 87],
                  85: [2, 87],
                },
                { 33: [2, 89] },
                {
                  20: 75,
                  63: 116,
                  64: 76,
                  65: [1, 44],
                  67: 115,
                  68: [2, 96],
                  69: 117,
                  70: 77,
                  71: 78,
                  72: [1, 79],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                { 33: [1, 118] },
                { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] },
                {
                  33: [2, 59],
                  65: [2, 59],
                  72: [2, 59],
                  75: [2, 59],
                  80: [2, 59],
                  81: [2, 59],
                  82: [2, 59],
                  83: [2, 59],
                  84: [2, 59],
                  85: [2, 59],
                },
                { 33: [2, 61], 75: [2, 61] },
                { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] },
                {
                  33: [2, 65],
                  65: [2, 65],
                  72: [2, 65],
                  75: [2, 65],
                  80: [2, 65],
                  81: [2, 65],
                  82: [2, 65],
                  83: [2, 65],
                  84: [2, 65],
                  85: [2, 65],
                },
                { 33: [2, 67], 75: [2, 67] },
                { 23: [1, 124] },
                {
                  23: [2, 51],
                  65: [2, 51],
                  72: [2, 51],
                  80: [2, 51],
                  81: [2, 51],
                  82: [2, 51],
                  83: [2, 51],
                  84: [2, 51],
                  85: [2, 51],
                },
                { 23: [2, 53] },
                { 33: [1, 125] },
                {
                  33: [2, 91],
                  65: [2, 91],
                  72: [2, 91],
                  80: [2, 91],
                  81: [2, 91],
                  82: [2, 91],
                  83: [2, 91],
                  84: [2, 91],
                  85: [2, 91],
                },
                { 33: [2, 93] },
                {
                  5: [2, 22],
                  14: [2, 22],
                  15: [2, 22],
                  19: [2, 22],
                  29: [2, 22],
                  34: [2, 22],
                  39: [2, 22],
                  44: [2, 22],
                  47: [2, 22],
                  48: [2, 22],
                  51: [2, 22],
                  55: [2, 22],
                  60: [2, 22],
                },
                {
                  23: [2, 99],
                  33: [2, 99],
                  54: [2, 99],
                  68: [2, 99],
                  72: [2, 99],
                  75: [2, 99],
                },
                { 73: [1, 109] },
                {
                  20: 75,
                  63: 126,
                  64: 76,
                  65: [1, 44],
                  72: [1, 35],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  5: [2, 23],
                  14: [2, 23],
                  15: [2, 23],
                  19: [2, 23],
                  29: [2, 23],
                  34: [2, 23],
                  39: [2, 23],
                  44: [2, 23],
                  47: [2, 23],
                  48: [2, 23],
                  51: [2, 23],
                  55: [2, 23],
                  60: [2, 23],
                },
                { 47: [2, 19] },
                { 47: [2, 77] },
                {
                  20: 75,
                  33: [2, 72],
                  41: 127,
                  63: 128,
                  64: 76,
                  65: [1, 44],
                  69: 129,
                  70: 77,
                  71: 78,
                  72: [1, 79],
                  75: [2, 72],
                  78: 26,
                  79: 27,
                  80: [1, 28],
                  81: [1, 29],
                  82: [1, 30],
                  83: [1, 31],
                  84: [1, 32],
                  85: [1, 34],
                  86: 33,
                },
                {
                  5: [2, 24],
                  14: [2, 24],
                  15: [2, 24],
                  19: [2, 24],
                  29: [2, 24],
                  34: [2, 24],
                  39: [2, 24],
                  44: [2, 24],
                  47: [2, 24],
                  48: [2, 24],
                  51: [2, 24],
                  55: [2, 24],
                  60: [2, 24],
                },
                { 68: [1, 130] },
                {
                  65: [2, 95],
                  68: [2, 95],
                  72: [2, 95],
                  80: [2, 95],
                  81: [2, 95],
                  82: [2, 95],
                  83: [2, 95],
                  84: [2, 95],
                  85: [2, 95],
                },
                { 68: [2, 97] },
                {
                  5: [2, 21],
                  14: [2, 21],
                  15: [2, 21],
                  19: [2, 21],
                  29: [2, 21],
                  34: [2, 21],
                  39: [2, 21],
                  44: [2, 21],
                  47: [2, 21],
                  48: [2, 21],
                  51: [2, 21],
                  55: [2, 21],
                  60: [2, 21],
                },
                { 33: [1, 131] },
                { 33: [2, 63] },
                { 72: [1, 133], 76: 132 },
                { 33: [1, 134] },
                { 33: [2, 69] },
                { 15: [2, 12] },
                {
                  14: [2, 26],
                  15: [2, 26],
                  19: [2, 26],
                  29: [2, 26],
                  34: [2, 26],
                  47: [2, 26],
                  48: [2, 26],
                  51: [2, 26],
                  55: [2, 26],
                  60: [2, 26],
                },
                {
                  23: [2, 31],
                  33: [2, 31],
                  54: [2, 31],
                  68: [2, 31],
                  72: [2, 31],
                  75: [2, 31],
                },
                { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] },
                {
                  33: [2, 71],
                  65: [2, 71],
                  72: [2, 71],
                  75: [2, 71],
                  80: [2, 71],
                  81: [2, 71],
                  82: [2, 71],
                  83: [2, 71],
                  84: [2, 71],
                  85: [2, 71],
                },
                { 33: [2, 73], 75: [2, 73] },
                {
                  23: [2, 29],
                  33: [2, 29],
                  54: [2, 29],
                  65: [2, 29],
                  68: [2, 29],
                  72: [2, 29],
                  75: [2, 29],
                  80: [2, 29],
                  81: [2, 29],
                  82: [2, 29],
                  83: [2, 29],
                  84: [2, 29],
                  85: [2, 29],
                },
                {
                  14: [2, 15],
                  15: [2, 15],
                  19: [2, 15],
                  29: [2, 15],
                  34: [2, 15],
                  39: [2, 15],
                  44: [2, 15],
                  47: [2, 15],
                  48: [2, 15],
                  51: [2, 15],
                  55: [2, 15],
                  60: [2, 15],
                },
                { 72: [1, 138], 77: [1, 137] },
                { 72: [2, 100], 77: [2, 100] },
                {
                  14: [2, 16],
                  15: [2, 16],
                  19: [2, 16],
                  29: [2, 16],
                  34: [2, 16],
                  44: [2, 16],
                  47: [2, 16],
                  48: [2, 16],
                  51: [2, 16],
                  55: [2, 16],
                  60: [2, 16],
                },
                { 33: [1, 139] },
                { 33: [2, 75] },
                { 33: [2, 32] },
                { 72: [2, 101], 77: [2, 101] },
                {
                  14: [2, 17],
                  15: [2, 17],
                  19: [2, 17],
                  29: [2, 17],
                  34: [2, 17],
                  39: [2, 17],
                  44: [2, 17],
                  47: [2, 17],
                  48: [2, 17],
                  51: [2, 17],
                  55: [2, 17],
                  60: [2, 17],
                },
              ],
              defaultActions: {
                4: [2, 1],
                55: [2, 55],
                57: [2, 20],
                61: [2, 57],
                74: [2, 81],
                83: [2, 85],
                87: [2, 18],
                91: [2, 89],
                102: [2, 53],
                105: [2, 93],
                111: [2, 19],
                112: [2, 77],
                117: [2, 97],
                120: [2, 63],
                123: [2, 69],
                124: [2, 12],
                136: [2, 75],
                137: [2, 32],
              },
              parseError: function (a, b) {
                throw new Error(a);
              },
              parse: function (a) {
                function b() {
                  var a;
                  return (
                    (a = c.lexer.lex() || 1),
                    "number" != typeof a && (a = c.symbols_[a] || a),
                    a
                  );
                }
                var c = this,
                  d = [0],
                  e = [null],
                  f = [],
                  g = this.table,
                  h = "",
                  i = 0,
                  j = 0,
                  k = 0;
                this.lexer.setInput(a),
                  (this.lexer.yy = this.yy),
                  (this.yy.lexer = this.lexer),
                  (this.yy.parser = this),
                  "undefined" == typeof this.lexer.yylloc &&
                    (this.lexer.yylloc = {});
                var l = this.lexer.yylloc;
                f.push(l);
                var m = this.lexer.options && this.lexer.options.ranges;
                "function" == typeof this.yy.parseError &&
                  (this.parseError = this.yy.parseError);
                for (var n, o, p, q, r, s, t, u, v, w = {}; ; ) {
                  if (
                    ((p = d[d.length - 1]),
                    this.defaultActions[p]
                      ? (q = this.defaultActions[p])
                      : ((null !== n && "undefined" != typeof n) || (n = b()),
                        (q = g[p] && g[p][n])),
                    "undefined" == typeof q || !q.length || !q[0])
                  ) {
                    var x = "";
                    if (!k) {
                      v = [];
                      for (s in g[p])
                        this.terminals_[s] &&
                          s > 2 &&
                          v.push("'" + this.terminals_[s] + "'");
                      (x = this.lexer.showPosition
                        ? "Parse error on line " +
                          (i + 1) +
                          ":\n" +
                          this.lexer.showPosition() +
                          "\nExpecting " +
                          v.join(", ") +
                          ", got '" +
                          (this.terminals_[n] || n) +
                          "'"
                        : "Parse error on line " +
                          (i + 1) +
                          ": Unexpected " +
                          (1 == n
                            ? "end of input"
                            : "'" + (this.terminals_[n] || n) + "'")),
                        this.parseError(x, {
                          text: this.lexer.match,
                          token: this.terminals_[n] || n,
                          line: this.lexer.yylineno,
                          loc: l,
                          expected: v,
                        });
                    }
                  }
                  if (q[0] instanceof Array && q.length > 1)
                    throw new Error(
                      "Parse Error: multiple actions possible at state: " +
                        p +
                        ", token: " +
                        n
                    );
                  switch (q[0]) {
                    case 1:
                      d.push(n),
                        e.push(this.lexer.yytext),
                        f.push(this.lexer.yylloc),
                        d.push(q[1]),
                        (n = null),
                        o
                          ? ((n = o), (o = null))
                          : ((j = this.lexer.yyleng),
                            (h = this.lexer.yytext),
                            (i = this.lexer.yylineno),
                            (l = this.lexer.yylloc),
                            k > 0 && k--);
                      break;
                    case 2:
                      if (
                        ((t = this.productions_[q[1]][1]),
                        (w.$ = e[e.length - t]),
                        (w._$ = {
                          first_line: f[f.length - (t || 1)].first_line,
                          last_line: f[f.length - 1].last_line,
                          first_column: f[f.length - (t || 1)].first_column,
                          last_column: f[f.length - 1].last_column,
                        }),
                        m &&
                          (w._$.range = [
                            f[f.length - (t || 1)].range[0],
                            f[f.length - 1].range[1],
                          ]),
                        (r = this.performAction.call(
                          w,
                          h,
                          j,
                          i,
                          this.yy,
                          q[1],
                          e,
                          f
                        )),
                        "undefined" != typeof r)
                      )
                        return r;
                      t &&
                        ((d = d.slice(0, -1 * t * 2)),
                        (e = e.slice(0, -1 * t)),
                        (f = f.slice(0, -1 * t))),
                        d.push(this.productions_[q[1]][0]),
                        e.push(w.$),
                        f.push(w._$),
                        (u = g[d[d.length - 2]][d[d.length - 1]]),
                        d.push(u);
                      break;
                    case 3:
                      return !0;
                  }
                }
                return !0;
              },
            },
            c = (function () {
              var a = {
                EOF: 1,
                parseError: function (a, b) {
                  if (!this.yy.parser) throw new Error(a);
                  this.yy.parser.parseError(a, b);
                },
                setInput: function (a) {
                  return (
                    (this._input = a),
                    (this._more = this._less = this.done = !1),
                    (this.yylineno = this.yyleng = 0),
                    (this.yytext = this.matched = this.match = ""),
                    (this.conditionStack = ["INITIAL"]),
                    (this.yylloc = {
                      first_line: 1,
                      first_column: 0,
                      last_line: 1,
                      last_column: 0,
                    }),
                    this.options.ranges && (this.yylloc.range = [0, 0]),
                    (this.offset = 0),
                    this
                  );
                },
                input: function () {
                  var a = this._input[0];
                  (this.yytext += a),
                    this.yyleng++,
                    this.offset++,
                    (this.match += a),
                    (this.matched += a);
                  var b = a.match(/(?:\r\n?|\n).*/g);
                  return (
                    b
                      ? (this.yylineno++, this.yylloc.last_line++)
                      : this.yylloc.last_column++,
                    this.options.ranges && this.yylloc.range[1]++,
                    (this._input = this._input.slice(1)),
                    a
                  );
                },
                unput: function (a) {
                  var b = a.length,
                    c = a.split(/(?:\r\n?|\n)/g);
                  (this._input = a + this._input),
                    (this.yytext = this.yytext.substr(
                      0,
                      this.yytext.length - b - 1
                    )),
                    (this.offset -= b);
                  var d = this.match.split(/(?:\r\n?|\n)/g);
                  (this.match = this.match.substr(0, this.match.length - 1)),
                    (this.matched = this.matched.substr(
                      0,
                      this.matched.length - 1
                    )),
                    c.length - 1 && (this.yylineno -= c.length - 1);
                  var e = this.yylloc.range;
                  return (
                    (this.yylloc = {
                      first_line: this.yylloc.first_line,
                      last_line: this.yylineno + 1,
                      first_column: this.yylloc.first_column,
                      last_column: c
                        ? (c.length === d.length
                            ? this.yylloc.first_column
                            : 0) +
                          d[d.length - c.length].length -
                          c[0].length
                        : this.yylloc.first_column - b,
                    }),
                    this.options.ranges &&
                      (this.yylloc.range = [e[0], e[0] + this.yyleng - b]),
                    this
                  );
                },
                more: function () {
                  return (this._more = !0), this;
                },
                less: function (a) {
                  this.unput(this.match.slice(a));
                },
                pastInput: function () {
                  var a = this.matched.substr(
                    0,
                    this.matched.length - this.match.length
                  );
                  return (
                    (a.length > 20 ? "..." : "") +
                    a.substr(-20).replace(/\n/g, "")
                  );
                },
                upcomingInput: function () {
                  var a = this.match;
                  return (
                    a.length < 20 &&
                      (a += this._input.substr(0, 20 - a.length)),
                    (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(
                      /\n/g,
                      ""
                    )
                  );
                },
                showPosition: function () {
                  var a = this.pastInput(),
                    b = new Array(a.length + 1).join("-");
                  return a + this.upcomingInput() + "\n" + b + "^";
                },
                next: function () {
                  if (this.done) return this.EOF;
                  this._input || (this.done = !0);
                  var a, b, c, d, e;
                  this._more || ((this.yytext = ""), (this.match = ""));
                  for (
                    var f = this._currentRules(), g = 0;
                    g < f.length &&
                    ((c = this._input.match(this.rules[f[g]])),
                    !c ||
                      (b && !(c[0].length > b[0].length)) ||
                      ((b = c), (d = g), this.options.flex));
                    g++
                  );
                  return b
                    ? ((e = b[0].match(/(?:\r\n?|\n).*/g)),
                      e && (this.yylineno += e.length),
                      (this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: e
                          ? e[e.length - 1].length -
                            e[e.length - 1].match(/\r?\n?/)[0].length
                          : this.yylloc.last_column + b[0].length,
                      }),
                      (this.yytext += b[0]),
                      (this.match += b[0]),
                      (this.matches = b),
                      (this.yyleng = this.yytext.length),
                      this.options.ranges &&
                        (this.yylloc.range = [
                          this.offset,
                          (this.offset += this.yyleng),
                        ]),
                      (this._more = !1),
                      (this._input = this._input.slice(b[0].length)),
                      (this.matched += b[0]),
                      (a = this.performAction.call(
                        this,
                        this.yy,
                        this,
                        f[d],
                        this.conditionStack[this.conditionStack.length - 1]
                      )),
                      this.done && this._input && (this.done = !1),
                      a ? a : void 0)
                    : "" === this._input
                    ? this.EOF
                    : this.parseError(
                        "Lexical error on line " +
                          (this.yylineno + 1) +
                          ". Unrecognized text.\n" +
                          this.showPosition(),
                        { text: "", token: null, line: this.yylineno }
                      );
                },
                lex: function () {
                  var a = this.next();
                  return "undefined" != typeof a ? a : this.lex();
                },
                begin: function (a) {
                  this.conditionStack.push(a);
                },
                popState: function () {
                  return this.conditionStack.pop();
                },
                _currentRules: function () {
                  return this.conditions[
                    this.conditionStack[this.conditionStack.length - 1]
                  ].rules;
                },
                topState: function () {
                  return this.conditionStack[this.conditionStack.length - 2];
                },
                pushState: function (a) {
                  this.begin(a);
                },
              };
              return (
                (a.options = {}),
                (a.performAction = function (a, b, c, d) {
                  function e(a, c) {
                    return (b.yytext = b.yytext.substr(a, b.yyleng - c));
                  }
                  switch (c) {
                    case 0:
                      if (
                        ("\\\\" === b.yytext.slice(-2)
                          ? (e(0, 1), this.begin("mu"))
                          : "\\" === b.yytext.slice(-1)
                          ? (e(0, 1), this.begin("emu"))
                          : this.begin("mu"),
                        b.yytext)
                      )
                        return 15;
                      break;
                    case 1:
                      return 15;
                    case 2:
                      return this.popState(), 15;
                    case 3:
                      return this.begin("raw"), 15;
                    case 4:
                      return (
                        this.popState(),
                        "raw" ===
                        this.conditionStack[this.conditionStack.length - 1]
                          ? 15
                          : ((b.yytext = b.yytext.substr(5, b.yyleng - 9)),
                            "END_RAW_BLOCK")
                      );
                    case 5:
                      return 15;
                    case 6:
                      return this.popState(), 14;
                    case 7:
                      return 65;
                    case 8:
                      return 68;
                    case 9:
                      return 19;
                    case 10:
                      return this.popState(), this.begin("raw"), 23;
                    case 11:
                      return 55;
                    case 12:
                      return 60;
                    case 13:
                      return 29;
                    case 14:
                      return 47;
                    case 15:
                      return this.popState(), 44;
                    case 16:
                      return this.popState(), 44;
                    case 17:
                      return 34;
                    case 18:
                      return 39;
                    case 19:
                      return 51;
                    case 20:
                      return 48;
                    case 21:
                      this.unput(b.yytext), this.popState(), this.begin("com");
                      break;
                    case 22:
                      return this.popState(), 14;
                    case 23:
                      return 48;
                    case 24:
                      return 73;
                    case 25:
                      return 72;
                    case 26:
                      return 72;
                    case 27:
                      return 87;
                    case 28:
                      break;
                    case 29:
                      return this.popState(), 54;
                    case 30:
                      return this.popState(), 33;
                    case 31:
                      return (b.yytext = e(1, 2).replace(/\\"/g, '"')), 80;
                    case 32:
                      return (b.yytext = e(1, 2).replace(/\\'/g, "'")), 80;
                    case 33:
                      return 85;
                    case 34:
                      return 82;
                    case 35:
                      return 82;
                    case 36:
                      return 83;
                    case 37:
                      return 84;
                    case 38:
                      return 81;
                    case 39:
                      return 75;
                    case 40:
                      return 77;
                    case 41:
                      return 72;
                    case 42:
                      return (
                        (b.yytext = b.yytext.replace(/\\([\\\]])/g, "$1")), 72
                      );
                    case 43:
                      return "INVALID";
                    case 44:
                      return 5;
                  }
                }),
                (a.rules = [
                  /^(?:[^\x00]*?(?=(\{\{)))/,
                  /^(?:[^\x00]+)/,
                  /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
                  /^(?:\{\{\{\{(?=[^\/]))/,
                  /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
                  /^(?:[^\x00]*?(?=(\{\{\{\{)))/,
                  /^(?:[\s\S]*?--(~)?\}\})/,
                  /^(?:\()/,
                  /^(?:\))/,
                  /^(?:\{\{\{\{)/,
                  /^(?:\}\}\}\})/,
                  /^(?:\{\{(~)?>)/,
                  /^(?:\{\{(~)?#>)/,
                  /^(?:\{\{(~)?#\*?)/,
                  /^(?:\{\{(~)?\/)/,
                  /^(?:\{\{(~)?\^\s*(~)?\}\})/,
                  /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
                  /^(?:\{\{(~)?\^)/,
                  /^(?:\{\{(~)?\s*else\b)/,
                  /^(?:\{\{(~)?\{)/,
                  /^(?:\{\{(~)?&)/,
                  /^(?:\{\{(~)?!--)/,
                  /^(?:\{\{(~)?![\s\S]*?\}\})/,
                  /^(?:\{\{(~)?\*?)/,
                  /^(?:=)/,
                  /^(?:\.\.)/,
                  /^(?:\.(?=([=~}\s\/.)|])))/,
                  /^(?:[\/.])/,
                  /^(?:\s+)/,
                  /^(?:\}(~)?\}\})/,
                  /^(?:(~)?\}\})/,
                  /^(?:"(\\["]|[^"])*")/,
                  /^(?:'(\\[']|[^'])*')/,
                  /^(?:@)/,
                  /^(?:true(?=([~}\s)])))/,
                  /^(?:false(?=([~}\s)])))/,
                  /^(?:undefined(?=([~}\s)])))/,
                  /^(?:null(?=([~}\s)])))/,
                  /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
                  /^(?:as\s+\|)/,
                  /^(?:\|)/,
                  /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
                  /^(?:\[(\\\]|[^\]])*\])/,
                  /^(?:.)/,
                  /^(?:$)/,
                ]),
                (a.conditions = {
                  mu: {
                    rules: [
                      7,
                      8,
                      9,
                      10,
                      11,
                      12,
                      13,
                      14,
                      15,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22,
                      23,
                      24,
                      25,
                      26,
                      27,
                      28,
                      29,
                      30,
                      31,
                      32,
                      33,
                      34,
                      35,
                      36,
                      37,
                      38,
                      39,
                      40,
                      41,
                      42,
                      43,
                      44,
                    ],
                    inclusive: !1,
                  },
                  emu: { rules: [2], inclusive: !1 },
                  com: { rules: [6], inclusive: !1 },
                  raw: { rules: [3, 4, 5], inclusive: !1 },
                  INITIAL: { rules: [0, 1, 44], inclusive: !0 },
                }),
                a
              );
            })();
          return (b.lexer = c), (a.prototype = b), (b.Parser = a), new a();
        })();
        (b.__esModule = !0), (b.default = c);
      },
      function (a, b, c) {
        "use strict";
        function d() {
          var a =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0];
          this.options = a;
        }
        function e(a, b, c) {
          void 0 === b && (b = a.length);
          var d = a[b - 1],
            e = a[b - 2];
          return d
            ? "ContentStatement" === d.type
              ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original)
              : void 0
            : c;
        }
        function f(a, b, c) {
          void 0 === b && (b = -1);
          var d = a[b + 1],
            e = a[b + 2];
          return d
            ? "ContentStatement" === d.type
              ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original)
              : void 0
            : c;
        }
        function g(a, b, c) {
          var d = a[null == b ? 0 : b + 1];
          if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
            var e = d.value;
            (d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, "")),
              (d.rightStripped = d.value !== e);
          }
        }
        function h(a, b, c) {
          var d = a[null == b ? a.length - 1 : b - 1];
          if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) {
            var e = d.value;
            return (
              (d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, "")),
              (d.leftStripped = d.value !== e),
              d.leftStripped
            );
          }
        }
        var i = c(1).default;
        b.__esModule = !0;
        var j = c(25),
          k = i(j);
        (d.prototype = new k.default()),
          (d.prototype.Program = function (a) {
            var b = !this.options.ignoreStandalone,
              c = !this.isRootSeen;
            this.isRootSeen = !0;
            for (var d = a.body, i = 0, j = d.length; i < j; i++) {
              var k = d[i],
                l = this.accept(k);
              if (l) {
                var m = e(d, i, c),
                  n = f(d, i, c),
                  o = l.openStandalone && m,
                  p = l.closeStandalone && n,
                  q = l.inlineStandalone && m && n;
                l.close && g(d, i, !0),
                  l.open && h(d, i, !0),
                  b &&
                    q &&
                    (g(d, i),
                    h(d, i) &&
                      "PartialStatement" === k.type &&
                      (k.indent = /([ \t]+$)/.exec(d[i - 1].original)[1])),
                  b && o && (g((k.program || k.inverse).body), h(d, i)),
                  b && p && (g(d, i), h((k.inverse || k.program).body));
              }
            }
            return a;
          }),
          (d.prototype.BlockStatement = d.prototype.DecoratorBlock = d.prototype.PartialBlockStatement = function (
            a
          ) {
            this.accept(a.program), this.accept(a.inverse);
            var b = a.program || a.inverse,
              c = a.program && a.inverse,
              d = c,
              i = c;
            if (c && c.chained)
              for (d = c.body[0].program; i.chained; )
                i = i.body[i.body.length - 1].program;
            var j = {
              open: a.openStrip.open,
              close: a.closeStrip.close,
              openStandalone: f(b.body),
              closeStandalone: e((d || b).body),
            };
            if ((a.openStrip.close && g(b.body, null, !0), c)) {
              var k = a.inverseStrip;
              k.open && h(b.body, null, !0),
                k.close && g(d.body, null, !0),
                a.closeStrip.open && h(i.body, null, !0),
                !this.options.ignoreStandalone &&
                  e(b.body) &&
                  f(d.body) &&
                  (h(b.body), g(d.body));
            } else a.closeStrip.open && h(b.body, null, !0);
            return j;
          }),
          (d.prototype.Decorator = d.prototype.MustacheStatement = function (
            a
          ) {
            return a.strip;
          }),
          (d.prototype.PartialStatement = d.prototype.CommentStatement = function (
            a
          ) {
            var b = a.strip || {};
            return { inlineStandalone: !0, open: b.open, close: b.close };
          }),
          (b.default = d),
          (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        function d() {
          this.parents = [];
        }
        function e(a) {
          this.acceptRequired(a, "path"),
            this.acceptArray(a.params),
            this.acceptKey(a, "hash");
        }
        function f(a) {
          e.call(this, a),
            this.acceptKey(a, "program"),
            this.acceptKey(a, "inverse");
        }
        function g(a) {
          this.acceptRequired(a, "name"),
            this.acceptArray(a.params),
            this.acceptKey(a, "hash");
        }
        var h = c(1).default;
        b.__esModule = !0;
        var i = c(6),
          j = h(i);
        (d.prototype = {
          constructor: d,
          mutating: !1,
          acceptKey: function (a, b) {
            var c = this.accept(a[b]);
            if (this.mutating) {
              if (c && !d.prototype[c.type])
                throw new j.default(
                  'Unexpected node type "' +
                    c.type +
                    '" found when accepting ' +
                    b +
                    " on " +
                    a.type
                );
              a[b] = c;
            }
          },
          acceptRequired: function (a, b) {
            if ((this.acceptKey(a, b), !a[b]))
              throw new j.default(a.type + " requires " + b);
          },
          acceptArray: function (a) {
            for (var b = 0, c = a.length; b < c; b++)
              this.acceptKey(a, b), a[b] || (a.splice(b, 1), b--, c--);
          },
          accept: function (a) {
            if (a) {
              if (!this[a.type])
                throw new j.default("Unknown type: " + a.type, a);
              this.current && this.parents.unshift(this.current),
                (this.current = a);
              var b = this[a.type](a);
              return (
                (this.current = this.parents.shift()),
                !this.mutating || b ? b : b !== !1 ? a : void 0
              );
            }
          },
          Program: function (a) {
            this.acceptArray(a.body);
          },
          MustacheStatement: e,
          Decorator: e,
          BlockStatement: f,
          DecoratorBlock: f,
          PartialStatement: g,
          PartialBlockStatement: function (a) {
            g.call(this, a), this.acceptKey(a, "program");
          },
          ContentStatement: function () {},
          CommentStatement: function () {},
          SubExpression: e,
          PathExpression: function () {},
          StringLiteral: function () {},
          NumberLiteral: function () {},
          BooleanLiteral: function () {},
          UndefinedLiteral: function () {},
          NullLiteral: function () {},
          Hash: function (a) {
            this.acceptArray(a.pairs);
          },
          HashPair: function (a) {
            this.acceptRequired(a, "value");
          },
        }),
          (b.default = d),
          (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        function d(a, b) {
          if (((b = b.path ? b.path.original : b), a.path.original !== b)) {
            var c = { loc: a.path.loc };
            throw new q.default(a.path.original + " doesn't match " + b, c);
          }
        }
        function e(a, b) {
          (this.source = a),
            (this.start = { line: b.first_line, column: b.first_column }),
            (this.end = { line: b.last_line, column: b.last_column });
        }
        function f(a) {
          return /^\[.*\]$/.test(a) ? a.substr(1, a.length - 2) : a;
        }
        function g(a, b) {
          return {
            open: "~" === a.charAt(2),
            close: "~" === b.charAt(b.length - 3),
          };
        }
        function h(a) {
          return a.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "");
        }
        function i(a, b, c) {
          c = this.locInfo(c);
          for (
            var d = a ? "@" : "", e = [], f = 0, g = "", h = 0, i = b.length;
            h < i;
            h++
          ) {
            var j = b[h].part,
              k = b[h].original !== j;
            if (
              ((d += (b[h].separator || "") + j),
              k || (".." !== j && "." !== j && "this" !== j))
            )
              e.push(j);
            else {
              if (e.length > 0)
                throw new q.default("Invalid path: " + d, { loc: c });
              ".." === j && (f++, (g += "../"));
            }
          }
          return {
            type: "PathExpression",
            data: a,
            depth: f,
            parts: e,
            original: d,
            loc: c,
          };
        }
        function j(a, b, c, d, e, f) {
          var g = d.charAt(3) || d.charAt(2),
            h = "{" !== g && "&" !== g,
            i = /\*/.test(d);
          return {
            type: i ? "Decorator" : "MustacheStatement",
            path: a,
            params: b,
            hash: c,
            escaped: h,
            strip: e,
            loc: this.locInfo(f),
          };
        }
        function k(a, b, c, e) {
          d(a, c), (e = this.locInfo(e));
          var f = { type: "Program", body: b, strip: {}, loc: e };
          return {
            type: "BlockStatement",
            path: a.path,
            params: a.params,
            hash: a.hash,
            program: f,
            openStrip: {},
            inverseStrip: {},
            closeStrip: {},
            loc: e,
          };
        }
        function l(a, b, c, e, f, g) {
          e && e.path && d(a, e);
          var h = /\*/.test(a.open);
          b.blockParams = a.blockParams;
          var i = void 0,
            j = void 0;
          if (c) {
            if (h)
              throw new q.default("Unexpected inverse block on decorator", c);
            c.chain && (c.program.body[0].closeStrip = e.strip),
              (j = c.strip),
              (i = c.program);
          }
          return (
            f && ((f = i), (i = b), (b = f)),
            {
              type: h ? "DecoratorBlock" : "BlockStatement",
              path: a.path,
              params: a.params,
              hash: a.hash,
              program: b,
              inverse: i,
              openStrip: a.strip,
              inverseStrip: j,
              closeStrip: e && e.strip,
              loc: this.locInfo(g),
            }
          );
        }
        function m(a, b) {
          if (!b && a.length) {
            var c = a[0].loc,
              d = a[a.length - 1].loc;
            c &&
              d &&
              (b = {
                source: c.source,
                start: { line: c.start.line, column: c.start.column },
                end: { line: d.end.line, column: d.end.column },
              });
          }
          return { type: "Program", body: a, strip: {}, loc: b };
        }
        function n(a, b, c, e) {
          return (
            d(a, c),
            {
              type: "PartialBlockStatement",
              name: a.path,
              params: a.params,
              hash: a.hash,
              program: b,
              openStrip: a.strip,
              closeStrip: c && c.strip,
              loc: this.locInfo(e),
            }
          );
        }
        var o = c(1).default;
        (b.__esModule = !0),
          (b.SourceLocation = e),
          (b.id = f),
          (b.stripFlags = g),
          (b.stripComment = h),
          (b.preparePath = i),
          (b.prepareMustache = j),
          (b.prepareRawBlock = k),
          (b.prepareBlock = l),
          (b.prepareProgram = m),
          (b.preparePartialBlock = n);
        var p = c(6),
          q = o(p);
      },
      function (a, b, c) {
        "use strict";
        function d() {}
        function e(a, b, c) {
          if (null == a || ("string" != typeof a && "Program" !== a.type))
            throw new k.default(
              "You must pass a string or Handlebars AST to Handlebars.precompile. You passed " +
                a
            );
          (b = b || {}),
            "data" in b || (b.data = !0),
            b.compat && (b.useDepths = !0);
          var d = c.parse(a, b),
            e = new c.Compiler().compile(d, b);
          return new c.JavaScriptCompiler().compile(e, b);
        }
        function f(a, b, c) {
          function d() {
            var d = c.parse(a, b),
              e = new c.Compiler().compile(d, b),
              f = new c.JavaScriptCompiler().compile(e, b, void 0, !0);
            return c.template(f);
          }
          function e(a, b) {
            return f || (f = d()), f.call(this, a, b);
          }
          if (
            (void 0 === b && (b = {}),
            null == a || ("string" != typeof a && "Program" !== a.type))
          )
            throw new k.default(
              "You must pass a string or Handlebars AST to Handlebars.compile. You passed " +
                a
            );
          "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
          var f = void 0;
          return (
            (e._setup = function (a) {
              return f || (f = d()), f._setup(a);
            }),
            (e._child = function (a, b, c, e) {
              return f || (f = d()), f._child(a, b, c, e);
            }),
            e
          );
        }
        function g(a, b) {
          if (a === b) return !0;
          if (l.isArray(a) && l.isArray(b) && a.length === b.length) {
            for (var c = 0; c < a.length; c++) if (!g(a[c], b[c])) return !1;
            return !0;
          }
        }
        function h(a) {
          if (!a.path.parts) {
            var b = a.path;
            a.path = {
              type: "PathExpression",
              data: !1,
              depth: 0,
              parts: [b.original + ""],
              original: b.original + "",
              loc: b.loc,
            };
          }
        }
        var i = c(1).default;
        (b.__esModule = !0),
          (b.Compiler = d),
          (b.precompile = e),
          (b.compile = f);
        var j = c(6),
          k = i(j),
          l = c(5),
          m = c(21),
          n = i(m),
          o = [].slice;
        d.prototype = {
          compiler: d,
          equals: function (a) {
            var b = this.opcodes.length;
            if (a.opcodes.length !== b) return !1;
            for (var c = 0; c < b; c++) {
              var d = this.opcodes[c],
                e = a.opcodes[c];
              if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1;
            }
            b = this.children.length;
            for (var c = 0; c < b; c++)
              if (!this.children[c].equals(a.children[c])) return !1;
            return !0;
          },
          guid: 0,
          compile: function (a, b) {
            (this.sourceNode = []),
              (this.opcodes = []),
              (this.children = []),
              (this.options = b),
              (this.stringParams = b.stringParams),
              (this.trackIds = b.trackIds),
              (b.blockParams = b.blockParams || []);
            var c = b.knownHelpers;
            if (
              ((b.knownHelpers = {
                helperMissing: !0,
                blockHelperMissing: !0,
                each: !0,
                if: !0,
                unless: !0,
                with: !0,
                log: !0,
                lookup: !0,
              }),
              c)
            )
              for (var d in c) d in c && (b.knownHelpers[d] = c[d]);
            return this.accept(a);
          },
          compileProgram: function (a) {
            var b = new this.compiler(),
              c = b.compile(a, this.options),
              d = this.guid++;
            return (
              (this.usePartial = this.usePartial || c.usePartial),
              (this.children[d] = c),
              (this.useDepths = this.useDepths || c.useDepths),
              d
            );
          },
          accept: function (a) {
            if (!this[a.type])
              throw new k.default("Unknown type: " + a.type, a);
            this.sourceNode.unshift(a);
            var b = this[a.type](a);
            return this.sourceNode.shift(), b;
          },
          Program: function (a) {
            this.options.blockParams.unshift(a.blockParams);
            for (var b = a.body, c = b.length, d = 0; d < c; d++)
              this.accept(b[d]);
            return (
              this.options.blockParams.shift(),
              (this.isSimple = 1 === c),
              (this.blockParams = a.blockParams ? a.blockParams.length : 0),
              this
            );
          },
          BlockStatement: function (a) {
            h(a);
            var b = a.program,
              c = a.inverse;
            (b = b && this.compileProgram(b)),
              (c = c && this.compileProgram(c));
            var d = this.classifySexpr(a);
            "helper" === d
              ? this.helperSexpr(a, b, c)
              : "simple" === d
              ? (this.simpleSexpr(a),
                this.opcode("pushProgram", b),
                this.opcode("pushProgram", c),
                this.opcode("emptyHash"),
                this.opcode("blockValue", a.path.original))
              : (this.ambiguousSexpr(a, b, c),
                this.opcode("pushProgram", b),
                this.opcode("pushProgram", c),
                this.opcode("emptyHash"),
                this.opcode("ambiguousBlockValue")),
              this.opcode("append");
          },
          DecoratorBlock: function (a) {
            var b = a.program && this.compileProgram(a.program),
              c = this.setupFullMustacheParams(a, b, void 0),
              d = a.path;
            (this.useDecorators = !0),
              this.opcode("registerDecorator", c.length, d.original);
          },
          PartialStatement: function (a) {
            this.usePartial = !0;
            var b = a.program;
            b && (b = this.compileProgram(a.program));
            var c = a.params;
            if (c.length > 1)
              throw new k.default(
                "Unsupported number of partial arguments: " + c.length,
                a
              );
            c.length ||
              (this.options.explicitPartialContext
                ? this.opcode("pushLiteral", "undefined")
                : c.push({ type: "PathExpression", parts: [], depth: 0 }));
            var d = a.name.original,
              e = "SubExpression" === a.name.type;
            e && this.accept(a.name),
              this.setupFullMustacheParams(a, b, void 0, !0);
            var f = a.indent || "";
            this.options.preventIndent &&
              f &&
              (this.opcode("appendContent", f), (f = "")),
              this.opcode("invokePartial", e, d, f),
              this.opcode("append");
          },
          PartialBlockStatement: function (a) {
            this.PartialStatement(a);
          },
          MustacheStatement: function (a) {
            this.SubExpression(a),
              a.escaped && !this.options.noEscape
                ? this.opcode("appendEscaped")
                : this.opcode("append");
          },
          Decorator: function (a) {
            this.DecoratorBlock(a);
          },
          ContentStatement: function (a) {
            a.value && this.opcode("appendContent", a.value);
          },
          CommentStatement: function () {},
          SubExpression: function (a) {
            h(a);
            var b = this.classifySexpr(a);
            "simple" === b
              ? this.simpleSexpr(a)
              : "helper" === b
              ? this.helperSexpr(a)
              : this.ambiguousSexpr(a);
          },
          ambiguousSexpr: function (a, b, c) {
            var d = a.path,
              e = d.parts[0],
              f = null != b || null != c;
            this.opcode("getContext", d.depth),
              this.opcode("pushProgram", b),
              this.opcode("pushProgram", c),
              (d.strict = !0),
              this.accept(d),
              this.opcode("invokeAmbiguous", e, f);
          },
          simpleSexpr: function (a) {
            var b = a.path;
            (b.strict = !0),
              this.accept(b),
              this.opcode("resolvePossibleLambda");
          },
          helperSexpr: function (a, b, c) {
            var d = this.setupFullMustacheParams(a, b, c),
              e = a.path,
              f = e.parts[0];
            if (this.options.knownHelpers[f])
              this.opcode("invokeKnownHelper", d.length, f);
            else {
              if (this.options.knownHelpersOnly)
                throw new k.default(
                  "You specified knownHelpersOnly, but used the unknown helper " +
                    f,
                  a
                );
              (e.strict = !0),
                (e.falsy = !0),
                this.accept(e),
                this.opcode(
                  "invokeHelper",
                  d.length,
                  e.original,
                  n.default.helpers.simpleId(e)
                );
            }
          },
          PathExpression: function (a) {
            this.addDepth(a.depth), this.opcode("getContext", a.depth);
            var b = a.parts[0],
              c = n.default.helpers.scopedId(a),
              d = !a.depth && !c && this.blockParamIndex(b);
            d
              ? this.opcode("lookupBlockParam", d, a.parts)
              : b
              ? a.data
                ? ((this.options.data = !0),
                  this.opcode("lookupData", a.depth, a.parts, a.strict))
                : this.opcode("lookupOnContext", a.parts, a.falsy, a.strict, c)
              : this.opcode("pushContext");
          },
          StringLiteral: function (a) {
            this.opcode("pushString", a.value);
          },
          NumberLiteral: function (a) {
            this.opcode("pushLiteral", a.value);
          },
          BooleanLiteral: function (a) {
            this.opcode("pushLiteral", a.value);
          },
          UndefinedLiteral: function () {
            this.opcode("pushLiteral", "undefined");
          },
          NullLiteral: function () {
            this.opcode("pushLiteral", "null");
          },
          Hash: function (a) {
            var b = a.pairs,
              c = 0,
              d = b.length;
            for (this.opcode("pushHash"); c < d; c++)
              this.pushParam(b[c].value);
            for (; c--; ) this.opcode("assignToHash", b[c].key);
            this.opcode("popHash");
          },
          opcode: function (a) {
            this.opcodes.push({
              opcode: a,
              args: o.call(arguments, 1),
              loc: this.sourceNode[0].loc,
            });
          },
          addDepth: function (a) {
            a && (this.useDepths = !0);
          },
          classifySexpr: function (a) {
            var b = n.default.helpers.simpleId(a.path),
              c = b && !!this.blockParamIndex(a.path.parts[0]),
              d = !c && n.default.helpers.helperExpression(a),
              e = !c && (d || b);
            if (e && !d) {
              var f = a.path.parts[0],
                g = this.options;
              g.knownHelpers[f] ? (d = !0) : g.knownHelpersOnly && (e = !1);
            }
            return d ? "helper" : e ? "ambiguous" : "simple";
          },
          pushParams: function (a) {
            for (var b = 0, c = a.length; b < c; b++) this.pushParam(a[b]);
          },
          pushParam: function (a) {
            var b = null != a.value ? a.value : a.original || "";
            if (this.stringParams)
              b.replace &&
                (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")),
                a.depth && this.addDepth(a.depth),
                this.opcode("getContext", a.depth || 0),
                this.opcode("pushStringParam", b, a.type),
                "SubExpression" === a.type && this.accept(a);
            else {
              if (this.trackIds) {
                var c = void 0;
                if (
                  (!a.parts ||
                    n.default.helpers.scopedId(a) ||
                    a.depth ||
                    (c = this.blockParamIndex(a.parts[0])),
                  c)
                ) {
                  var d = a.parts.slice(1).join(".");
                  this.opcode("pushId", "BlockParam", c, d);
                } else
                  (b = a.original || b),
                    b.replace &&
                      (b = b
                        .replace(/^this(?:\.|$)/, "")
                        .replace(/^\.\//, "")
                        .replace(/^\.$/, "")),
                    this.opcode("pushId", a.type, b);
              }
              this.accept(a);
            }
          },
          setupFullMustacheParams: function (a, b, c, d) {
            var e = a.params;
            return (
              this.pushParams(e),
              this.opcode("pushProgram", b),
              this.opcode("pushProgram", c),
              a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d),
              e
            );
          },
          blockParamIndex: function (a) {
            for (var b = 0, c = this.options.blockParams.length; b < c; b++) {
              var d = this.options.blockParams[b],
                e = d && l.indexOf(d, a);
              if (d && e >= 0) return [b, e];
            }
          },
        };
      },
      function (a, b, c) {
        "use strict";
        function d(a) {
          this.value = a;
        }
        function e() {}
        function f(a, b, c, d) {
          var e = b.popStack(),
            f = 0,
            g = c.length;
          for (a && g--; f < g; f++) e = b.nameLookup(e, c[f], d);
          return a
            ? [
                b.aliasable("container.strict"),
                "(",
                e,
                ", ",
                b.quotedString(c[f]),
                ")",
              ]
            : e;
        }
        var g = c(1).default;
        b.__esModule = !0;
        var h = c(4),
          i = c(6),
          j = g(i),
          k = c(5),
          l = c(29),
          m = g(l);
        (e.prototype = {
          nameLookup: function (a, b) {
            return e.isValidJavaScriptVariableName(b)
              ? [a, ".", b]
              : [a, "[", JSON.stringify(b), "]"];
          },
          depthedLookup: function (a) {
            return [this.aliasable("container.lookup"), '(depths, "', a, '")'];
          },
          compilerInfo: function () {
            var a = h.COMPILER_REVISION,
              b = h.REVISION_CHANGES[a];
            return [a, b];
          },
          appendToBuffer: function (a, b, c) {
            return (
              k.isArray(a) || (a = [a]),
              (a = this.source.wrap(a, b)),
              this.environment.isSimple
                ? ["return ", a, ";"]
                : c
                ? ["buffer += ", a, ";"]
                : ((a.appendToBuffer = !0), a)
            );
          },
          initializeBuffer: function () {
            return this.quotedString("");
          },
          compile: function (a, b, c, d) {
            (this.environment = a),
              (this.options = b),
              (this.stringParams = this.options.stringParams),
              (this.trackIds = this.options.trackIds),
              (this.precompile = !d),
              (this.name = this.environment.name),
              (this.isChild = !!c),
              (this.context = c || {
                decorators: [],
                programs: [],
                environments: [],
              }),
              this.preamble(),
              (this.stackSlot = 0),
              (this.stackVars = []),
              (this.aliases = {}),
              (this.registers = { list: [] }),
              (this.hashes = []),
              (this.compileStack = []),
              (this.inlineStack = []),
              (this.blockParams = []),
              this.compileChildren(a, b),
              (this.useDepths =
                this.useDepths ||
                a.useDepths ||
                a.useDecorators ||
                this.options.compat),
              (this.useBlockParams = this.useBlockParams || a.useBlockParams);
            var e = a.opcodes,
              f = void 0,
              g = void 0,
              h = void 0,
              i = void 0;
            for (h = 0, i = e.length; h < i; h++)
              (f = e[h]),
                (this.source.currentLocation = f.loc),
                (g = g || f.loc),
                this[f.opcode].apply(this, f.args);
            if (
              ((this.source.currentLocation = g),
              this.pushSource(""),
              this.stackSlot ||
                this.inlineStack.length ||
                this.compileStack.length)
            )
              throw new j.default(
                "Compile completed with content left on stack"
              );
            this.decorators.isEmpty()
              ? (this.decorators = void 0)
              : ((this.useDecorators = !0),
                this.decorators.prepend(
                  "var decorators = container.decorators;\n"
                ),
                this.decorators.push("return fn;"),
                d
                  ? (this.decorators = Function.apply(this, [
                      "fn",
                      "props",
                      "container",
                      "depth0",
                      "data",
                      "blockParams",
                      "depths",
                      this.decorators.merge(),
                    ]))
                  : (this.decorators.prepend(
                      "function(fn, props, container, depth0, data, blockParams, depths) {\n"
                    ),
                    this.decorators.push("}\n"),
                    (this.decorators = this.decorators.merge())));
            var k = this.createFunctionContext(d);
            if (this.isChild) return k;
            var l = { compiler: this.compilerInfo(), main: k };
            this.decorators &&
              ((l.main_d = this.decorators), (l.useDecorators = !0));
            var m = this.context,
              n = m.programs,
              o = m.decorators;
            for (h = 0, i = n.length; h < i; h++)
              n[h] &&
                ((l[h] = n[h]),
                o[h] && ((l[h + "_d"] = o[h]), (l.useDecorators = !0)));
            return (
              this.environment.usePartial && (l.usePartial = !0),
              this.options.data && (l.useData = !0),
              this.useDepths && (l.useDepths = !0),
              this.useBlockParams && (l.useBlockParams = !0),
              this.options.compat && (l.compat = !0),
              d
                ? (l.compilerOptions = this.options)
                : ((l.compiler = JSON.stringify(l.compiler)),
                  (this.source.currentLocation = {
                    start: { line: 1, column: 0 },
                  }),
                  (l = this.objectLiteral(l)),
                  b.srcName
                    ? ((l = l.toStringWithSourceMap({ file: b.destName })),
                      (l.map = l.map && l.map.toString()))
                    : (l = l.toString())),
              l
            );
          },
          preamble: function () {
            (this.lastContext = 0),
              (this.source = new m.default(this.options.srcName)),
              (this.decorators = new m.default(this.options.srcName));
          },
          createFunctionContext: function (a) {
            var b = "",
              c = this.stackVars.concat(this.registers.list);
            c.length > 0 && (b += ", " + c.join(", "));
            var d = 0;
            for (var e in this.aliases) {
              var f = this.aliases[e];
              this.aliases.hasOwnProperty(e) &&
                f.children &&
                f.referenceCount > 1 &&
                ((b += ", alias" + ++d + "=" + e),
                (f.children[0] = "alias" + d));
            }
            var g = ["container", "depth0", "helpers", "partials", "data"];
            (this.useBlockParams || this.useDepths) && g.push("blockParams"),
              this.useDepths && g.push("depths");
            var h = this.mergeSource(b);
            return a
              ? (g.push(h), Function.apply(this, g))
              : this.source.wrap(["function(", g.join(","), ") {\n  ", h, "}"]);
          },
          mergeSource: function (a) {
            var b = this.environment.isSimple,
              c = !this.forceBuffer,
              d = void 0,
              e = void 0,
              f = void 0,
              g = void 0;
            return (
              this.source.each(function (a) {
                a.appendToBuffer
                  ? (f ? a.prepend("  + ") : (f = a), (g = a))
                  : (f &&
                      (e ? f.prepend("buffer += ") : (d = !0),
                      g.add(";"),
                      (f = g = void 0)),
                    (e = !0),
                    b || (c = !1));
              }),
              c
                ? f
                  ? (f.prepend("return "), g.add(";"))
                  : e || this.source.push('return "";')
                : ((a += ", buffer = " + (d ? "" : this.initializeBuffer())),
                  f
                    ? (f.prepend("return buffer + "), g.add(";"))
                    : this.source.push("return buffer;")),
              a &&
                this.source.prepend("var " + a.substring(2) + (d ? "" : ";\n")),
              this.source.merge()
            );
          },
          blockValue: function (a) {
            var b = this.aliasable("helpers.blockHelperMissing"),
              c = [this.contextName(0)];
            this.setupHelperArgs(a, 0, c);
            var d = this.popStack();
            c.splice(1, 0, d),
              this.push(this.source.functionCall(b, "call", c));
          },
          ambiguousBlockValue: function () {
            var a = this.aliasable("helpers.blockHelperMissing"),
              b = [this.contextName(0)];
            this.setupHelperArgs("", 0, b, !0), this.flushInline();
            var c = this.topStack();
            b.splice(1, 0, c),
              this.pushSource([
                "if (!",
                this.lastHelper,
                ") { ",
                c,
                " = ",
                this.source.functionCall(a, "call", b),
                "}",
              ]);
          },
          appendContent: function (a) {
            this.pendingContent
              ? (a = this.pendingContent + a)
              : (this.pendingLocation = this.source.currentLocation),
              (this.pendingContent = a);
          },
          append: function () {
            if (this.isInline())
              this.replaceStack(function (a) {
                return [" != null ? ", a, ' : ""'];
              }),
                this.pushSource(this.appendToBuffer(this.popStack()));
            else {
              var a = this.popStack();
              this.pushSource([
                "if (",
                a,
                " != null) { ",
                this.appendToBuffer(a, void 0, !0),
                " }",
              ]),
                this.environment.isSimple &&
                  this.pushSource([
                    "else { ",
                    this.appendToBuffer("''", void 0, !0),
                    " }",
                  ]);
            }
          },
          appendEscaped: function () {
            this.pushSource(
              this.appendToBuffer([
                this.aliasable("container.escapeExpression"),
                "(",
                this.popStack(),
                ")",
              ])
            );
          },
          getContext: function (a) {
            this.lastContext = a;
          },
          pushContext: function () {
            this.pushStackLiteral(this.contextName(this.lastContext));
          },
          lookupOnContext: function (a, b, c, d) {
            var e = 0;
            d || !this.options.compat || this.lastContext
              ? this.pushContext()
              : this.push(this.depthedLookup(a[e++])),
              this.resolvePath("context", a, e, b, c);
          },
          lookupBlockParam: function (a, b) {
            (this.useBlockParams = !0),
              this.push(["blockParams[", a[0], "][", a[1], "]"]),
              this.resolvePath("context", b, 1);
          },
          lookupData: function (a, b, c) {
            a
              ? this.pushStackLiteral("container.data(data, " + a + ")")
              : this.pushStackLiteral("data"),
              this.resolvePath("data", b, 0, !0, c);
          },
          resolvePath: function (a, b, c, d, e) {
            var g = this;
            if (this.options.strict || this.options.assumeObjects)
              return void this.push(f(this.options.strict && e, this, b, a));
            for (var h = b.length; c < h; c++)
              this.replaceStack(function (e) {
                var f = g.nameLookup(e, b[c], a);
                return d ? [" && ", f] : [" != null ? ", f, " : ", e];
              });
          },
          resolvePossibleLambda: function () {
            this.push([
              this.aliasable("container.lambda"),
              "(",
              this.popStack(),
              ", ",
              this.contextName(0),
              ")",
            ]);
          },
          pushStringParam: function (a, b) {
            this.pushContext(),
              this.pushString(b),
              "SubExpression" !== b &&
                ("string" == typeof a
                  ? this.pushString(a)
                  : this.pushStackLiteral(a));
          },
          emptyHash: function (a) {
            this.trackIds && this.push("{}"),
              this.stringParams && (this.push("{}"), this.push("{}")),
              this.pushStackLiteral(a ? "undefined" : "{}");
          },
          pushHash: function () {
            this.hash && this.hashes.push(this.hash),
              (this.hash = { values: [], types: [], contexts: [], ids: [] });
          },
          popHash: function () {
            var a = this.hash;
            (this.hash = this.hashes.pop()),
              this.trackIds && this.push(this.objectLiteral(a.ids)),
              this.stringParams &&
                (this.push(this.objectLiteral(a.contexts)),
                this.push(this.objectLiteral(a.types))),
              this.push(this.objectLiteral(a.values));
          },
          pushString: function (a) {
            this.pushStackLiteral(this.quotedString(a));
          },
          pushLiteral: function (a) {
            this.pushStackLiteral(a);
          },
          pushProgram: function (a) {
            null != a
              ? this.pushStackLiteral(this.programExpression(a))
              : this.pushStackLiteral(null);
          },
          registerDecorator: function (a, b) {
            var c = this.nameLookup("decorators", b, "decorator"),
              d = this.setupHelperArgs(b, a);
            this.decorators.push([
              "fn = ",
              this.decorators.functionCall(c, "", [
                "fn",
                "props",
                "container",
                d,
              ]),
              " || fn;",
            ]);
          },
          invokeHelper: function (a, b, c) {
            var d = this.popStack(),
              e = this.setupHelper(a, b),
              f = c ? [e.name, " || "] : "",
              g = ["("].concat(f, d);
            this.options.strict ||
              g.push(" || ", this.aliasable("helpers.helperMissing")),
              g.push(")"),
              this.push(this.source.functionCall(g, "call", e.callParams));
          },
          invokeKnownHelper: function (a, b) {
            var c = this.setupHelper(a, b);
            this.push(this.source.functionCall(c.name, "call", c.callParams));
          },
          invokeAmbiguous: function (a, b) {
            this.useRegister("helper");
            var c = this.popStack();
            this.emptyHash();
            var d = this.setupHelper(0, a, b),
              e = (this.lastHelper = this.nameLookup("helpers", a, "helper")),
              f = ["(", "(helper = ", e, " || ", c, ")"];
            this.options.strict ||
              ((f[0] = "(helper = "),
              f.push(
                " != null ? helper : ",
                this.aliasable("helpers.helperMissing")
              )),
              this.push([
                "(",
                f,
                d.paramsInit ? ["),(", d.paramsInit] : [],
                "),",
                "(typeof helper === ",
                this.aliasable('"function"'),
                " ? ",
                this.source.functionCall("helper", "call", d.callParams),
                " : helper))",
              ]);
          },
          invokePartial: function (a, b, c) {
            var d = [],
              e = this.setupParams(b, 1, d);
            a && ((b = this.popStack()), delete e.name),
              c && (e.indent = JSON.stringify(c)),
              (e.helpers = "helpers"),
              (e.partials = "partials"),
              (e.decorators = "container.decorators"),
              a
                ? d.unshift(b)
                : d.unshift(this.nameLookup("partials", b, "partial")),
              this.options.compat && (e.depths = "depths"),
              (e = this.objectLiteral(e)),
              d.push(e),
              this.push(
                this.source.functionCall("container.invokePartial", "", d)
              );
          },
          assignToHash: function (a) {
            var b = this.popStack(),
              c = void 0,
              d = void 0,
              e = void 0;
            this.trackIds && (e = this.popStack()),
              this.stringParams &&
                ((d = this.popStack()), (c = this.popStack()));
            var f = this.hash;
            c && (f.contexts[a] = c),
              d && (f.types[a] = d),
              e && (f.ids[a] = e),
              (f.values[a] = b);
          },
          pushId: function (a, b, c) {
            "BlockParam" === a
              ? this.pushStackLiteral(
                  "blockParams[" +
                    b[0] +
                    "].path[" +
                    b[1] +
                    "]" +
                    (c ? " + " + JSON.stringify("." + c) : "")
                )
              : "PathExpression" === a
              ? this.pushString(b)
              : "SubExpression" === a
              ? this.pushStackLiteral("true")
              : this.pushStackLiteral("null");
          },
          compiler: e,
          compileChildren: function (a, b) {
            for (
              var c = a.children, d = void 0, e = void 0, f = 0, g = c.length;
              f < g;
              f++
            ) {
              (d = c[f]), (e = new this.compiler());
              var h = this.matchExistingProgram(d);
              null == h
                ? (this.context.programs.push(""),
                  (h = this.context.programs.length),
                  (d.index = h),
                  (d.name = "program" + h),
                  (this.context.programs[h] = e.compile(
                    d,
                    b,
                    this.context,
                    !this.precompile
                  )),
                  (this.context.decorators[h] = e.decorators),
                  (this.context.environments[h] = d),
                  (this.useDepths = this.useDepths || e.useDepths),
                  (this.useBlockParams =
                    this.useBlockParams || e.useBlockParams))
                : ((d.index = h),
                  (d.name = "program" + h),
                  (this.useDepths = this.useDepths || d.useDepths),
                  (this.useBlockParams =
                    this.useBlockParams || d.useBlockParams));
            }
          },
          matchExistingProgram: function (a) {
            for (var b = 0, c = this.context.environments.length; b < c; b++) {
              var d = this.context.environments[b];
              if (d && d.equals(a)) return b;
            }
          },
          programExpression: function (a) {
            var b = this.environment.children[a],
              c = [b.index, "data", b.blockParams];
            return (
              (this.useBlockParams || this.useDepths) && c.push("blockParams"),
              this.useDepths && c.push("depths"),
              "container.program(" + c.join(", ") + ")"
            );
          },
          useRegister: function (a) {
            this.registers[a] ||
              ((this.registers[a] = !0), this.registers.list.push(a));
          },
          push: function (a) {
            return (
              a instanceof d || (a = this.source.wrap(a)),
              this.inlineStack.push(a),
              a
            );
          },
          pushStackLiteral: function (a) {
            this.push(new d(a));
          },
          pushSource: function (a) {
            this.pendingContent &&
              (this.source.push(
                this.appendToBuffer(
                  this.source.quotedString(this.pendingContent),
                  this.pendingLocation
                )
              ),
              (this.pendingContent = void 0)),
              a && this.source.push(a);
          },
          replaceStack: function (a) {
            var b = ["("],
              c = void 0,
              e = void 0,
              f = void 0;
            if (!this.isInline())
              throw new j.default("replaceStack on non-inline");
            var g = this.popStack(!0);
            if (g instanceof d) (c = [g.value]), (b = ["(", c]), (f = !0);
            else {
              e = !0;
              var h = this.incrStack();
              (b = ["((", this.push(h), " = ", g, ")"]), (c = this.topStack());
            }
            var i = a.call(this, c);
            f || this.popStack(),
              e && this.stackSlot--,
              this.push(b.concat(i, ")"));
          },
          incrStack: function () {
            return (
              this.stackSlot++,
              this.stackSlot > this.stackVars.length &&
                this.stackVars.push("stack" + this.stackSlot),
              this.topStackName()
            );
          },
          topStackName: function () {
            return "stack" + this.stackSlot;
          },
          flushInline: function () {
            var a = this.inlineStack;
            this.inlineStack = [];
            for (var b = 0, c = a.length; b < c; b++) {
              var e = a[b];
              if (e instanceof d) this.compileStack.push(e);
              else {
                var f = this.incrStack();
                this.pushSource([f, " = ", e, ";"]), this.compileStack.push(f);
              }
            }
          },
          isInline: function () {
            return this.inlineStack.length;
          },
          popStack: function (a) {
            var b = this.isInline(),
              c = (b ? this.inlineStack : this.compileStack).pop();
            if (!a && c instanceof d) return c.value;
            if (!b) {
              if (!this.stackSlot) throw new j.default("Invalid stack pop");
              this.stackSlot--;
            }
            return c;
          },
          topStack: function () {
            var a = this.isInline() ? this.inlineStack : this.compileStack,
              b = a[a.length - 1];
            return b instanceof d ? b.value : b;
          },
          contextName: function (a) {
            return this.useDepths && a ? "depths[" + a + "]" : "depth" + a;
          },
          quotedString: function (a) {
            return this.source.quotedString(a);
          },
          objectLiteral: function (a) {
            return this.source.objectLiteral(a);
          },
          aliasable: function (a) {
            var b = this.aliases[a];
            return b
              ? (b.referenceCount++, b)
              : ((b = this.aliases[a] = this.source.wrap(a)),
                (b.aliasable = !0),
                (b.referenceCount = 1),
                b);
          },
          setupHelper: function (a, b, c) {
            var d = [],
              e = this.setupHelperArgs(b, a, d, c),
              f = this.nameLookup("helpers", b, "helper"),
              g = this.aliasable(
                this.contextName(0) +
                  " != null ? " +
                  this.contextName(0) +
                  " : {}"
              );
            return {
              params: d,
              paramsInit: e,
              name: f,
              callParams: [g].concat(d),
            };
          },
          setupParams: function (a, b, c) {
            var d = {},
              e = [],
              f = [],
              g = [],
              h = !c,
              i = void 0;
            h && (c = []),
              (d.name = this.quotedString(a)),
              (d.hash = this.popStack()),
              this.trackIds && (d.hashIds = this.popStack()),
              this.stringParams &&
                ((d.hashTypes = this.popStack()),
                (d.hashContexts = this.popStack()));
            var j = this.popStack(),
              k = this.popStack();
            (k || j) &&
              ((d.fn = k || "container.noop"),
              (d.inverse = j || "container.noop"));
            for (var l = b; l--; )
              (i = this.popStack()),
                (c[l] = i),
                this.trackIds && (g[l] = this.popStack()),
                this.stringParams &&
                  ((f[l] = this.popStack()), (e[l] = this.popStack()));
            return (
              h && (d.args = this.source.generateArray(c)),
              this.trackIds && (d.ids = this.source.generateArray(g)),
              this.stringParams &&
                ((d.types = this.source.generateArray(f)),
                (d.contexts = this.source.generateArray(e))),
              this.options.data && (d.data = "data"),
              this.useBlockParams && (d.blockParams = "blockParams"),
              d
            );
          },
          setupHelperArgs: function (a, b, c, d) {
            var e = this.setupParams(a, b, c);
            return (
              (e = this.objectLiteral(e)),
              d
                ? (this.useRegister("options"),
                  c.push("options"),
                  ["options=", e])
                : c
                ? (c.push(e), "")
                : e
            );
          },
        }),
          (function () {
            for (
              var a = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(
                  " "
                ),
                b = (e.RESERVED_WORDS = {}),
                c = 0,
                d = a.length;
              c < d;
              c++
            )
              b[a[c]] = !0;
          })(),
          (e.isValidJavaScriptVariableName = function (a) {
            return !e.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a);
          }),
          (b.default = e),
          (a.exports = b.default);
      },
      function (a, b, c) {
        "use strict";
        function d(a, b, c) {
          if (f.isArray(a)) {
            for (var d = [], e = 0, g = a.length; e < g; e++)
              d.push(b.wrap(a[e], c));
            return d;
          }
          return "boolean" == typeof a || "number" == typeof a ? a + "" : a;
        }
        function e(a) {
          (this.srcFile = a), (this.source = []);
        }
        b.__esModule = !0;
        var f = c(5),
          g = void 0;
        try {
        } catch (a) {}
        g ||
          ((g = function (a, b, c, d) {
            (this.src = ""), d && this.add(d);
          }),
          (g.prototype = {
            add: function (a) {
              f.isArray(a) && (a = a.join("")), (this.src += a);
            },
            prepend: function (a) {
              f.isArray(a) && (a = a.join("")), (this.src = a + this.src);
            },
            toStringWithSourceMap: function () {
              return { code: this.toString() };
            },
            toString: function () {
              return this.src;
            },
          })),
          (e.prototype = {
            isEmpty: function () {
              return !this.source.length;
            },
            prepend: function (a, b) {
              this.source.unshift(this.wrap(a, b));
            },
            push: function (a, b) {
              this.source.push(this.wrap(a, b));
            },
            merge: function () {
              var a = this.empty();
              return (
                this.each(function (b) {
                  a.add(["  ", b, "\n"]);
                }),
                a
              );
            },
            each: function (a) {
              for (var b = 0, c = this.source.length; b < c; b++)
                a(this.source[b]);
            },
            empty: function () {
              var a = this.currentLocation || { start: {} };
              return new g(a.start.line, a.start.column, this.srcFile);
            },
            wrap: function (a) {
              var b =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? this.currentLocation || { start: {} }
                  : arguments[1];
              return a instanceof g
                ? a
                : ((a = d(a, this, b)),
                  new g(b.start.line, b.start.column, this.srcFile, a));
            },
            functionCall: function (a, b, c) {
              return (
                (c = this.generateList(c)),
                this.wrap([a, b ? "." + b + "(" : "(", c, ")"])
              );
            },
            quotedString: function (a) {
              return (
                '"' +
                (a + "")
                  .replace(/\\/g, "\\\\")
                  .replace(/"/g, '\\"')
                  .replace(/\n/g, "\\n")
                  .replace(/\r/g, "\\r")
                  .replace(/\u2028/g, "\\u2028")
                  .replace(/\u2029/g, "\\u2029") +
                '"'
              );
            },
            objectLiteral: function (a) {
              var b = [];
              for (var c in a)
                if (a.hasOwnProperty(c)) {
                  var e = d(a[c], this);
                  "undefined" !== e && b.push([this.quotedString(c), ":", e]);
                }
              var f = this.generateList(b);
              return f.prepend("{"), f.add("}"), f;
            },
            generateList: function (a) {
              for (var b = this.empty(), c = 0, e = a.length; c < e; c++)
                c && b.add(","), b.add(d(a[c], this));
              return b;
            },
            generateArray: function (a) {
              var b = this.generateList(a);
              return b.prepend("["), b.add("]"), b;
            },
          }),
          (b.default = e),
          (a.exports = b.default);
      },
    ]);
  });
