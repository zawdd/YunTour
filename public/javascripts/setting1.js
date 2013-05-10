function countCharacters(n) {
    var t = $(n).val().length;
    $(n).next().children().text(t)
}
var swfobject = function() {
    function v() {
        var i, r, n;
        if (!c) {
            try {
                i = t.getElementsByTagName("body")[0].appendChild(h("span")),
                i.parentNode.removeChild(i)
            } catch(u) {
                return
            }
            for (c = !0, r = w.length, n = 0; n < r; n++) w[n]()
        }
    }
    function yt(n) {
        c ? n() : w[w.length] = n
    }
    function pt(n) {
        if (typeof r.addEventListener != i) r.addEventListener("load", n, !1);
        else if (typeof t.addEventListener != i) t.addEventListener("load", n, !1);
        else if (typeof r.attachEvent != i) ui(r, "onload", n);
        else if (typeof r.onload == "function") {
            var u = r.onload;
            r.onload = function() {
                u(),
                n()
            }
        } else r.onload = n
    }
    function gt() {
        lt ? ni() : it()
    }
    function ni() {
        var o = t.getElementsByTagName("body")[0],
        u = h(f),
        r,
        e;
        u.setAttribute("type", p),
        r = o.appendChild(u),
        r ? (e = 0,
        function() {
            if (typeof r.GetVariable != i) {
                var t = r.GetVariable("$version");
                t && (t = t.split(" ")[1].split(","), n.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
            } else if (e < 10) {
                e++,
                setTimeout(arguments.callee, 10);
                return
            }
            o.removeChild(u),
            r = null,
            it()
        } ()) : it()
    }
    function it() {
        var y = s.length,
        r, t, h, c, v;
        if (y > 0) for (r = 0; r < y; r++) {
            var f = s[r].id,
            e = s[r].callbackFn,
            o = {
                success: !1,
                id: f
            };
            if (n.pv[0] > 0) {
                if (t = u(f), t) if (!g(s[r].swfVersion) || n.wk && n.wk < 312) if (s[r].expressInstall && ut()) {
                    h = {},
                    h.data = s[r].expressInstall,
                    h.width = t.getAttribute("width") || "0",
                    h.height = t.getAttribute("height") || "0",
                    t.getAttribute("class") && (h.styleclass = t.getAttribute("class")),
                    t.getAttribute("align") && (h.align = t.getAttribute("align"));
                    var p = {},
                    a = t.getElementsByTagName("param"),
                    w = a.length;
                    for (c = 0; c < w; c++) a[c].getAttribute("name").toLowerCase() != "movie" && (p[a[c].getAttribute("name")] = a[c].getAttribute("value"));
                    ft(h, p, f, e)
                } else ti(t),
                e && e(o);
                else l(f, !0),
                e && (o.success = !0, o.ref = rt(f), e(o))
            } else l(f, !0),
            e && (v = rt(f), v && typeof v.SetVariable != i && (o.success = !0, o.ref = v), e(o))
        }
    }
    function rt(n) {
        var r = null,
        t = u(n),
        e;
        return t && t.nodeName == "OBJECT" && (typeof t.SetVariable != i ? r = t: (e = t.getElementsByTagName(f)[0], e && (r = e))),
        r
    }
    function ut() {
        return ! d && g("6.0.65") && (n.win || n.mac) && !(n.wk && n.wk < 312)
    }
    function ft(f, e, o, s) {
        var c, v, l, a;
        d = !0,
        nt = s || null,
        at = {
            success: !1,
            id: o
        },
        c = u(o),
        c && (c.nodeName == "OBJECT" ? (y = et(c), k = null) : (y = c, k = o), f.id = ht, (typeof f.width == i || !/%$/.test(f.width) && parseInt(f.width, 10) < 310) && (f.width = "310"), (typeof f.height == i || !/%$/.test(f.height) && parseInt(f.height, 10) < 137) && (f.height = "137"), t.title = t.title.slice(0, 47) + " - Flash Player Installation", v = n.ie && n.win ? "ActiveX": "PlugIn", l = "MMredirectURL=" + r.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + v + "&MMdoctitle=" + t.title, typeof e.flashvars != i ? e.flashvars += "&" + l: e.flashvars = l, n.ie && n.win && c.readyState != 4 && (a = h("div"), o += "SWFObjectNew", a.setAttribute("id", o), c.parentNode.insertBefore(a, c), c.style.display = "none",
        function() {
            c.readyState == 4 ? c.parentNode.removeChild(c) : setTimeout(arguments.callee, 10)
        } ()), ot(f, e, o))
    }
    function ti(t) {
        if (n.ie && n.win && t.readyState != 4) {
            var i = h("div");
            t.parentNode.insertBefore(i, t),
            i.parentNode.replaceChild(et(t), i),
            t.style.display = "none",
            function() {
                t.readyState == 4 ? t.parentNode.removeChild(t) : setTimeout(arguments.callee, 10)
            } ()
        } else t.parentNode.replaceChild(et(t), t)
    }
    function et(t) {
        var u = h("div"),
        e,
        i,
        o,
        r;
        if (n.win && n.ie) u.innerHTML = t.innerHTML;
        else if (e = t.getElementsByTagName(f)[0], e && (i = e.childNodes, i)) for (o = i.length, r = 0; r < o; r++) i[r].nodeType == 1 && i[r].nodeName == "PARAM" || i[r].nodeType == 8 || u.appendChild(i[r].cloneNode(!0));
        return u
    }
    function ot(t, r, e) {
        var v, y = u(e),
        w,
        o,
        k,
        a,
        c,
        s,
        l;
        if (n.wk && n.wk < 312) return v;
        if (y) if (typeof t.id == i && (t.id = e), n.ie && n.win) {
            w = "";
            for (o in t) t[o] != Object.prototype[o] && (o.toLowerCase() == "data" ? r.movie = t[o] : o.toLowerCase() == "styleclass" ? w += ' class="' + t[o] + '"': o.toLowerCase() != "classid" && (w += " " + o + '="' + t[o] + '"'));
            k = "";
            for (a in r) r[a] != Object.prototype[a] && (k += '<param name="' + a + '" value="' + r[a] + '" />');
            y.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + w + ">" + k + "<\/object>",
            b[b.length] = t.id,
            v = u(t.id)
        } else {
            c = h(f),
            c.setAttribute("type", p);
            for (s in t) t[s] != Object.prototype[s] && (s.toLowerCase() == "styleclass" ? c.setAttribute("class", t[s]) : s.toLowerCase() != "classid" && c.setAttribute(s, t[s]));
            for (l in r) r[l] != Object.prototype[l] && l.toLowerCase() != "movie" && ii(c, l, r[l]);
            y.parentNode.replaceChild(c, y),
            v = c
        }
        return v
    }
    function ii(n, t, i) {
        var r = h("param");
        r.setAttribute("name", t),
        r.setAttribute("value", i),
        n.appendChild(r)
    }
    function wt(t) {
        var i = u(t);
        i && i.nodeName == "OBJECT" && (n.ie && n.win ? (i.style.display = "none",
        function() {
            i.readyState == 4 ? ri(t) : setTimeout(arguments.callee, 10)
        } ()) : i.parentNode.removeChild(i))
    }
    function ri(n) {
        var t = u(n),
        i;
        if (t) {
            for (i in t) typeof t[i] == "function" && (t[i] = null);
            t.parentNode.removeChild(t)
        }
    }
    function u(n) {
        var i = null;
        try {
            i = t.getElementById(n)
        } catch(r) {}
        return i
    }
    function h(n) {
        return t.createElement(n)
    }
    function ui(n, t, i) {
        n.attachEvent(t, i),
        a[a.length] = [n, t, i]
    }
    function g(t) {
        var r = n.pv,
        i = t.split(".");
        return i[0] = parseInt(i[0], 10),
        i[1] = parseInt(i[1], 10) || 0,
        i[2] = parseInt(i[2], 10) || 0,
        r[0] > i[0] || r[0] == i[0] && r[1] > i[1] || r[0] == i[0] && r[1] == i[1] && r[2] >= i[2] ? !0 : !1
    }
    function bt(r, u, o, s) {
        var a, c, l;
        n.ie && n.mac || (a = t.getElementsByTagName("head")[0], a) && (c = o && typeof o == "string" ? o: "screen", s && (e = null, tt = null), e && tt == c || (l = h("style"), l.setAttribute("type", "text/css"), l.setAttribute("media", c), e = a.appendChild(l), n.ie && n.win && typeof t.styleSheets != i && t.styleSheets.length > 0 && (e = t.styleSheets[t.styleSheets.length - 1]), tt = c), n.ie && n.win ? e && typeof e.addRule == f && e.addRule(r, u) : e && typeof t.createTextNode != i && e.appendChild(t.createTextNode(r + " {" + u + "}")))
    }
    function l(n, t) {
        if (vt) {
            var i = t ? "visible": "hidden";
            c && u(n) ? u(n).style.visibility = i: bt("#" + n, "visibility:" + i)
        }
    }
    function kt(n) {
        var t = /[\\\"<>\.;]/,
        r = t.exec(n) != null;
        return r && typeof encodeURIComponent != i ? encodeURIComponent(n) : n
    }
    var i = "undefined",
    f = "object",
    st = "Shockwave Flash",
    dt = "ShockwaveFlash.ShockwaveFlash",
    p = "application/x-shockwave-flash",
    ht = "SWFObjectExprInst",
    ct = "onreadystatechange",
    r = window,
    t = document,
    o = navigator,
    lt = !1,
    w = [gt],
    s = [],
    b = [],
    a = [],
    y,
    k,
    nt,
    at,
    c = !1,
    d = !1,
    e,
    tt,
    vt = !0,
    n = function() {
        var l = typeof t.getElementById != i && typeof t.getElementsByTagName != i && typeof t.createElement != i,
        e = o.userAgent.toLowerCase(),
        s = o.platform.toLowerCase(),
        a = s ? /win/.test(s) : /win/.test(e),
        v = s ? /mac/.test(s) : /mac/.test(e),
        y = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
        h = !+"\v1",
        u = [0, 0, 0],
        n = null,
        c;
        if (typeof o.plugins != i && typeof o.plugins[st] == f) n = o.plugins[st].description,
        !n || typeof o.mimeTypes != i && o.mimeTypes[p] && !o.mimeTypes[p].enabledPlugin || (lt = !0, h = !1, n = n.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), u[0] = parseInt(n.replace(/^(.*)\..*$/, "$1"), 10), u[1] = parseInt(n.replace(/^.*\.(.*)\s.*$/, "$1"), 10), u[2] = /[a-zA-Z]/.test(n) ? parseInt(n.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof r.ActiveXObject != i) try {
            c = new ActiveXObject(dt),
            c && (n = c.GetVariable("$version"), n && (h = !0, n = n.split(" ")[1].split(","), u = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]))
        } catch(w) {}
        return {
            w3: l,
            pv: u,
            wk: y,
            ie: h,
            win: a,
            mac: v
        }
    } (),
    fi = function() {
        n.w3 && ((typeof t.readyState != i && t.readyState == "complete" || typeof t.readyState == i && (t.getElementsByTagName("body")[0] || t.body)) && v(), c || (typeof t.addEventListener != i && t.addEventListener("DOMContentLoaded", v, !1), n.ie && n.win && (t.attachEvent(ct,
        function() {
            t.readyState == "complete" && (t.detachEvent(ct, arguments.callee), v())
        }), r == top &&
        function() {
            if (!c) {
                try {
                    t.documentElement.doScroll("left")
                } catch(n) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                v()
            }
        } ()), n.wk &&
        function() {
            if (!c) {
                if (!/loaded|complete/.test(t.readyState)) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                v()
            }
        } (), pt(v)))
    } (),
    ei = function() {
        n.ie && n.win && window.attachEvent("onunload",
        function() {
            for (var e = a.length, r, i, u, f, t = 0; t < e; t++) a[t][0].detachEvent(a[t][1], a[t][2]);
            for (r = b.length, i = 0; i < r; i++) wt(b[i]);
            for (u in n) n[u] = null;
            n = null;
            for (f in swfobject) swfobject[f] = null;
            swfobject = null
        })
    } ();
    return {
        registerObject: function(t, i, r, u) {
            if (n.w3 && t && i) {
                var f = {};
                f.id = t,
                f.swfVersion = i,
                f.expressInstall = r,
                f.callbackFn = u,
                s[s.length] = f,
                l(t, !1)
            } else u && u({
                success: !1,
                id: t
            })
        },
        getObjectById: function(t) {
            if (n.w3) return rt(t)
        },
        embedSWF: function(t, r, u, e, o, s, h, c, a, v) {
            var y = {
                success: !1,
                id: r
            };
            n.w3 && !(n.wk && n.wk < 312) && t && r && u && e && o ? (l(r, !1), yt(function() {
                var n, b, p, k, w, d;
                if (u += "", e += "", n = {},
                a && typeof a === f) for (b in a) n[b] = a[b];
                if (n.data = t, n.width = u, n.height = e, p = {},
                c && typeof c === f) for (k in c) p[k] = c[k];
                if (h && typeof h === f) for (w in h) typeof p.flashvars != i ? p.flashvars += "&" + w + "=" + h[w] : p.flashvars = w + "=" + h[w];
                if (g(o)) d = ot(n, p, r),
                n.id == r && l(r, !0),
                y.success = !0,
                y.ref = d;
                else {
                    if (s && ut()) {
                        n.data = s,
                        ft(n, p, r, v);
                        return
                    }
                    l(r, !0)
                }
                v && v(y)
            })) : v && v(y)
        },
        switchOffAutoHideShow: function() {
            vt = !1
        },
        ua: n,
        getFlashPlayerVersion: function() {
            return {
                major: n.pv[0],
                minor: n.pv[1],
                release: n.pv[2]
            }
        },
        hasFlashPlayerVersion: g,
        createSWF: function(t, i, r) {
            return n.w3 ? ot(t, i, r) : undefined
        },
        showExpressInstall: function(t, i, r, u) {
            n.w3 && ut() && ft(t, i, r, u)
        },
        removeSWF: function(t) {
            n.w3 && wt(t)
        },
        createCSS: function(t, i, r, u) {
            n.w3 && bt(t, i, r, u)
        },
        addDomLoadEvent: yt,
        addLoadEvent: pt,
        getQueryParamValue: function(n) {
            var r = t.location.search || t.location.hash,
            u, i;
            if (r) {
                if (/\?/.test(r) && (r = r.split("?")[1]), n == null) return kt(r);
                for (u = r.split("&"), i = 0; i < u.length; i++) if (u[i].substring(0, u[i].indexOf("=")) == n) return kt(u[i].substring(u[i].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (d) {
                var t = u(ht);
                t && y && (t.parentNode.replaceChild(y, t), k && (l(k, !0), n.ie && n.win && (y.style.display = "block")), nt && nt(at)),
                d = !1
            }
        }
    }
} (),
toggleFooterButton,
resetForm;
(function(n) {
    n.Jcrop = function(t, i) {
        function c(n) {
            return parseInt(n, 10) + "px"
        }
        function nt(n) {
            return parseInt(n, 10) + "%"
        }
        function et(n) {
            return r.baseClass + "-" + n
        }
        function pi() {
            return n.fx.step.hasOwnProperty("backgroundColor")
        }
        function pt(t) {
            var i = n(t).offset();
            return [i.left, i.top]
        }
        function ot(n) {
            return [n.pageX - ft[0], n.pageY - ft[1]]
        }
        function ti(t) {
            typeof t != "object" && (t = {}),
            r = n.extend(r, t),
            typeof r.onChange != "function" && (r.onChange = function() {}),
            typeof r.onSelect != "function" && (r.onSelect = function() {}),
            typeof r.onRelease != "function" && (r.onRelease = function() {})
        }
        function wi(n) {
            n !== ni && (p.setCursor(n), ni = n)
        }
        function ii(n, t) {
            if (ft = pt(u), p.setCursor(n === "move" ? n: n + "-resize"), n === "move") return p.activateHandlers(ki(t), bt);
            var r = o.getFixed(),
            i = ri(n),
            f = o.getCorner(ri(i));
            o.setPressed(o.getCorner(i)),
            o.setCurrent(f),
            p.activateHandlers(bi(n, r), bt)
        }
        function bi(n, t) {
            return function(i) {
                if (r.aspectRatio) switch (n) {
                case "e":
                    i[1] = t.y + 1;
                    break;
                case "w":
                    i[1] = t.y + 1;
                    break;
                case "n":
                    i[0] = t.x + 1;
                    break;
                case "s":
                    i[0] = t.x + 1
                } else switch (n) {
                case "e":
                    i[1] = t.y2;
                    break;
                case "w":
                    i[1] = t.y2;
                    break;
                case "n":
                    i[0] = t.x2;
                    break;
                case "s":
                    i[0] = t.x2
                }
                o.setCurrent(i),
                f.update()
            }
        }
        function ki(n) {
            var t = n;
            return dt.watchKeys(),
            function(n) {
                o.moveOffset([n[0] - t[0], n[1] - t[1]]),
                t = n,
                f.update()
            }
        }
        function ri(n) {
            switch (n) {
            case "n":
                return "sw";
            case "s":
                return "nw";
            case "e":
                return "nw";
            case "w":
                return "ne";
            case "ne":
                return "sw";
            case "nw":
                return "se";
            case "se":
                return "nw";
            case "sw":
                return "ne"
            }
        }
        function ui(n) {
            return function(t) {
                return r.disabled ? !1 : n === "move" && !r.allowMove ? !1 : (ut = !0, ii(n, ot(t)), t.stopPropagation(), t.preventDefault(), !1)
            }
        }
        function fi(n, t, i) {
            var r = n.width(),
            u = n.height();
            r > t && t > 0 && (r = t, u = t / n.width() * n.height()),
            u > i && i > 0 && (u = i, r = i / n.height() * n.width()),
            l = n.width() / r,
            a = n.height() / u,
            n.width(r).height(u)
        }
        function wt(n) {
            return {
                x: parseInt(n.x * l, 10),
                y: parseInt(n.y * a, 10),
                x2: parseInt(n.x2 * l, 10),
                y2: parseInt(n.y2 * a, 10),
                w: parseInt(n.w * l, 10),
                h: parseInt(n.h * a, 10)
            }
        }
        function bt() {
            var t = o.getFixed();
            t.w > r.minSelect[0] && t.h > r.minSelect[1] ? (f.enableHandles(), f.done()) : f.release(),
            p.setCursor(r.allowSelect ? "crosshair": "default")
        }
        function ei(n) {
            if (r.disabled || !r.allowSelect) return ! 1;
            ut = !0,
            ft = pt(u),
            f.disableHandles(),
            wi("crosshair");
            var t = ot(n);
            return o.setPressed(t),
            f.update(),
            p.activateHandlers(di, bt),
            dt.watchKeys(),
            n.stopPropagation(),
            n.preventDefault(),
            !1
        }
        function di(n) {
            o.setCurrent(n),
            f.update()
        }
        function oi() {
            var t = n("<div><\/div>").addClass(et("tracker"));
            return n.browser.msie && t.css({
                opacity: 0,
                backgroundColor: "white"
            }),
            t
        }
        function gi(n) {
            v.removeClass().addClass(et("holder")).addClass(n)
        }
        function nr(n, t) {
            function p() {
                window.setTimeout(w, g)
            }
            var k = parseInt(n[0], 10) / l,
            d = parseInt(n[1], 10) / a,
            c = parseInt(n[2], 10) / l,
            v = parseInt(n[3], 10) / a,
            ft,
            w;
            if (!hi) {
                var s = o.flipCoords(k, d, c, v),
                h = o.getFixed(),
                e = [h.x, h.y, h.x2, h.y2],
                i = e,
                g = r.animationDelay,
                nt = s[0] - e[0],
                tt = s[1] - e[1],
                it = s[2] - e[2],
                rt = s[3] - e[3],
                u = 0,
                ut = r.swingSpeed;
                x = i[0],
                y = i[1],
                c = i[2],
                v = i[3],
                f.animMode(!0),
                w = function() {
                    return function() {
                        u += (100 - u) / ut,
                        i[0] = x + u / 100 * nt,
                        i[1] = y + u / 100 * tt,
                        i[2] = c + u / 100 * it,
                        i[3] = v + u / 100 * rt,
                        u >= 99.8 && (u = 100),
                        u < 100 ? (ai(i), p()) : (f.done(), typeof t == "function" && t.call(b))
                    }
                } (),
                p()
            }
        }
        function li(n) {
            ai([parseInt(n[0], 10) / l, parseInt(n[1], 10) / a, parseInt(n[2], 10) / l, parseInt(n[3], 10) / a])
        }
        function ai(n) {
            o.setPressed([n[0], n[1]]),
            o.setCurrent([n[2], n[3]]),
            f.update()
        }
        function tr() {
            return wt(o.getFixed())
        }
        function ir() {
            return o.getFixed()
        }
        function rr(n) {
            ti(n),
            gt()
        }
        function vi() {
            r.disabled = !0,
            f.disableHandles(),
            f.setCursor("default"),
            p.setCursor("default")
        }
        function yi() {
            r.disabled = !1,
            gt()
        }
        function ur() {
            f.done(),
            p.activateHandlers(null, null)
        }
        function fr() {
            v.remove(),
            k.show(),
            n(t).removeData("Jcrop")
        }
        function er(n, t) {
            f.release(),
            vi();
            var i = new Image;
            i.onload = function() {
                var f = i.width,
                o = i.height,
                h = r.boxWidth,
                c = r.boxHeight;
                u.width(f).height(o),
                u.attr("src", n),
                at.attr("src", n),
                fi(u, h, c),
                s = u.width(),
                e = u.height(),
                at.width(s).height(e),
                d.width(s + rt * 2).height(e + rt * 2),
                v.width(s).height(e),
                yi(),
                typeof t == "function" && t.call(b)
            },
            i.src = n
        }
        function gt(n) {
            r.allowResize ? n ? f.enableOnly() : f.enableHandles() : f.disableHandles(),
            p.setCursor(r.allowSelect ? "crosshair": "default"),
            f.setCursor(r.allowMove ? "move": "default"),
            r.hasOwnProperty("setSelect") && (li(r.setSelect), f.done(), delete r.setSelect),
            r.hasOwnProperty("trueSize") && (l = r.trueSize[0] / s, a = r.trueSize[1] / e),
            r.hasOwnProperty("bgColor") && (pi() && r.fadeTime ? v.animate({
                backgroundColor: r.bgColor
            },
            {
                queue: !1,
                duration: r.fadeTime
            }) : v.css("backgroundColor", r.bgColor), delete r.bgColor),
            r.hasOwnProperty("bgOpacity") && (vt = r.bgOpacity, f.isAwake() && (r.fadeTime ? u.fadeTo(r.fadeTime, vt) : v.css("opacity", r.opacity)), delete r.bgOpacity),
            st = r.maxSize[0] || 0,
            ht = r.maxSize[1] || 0,
            ct = r.minSize[0] || 0,
            lt = r.minSize[1] || 0,
            r.hasOwnProperty("outerImage") && (u.attr("src", r.outerImage), delete r.outerImage),
            f.refresh()
        }
        var r = n.extend({},
        n.Jcrop.defaults),
        ft,
        ni,
        yt = !1,
        b;
        n.browser.msie && n.browser.version.split(".")[0] === "6" && (yt = !0),
        typeof t != "object" && (t = n(t)[0]),
        typeof i != "object" && (i = {}),
        ti(i);
        var si = {
            border: "none",
            margin: 0,
            padding: 0,
            position: "absolute"
        },
        k = n(t),
        u = k.clone().removeAttr("id").css(si);
        u.width(k.width()),
        u.height(k.height()),
        k.after(u).hide(),
        fi(u, r.boxWidth, r.boxHeight);
        var s = u.width(),
        e = u.height(),
        v = n("<div />").width(s).height(e).addClass(et("holder")).css({
            position: "relative",
            backgroundColor: r.bgColor
        }).insertAfter(k).append(u);
        delete r.bgColor,
        r.addClass && v.addClass(r.addClass);
        var at = n("<img />").attr("src", u.attr("src")).css(si).width(s).height(e),
        kt = n("<div />").width(nt(100)).height(nt(100)).css({
            zIndex: 310,
            position: "absolute",
            overflow: "hidden"
        }).append(at),
        tt = n("<div />").width(nt(100)).height(nt(100)).css("zIndex", 320),
        it = n("<div />").css({
            position: "absolute",
            zIndex: 300
        }).insertBefore(u).append(kt, tt);
        yt && it.css({
            overflowY: "hidden"
        });
        var rt = r.boundary,
        d = oi().width(s + rt * 2).height(e + rt * 2).css({
            position: "absolute",
            top: c( - rt),
            left: c( - rt),
            zIndex: 290
        }).mousedown(ei),
        vt = r.bgOpacity,
        st,
        ht,
        ct,
        lt,
        l,
        a,
        or = !0,
        ut,
        hi,
        ci;
        ft = pt(u);
        var g = function() {
            function n() {
                var i = {},
                u = ["touchstart", "touchmove", "touchend"],
                f = document.createElement("div"),
                t,
                n,
                r;
                try {
                    for (t = 0; t < u.length; t++) n = u[t],
                    n = "on" + n,
                    r = n in f,
                    r || (f.setAttribute(n, "return;"), r = typeof f[n] == "function"),
                    i[u[t]] = r;
                    return i.touchstart && i.touchend && i.touchmove
                } catch(e) {
                    return ! 1
                }
            }
            function t() {
                return r.touchSupport === !0 || r.touchSupport === !1 ? r.touchSupport: n()
            }
            return {
                createDragger: function(n) {
                    return function(t) {
                        return (t.pageX = t.originalEvent.changedTouches[0].pageX, t.pageY = t.originalEvent.changedTouches[0].pageY, r.disabled) ? !1 : n === "move" && !r.allowMove ? !1 : (ut = !0, ii(n, ot(t)), t.stopPropagation(), t.preventDefault(), !1)
                    }
                },
                newSelection: function(n) {
                    return n.pageX = n.originalEvent.changedTouches[0].pageX,
                    n.pageY = n.originalEvent.changedTouches[0].pageY,
                    ei(n)
                },
                isSupported: n,
                support: t()
            }
        } (),
        o = function() {
            function b(r) {
                r = y(r),
                u = n = r[0],
                i = t = r[1]
            }
            function k(n) {
                n = y(n),
                o = n[0] - u,
                c = n[1] - i,
                u = n[0],
                i = n[1]
            }
            function d() {
                return [o, c]
            }
            function g(r) {
                var f = r[0],
                o = r[1];
                0 > n + f && (f -= f + n),
                0 > t + o && (o -= o + t),
                e < i + o && (o += e - (i + o)),
                s < u + f && (f += s - (u + f)),
                n += f,
                u += f,
                t += o,
                i += o
            }
            function nt(n) {
                var t = v();
                switch (n) {
                case "ne":
                    return [t.x2, t.y];
                case "nw":
                    return [t.x, t.y];
                case "se":
                    return [t.x2, t.y2];
                case "sw":
                    return [t.x, t.y2]
                }
            }
            function v() {
                if (!r.aspectRatio) return tt();
                var v = r.aspectRatio,
                b = r.minSize[0] / l,
                y = r.maxSize[0] / l,
                g = r.maxSize[1] / a,
                k = u - n,
                d = i - t,
                nt = Math.abs(k),
                it = Math.abs(d),
                rt = nt / it,
                o,
                c;
                return y === 0 && (y = s * 10),
                g === 0 && (g = e * 10),
                rt < v ? (c = i, w = it * v, o = k < 0 ? n - w: w + n, o < 0 ? (o = 0, h = Math.abs((o - n) / v), c = d < 0 ? t - h: h + t) : o > s && (o = s, h = Math.abs((o - n) / v), c = d < 0 ? t - h: h + t)) : (o = u, h = nt / v, c = d < 0 ? t - h: t + h, c < 0 ? (c = 0, w = Math.abs((c - t) * v), o = k < 0 ? n - w: w + n) : c > e && (c = e, w = Math.abs(c - t) * v, o = k < 0 ? n - w: w + n)),
                o > n ? (o - n < b ? o = n + b: o - n > y && (o = n + y), c = c > t ? t + (o - n) / v: t - (o - n) / v) : o < n && (n - o < b ? o = n - b: n - o > y && (o = n - y), c = c > t ? t + (n - o) / v: t - (n - o) / v),
                o < 0 ? (n -= o, o = 0) : o > s && (n -= o - s, o = s),
                c < 0 ? (t -= c, c = 0) : c > e && (t -= c - e, c = e),
                p(f(n, t, o, c))
            }
            function y(n) {
                return n[0] < 0 && (n[0] = 0),
                n[1] < 0 && (n[1] = 0),
                n[0] > s && (n[0] = s),
                n[1] > e && (n[1] = e),
                [n[0], n[1]]
            }
            function f(n, t, i, r) {
                var u = n,
                f = i,
                e = t,
                o = r;
                return i < n && (u = i, f = n),
                r < t && (e = r, o = t),
                [Math.round(u), Math.round(e), Math.round(f), Math.round(o)]
            }
            function tt() {
                var o = u - n,
                h = i - t,
                r;
                return st && Math.abs(o) > st && (u = o > 0 ? n + st: n - st),
                ht && Math.abs(h) > ht && (i = h > 0 ? t + ht: t - ht),
                lt / a && Math.abs(h) < lt / a && (i = h > 0 ? t + lt / a: t - lt / a),
                ct / l && Math.abs(o) < ct / l && (u = o > 0 ? n + ct / l: n - ct / l),
                n < 0 && (u -= n, n -= n),
                t < 0 && (i -= t, t -= t),
                u < 0 && (n -= u, u -= u),
                i < 0 && (t -= i, i -= i),
                u > s && (r = u - s, n -= r, u -= r),
                i > e && (r = i - e, t -= r, i -= r),
                n > s && (r = n - e, i -= r, t -= r),
                t > e && (r = t - e, i -= r, t -= r),
                p(f(n, t, u, i))
            }
            function p(n) {
                return {
                    x: n[0],
                    y: n[1],
                    x2: n[2],
                    y2: n[3],
                    w: n[2] - n[0],
                    h: n[3] - n[1]
                }
            }
            var n = 0,
            t = 0,
            u = 0,
            i = 0,
            o, c;
            return {
                flipCoords: f,
                setPressed: b,
                setCurrent: k,
                getOffset: d,
                moveOffset: g,
                getCorner: nt,
                getFixed: v
            }
        } (),
        f = function() {
            function s(t) {
                var i = n("<div />").css({
                    position: "absolute",
                    opacity: r.borderOpacity
                }).addClass(et(t));
                return kt.append(i),
                i
            }
            function p(t, i) {
                var r = n("<div />").mousedown(ui(t)).css({
                    cursor: t + "-resize",
                    position: "absolute",
                    zIndex: i
                });
                return g.support && r.bind("touchstart", g.createDragger(t)),
                tt.append(r),
                r
            }
            function st(n) {
                return p(n, y++).css({
                    top: c( - i + 1),
                    left: c( - i + 1),
                    opacity: r.handleOpacity
                }).addClass(et("handle"))
            }
            function h(n) {
                var t = r.handleSize,
                u = t,
                f = t,
                e = i,
                o = i;
                switch (n) {
                case "n":
                case "s":
                    f = nt(100);
                    break;
                case "e":
                case "w":
                    u = nt(100)
                }
                return p(n, y++).width(f).height(u).css({
                    top: c( - e + 1),
                    left: c( - o + 1)
                })
            }
            function w(n) {
                for (var i = 0; i < n.length; i++) t[n[i]] = st(n[i])
            }
            function v(n) {
                var f = Math.round(n.h / 2 - i),
                e = Math.round(n.w / 2 - i),
                o = -i + 1,
                s = -i + 1,
                r = n.w - i,
                u = n.h - i,
                h,
                l;
                t.e && (t.e.css({
                    top: c(f),
                    left: c(r)
                }), t.w.css({
                    top: c(f)
                }), t.s.css({
                    top: c(u),
                    left: c(e)
                }), t.n.css({
                    left: c(e)
                })),
                t.ne && (t.ne.css({
                    left: c(r)
                }), t.se.css({
                    top: c(u),
                    left: c(r)
                }), t.sw.css({
                    top: c(u)
                })),
                t.b && (t.b.css({
                    top: c(u)
                }), t.r.css({
                    left: c(r)
                }))
            }
            function ht(n, t) {
                at.css({
                    top: c( - t),
                    left: c( - n)
                }),
                it.css({
                    top: c(t),
                    left: c(n)
                })
            }
            function ct(n, t) {
                it.width(n).height(t)
            }
            function k() {
                var n = o.getFixed();
                o.setPressed([n.x, n.y]),
                o.setCurrent([n.x2, n.y2]),
                d()
            }
            function d() {
                if (f) return rt()
            }
            function rt() {
                var n = o.getFixed();
                ct(n.w, n.h),
                ht(n.x, n.y),
                e && v(n),
                f || lt(),
                r.onChange.call(b, wt(n))
            }
            function lt() {
                it.show(),
                r.bgFade ? u.fadeTo(r.fadeTime, vt) : u.css("opacity", vt),
                f = !0
            }
            function yt() {
                l(),
                it.hide(),
                r.bgFade ? u.fadeTo(r.fadeTime, 1) : u.css("opacity", 1),
                f = !1,
                r.onRelease.call(b)
            }
            function pt() {
                e && (v(o.getFixed()), tt.show())
            }
            function ut() {
                return e = !0,
                r.allowResize ? (v(o.getFixed()), tt.show(), !0) : void 0
            }
            function l() {
                e = !1,
                tt.hide()
            }
            function ft(n) {
                hi === n ? l() : ut()
            }
            function bt() {
                ft(!1),
                k()
            }
            var f, y = 370,
            ot = {},
            t = {},
            e = !1,
            i = r.handleOffset,
            a;
            return r.drawBorders && (ot = {
                top: s("hline"),
                bottom: s("hline bottom"),
                left: s("vline"),
                right: s("vline right")
            }),
            r.dragEdges && (t.t = h("n"), t.b = h("s"), t.r = h("e"), t.l = h("w")),
            r.sideHandles && w(["n", "s", "e", "w"]),
            r.cornerHandles && w(["sw", "nw", "ne", "se"]),
            a = oi().mousedown(ui("move")).css({
                cursor: "move",
                position: "absolute",
                zIndex: 360
            }),
            g.support && a.bind("touchstart.jcrop", g.createDragger("move")),
            kt.append(a),
            l(),
            {
                updateVisible: d,
                update: rt,
                release: yt,
                refresh: k,
                isAwake: function() {
                    return f
                },
                setCursor: function(n) {
                    a.css("cursor", n)
                },
                enableHandles: ut,
                enableOnly: function() {
                    e = !0
                },
                showHandles: pt,
                disableHandles: l,
                animMode: ft,
                done: bt
            }
        } (),
        p = function() {
            function c() {
                d.css({
                    zIndex: 450
                }),
                h && n(document).bind("mousemove", i).bind("mouseup", t)
            }
            function l() {
                d.css({
                    zIndex: 290
                }),
                h && n(document).unbind("mousemove", i).unbind("mouseup", t)
            }
            function i(n) {
                return e(ot(n)),
                !1
            }
            function t(n) {
                return n.preventDefault(),
                n.stopPropagation(),
                ut && (ut = !1, s(ot(n)), f.isAwake() && r.onSelect.call(b, wt(o.getFixed())), l(), e = function() {},
                s = function() {}),
                !1
            }
            function a(n, t) {
                return ut = !0,
                e = n,
                s = t,
                c(),
                !1
            }
            function v(n) {
                return n.pageX = n.originalEvent.changedTouches[0].pageX,
                n.pageY = n.originalEvent.changedTouches[0].pageY,
                i(n)
            }
            function y(n) {
                return n.pageX = n.originalEvent.changedTouches[0].pageX,
                n.pageY = n.originalEvent.changedTouches[0].pageY,
                t(n)
            }
            function p(n) {
                d.css("cursor", n)
            }
            var e = function() {},
            s = function() {},
            h = r.trackDocument;
            return g.support && n(document).bind("touchmove", v).bind("touchend", y),
            h || d.mousemove(i).mouseup(t).mouseout(t),
            u.before(d),
            {
                activateHandlers: a,
                setCursor: p
            }
        } (),
        dt = function() {
            function s() {
                r.keySupport && (t.show(), t.focus())
            }
            function h() {
                t.hide()
            }
            function i(n, t, i) {
                r.allowMove && (o.moveOffset([t, i]), f.updateVisible()),
                n.preventDefault(),
                n.stopPropagation()
            }
            function c(n) {
                if (n.ctrlKey) return ! 0;
                ci = n.shiftKey ? !0 : !1;
                var t = ci ? 10 : 1;
                switch (n.keyCode) {
                case 37:
                    i(n, -t, 0);
                    break;
                case 39:
                    i(n, t, 0);
                    break;
                case 38:
                    i(n, 0, -t);
                    break;
                case 40:
                    i(n, 0, t);
                    break;
                case 27:
                    f.release();
                    break;
                case 9:
                    return ! 0
                }
                return ! 1
            }
            var t = n('<input type="radio" />').css({
                position: "fixed",
                left: "-120px",
                width: "12px"
            }),
            e = n("<div />").css({
                position: "absolute",
                overflow: "hidden"
            }).append(t);
            return r.keySupport && (t.keydown(c).blur(h), yt || !r.fixedSupport ? (t.css({
                position: "absolute",
                left: "-20px"
            }), e.append(t).insertBefore(u)) : t.insertBefore(u)),
            {
                watchKeys: s
            }
        } ();
        return g.support && d.bind("touchstart", g.newSelection),
        tt.hide(),
        gt(!0),
        b = {
            setImage: er,
            animateTo: nr,
            setSelect: li,
            setOptions: rr,
            tellSelect: tr,
            tellScaled: ir,
            setClass: gi,
            disable: vi,
            enable: yi,
            cancel: ur,
            release: f.release,
            destroy: fr,
            focus: dt.watchKeys,
            getBounds: function() {
                return [s * l, e * a]
            },
            getWidgetSize: function() {
                return [s, e]
            },
            getScaleFactor: function() {
                return [l, a]
            },
            ui: {
                holder: v,
                selection: it
            }
        },
        n.browser.msie && v.bind("selectstart",
        function() {
            return ! 1
        }),
        k.data("Jcrop", b),
        b
    },
    n.fn.Jcrop = function(t, i) {
        function r(r) {
            var f = typeof t == "object" ? t: {},
            e = f.useImg || r.src,
            u = new Image;
            u.onload = function() {
                function e() {
                    var t = n.Jcrop(r, f);
                    typeof i == "function" && i.call(t)
                }
                function t() {
                    u.width && u.height ? e() : window.setTimeout(t, 50)
                }
                window.setTimeout(t, 50)
            },
            u.src = e
        }
        return this.each(function() {
            if (n(this).data("Jcrop")) {
                if (t === "api") return n(this).data("Jcrop");
                n(this).data("Jcrop").setOptions(t)
            } else r(this)
        }),
        this
    },
    n.Jcrop.defaults = {
        allowSelect: !0,
        allowMove: !0,
        allowResize: !0,
        trackDocument: !0,
        baseClass: "jcrop",
        addClass: null,
        bgColor: "black",
        bgOpacity: .6,
        bgFade: !1,
        borderOpacity: .4,
        handleOpacity: .5,
        handleSize: 9,
        handleOffset: 5,
        aspectRatio: 0,
        keySupport: !0,
        cornerHandles: !0,
        sideHandles: !0,
        drawBorders: !0,
        dragEdges: !0,
        fixedSupport: !0,
        touchSupport: null,
        boxWidth: 0,
        boxHeight: 0,
        boundary: 2,
        fadeTime: 400,
        animationDelay: 20,
        swingSpeed: 3,
        minSelect: [0, 0],
        maxSize: [0, 0],
        minSize: [0, 0],
        onChange: function() {},
        onSelect: function() {},
        onRelease: function() {}
    }
})(jQuery),
jQuery &&
function(n) {
    n.extend(n.fn, {
        selectBox: function(t, i) {
            var v, e = "",
            y = navigator.platform.match(/mac/i),
            d = function(t, i) {
                var e, a, s, v, o, l, y;
                if (navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i) || t.tagName.toLowerCase() !== "select" || (t = n(t), t.data("selectBox-control"))) return ! 1;
                var f = n('<a class="selectBox" />'),
                d = t.attr("multiple") || parseInt(t.attr("size")) > 1,
                g = i || {};
                f.width(t.outerWidth()).addClass(t.attr("class")).attr("title", t.attr("title") || "").attr("tabindex", parseInt(t.attr("tabindex"))).css("display", "inline-block").bind("focus.selectBox",
                function() { (this !== document.activeElement && document.body !== document.activeElement && n(document.activeElement).blur(), f.hasClass("selectBox-active")) || (f.addClass("selectBox-active"), t.trigger("focus"))
                }).bind("blur.selectBox",
                function() {
                    f.hasClass("selectBox-active") && (f.removeClass("selectBox-active"), t.trigger("blur"))
                }),
                n(window).data("selectBox-bindings") || n(window).data("selectBox-bindings", !0).bind("scroll.selectBox", r).bind("resize.selectBox", r),
                t.attr("disabled") && f.addClass("selectBox-disabled"),
                t.bind("click.selectBox",
                function(n) {
                    f.focus(),
                    n.preventDefault()
                }),
                d ? (e = c(t, "inline"), f.append(e).data("selectBox-options", e).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox",
                function(n) {
                    b(t, n)
                }).bind("keypress.selectBox",
                function(n) {
                    k(t, n)
                }).bind("mousedown.selectBox",
                function(t) {
                    n(t.target).is("A.selectBox-inline") && t.preventDefault(),
                    f.hasClass("selectBox-focus") || f.focus()
                }).insertAfter(t), t[0].style.height || (a = t.attr("size") ? parseInt(t.attr("size")) : 5, s = f.clone().removeAttr("id").css({
                    position: "absolute",
                    top: "-9999em"
                }).show().appendTo("body"), s.find(".selectBox-options").html("<li><a> <\/a><\/li>"), v = parseInt(s.find(".selectBox-options A:first").html("&nbsp;").outerHeight()), s.remove(), f.height(v * a)), h(f)) : (o = n('<span class="selectBox-label" />'), l = n('<span class="selectBox-arrow" />'), o.attr("class", p(t)).text(w(t)), e = c(t, "dropdown"), e.appendTo("BODY"), f.data("selectBox-options", e).addClass("selectBox-dropdown").append(o).append(l).bind("mousedown.selectBox",
                function(n) {
                    f.hasClass("selectBox-menuShowing") ? r() : (n.stopPropagation(), e.data("selectBox-down-at-x", n.screenX).data("selectBox-down-at-y", n.screenY), u(t))
                }).bind("keydown.selectBox",
                function(n) {
                    b(t, n)
                }).bind("keypress.selectBox",
                function(n) {
                    k(t, n)
                }).bind("open.selectBox",
                function(n, i) {
                    i && i._selectBox === !0 || u(t)
                }).bind("close.selectBox",
                function(n, t) {
                    t && t._selectBox === !0 || r()
                }).insertAfter(t), y = f.width() - l.outerWidth() - parseInt(o.css("paddingLeft")) - parseInt(o.css("paddingLeft")), o.width(y), h(f)),
                t.addClass("selectBox").data("selectBox-control", f).data("selectBox-settings", g).hide()
            },
            c = function(t, i) {
                var u, s = function(t, i) {
                    return t.children("OPTION, OPTGROUP").each(function() {
                        if (n(this).is("OPTION")) n(this).length > 0 ? ft(n(this), i) : i.append("<li> <\/li>");
                        else {
                            var t = n('<li class="selectBox-optgroup" />');
                            t.text(n(this).attr("label")),
                            i.append(t),
                            i = s(n(this), i)
                        }
                    }),
                    i
                },
                e,
                c;
                switch (i) {
                case "inline":
                    return u = n('<ul class="selectBox-options" />'),
                    u = s(t, u),
                    u.find("A").bind("mouseover.selectBox",
                    function() {
                        f(t, n(this).parent())
                    }).bind("mouseout.selectBox",
                    function() {
                        a(t, n(this).parent())
                    }).bind("mousedown.selectBox",
                    function(n) {
                        n.preventDefault(),
                        t.selectBox("control").hasClass("selectBox-active") || t.selectBox("control").focus()
                    }).bind("mouseup.selectBox",
                    function(i) {
                        r(),
                        o(t, n(this).parent(), i)
                    }),
                    h(u),
                    u;
                case "dropdown":
                    if (u = n('<ul class="selectBox-dropdown-menu selectBox-options" />'), u = s(t, u), u.data("selectBox-select", t).css("display", "none").appendTo("BODY").find("A").bind("mousedown.selectBox",
                    function(n) {
                        n.preventDefault(),
                        n.screenX === u.data("selectBox-down-at-x") && n.screenY === u.data("selectBox-down-at-y") && (u.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"), r())
                    }).bind("mouseup.selectBox",
                    function(i) { (i.screenX !== u.data("selectBox-down-at-x") || i.screenY !== u.data("selectBox-down-at-y")) && (u.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"), o(t, n(this).parent()), r())
                    }).bind("mouseover.selectBox",
                    function() {
                        f(t, n(this).parent())
                    }).bind("mouseout.selectBox",
                    function() {
                        a(t, n(this).parent())
                    }), e = t.attr("class") || "", e !== "") {
                        e = e.split(" ");
                        for (c in e) u.addClass(e[c] + "-selectBox-dropdown-menu")
                    }
                    return h(u),
                    u
                }
            },
            p = function(t) {
                var i = n(t).find("OPTION:selected");
                return ("selectBox-label " + (i.attr("class") || "")).replace(/\s+$/, "")
            },
            w = function(t) {
                var i = n(t).find("OPTION:selected");
                return i.text() || " "
            },
            l = function(t) {
                t = n(t);
                var i = t.data("selectBox-control");
                i && i.find(".selectBox-label").attr("class", p(t)).text(w(t))
            },
            g = function(t) {
                var i, r;
                (t = n(t), i = t.data("selectBox-control"), i) && (r = i.data("selectBox-options"), r.remove(), i.remove(), t.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control", null).removeData("selectBox-settings").data("selectBox-settings", null).show())
            },
            nt = function(t) {
                t = n(t),
                t.selectBox("options", t.html())
            },
            u = function(t) {
                var c, o, h;
                t = n(t);
                var i = t.data("selectBox-control"),
                u = t.data("selectBox-settings"),
                e = i.data("selectBox-options");
                if (i.hasClass("selectBox-disabled") || (r(), c = isNaN(i.css("borderBottomWidth")) ? 0 : parseInt(i.css("borderBottomWidth")), e.width(i.innerWidth()).css({
                    top: i.offset().top + i.outerHeight() - c,
                    left: i.offset().left
                }), t.triggerHandler("beforeopen"))) return ! 1;
                o = function() {
                    t.triggerHandler("open", {
                        _selectBox: !0
                    })
                };
                switch (u.menuTransition) {
                case "fade":
                    e.fadeIn(u.menuSpeed, o);
                    break;
                case "slide":
                    e.slideDown(u.menuSpeed, o);
                    break;
                default:
                    e.show(u.menuSpeed, o)
                }
                u.menuSpeed || o(),
                h = e.find(".selectBox-selected:first"),
                s(t, h, !0),
                f(t, h),
                i.addClass("selectBox-menuShowing"),
                n(document).bind("mousedown.selectBox",
                function(t) {
                    n(t.target).parents().andSelf().hasClass("selectBox-options") || r()
                })
            },
            r = function() {
                n(".selectBox-dropdown-menu:visible").length !== 0 && (n(document).unbind("mousedown.selectBox"), n(".selectBox-dropdown-menu").each(function() {
                    var r = n(this),
                    u = r.data("selectBox-select"),
                    f = u.data("selectBox-control"),
                    t = u.data("selectBox-settings"),
                    i;
                    if (u.triggerHandler("beforeclose")) return ! 1;
                    if (i = function() {
                        u.triggerHandler("close", {
                            _selectBox: !0
                        })
                    },
                    t) {
                        switch (t.menuTransition) {
                        case "fade":
                            r.fadeOut(t.menuSpeed, i);
                            break;
                        case "slide":
                            r.slideUp(t.menuSpeed, i);
                            break;
                        default:
                            r.hide(t.menuSpeed, i)
                        }
                        t.menuSpeed || i(),
                        f.removeClass("selectBox-menuShowing")
                    } else n(this).hide(),
                    n(this).triggerHandler("close", {
                        _selectBox: !0
                    }),
                    n(this).removeClass("selectBox-menuShowing")
                }))
            },
            o = function(t, i, r) {
                var u, s, f, o, e;
                return (t = n(t), i = n(i), u = t.data("selectBox-control"), s = t.data("selectBox-settings"), u.hasClass("selectBox-disabled")) ? !1 : i.length === 0 || i.hasClass("selectBox-disabled") ? !1 : (t.attr("multiple") ? r.shiftKey && u.data("selectBox-last-selected") ? (i.toggleClass("selectBox-selected"), f = i.index() > u.data("selectBox-last-selected").index() ? i.siblings().slice(u.data("selectBox-last-selected").index(), i.index()) : i.siblings().slice(i.index(), u.data("selectBox-last-selected").index()), f = f.not(".selectBox-optgroup, .selectBox-disabled"), i.hasClass("selectBox-selected") ? f.addClass("selectBox-selected") : f.removeClass("selectBox-selected")) : y && r.metaKey || !y && r.ctrlKey ? i.toggleClass("selectBox-selected") : (i.siblings().removeClass("selectBox-selected"), i.addClass("selectBox-selected")) : (i.siblings().removeClass("selectBox-selected"), i.addClass("selectBox-selected")), u.hasClass("selectBox-dropdown") && u.find(".selectBox-label").text(i.text()), o = 0, e = [], t.attr("multiple") ? u.find(".selectBox-selected A").each(function() {
                    e[o++] = n(this).attr("rel")
                }) : e = i.find("A").attr("rel"), u.data("selectBox-last-selected", i), t.val() !== e && (t.val(e), l(t), t.trigger("change")), !0)
            },
            f = function(t, i) {
                t = n(t),
                i = n(i);
                var r = t.data("selectBox-control"),
                u = r.data("selectBox-options");
                u.find(".selectBox-hover").removeClass("selectBox-hover"),
                i.addClass("selectBox-hover")
            },
            a = function(t, i) {
                t = n(t),
                i = n(i);
                var r = t.data("selectBox-control"),
                u = r.data("selectBox-options");
                u.find(".selectBox-hover").removeClass("selectBox-hover")
            },
            s = function(t, i, r) {
                if (i && i.length !== 0) {
                    t = n(t);
                    var f = t.data("selectBox-control"),
                    e = f.data("selectBox-options"),
                    u = f.hasClass("selectBox-dropdown") ? e: e.parent(),
                    o = parseInt(i.offset().top - u.position().top),
                    s = parseInt(o + i.outerHeight());
                    r ? u.scrollTop(i.offset().top - u.offset().top + u.scrollTop() - u.height() / 2) : (o < 0 && u.scrollTop(i.offset().top - u.offset().top + u.scrollTop()), s > u.height() && u.scrollTop(i.offset().top + i.outerHeight() - u.offset().top + u.scrollTop() - u.height()))
                }
            },
            b = function(t, i) {
                var h, c;
                t = n(t);
                var v = t.data("selectBox-control"),
                l = v.data("selectBox-options"),
                w = t.data("selectBox-settings"),
                y = 0,
                p = 0;
                if (!v.hasClass("selectBox-disabled")) switch (i.keyCode) {
                case 8:
                    i.preventDefault(),
                    e = "";
                    break;
                case 9:
                case 27:
                    r(),
                    a(t);
                    break;
                case 13:
                    v.hasClass("selectBox-menuShowing") ? (o(t, l.find("LI.selectBox-hover:first"), i), v.hasClass("selectBox-dropdown") && r()) : u(t);
                    break;
                case 38:
                case 37:
                    if (i.preventDefault(), v.hasClass("selectBox-menuShowing")) {
                        for (h = l.find(".selectBox-hover").prev("LI"), y = l.find("LI:not(.selectBox-optgroup)").length, p = 0; h.length === 0 || h.hasClass("selectBox-disabled") || h.hasClass("selectBox-optgroup");) if (h = h.prev("LI"), h.length === 0 && (h = w.loopOptions ? l.find("LI:last") : l.find("LI:first")), ++p >= y) break;
                        f(t, h),
                        o(t, h, i),
                        s(t, h)
                    } else u(t);
                    break;
                case 40:
                case 39:
                    if (i.preventDefault(), v.hasClass("selectBox-menuShowing")) {
                        for (c = l.find(".selectBox-hover").next("LI"), y = l.find("LI:not(.selectBox-optgroup)").length, p = 0; c.length === 0 || c.hasClass("selectBox-disabled") || c.hasClass("selectBox-optgroup");) if (c = c.next("LI"), c.length === 0 && (c = w.loopOptions ? l.find("LI:first") : l.find("LI:last")), ++p >= y) break;
                        f(t, c),
                        o(t, c, i),
                        s(t, c)
                    } else u(t)
                }
            },
            k = function(t, i) {
                t = n(t);
                var r = t.data("selectBox-control"),
                o = r.data("selectBox-options");
                if (!r.hasClass("selectBox-disabled")) switch (i.keyCode) {
                case 9:
                case 27:
                case 13:
                case 38:
                case 37:
                case 40:
                case 39:
                    break;
                default:
                    r.hasClass("selectBox-menuShowing") || u(t),
                    i.preventDefault(),
                    clearTimeout(v),
                    e += String.fromCharCode(i.charCode || i.keyCode),
                    o.find("A").each(function() {
                        if (n(this).text().substr(0, e.length).toLowerCase() === e.toLowerCase()) return f(t, n(this).parent()),
                        s(t, n(this).parent()),
                        !1
                    }),
                    v = setTimeout(function() {
                        e = ""
                    },
                    1e3)
                }
            },
            tt = function(t) {
                t = n(t),
                t.attr("disabled", !1);
                var i = t.data("selectBox-control");
                i && i.removeClass("selectBox-disabled")
            },
            it = function(t) {
                t = n(t),
                t.attr("disabled", !0);
                var i = t.data("selectBox-control");
                i && i.addClass("selectBox-disabled")
            },
            rt = function(t, i) {
                var r, u, f;
                (t = n(t), t.val(i), i = t.val(), i === null && (i = t.children().first().val(), t.val(i)), r = t.data("selectBox-control"), r) && (u = t.data("selectBox-settings"), f = r.data("selectBox-options"), l(t), f.find(".selectBox-selected").removeClass("selectBox-selected"), f.find("A").each(function() {
                    if (typeof i == "object") for (var t = 0; t < i.length; t++) n(this).attr("rel") == i[t] && n(this).parent().addClass("selectBox-selected");
                    else n(this).attr("rel") == i && n(this).parent().addClass("selectBox-selected")
                }), u.change && u.change.call(t))
            },
            ut = function(t, r) {
                var f, a, u, e, o, h, s;
                t = n(t),
                f = t.data("selectBox-control"),
                a = t.data("selectBox-settings");
                switch (typeof i) {
                case "string":
                    t.html(i);
                    break;
                case "object":
                    t.html("");
                    for (u in i) if (i[u] !== null) if (typeof i[u] == "object") {
                        e = n('<optgroup label="' + u + '" />');
                        for (o in i[u]) e.append('<option value="' + o + '">' + i[u][o] + "<\/option>");
                        t.append(e)
                    } else h = n('<option value="' + u + '">' + i[u] + "<\/option>"),
                    t.append(h)
                }
                if (f) {
                    f.data("selectBox-options").remove(),
                    s = f.hasClass("selectBox-dropdown") ? "dropdown": "inline",
                    r = c(t, s),
                    f.data("selectBox-options", r);
                    switch (s) {
                    case "inline":
                        f.append(r);
                        break;
                    case "dropdown":
                        l(t),
                        n("BODY").append(r)
                    }
                }
            },
            h = function(t) {
                n(t).css("MozUserSelect", "none").bind("selectstart",
                function(n) {
                    n.preventDefault()
                })
            },
            ft = function(t, i) {
                var r = n("<li />"),
                u = n("<a />");
                r.addClass(t.attr("class")),
                r.data(t.data()),
                u.attr("rel", t.val()).text(t.text()),
                r.append(u),
                t.attr("disabled") && r.addClass("selectBox-disabled"),
                t.attr("selected") && r.addClass("selectBox-selected"),
                i.append(r)
            };
            switch (t) {
            case "control":
                return n(this).data("selectBox-control");
            case "settings":
                if (!i) return n(this).data("selectBox-settings");
                n(this).each(function() {
                    n(this).data("selectBox-settings", n.extend(!0, n(this).data("selectBox-settings"), i))
                });
                break;
            case "options":
                if (i === undefined) return n(this).data("selectBox-control").data("selectBox-options");
                n(this).each(function() {
                    ut(this, i)
                });
                break;
            case "value":
                if (i === undefined) return n(this).val();
                n(this).each(function() {
                    rt(this, i)
                });
                break;
            case "refresh":
                n(this).each(function() {
                    nt(this)
                });
                break;
            case "enable":
                n(this).each(function() {
                    tt(this)
                });
                break;
            case "disable":
                n(this).each(function() {
                    it(this)
                });
                break;
            case "destroy":
                n(this).each(function() {
                    g(this)
                });
                break;
            default:
                n(this).each(function() {
                    d(this, t)
                })
            }
            return n(this)
        }
    })
} (jQuery),

toggleFooterButton = function() {
    $(".input-changed").length == 0 ? ($("#save-submit").addClass("off-btn"), $("#save-submit").removeClass("act-btn")) : ($("#save-submit").removeClass("off-btn"), $("#save-submit").addClass("act-btn"))
},
resetForm = function() {
    $(".track-change").removeClass("input-changed"),
    $(".selectdrop").selectBox("refresh"),
    $(".forcounter").each(function() {
        countCharacters($(this))
    }),
    toggleFooterButton(),
    typeof resetPageForm == "function" && resetPageForm()
},
$(document).ready(function() {
    var t, i, n;
    $(".forcounter").keyup(function(n) {
        value = $(this).val();
        var t = $(this).attr("data-maxchars"); ++t,
        value.length >= t ? $(this).next().addClass("charleft-error") : $(this).next().removeClass("charleft-error"),
        countCharacters(n.target)
    }).change(function() {
        countCharacters($(this))
    }).each(function() {
        countCharacters($(this))
    }),
    $(".track-change").each(function(n, t) {
        var i = $(t).attr("type") == "checkbox" ? $(t).is(":checked") : $(t).val();
        $(t).data("initval", i),
        $(t).unbind("change.tracking"),
        $(t).bind("change.tracking",
        function() {
            var i = $(t).attr("type") == "checkbox" ? $(t).is(":checked") : $(t).val();
            i != $(t).data("initval") ? $(this).addClass("input-changed") : $(this).removeClass("input-changed"),
            toggleFooterButton()
        }),
        $(t).attr("type") != "hidden" && $(t).attr("type") != "checkbox" && ($(t).unbind("keyup.tracking"), $(t).bind("keyup.tracking",
        function() {
            $(this).val() != $(t).data("initval") ? $(this).addClass("input-changed") : $(this).removeClass("input-changed"),
            toggleFooterButton()
        }))
    }),
    t = $("#form-billing :input"),
    n = !1,
    t.change(function() {
        n = !0,
        $("#save-submit").removeClass("off-btn"),
        $("#save-submit").addClass("act-btn")
    }),
    i = $("#NewCardForm :input"),
    n = !1,
    i.change(function() {
        n = !0,
        $("#save-submit-card").removeClass("off-btn"),
        $("#save-submit-card").addClass("act-btn")
    }),
    $("#form-account :input").change(function() {
        $("#save-submit-account").removeClass("off-btn"),
        $("#save-submit-account").addClass("act-btn")
    }),
    $("#form-prefs select").change(function() {
        $("#save-submit-prefs").removeClass("off-btn"),
        $("#save-submit-prefs").addClass("act-btn")
    }),
    $("#form-personal :input").change(function() {
        $("#save-submit-personal").removeClass("off-btn"),
        $("#save-submit-personal").addClass("act-btn")
    }),
    $(".selectdrop").selectBox(),
    $("#delete-account").click(function() {
        return $("#delete-account-window").slideDown(),
        !1
    }),
    $("#del-cancel-btn").click(function() {
        return $("#delete-account-window").slideUp(function() {
            $("#thanks").delay(600).fadeIn(800).delay(3e3).fadeOut(500)
        }),
        !1
    }),
    $(".pt-info").click(function() {
        return ! 1
    }),
    $(".pt-info").qtip({
        content: {
            attr: "title"
        },
        position: {
            my: "bottom left",
            at: "top right",
            adjust: {
                x: -15
            }
        },
        show: {
            event: "click",
            delay: 0
        },
        events: {
            render: function(n, t) {
                var i = t.elements.tip
            }
        },
        style: {
            classes: "ui-tooltip-new",
            tip: {
                corner: "bottom left",
                mimic: "bottom center",
                offset: 20,
                width: 11,
                height: 7
            }
        }
    }),
    $(".td-info").click(function() {
        return ! 1
    }),
    $(".td-info").qtip({
        content: {
            attr: "title"
        },
        position: {
            my: "bottom left",
            at: "top right",
            adjust: {
                x: -15
            }
        },
        show: {
            event: "click",
            delay: 0
        },
        events: {
            render: function(n, t) {
                var i = t.elements.tip
            }
        },
        style: {
            classes: "ui-tooltip-new",
            tip: {
                corner: "bottom left",
                mimic: "bottom center",
                offset: 20,
                width: 11,
                height: 7
            }
        }
    }),
    $(".has-suggestion").hover(function() {
        var n = $(this).attr("data-suggestion");
        $(this).closest(".bl-form-set").children(".field-desc").html(n).show()
    },
    function() {
        $(this).closest(".bl-form-set").children(".field-desc").hide()
    }),
    $("#form-account").submit(function(n) {
        var t = $(this);
        (!t.valid || t.valid()) && ($("#loader-change-password").show(), $("#save-submit-account").hide(), $.post(t.attr("action"), t.serializeArray()).done(function(n) {
            if (n = n || {},
            n.success) info("password change"),
            $("#bl-currentpass").val(""),
            $("#bl-newpass").val(""),
            $("#bl-newpass2").val(""),
            $("#save-submit-account").addClass("off-btn"),
            $("#save-submit-account").removeClass("act-btn");
            else {
                var t = $.map(n.errors,
                function(n) {
                    return n + "<br />"
                }).join("");
                alert(t)
            }
            $("#loader-change-password").hide(),
            $("#save-submit-account").show()
        })),
        n.preventDefault()
    }),
    $("#form-delete").submit(function(n) {
        var t = !1;
        if ($("#form-delete").validate().element("#your-pass") || (t = !0), $("#agree-delete").is(":checked") || ($(".del-agree-valid").text("You have to accept the Terms & Conditions to delete your account"), t = !0), t) return ! 1;
        $.ajax({
            type: "POST",
            url: baseUrl + "User/DeleteUser",
            traditional: !1,
            async: !0,
            data: {
                userID: $("#UserID").val(),
                password: $("#your-pass").val()
            },
            success: function(n) {
                n.success ? (info("Your account has been deleted"), setTimeout(function(n) {
                    location = n.redirect
                },
                1e3, n)) : alert(n.errors, "Error on delete")
            },
            error: function() {}
        }),
        n.preventDefault()
    }),
    $("#del-account-btn").click(function() {
        $("#form-delete").submit()
    }),
    $(window).bind("beforeunload",
    function() {
        if ($(".input-changed").length > 0) return strMessageUnsavedChange
    }),
    $("form").submit(function() {
        var n = $(this);
        (!n.valid || n.valid()) && $(window).unbind("beforeunload")
    })
}),
$(function() {
    $("#pers-country").change(function() {
        $("#pers-city").attr("disabled", !0).removeAttr("disabled"),
        $("#pers-city").selectBox("enable")
    })
}),
function(n) {
    n.genericPopup = {
        version: "1.0",
        setDefaults: function(i) {
            n.extend(t, i)
        }
    },
    n.fn.genericPopup = function(i) {
        var r = this,
        u = !1,
        i = n.extend({},
        t, i, !n.metadata ? {}: $input.metadata()),
        o = n(i.thumbHiddenField).val(),
        f,
        e,
        s;
        n("#generic-add-image").dialog({
            autoOpen: !1,
            height: 450,
            width: 720,
            resizable: !1,
            draggable: !0,
            position: ["center", "center"],
            open: function() {
                typeof jcrop_api_add_images != "undefined" && (jcrop_api_add_images.destroy(), jcrop_api_add_images = undefined),
                n("#fromurl").val(""),
                n("#fromurl").removeAttr("disabled", "disabled");
                n("#upload-photo-placeholder").attr("src", "").hide().one("load",
                function() {
                    n(this).show()
                });
                n("a.browse-action", "#generic-add-image").addClass("medium-button-action"),
                n("a.medium-button-next", "#generic-add-image").removeClass("medium-button-action").removeClass("medium-button-action-next").addClass("medium-button").addClass("medium-next-disabled")
            }
        }),
        n("#generic-thumb-crop").dialog({
            autoOpen: !1,
            height: 530,
            width: 720,
            resizable: !1,
            draggable: !0,
            position: ["center", "center"],
            open: function() {
                typeof jcrop_api_add_images == "undefined" && (r.img = n("#generic-thumb-crop .crop-container img")[0], jcrop_api_add_images = n.Jcrop("#generic-thumb-crop .crop-container img", {
                    onChange: r.showThumbPreview,
                    onSelect: r.showThumbPreview,
                    setSelect: [0, 0, 5e3, 5e3],
                    aspectRatio: 1,
                    bgColor: "#fff",
                    boxWidth: 400,
                    boxHeight: 258
                },
                function() {
                    var n = this.getBounds();
                    f = n[0],
                    e = n[1],
                    jcrop_api1 = this,
                    f > e ? this.setSelect([0, 0, e, e]) : this.setSelect([0, 0, f, f])
                }))
            },
            close: function() {}
        }),
        n("#generic-thumb-credits").dialog({
            autoOpen: !1,
            height: 510,
            width: 684,
            resizable: !1,
            draggable: !0,
            position: ["center", "center"]
        }),
        n("#generic-add-image .medium-button-action-cancel, #generic-thumb-crop .medium-button-action-cancel, #generic-thumb-credits .medium-button-action-cancel").unbind("click"),
        n("#generic-add-image .medium-button-action-cancel, #generic-thumb-crop .medium-button-action-cancel, #generic-thumb-credits .medium-button-action-cancel").bind("click",
        function() {
            return confirm(i.messageConfirmProgressLost, "",
            function() {
                n("#generic-add-image").dialog("close"),
                n("#generic-thumb-crop").dialog("close"),
                n("#generic-thumb-credits").dialog("close")
            }),
            !1
        }),
        n("#add-thumb").live("click",
        function() {
            var t, r, f;
            return o = n(i.thumbHiddenField).val(),
            o && i.thumbShowCredits ? (t = n(i.thumbCreditsHidden).val(), n("#generic-credits", "#generic-thumb-credits").val(t).trigger("keyup"), t ? n(".credits-label").html(i.editCreditsLabel) : n(".credits-label").html(i.addCreditsLabel), r = n(i.thumbHiddenField).val(), f = baseUrl + "Image/DownloadImageForDevice/" + r + "/thumb/144", n("#generic-thumb-credits .cr-preview img").attr("src", f), n("#generic-thumb-credits .cr-preview img").css({
                width: "auto",
                height: "auto",
                marginLeft: "0px",
                marginTop: "0px"
            }), u = !0, n("#generic-thumb-credits").dialog("open"), n("#generic-thumb-credits").find(".medium-button-prev").children().html(i.changeLabel)) : (n("#generic-add-image").dialog("open"), n("#generic-thumb-credits").find(".medium-button-prev").children().html(i.cropLabel), u = !1),
            !1
        }),
        n("#generic-add-image .medium-button-next").bind("click",
        function() {
            return n("#upload-photo-placeholder").attr("src") != "" && (n("#generic-add-image").dialog("close"), n("#generic-thumb-crop").dialog("open")),
            !1
        }),
        n("#generic-thumb-crop .medium-button-prev").bind("click",
        function() {
            return n("#generic-thumb-crop").dialog("close"),
            n("#generic-add-image").dialog("open"),
            !1
        }),
        n("#generic-thumb-crop .medium-button-action-next").bind("click",
        function() {
            return n("#generic-thumb-crop").dialog("close"),
            i.thumbShowCredits ? (n("#generic-thumb-credits").find(".medium-button-prev").children().html(i.cropLabel), n("#generic-thumb-credits").dialog("open")) : r.cropImage(),
            !1
        }),
        n("#generic-thumb-credits .medium-button-prev").bind("click",
        function() {
            return n("#generic-thumb-credits").dialog("close"),
            u ? (n("#generic-add-image").dialog("open"), u = !1) : n("#generic-thumb-crop").dialog("open"),
            !1
        }),
        n("#generic-thumb-credits .medium-button-action-finish").bind("click",
        function() {
            n("#thumb-generic-form").submit()
        }),
        n("#fromurl").bind("blur",
        function() {
            if (n("#fromurl").val().indexOf("http") != 0) {
                n("#fromurl").val(""),
                n("#upload-photo-placeholder").hide(),
                n("#upload-photo-placeholder").attr("src", ""),
                n("a.browse-action", "#generic-add-image").addClass("medium-button-action"),
                n("a.medium-button-next", "#generic-add-image").removeClass("medium-button-action").removeClass("medium-button-action-next").addClass("medium-button").addClass("medium-next-disabled");
                return
            }
        }),
        n("#fromurl").bind("keyup",
        function() {
            var t = n("<img />");
            n("#upload-photo-placeholder").hide(),
            n("#upload-photo-placeholder").attr("src", ""),
            t.load(function() {
                this.height != 0 && (n("#image-source").val(n("#fromurl").val()), n(".generic-image-preview").attr("src", n("#fromurl").val()), n("#upload-photo-placeholder").show(), n("a.browse-action", "#generic-add-image").addClass("medium-button").removeClass("medium-button-action"), n("a.medium-button-next", "#generic-add-image").addClass("medium-button-action").addClass("medium-button-action-next").removeClass("medium-button").removeClass("medium-next-disabled"))
            }),
            t.attr("src", n("#fromurl").val())
        }),
        n("#thumb-generic-form").submit(function(t) {
            n(this).valid() && r.validForm(),
            t.preventDefault()
        }),
        this.validForm = function() {
            n("#generic-thumb-credits").dialog("close"),
            u ? (n(i.thumbCreditsHidden).val(n("#generic-credits", "#generic-thumb-credits").val()), n(i.thumbCreditsHidden).trigger("change")) : r.cropImage(),
            n("#add-thumb").children().first().html(i.editImageLabel),
            n("#add-thumb").parent().addClass("not-empty")
        },
        this.cropImage = function() {
            showLoading("Cropping, please wait"),
            n.ajax({
                url: baseUrl + "Image/CropThumbnail/",
                type: "POST",
                async: !0,
                data: {
                    userID: userID,
                    source: n("#image-source").val(),
                    x: n("#thumb-x").val(),
                    y: n("#thumb-y").val(),
                    h: n("#thumb-h").val(),
                    w: n("#thumb-w").val()
                },
                success: function(t) {
                    var r = baseUrl + "Image/DownloadImageForDevice/" + t.name + "/thumb/144";
                    n(i.thumbHiddenField).val(t.name),
                    n(i.thumbHiddenField).trigger("change"),
                    n(i.thumbContainer).css("background-image", "url('" + r + "')"),
                    i.thumbCreditsHidden && n(i.thumbCreditsHidden).val(n("#generic-credits", "#generic-thumb-credits").val())
                },
                error: function(n, t, i) {
                    alert(n.status),
                    alert(i)
                },
                complete: function() {
                    hideLoading()
                }
            })
        },
        this.showThumbPreview = function(t) {
            n("#thumb-x").val(t.x),
            n("#thumb-y").val(t.y),
            n("#thumb-w").val(t.w),
            n("#thumb-h").val(t.h);
            var i = 200 / t.w,
            u = 200 / t.h;
            n("#generic-thumb-crop .cr-preview img, #generic-thumb-credits .cr-preview img").css({
                width: Math.round(i * r.img.width) + "px",
                height: Math.round(u * r.img.height) + "px",
                marginLeft: "-" + Math.round(i * t.x) + "px",
                marginTop: "-" + Math.round(u * t.y) + "px"
            })
        },
        n("#generic_file_upload").uploadify({
            uploader: baseUrl + "Scripts/swf/uploadify.swf",
            script: baseUrl + "Image/Upload",
            scriptData: {
                userID: userID,
                prefix: i.thumbPrefix
            },
            cancelImg: baseUrl + "Content/images/cancel.png",
            buttonText: "Browse files",
            folder: "uploads",
            auto: !0,
            width: 126,
            height: 42,
            wmode: "transparent",
            hideButton: !0,
            fileExt: "*.jpeg;*.gif;*.png;*.jpg;*.bmp",
            fileDesc: "Image Files",
            onComplete: function(t, i, r, f) {
                info("upload completed"),
                u = !1,
                result = n.parseJSON(f),
                n("#image-source").val(result.name);
                var o = baseUrl + "Image/DownloadImageForDevice/" + result.name + "/temp/0";
                n(".generic-image-preview").attr("src", o),
                n("#upload-photo-placeholder").show(),
                n("#generic-add-image .drop-zone .filename").empty().html(r.name),
                n("#fromurl").attr("disabled", "disabled"),
                n("a.browse-action", "#generic-add-image").addClass("medium-button").removeClass("medium-button-action"),
                n("a.medium-button-next", "#generic-add-image").addClass("medium-button-action").addClass("medium-button-action-next").removeClass("medium-button").removeClass("medium-next-disabled")
            }
        }),
        n.isFunction(i.init) && i.init.apply(r, [$input, i])
    };
    var t = {
        thumbPrefix: "author-pic",
        thumbContainer: "#image-thumb",
        thumbHiddenField: "#Photo",
        thumbShowCredits: !1,
        thumbCreditsHidden: null,
        changeLabel: "Change thumbnail",
        cropLabel: "Crop thumbnail",
        addImageLabel: "Add image",
        editImageLabel: "Edit image",
        addCreditsLabel: "Add credits <span>(optional)<\/span>",
        editCreditsLabel: "Edit credits",
        browseLabel: "Browse file",
        messageConfirmProgressLost: "Are you sure?"
    }
} (jQuery),
$().ready(function() {})