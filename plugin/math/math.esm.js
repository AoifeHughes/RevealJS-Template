function e(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function t(t) {
  for (var r = 1; r < arguments.length; r++) {
    var a = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? e(Object(a), !0).forEach(function (e) {
          n(t, e, a[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
      : e(Object(a)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
        });
  }
  return t;
}
function n(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
export default function () {
  var e,
    n = {
      messageStyle: "none",
      tex2jax: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"],
        ],
        skipTags: ["script", "noscript", "style", "textarea", "pre"],
      },
      skipStartupTypeset: !0,
    };
  return {
    id: "math",
    init: function (r) {
      var a = (e = r).getConfig().math || {},
        o = t(t({}, n), a),
        c =
          (o.mathjax ||
            "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js") +
          "?config=" +
          (o.config || "TeX-AMS_HTML-full");
      (o.tex2jax = t(t({}, n.tex2jax), a.tex2jax)),
        (o.mathjax = o.config = null),
        (function (e, t) {
          var n = this,
            r = document.querySelector("head"),
            a = document.createElement("script");
          (a.type = "text/javascript"), (a.src = e);
          var o = function () {
            "function" == typeof t && (t.call(), (t = null));
          };
          (a.onload = o),
            (a.onreadystatechange = function () {
              "loaded" === n.readyState && o();
            }),
            r.appendChild(a);
        })(c, function () {
          MathJax.Hub.Config(o),
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, e.getRevealElement()]),
            MathJax.Hub.Queue(e.layout),
            e.on("slidechanged", function (e) {
              MathJax.Hub.Queue(["Typeset", MathJax.Hub, e.currentSlide]);
            });
        });
    },
  };
}
