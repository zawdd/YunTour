function countCharactersAuto(n) {
    var i = $(n).data("val-length-max") ? $(n).data("val-length-max") : $(n).attr("maxlength"),
    t = i - $(n).val().length;
    $(n).next().text(t),
    t < 0 ? $(n).next().addClass("charleft-error") : $(n).next().removeClass("charleft-error")
}
function countCharacters(n) {
    var t = $(n).val().length;
    $(n).next().children().text(t)
}
var swfobject, Custom, guidiGo, languages;
(function(n, t) {
    function pt(n) {
        return i.isWindow(n) ? n: n.nodeType === 9 ? n.defaultView || n.parentWindow: !1
    }
    function wt(n) {
        if (!at[n]) {
            var e = r.body,
            t = i("<" + n + ">").appendTo(e),
            u = t.css("display");
            t.remove(),
            (u === "none" || u === "") && (f || (f = r.createElement("iframe"), f.frameBorder = f.width = f.height = 0), e.appendChild(f), y && f.createElement || (y = (f.contentWindow || f.contentDocument).document, y.write((i.support.boxModel ? "<!doctype html>": "") + "<html><body>"), y.close()), t = y.createElement(n), y.body.appendChild(t), u = i.css(t, "display"), e.removeChild(f)),
            at[n] = u
        }
        return at[n]
    }
    function c(n, t) {
        var r = {};
        return i.each(it.concat.apply([], it.slice(0, t)),
        function() {
            r[this] = n
        }),
        r
    }
    function dr() {
        rt = t
    }
    function bt() {
        return setTimeout(dr, 0),
        rt = i.now()
    }
    function gr() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function kt() {
        try {
            return new n.XMLHttpRequest
        } catch(t) {}
    }
    function nu(n, r) {
        n.dataFilter && (r = n.dataFilter(r, n.dataType));
        for (var v = n.dataTypes, s = {}, l, p = v.length, a, u = v[0], h, y, f, e, o, c = 1; c < p; c++) {
            if (c === 1) for (l in n.converters) typeof l == "string" && (s[l.toLowerCase()] = n.converters[l]);
            if (h = u, u = v[c], u === "*") u = h;
            else if (h !== "*" && h !== u) {
                if (y = h + " " + u, f = s[y] || s["* " + u], !f) {
                    o = t;
                    for (e in s) if (a = e.split(" "), (a[0] === h || a[0] === "*") && (o = s[a[1] + " " + u], o)) {
                        e = s[e],
                        e === !0 ? f = o: o === !0 && (f = e);
                        break
                    }
                }
                f || o || i.error("No conversion from " + y.replace(" ", " to ")),
                f !== !0 && (r = f ? f(r) : o(e(r)))
            }
        }
        return r
    }
    function tu(n, i, r) {
        var s = n.contents,
        f = n.dataTypes,
        c = n.responseFields,
        o, u, e, h;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === "*") f.shift(),
        o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o) for (u in s) if (s[u] && s[u].test(o)) {
            f.unshift(u);
            break
        }
        if (f[0] in r) e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                h || (h = u)
            }
            e = e || h
        }
        if (e) return e !== f[0] && f.unshift(e),
        r[e]
    }
    function ut(n, t, r, u) {
        if (i.isArray(t)) i.each(t,
        function(t, i) {
            r || wf.test(n) ? u(n, i) : ut(n + "[" + (typeof i == "object" ? t: "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else for (var f in t) ut(n + "[" + f + "]", t[f], r, u)
    }
    function dt(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n: f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }
    function w(n, i, r, u, f, e) {
        f = f || i.dataTypes[0],
        e = e || {},
        e[f] = !0;
        for (var s = n[f], h = 0, l = s ? s.length: 0, c = n === lt, o; h < l && (c || !o); h++) o = s[h](i, r, u),
        typeof o == "string" && (!c || e[o] ? o = t: (i.dataTypes.unshift(o), o = w(n, i, r, u, o, e)));
        return ! c && o || e["*"] || (o = w(n, i, r, u, "*", e)),
        o
    }
    function gt(n) {
        return function(t, r) {
            if (typeof t != "string" && (r = t, t = "*"), i.isFunction(r)) for (var o = t.toLowerCase().split(lr), f = 0, h = o.length, u, s, e; f < h; f++) u = o[f],
            e = /^\+/.test(u),
            e && (u = u.substr(1) || "*"),
            s = n[u] = n[u] || [],
            s[e ? "unshift": "push"](r)
        }
    }
    function ni(n, t, r) {
        var u = t === "width" ? n.offsetWidth: n.offsetHeight,
        f = t === "width" ? 1 : 0,
        e = 4;
        if (u > 0) {
            if (r !== "border") for (; f < e; f += 2) r || (u -= parseFloat(i.css(n, "padding" + o[f])) || 0),
            r === "margin" ? u += parseFloat(i.css(n, r + o[f])) || 0 : u -= parseFloat(i.css(n, "border" + o[f] + "Width")) || 0;
            return u + "px"
        }
        if (u = a(n, t), (u < 0 || u == null) && (u = n.style[t]), ct.test(u)) return u;
        if (u = parseFloat(u) || 0, r) for (; f < e; f += 2) u += parseFloat(i.css(n, "padding" + o[f])) || 0,
        r !== "padding" && (u += parseFloat(i.css(n, "border" + o[f] + "Width")) || 0),
        r === "margin" && (u += parseFloat(i.css(n, r + o[f])) || 0);
        return u + "px"
    }
    function iu(n) {
        var t = r.createElement("div");
        return st.appendChild(t),
        t.innerHTML = n.outerHTML,
        t.firstChild
    }
    function ti(n) {
        var t = (n.nodeName || "").toLowerCase();
        t === "input" ? ii(n) : t !== "script" && typeof n.getElementsByTagName != "undefined" && i.grep(n.getElementsByTagName("input"), ii)
    }
    function ii(n) { (n.type === "checkbox" || n.type === "radio") && (n.defaultChecked = n.checked)
    }
    function b(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }
    function ri(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? t.outerHTML = n.outerHTML: r !== "input" || n.type !== "checkbox" && n.type !== "radio" ? r === "option" ? t.selected = n.defaultSelected: r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue: r === "script" && t.text !== n.text && (t.text = n.text) : (n.checked && (t.defaultChecked = t.checked = n.checked), t.value !== n.value && (t.value = n.value)), t.removeAttribute(i.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"))
    }
    function ui(n, t) {
        if (t.nodeType === 1 && !!i.hasData(n)) {
            var u, f, o, s = i._data(n),
            r = i._data(t, s),
            e = s.events;
            if (e) {
                delete r.handle,
                r.events = {};
                for (u in e) for (f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({},
            r.data))
        }
    }
    function ru(n) {
        return i.nodeName(n, "table") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function fi(n) {
        var i = tr.split("|"),
        t = n.createDocumentFragment();
        if (t.createElement) while (i.length) t.createElement(i.pop());
        return t
    }
    function ei(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n,
        function(n, i) {
            var u = !!t.call(n, i, n);
            return u === r
        });
        if (t.nodeType) return i.grep(n,
        function(n) {
            return n === t === r
        });
        if (typeof t == "string") {
            var u = i.grep(n,
            function(n) {
                return n.nodeType === 1
            });
            if (gu.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n,
        function(n) {
            return i.inArray(n, t) >= 0 === r
        })
    }
    function oi(n) {
        return ! n || !n.parentNode || n.parentNode.nodeType === 11
    }
    function k() {
        return ! 0
    }
    function l() {
        return ! 1
    }
    function si(n, t, r) {
        var u = t + "defer",
        f = t + "queue",
        e = t + "mark",
        o = i._data(n, u); ! o || r !== "queue" && i._data(n, f) || r !== "mark" && i._data(n, e) || setTimeout(function() {
            i._data(n, f) || i._data(n, e) || (i.removeData(n, u, !0), o.fire())
        },
        0)
    }
    function ft(n) {
        for (var t in n) if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return ! 1;
        return ! 0
    }
    function hi(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(ai, "-$1").toLowerCase();
            if (u = n.getAttribute(f), typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null: i.isNumeric(u) ? +u: li.test(u) ? i.parseJSON(u) : u
                } catch(e) {}
                i.data(n, r, u)
            } else u = t
        }
        return u
    }
    function uu(n) {
        var i = ci[n] = {},
        t,
        r;
        for (n = n.split(/\s+/), t = 0, r = n.length; t < r; t++) i[n[t]] = !0;
        return i
    }
    var r = n.document,
    fu = n.navigator,
    eu = n.location,
    i = function() {
        function c() {
            if (!i.isReady) {
                try {
                    r.documentElement.doScroll("left")
                } catch(n) {
                    setTimeout(c, 1);
                    return
                }
                i.ready()
            }
        }
        var i = function(n, t) {
            return new i.fn.init(n, t, l)
        },
        k = n.jQuery,
        d = n.$,
        l,
        g = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        a = /\S/,
        v = /^\s+/,
        y = /\s+$/,
        nt = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        tt = /^[\],:{}\s]*$/,
        it = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        rt = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ut = /(?:^|:|,)(?:\s*\[)+/g,
        ft = /(webkit)[ \/]([\w.]+)/,
        et = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        ot = /(msie) ([\w.]+)/,
        st = /(mozilla)(?:.*? rv:([\w.]+))?/,
        ht = /-([a-z]|[0-9])/ig,
        ct = /^-ms-/,
        lt = function(n, t) {
            return (t + "").toUpperCase()
        },
        at = fu.userAgent,
        e,
        o,
        u,
        vt = Object.prototype.toString,
        s = Object.prototype.hasOwnProperty,
        h = Array.prototype.push,
        f = Array.prototype.slice,
        p = String.prototype.trim,
        w = Array.prototype.indexOf,
        b = {};
        return i.fn = i.prototype = {
            constructor: i,
            init: function(n, u, f) {
                var e, s, o, h;
                if (!n) return this;
                if (n.nodeType) return this.context = this[0] = n,
                this.length = 1,
                this;
                if (n === "body" && !u && r.body) return this.context = r,
                this[0] = r.body,
                this.selector = n,
                this.length = 1,
                this;
                if (typeof n == "string") {
                    if (e = n.charAt(0) !== "<" || n.charAt(n.length - 1) !== ">" || n.length < 3 ? g.exec(n) : [null, n, null], e && (e[1] || !u)) {
                        if (e[1]) return u = u instanceof i ? u[0] : u,
                        h = u ? u.ownerDocument || u: r,
                        o = nt.exec(n),
                        o ? i.isPlainObject(u) ? (n = [r.createElement(o[1])], i.fn.attr.call(n, u, !0)) : n = [h.createElement(o[1])] : (o = i.buildFragment([e[1]], [h]), n = (o.cacheable ? i.clone(o.fragment) : o.fragment).childNodes),
                        i.merge(this, n);
                        if (s = r.getElementById(e[2]), s && s.parentNode) {
                            if (s.id !== e[2]) return f.find(n);
                            this.length = 1,
                            this[0] = s
                        }
                        return this.context = r,
                        this.selector = n,
                        this
                    }
                    return ! u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
                }
                return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
            },
            selector: "",
            jquery: "1.7.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return f.call(this, 0)
            },
            get: function(n) {
                return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
            },
            pushStack: function(n, t, r) {
                var u = this.constructor();
                return i.isArray(n) ? h.apply(u, n) : i.merge(u, n),
                u.prevObject = this,
                u.context = this.context,
                t === "find" ? u.selector = this.selector + (this.selector ? " ": "") + r: t && (u.selector = this.selector + "." + t + "(" + r + ")"),
                u
            },
            each: function(n, t) {
                return i.each(this, n, t)
            },
            ready: function(n) {
                return i.bindReady(),
                o.add(n),
                this
            },
            eq: function(n) {
                return n = +n,
                n === -1 ? this.slice(n) : this.slice(n, n + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(f.apply(this, arguments), "slice", f.call(arguments).join(","))
            },
            map: function(n) {
                return this.pushStack(i.map(this,
                function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: h,
            sort: [].sort,
            splice: [].splice
        },
        i.fn.init.prototype = i.fn,
        i.extend = i.fn.extend = function() {
            var o, e, u, r, s, h, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1;
            for (typeof n == "boolean" && (c = n, n = arguments[1] || {},
            f = 2), typeof n != "object" && !i.isFunction(n) && (n = {}), l === f && (n = this, --f); f < l; f++) if ((o = arguments[f]) != null) for (e in o)(u = n[e], r = o[e], n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1, h = u && i.isArray(u) ? u: []) : h = u && i.isPlainObject(u) ? u: {},
            n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
            return n
        },
        i.extend({
            noConflict: function(t) {
                return n.$ === i && (n.$ = d),
                t && n.jQuery === i && (n.jQuery = k),
                i
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) {
                n ? i.readyWait++:i.ready(!0)
            },
            ready: function(n) {
                if (n === !0 && !--i.readyWait || n !== !0 && !i.isReady) {
                    if (!r.body) return setTimeout(i.ready, 1);
                    if (i.isReady = !0, n !== !0 && --i.readyWait > 0) return;
                    o.fireWith(r, [i]),
                    i.fn.trigger && i(r).trigger("ready").off("ready")
                }
            },
            bindReady: function() {
                if (!o) {
                    if (o = i.Callbacks("once memory"), r.readyState === "complete") return setTimeout(i.ready, 1);
                    if (r.addEventListener) r.addEventListener("DOMContentLoaded", u, !1),
                    n.addEventListener("load", i.ready, !1);
                    else if (r.attachEvent) {
                        r.attachEvent("onreadystatechange", u),
                        n.attachEvent("onload", i.ready);
                        var t = !1;
                        try {
                            t = n.frameElement == null
                        } catch(f) {}
                        r.documentElement.doScroll && t && c()
                    }
                }
            },
            isFunction: function(n) {
                return i.type(n) === "function"
            },
            isArray: Array.isArray ||
            function(n) {
                return i.type(n) === "array"
            },
            isWindow: function(n) {
                return n != null && n == n.window
            },
            isNumeric: function(n) {
                return ! isNaN(parseFloat(n)) && isFinite(n)
            },
            type: function(n) {
                return n == null ? String(n) : b[vt.call(n)] || "object"
            },
            isPlainObject: function(n) {
                if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return ! 1;
                try {
                    if (n.constructor && !s.call(n, "constructor") && !s.call(n.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(u) {
                    return ! 1
                }
                var r;
                for (r in n);
                return r === t || s.call(n, r)
            },
            isEmptyObject: function(n) {
                for (var t in n) return ! 1;
                return ! 0
            },
            error: function(n) {
                throw new Error(n);
            },
            parseJSON: function(t) {
                if (typeof t != "string" || !t) return null;
                if (t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
                if (tt.test(t.replace(it, "@").replace(rt, "]").replace(ut, ""))) return new Function("return " + t)();
                i.error("Invalid JSON: " + t)
            },
            parseXML: function(r) {
                if (typeof r != "string" || !r) return null;
                var u, f;
                try {
                    n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
                } catch(e) {
                    u = t
                }
                return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r),
                u
            },
            noop: function() {},
            globalEval: function(t) {
                t && a.test(t) && (n.execScript ||
                function(t) {
                    n.eval.call(n, t)
                })(t)
            },
            camelCase: function(n) {
                return n.replace(ct, "ms-").replace(ht, lt)
            },
            nodeName: function(n, t) {
                return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase()
            },
            each: function(n, r, u) {
                var f, e = 0,
                o = n.length,
                s = o === t || i.isFunction(n);
                if (u) {
                    if (s) {
                        for (f in n) if (r.apply(n[f], u) === !1) break
                    } else for (; e < o;) if (r.apply(n[e++], u) === !1) break
                } else if (s) {
                    for (f in n) if (r.call(n[f], f, n[f]) === !1) break
                } else for (; e < o;) if (r.call(n[e], e, n[e++]) === !1) break;
                return n
            },
            trim: p ?
            function(n) {
                return n == null ? "": p.call(n)
            }: function(n) {
                return n == null ? "": (n + "").replace(v, "").replace(y, "")
            },
            makeArray: function(n, t) {
                var u = t || [],
                r;
                return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? h.call(u, n) : i.merge(u, n)),
                u
            },
            inArray: function(n, t, i) {
                var r;
                if (t) {
                    if (w) return w.call(t, n, i);
                    for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i: 0; i < r; i++) if (i in t && t[i] === n) return i
                }
                return - 1
            },
            merge: function(n, i) {
                var u = n.length,
                r = 0,
                f;
                if (typeof i.length == "number") for (f = i.length; r < f; r++) n[u++] = i[r];
                else while (i[r] !== t) n[u++] = i[r++];
                return n.length = u,
                n
            },
            grep: function(n, t, i) {
                var u = [],
                f,
                r,
                e;
                for (i = !!i, r = 0, e = n.length; r < e; r++) f = !!t(n[r], r),
                i !== f && u.push(n[r]);
                return u
            },
            map: function(n, r, u) {
                var f, h, e = [],
                s = 0,
                o = n.length,
                c = n instanceof i || o !== t && typeof o == "number" && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
                if (c) for (; s < o; s++) f = r(n[s], s, u),
                f != null && (e[e.length] = f);
                else for (h in n) f = r(n[h], h, u),
                f != null && (e[e.length] = f);
                return e.concat.apply([], e)
            },
            guid: 1,
            proxy: function(n, r) {
                var e, o, u;
                return (typeof r == "string" && (e = n[r], r = n, n = e), !i.isFunction(n)) ? t: (o = f.call(arguments, 2), u = function() {
                    return n.apply(r, o.concat(f.call(arguments)))
                },
                u.guid = n.guid = n.guid || u.guid || i.guid++, u)
            },
            access: function(n, r, u, f, e, o, s) {
                var c, l = u == null,
                h = 0,
                a = n.length;
                if (u && typeof u == "object") {
                    for (h in u) i.access(n, r, h, u[h], 1, o, f);
                    e = 1
                } else if (f !== t) {
                    if (c = s === t && i.isFunction(f), l && (c ? (c = r, r = function(n, t, r) {
                        return c.call(i(n), r)
                    }) : (r.call(n, f), r = null)), r) for (; h < a; h++) r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
                    e = 1
                }
                return e ? n: l ? r.call(n) : a ? r(n[0], u) : o
            },
            now: function() {
                return + new Date
            },
            uaMatch: function(n) {
                n = n.toLowerCase();
                var t = ft.exec(n) || et.exec(n) || ot.exec(n) || n.indexOf("compatible") < 0 && st.exec(n) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            },
            sub: function() {
                function n(t, i) {
                    return new n.fn.init(t, i)
                }
                i.extend(!0, n, this),
                n.superclass = this,
                n.fn = n.prototype = this(),
                n.fn.constructor = n,
                n.sub = this.sub,
                n.fn.init = function(r, u) {
                    return u && u instanceof i && !(u instanceof n) && (u = n(u)),
                    i.fn.init.call(this, r, u, t)
                },
                n.fn.init.prototype = n.fn;
                var t = n(r);
                return n
            },
            browser: {}
        }),
        i.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(n, t) {
            b["[object " + t + "]"] = t.toLowerCase()
        }),
        e = i.uaMatch(at),
        e.browser && (i.browser[e.browser] = !0, i.browser.version = e.version),
        i.browser.webkit && (i.browser.safari = !0),
        a.test(" ") && (v = /^[\s\xA0]+/, y = /[\s\xA0]+$/),
        l = i(r),
        r.addEventListener ? u = function() {
            r.removeEventListener("DOMContentLoaded", u, !1),
            i.ready()
        }: r.attachEvent && (u = function() {
            r.readyState === "complete" && (r.detachEvent("onreadystatechange", u), i.ready())
        }),
        i
    } (),
    ci = {},
    d,
    li,
    ai,
    wr,
    p,
    nt,
    br,
    v,
    vt,
    kr,
    yt;
    i.Callbacks = function(n) {
        n = n ? ci[n] || uu(n) : {};
        var r = [],
        f = [],
        u,
        l,
        s,
        c,
        h,
        e,
        a = function(t) {
            for (var u, e, h, f = 0, s = t.length; f < s; f++) u = t[f],
            e = i.type(u),
            e === "array" ? a(u) : e === "function" && (!n.unique || !o.has(u)) && r.push(u)
        },
        v = function(t, i) {
            for (i = i || [], u = !n.memory || [t, i], l = !0, s = !0, e = c || 0, c = 0, h = r.length; r && e < h; e++) if (r[e].apply(t, i) === !1 && n.stopOnFalse) {
                u = !0;
                break
            }
            s = !1,
            r && (n.once ? u === !0 ? o.disable() : r = [] : f && f.length && (u = f.shift(), o.fireWith(u[0], u[1])))
        },
        o = {
            add: function() {
                if (r) {
                    var n = r.length;
                    a(arguments),
                    s ? h = r.length: u && u !== !0 && (c = n, v(u[0], u[1]))
                }
                return this
            },
            remove: function() {
                var t;
                if (r) for (var u = arguments, i = 0, f = u.length; i < f; i++) for (t = 0; t < r.length; t++) if (u[i] === r[t] && (s && t <= h && (h--, t <= e && e--), r.splice(t--, 1), n.unique)) break;
                return this
            },
            has: function(n) {
                if (r) for (var t = 0, i = r.length; t < i; t++) if (n === r[t]) return ! 0;
                return ! 1
            },
            empty: function() {
                return r = [],
                this
            },
            disable: function() {
                return r = f = u = t,
                this
            },
            disabled: function() {
                return ! r
            },
            lock: function() {
                return f = t,
                u && u !== !0 || o.disable(),
                this
            },
            locked: function() {
                return ! f
            },
            fireWith: function(t, i) {
                return f && (s ? n.once || f.push([t, i]) : (!n.once || !u) && v(t, i)),
                this
            },
            fire: function() {
                return o.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! l
            }
        };
        return o
    },
    d = [].slice,
    i.extend({
        Deferred: function(n) {
            var u = i.Callbacks("once memory"),
            f = i.Callbacks("once memory"),
            e = i.Callbacks("memory"),
            s = "pending",
            h = {
                resolve: u,
                reject: f,
                notify: e
            },
            o = {
                done: u.add,
                fail: f.add,
                progress: e.add,
                state: function() {
                    return s
                },
                isResolved: u.fired,
                isRejected: f.fired,
                then: function(n, i, r) {
                    return t.done(n).fail(i).progress(r),
                    this
                },
                always: function() {
                    return t.done.apply(t, arguments).fail.apply(t, arguments),
                    this
                },
                pipe: function(n, r, u) {
                    return i.Deferred(function(f) {
                        i.each({
                            done: [n, "resolve"],
                            fail: [r, "reject"],
                            progress: [u, "notify"]
                        },
                        function(n, r) {
                            var e = r[0],
                            o = r[1],
                            u;
                            i.isFunction(e) ? t[n](function() {
                                u = e.apply(this, arguments),
                                u && i.isFunction(u.promise) ? u.promise().then(f.resolve, f.reject, f.notify) : f[o + "With"](this === t ? f: this, [u])
                            }) : t[n](f[o])
                        })
                    }).promise()
                },
                promise: function(n) {
                    if (n == null) n = o;
                    else for (var t in o) n[t] = o[t];
                    return n
                }
            },
            t = o.promise({}),
            r;
            for (r in h) t[r] = h[r].fire,
            t[r + "With"] = h[r].fireWith;
            return t.done(function() {
                s = "resolved"
            },
            f.disable, e.lock).fail(function() {
                s = "rejected"
            },
            u.disable, e.lock),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            function h(n) {
                return function(i) {
                    o[n] = arguments.length > 1 ? d.call(arguments, 0) : i,
                    t.notifyWith(s, o)
                }
            }
            function c(n) {
                return function(i) {
                    r[n] = arguments.length > 1 ? d.call(arguments, 0) : i,
                    --e || t.resolveWith(t, r)
                }
            }
            var r = d.call(arguments, 0),
            u = 0,
            f = r.length,
            o = Array(f),
            e = f,
            l = f,
            t = f <= 1 && n && i.isFunction(n.promise) ? n: i.Deferred(),
            s = t.promise();
            if (f > 1) {
                for (; u < f; u++) r[u] && r[u].promise && i.isFunction(r[u].promise) ? r[u].promise().then(c(u), t.reject, h(u)) : --e;
                e || t.resolveWith(t, r)
            } else t !== n && t.resolveWith(t, f ? [n] : []);
            return s
        }
    }),
    i.support = function() {
        var u, v, o, c, l, f, e, h, p, a, y, s, t = r.createElement("div"),
        w = r.documentElement;
        if (t.setAttribute("className", "t"), t.innerHTML = "   <link/><table><\/table><a href='/a' style='top:1px;float:left;opacity:.55;'>a<\/a><input type='checkbox'/>", v = t.getElementsByTagName("*"), o = t.getElementsByTagName("a")[0], !v || !v.length || !o) return {};
        c = r.createElement("select"),
        l = c.appendChild(r.createElement("option")),
        f = t.getElementsByTagName("input")[0],
        u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(o.getAttribute("style")),
            hrefNormalized: o.getAttribute("href") === "/a",
            opacity: /^0.55/.test(o.style.opacity),
            cssFloat: !!o.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: l.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        },
        i.boxModel = u.boxModel = r.compatMode === "CSS1Compat",
        f.checked = !0,
        u.noCloneChecked = f.cloneNode(!0).checked,
        c.disabled = !0,
        u.optDisabled = !l.disabled;
        try {
            delete t.test
        } catch(b) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick",
        function() {
            u.noCloneEvent = !1
        }), t.cloneNode(!0).fireEvent("onclick")), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), t.appendChild(f), e = r.createDocumentFragment(), e.appendChild(t.lastChild), u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, e.removeChild(f), e.appendChild(t), t.attachEvent) for (y in {
            submit: 1,
            change: 1,
            focusin: 1
        }) a = "on" + y,
        s = a in t,
        s || (t.setAttribute(a, "return;"), s = typeof t[a] == "function"),
        u[y + "Bubbles"] = s;
        return e.removeChild(t),
        e = c = l = t = f = null,
        i(function() {
            var e, c, f, g, k, l, o, y, p, d, w, b, a, v = r.getElementsByTagName("body")[0];
            v && (y = 1, a = "padding:0;margin:0;border:", w = "position:absolute;top:0;left:0;width:1px;height:1px;", b = a + "0;visibility:hidden;", p = "style='" + w + a + "5px solid #000;", d = "<div " + p + "display:block;'><div style='" + a + "0;display:block;overflow:hidden;'><\/div><\/div><table " + p + "' cellpadding='0' cellspacing='0'><tr><td><\/td><\/tr><\/table>", e = r.createElement("div"), e.style.cssText = b + "width:0;height:0;position:static;top:0;margin-top:" + y + "px", v.insertBefore(e, v.firstChild), t = r.createElement("div"), e.appendChild(t), t.innerHTML = "<table><tr><td style='" + a + "0;display:none'><\/td><td>t<\/td><\/tr><\/table>", h = t.getElementsByTagName("td"), s = h[0].offsetHeight === 0, h[0].style.display = "", h[1].style.display = "none", u.reliableHiddenOffsets = s && h[0].offsetHeight === 0, n.getComputedStyle && (t.innerHTML = "", o = r.createElement("div"), o.style.width = "0", o.style.marginRight = "0", t.style.width = "2px", t.appendChild(o), u.reliableMarginRight = (parseInt((n.getComputedStyle(o, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof t.style.zoom != "undefined" && (t.innerHTML = "", t.style.width = t.style.padding = "1px", t.style.border = 0, t.style.overflow = "hidden", t.style.display = "inline", t.style.zoom = 1, u.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div style='width:5px;'><\/div>", u.shrinkWrapBlocks = t.offsetWidth !== 3), t.style.cssText = w + b, t.innerHTML = d, c = t.firstChild, f = c.firstChild, k = c.nextSibling.firstChild.firstChild, l = {
                doesNotAddBorder: f.offsetTop !== 5,
                doesAddBorderForTableAndCells: k.offsetTop === 5
            },
            f.style.position = "fixed", f.style.top = "20px", l.fixedPosition = f.offsetTop === 20 || f.offsetTop === 15, f.style.position = f.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", l.subtractsBorderForOverflowNotVisible = f.offsetTop === -5, l.doesNotIncludeMarginInBodyOffset = v.offsetTop !== y, n.getComputedStyle && (t.style.marginTop = "1%", u.pixelMargin = (n.getComputedStyle(t, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof e.style.zoom != "undefined" && (e.style.zoom = 1), v.removeChild(e), o = t = e = null, i.extend(u, l))
        }),
        u
    } (),
    li = /^(?:\{.*\}|\[.*\])$/,
    ai = /([A-Z])/g,
    i.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !ft(n)
        },
        data: function(n, r, u, f) {
            if ( !! i.acceptData(n)) {
                var a, o, h, c = i.expando,
                v = typeof r == "string",
                l = n.nodeType,
                s = l ? i.cache: n,
                e = l ? n[c] : n[c] && c,
                y = r === "events";
                return (!e || !s[e] || !y && !f && !s[e].data) && v && u === t ? void 0 : (e || (l ? n[c] = e = ++i.uuid: e = c), s[e] || (s[e] = {},
                l || (s[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? s[e] = i.extend(s[e], r) : s[e].data = i.extend(s[e].data, r)), a = o = s[e], f || (o.data || (o.data = {}), o = o.data), u !== t && (o[i.camelCase(r)] = u), y && !o[r]) ? a.events: (v ? (h = o[r], h == null && (h = o[i.camelCase(r)])) : h = o, h)
            }
        },
        removeData: function(n, t, r) {
            if ( !! i.acceptData(n)) {
                var e, s, c, o = i.expando,
                h = n.nodeType,
                u = h ? i.cache: n,
                f = h ? n[o] : o;
                if (!u[f]) return;
                if (t && (e = r ? u[f] : u[f].data, e)) {
                    for (i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" "))), s = 0, c = t.length; s < c; s++) delete e[t[s]];
                    if (! (r ? ft: i.isEmptyObject)(e)) return
                }
                if (!r && (delete u[f].data, !ft(u[f]))) return;
                i.support.deleteExpando || !u.setInterval ? delete u[f] : u[f] = null,
                h && (i.support.deleteExpando ? delete n[o] : n.removeAttribute ? n.removeAttribute(o) : n[o] = null)
            }
        },
        _data: function(n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function(n) {
            if (n.nodeName) {
                var t = i.noData[n.nodeName.toLowerCase()];
                if (t) return t !== !0 && n.getAttribute("classid") === t
            }
            return ! 0
        }
    }),
    i.fn.extend({
        data: function(n, r) {
            var u, s, h, o, l, e = this[0],
            c = 0,
            f = null;
            if (n === t) {
                if (this.length && (f = i.data(e), e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
                    for (h = e.attributes, l = h.length; c < l; c++) o = h[c].name,
                    o.indexOf("data-") === 0 && (o = i.camelCase(o.substring(5)), hi(e, o, f[o]));
                    i._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function() {
                i.data(this, n)
            }) : (u = n.split(".", 2), u[1] = u[1] ? "." + u[1] : "", s = u[1] + "!", i.access(this,
            function(r) {
                if (r === t) return f = this.triggerHandler("getData" + s, [u[0]]),
                f === t && e && (f = i.data(e, n), f = hi(e, n, f)),
                f === t && u[1] ? this.data(u[0]) : f;
                u[1] = r,
                this.each(function() {
                    var t = i(this);
                    t.triggerHandler("setData" + s, u),
                    i.data(this, n, r),
                    t.triggerHandler("changeData" + s, u)
                })
            },
            null, r, arguments.length > 1, null, !1))
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    }),
    i.extend({
        _mark: function(n, t) {
            n && (t = (t || "fx") + "mark", i._data(n, t, (i._data(n, t) || 0) + 1))
        },
        _unmark: function(n, t, r) {
            if (n !== !0 && (r = t, t = n, n = !1), t) {
                r = r || "fx";
                var u = r + "mark",
                f = n ? 0 : (i._data(t, u) || 1) - 1;
                f ? i._data(t, u, f) : (i.removeData(t, u, !0), si(t, r, "mark"))
            }
        },
        queue: function(n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue",
            u = i._data(n, t),
            r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)),
            u || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
            u = r.shift(),
            f = {};
            u === "inprogress" && (u = r.shift()),
            u && (t === "fx" && r.unshift("inprogress"), i._data(n, t + ".run", f), u.call(n,
            function() {
                i.dequeue(n, t)
            },
            f)),
            r.length || (i.removeData(n, t + "queue " + t + ".run", !0), si(n, t, "queue"))
        }
    }),
    i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return (typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u) ? i.queue(this[0], n) : r === t ? this: this.each(function() {
                var t = i.queue(this, n, r);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n: n,
            t = t || "fx",
            this.queue(t,
            function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, r) {
            function e() {--s || o.resolveWith(u, [u])
            }
            typeof n != "string" && (r = n, n = t),
            n = n || "fx";
            for (var o = i.Deferred(), u = this, f = u.length, s = 1, h = n + "defer", l = n + "queue", a = n + "mark", c; f--;)(c = i.data(u[f], h, t, !0) || (i.data(u[f], l, t, !0) || i.data(u[f], a, t, !0)) && i.data(u[f], h, i.Callbacks("once memory"), !0)) && (s++, c.add(e));
            return e(),
            o.promise(r)
        }
    });
    var vi = /[\n\t\r]/g,
    g = /\s+/,
    ou = /\r/g,
    su = /^(?:button|input)$/i,
    hu = /^(?:button|input|object|select|textarea)$/i,
    cu = /^a(?:rea)?$/i,
    yi = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    pi = i.support.getSetAttribute,
    e, wi, bi;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = t,
                    delete this[n]
                } catch(i) {}
            })
        },
        addClass: function(n) {
            var r, f, o, t, e, u, s;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string") for (r = n.split(g), f = 0, o = this.length; f < o; f++) if (t = this[f], t.nodeType === 1) if (t.className || r.length !== 1) {
                for (e = " " + t.className + " ", u = 0, s = r.length; u < s; u++)~e.indexOf(" " + r[u] + " ") || (e += r[u] + " ");
                t.className = i.trim(e)
            } else t.className = n;
            return this
        },
        removeClass: function(n) {
            var o, u, s, r, f, e, h;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string" || n === t) for (o = (n || "").split(g), u = 0, s = this.length; u < s; u++) if (r = this[u], r.nodeType === 1 && r.className) if (n) {
                for (f = (" " + r.className + " ").replace(vi, " "), e = 0, h = o.length; e < h; e++) f = f.replace(" " + o[e] + " ", " ");
                r.className = i.trim(f)
            } else r.className = "";
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n,
            u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if (r === "string") for (var f, s = 0, o = i(this), e = t, h = n.split(g); f = h[s++];) e = u ? e: !o.hasClass(f),
                o[e ? "addClass": "removeClass"](f);
                else(r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "": i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++) if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(vi, " ").indexOf(i) > -1) return ! 0;
            return ! 1
        },
        val: function(n) {
            var r, u, e, f = this[0];
            return ! arguments.length ? f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t) ? u: (u = f.value, typeof u == "string" ? u.replace(ou, "") : u == null ? "": u) : void 0 : (e = i.isFunction(n), this.each(function(u) {
                var o = i(this),
                f;
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "": typeof f == "number" ? f += "": i.isArray(f) && (f = i.map(f,
                function(n) {
                    return n == null ? "": n + ""
                })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            }))
        }
    }),
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = n.attributes.value;
                    return ! t || t.specified ? n.value: n.text
                }
            },
            select: {
                get: function(n) {
                    var o, r, h, t, u = n.selectedIndex,
                    s = [],
                    f = n.options,
                    e = n.type === "select-one";
                    if (u < 0) return null;
                    for (r = e ? u: 0, h = e ? u + 1 : f.length; r < h; r++) if (t = f[r], t.selected && (i.support.optDisabled ? !t.disabled: t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                        if (o = i(t).val(), e) return o;
                        s.push(o)
                    }
                    return e && !s.length && f.length ? i(f[u]).val() : s
                },
                set: function(n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function() {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }),
                    r.length || (n.selectedIndex = -1),
                    r
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(n, r, u, f) {
            var o, s, h, c = n.nodeType;
            if ( !! n && c !== 3 && c !== 8 && c !== 2) {
                if (f && r in i.attrFn) return i(n)[r](u);
                if (typeof n.getAttribute == "undefined") return i.prop(n, r, u);
                if (h = c !== 1 || !i.isXMLDoc(n), h && (r = r.toLowerCase(), s = i.attrHooks[r] || (yi.test(r) ? wi: e)), u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return s && "set" in s && h && (o = s.set(n, u, r)) !== t ? o: (n.setAttribute(r, "" + u), u)
                }
                return s && "get" in s && h && (o = s.get(n, r)) !== null ? o: (o = n.getAttribute(r), o === null ? t: o)
            }
        },
        removeAttr: function(n, t) {
            var u, f, r, s, e, o = 0;
            if (t && n.nodeType === 1) for (f = t.toLowerCase().split(g), s = f.length; o < s; o++) r = f[o],
            r && (u = i.propFix[r] || r, e = yi.test(r), e || i.attr(n, r, ""), n.removeAttribute(pi ? r: u), e && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (su.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t),
                        r && (n.value = r),
                        t
                    }
                }
            },
            value: {
                get: function(n, t) {
                    return e && i.nodeName(n, "button") ? e.get(n, t) : t in n ? n.value: null
                },
                set: function(n, t, r) {
                    if (e && i.nodeName(n, "button")) return e.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if ( !! n && o !== 3 && o !== 8 && o !== 2) return s = o !== 1 || !i.isXMLDoc(n),
            s && (r = i.propFix[r] || r, f = i.propHooks[r]),
            u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e: n[r] = u: f && "get" in f && (e = f.get(n, r)) !== null ? e: n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : hu.test(n.nodeName) || cu.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    }),
    i.attrHooks.tabindex = i.propHooks.tabIndex,
    wi = {
        get: function(n, r) {
            var u, f = i.prop(n, r);
            return f === !0 || typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function(n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())),
            r
        }
    },
    pi || (bi = {
        name: !0,
        id: !0,
        coords: !0
    },
    e = i.valHooks.button = {
        get: function(n, i) {
            var r;
            return r = n.getAttributeNode(i),
            r && (bi[i] ? r.nodeValue !== "": r.specified) ? r.nodeValue: t
        },
        set: function(n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i), n.setAttributeNode(u)),
            u.nodeValue = t + ""
        }
    },
    i.attrHooks.tabindex.set = e.set, i.each(["width", "height"],
    function(n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function(n, i) {
                if (i === "") return n.setAttribute(t, "auto"),
                i
            }
        })
    }), i.attrHooks.contenteditable = {
        get: e.get,
        set: function(n, t, i) {
            t === "" && (t = "false"),
            e.set(n, t, i)
        }
    }),
    i.support.hrefNormalized || i.each(["href", "src", "width", "height"],
    function(n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function(n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t: i
            }
        })
    }),
    i.support.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function(n, t) {
            return n.style.cssText = "" + t
        }
    }),
    i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    i.support.enctype || (i.propFix.enctype = "encoding"),
    i.support.checkOn || i.each(["radio", "checkbox"],
    function() {
        i.valHooks[this] = {
            get: function(n) {
                return n.getAttribute("value") === null ? "on": n.value
            }
        }
    }),
    i.each(["radio", "checkbox"],
    function() {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var et = /^(?:textarea|input|select)$/i,
    ki = /^([^\.]*)?(?:\.(.+))?$/,
    lu = /(?:^|\s)hover(\.\S+)?\b/,
    au = /^key/,
    vu = /^(?:mouse|contextmenu)|click/,
    di = /^(?:focusinfocus|focusoutblur)$/,
    yu = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    pu = function(n) {
        var t = yu.exec(n);
        return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")),
        t
    },
    wu = function(n, t) {
        var i = n.attributes || {};
        return (!t[1] || n.nodeName.toLowerCase() === t[1]) && (!t[2] || (i.id || {}).value === t[2]) && (!t[3] || t[3].test((i["class"] || {}).value))
    },
    gi = function(n) {
        return i.event.special.hover ? n: n.replace(lu, "mouseenter$1 mouseleave$1")
    };
    i.event = {
        add: function(n, r, u, f, e) {
            var a, s, v, y, p, o, b, l, w, k, c, h;
            if (! (n.nodeType === 3 || n.nodeType === 8 || !r || !u || !(a = i._data(n)))) {
                for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), v = a.events, v || (a.events = v = {}), s = a.handle, s || (a.handle = s = function(n) {
                    return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(s.elem, arguments) : t
                },
                s.elem = n), r = i.trim(gi(r)).split(" "), y = 0; y < r.length; y++) p = ki.exec(r[y]) || [],
                o = p[1],
                b = (p[2] || "").split(".").sort(),
                h = i.event.special[o] || {},
                o = (e ? h.delegateType: h.bindType) || o,
                h = i.event.special[o] || {},
                l = i.extend({
                    type: o,
                    origType: p[1],
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    quick: e && pu(e),
                    namespace: b.join(".")
                },
                w),
                c = v[o],
                c || (c = v[o] = [], c.delegateCount = 0, h.setup && h.setup.call(n, f, b, s) !== !1 || (n.addEventListener ? n.addEventListener(o, s, !1) : n.attachEvent && n.attachEvent("on" + o, s))),
                h.add && (h.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)),
                e ? c.splice(c.delegateCount++, 0, l) : c.push(l),
                i.event.global[o] = !0;
                n = null
            }
        },
        global: {},
        remove: function(n, t, r, u, f) {
            var y = i.hasData(n) && i._data(n),
            l,
            p,
            e,
            b,
            h,
            k,
            a,
            v,
            c,
            w,
            o,
            s;
            if ( !! y && !!(v = y.events)) {
                for (t = i.trim(gi(t || "")).split(" "), l = 0; l < t.length; l++) {
                    if (p = ki.exec(t[l]) || [], e = b = p[1], h = p[2], !e) {
                        for (e in v) i.event.remove(n, e + t[l], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {},
                    e = (u ? c.delegateType: c.bindType) || e, o = v[e] || [], k = o.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, a = 0; a < o.length; a++) s = o[a],
                    (f || b === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1), s.selector && o.delegateCount--, c.remove && c.remove.call(n, s));
                    o.length === 0 && k !== o.length && ((!c.teardown || c.teardown.call(n, h) === !1) && i.removeEvent(n, e, y.handle), delete v[e])
                }
                i.isEmptyObject(v) && (w = y.handle, w && (w.elem = null), i.removeData(n, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(r, u, f, e) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var o = r.type || r,
                p = [],
                w,
                k,
                c,
                s,
                h,
                a,
                l,
                v,
                y,
                b;
                if (di.test(o + i.event.triggered)) return;
                if (o.indexOf("!") >= 0 && (o = o.slice(0, -1), k = !0), o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), (!f || i.event.customEvent[o]) && !i.event.global[o]) return;
                if (r = typeof r == "object" ? r[i.expando] ? r: new i.Event(o, r) : new i.Event(o), r.type = o, r.isTrigger = !0, r.exclusive = k, r.namespace = p.join("."), r.namespace_re = r.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, a = o.indexOf(":") < 0 ? "on" + o: "", !f) {
                    w = i.cache;
                    for (c in w) w[c].events && w[c].events[o] && i.event.trigger(r, u, w[c].handle.elem, !0);
                    return
                }
                if (r.result = t, r.target || (r.target = f), u = u != null ? i.makeArray(u) : [], u.unshift(r), l = i.event.special[o] || {},
                l.trigger && l.trigger.apply(f, u) === !1) return;
                if (y = [[f, l.bindType || o]], !e && !l.noBubble && !i.isWindow(f)) {
                    for (b = l.delegateType || o, s = di.test(b + o) ? f: f.parentNode, h = null; s; s = s.parentNode) y.push([s, b]),
                    h = s;
                    h && h === f.ownerDocument && y.push([h.defaultView || h.parentWindow || n, b])
                }
                for (c = 0; c < y.length && !r.isPropagationStopped(); c++) s = y[c][0],
                r.type = y[c][1],
                v = (i._data(s, "events") || {})[r.type] && i._data(s, "handle"),
                v && v.apply(s, u),
                v = a && s[a],
                v && i.acceptData(s) && v.apply(s, u) === !1 && r.preventDefault();
                return r.type = o,
                e || r.isDefaultPrevented() || l._default && l._default.apply(f.ownerDocument, u) !== !1 || o === "click" && i.nodeName(f, "a") || !i.acceptData(f) || !a || !f[o] || (o === "focus" || o === "blur") && r.target.offsetWidth === 0 || i.isWindow(f) || (h = f[a], h && (f[a] = null), i.event.triggered = o, f[o](), i.event.triggered = t, h && (f[a] = h)),
                r.result
            }
        },
        dispatch: function(r) {
            r = i.event.fix(r || n.event);
            var h = (i._data(this, "events") || {})[r.type] || [],
            c = h.delegateCount,
            k = [].slice.call(arguments, 0),
            d = !r.exclusive && !r.namespace,
            l = i.event.special[r.type] || {},
            a = [],
            f,
            v,
            e,
            y,
            p,
            w,
            o,
            b,
            u,
            s,
            g;
            if (k[0] = r, r.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, r) !== !1) {
                if (c && (!r.button || r.type !== "click")) for (y = i(this), y.context = this.ownerDocument || this, e = r.target; e != this; e = e.parentNode || this) if (e.disabled !== !0) {
                    for (w = {},
                    b = [], y[0] = e, f = 0; f < c; f++) u = h[f],
                    s = u.selector,
                    w[s] === t && (w[s] = u.quick ? wu(e, u.quick) : y.is(s)),
                    w[s] && b.push(u);
                    b.length && a.push({
                        elem: e,
                        matches: b
                    })
                }
                for (h.length > c && a.push({
                    elem: this,
                    matches: h.slice(c)
                }), f = 0; f < a.length && !r.isPropagationStopped(); f++) for (o = a[f], r.currentTarget = o.elem, v = 0; v < o.matches.length && !r.isImmediatePropagationStopped(); v++) u = o.matches[v],
                (d || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, p = ((i.event.special[u.origType] || {}).handle || u.handler).apply(o.elem, k), p !== t && (r.result = p, p === !1 && (r.preventDefault(), r.stopPropagation())));
                return l.postDispatch && l.postDispatch.call(this, r),
                r.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode: t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, i) {
                var o, u, f, e = i.button,
                s = i.fromElement;
                return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r, u = o.documentElement, f = o.body, n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)),
                !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement: s),
                !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0),
                n
            }
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var e, o, u = n,
            f = i.event.fixHooks[n.type] || {},
            s = f.props ? this.props.concat(f.props) : this.props;
            for (n = i.Event(u), e = s.length; e;) o = s[--e],
            n[o] = u[o];
            return n.target || (n.target = u.srcElement || r),
            n.target.nodeType === 3 && (n.target = n.target.parentNode),
            n.metaKey === t && (n.metaKey = n.ctrlKey),
            f.filter ? f.filter(n, u) : n
        },
        special: {
            ready: {
                setup: i.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(n, t, r) {
                    i.isWindow(this) && (this.onbeforeunload = r)
                },
                teardown: function(n, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f),
            f.isDefaultPrevented() && r.preventDefault()
        }
    },
    i.event.handle = i.event.dispatch,
    i.removeEvent = r.removeEventListener ?
    function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }: function(n, t, i) {
        n.detachEvent && n.detachEvent("on" + t, i)
    },
    i.Event = function(n, t) {
        if (! (this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? k: l) : this.type = n,
        t && i.extend(this, t),
        this.timeStamp = n && n.timeStamp || i.now(),
        this[i.expando] = !0
    },
    i.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = k;
            var n = this.originalEvent;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = k;
            var n = this.originalEvent;
            n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = k,
            this.stopPropagation()
        },
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l
    },
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var f = this,
                r = n.relatedTarget,
                u = n.handleObj,
                o = u.selector,
                e;
                return r && (r === f || i.contains(f, r)) || (n.type = u.origType, e = u.handler.apply(this, arguments), n.type = t),
                e
            }
        }
    }),
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function() {
            if (i.nodeName(this, "form")) return ! 1;
            i.event.add(this, "click._submit keypress._submit",
            function(n) {
                var u = n.target,
                r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form: t;
                r && !r._submit_attached && (i.event.add(r, "submit._submit",
                function(n) {
                    n._submit_bubble = !0
                }), r._submit_attached = !0)
            })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            if (i.nodeName(this, "form")) return ! 1;
            i.event.remove(this, "._submit")
        }
    }),
    i.support.changeBubbles || (i.event.special.change = {
        setup: function() {
            if (et.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change",
            function(n) {
                n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), i.event.add(this, "click._change",
            function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1, i.event.simulate("change", this, n, !0))
            })),
            !1;
            i.event.add(this, "beforeactivate._change",
            function(n) {
                var t = n.target;
                et.test(t.nodeName) && !t._change_attached && (i.event.add(t, "change._change",
                function(n) { ! this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), t._change_attached = !0)
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            et.test(this.nodeName)
        }
    }),
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(n, t) {
        var u = 0,
        f = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                u++==0 && r.addEventListener(n, f, !0)
            },
            teardown: function() {--u == 0 && r.removeEventListener(n, f, !0)
            }
        }
    }),
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && (u = u || r, r = t);
                for (s in n) this.on(s, r, u, n[s], e);
                return this
            }
            if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = l;
            else if (!f) return this;
            return e === 1 && (o = f, f = function(n) {
                return i().off(n),
                o.apply(this, arguments)
            },
            f.guid = o.guid || (o.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj) return f = n.handleObj,
            i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace: f.origType, f.selector, f.handler),
            this;
            if (typeof n == "object") {
                for (e in n) this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || typeof r == "function") && (u = r, r = t),
            u === !1 && (u = l),
            this.each(function() {
                i.event.remove(this, n, u, r)
            })
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        live: function(n, t, r) {
            i(this.context).on(n, this.selector, t, r);
            return this
        },
        die: function(n, t) {
            return i(this.context).off(n, this.selector || "**", t),
            this
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length == 1 ? this.off(n, "**") : this.off(t, n, i)
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            if (this[0]) return i.event.trigger(n, t, this[0], !0)
        },
        toggle: function(n) {
            var t = arguments,
            u = n.guid || i.guid++,
            r = 0,
            f = function(u) {
                var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
                return i._data(this, "lastToggle" + n.guid, f + 1),
                u.preventDefault(),
                t[f].apply(this, arguments) || !1
            };
            for (f.guid = u; r < t.length;) t[r++].guid = u;
            return this.click(f)
        },
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    }),
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(n, t) {
        i.fn[t] = function(n, i) {
            return i == null && (i = n, n = null),
            arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        },
        i.attrFn && (i.attrFn[t] = !0),
        au.test(t) && (i.event.fixHooks[t] = i.event.keyHooks),
        vu.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
    }),
    function() {
        function b(t, i, r, u, f, o) {
            for (var s, c, h = 0, l = u.length; h < l; h++) if (s = u[h], s) {
                for (c = !1, s = s[t]; s;) {
                    if (s[e] === r) {
                        c = u[s.sizset];
                        break
                    }
                    if (s.nodeType === 1) if (o || (s[e] = r, s.sizset = h), typeof i != "string") {
                        if (s === i) {
                            c = !0;
                            break
                        }
                    } else if (n.filter(i, [s]).length > 0) {
                        c = s;
                        break
                    }
                    s = s[t]
                }
                u[h] = c
            }
        }
        function k(n, t, i, r, u, f) {
            for (var o, h, s = 0, c = r.length; s < c; s++) if (o = r[s], o) {
                for (h = !1, o = o[n]; o;) {
                    if (o[e] === i) {
                        h = r[o.sizset];
                        break
                    }
                    if (o.nodeType !== 1 || f || (o[e] = i, o.sizset = s), o.nodeName.toLowerCase() === t) {
                        h = o;
                        break
                    }
                    o = o[n]
                }
                r[s] = h
            }
        }
        var v = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        e = "sizcache" + (Math.random() + "").replace(".", ""),
        y = 0,
        d = Object.prototype.toString,
        c = !1,
        g = !0,
        o = /\\/g,
        tt = /\r\n/g,
        l = /\W/,
        n,
        s,
        f,
        a,
        h,
        w;
        [0, 0].sort(function() {
            return g = !1,
            0
        }),
        n = function(t, i, e, o) {
            var tt;
            if (e = e || [], i = i || r, tt = i, i.nodeType !== 1 && i.nodeType !== 9) return [];
            if (!t || typeof t != "string") return e;
            var y, a, h, g, l, p, b, c, it = !0,
            k = n.isXML(i),
            s = [],
            rt = t;
            do
            if (v.exec(""), y = v.exec(rt), y && (rt = y[3], s.push(y[1]), y[2])) {
                g = y[3];
                break
            }
            while (y);
            if (s.length > 1 && nt.exec(t)) if (s.length === 2 && u.relative[s[0]]) a = w(s[0] + s[1], i, o);
            else for (a = u.relative[s[0]] ? [i] : n(s.shift(), i); s.length;) t = s.shift(),
            u.relative[t] && (t += s.shift()),
            a = w(t, a, o);
            else if (!o && s.length > 1 && i.nodeType === 9 && !k && u.match.ID.test(s[0]) && !u.match.ID.test(s[s.length - 1]) && (l = n.find(s.shift(), i, k), i = l.expr ? n.filter(l.expr, l.set)[0] : l.set[0]), i) for (l = o ? {
                expr: s.pop(),
                set: f(o)
            }: n.find(s.pop(), s.length === 1 && (s[0] === "~" || s[0] === "+") && i.parentNode ? i.parentNode: i, k), a = l.expr ? n.filter(l.expr, l.set) : l.set, s.length > 0 ? h = f(a) : it = !1; s.length;) p = s.pop(),
            b = p,
            u.relative[p] ? b = s.pop() : p = "",
            b == null && (b = i),
            u.relative[p](h, b, k);
            else h = s = [];
            if (h || (h = a), h || n.error(p || t), d.call(h) === "[object Array]") if (it) if (i && i.nodeType === 1) for (c = 0; h[c] != null; c++) h[c] && (h[c] === !0 || h[c].nodeType === 1 && n.contains(i, h[c])) && e.push(a[c]);
            else for (c = 0; h[c] != null; c++) h[c] && h[c].nodeType === 1 && e.push(a[c]);
            else e.push.apply(e, h);
            else f(h, e);
            return g && (n(g, tt, e, o), n.uniqueSort(e)),
            e
        },
        n.uniqueSort = function(n) {
            if (a && (c = g, n.sort(a), c)) for (var t = 1; t < n.length; t++) n[t] === n[t - 1] && n.splice(t--, 1);
            return n
        },
        n.matches = function(t, i) {
            return n(t, null, null, i)
        },
        n.matchesSelector = function(t, i) {
            return n(i, null, null, [t]).length > 0
        },
        n.find = function(n, t, i) {
            var f, e, c, r, s, h;
            if (!n) return [];
            for (e = 0, c = u.order.length; e < c; e++) if (s = u.order[e], (r = u.leftMatch[s].exec(n)) && (h = r[1], r.splice(1, 1), h.substr(h.length - 1) !== "\\" && (r[1] = (r[1] || "").replace(o, ""), f = u.find[s](r, t, i), f != null))) {
                n = n.replace(u.match[s], "");
                break
            }
            return f || (f = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []),
            {
                set: f,
                expr: n
            }
        },
        n.filter = function(i, r, f, e) {
            for (var o, h, c, l, y, b, p, a, w, k = i, v = [], s = r, d = r && r[0] && n.isXML(r[0]); i && r.length;) {
                for (c in u.filter) if ((o = u.leftMatch[c].exec(i)) != null && o[2]) {
                    if (b = u.filter[c], p = o[1], h = !1, o.splice(1, 1), p.substr(p.length - 1) === "\\") continue;
                    if (s === v && (v = []), u.preFilter[c]) if (o = u.preFilter[c](o, s, f, v, e, d), o) {
                        if (o === !0) continue
                    } else h = l = !0;
                    if (o) for (a = 0;
                    (y = s[a]) != null; a++) y && (l = b(y, o, a, s), w = e ^ l, f && l != null ? w ? h = !0 : s[a] = !1 : w && (v.push(y), h = !0));
                    if (l !== t) {
                        if (f || (s = v), i = i.replace(u.match[c], ""), !h) return [];
                        break
                    }
                }
                if (i === k) if (h == null) n.error(i);
                else break;
                k = i
            }
            return s
        },
        n.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        var p = n.getText = function(n) {
            var i, r, t = n.nodeType,
            u = "";
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    if (typeof n.innerText == "string") return n.innerText.replace(tt, "");
                    for (n = n.firstChild; n; n = n.nextSibling) u += p(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else for (i = 0; r = n[i]; i++) r.nodeType !== 8 && (u += p(r));
            return u
        },
        u = n.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(n) {
                    return n.getAttribute("href")
                },
                type: function(n) {
                    return n.getAttribute("type")
                }
            },
            relative: {
                "+": function(t, i) {
                    var f = typeof i == "string",
                    e = f && !l.test(i),
                    o = f && !e,
                    u,
                    s,
                    r;
                    for (e && (i = i.toLowerCase()), u = 0, s = t.length; u < s; u++) if (r = t[u]) {
                        while ((r = r.previousSibling) && r.nodeType !== 1);
                        t[u] = o || r && r.nodeName.toLowerCase() === i ? r || !1 : r === i
                    }
                    o && n.filter(i, t, !0)
                },
                ">": function(t, i) {
                    var u, f = typeof i == "string",
                    r = 0,
                    o = t.length,
                    e;
                    if (f && !l.test(i)) for (i = i.toLowerCase(); r < o; r++) u = t[r],
                    u && (e = u.parentNode, t[r] = e.nodeName.toLowerCase() === i ? e: !1);
                    else {
                        for (; r < o; r++) u = t[r],
                        u && (t[r] = f ? u.parentNode: u.parentNode === i);
                        f && n.filter(i, t, !0)
                    }
                },
                "": function(n, t, i) {
                    var r, f = y++,
                    u = b;
                    typeof t != "string" || l.test(t) || (t = t.toLowerCase(), r = t, u = k),
                    u("parentNode", t, f, n, r, i)
                },
                "~": function(n, t, i) {
                    var r, f = y++,
                    u = b;
                    typeof t != "string" || l.test(t) || (t = t.toLowerCase(), r = t, u = k),
                    u("previousSibling", t, f, n, r, i)
                }
            },
            find: {
                ID: function(n, t, i) {
                    if (typeof t.getElementById != "undefined" && !i) {
                        var r = t.getElementById(n[1]);
                        return r && r.parentNode ? [r] : []
                    }
                },
                NAME: function(n, t) {
                    var r, u, i, f;
                    if (typeof t.getElementsByName != "undefined") {
                        for (r = [], u = t.getElementsByName(n[1]), i = 0, f = u.length; i < f; i++) u[i].getAttribute("name") === n[1] && r.push(u[i]);
                        return r.length === 0 ? null: r
                    }
                },
                TAG: function(n, t) {
                    if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(n[1])
                }
            },
            preFilter: {
                CLASS: function(n, t, i, r, u, f) {
                    if (n = " " + n[1].replace(o, "") + " ", f) return n;
                    for (var s = 0, e;
                    (e = t[s]) != null; s++) e && (u ^ (e.className && (" " + e.className + " ").replace(/[\t\n\r]/g, " ").indexOf(n) >= 0) ? i || r.push(e) : i && (t[s] = !1));
                    return ! 1
                },
                ID: function(n) {
                    return n[1].replace(o, "")
                },
                TAG: function(n) {
                    return n[1].replace(o, "").toLowerCase()
                },
                CHILD: function(t) {
                    if (t[1] === "nth") {
                        t[2] || n.error(t[0]),
                        t[2] = t[2].replace(/^\+|\s*/g, "");
                        var i = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(t[2] === "even" && "2n" || t[2] === "odd" && "2n+1" || !/\D/.test(t[2]) && "0n+" + t[2] || t[2]);
                        t[2] = i[1] + (i[2] || 1) - 0,
                        t[3] = i[3] - 0
                    } else t[2] && n.error(t[0]);
                    return t[0] = y++,
                    t
                },
                ATTR: function(n, t, i, r, f, e) {
                    var s = n[1] = n[1].replace(o, "");
                    return ! e && u.attrMap[s] && (n[1] = u.attrMap[s]),
                    n[4] = (n[4] || n[5] || "").replace(o, ""),
                    n[2] === "~=" && (n[4] = " " + n[4] + " "),
                    n
                },
                PSEUDO: function(t, i, r, f, e) {
                    if (t[1] === "not") if ((v.exec(t[3]) || "").length > 1 || /^\w/.test(t[3])) t[3] = n(t[3], null, null, i);
                    else {
                        var o = n.filter(t[3], i, r, !0 ^ e);
                        return r || f.push.apply(f, o),
                        !1
                    } else if (u.match.POS.test(t[0]) || u.match.CHILD.test(t[0])) return ! 0;
                    return t
                },
                POS: function(n) {
                    return n.unshift(!0),
                    n
                }
            },
            filters: {
                enabled: function(n) {
                    return n.disabled === !1 && n.type !== "hidden"
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    return n.checked === !0
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                parent: function(n) {
                    return !! n.firstChild
                },
                empty: function(n) {
                    return ! n.firstChild
                },
                has: function(t, i, r) {
                    return !! n(r[3], t).length
                },
                header: function(n) {
                    return /h\d/i.test(n.nodeName)
                },
                text: function(n) {
                    var t = n.getAttribute("type"),
                    i = n.type;
                    return n.nodeName.toLowerCase() === "input" && "text" === i && (t === i || t === null)
                },
                radio: function(n) {
                    return n.nodeName.toLowerCase() === "input" && "radio" === n.type
                },
                checkbox: function(n) {
                    return n.nodeName.toLowerCase() === "input" && "checkbox" === n.type
                },
                file: function(n) {
                    return n.nodeName.toLowerCase() === "input" && "file" === n.type
                },
                password: function(n) {
                    return n.nodeName.toLowerCase() === "input" && "password" === n.type
                },
                submit: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "submit" === n.type
                },
                image: function(n) {
                    return n.nodeName.toLowerCase() === "input" && "image" === n.type
                },
                reset: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "reset" === n.type
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && "button" === n.type || t === "button"
                },
                input: function(n) {
                    return /input|select|textarea|button/i.test(n.nodeName)
                },
                focus: function(n) {
                    return n === n.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(n, t) {
                    return t === 0
                },
                last: function(n, t, i, r) {
                    return t === r.length - 1
                },
                even: function(n, t) {
                    return t % 2 == 0
                },
                odd: function(n, t) {
                    return t % 2 == 1
                },
                lt: function(n, t, i) {
                    return t < i[3] - 0
                },
                gt: function(n, t, i) {
                    return t > i[3] - 0
                },
                nth: function(n, t, i) {
                    return i[3] - 0 === t
                },
                eq: function(n, t, i) {
                    return i[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function(t, i, r, f) {
                    var e = i[1],
                    h = u.filters[e],
                    s,
                    o,
                    c;
                    if (h) return h(t, r, i, f);
                    if (e === "contains") return (t.textContent || t.innerText || p([t]) || "").indexOf(i[3]) >= 0;
                    if (e === "not") {
                        for (s = i[3], o = 0, c = s.length; o < c; o++) if (s[o] === t) return ! 1;
                        return ! 0
                    }
                    n.error(e)
                },
                CHILD: function(n, t) {
                    var r, o, s, u, l, h, f, c = t[1],
                    i = n;
                    switch (c) {
                    case "only":
                    case "first":
                        while (i = i.previousSibling) if (i.nodeType === 1) return ! 1;
                        if (c === "first") return ! 0;
                        i = n;
                    case "last":
                        while (i = i.nextSibling) if (i.nodeType === 1) return ! 1;
                        return ! 0;
                    case "nth":
                        if (r = t[2], o = t[3], r === 1 && o === 0) return ! 0;
                        if (s = t[0], u = n.parentNode, u && (u[e] !== s || !n.nodeIndex)) {
                            for (h = 0, i = u.firstChild; i; i = i.nextSibling) i.nodeType === 1 && (i.nodeIndex = ++h);
                            u[e] = s
                        }
                        return f = n.nodeIndex - o,
                        r === 0 ? f === 0 : f % r == 0 && f / r >= 0
                    }
                },
                ID: function(n, t) {
                    return n.nodeType === 1 && n.getAttribute("id") === t
                },
                TAG: function(n, t) {
                    return t === "*" && n.nodeType === 1 || !!n.nodeName && n.nodeName.toLowerCase() === t
                },
                CLASS: function(n, t) {
                    return (" " + (n.className || n.getAttribute("class")) + " ").indexOf(t) > -1
                },
                ATTR: function(t, i) {
                    var o = i[1],
                    s = n.attr ? n.attr(t, o) : u.attrHandle[o] ? u.attrHandle[o](t) : t[o] != null ? t[o] : t.getAttribute(o),
                    f = s + "",
                    e = i[2],
                    r = i[4];
                    return s == null ? e === "!=": !e && n.attr ? s != null: e === "=" ? f === r: e === "*=" ? f.indexOf(r) >= 0 : e === "~=" ? (" " + f + " ").indexOf(r) >= 0 : r ? e === "!=" ? f !== r: e === "^=" ? f.indexOf(r) === 0 : e === "$=" ? f.substr(f.length - r.length) === r: e === "|=" ? f === r || f.substr(0, r.length + 1) === r + "-": !1 : f && s !== !1
                },
                POS: function(n, t, i, r) {
                    var e = t[2],
                    f = u.setFilters[e];
                    if (f) return f(n, i, t, r)
                }
            }
        },
        nt = u.match.POS,
        it = function(n, t) {
            return "\\" + ( + t + 1)
        };
        for (s in u.match) u.match[s] = new RegExp(u.match[s].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        u.leftMatch[s] = new RegExp(/(^(?:.|\r|\n)*?)/.source + u.match[s].source.replace(/\\(\d+)/g, it));
        u.match.globalPOS = nt,
        f = function(n, t) {
            return (n = Array.prototype.slice.call(n, 0), t) ? (t.push.apply(t, n), t) : n
        };
        try {
            Array.prototype.slice.call(r.documentElement.childNodes, 0)[0].nodeType
        } catch(rt) {
            f = function(n, t) {
                var i = 0,
                r = t || [],
                u;
                if (d.call(n) === "[object Array]") Array.prototype.push.apply(r, n);
                else if (typeof n.length == "number") for (u = n.length; i < u; i++) r.push(n[i]);
                else for (; n[i]; i++) r.push(n[i]);
                return r
            }
        }
        r.documentElement.compareDocumentPosition ? a = function(n, t) {
            return n === t ? (c = !0, 0) : !n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition ? -1 : 1 : n.compareDocumentPosition(t) & 4 ? -1 : 1
        }: (a = function(n, t) {
            var i;
            if (n === t) return c = !0,
            0;
            if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
            var e, l, u = [],
            f = [],
            o = n.parentNode,
            s = t.parentNode,
            r = o;
            if (o === s) return h(n, t);
            if (!o) return - 1;
            if (!s) return 1;
            while (r) u.unshift(r),
            r = r.parentNode;
            for (r = s; r;) f.unshift(r),
            r = r.parentNode;
            for (e = u.length, l = f.length, i = 0; i < e && i < l; i++) if (u[i] !== f[i]) return h(u[i], f[i]);
            return i === e ? h(n, f[i], -1) : h(u[i], t, 1)
        },
        h = function(n, t, i) {
            if (n === t) return i;
            for (var r = n.nextSibling; r;) {
                if (r === t) return - 1;
                r = r.nextSibling
            }
            return 1
        }),
        function() {
            var n = r.createElement("div"),
            f = "script" + +new Date,
            i = r.documentElement;
            n.innerHTML = "<a name='" + f + "'/>",
            i.insertBefore(n, i.firstChild),
            r.getElementById(f) && (u.find.ID = function(n, i, r) {
                if (typeof i.getElementById != "undefined" && !r) {
                    var u = i.getElementById(n[1]);
                    return u ? u.id === n[1] || typeof u.getAttributeNode != "undefined" && u.getAttributeNode("id").nodeValue === n[1] ? [u] : t: []
                }
            },
            u.filter.ID = function(n, t) {
                var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                return n.nodeType === 1 && i && i.nodeValue === t
            }),
            i.removeChild(n),
            i = n = null
        } (),
        function() {
            var n = r.createElement("div");
            n.appendChild(r.createComment("")),
            n.getElementsByTagName("*").length > 0 && (u.find.TAG = function(n, t) {
                var i = t.getElementsByTagName(n[1]),
                u,
                r;
                if (n[1] === "*") {
                    for (u = [], r = 0; i[r]; r++) i[r].nodeType === 1 && u.push(i[r]);
                    i = u
                }
                return i
            }),
            n.innerHTML = "<a href='#'><\/a>",
            n.firstChild && typeof n.firstChild.getAttribute != "undefined" && n.firstChild.getAttribute("href") !== "#" && (u.attrHandle.href = function(n) {
                return n.getAttribute("href", 2)
            }),
            n = null
        } (),
        r.querySelectorAll &&
        function() {
            var i = n,
            t = r.createElement("div"),
            o = "__sizzle__",
            e;
            if (t.innerHTML = "<p class='TEST'><\/p>", !t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                n = function(t, e, s, h) {
                    var c, l;
                    if (e = e || r, !h && !n.isXML(e)) {
                        if (c = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t), c && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (c[1]) return f(e.getElementsByTagName(t), s);
                            if (c[2] && u.find.CLASS && e.getElementsByClassName) return f(e.getElementsByClassName(c[2]), s)
                        }
                        if (e.nodeType === 9) {
                            if (t === "body" && e.body) return f([e.body], s);
                            if (c && c[3]) {
                                if (l = e.getElementById(c[3]), !l || !l.parentNode) return f([], s);
                                if (l.id === c[3]) return f([l], s)
                            }
                            try {
                                return f(e.querySelectorAll(t), s)
                            } catch(b) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var w = e,
                            v = e.getAttribute("id"),
                            a = v || o,
                            y = e.parentNode,
                            p = /^\s*[+~]/.test(t);
                            v ? a = a.replace(/'/g, "\\$&") : e.setAttribute("id", a),
                            p && y && (e = e.parentNode);
                            try {
                                if (!p || y) return f(e.querySelectorAll("[id='" + a + "'] " + t), s)
                            } catch(k) {} finally {
                                v || w.removeAttribute("id")
                            }
                        }
                    }
                    return i(t, e, s, h)
                };
                for (e in i) n[e] = i[e];
                t = null
            }
        } (),
        function() {
            var t = r.documentElement,
            i = t.matchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.msMatchesSelector,
            e, f;
            if (i) {
                e = !i.call(r.createElement("div"), "div"),
                f = !1;
                try {
                    i.call(r.documentElement, "[test!='']:sizzle")
                } catch(o) {
                    f = !0
                }
                n.matchesSelector = function(t, r) {
                    if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !n.isXML(t)) try {
                        if (f || !u.match.PSEUDO.test(r) && !/!=/.test(r)) {
                            var o = i.call(t, r);
                            if (o || !e || t.document && t.document.nodeType !== 11) return o
                        }
                    } catch(s) {}
                    return n(r, null, null, [t]).length > 0
                }
            }
        } (),
        function() {
            var n = r.createElement("div");
            if (n.innerHTML = "<div class='test e'><\/div><div class='test'><\/div>", !!n.getElementsByClassName && n.getElementsByClassName("e").length !== 0) {
                if (n.lastChild.className = "e", n.getElementsByClassName("e").length === 1) return;
                u.order.splice(1, 0, "CLASS"),
                u.find.CLASS = function(n, t, i) {
                    if (typeof t.getElementsByClassName != "undefined" && !i) return t.getElementsByClassName(n[1])
                },
                n = null
            }
        } (),
        n.contains = r.documentElement.contains ?
        function(n, t) {
            return n !== t && (n.contains ? n.contains(t) : !0)
        }: r.documentElement.compareDocumentPosition ?
        function(n, t) {
            return !! (n.compareDocumentPosition(t) & 16)
        }: function() {
            return ! 1
        },
        n.isXML = function(n) {
            var t = (n ? n.ownerDocument || n: 0).documentElement;
            return t ? t.nodeName !== "HTML": !1
        },
        w = function(t, i, r) {
            for (var e, o = [], s = "", h = i.nodeType ? [i] : i, f, c; e = u.match.PSEUDO.exec(t);) s += e[0],
            t = t.replace(u.match.PSEUDO, "");
            for (t = u.relative[t] ? t + "*": t, f = 0, c = h.length; f < c; f++) n(t, h[f], o, r);
            return n.filter(s, o)
        },
        n.attr = i.attr,
        n.selectors.attrMap = {},
        i.find = n,
        i.expr = n.selectors,
        i.expr[":"] = i.expr.filters,
        i.unique = n.uniqueSort,
        i.text = n.getText,
        i.isXMLDoc = n.isXML,
        i.contains = n.contains
    } ();
    var bu = /Until$/,
    ku = /^(?:parents|prevUntil|prevAll)/,
    du = /,/,
    gu = /^.[^:#\[\.,]*$/,
    nf = Array.prototype.slice,
    nr = i.expr.match.globalPOS,
    tf = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        find: function(n) {
            var s = this,
            t, f, r, o, u, e;
            if (typeof n != "string") return i(n).filter(function() {
                for (t = 0, f = s.length; t < f; t++) if (i.contains(s[t], this)) return ! 0
            });
            for (r = this.pushStack("", "find", n), t = 0, f = this.length; t < f; t++) if (o = r.length, i.find(n, this[t], r), t > 0) for (u = o; u < r.length; u++) for (e = 0; e < o; e++) if (r[e] === r[u]) {
                r.splice(u--, 1);
                break
            }
            return r
        },
        has: function(n) {
            var t = i(n);
            return this.filter(function() {
                for (var n = 0, r = t.length; n < r; n++) if (i.contains(this, t[n])) return ! 0
            })
        },
        not: function(n) {
            return this.pushStack(ei(this, n, !1), "not", n)
        },
        filter: function(n) {
            return this.pushStack(ei(this, n, !0), "filter", n)
        },
        is: function(n) {
            return !! n && (typeof n == "string" ? nr.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function(n, t) {
            var f = [],
            u,
            s,
            r = this[0],
            e,
            o;
            if (i.isArray(n)) {
                for (e = 1; r && r.ownerDocument && r !== t;) {
                    for (u = 0; u < n.length; u++) i(r).is(n[u]) && f.push({
                        selector: n[u],
                        elem: r,
                        level: e
                    });
                    r = r.parentNode,
                    e++
                }
                return f
            }
            for (o = nr.test(n) || typeof n != "string" ? i(n, t || this.context) : 0, u = 0, s = this.length; u < s; u++) for (r = this[u]; r;) {
                if (o ? o.index(r) > -1 : i.find.matchesSelector(r, n)) {
                    f.push(r);
                    break
                }
                if (r = r.parentNode, !r || !r.ownerDocument || r === t || r.nodeType === 11) break
            }
            return f = f.length > 1 ? i.unique(f) : f,
            this.pushStack(f, "closest", n)
        },
        index: function(n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length: -1
        },
        add: function(n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
            r = i.merge(this.get(), u);
            return this.pushStack(oi(u[0]) || oi(r[0]) ? r: i.unique(r))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t: null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return i.nth(n, 2, "nextSibling")
        },
        prev: function(n) {
            return i.nth(n, 2, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document: i.makeArray(n.childNodes)
        }
    },
    function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return bu.test(n) || (u = r),
            u && typeof u == "string" && (f = i.filter(u, f)),
            f = this.length > 1 && !tf[n] ? i.unique(f) : f,
            (this.length > 1 || du.test(u)) && ku.test(n) && (f = f.reverse()),
            this.pushStack(f, n, nf.call(arguments).join(","))
        }
    }),
    i.extend({
        filter: function(n, t, r) {
            return r && (n = ":not(" + n + ")"),
            t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f),
            f = f[r];
            return e
        },
        nth: function(n, t, i) {
            t = t || 1;
            for (var u = 0; n; n = n[i]) if (n.nodeType === 1 && ++u === t) break;
            return n
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var tr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    rf = / jQuery\d+="(?:\d+|null)"/g,
    ot = /^\s+/,
    ir = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rr = /<([\w:]+)/,
    uf = /<tbody/i,
    ff = /<|&#?\w+;/,
    ef = /<(?:script|style)/i,
    of = /<(?:script|object|embed|option|style)/i,
    ur = new RegExp("<(?:" + tr + ")[\\s/>]", "i"),
    fr = /checked\s*(?:[^=]|=\s*.checked.)/i,
    er = /\/(java|ecma)script/i,
    sf = /^\s*<!(?:\[CDATA\[|\-\-)/,
    u = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        area: [1, "<map>", "<\/map>"],
        _default: [0, "", ""]
    },
    st = fi(r);
    u.optgroup = u.option,
    u.tbody = u.tfoot = u.colgroup = u.caption = u.thead,
    u.th = u.td,
    i.support.htmlSerialize || (u._default = [1, "div<div>", "<\/div>"]),
    i.fn.extend({
        text: function(n) {
            return i.access(this,
            function(n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            },
            null, n, arguments.length)
        },
        wrapAll: function(n) {
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(n) {
                this.nodeType === 1 && this.appendChild(n)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(n) {
                this.nodeType === 1 && this.insertBefore(n, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(n) {
                this.parentNode.insertBefore(n, this)
            });
            if (arguments.length) {
                var n = i.clean(arguments);
                return n.push.apply(n, this.toArray()),
                this.pushStack(n, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(n) {
                this.parentNode.insertBefore(n, this.nextSibling)
            });
            if (arguments.length) {
                var n = this.pushStack(this, "after", arguments);
                return n.push.apply(n, i.clean(arguments)),
                n
            }
        },
        remove: function(n, t) {
            for (var u = 0, r;
            (r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var t = 0, n;
            (n = this[t]) != null; t++) for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;) n.removeChild(n.firstChild);
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n,
            t = t == null ? n: t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return i.access(this,
            function(n) {
                var r = this[0] || {},
                f = 0,
                e = this.length;
                if (n === t) return r.nodeType === 1 ? r.innerHTML.replace(rf, "") : null;
                if (typeof n == "string" && !ef.test(n) && (i.support.leadingWhitespace || !ot.test(n)) && !u[(rr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(ir, "<$1><\/$2>");
                    try {
                        for (; f < e; f++) r = this[f] || {},
                        r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), r.innerHTML = n);
                        r = 0
                    } catch(o) {}
                }
                r && this.empty().append(n)
            },
            null, n, arguments.length)
        },
        replaceWith: function(n) {
            return this[0] && this[0].parentNode ? i.isFunction(n) ? this.each(function(t) {
                var r = i(this),
                u = r.html();
                r.replaceWith(n.call(this, t, u))
            }) : (typeof n != "string" && (n = i(n).detach()), this.each(function() {
                var t = this.nextSibling,
                r = this.parentNode;
                i(this).remove(),
                t ? i(t).before(n) : i(r).append(n)
            })) : this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, r, u) {
            var c, o, f, s, e = n[0],
            l = [];
            if (!i.support.checkClone && arguments.length === 3 && typeof e == "string" && fr.test(e)) return this.each(function() {
                i(this).domManip(n, r, u, !0)
            });
            if (i.isFunction(e)) return this.each(function(f) {
                var o = i(this);
                n[0] = e.call(this, f, r ? o.html() : t),
                o.domManip(n, r, u)
            });
            if (this[0]) {
                if (s = e && e.parentNode, c = i.support.parentNode && s && s.nodeType === 11 && s.childNodes.length === this.length ? {
                    fragment: s
                }: i.buildFragment(n, this, l), f = c.fragment, o = f.childNodes.length === 1 ? f = f.firstChild: f.firstChild, o) {
                    r = r && i.nodeName(o, "tr");
                    for (var h = 0, a = this.length, v = a - 1; h < a; h++) u.call(r ? ru(this[h], o) : this[h], c.cacheable || a > 1 && h < v ? i.clone(f, !0, !0) : f)
                }
                l.length && i.each(l,
                function(n, t) {
                    t.src ? i.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(sf, "/*$0*/")),
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }),
    i.buildFragment = function(n, t, u) {
        var e, h, s, o, f = n[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]),
        o.createDocumentFragment || (o = r),
        n.length === 1 && typeof f == "string" && f.length < 512 && o === r && f.charAt(0) === "<" && !of.test(f) && (i.support.checkClone || !fr.test(f)) && (i.support.html5Clone || !ur.test(f)) && (h = !0, s = i.fragments[f], s && s !== 1 && (e = s)),
        e || (e = o.createDocumentFragment(), i.clean(n, o, e, u)),
        h && (i.fragments[f] = s ? e: 1),
        {
            fragment: e,
            cacheable: h
        }
    },
    i.fragments = {},
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(n, t) {
        i.fn[n] = function(r) {
            var e = [],
            u = i(r),
            o = this.length === 1 && this[0].parentNode,
            f,
            h,
            s;
            if (o && o.nodeType === 11 && o.childNodes.length === 1 && u.length === 1) return u[t](this[0]),
            this;
            for (f = 0, h = u.length; f < h; f++) s = (f > 0 ? this.clone(!0) : this).get(),
            i(u[f])[t](s),
            e = e.concat(s);
            return this.pushStack(e, n, u.selector)
        }
    }),
    i.extend({
        clone: function(n, t, r) {
            var f, e, u, o = i.support.html5Clone || i.isXMLDoc(n) || !ur.test("<" + n.nodeName + ">") ? n.cloneNode(!0) : iu(n);
            if ((!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n)) for (ri(n, o), f = b(n), e = b(o), u = 0; f[u]; ++u) e[u] && ri(f[u], e[u]);
            if (t && (ui(n, o), r)) for (f = b(n), e = b(o), u = 0; f[u]; ++u) ui(f[u], e[u]);
            return f = e = null,
            o
        },
        clean: function(n, t, f, e) {
            var k, h, c, l = [],
            a,
            o,
            b,
            v,
            g,
            nt;
            for (t = t || r, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || r), a = 0;
            (o = n[a]) != null; a++) if (typeof o == "number" && (o += ""), o) {
                if (typeof o == "string") if (ff.test(o)) {
                    o = o.replace(ir, "<$1><\/$2>");
                    var d = (rr.exec(o) || ["", ""])[1].toLowerCase(),
                    p = u[d] || u._default,
                    tt = p[0],
                    s = t.createElement("div"),
                    w = st.childNodes,
                    y;
                    for (t === r ? st.appendChild(s) : fi(t).appendChild(s), s.innerHTML = p[1] + o + p[2]; tt--;) s = s.lastChild;
                    if (!i.support.tbody) for (b = uf.test(o), v = d === "table" && !b ? s.firstChild && s.firstChild.childNodes: p[1] === "<table>" && !b ? s.childNodes: [], c = v.length - 1; c >= 0; --c) i.nodeName(v[c], "tbody") && !v[c].childNodes.length && v[c].parentNode.removeChild(v[c]); ! i.support.leadingWhitespace && ot.test(o) && s.insertBefore(t.createTextNode(ot.exec(o)[0]), s.firstChild),
                    o = s.childNodes,
                    s && (s.parentNode.removeChild(s), w.length > 0 && (y = w[w.length - 1], y && y.parentNode && y.parentNode.removeChild(y)))
                } else o = t.createTextNode(o);
                if (!i.support.appendChecked) if (o[0] && typeof(g = o.length) == "number") for (c = 0; c < g; c++) ti(o[c]);
                else ti(o);
                o.nodeType ? l.push(o) : l = i.merge(l, o)
            }
            if (f) for (k = function(n) {
                return ! n.type || er.test(n.type)
            },
            a = 0; l[a]; a++) h = l[a],
            e && i.nodeName(h, "script") && (!h.type || er.test(h.type)) ? e.push(h.parentNode ? h.parentNode.removeChild(h) : h) : (h.nodeType === 1 && (nt = i.grep(h.getElementsByTagName("script"), k), l.splice.apply(l, [a + 1, 0].concat(nt))), f.appendChild(h));
            return l
        },
        cleanData: function(n) {
            for (var r, u, o = i.cache, s = i.event.special, h = i.support.deleteExpando, t, f, e = 0;
            (t = n[e]) != null; e++) if ((!t.nodeName || !i.noData[t.nodeName.toLowerCase()]) && (u = t[i.expando], u)) {
                if (r = o[u], r && r.events) {
                    for (f in r.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, r.handle);
                    r.handle && (r.handle.elem = null)
                }
                h ? delete t[i.expando] : t.removeAttribute && t.removeAttribute(i.expando),
                delete o[u]
            }
        }
    });
    var ht = /alpha\([^)]*\)/i,
    hf = /opacity=([^)]*)/,
    cf = /([A-Z]|^ms)/g,
    lf = /^[\-+]?(?:\d*\.)?\d+$/i,
    ct = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
    af = /^([\-+])=([\-+.\de]+)/,
    vf = /^margin/,
    yf = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    o = ["Top", "Right", "Bottom", "Left"],
    a,
    or,
    sr;
    i.fn.css = function(n, r) {
        return i.access(this,
        function(n, r, u) {
            return u !== t ? i.style(n, r, u) : i.css(n, r)
        },
        n, r, arguments.length > 1)
    },
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = a(n, "opacity");
                        return i === "" ? "1": i
                    }
                    return n.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(n, r, u, f) {
            if ( !! n && n.nodeType !== 3 && n.nodeType !== 8 && !!n.style) {
                var o, s, h = i.camelCase(r),
                c = n.style,
                e = i.cssHooks[h];
                if (r = i.cssProps[h] || h, u === t) return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o: c[r];
                if (s = typeof u, s === "string" && (o = af.exec(u)) && (u = +(o[1] + 1) * +o[2] + parseFloat(i.css(n, r)), s = "number"), u == null || s === "number" && isNaN(u)) return;
                if (s !== "number" || i.cssNumber[h] || (u += "px"), !e || !("set" in e) || (u = e.set(n, u)) !== t) try {
                    c[r] = u
                } catch(l) {}
            }
        },
        css: function(n, r, u) {
            var e, f;
            return (r = i.camelCase(r), f = i.cssHooks[r], r = i.cssProps[r] || r, r === "cssFloat" && (r = "float"), f && "get" in f && (e = f.get(n, !0, u)) !== t) ? e: a ? a(n, r) : void 0
        },
        swap: function(n, t, i) {
            var u = {},
            f, r;
            for (r in t) u[r] = n.style[r],
            n.style[r] = t[r];
            f = i.call(n);
            for (r in t) n.style[r] = u[r];
            return f
        }
    }),
    i.curCSS = i.css,
    r.defaultView && r.defaultView.getComputedStyle && (or = function(n, t) {
        var r, e, u, o, f = n.style;
        return t = t.replace(cf, "-$1").toLowerCase(),
        (e = n.ownerDocument.defaultView) && (u = e.getComputedStyle(n, null)) && (r = u.getPropertyValue(t), r === "" && !i.contains(n.ownerDocument.documentElement, n) && (r = i.style(n, t))),
        !i.support.pixelMargin && u && vf.test(t) && ct.test(r) && (o = f.width, f.width = r, r = u.width, f.width = o),
        r
    }),
    r.documentElement.currentStyle && (sr = function(n, t) {
        var f, u, e, i = n.currentStyle && n.currentStyle[t],
        r = n.style;
        return i == null && r && (e = r[t]) && (i = e),
        ct.test(i) && (f = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em": i, i = r.pixelLeft + "px", r.left = f, u && (n.runtimeStyle.left = u)),
        i === "" ? "auto": i
    }),
    a = or || sr,
    i.each(["height", "width"],
    function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return n.offsetWidth !== 0 ? ni(n, t, u) : i.swap(n, yf,
                function() {
                    return ni(n, t, u)
                })
            },
            set: function(n, t) {
                return lf.test(t) ? t + "px": t
            }
        }
    }),
    i.support.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return hf.test((t && n.currentStyle ? n.currentStyle.filter: n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": t ? "1": ""
        },
        set: function(n, t) {
            var r = n.style,
            u = n.currentStyle,
            e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")": "",
            f = u && u.filter || r.filter || "";
            (r.zoom = 1, t >= 1 && i.trim(f.replace(ht, "")) === "" && (r.removeAttribute("filter"), u && !u.filter)) || (r.filter = ht.test(f) ? f.replace(ht, e) : f + " " + e)
        }
    }),
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, t) {
                return i.swap(n, {
                    display: "inline-block"
                },
                function() {
                    return t ? a(n, "margin-right") : n.style.marginRight
                })
            }
        })
    }),
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        var t = n.offsetWidth,
        r = n.offsetHeight;
        return t === 0 && r === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || i.css(n, "display")) === "none"
    },
    i.expr.filters.visible = function(n) {
        return ! i.expr.filters.hidden(n)
    }),
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var u = typeof i == "string" ? i.split(" ") : [i], f = {},
                r = 0; r < 4; r++) f[n + o[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        }
    });
    var pf = /%20/g,
    wf = /\[\]$/,
    hr = /\r?\n/g,
    bf = /#.*$/,
    kf = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    df = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    gf = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    ne = /^(?:GET|HEAD)$/,
    te = /^\/\//,
    cr = /\?/,
    ie = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    re = /^(?:select|textarea)/i,
    lr = /\s+/,
    ue = /([?&])_=[^&]*/,
    ar = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    vr = i.fn.load,
    lt = {},
    yr = {},
    s, h, pr = ["*/"] + ["*"];
    try {
        s = eu.href
    } catch(oe) {
        s = r.createElement("a"),
        s.href = "",
        s = s.href
    }
    h = ar.exec(s.toLowerCase()) || [],
    i.fn.extend({
        load: function(n, r, u) {
            var f, e, o, s;
            return typeof n != "string" && vr ? vr.apply(this, arguments) : this.length ? (f = n.indexOf(" "), f >= 0 && (e = n.slice(f, n.length), n = n.slice(0, f)), o = "GET", r && (i.isFunction(r) ? (u = r, r = t) : typeof r == "object" && (r = i.param(r, i.ajaxSettings.traditional), o = "POST")), s = this, i.ajax({
                url: n,
                type: o,
                dataType: "html",
                data: r,
                complete: function(n, t, r) {
                    r = n.responseText,
                    n.isResolved() && (n.done(function(n) {
                        r = n
                    }), s.html(e ? i("<div>").append(r.replace(ie, "")).find(e) : r)),
                    u && s.each(u, [r, t, n])
                }
            }), this) : this
        },
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || re.test(this.nodeName) || df.test(this.type))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null: i.isArray(r) ? i.map(r,
                function(n) {
                    return {
                        name: t.name,
                        value: n.replace(hr, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(hr, "\r\n")
                }
            }).get()
        }
    }),
    i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.each(["get", "post"],
    function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t),
            i.ajax({
                type: r,
                url: n,
                data: u,
                success: f,
                dataType: e
            })
        }
    }),
    i.extend({
        getScript: function(n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        ajaxSetup: function(n, t) {
            return t ? dt(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings),
            dt(n, t),
            n
        },
        ajaxSettings: {
            url: s,
            isLocal: gf.test(h[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pr
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: gt(lt),
        ajaxTransport: gt(yr),
        ajax: function(n, r) {
            function y(n, r, h, l) {
                if (e !== 2) {
                    e = 2,
                    nt && clearTimeout(nt),
                    c = t,
                    g = l || "",
                    f.readyState = n > 0 ? 4 : 0;
                    var y, b, w, a = r,
                    ut = h ? tu(u, f, h) : t,
                    tt,
                    it;
                    if (n >= 200 && n < 300 || n === 304) if (u.ifModified && ((tt = f.getResponseHeader("Last-Modified")) && (i.lastModified[o] = tt), (it = f.getResponseHeader("Etag")) && (i.etag[o] = it)), n === 304) a = "notmodified",
                    y = !0;
                    else try {
                        b = nu(u, ut),
                        a = "success",
                        y = !0
                    } catch(ft) {
                        a = "parsererror",
                        w = ft
                    } else w = a,
                    (!a || n) && (a = "error", n < 0 && (n = 0));
                    f.status = n,
                    f.statusText = "" + (r || a),
                    y ? d.resolveWith(s, [b, a, f]) : d.rejectWith(s, [f, a, w]),
                    f.statusCode(p),
                    p = t,
                    v && k.trigger("ajax" + (y ? "Success": "Error"), [f, u, y ? b: w]),
                    rt.fireWith(s, [f, a]),
                    v && (k.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop"))
                }
            }
            var tt, it;
            typeof n == "object" && (r = n, n = t),
            r = r || {};
            var u = i.ajaxSetup({},
            r),
            s = u.context || u,
            k = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event,
            d = i.Deferred(),
            rt = i.Callbacks("once memory"),
            p = u.statusCode || {},
            o,
            ut = {},
            ft = {},
            g,
            b,
            c,
            nt,
            l,
            e = 0,
            v,
            a,
            f = {
                readyState: 0,
                setRequestHeader: function(n, t) {
                    if (!e) {
                        var i = n.toLowerCase();
                        n = ft[i] = ft[i] || n,
                        ut[n] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return e === 2 ? g: null
                },
                getResponseHeader: function(n) {
                    var i;
                    if (e === 2) {
                        if (!b) for (b = {}; i = kf.exec(g);) b[i[1].toLowerCase()] = i[2];
                        i = b[n.toLowerCase()]
                    }
                    return i === t ? null: i
                },
                overrideMimeType: function(n) {
                    return e || (u.mimeType = n),
                    this
                },
                abort: function(n) {
                    return n = n || "abort",
                    c && c.abort(n),
                    y(0, n),
                    this
                }
            };
            if (d.promise(f), f.success = f.done, f.error = f.fail, f.complete = rt.add, f.statusCode = function(n) {
                if (n) {
                    var t;
                    if (e < 2) for (t in n) p[t] = [p[t], n[t]];
                    else t = n[f.status],
                    f.then(t, t)
                }
                return this
            },
            u.url = ((n || u.url) + "").replace(bf, "").replace(te, h[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(lr), u.crossDomain == null && (l = ar.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] == h[1] && l[2] == h[2] && (l[3] || (l[1] === "http:" ? 80 : 443)) == (h[3] || (h[1] === "http:" ? 80 : 443)))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), w(lt, u, r, f), e === 2) return ! 1;
            v = u.global,
            u.type = u.type.toUpperCase(),
            u.hasContent = !ne.test(u.type),
            v && i.active++==0 && i.event.trigger("ajaxStart"),
            u.hasContent || (u.data && (u.url += (cr.test(u.url) ? "&": "?") + u.data, delete u.data), o = u.url, u.cache === !1 && (tt = i.now(), it = u.url.replace(ue, "$1_=" + tt), u.url = it + (it === u.url ? (cr.test(u.url) ? "&": "?") + "_=" + tt: ""))),
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType),
            u.ifModified && (o = o || u.url, i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o])),
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + pr + "; q=0.01": "") : u.accepts["*"]);
            for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(s, f, u) === !1 || e === 2)) return f.abort(),
            !1;
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            }) f[a](u[a]);
            if (c = w(yr, u, r, f), c) {
                f.readyState = 1,
                v && k.trigger("ajaxSend", [f, u]),
                u.async && u.timeout > 0 && (nt = setTimeout(function() {
                    f.abort("timeout")
                },
                u.timeout));
                try {
                    e = 1,
                    c.send(ut, y)
                } catch(et) {
                    if (e < 2) y( - 1, et);
                    else throw et;
                }
            } else y( - 1, "No Transport");
            return f
        },
        param: function(n, r) {
            var u = [],
            e = function(n, t) {
                t = i.isFunction(t) ? t() : t,
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            },
            f;
            if (r === t && (r = i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n,
            function() {
                e(this.name, this.value)
            });
            else for (f in n) ut(f, n[f], r, e);
            return u.join("&").replace(pf, "+")
        }
    }),
    i.extend({
        active: 0,
        lastModified: {},
        etag: {}
    }),
    wr = i.now(),
    p = /(\=)\?(&|$)|\?\?/i,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return i.expando + "_" + wr++
        }
    }),
    i.ajaxPrefilter("json jsonp",
    function(t, r, u) {
        var h = typeof t.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (p.test(t.url) || h && p.test(t.data))) {
            var o, f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            c = n[f],
            e = t.url,
            s = t.data,
            l = "$1" + f + "$2";
            return t.jsonp !== !1 && (e = e.replace(p, l), t.url === e && (h && (s = s.replace(p, l)), t.data === s && (e += (/\?/.test(e) ? "&": "?") + t.jsonp + "=" + f))),
            t.url = e,
            t.data = s,
            n[f] = function(n) {
                o = [n]
            },
            u.always(function() {
                n[f] = c,
                o && i.isFunction(c) && n[f](o[0])
            }),
            t.converters["script json"] = function() {
                return o || i.error(f + " was not called"),
                o[0]
            },
            t.dataTypes[0] = "json",
            "script"
        }
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script",
    function(n) {
        n.cache === t && (n.cache = !1),
        n.crossDomain && (n.type = "GET", n.global = !1)
    }),
    i.ajaxTransport("script",
    function(n) {
        if (n.crossDomain) {
            var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return {
                send: function(f, e) {
                    i = r.createElement("script"),
                    i.async = "async",
                    n.scriptCharset && (i.charset = n.scriptCharset),
                    i.src = n.url,
                    i.onload = i.onreadystatechange = function(n, r) { (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success"))
                    },
                    u.insertBefore(i, u.firstChild)
                },
                abort: function() {
                    i && i.onload(0, 1)
                }
            }
        }
    }),
    nt = n.ActiveXObject ?
    function() {
        for (var n in v) v[n](0, 1)
    }: !1,
    br = 0,
    i.ajaxSettings.xhr = n.ActiveXObject ?
    function() {
        return ! this.isLocal && kt() || gr()
    }: kt,
    function(n) {
        i.extend(i.support, {
            ajax: !!n,
            cors: !!n && "withCredentials" in n
        })
    } (i.ajaxSettings.xhr()),
    i.support.ajax && i.ajaxTransport(function(r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function(f, e) {
                    var o = r.xhr(),
                    h,
                    s;
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields) for (s in r.xhrFields) o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType),
                    r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f) o.setRequestHeader(s, f[s])
                    } catch(c) {}
                    o.send(r.hasContent && r.data || null),
                    u = function(n, f) {
                        var s, a, y, c, l;
                        try {
                            if (u && (f || o.readyState === 4)) if (u = t, h && (o.onreadystatechange = i.noop, nt && delete v[h]), f) o.readyState !== 4 && o.abort();
                            else {
                                s = o.status,
                                y = o.getAllResponseHeaders(),
                                c = {},
                                l = o.responseXML,
                                l && l.documentElement && (c.xml = l);
                                try {
                                    c.text = o.responseText
                                } catch(n) {}
                                try {
                                    a = o.statusText
                                } catch(p) {
                                    a = ""
                                } ! s && r.isLocal && !r.crossDomain ? s = c.text ? 200 : 404 : s === 1223 && (s = 204)
                            }
                        } catch(w) {
                            f || e( - 1, w)
                        }
                        c && e(s, a, c, y)
                    },
                    !r.async || o.readyState === 4 ? u() : (h = ++br, nt && (v || (v = {},
                    i(n).unload(nt)), v[h] = u), o.onreadystatechange = u)
                },
                abort: function() {
                    u && u(0, 1)
                }
            }
        }
    });
    var at = {},
    f, y, fe = /^(?:toggle|show|hide)$/,
    ee = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    tt, it = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    rt;
    i.fn.extend({
        show: function(n, t, r) {
            var u, e, f, o;
            if (n || n === 0) return this.animate(c("show", 3), n, t, r);
            for (f = 0, o = this.length; f < o; f++) u = this[f],
            u.style && (e = u.style.display, !i._data(u, "olddisplay") && e === "none" && (e = u.style.display = ""), (e === "" && i.css(u, "display") === "none" || !i.contains(u.ownerDocument.documentElement, u)) && i._data(u, "olddisplay", wt(u.nodeName)));
            for (f = 0; f < o; f++) u = this[f],
            u.style && (e = u.style.display, (e === "" || e === "none") && (u.style.display = i._data(u, "olddisplay") || ""));
            return this
        },
        hide: function(n, t, r) {
            if (n || n === 0) return this.animate(c("hide", 3), n, t, r);
            for (var f, e, u = 0, o = this.length; u < o; u++) f = this[u],
            f.style && (e = i.css(f, "display"), e !== "none" && !i._data(f, "olddisplay") && i._data(f, "olddisplay", e));
            for (u = 0; u < o; u++) this[u].style && (this[u].style.display = "none");
            return this
        },
        _toggle: i.fn.toggle,
        toggle: function(n, t, r) {
            var u = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? this._toggle.apply(this, arguments) : n == null || u ? this.each(function() {
                var t = u ? n: i(this).is(":hidden");
                i(this)[t ? "show": "hide"]()
            }) : this.animate(c("toggle", 3), n, t, r),
            this
        },
        fadeTo: function(n, t, i, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            },
            n, i, r)
        },
        animate: function(n, t, r, u) {
            function e() {
                f.queue === !1 && i._mark(this);
                var e = i.extend({},
                f),
                w = this.nodeType === 1,
                v = w && i(this).is(":hidden"),
                r,
                u,
                t,
                o,
                y,
                p,
                h,
                s,
                c,
                l,
                a;
                e.animatedProperties = {};
                for (t in n) if (r = i.camelCase(t), t !== r && (n[r] = n[t], delete n[t]), (y = i.cssHooks[r]) && "expand" in y) {
                    p = y.expand(n[r]),
                    delete n[r];
                    for (t in p) t in n || (n[t] = p[t])
                }
                for (r in n) {
                    if (u = n[r], i.isArray(u) ? (e.animatedProperties[r] = u[1], u = n[r] = u[0]) : e.animatedProperties[r] = e.specialEasing && e.specialEasing[r] || e.easing || "swing", u === "hide" && v || u === "show" && !v) return e.complete.call(this);
                    w && (r === "height" || r === "width") && (e.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], i.css(this, "display") === "inline" && i.css(this, "float") === "none" && (!i.support.inlineBlockNeedsLayout || wt(this.nodeName) === "inline" ? this.style.display = "inline-block": this.style.zoom = 1))
                }
                e.overflow != null && (this.style.overflow = "hidden");
                for (t in n) o = new i.fx(this, e, t),
                u = n[t],
                fe.test(u) ? (a = i._data(this, "toggle" + t) || (u === "toggle" ? v ? "show": "hide": 0), a ? (i._data(this, "toggle" + t, a === "show" ? "hide": "show"), o[a]()) : o[u]()) : (h = ee.exec(u), s = o.cur(), h ? (c = parseFloat(h[2]), l = h[3] || (i.cssNumber[t] ? "": "px"), l !== "px" && (i.style(this, t, (c || 1) + l), s = (c || 1) / o.cur() * s, i.style(this, t, s + l)), h[1] && (c = (h[1] === "-=" ? -1 : 1) * c + s), o.custom(s, c, l)) : o.custom(s, u, ""));
                return ! 0
            }
            var f = i.speed(t, r, u);
            return i.isEmptyObject(n) ? this.each(f.complete, [!1]) : (n = i.extend({},
            n), f.queue === !1 ? this.each(e) : this.queue(f.queue, e))
        },
        stop: function(n, r, u) {
            return typeof n != "string" && (u = r, r = n, n = t),
            r && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                function e(n, t, r) {
                    var f = t[r];
                    i.removeData(n, r, !0),
                    f.stop(u)
                }
                var t, o = !1,
                f = i.timers,
                r = i._data(this);
                if (u || i._unmark(!0, this), n == null) for (t in r) r[t] && r[t].stop && t.indexOf(".run") === t.length - 4 && e(this, r, t);
                else r[t = n + ".run"] && r[t].stop && e(this, r, t);
                for (t = f.length; t--;) f[t].elem === this && (n == null || f[t].queue === n) && (u ? f[t](!0) : f[t].saveState(), o = !0, f.splice(t, 1));
                u && o || i.dequeue(this, n)
            })
        }
    }),
    i.each({
        slideDown: c("show", 1),
        slideUp: c("hide", 1),
        slideToggle: c("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    }),
    i.extend({
        speed: function(n, t, r) {
            var u = n && typeof n == "object" ? i.extend({},
            n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration: u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
            (u.queue == null || u.queue === !0) && (u.queue = "fx"),
            u.old = u.complete,
            u.complete = function(n) {
                i.isFunction(u.old) && u.old.call(this),
                u.queue ? i.dequeue(this, u.queue) : n !== !1 && i._unmark(this)
            },
            u
        },
        easing: {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return - Math.cos(n * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(n, t, i) {
            this.options = t,
            this.elem = n,
            this.prop = i,
            t.orig = t.orig || {}
        }
    }),
    i.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (i.fx.step[this.prop] || i.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var t, n = i.css(this.elem, this.prop);
            return isNaN(t = parseFloat(n)) ? !n || n === "auto" ? 0 : n: t
        },
        custom: function(n, r, u) {
            function e(n) {
                return f.step(n)
            }
            var f = this,
            o = i.fx;
            this.startTime = rt || bt(),
            this.end = r,
            this.now = this.start = n,
            this.pos = this.state = 0,
            this.unit = u || this.unit || (i.cssNumber[this.prop] ? "": "px"),
            e.queue = this.options.queue,
            e.elem = this.elem,
            e.saveState = function() {
                i._data(f.elem, "fxshow" + f.prop) === t && (f.options.hide ? i._data(f.elem, "fxshow" + f.prop, f.start) : f.options.show && i._data(f.elem, "fxshow" + f.prop, f.end))
            },
            e() && i.timers.push(e) && !tt && (tt = setInterval(o.tick, o.interval))
        },
        show: function() {
            var n = i._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = n || i.style(this.elem, this.prop),
            this.options.show = !0,
            n !== t ? this.custom(this.cur(), n) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
            i(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = i._data(this.elem, "fxshow" + this.prop) || i.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(n) {
            var r, f, e, o = rt || bt(),
            s = !0,
            u = this.elem,
            t = this.options;
            if (n || o >= t.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                t.animatedProperties[this.prop] = !0;
                for (r in t.animatedProperties) t.animatedProperties[r] !== !0 && (s = !1);
                if (s) {
                    if (t.overflow == null || i.support.shrinkWrapBlocks || i.each(["", "X", "Y"],
                    function(n, i) {
                        u.style["overflow" + i] = t.overflow[n]
                    }), t.hide && i(u).hide(), t.hide || t.show) for (r in t.animatedProperties) i.style(u, r, t.orig[r]),
                    i.removeData(u, "fxshow" + r, !0),
                    i.removeData(u, "toggle" + r, !0);
                    e = t.complete,
                    e && (t.complete = !1, e.call(u))
                }
                return ! 1
            }
            return t.duration == Infinity ? this.now = o: (f = o - this.startTime, this.state = f / t.duration, this.pos = i.easing[t.animatedProperties[this.prop]](this.state, f, 0, 1, t.duration), this.now = this.start + (this.end - this.start) * this.pos),
            this.update(),
            !0
        }
    },
    i.extend(i.fx, {
        tick: function() {
            for (var r, n = i.timers, t = 0; t < n.length; t++) r = n[t],
            r() || n[t] !== r || n.splice(t--, 1);
            n.length || i.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(tt),
            tt = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(n) {
                i.style(n.elem, "opacity", n.now)
            },
            _default: function(n) {
                n.elem.style && n.elem.style[n.prop] != null ? n.elem.style[n.prop] = n.now + n.unit: n.elem[n.prop] = n.now
            }
        }
    }),
    i.each(it.concat.apply([], it),
    function(n, t) {
        t.indexOf("margin") && (i.fx.step[t] = function(n) {
            i.style(n.elem, t, Math.max(0, n.now) + n.unit)
        })
    }),
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers,
        function(t) {
            return n === t.elem
        }).length
    }),
    kr = /^t(?:able|d|h)$/i,
    yt = /^(?:body|html)$/i,
    vt = "getBoundingClientRect" in r.documentElement ?
    function(n, t, r, u) {
        try {
            u = n.getBoundingClientRect()
        } catch(v) {}
        if (!u || !i.contains(r, n)) return u ? {
            top: u.top,
            left: u.left
        }: {
            top: 0,
            left: 0
        };
        var f = t.body,
        e = pt(t),
        o = r.clientTop || f.clientTop || 0,
        s = r.clientLeft || f.clientLeft || 0,
        h = e.pageYOffset || i.support.boxModel && r.scrollTop || f.scrollTop,
        c = e.pageXOffset || i.support.boxModel && r.scrollLeft || f.scrollLeft,
        l = u.top + h - o,
        a = u.left + c - s;
        return {
            top: l,
            left: a
        }
    }: function(n, t, r) {
        for (var u, c = n.offsetParent, l = n, o = t.body, h = t.defaultView, s = h ? h.getComputedStyle(n, null) : n.currentStyle, f = n.offsetTop, e = n.offsetLeft;
        (n = n.parentNode) && n !== o && n !== r;) {
            if (i.support.fixedPosition && s.position === "fixed") break;
            u = h ? h.getComputedStyle(n, null) : n.currentStyle,
            f -= n.scrollTop,
            e -= n.scrollLeft,
            n === c && (f += n.offsetTop, e += n.offsetLeft, i.support.doesNotAddBorder && (!i.support.doesAddBorderForTableAndCells || !kr.test(n.nodeName)) && (f += parseFloat(u.borderTopWidth) || 0, e += parseFloat(u.borderLeftWidth) || 0), l = c, c = n.offsetParent),
            i.support.subtractsBorderForOverflowNotVisible && u.overflow !== "visible" && (f += parseFloat(u.borderTopWidth) || 0, e += parseFloat(u.borderLeftWidth) || 0),
            s = u
        }
        return (s.position === "relative" || s.position === "static") && (f += o.offsetTop, e += o.offsetLeft),
        i.support.fixedPosition && s.position === "fixed" && (f += Math.max(r.scrollTop, o.scrollTop), e += Math.max(r.scrollLeft, o.scrollLeft)),
        {
            top: f,
            left: e
        }
    },
    i.fn.offset = function(n) {
        if (arguments.length) return n === t ? this: this.each(function(t) {
            i.offset.setOffset(this, n, t)
        });
        var r = this[0],
        u = r && r.ownerDocument;
        return u ? r === u.body ? i.offset.bodyOffset(r) : vt(r, u, u.documentElement) : null
    },
    i.offset = {
        bodyOffset: function(n) {
            var t = n.offsetTop,
            r = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, "marginTop")) || 0, r += parseFloat(i.css(n, "marginLeft")) || 0),
            {
                top: t,
                left: r
            }
        },
        setOffset: function(n, t, r) {
            var f = i.css(n, "position");
            f === "static" && (n.style.position = "relative");
            var e = i(n),
            o = e.offset(),
            l = i.css(n, "top"),
            a = i.css(n, "left"),
            v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1,
            u = {},
            s = {},
            h,
            c;
            v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0),
            i.isFunction(t) && (t = t.call(n, r, o)),
            t.top != null && (u.top = t.top - o.top + h),
            t.left != null && (u.left = t.left - o.left + c),
            "using" in t ? t.using.call(n, u) : e.css(u)
        }
    },
    i.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var u = this[0],
            n = this.offsetParent(),
            t = this.offset(),
            r = yt.test(n[0].nodeName) ? {
                top: 0,
                left: 0
            }: n.offset();
            return t.top -= parseFloat(i.css(u, "marginTop")) || 0,
            t.left -= parseFloat(i.css(u, "marginLeft")) || 0,
            r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0,
            r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0,
            {
                top: t.top - r.top,
                left: t.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || r.body; n && !yt.test(n.nodeName) && i.css(n, "position") === "static";) n = n.offsetParent;
                return n
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function(f) {
            return i.access(this,
            function(n, f, e) {
                var o = pt(n);
                if (e === t) return o ? r in o ? o[r] : i.support.boxModel && o.document.documentElement[f] || o.document.body[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e: i(o).scrollTop()) : n[f] = e
            },
            n, f, arguments.length, null)
        }
    }),
    i.each({
        Height: "height",
        Width: "width"
    },
    function(n, r) {
        var u = "client" + n,
        f = "scroll" + n,
        e = "offset" + n;
        i.fn["inner" + n] = function() {
            var n = this[0];
            return n ? n.style ? parseFloat(i.css(n, r, "padding")) : this[r]() : null
        },
        i.fn["outer" + n] = function(n) {
            var t = this[0];
            return t ? t.style ? parseFloat(i.css(t, r, n ? "margin": "border")) : this[r]() : null
        },
        i.fn[r] = function(n) {
            return i.access(this,
            function(n, r, o) {
                var s, h, c, l;
                if (i.isWindow(n)) return s = n.document,
                h = s.documentElement[u],
                i.support.boxModel && h || s.body && s.body[u] || h;
                if (n.nodeType === 9) return (s = n.documentElement, s[u] >= s[f]) ? s[u] : Math.max(n.body[f], s[f], n.body[e], s[e]);
                if (o === t) return c = i.css(n, r),
                l = parseFloat(c),
                i.isNumeric(l) ? l: c;
                i(n).css(r, o)
            },
            r, n, arguments.length, null)
        }
    }),
    n.jQuery = n.$ = i,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return i
    })
})(window),
function(n, t) {
    function i(t, i) {
        var u, f, e, o = t.nodeName.toLowerCase();
        return "area" === o ? (u = t.parentNode, f = u.name, !t.href || !f || u.nodeName.toLowerCase() !== "map" ? !1 : (e = n("img[usemap=#" + f + "]")[0], !!e && r(e))) : (/input|select|textarea|button|object/.test(o) ? !t.disabled: "a" === o ? t.href || i: i) && r(t)
    }
    function r(t) {
        return ! n(t).parents().andSelf().filter(function() {
            return n.css(this, "visibility") === "hidden" || n.expr.filters.hidden(this)
        }).length
    }
    var u = 0,
    f = /^ui-id-\d+$/;
    (n.ui = n.ui || {},
    n.ui.version) || (n.extend(n.ui, {
        version: "1.9.0",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), n.fn.extend({
        _focus: n.fn.focus,
        focus: function(t, i) {
            return typeof t == "number" ? this.each(function() {
                var r = this;
                setTimeout(function() {
                    n(r).focus(),
                    i && i.call(r)
                },
                t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return t = n.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(n.css(this, "position")) && /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? n(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length) for (var r = n(this[0]), u, f; r.length && r[0] !== document;) {
                if (u = r.css("position"), (u === "absolute" || u === "relative" || u === "fixed") && (f = parseInt(r.css("zIndex"), 10), !isNaN(f) && f !== 0)) return f;
                r = r.parent()
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++u)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                f.test(this.id) && n(this).removeAttr("id")
            })
        }
    }), n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"],
    function(i, r) {
        function u(t, i, r, u) {
            return n.each(o,
            function() {
                i -= parseFloat(n.css(t, "padding" + this)) || 0,
                r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0),
                u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
            }),
            i
        }
        var o = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
        f = r.toLowerCase(),
        e = {
            innerWidth: n.fn.innerWidth,
            innerHeight: n.fn.innerHeight,
            outerWidth: n.fn.outerWidth,
            outerHeight: n.fn.outerHeight
        };
        n.fn["inner" + r] = function(i) {
            return i === t ? e["inner" + r].call(this) : this.each(function() {
                n(this).css(f, u(this, i) + "px")
            })
        },
        n.fn["outer" + r] = function(t, i) {
            return typeof t != "number" ? e["outer" + r].call(this, t) : this.each(function() {
                n(this).css(f, u(this, t, !0, i) + "px")
            })
        }
    }), n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
            return function(i) {
                return !! n.data(i, t)
            }
        }) : function(t, i, r) {
            return !! n.data(t, r[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(n.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var r = n.attr(t, "tabindex"),
            u = isNaN(r);
            return (u || r >= 0) && i(t, !u)
        }
    }), n(function() {
        var i = document.body,
        t = i.appendChild(t = document.createElement("div"));
        t.offsetHeight,
        n.extend(t.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }),
        n.support.minHeight = t.offsetHeight === 100,
        n.support.selectstart = "onselectstart" in t,
        i.removeChild(t).style.display = "none"
    }), n.fn.extend({
        disableSelection: function() {
            return this.bind((n.support.selectstart ? "selectstart": "mousedown") + ".ui-disableSelection",
            function(n) {
                n.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), n.extend(n.ui, {
        plugin: {
            add: function(t, i, r) {
                var u, f = n.ui[t].prototype;
                for (u in r) f.plugins[u] = f.plugins[u] || [],
                f.plugins[u].push([i, r[u]])
            },
            call: function(n, t, i) {
                var r, u = n.plugins[t];
                if (u && n.element[0].parentNode && n.element[0].parentNode.nodeType !== 11) for (r = 0; r < u.length; r++) n.options[u[r][0]] && u[r][1].apply(n.element, i)
            }
        },
        contains: n.contains,
        hasScroll: function(t, i) {
            if (n(t).css("overflow") === "hidden") return ! 1;
            var r = i && i === "left" ? "scrollLeft": "scrollTop",
            u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
        },
        isOverAxis: function(n, t, i) {
            return n > t && n < t + i
        },
        isOver: function(t, i, r, u, f, e) {
            return n.ui.isOverAxis(t, r, f) && n.ui.isOverAxis(i, u, e)
        }
    }))
} (jQuery),
function(n, t) {
    var r = 0,
    i = Array.prototype.slice,
    u = n.cleanData;
    n.cleanData = function(t) {
        for (var i = 0, r;
        (r = t[i]) != null; i++) try {
            n(r).triggerHandler("remove")
        } catch(f) {}
        u(t)
    },
    n.widget = function(t, i, r) {
        var e, o, u, s, f = t.split(".")[0];
        t = t.split(".")[1],
        e = f + "-" + t,
        r || (r = i, i = n.Widget),
        n.expr[":"][e.toLowerCase()] = function(t) {
            return !! n.data(t, e)
        },
        n[f] = n[f] || {},
        o = n[f][t],
        u = n[f][t] = function(n, t) {
            if (!this._createWidget) return new u(n, t);
            arguments.length && this._createWidget(n, t)
        },
        n.extend(u, o, {
            version: r.version,
            _proto: n.extend({},
            r),
            _childConstructors: []
        }),
        s = new i,
        s.options = n.widget.extend({},
        s.options),
        n.each(r,
        function(t, u) {
            n.isFunction(u) && (r[t] = function() {
                var n = function() {
                    return i.prototype[t].apply(this, arguments)
                },
                r = function(n) {
                    return i.prototype[t].apply(this, n)
                };
                return function() {
                    var i = this._super,
                    f = this._superApply,
                    t;
                    return this._super = n,
                    this._superApply = r,
                    t = u.apply(this, arguments),
                    this._super = i,
                    this._superApply = f,
                    t
                }
            } ())
        }),
        u.prototype = n.widget.extend(s, {
            widgetEventPrefix: t
        },
        r, {
            constructor: u,
            namespace: f,
            widgetName: t,
            widgetBaseClass: e,
            widgetFullName: e
        }),
        o ? (n.each(o._childConstructors,
        function(t, i) {
            var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto)
        }), delete o._childConstructors) : i._childConstructors.push(u),
        n.widget.bridge(t, u)
    },
    n.widget.extend = function(r) {
        for (var o = i.call(arguments, 1), u = 0, s = o.length, f, e; u < s; u++) for (f in o[u]) e = o[u][f],
        o[u].hasOwnProperty(f) && e !== t && (r[f] = n.isPlainObject(e) ? n.widget.extend({},
        r[f], e) : e);
        return r
    },
    n.widget.bridge = function(r, u) {
        var f = u.prototype.widgetFullName;
        n.fn[r] = function(e) {
            var h = typeof e == "string",
            o = i.call(arguments, 1),
            s = this;
            return e = !h && o.length ? n.widget.extend.apply(null, [e].concat(o)) : e,
            h ? this.each(function() {
                var i, u = n.data(this, f);
                return u ? !n.isFunction(u[e]) || e.charAt(0) === "_" ? n.error("no such method '" + e + "' for " + r + " widget instance") : (i = u[e].apply(u, o), i !== u && i !== t ? (s = i && i.jquery ? s.pushStack(i.get()) : i, !1) : void 0) : n.error("cannot call methods on " + r + " prior to initialization; attempted to call method '" + e + "'")
            }) : this.each(function() {
                var t = n.data(this, f);
                t ? t.option(e || {})._init() : new u(e, this)
            }),
            s
        }
    },
    n.Widget = function() {},
    n.Widget._childConstructors = [],
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = n(i || this.defaultElement || this)[0],
            this.element = n(i),
            this.uuid = r++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = n.widget.extend({},
            this.options, this._getCreateOptions(), t),
            this.bindings = n(),
            this.hoverable = n(),
            this.focusable = n(),
            i !== this && (n.data(i, this.widgetName, this), n.data(i, this.widgetFullName, this), this._on({
                remove: "destroy"
            }), this.document = n(i.style ? i.ownerDocument: i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: n.noop,
        _getCreateEventData: n.noop,
        _create: n.noop,
        _init: n.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: n.noop,
        widget: function() {
            return this.element
        },
        option: function(i, r) {
            var o = i,
            u, f, e;
            if (arguments.length === 0) return n.widget.extend({},
            this.options);
            if (typeof i == "string") if (o = {},
            u = i.split("."), i = u.shift(), u.length) {
                for (f = o[i] = n.widget.extend({},
                this.options[i]), e = 0; e < u.length - 1; e++) f[u[e]] = f[u[e]] || {},
                f = f[u[e]];
                if (i = u.pop(), r === t) return f[i] === t ? null: f[i];
                f[i] = r
            } else {
                if (r === t) return this.options[i] === t ? null: this.options[i];
                o[i] = r
            }
            return this._setOptions(o),
            this
        },
        _setOptions: function(n) {
            var t;
            for (t in n) this._setOption(t, n[t]);
            return this
        },
        _setOption: function(n, t) {
            return this.options[n] = t,
            n === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, i) {
            i ? (t = n(t), this.bindings = this.bindings.add(t)) : (i = t, t = this.element);
            var r = this;
            n.each(i,
            function(i, u) {
                function f() {
                    if (r.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return (typeof u == "string" ? r[u] : u).apply(r, arguments)
                }
                typeof u != "string" && (f.guid = u.guid = u.guid || f.guid || n.guid++);
                var e = i.match(/^(\w+)\s*(.*)$/),
                o = e[1] + r.eventNamespace,
                s = e[2];
                s ? r.widget().delegate(s, o, f) : t.bind(o, f)
            })
        },
        _off: function(n, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            n.unbind(t).undelegate(t)
        },
        _delay: function(n, t) {
            function r() {
                return (typeof n == "string" ? i[n] : n).apply(i, arguments)
            }
            var i = this;
            return setTimeout(r, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    n(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    n(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    n(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    n(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {},
            i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t: this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent, f) for (u in f) u in i || (i[u] = f[u]);
            return this.element.trigger(i, r),
            !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
        }
    },
    n.each({
        show: "fadeIn",
        hide: "fadeOut"
    },
    function(t, i) {
        n.Widget.prototype["_" + t] = function(r, u, f) {
            typeof u == "string" && (u = {
                effect: u
            });
            var o, e = u ? u === !0 || typeof u == "number" ? i: u.effect || i: t;
            u = u || {},
            typeof u == "number" && (u = {
                duration: u
            }),
            o = !n.isEmptyObject(u),
            u.complete = f,
            u.delay && r.delay(u.delay),
            o && n.effects && (n.effects.effect[e] || n.uiBackCompat !== !1 && n.effects[e]) ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                n(this)[t](),
                f && f.call(r[0]),
                i()
            })
        }
    }),
    n.uiBackCompat !== !1 && (n.Widget.prototype._getCreateOptions = function() {
        return n.metadata && n.metadata.get(this.element[0])[this.widgetName]
    })
} (jQuery),
function(n) {
    var i = !1;
    n(document).mouseup(function() {
        i = !1
    }),
    n.widget("ui.mouse", {
        version: "1.9.0",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName,
            function(n) {
                return t._mouseDown(n)
            }).bind("click." + this.widgetName,
            function(i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent")) return n.removeData(i.target, t.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!i) {
                this._mouseStarted && this._mouseUp(t),
                this._mouseDownEvent = t;
                var r = this,
                u = t.which === 1,
                f = typeof this.options.cancel == "string" && t.target.nodeName ? n(t.target).closest(this.options.cancel).length: !1;
                return ! u || f || !this._mouseCapture(t) ? !0 : (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    r.mouseDelayMet = !0
                },
                this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted)) ? (t.preventDefault(), !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(n) {
                    return r._mouseMove(n)
                },
                this._mouseUpDelegate = function(n) {
                    return r._mouseUp(n)
                },
                n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), i = !0, !0)
            }
        },
        _mouseMove: function(t) {
            return ! n.browser.msie || document.documentMode >= 9 || !!t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return ! 0
        }
    })
} (jQuery),
function(n) {
    n.widget("ui.draggable", n.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            this.options.helper != "original" || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || n(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (n(i.iframeFix === !0 ? "iframe": i.iframeFix).each(function() {
                n('<div class="ui-draggable-iframeFix" style="background: #fff;"><\/div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(n(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            n.ui.ddmanager && (n.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            i.containment && this._setContainment(),
            this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, i) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}),
                !1;
                this.position = r.position
            }
            return this.options.axis && this.options.axis == "y" || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && this.options.axis == "x" || (this.helper[0].style.top = this.position.top + "px"),
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var i = !1,
            r, u, f;
            for (n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), r = this.element[0], u = !1; r && (r = r.parentNode);) r == document && (u = !0);
            return ! u && this.options.helper === "original" ? !1 : (this.options.revert == "invalid" && !i || this.options.revert == "valid" && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? (f = this, n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
            function() {
                f._trigger("stop", t) !== !1 && f._clear()
            })) : this._trigger("stop", t) !== !1 && this._clear(), !1)
        },
        _mouseUp: function(t) {
            return n("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t),
            n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            var i = !this.options.handle || !n(this.options.handle, this.element).length ? !0 : !1;
            return n(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t.target && (i = !0)
            }),
            i
        },
        _createHelper: function(t) {
            var r = this.options,
            i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t])) : r.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo(r.appendTo == "parent" ? this.element[0].parentNode: r.appendTo),
            i[0] != this.element[0] && !/(fixed|absolute)/.test(i.css("position")) && i.css("position", "absolute"),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")),
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left" in t && (this.offset.click.left = t.left + this.margins.left),
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top" in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition == "absolute" && this.scrollParent[0] != document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && n.browser.msie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var n = this.element.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var i = this.options,
            r, t, f, u;
            if (i.containment == "parent" && (i.containment = this.helper[0].parentNode), (i.containment == "document" || i.containment == "window") && (this.containment = [i.containment == "document" ? 0 : n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, i.containment == "document" ? 0 : n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (i.containment == "document" ? 0 : n(window).scrollLeft()) + n(i.containment == "document" ? document: window).width() - this.helperProportions.width - this.margins.left, (i.containment == "document" ? 0 : n(window).scrollTop()) + (n(i.containment == "document" ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || i.containment.constructor == Array) i.containment.constructor == Array && (this.containment = i.containment);
            else {
                if (r = n(i.containment), t = r[0], !t) return;
                f = r.offset(),
                u = n(t).css("overflow") != "hidden",
                this.containment = [(parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0), (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0), (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                this.relative_container = r
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t == "absolute" ? 1 : -1,
            e = this.options,
            u = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var r = this.options,
            h = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            c = /(html|body)/i.test(h[0].tagName),
            e = t.pageX,
            o = t.pageY,
            i,
            s,
            u,
            f;
            return this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, o = i ? u - this.offset.click.top < i[1] || u - this.offset.click.top > i[3] ? u - this.offset.click.top < i[1] ? u + r.grid[1] : u - r.grid[1] : u: u, f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, e = i ? f - this.offset.click.left < i[0] || f - this.offset.click.left > i[2] ? f - this.offset.click.left < i[0] ? f + r.grid[0] : f - r.grid[0] : f: f)),
            {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : c ? 0 : h.scrollTop()),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : c ? 0 : h.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, i, r) {
            return r = r || this._uiHash(),
            n.ui.plugin.call(this, t, [i, r]),
            t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")),
            n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i) {
            var r = n(this).data("draggable"),
            u = r.options,
            f = n.extend({},
            i, {
                item: r.element
            });
            r.sortables = [],
            n(u.connectToSortable).each(function() {
                var i = n.data(this, "sortable");
                i && !i.options.disabled && (r.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, f))
            })
        },
        stop: function(t, i) {
            var r = n(this).data("draggable"),
            u = n.extend({},
            i, {
                item: r.element
            });
            n.each(r.sortables,
            function() {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, u))
            })
        },
        drag: function(t, i) {
            var r = n(this).data("draggable"),
            u = this,
            f = function(t) {
                var i = this.offset.click.top,
                r = this.offset.click.left,
                u = this.positionAbs.top,
                f = this.positionAbs.left,
                e = t.height,
                o = t.width,
                s = t.top,
                h = t.left;
                return n.ui.isOver(u + i, f + r, s, h, e, o)
            };
            n.each(r.sortables,
            function() {
                this.instance.positionAbs = r.positionAbs,
                this.instance.helperProportions = r.helperProportions,
                this.instance.offset.click = r.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = n(u).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                },
                t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    }),
    n.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var r = n("body"),
            u = n(this).data("draggable").options;
            r.css("cursor") && (u._cursor = r.css("cursor")),
            r.css("cursor", u.cursor)
        },
        stop: function() {
            var r = n(this).data("draggable").options;
            r._cursor && n("body").css("cursor", r._cursor)
        }
    }),
    n.ui.plugin.add("draggable", "opacity", {
        start: function(t, i) {
            var r = n(i.helper),
            u = n(this).data("draggable").options;
            r.css("opacity") && (u._opacity = r.css("opacity")),
            r.css("opacity", u.opacity)
        },
        stop: function(t, i) {
            var r = n(this).data("draggable").options;
            r._opacity && n(i.helper).css("opacity", r._opacity)
        }
    }),
    n.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var r = n(this).data("draggable");
            r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" && (r.overflowOffset = r.scrollParent.offset())
        },
        drag: function(t) {
            var u = n(this).data("draggable"),
            r = u.options,
            f = !1;
            u.scrollParent[0] != document && u.scrollParent[0].tagName != "HTML" ? (r.axis && r.axis == "x" || (u.overflowOffset.top + u.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? u.scrollParent[0].scrollTop = f = u.scrollParent[0].scrollTop + r.scrollSpeed: t.pageY - u.overflowOffset.top < r.scrollSensitivity && (u.scrollParent[0].scrollTop = f = u.scrollParent[0].scrollTop - r.scrollSpeed)), r.axis && r.axis == "y" || (u.overflowOffset.left + u.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? u.scrollParent[0].scrollLeft = f = u.scrollParent[0].scrollLeft + r.scrollSpeed: t.pageX - u.overflowOffset.left < r.scrollSensitivity && (u.scrollParent[0].scrollLeft = f = u.scrollParent[0].scrollLeft - r.scrollSpeed))) : (r.axis && r.axis == "x" || (t.pageY - n(document).scrollTop() < r.scrollSensitivity ? f = n(document).scrollTop(n(document).scrollTop() - r.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < r.scrollSensitivity && (f = n(document).scrollTop(n(document).scrollTop() + r.scrollSpeed))), r.axis && r.axis == "y" || (t.pageX - n(document).scrollLeft() < r.scrollSensitivity ? f = n(document).scrollLeft(n(document).scrollLeft() - r.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < r.scrollSensitivity && (f = n(document).scrollLeft(n(document).scrollLeft() + r.scrollSpeed)))),
            f !== !1 && n.ui.ddmanager && !r.dropBehaviour && n.ui.ddmanager.prepareOffsets(u, t)
        }
    }),
    n.ui.plugin.add("draggable", "snap", {
        start: function() {
            var r = n(this).data("draggable"),
            u = r.options;
            r.snapElements = [],
            n(u.snap.constructor != String ? u.snap.items || ":data(draggable)": u.snap).each(function() {
                var t = n(this),
                i = t.offset();
                this != r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, i) {
            for (var r = n(this).data("draggable"), k = r.options, u = k.snapTolerance, c = i.offset.left, a = c + r.helperProportions.width, l = i.offset.top, v = l + r.helperProportions.height, d, f = r.snapElements.length - 1; f >= 0; f--) {
                var e = r.snapElements[f].left,
                s = e + r.snapElements[f].width,
                o = r.snapElements[f].top,
                h = o + r.snapElements[f].height;
                if (! (e - u < c && c < s + u && o - u < l && l < h + u || e - u < c && c < s + u && o - u < v && v < h + u || e - u < a && a < s + u && o - u < l && l < h + u || e - u < a && a < s + u && o - u < v && v < h + u)) {
                    r.snapElements[f].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                        snapItem: r.snapElements[f].item
                    })),
                    r.snapElements[f].snapping = !1;
                    continue
                }
                if (k.snapMode != "inner") {
                    var y = Math.abs(o - v) <= u,
                    p = Math.abs(h - l) <= u,
                    w = Math.abs(e - a) <= u,
                    b = Math.abs(s - c) <= u;
                    y && (i.position.top = r._convertPositionTo("relative", {
                        top: o - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top),
                    p && (i.position.top = r._convertPositionTo("relative", {
                        top: h,
                        left: 0
                    }).top - r.margins.top),
                    w && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: e - r.helperProportions.width
                    }).left - r.margins.left),
                    b && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: s
                    }).left - r.margins.left)
                }
                if (d = y || p || w || b, k.snapMode != "outer") {
                    var y = Math.abs(o - l) <= u,
                    p = Math.abs(h - v) <= u,
                    w = Math.abs(e - c) <= u,
                    b = Math.abs(s - a) <= u;
                    y && (i.position.top = r._convertPositionTo("relative", {
                        top: o,
                        left: 0
                    }).top - r.margins.top),
                    p && (i.position.top = r._convertPositionTo("relative", {
                        top: h - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top),
                    w && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: e
                    }).left - r.margins.left),
                    b && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: s - r.helperProportions.width
                    }).left - r.margins.left)
                } ! r.snapElements[f].snapping && (y || p || w || b || d) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[f].item
                })),
                r.snapElements[f].snapping = y || p || w || b || d
            }
        }
    }),
    n.ui.plugin.add("draggable", "stack", {
        start: function() {
            var f = n(this).data("draggable").options,
            r = n.makeArray(n(f.stack)).sort(function(t, i) {
                return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
            }),
            u;
            r.length && (u = parseInt(r[0].style.zIndex) || 0, n(r).each(function(n) {
                this.style.zIndex = u + n
            }), this[0].style.zIndex = u + r.length)
        }
    }),
    n.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i) {
            var r = n(i.helper),
            u = n(this).data("draggable").options;
            r.css("zIndex") && (u._zIndex = r.css("zIndex")),
            r.css("zIndex", u.zIndex)
        },
        stop: function(t, i) {
            var r = n(this).data("draggable").options;
            r._zIndex && n(i.helper).css("zIndex", r._zIndex)
        }
    })
} (jQuery),
function(n) {
    n.widget("ui.droppable", {
        version: "1.9.0",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var t = this.options,
            i = t.accept;
            this.isover = 0,
            this.isout = 1,
            this.accept = n.isFunction(i) ? i: function(n) {
                return n.is(i)
            },
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            },
            n.ui.ddmanager.droppables[t.scope] = n.ui.ddmanager.droppables[t.scope] || [],
            n.ui.ddmanager.droppables[t.scope].push(this),
            t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var i = n.ui.ddmanager.droppables[this.options.scope], t = 0; t < i.length; t++) i[t] == this && i.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, i) {
            t == "accept" && (this.accept = n.isFunction(i) ? i: function(n) {
                return n.is(i)
            }),
            n.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var r = i || n.ui.ddmanager.current,
            u;
            return ! r || (r.currentItem || r.element)[0] == this.element[0] ? !1 : (u = !1, this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var t = n.data(this, "droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance)) return u = !0,
                !1
            }), u ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1)
        },
        ui: function(n) {
            return {
                draggable: n.currentItem || n.element,
                helper: n.helper,
                position: n.position,
                offset: n.positionAbs
            }
        }
    }),
    n.ui.intersect = function(t, i, r) {
        if (!i.offset) return ! 1;
        var e = (t.positionAbs || t.position.absolute).left,
        s = e + t.helperProportions.width,
        o = (t.positionAbs || t.position.absolute).top,
        h = o + t.helperProportions.height,
        u = i.offset.left,
        c = u + i.proportions.width,
        f = i.offset.top,
        l = f + i.proportions.height;
        switch (r) {
        case "fit":
            return u <= e && s <= c && f <= o && h <= l;
        case "intersect":
            return u < e + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < c && f < o + t.helperProportions.height / 2 && h - t.helperProportions.height / 2 < l;
        case "pointer":
            var a = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
            v = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top;
            return n.ui.isOver(v, a, f, u, i.proportions.height, i.proportions.width);
        case "touch":
            return (o >= f && o <= l || h >= f && h <= l || o < f && h > l) && (e >= u && e <= c || s >= u && s <= c || e < u && s > c);
        default:
            return ! 1
        }
    },
    n.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var u = n.ui.ddmanager.droppables[t.options.scope] || [],
            o = i ? i.type: null,
            e = (t.currentItem || t.element).find(":data(droppable)").andSelf(),
            r,
            f;
            n: for (r = 0; r < u.length; r++) if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                for (f = 0; f < e.length; f++) if (e[f] == u[r].element[0]) {
                    u[r].proportions.height = 0;
                    continue n
                } (u[r].visible = u[r].element.css("display") != "none", u[r].visible) && (o == "mousedown" && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions = {
                    width: u[r].element[0].offsetWidth,
                    height: u[r].element[0].offsetHeight
                })
            }
        },
        drop: function(t, i) {
            var r = !1;
            return n.each(n.ui.ddmanager.droppables[t.options.scope] || [],
            function() {
                this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
            }),
            r
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable",
            function() {
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i),
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [],
            function() {
                var f, u, r, o, e;
                this.options.disabled || this.greedyChild || !this.visible || (f = n.ui.intersect(t, this, this.options.tolerance), u = !f && this.isover == 1 ? "isout": f && this.isover == 0 ? "isover": null, u) && (this.options.greedy && (o = this.options.scope, e = this.element.parents(":data(droppable)").filter(function() {
                    return n.data(this, "droppable").options.scope === o
                }), e.length && (r = n.data(e[0], "droppable"), r.greedyChild = u == "isover" ? 1 : 0)), r && u == "isover" && (r.isover = 0, r.isout = 1, r._out.call(r, i)), this[u] = 1, this[u == "isout" ? "isover": "isout"] = 0, this[u == "isover" ? "_over": "_out"].call(this, i), r && u == "isout" && (r.isout = 0, r.isover = 1, r._over.call(r, i)))
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"),
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
        }
    }
} (jQuery),
function(n) {
    n.widget("ui.resizable", n.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var i = this,
            t = this.options,
            f, r;
            if (this.element.addClass("ui-resizable"), n.extend(this, {
                _aspectRatio: !!t.aspectRatio,
                aspectRatio: t.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper": null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n('<div class="ui-wrapper" style="overflow: hidden;"><\/div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            }: "e,s,se"), this.handles.constructor == String) for (this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), f = this.handles.split(","), this.handles = {},
            r = 0; r < f.length; r++) {
                var u = n.trim(f[r]),
                o = "ui-resizable-" + u,
                e = n('<div class="ui-resizable-handle ' + o + '"><\/div>');
                e.css({
                    zIndex: t.zIndex
                }),
                "se" == u && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                this.handles[u] = ".ui-resizable-" + u,
                this.element.append(e)
            }
            this._renderAxis = function(t) {
                var i, r, u, f;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor == String && (this.handles[i] = n(this.handles[i], this.element).show()),
                this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element), u = 0, u = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), f = ["padding", /ne|nw|n/.test(i) ? "Top": /se|sw|s/.test(i) ? "Bottom": /^e$/.test(i) ? "Right": "Left"].join(""), t.css(f, u), this._proportionallyResize()),
                !n(this.handles[i]).length
            },
            this._renderAxis(this.element),
            this._handles = n(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function() {
                if (!i.resizing) {
                    if (this.className) var n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    i.axis = n && n[1] ? n[1] : "se"
                }
            }),
            t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                t.disabled || (n(this).removeClass("ui-resizable-autohide"), i._handles.show())
            }).mouseleave(function() {
                t.disabled || i.resizing || (n(this).addClass("ui-resizable-autohide"), i._handles.hide())
            })),
            this._mouseInit()
        },
        _destroy: function() {
            var i, t;
            return this._mouseDestroy(),
            i = function(t) {
                n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            },
            this.elementIsWrapper && (i(this.element), t = this.element, t.after(this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            })).remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _mouseCapture: function(t) {
            var i = !1,
            r;
            for (r in this.handles) n(this.handles[r])[0] == t.target && (i = !0);
            return ! this.options.disabled && i
        },
        _mouseStart: function(t) {
            var u = this.options,
            s = this.element.position(),
            i = this.element,
            f,
            e,
            o;
            return this.resizing = !0,
            this.documentScroll = {
                top: n(document).scrollTop(),
                left: n(document).scrollLeft()
            },
            (i.is(".ui-draggable") || /absolute/.test(i.css("position"))) && i.css({
                position: "absolute",
                top: s.top,
                left: s.left
            }),
            this._renderProxy(),
            f = r(this.helper.css("left")),
            e = r(this.helper.css("top")),
            u.containment && (f += n(u.containment).scrollLeft() || 0, e += n(u.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: f,
                top: e
            },
            this.size = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            }: {
                width: i.width(),
                height: i.height()
            },
            this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            }: {
                width: i.width(),
                height: i.height()
            },
            this.originalPosition = {
                left: f,
                top: e
            },
            this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = typeof u.aspectRatio == "number" ? u.aspectRatio: this.originalSize.width / this.originalSize.height || 1,
            o = n(".ui-resizable-" + this.axis).css("cursor"),
            n("body").css("cursor", o == "auto" ? this.axis + "-resize": o),
            i.addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(n) {
            var u = this.helper,
            s = this.options,
            h = {},
            c = this,
            i = this.originalMousePosition,
            f = this.axis,
            e = n.pageX - i.left || 0,
            o = n.pageY - i.top || 0,
            r = this._change[f],
            t;
            return r ? (t = r.apply(this, [n, e, o]), this._updateVirtualBoundaries(n.shiftKey), (this._aspectRatio || n.shiftKey) && (t = this._updateRatio(t, n)), t = this._respectSize(t, n), this._propagate("resize", n), u.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(t), this._trigger("resize", n, this.ui()), !1) : !1
        },
        _mouseStop: function(t) {
            var r, i;
            if (this.resizing = !1, r = this.options, i = this, this._helper) {
                var u = this._proportionallyResizeElements,
                f = u.length && /textarea/i.test(u[0].nodeName),
                e = f && n.ui.hasScroll(u[0], "left") ? 0 : i.sizeDiff.height,
                o = f ? 0 : i.sizeDiff.width,
                s = {
                    width: i.helper.width() - o,
                    height: i.helper.height() - e
                },
                h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                r.animate || this.element.css(n.extend(s, {
                    top: c,
                    left: h
                })),
                i.helper.height(i.size.height),
                i.helper.width(i.size.width),
                this._helper && !r.animate && this._proportionallyResize()
            }
            return n("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(n) {
            var r = this.options,
            u, f, e, o, t;
            t = {
                minWidth: i(r.minWidth) ? r.minWidth: 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth: Infinity,
                minHeight: i(r.minHeight) ? r.minHeight: 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight: Infinity
            },
            (this._aspectRatio || n) && (u = t.minHeight * this.aspectRatio, e = t.minWidth / this.aspectRatio, f = t.maxHeight * this.aspectRatio, o = t.maxWidth / this.aspectRatio, u > t.minWidth && (t.minWidth = u), e > t.minHeight && (t.minHeight = e), f < t.maxWidth && (t.maxWidth = f), o < t.maxHeight && (t.maxHeight = o)),
            this._vBoundaries = t
        },
        _updateCache: function(n) {
            var t = this.options;
            this.offset = this.helper.offset(),
            i(n.left) && (this.position.left = n.left),
            i(n.top) && (this.position.top = n.top),
            i(n.height) && (this.size.height = n.height),
            i(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function(n) {
            var e = this.options,
            r = this.position,
            u = this.size,
            f = this.axis;
            return i(n.height) ? n.width = n.height * this.aspectRatio: i(n.width) && (n.height = n.width / this.aspectRatio),
            f == "sw" && (n.left = r.left + (u.width - n.width), n.top = null),
            f == "nw" && (n.top = r.top + (u.height - n.height), n.left = r.left + (u.width - n.width)),
            n
        },
        _respectSize: function(n, t) {
            var y = this.helper,
            r = this._vBoundaries,
            p = this._aspectRatio || t.shiftKey,
            f = this.axis,
            e = i(n.width) && r.maxWidth && r.maxWidth < n.width,
            o = i(n.height) && r.maxHeight && r.maxHeight < n.height,
            s = i(n.width) && r.minWidth && r.minWidth > n.width,
            h = i(n.height) && r.minHeight && r.minHeight > n.height,
            u;
            s && (n.width = r.minWidth),
            h && (n.height = r.minHeight),
            e && (n.width = r.maxWidth),
            o && (n.height = r.maxHeight);
            var c = this.originalPosition.left + this.originalSize.width,
            l = this.position.top + this.size.height,
            a = /sw|nw|w/.test(f),
            v = /nw|ne|n/.test(f);
            return s && a && (n.left = c - r.minWidth),
            e && a && (n.left = c - r.maxWidth),
            h && v && (n.top = l - r.minHeight),
            o && v && (n.top = l - r.maxHeight),
            u = !n.width && !n.height,
            u && !n.left && n.top ? n.top = null: u && !n.top && n.left && (n.left = null),
            n
        },
        _proportionallyResize: function() {
            var e = this.options,
            r, i, t, u, f;
            if (this._proportionallyResizeElements.length) for (r = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) t = this._proportionallyResizeElements[i],
            this.borderDif || (u = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], f = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")], this.borderDif = n.map(u,
            function(n, t) {
                var i = parseInt(n, 10) || 0,
                r = parseInt(f[t], 10) || 0;
                return i + r
            })),
            t.css({
                height: r.height() - this.borderDif[0] - this.borderDif[2] || 0,
                width: r.width() - this.borderDif[1] - this.borderDif[3] || 0
            })
        },
        _renderProxy: function() {
            var u = this.element,
            f = this.options;
            if (this.elementOffset = u.offset(), this._helper) {
                this.helper = this.helper || n('<div style="overflow:hidden;"><\/div>');
                var t = n.browser.msie && n.browser.version < 7,
                i = t ? 1 : 0,
                r = t ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + r,
                    height: this.element.outerHeight() + r,
                    position: "absolute",
                    left: this.elementOffset.left - i + "px",
                    top: this.elementOffset.top - i + "px",
                    zIndex: ++f.zIndex
                }),
                this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function(n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(n, t) {
                var f = this.options,
                r = this.originalSize,
                u = this.originalPosition;
                return {
                    left: u.left + t,
                    width: r.width - t
                }
            },
            n: function(n, t, i) {
                var f = this.options,
                r = this.originalSize,
                u = this.originalPosition;
                return {
                    top: u.top + i,
                    height: r.height - i
                }
            },
            s: function(n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function(t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]),
            t != "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var f = n(this).data("resizable"),
            r = f.options,
            u = function(t) {
                n(t).each(function() {
                    var t = n(this);
                    t.data("resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            typeof r.alsoResize == "object" && !r.alsoResize.parentNode ? r.alsoResize.length ? (r.alsoResize = r.alsoResize[0], u(r.alsoResize)) : n.each(r.alsoResize,
            function(n) {
                u(n)
            }) : u(r.alsoResize)
        },
        resize: function(t, i) {
            var r = n(this).data("resizable"),
            u = r.options,
            f = r.originalSize,
            e = r.originalPosition,
            s = {
                height: r.size.height - f.height || 0,
                width: r.size.width - f.width || 0,
                top: r.position.top - e.top || 0,
                left: r.position.left - e.left || 0
            },
            o = function(t, r) {
                n(t).each(function() {
                    var t = n(this),
                    f = n(this).data("resizable-alsoresize"),
                    u = {},
                    e = r && r.length ? r: t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    n.each(e,
                    function(n, t) {
                        var i = (f[t] || 0) + (s[t] || 0);
                        i && i >= 0 && (u[t] = i || null)
                    }),
                    t.css(u)
                })
            };
            typeof u.alsoResize == "object" && !u.alsoResize.nodeType ? n.each(u.alsoResize,
            function(n, t) {
                o(n, t)
            }) : o(u.alsoResize)
        },
        stop: function() {
            n(this).removeData("resizable-alsoresize")
        }
    }),
    n.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var r = n(this).data("resizable"),
            f = r.options,
            u = r._proportionallyResizeElements,
            e = u.length && /textarea/i.test(u[0].nodeName),
            h = e && n.ui.hasScroll(u[0], "left") ? 0 : r.sizeDiff.height,
            c = e ? 0 : r.sizeDiff.width,
            l = {
                width: r.size.width - c,
                height: r.size.height - h
            },
            o = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
            s = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
            r.element.animate(n.extend(l, s && o ? {
                top: s,
                left: o
            }: {}), {
                duration: f.animateDuration,
                easing: f.animateEasing,
                step: function() {
                    var i = {
                        width: parseInt(r.element.css("width"), 10),
                        height: parseInt(r.element.css("height"), 10),
                        top: parseInt(r.element.css("top"), 10),
                        left: parseInt(r.element.css("left"), 10)
                    };
                    u && u.length && n(u[0]).css({
                        width: i.width,
                        height: i.height
                    }),
                    r._updateCache(i),
                    r._propagate("resize", t)
                }
            })
        }
    }),
    n.ui.plugin.add("resizable", "containment", {
        start: function() {
            var u = n(this).data("resizable"),
            c = u.options,
            l = u.element,
            e = c.containment,
            f = e instanceof n ? e.get(0) : /parent/.test(e) ? l.parent().get(0) : e,
            o,
            s;
            if (f) if (u.containerElement = n(f), /document/.test(e) || e == document) u.containerOffset = {
                left: 0,
                top: 0
            },
            u.containerPosition = {
                left: 0,
                top: 0
            },
            u.parentData = {
                element: n(document),
                left: 0,
                top: 0,
                width: n(document).width(),
                height: n(document).height() || document.body.parentNode.scrollHeight
            };
            else {
                o = n(f),
                s = [],
                n(["Top", "Right", "Left", "Bottom"]).each(function(n, t) {
                    s[n] = r(o.css("padding" + t))
                }),
                u.containerOffset = o.offset(),
                u.containerPosition = o.position(),
                u.containerSize = {
                    height: o.innerHeight() - s[3],
                    width: o.innerWidth() - s[1]
                };
                var h = u.containerOffset,
                a = u.containerSize.height,
                v = u.containerSize.width,
                y = n.ui.hasScroll(f, "left") ? f.scrollWidth: v,
                p = n.ui.hasScroll(f) ? f.scrollHeight: a;
                u.parentData = {
                    element: f,
                    left: h.left,
                    top: h.top,
                    width: y,
                    height: p
                }
            }
        },
        resize: function(t) {
            var r = n(this).data("resizable"),
            l = r.options,
            y = r.containerSize,
            u = r.containerOffset,
            p = r.size,
            s = r.position,
            e = r._aspectRatio || t.shiftKey,
            f = {
                top: 0,
                left: 0
            },
            h = r.containerElement;
            h[0] != document && /static/.test(h.css("position")) && (f = u),
            s.left < (r._helper ? u.left: 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - u.left: r.position.left - f.left), e && (r.size.height = r.size.width / r.aspectRatio), r.position.left = l.helper ? u.left: 0),
            s.top < (r._helper ? u.top: 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - u.top: r.position.top), e && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? u.top: 0),
            r.offset.left = r.parentData.left + r.position.left,
            r.offset.top = r.parentData.top + r.position.top;
            var o = Math.abs((r._helper ? r.offset.left - f.left: r.offset.left - f.left) + r.sizeDiff.width),
            c = Math.abs((r._helper ? r.offset.top - f.top: r.offset.top - u.top) + r.sizeDiff.height),
            a = r.containerElement.get(0) == r.element.parent().get(0),
            v = /relative|absolute/.test(r.containerElement.css("position"));
            a && v && (o -= r.parentData.left),
            o + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - o, e && (r.size.height = r.size.width / r.aspectRatio)),
            c + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - c, e && (r.size.width = r.size.height * r.aspectRatio))
        },
        stop: function() {
            var r = n(this).data("resizable"),
            f = r.options,
            a = r.position,
            e = r.containerOffset,
            o = r.containerPosition,
            s = r.containerElement,
            u = n(r.helper),
            h = u.offset(),
            c = u.outerWidth() - r.sizeDiff.width,
            l = u.outerHeight() - r.sizeDiff.height;
            r._helper && !f.animate && /relative/.test(s.css("position")) && n(this).css({
                left: h.left - o.left - e.left,
                width: c,
                height: l
            }),
            r._helper && !f.animate && /static/.test(s.css("position")) && n(this).css({
                left: h.left - o.left - e.left,
                width: c,
                height: l
            })
        }
    }),
    n.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var r = n(this).data("resizable"),
            u = r.options,
            f = r.size;
            r.ghost = r.originalElement.clone(),
            r.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: f.height,
                width: f.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof u.ghost == "string" ? u.ghost: ""),
            r.ghost.appendTo(r.helper)
        },
        resize: function() {
            var r = n(this).data("resizable"),
            u = r.options;
            r.ghost && r.ghost.css({
                position: "relative",
                height: r.size.height,
                width: r.size.width
            })
        },
        stop: function() {
            var r = n(this).data("resizable"),
            u = r.options;
            r.ghost && r.helper && r.helper.get(0).removeChild(r.ghost.get(0))
        }
    }),
    n.ui.plugin.add("resizable", "grid", {
        resize: function(t) {
            var r = n(this).data("resizable"),
            u = r.options,
            c = r.size,
            f = r.originalSize,
            s = r.originalPosition,
            h = r.axis,
            l = u._aspectRatio || t.shiftKey,
            e,
            o;
            u.grid = typeof u.grid == "number" ? [u.grid, u.grid] : u.grid,
            e = Math.round((c.width - f.width) / (u.grid[0] || 1)) * (u.grid[0] || 1),
            o = Math.round((c.height - f.height) / (u.grid[1] || 1)) * (u.grid[1] || 1),
            /^(se|s|e)$/.test(h) ? (r.size.width = f.width + e, r.size.height = f.height + o) : /^(ne)$/.test(h) ? (r.size.width = f.width + e, r.size.height = f.height + o, r.position.top = s.top - o) : /^(sw)$/.test(h) ? (r.size.width = f.width + e, r.size.height = f.height + o, r.position.left = s.left - e) : (r.size.width = f.width + e, r.size.height = f.height + o, r.position.top = s.top - o, r.position.left = s.left - e)
        }
    });
    var r = function(n) {
        return parseInt(n, 10) || 0
    },
    i = function(n) {
        return ! isNaN(parseInt(n, 10))
    }
} (jQuery),
function(n) {
    n.widget("ui.selectable", n.ui.mouse, {
        version: "1.9.0",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var i = this,
            t;
            this.element.addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                t = n(i.options.filter, i.element[0]),
                t.addClass("ui-selectee"),
                t.each(function() {
                    var t = n(this),
                    i = t.offset();
                    n.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            },
            this.refresh(),
            this.selectees = t.addClass("ui-selectee"),
            this._mouseInit(),
            this.helper = n("<div class='ui-selectable-helper'><\/div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled"),
            this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var r = this,
            i;
            (this.opos = [t.pageX, t.pageY], this.options.disabled) || (i = this.options, this.selectees = n(i.filter, this.element[0]), this._trigger("start", t), n(i.appendTo).append(this.helper), this.helper.css({
                left: t.clientX,
                top: t.clientY,
                width: 0,
                height: 0
            }), i.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var i = n.data(this, "selectable-item");
                i.startselected = !0,
                t.metaKey || t.ctrlKey || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, r._trigger("unselecting", t, {
                    unselecting: i.element
                }))
            }), n(t.target).parents().andSelf().each(function() {
                var i = n.data(this, "selectable-item"),
                u;
                if (i) return u = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected"),
                i.$element.removeClass(u ? "ui-unselecting": "ui-selected").addClass(u ? "ui-selecting": "ui-unselecting"),
                i.unselecting = !u,
                i.selecting = u,
                i.selected = u,
                u ? r._trigger("selecting", t, {
                    selecting: i.element
                }) : r._trigger("unselecting", t, {
                    unselecting: i.element
                }),
                !1
            }))
        },
        _mouseDrag: function(t) {
            var e = this,
            o;
            if (this.dragged = !0, !this.options.disabled) {
                var s = this.options,
                i = this.opos[0],
                r = this.opos[1],
                u = t.pageX,
                f = t.pageY;
                return i > u && (o = u, u = i, i = o),
                r > f && (o = f, f = r, r = o),
                this.helper.css({
                    left: i,
                    top: r,
                    width: u - i,
                    height: f - r
                }),
                this.selectees.each(function() {
                    var o = n.data(this, "selectable-item"),
                    h;
                    o && o.element != e.element[0] && (h = !1, s.tolerance == "touch" ? h = !(o.left > u || o.right < i || o.top > f || o.bottom < r) : s.tolerance == "fit" && (h = o.left > i && o.right < u && o.top > r && o.bottom < f), h ? (o.selected && (o.$element.removeClass("ui-selected"), o.selected = !1), o.unselecting && (o.$element.removeClass("ui-unselecting"), o.unselecting = !1), o.selecting || (o.$element.addClass("ui-selecting"), o.selecting = !0, e._trigger("selecting", t, {
                        selecting: o.element
                    }))) : (o.selecting && ((t.metaKey || t.ctrlKey) && o.startselected ? (o.$element.removeClass("ui-selecting"), o.selecting = !1, o.$element.addClass("ui-selected"), o.selected = !0) : (o.$element.removeClass("ui-selecting"), o.selecting = !1, o.startselected && (o.$element.addClass("ui-unselecting"), o.unselecting = !0), e._trigger("unselecting", t, {
                        unselecting: o.element
                    }))), o.selected && !t.metaKey && !t.ctrlKey && !o.startselected && (o.$element.removeClass("ui-selected"), o.selected = !1, o.$element.addClass("ui-unselecting"), o.unselecting = !0, e._trigger("unselecting", t, {
                        unselecting: o.element
                    }))))
                }),
                !1
            }
        },
        _mouseStop: function(t) {
            var i = this,
            r;
            return this.dragged = !1,
            r = this.options,
            n(".ui-unselecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting"),
                r.unselecting = !1,
                r.startselected = !1,
                i._trigger("unselected", t, {
                    unselected: r.element
                })
            }),
            n(".ui-selecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected"),
                r.selecting = !1,
                r.selected = !0,
                r.startselected = !0,
                i._trigger("selected", t, {
                    selected: r.element
                })
            }),
            this._trigger("stop", t),
            this.helper.remove(),
            !1
        }
    })
} (jQuery),
function(n) {
    n.widget("ui.sortable", n.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var n = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = this.items.length ? n.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1,
            this.offset = this.element.offset(),
            this._mouseInit(),
            this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"),
            this._mouseDestroy();
            for (var n = this.items.length - 1; n >= 0; n--) this.items[n].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, i) {
            t === "disabled" ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : n.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, i) {
            var u = this,
            r, e, f;
            return this.reverting ? !1 : this.options.disabled || this.options.type == "static" ? !1 : (this._refreshItems(t), r = null, e = n(t.target).parents().each(function() {
                if (n.data(this, u.widgetName + "-item") == u) return r = n(this),
                !1
            }), n.data(t.target, u.widgetName + "-item") == u && (r = n(t.target)), !r) ? !1 : this.options.handle && !i && (f = !1, n(this.options.handle, r).find("*").andSelf().each(function() {
                this == t.target && (f = !0)
            }), !f) ? !1 : (this.currentItem = r, this._removeCurrentsFromItems(), !0)
        },
        _mouseStart: function(t, i, r) {
            var u = this.options,
            f;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && (n("body").css("cursor") && (this._storedCursor = n("body").css("cursor")), n("body").css("cursor", u.cursor)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r) for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", t, this._uiHash(this));
            return n.ui.ddmanager && (n.ui.ddmanager.current = this),
            n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            var i, r, f;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (i = this.options, r = !1, this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed: t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed: t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)), t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && this.options.axis == "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis == "x" || (this.helper[0].style.top = this.position.top + "px"), f = this.items.length - 1; f >= 0; f--) {
                var u = this.items[f],
                e = u.item[0],
                o = this._intersectsWithPointer(u);
                if (o && u.instance === this.currentContainer && e != this.currentItem[0] && this.placeholder[o == 1 ? "next": "prev"]()[0] != e && !n.contains(this.placeholder[0], e) && (this.options.type == "semi-dynamic" ? !n.contains(this.element[0], e) : !0)) {
                    if (this.direction = o == 1 ? "down": "up", this.options.tolerance != "pointer" && !this._intersectsWithSides(u)) break;
                    this._rearrange(t, u),
                    this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t),
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
                    var u = this,
                    r = this.placeholder.offset();
                    this.reverting = !0,
                    n(this.helper).animate({
                        left: r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    },
                    parseInt(this.options.revert, 10) || 500,
                    function() {
                        u._clear(t)
                    })
                } else this._clear(t, i);
                return ! 1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected),
            i = [];
            return t = t || {},
            n(r).each(function() {
                var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
            }),
            !i.length && t.key && i.push(t.key + "="),
            i.join("&")
        },
        toArray: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected),
            i = [];
            return t = t || {},
            r.each(function() {
                i.push(n(t.item || this).attr(t.attribute || "id") || "")
            }),
            i
        },
        _intersectsWith: function(n) {
            var t = this.positionAbs.left,
            h = t + this.helperProportions.width,
            i = this.positionAbs.top,
            c = i + this.helperProportions.height,
            r = n.left,
            f = r + n.width,
            u = n.top,
            e = u + n.height,
            o = this.offset.click.top,
            s = this.offset.click.left,
            l = i + o > u && i + o < e && t + s > r && t + s < f;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width": "height"] > n[this.floating ? "width": "height"] ? l: r < t + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < f && u < i + this.helperProportions.height / 2 && c - this.helperProportions.height / 2 < e
        },
        _intersectsWithPointer: function(t) {
            var u = this.options.axis === "x" || n.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
            f = this.options.axis === "y" || n.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
            e = u && f,
            i = this._getDragVerticalDirection(),
            r = this._getDragHorizontalDirection();
            return e ? this.floating ? r && r == "right" || i == "down" ? 2 : 1 : i && (i == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var u = n.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
            f = n.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
            i = this._getDragVerticalDirection(),
            r = this._getDragHorizontalDirection();
            return this.floating && r ? r == "right" && f || r == "left" && !f: i && (i == "down" && u || i == "up" && !u)
        },
        _getDragVerticalDirection: function() {
            var n = this.positionAbs.top - this.lastPositionAbs.top;
            return n != 0 && (n > 0 ? "down": "up")
        },
        _getDragHorizontalDirection: function() {
            var n = this.positionAbs.left - this.lastPositionAbs.left;
            return n != 0 && (n > 0 ? "right": "left")
        },
        refresh: function(n) {
            return this._refreshItems(n),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var n = this.options;
            return n.connectWith.constructor == String ? [n.connectWith] : n.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var s = [],
            u = [],
            e = this._connectWith(),
            o,
            f,
            i,
            r;
            if (e && t) for (r = e.length - 1; r >= 0; r--) for (o = n(e[r]), f = o.length - 1; f >= 0; f--) i = n.data(o[f], this.widgetName),
            i && i != this && !i.options.disabled && u.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
            for (u.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = u.length - 1; r >= 0; r--) u[r][0].each(function() {
                s.push(this)
            });
            return n(s)
        },
        _removeCurrentsFromItems: function() {
            for (var i = this.currentItem.find(":data(" + this.widgetName + "-item)"), t, n = 0; n < this.items.length; n++) for (t = 0; t < i.length; t++) i[t] == this.items[n].item[0] && this.items.splice(n, 1)
        },
        _refreshItems: function(t) {
            var o, i, r, s, h, u, l, c;
            this.items = [],
            this.containers = [this];
            var a = this.items,
            f = [[n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : n(this.options.items, this.element), this]],
            e = this._connectWith();
            if (e && this.ready) for (r = e.length - 1; r >= 0; r--) for (o = n(e[r]), u = o.length - 1; u >= 0; u--) i = n.data(o[u], this.widgetName),
            i && i != this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                item: this.currentItem
            }) : n(i.options.items, i.element), i]), this.containers.push(i));
            for (r = f.length - 1; r >= 0; r--) for (s = f[r][1], h = f[r][0], u = 0, l = h.length; u < l; u++) c = n(h[u]),
            c.data(this.widgetName + "-item", s),
            a.push({
                item: c,
                instance: s,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function(t) {
            var r, f, i, u;
            for (this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--)(r = this.items[i], r.instance != this.currentContainer && this.currentContainer && r.item[0] != this.currentItem[0]) || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (i = this.containers.length - 1; i >= 0; i--) u = this.containers[i].element.offset(),
            this.containers[i].containerCache.left = u.left,
            this.containers[i].containerCache.top = u.top,
            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            var i, r;
            t = t || this,
            i = t.options,
            i.placeholder && i.placeholder.constructor != String || (r = i.placeholder, i.placeholder = {
                element: function() {
                    var i = n(document.createElement(t.currentItem[0].nodeName)).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                    return r || (i.style.visibility = "hidden"),
                    i
                },
                update: function(n, u) { (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem)),
            t.currentItem.after(t.placeholder),
            i.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(t) {
            for (var f = null, i = null, u, o, r = this.containers.length - 1; r >= 0; r--) if (!n.contains(this.currentItem[0], this.containers[r].element[0])) if (this._intersectsWith(this.containers[r].containerCache)) {
                if (f && n.contains(this.containers[r].element[0], f.element[0])) continue;
                f = this.containers[r],
                i = r
            } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
            if (f) if (this.containers.length === 1) this.containers[i]._trigger("over", t, this._uiHash(this)),
            this.containers[i].containerCache.over = 1;
            else if (this.currentContainer != this.containers[i]) {
                var h = 1e4,
                e = null,
                s = this.positionAbs[this.containers[i].floating ? "left": "top"];
                for (u = this.items.length - 1; u >= 0; u--) n.contains(this.containers[i].element[0], this.items[u].item[0]) && (o = this.containers[i].floating ? this.items[u].item.offset().left: this.items[u].item.offset().top, Math.abs(o - s) < h && (h = Math.abs(o - s), e = this.items[u], this.direction = o - s > 0 ? "down": "up"));
                if (!e && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[i],
                e ? this._rearrange(t, e, null, !0) : this._rearrange(t, null, this.containers[i].element, !0),
                this._trigger("change", t, this._uiHash()),
                this.containers[i]._trigger("change", t, this._uiHash(this)),
                this.options.placeholder.update(this.currentContainer, this.placeholder),
                this.containers[i]._trigger("over", t, this._uiHash(this)),
                this.containers[i].containerCache.over = 1
            }
        },
        _createHelper: function(t) {
            var r = this.options,
            i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || n(r.appendTo != "parent" ? r.appendTo: this.currentItem[0].parentNode)[0].appendChild(i[0]),
            i[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (i[0].style.width == "" || r.forceHelperSize) && i.width(this.currentItem.width()),
            (i[0].style.height == "" || r.forceHelperSize) && i.height(this.currentItem.height()),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")),
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left" in t && (this.offset.click.left = t.left + this.margins.left),
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top" in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition == "absolute" && this.scrollParent[0] != document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && n.browser.msie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var n = this.currentItem.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var i = this.options;
            if (i.containment == "parent" && (i.containment = this.helper[0].parentNode), (i.containment == "document" || i.containment == "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n(i.containment == "document" ? document: window).width() - this.helperProportions.width - this.margins.left, (n(i.containment == "document" ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(i.containment)) {
                var t = n(i.containment)[0],
                r = n(i.containment).offset(),
                u = n(t).css("overflow") != "hidden";
                this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t == "absolute" ? 1 : -1,
            e = this.options,
            u = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var i = this.options,
            o = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent: this.offsetParent,
            s = /(html|body)/i.test(o[0].tagName),
            f,
            e,
            r,
            u;
            return this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()),
            f = t.pageX,
            e = t.pageY,
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top < this.containment[1] || r - this.offset.click.top > this.containment[3] ? r - this.offset.click.top < this.containment[1] ? r + i.grid[1] : r - i.grid[1] : r: r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left < this.containment[0] || u - this.offset.click.left > this.containment[2] ? u - this.offset.click.left < this.containment[0] ? u + i.grid[0] : u - i.grid[0] : u: u)),
            {
                top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(n, t, i, r) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter: 1;
            var u = this.counter;
            this._delay(function() {
                u == this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function(t, i) {
            var u, r;
            if (this.reverting = !1, u = [], !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (r in this._storedCSS)(this._storedCSS[r] == "auto" || this._storedCSS[r] == "static") && (this._storedCSS[r] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !i && u.push(function(n) {
                this._trigger("receive", n, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !i && u.push(function(n) {
                this._trigger("update", n, this._uiHash())
            }), this !== this.currentContainer && (i || (u.push(function(n) {
                this._trigger("remove", n, this._uiHash())
            }), u.push(function(n) {
                return function(t) {
                    n._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), u.push(function(n) {
                return function(t) {
                    n._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), r = this.containers.length - 1; r >= 0; r--) i || u.push(function(n) {
                return function(t) {
                    n._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[r])),
            this.containers[r].containerCache.over && (u.push(function(n) {
                return function(t) {
                    n._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[r])), this.containers[r].containerCache.over = 0);
            if (this._storedCursor && n("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "": this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    for (this._trigger("beforeStop", t, this._uiHash()), r = 0; r < u.length; r++) u[r].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (i || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                for (r = 0; r < u.length; r++) u[r].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || n([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element: null
            }
        }
    })
} (jQuery),
jQuery.effects ||
function(n, t) {
    var i = n.uiBackCompat !== !1,
    r = "ui-effects-";
    n.effects = {
        effect: {}
    },
    function(t, i) {
        function e(n, t, i) {
            var r = c[t.type] || {};
            return n == null ? i || !t.def ? null: t.def: (n = r.floor ? ~~n: parseFloat(n), isNaN(n) ? t.def: r.mod ? (n + r.mod) % r.mod: 0 > n ? 0 : r.max < n ? r.max: n)
        }
        function h(n) {
            var i = r(),
            e = i._rgba = [];
            return n = n.toLowerCase(),
            u(p,
            function(t, r) {
                var u, s = r.re.exec(n),
                h = s && r.parse(s),
                o = r.space || "rgba";
                if (h) return u = i[o](h),
                i[f[o].cache] = u[f[o].cache],
                e = i._rgba = u._rgba,
                !1
            }),
            e.length ? (e.join() === "0,0,0,0" && t.extend(e, o.transparent), i) : o[n]
        }
        function s(n, t, i) {
            return i = (i + 1) % 1,
            i * 6 < 1 ? n + (t - n) * i * 6 : i * 2 < 1 ? t: i * 3 < 2 ? n + (t - n) * (2 / 3 - i) * 6 : n
        }
        var v = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
        y = /^([\-+])=\s*(\d+\.?\d*)/,
        p = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(n) {
                return [n[1], n[2], n[3], n[4]]
            }
        },
        {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(n) {
                return [n[1] * 2.55, n[2] * 2.55, n[3] * 2.55, n[4]]
            }
        },
        {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(n) {
                return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
            }
        },
        {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(n) {
                return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
            }
        },
        {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(n) {
                return [n[1], n[2] / 100, n[3] / 100, n[4]]
            }
        }],
        r = t.Color = function(n, i, r, u) {
            return new t.Color.fn.parse(n, i, r, u)
        },
        f = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        c = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        },
        l = r.support = {},
        a = t("<p>")[0],
        o,
        u = t.each;
        a.style.cssText = "background-color:rgba(1,1,1,.5)",
        l.rgba = a.style.backgroundColor.indexOf("rgba") > -1,
        u(f,
        function(n, t) {
            t.cache = "_" + n,
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        r.fn = t.extend(r.prototype, {
            parse: function(s, c, l, a) {
                if (s === i) return this._rgba = [null, null, null, null],
                this;
                (s.jquery || s.nodeType) && (s = t(s).css(c), c = i);
                var v = this,
                y = t.type(s),
                p = this._rgba = [],
                w;
                return (c !== i && (s = [s, c, l, a], y = "array"), y === "string") ? this.parse(h(s) || o._default) : y === "array" ? (u(f.rgba.props,
                function(n, t) {
                    p[t.idx] = e(s[t.idx], t)
                }), this) : y === "object" ? (s instanceof r ? u(f,
                function(n, t) {
                    s[t.cache] && (v[t.cache] = s[t.cache].slice())
                }) : u(f,
                function(t, i) {
                    var r = i.cache;
                    u(i.props,
                    function(n, t) {
                        if (!v[r] && i.to) {
                            if (n === "alpha" || s[n] == null) return;
                            v[r] = i.to(v._rgba)
                        }
                        v[r][t.idx] = e(s[n], t, !0)
                    }),
                    v[r] && n.inArray(null, v[r].slice(0, 3)) < 0 && (v[r][3] = 1, i.from && (v._rgba = i.from(v[r])))
                }), this) : void 0
            },
            is: function(n) {
                var e = r(n),
                t = !0,
                i = this;
                return u(f,
                function(n, r) {
                    var o, f = e[r.cache];
                    return f && (o = i[r.cache] || r.to && r.to(i._rgba) || [], u(r.props,
                    function(n, i) {
                        if (f[i.idx] != null) return t = f[i.idx] === o[i.idx],
                        t
                    })),
                    t
                }),
                t
            },
            _space: function() {
                var n = [],
                t = this;
                return u(f,
                function(i, r) {
                    t[r.cache] && n.push(i)
                }),
                n.pop()
            },
            transition: function(n, t) {
                var i = r(n),
                h = i._space(),
                o = f[h],
                l = this.alpha() === 0 ? r("transparent") : this,
                a = l[o.cache] || o.to(l._rgba),
                s = a.slice();
                return i = i[o.cache],
                u(o.props,
                function(n, r) {
                    var h = r.idx,
                    u = a[h],
                    f = i[h],
                    o = c[r.type] || {};
                    f !== null && (u === null ? s[h] = f: (o.mod && (f - u > o.mod / 2 ? u += o.mod: u - f > o.mod / 2 && (u -= o.mod)), s[h] = e((f - u) * t + u, r)))
                }),
                this[h](s)
            },
            blend: function(n) {
                if (this._rgba[3] === 1) return this;
                var i = this._rgba.slice(),
                u = i.pop(),
                f = r(n)._rgba;
                return r(t.map(i,
                function(n, t) {
                    return (1 - u) * f[t] + u * n
                }))
            },
            toRgbaString: function() {
                var i = "rgba(",
                n = t.map(this._rgba,
                function(n, t) {
                    return n == null ? t > 2 ? 1 : 0 : n
                });
                return n[3] === 1 && (n.pop(), i = "rgb("),
                i + n.join() + ")"
            },
            toHslaString: function() {
                var i = "hsla(",
                n = t.map(this.hsla(),
                function(n, t) {
                    return n == null && (n = t > 2 ? 1 : 0),
                    t && t < 3 && (n = Math.round(n * 100) + "%"),
                    n
                });
                return n[3] === 1 && (n.pop(), i = "hsl("),
                i + n.join() + ")"
            },
            toHexString: function(n) {
                var i = this._rgba.slice(),
                r = i.pop();
                return n && i.push(~~ (r * 255)),
                "#" + t.map(i,
                function(n) {
                    return n = (n || 0).toString(16),
                    n.length === 1 ? "0" + n: n
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent": this.toRgbaString()
            }
        }),
        r.fn.parse.prototype = r.fn,
        f.hsla.to = function(n) {
            if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
            var t = n[0] / 255,
            i = n[1] / 255,
            o = n[2] / 255,
            l = n[3],
            r = Math.max(t, i, o),
            h = Math.min(t, i, o),
            u = r - h,
            c = r + h,
            f = c * .5,
            e,
            s;
            return e = h === r ? 0 : t === r ? 60 * (i - o) / u + 360 : i === r ? 60 * (o - t) / u + 120 : 60 * (t - i) / u + 240,
            s = f === 0 || f === 1 ? f: f <= .5 ? u / c: u / (2 - c),
            [Math.round(e) % 360, s, f, l == null ? 1 : l]
        },
        f.hsla.from = function(n) {
            if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
            var r = n[0] / 360,
            u = n[1],
            t = n[2],
            e = n[3],
            i = t <= .5 ? t * (1 + u) : t + u - t * u,
            f = 2 * t - i,
            o,
            h,
            c;
            return [Math.round(s(f, i, r + 1 / 3) * 255), Math.round(s(f, i, r) * 255), Math.round(s(f, i, r - 1 / 3) * 255), e]
        },
        u(f,
        function(n, f) {
            var s = f.props,
            o = f.cache,
            h = f.to,
            c = f.from;
            r.fn[n] = function(n) {
                if (h && !this[o] && (this[o] = h(this._rgba)), n === i) return this[o].slice();
                var l, a = t.type(n),
                v = a === "array" || a === "object" ? n: arguments,
                f = this[o].slice();
                return u(s,
                function(n, t) {
                    var i = v[a === "object" ? n: t.idx];
                    i == null && (i = f[t.idx]),
                    f[t.idx] = e(i, t)
                }),
                c ? (l = r(c(f)), l[o] = f, l) : r(f)
            },
            u(s,
            function(i, u) {
                r.fn[i] || (r.fn[i] = function(r) {
                    var f = t.type(r),
                    h = i === "alpha" ? this._hsla ? "hsla": "rgba": n,
                    o = this[h](),
                    s = o[u.idx],
                    e;
                    return f === "undefined" ? s: (f === "function" && (r = r.call(this, s), f = t.type(r)), r == null && u.empty ? this: (f === "string" && (e = y.exec(r), e && (r = s + parseFloat(e[2]) * (e[1] === "+" ? 1 : -1))), o[u.idx] = r, this[h](o)))
                })
            })
        }),
        u(v,
        function(n, i) {
            t.cssHooks[i] = {
                set: function(n, u) {
                    var o, f, e = "";
                    if (t.type(u) !== "string" || (o = h(u))) {
                        if (u = r(o || u), !l.rgba && u._rgba[3] !== 1) {
                            for (f = i === "backgroundColor" ? n.parentNode: n;
                            (e === "" || e === "transparent") && f && f.style;) try {
                                e = t.css(f, "backgroundColor"),
                                f = f.parentNode
                            } catch(s) {}
                            u = u.blend(e && e !== "transparent" ? e: "_default")
                        }
                        u = u.toRgbaString()
                    }
                    try {
                        n.style[i] = u
                    } catch(u) {}
                }
            },
            t.fx.step[i] = function(n) {
                n.colorInit || (n.start = r(n.elem, i), n.end = r(n.end), n.colorInit = !0),
                t.cssHooks[i].set(n.elem, n.start.transition(n.end, n.pos))
            }
        }),
        t.cssHooks.borderColor = {
            expand: function(n) {
                var t = {};
                return u(["Top", "Right", "Bottom", "Left"],
                function(i, r) {
                    t["border" + r + "Color"] = n
                }),
                t
            }
        },
        o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    } (jQuery),
    function() {
        function i() {
            var t = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
            r = {},
            i,
            f,
            u;
            if (t && t.length && t[0] && t[t[0]]) for (u = t.length; u--;) i = t[u],
            typeof t[i] == "string" && (r[n.camelCase(i)] = t[i]);
            else for (i in t) typeof t[i] == "string" && (r[i] = t[i]);
            return r
        }
        function r(t, i) {
            var e = {},
            r, u;
            for (r in i) u = i[r],
            t[r] === u || f[r] || !n.fx.step[r] && isNaN(parseFloat(u)) || (e[r] = u);
            return e
        }
        var u = ["add", "remove", "toggle"],
        f = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"],
        function(t, i) {
            n.fx.step[i] = function(n) { (n.end === "none" || n.setAttr) && (n.pos !== 1 || n.setAttr) || (jQuery.style(n.elem, i, n.end), n.setAttr = !0)
            }
        }),
        n.effects.animateClass = function(t, f, e, o) {
            var s = n.speed(f, e, o);
            return this.queue(function() {
                var e = n(this),
                h = e.attr("class") || "",
                o,
                f = s.children ? e.find("*").andSelf() : e;
                f = f.map(function() {
                    var t = n(this);
                    return {
                        el: t,
                        start: i.call(this)
                    }
                }),
                o = function() {
                    n.each(u,
                    function(n, i) {
                        t[i] && e[i + "Class"](t[i])
                    })
                },
                o(),
                f = f.map(function() {
                    return this.end = i.call(this.el[0]),
                    this.diff = r(this.start, this.end),
                    this
                }),
                e.attr("class", h),
                f = f.map(function() {
                    var i = this,
                    t = n.Deferred(),
                    r = jQuery.extend({},
                    s, {
                        queue: !1,
                        complete: function() {
                            t.resolve(i)
                        }
                    });
                    return this.el.animate(this.diff, r),
                    t.promise()
                }),
                n.when.apply(n, f.get()).done(function() {
                    o(),
                    n.each(arguments,
                    function() {
                        var t = this.el;
                        n.each(this.diff,
                        function(n) {
                            t.css(n, "")
                        })
                    }),
                    s.complete.call(e[0])
                })
            })
        },
        n.fn.extend({
            _addClass: n.fn.addClass,
            addClass: function(t, i, r, u) {
                return i ? n.effects.animateClass.call(this, {
                    add: t
                },
                i, r, u) : this._addClass(t)
            },
            _removeClass: n.fn.removeClass,
            removeClass: function(t, i, r, u) {
                return i ? n.effects.animateClass.call(this, {
                    remove: t
                },
                i, r, u) : this._removeClass(t)
            },
            _toggleClass: n.fn.toggleClass,
            toggleClass: function(i, r, u, f, e) {
                return typeof r == "boolean" || r === t ? u ? n.effects.animateClass.call(this, r ? {
                    add: i
                }: {
                    remove: i
                },
                u, f, e) : this._toggleClass(i, r) : n.effects.animateClass.call(this, {
                    toggle: i
                },
                r, u, f)
            },
            switchClass: function(t, i, r, u, f) {
                return n.effects.animateClass.call(this, {
                    add: i,
                    remove: t
                },
                r, u, f)
            }
        })
    } (),
    function() {
        function u(i, r, u, f) {
            return n.isPlainObject(i) && (r = i, i = i.effect),
            i = {
                effect: i
            },
            r === t && (r = {}),
            n.isFunction(r) && (f = r, u = null, r = {}),
            (typeof r == "number" || n.fx.speeds[r]) && (f = u, u = r, r = {}),
            n.isFunction(u) && (f = u, u = null),
            r && n.extend(i, r),
            u = u || r.duration,
            i.duration = n.fx.off ? 0 : typeof u == "number" ? u: u in n.fx.speeds ? n.fx.speeds[u] : n.fx.speeds._default,
            i.complete = f || r.complete,
            i
        }
        function f(t) {
            return ! t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects.effect[t] ? i && n.effects[t] ? !1 : !0 : !1
        }
        n.extend(n.effects, {
            version: "1.9.0",
            save: function(n, t) {
                for (var i = 0; i < t.length; i++) t[i] !== null && n.data(r + t[i], n[0].style[t[i]])
            },
            restore: function(n, i) {
                for (var f, u = 0; u < i.length; u++) i[u] !== null && (f = n.data(r + i[u]), f === t && (f = ""), n.css(i[u], f))
            },
            setMode: function(n, t) {
                return t === "toggle" && (t = n.is(":hidden") ? "show": "hide"),
                t
            },
            getBaseline: function(n, t) {
                var i, r;
                switch (n[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = n[0] / t.height
                }
                switch (n[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default:
                    r = n[1] / t.width
                }
                return {
                    x: r,
                    y: i
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var i = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    float: t.css("float")
                },
                u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }),
                f = {
                    width: t.width(),
                    height: t.height()
                },
                r = document.activeElement;
                try {
                    r.id
                } catch(e) {
                    r = document.body
                }
                return t.wrap(u),
                (t[0] === r || n.contains(t[0], r)) && n(r).focus(),
                u = t.parent(),
                t.css("position") === "static" ? (u.css({
                    position: "relative"
                }), t.css({
                    position: "relative"
                })) : (n.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), n.each(["top", "left", "bottom", "right"],
                function(n, r) {
                    i[r] = t.css(r),
                    isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                t.css(f),
                u.css(i).show()
            },
            removeWrapper: function(t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus()),
                t
            },
            setTransition: function(t, i, r, u) {
                return u = u || {},
                n.each(i,
                function(n, i) {
                    var f = t.cssUnit(i);
                    f[0] > 0 && (u[i] = f[0] * r + f[1])
                }),
                u
            }
        }),
        n.fn.extend({
            effect: function() {
                function h(t) {
                    function r() {
                        n.isFunction(u) && u.call(i[0]),
                        n.isFunction(t) && t()
                    }
                    var i = n(this),
                    u = o.complete,
                    f = o.mode;
                    (i.is(":hidden") ? f === "hide": f === "show") ? r() : s.call(i[0], o, r)
                }
                var o = u.apply(this, arguments),
                c = o.mode,
                l = o.queue,
                s = n.effects.effect[o.effect],
                a = !s && i && n.effects[o.effect];
                return n.fx.off || !s && !a ? c ? this[c](o.duration, o.complete) : this.each(function() {
                    o.complete && o.complete.call(this)
                }) : s ? l === !1 ? this.each(h) : this.queue(l || "fx", h) : a.call(this, {
                    options: o,
                    duration: o.duration,
                    callback: o.complete,
                    mode: o.mode
                })
            },
            _show: n.fn.show,
            show: function(n) {
                if (f(n)) return this._show.apply(this, arguments);
                var t = u.apply(this, arguments);
                return t.mode = "show",
                this.effect.call(this, t)
            },
            _hide: n.fn.hide,
            hide: function(n) {
                if (f(n)) return this._hide.apply(this, arguments);
                var t = u.apply(this, arguments);
                return t.mode = "hide",
                this.effect.call(this, t)
            },
            __toggle: n.fn.toggle,
            toggle: function(t) {
                if (f(t) || typeof t == "boolean" || n.isFunction(t)) return this.__toggle.apply(this, arguments);
                var i = u.apply(this, arguments);
                return i.mode = "toggle",
                this.effect.call(this, i)
            },
            cssUnit: function(t) {
                var i = this.css(t),
                r = [];
                return n.each(["em", "px", "%", "pt"],
                function(n, t) {
                    i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                }),
                r
            }
        })
    } (),
    function() {
        var t = {};
        n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"],
        function(n, i) {
            t[i] = function(t) {
                return Math.pow(t, n + 2)
            }
        }),
        n.extend(t, {
            Sine: function(n) {
                return 1 - Math.cos(n * Math.PI / 2)
            },
            Circ: function(n) {
                return 1 - Math.sqrt(1 - n * n)
            },
            Elastic: function(n) {
                return n === 0 || n === 1 ? n: -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(n) {
                return n * n * (3 * n - 2)
            },
            Bounce: function(n) {
                for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
            }
        }),
        n.each(t,
        function(t, i) {
            n.easing["easeIn" + t] = i,
            n.easing["easeOut" + t] = function(n) {
                return 1 - i(1 - n)
            },
            n.easing["easeInOut" + t] = function(n) {
                return n < .5 ? i(n * 2) / 2 : 1 - i(n * -2 + 2) / 2
            }
        })
    } ()
} (jQuery),
function(n) {
    var u = 0,
    i = {},
    r = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide",
    r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "show",
    n.widget("ui.accordion", {
        version: "1.9.0",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var i = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++u),
            t = this.options;
            this.prevShow = this.prevHide = n(),
            this.element.addClass("ui-accordion ui-widget ui-helper-reset"),
            this.headers = this.element.find(t.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),
            this._hoverable(this.headers),
            this._focusable(this.headers),
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),
            !t.collapsible && t.active === !1 && (t.active = 0),
            t.active < 0 && (t.active += this.headers.length),
            this.active = this._findActive(t.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),
            this.active.next().addClass("ui-accordion-content-active").show(),
            this._createIcons(),
            this.originalHeight = this.element[0].style.height,
            this.refresh(),
            this.element.attr("role", "tablist"),
            this.headers.attr("role", "tab").each(function(t) {
                var r = n(this),
                u = r.attr("id"),
                e = r.next(),
                f = e.attr("id");
                u || (u = i + "-header-" + t, r.attr("id", u)),
                f || (f = i + "-panel-" + t, e.attr("id", f)),
                r.attr("aria-controls", f),
                e.attr("aria-labelledby", u)
            }).next().attr("role", "tabpanel"),
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(),
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0),
            this._on(this.headers, {
                keydown: "_keydown"
            }),
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }),
            this._setupEvents(t.event)
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                content: this.active.length ? this.active.next() : n()
            }
        },
        _createIcons: function() {
            var t = this.options.icons;
            t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var n;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() { / ^ui - accordion / .test(this.id) && this.removeAttribute("id")
            }),
            this._destroyIcons(),
            n = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() { / ^ui - accordion / .test(this.id) && this.removeAttribute("id")
            }),
            this.options.heightStyle !== "content" && (this.element.css("height", this.originalHeight), n.css("height", ""))
        },
        _setOption: function(n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            n === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)),
            this._super(n, t),
            n === "collapsible" && !t && this.options.active === !1 && this._activate(0),
            n === "icons" && (this._destroyIcons(), t && this._createIcons()),
            n === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = n.ui.keyCode,
                u = this.headers.length,
                f = this.headers.index(t.target),
                r = !1;
                switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    r = this.headers[(f + 1) % u];
                    break;
                case i.LEFT:
                case i.UP:
                    r = this.headers[(f - 1 + u) % u];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(t);
                    break;
                case i.HOME:
                    r = this.headers[0];
                    break;
                case i.END:
                    r = this.headers[u - 1]
                }
                r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), r.focus(), t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus()
        },
        refresh: function() {
            var t, r, u = this.options.heightStyle,
            i = this.element.parent();
            this.element.css("height", this.originalHeight),
            u === "fill" ? (n.support.minHeight || (r = i.css("overflow"), i.css("overflow", "hidden")), t = i.height(), this.element.siblings(":visible").each(function() {
                var i = n(this),
                r = i.css("position");
                r !== "absolute" && r !== "fixed" && (t -= i.outerHeight(!0))
            }), r && i.css("overflow", r), this.headers.each(function() {
                t -= n(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : u === "auto" && (t = 0, this.headers.next().each(function() {
                t = Math.max(t, n(this).height("").height())
            }).height(t)),
            u !== "content" && this.element.height(this.element.height())
        },
        _activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return typeof t == "number" ? this.headers.eq(t) : n()
        },
        _setupEvents: function(t) {
            var i = {};
            t && (n.each(t.split(" "),
            function(n, t) {
                i[t] = "_eventHandler"
            }), this._on(this.headers, i))
        },
        _eventHandler: function(t) {
            var i = this.options,
            u = this.active,
            r = n(t.currentTarget),
            f = r[0] === u[0],
            e = f && i.collapsible,
            s = e ? n() : r.next(),
            h = u.next(),
            o = {
                oldHeader: u,
                oldPanel: h,
                newHeader: e ? n() : r,
                newPanel: s
            };
            (t.preventDefault(), (!f || i.collapsible) && this._trigger("beforeActivate", t, o) !== !1) && (i.active = e ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(o), u.removeClass("ui-accordion-header-active ui-state-active"), i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), r.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var r = t.newPanel,
            i = this.prevShow.length ? this.prevShow: t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0),
            this.prevShow = r,
            this.prevHide = i,
            this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t)),
            i.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            i.prev().attr("aria-selected", "false"),
            r.length && i.length ? i.prev().attr("tabIndex", -1) : r.length && this.headers.filter(function() {
                return n(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1),
            r.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(n, t, u) {
            var l, f, e, a = this,
            h = 0,
            v = n.length && (!t.length || n.index() < t.index()),
            s = this.options.animate || {},
            o = v && s.down || s,
            c = function() {
                a._toggleComplete(u)
            };
            if (typeof o == "number" && (e = o), typeof o == "string" && (f = o), f = f || o.easing || s.easing, e = e || o.duration || s.duration, !t.length) return n.animate(r, e, f, c);
            if (!n.length) return t.animate(i, e, f, c);
            l = n.show().outerHeight(),
            t.animate(i, {
                duration: e,
                easing: f,
                step: function(n, t) {
                    t.now = Math.round(n)
                }
            }),
            n.hide().animate(r, {
                duration: e,
                easing: f,
                complete: c,
                step: function(n, i) {
                    i.now = Math.round(n),
                    i.prop !== "height" ? h += i.now: a.options.heightStyle !== "content" && (i.now = Math.round(l - t.outerHeight() - h), h = 0)
                }
            })
        },
        _toggleComplete: function(n) {
            var t = n.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
            t.length && (t.parent()[0].className = t.parent()[0].className),
            this._trigger("activate", null, n)
        }
    }),
    n.uiBackCompat !== !1 && (function(n, t) {
        n.extend(t.options, {
            navigation: !1,
            navigationFilter: function() {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        });
        var i = t._create;
        t._create = function() {
            if (this.options.navigation) {
                var f = this,
                t = this.element.find(this.options.header),
                r = t.next(),
                u = t.add(r).find("a").filter(this.options.navigationFilter)[0];
                u && t.add(r).each(function(t) {
                    if (n.contains(this, u)) return f.options.active = Math.floor(t / 2),
                    !1
                })
            }
            i.call(this)
        }
    } (jQuery, jQuery.ui.accordion.prototype),
    function(n, t) {
        n.extend(t.options, {
            heightStyle: null,
            autoHeight: !0,
            clearStyle: !1,
            fillSpace: !1
        });
        var i = t._create,
        r = t._setOption;
        n.extend(t, {
            _create: function() {
                this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(),
                i.call(this)
            },
            _setOption: function(n) { (n === "autoHeight" || n === "clearStyle" || n === "fillSpace") && (this.options.heightStyle = this._mergeHeightStyle()),
                r.apply(this, arguments)
            },
            _mergeHeightStyle: function() {
                var n = this.options;
                return n.fillSpace ? "fill": n.clearStyle ? "content": n.autoHeight ? "auto": void 0
            }
        })
    } (jQuery, jQuery.ui.accordion.prototype),
    function(n, t) {
        n.extend(t.options.icons, {
            activeHeader: null,
            headerSelected: "ui-icon-triangle-1-s"
        });
        var i = t._createIcons;
        t._createIcons = function() {
            this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected),
            i.call(this)
        }
    } (jQuery, jQuery.ui.accordion.prototype),
    function(n, t) {
        t.activate = t._activate;
        var i = t._findActive;
        t._findActive = function(n) {
            return n === -1 && (n = !1),
            n && typeof n != "number" && (n = this.headers.index(this.headers.filter(n)), n === -1 && (n = !1)),
            i.call(this, n)
        }
    } (jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh,
    function(n, t) {
        n.extend(t.options, {
            change: null,
            changestart: null
        });
        var i = t._trigger;
        t._trigger = function(n, t, r) {
            var u = i.apply(this, arguments);
            return u ? (n === "beforeActivate" ? u = i.call(this, "changestart", t, {
                oldHeader: r.oldHeader,
                oldContent: r.oldPanel,
                newHeader: r.newHeader,
                newContent: r.newPanel
            }) : n === "activate" && (u = i.call(this, "change", t, {
                oldHeader: r.oldHeader,
                oldContent: r.oldPanel,
                newHeader: r.newHeader,
                newContent: r.newPanel
            })), u) : !1
        }
    } (jQuery, jQuery.ui.accordion.prototype),
    function(n, t) {
        n.extend(t.options, {
            animate: null,
            animated: "slide"
        });
        var i = t._create;
        t._create = function() {
            var n = this.options;
            n.animate === null && (n.animate = n.animated ? n.animated === "slide" ? 300 : n.animated === "bounceslide" ? {
                duration: 200,
                down: {
                    easing: "easeOutBounce",
                    duration: 1e3
                }
            }: n.animated: !1),
            i.call(this)
        }
    } (jQuery, jQuery.ui.accordion.prototype))
} (jQuery),
function(n) {
    var i = 0;
    n.widget("ui.autocomplete", {
        version: "1.9.0",
        defaultElement: "<input>",
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var t, i, r;
            this.isMultiLine = this._isMultiLine(),
            this.valueMethod = this.element[this.element.is("input,textarea") ? "val": "text"],
            this.isNewMenu = !0,
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
            this._on({
                keydown: function(u) {
                    if (this.element.prop("readOnly")) {
                        t = !0,
                        r = !0,
                        i = !0;
                        return
                    }
                    t = !1,
                    r = !1,
                    i = !1;
                    var f = n.ui.keyCode;
                    switch (u.keyCode) {
                    case f.PAGE_UP:
                        t = !0,
                        this._move("previousPage", u);
                        break;
                    case f.PAGE_DOWN:
                        t = !0,
                        this._move("nextPage", u);
                        break;
                    case f.UP:
                        t = !0,
                        this._keyEvent("previous", u);
                        break;
                    case f.DOWN:
                        t = !0,
                        this._keyEvent("next", u);
                        break;
                    case f.ENTER:
                    case f.NUMPAD_ENTER:
                        this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
                        break;
                    case f.TAB:
                        this.menu.active && this.menu.select(u);
                        break;
                    case f.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(u), u.preventDefault());
                        break;
                    default:
                        i = !0,
                        this._searchTimeout(u)
                    }
                },
                keypress: function(r) {
                    if (t) {
                        t = !1,
                        r.preventDefault();
                        return
                    }
                    if (!i) {
                        var u = n.ui.keyCode;
                        switch (r.keyCode) {
                        case u.PAGE_UP:
                            this._move("previousPage", r);
                            break;
                        case u.PAGE_DOWN:
                            this._move("nextPage", r);
                            break;
                        case u.UP:
                            this._keyEvent("previous", r);
                            break;
                        case u.DOWN:
                            this._keyEvent("next", r)
                        }
                    }
                },
                input: function(n) {
                    if (r) {
                        r = !1,
                        n.preventDefault();
                        return
                    }
                    this._searchTimeout(n)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(n) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching),
                    this.close(n),
                    this._change(n)
                }
            }),
            this._initSource(),
            this.menu = n("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                input: n(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("menu"),
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    n(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown",
                        function(r) {
                            r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close()
                        })
                    })
                },
                menufocus: function(t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) {
                        this.menu.blur(),
                        this.document.one("mousemove",
                        function() {
                            n(t.target).trigger(t.originalEvent)
                        });
                        return
                    }
                    var r = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete"); ! 1 !== this._trigger("focus", t, {
                        item: r
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                },
                menuselect: function(n, t) {
                    var i = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"),
                    r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                        this.previous = r,
                        this.selectedItem = i
                    })),
                    !1 !== this._trigger("select", n, {
                        item: i
                    }) && this._value(i.value),
                    this.term = this._value(),
                    this.close(n),
                    this.selectedItem = i
                }
            }),
            this.liveRegion = n("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element),
            n.fn.bgiframe && this.menu.element.bgiframe(),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(n, t) {
            this._super(n, t),
            n === "source" && this._initSource(),
            n === "appendTo" && this.menu.element.appendTo(this.document.find(t || "body")[0]),
            n === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _isMultiLine: function() {
            return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
        },
        _initSource: function() {
            var i, r, t = this;
            n.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, r) {
                r(n.ui.autocomplete.filter(i, t.term))
            }) : typeof this.options.source == "string" ? (r = this.options.source, this.source = function(i, u) {
                t.xhr && t.xhr.abort(),
                t.xhr = n.ajax({
                    url: r,
                    data: i,
                    dataType: "json",
                    success: function(n) {
                        u(n)
                    },
                    error: function() {
                        u([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(n) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, n))
            },
            this.options.delay)
        },
        search: function(n, t) {
            return (n = n != null ? n: this._value(), this.term = this._value(), n.length < this.options.minLength) ? this.close(t) : this._trigger("search", t) === !1 ? void 0 : this._search(n)
        },
        _search: function(n) {
            this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: n
            },
            this._response())
        },
        _response: function() {
            var n = this,
            t = ++i;
            return function(r) {
                t === i && n.__response(r),
                n.pending--,
                n.pending || n.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(n) {
            n && (n = this._normalize(n)),
            this._trigger("response", null, {
                content: n
            }),
            !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close()
        },
        close: function(n) {
            this.cancelSearch = !0,
            this._close(n)
        },
        _close: function(n) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n))
        },
        _change: function(n) {
            this.previous !== this._value() && this._trigger("change", n, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t: n.map(t,
            function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                }: n.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                },
                t)
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(i, t),
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(n.extend({
                of: this.element
            },
            this.options.position)),
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var n = this.menu.element;
            n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var r = this;
            n.each(i,
            function(n, i) {
                r._renderItemData(t, i)
            })
        },
        _renderItemData: function(n, t) {
            return this._renderItem(n, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return n("<li>").append(n("<a>").text(i.label)).appendTo(t)
        },
        _move: function(n, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n)) {
                this._value(this.term),
                this.menu.blur();
                return
            }
            this.menu[n](t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(n, t) { (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
        }
    }),
    n.extend(n.ui.autocomplete, {
        escapeRegex: function(n) {
            return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var r = new RegExp(n.ui.autocomplete.escapeRegex(i), "i");
            return n.grep(t,
            function(n) {
                return r.test(n.label || n.value || n)
            })
        }
    }),
    n.widget("ui.autocomplete", n.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(n) {
                    return n + (n > 1 ? " results are": " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(n) {
            var t;
            (this._superApply(arguments), this.options.disabled || this.cancelSearch) || (t = n && n.length ? this.options.messages.results(n.length) : this.options.messages.noResults, this.liveRegion.text(t))
        }
    })
} (jQuery),
function(n) {
    var r, u, f, i, e = "ui-button ui-widget ui-state-default ui-corner-all",
    h = "ui-state-hover ui-state-active ",
    o = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
    c = function() {
        var t = n(this).find(":ui-button");
        setTimeout(function() {
            t.button("refresh")
        },
        1)
    },
    s = function(t) {
        var i = t.name,
        u = t.form,
        r = n([]);
        return i && (r = u ? n(u).find("[name='" + i + "']") : n("[name='" + i + "']", t.ownerDocument).filter(function() {
            return ! this.form
        })),
        r
    };
    n.widget("ui.button", {
        version: "1.9.0",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, c),
            typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
            this._determineButtonType(),
            this.hasTitle = !!this.buttonElement.attr("title");
            var o = this,
            t = this.options,
            h = this.type === "checkbox" || this.type === "radio",
            a = "ui-state-hover" + (h ? "": " ui-state-active"),
            l = "ui-state-focus";
            t.label === null && (t.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()),
            this.buttonElement.addClass(e).attr("role", "button").bind("mouseenter" + this.eventNamespace,
            function() {
                t.disabled || (n(this).addClass("ui-state-hover"), this === r && n(this).addClass("ui-state-active"))
            }).bind("mouseleave" + this.eventNamespace,
            function() {
                t.disabled || n(this).removeClass(a)
            }).bind("click" + this.eventNamespace,
            function(n) {
                t.disabled && (n.preventDefault(), n.stopImmediatePropagation())
            }),
            this.element.bind("focus" + this.eventNamespace,
            function() {
                o.buttonElement.addClass(l)
            }).bind("blur" + this.eventNamespace,
            function() {
                o.buttonElement.removeClass(l)
            }),
            h && (this.element.bind("change" + this.eventNamespace,
            function() {
                i || o.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace,
            function(n) {
                t.disabled || (i = !1, u = n.pageX, f = n.pageY)
            }).bind("mouseup" + this.eventNamespace,
            function(n) {
                t.disabled || (u !== n.pageX || f !== n.pageY) && (i = !0)
            })),
            this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace,
            function() {
                if (t.disabled || i) return ! 1;
                n(this).toggleClass("ui-state-active"),
                o.buttonElement.attr("aria-pressed", o.element[0].checked)
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace,
            function() {
                if (t.disabled || i) return ! 1;
                n(this).addClass("ui-state-active"),
                o.buttonElement.attr("aria-pressed", "true");
                var r = o.element[0];
                s(r).not(r).map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace,
            function() {
                if (t.disabled) return ! 1;
                n(this).addClass("ui-state-active"),
                r = this,
                o.document.one("mouseup",
                function() {
                    r = null
                })
            }).bind("mouseup" + this.eventNamespace,
            function() {
                if (t.disabled) return ! 1;
                n(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace,
            function(i) {
                if (t.disabled) return ! 1;
                (i.keyCode === n.ui.keyCode.SPACE || i.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace,
            function() {
                n(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === n.ui.keyCode.SPACE && n(this).click()
            })),
            this._setOption("disabled", t.disabled),
            this._resetButton()
        },
        _determineButtonType: function() {
            var n, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox": this.element.is("[type=radio]") ? "radio": this.element.is("input") ? "input": "button",
            this.type === "checkbox" || this.type === "radio" ? (n = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"),
            this.buttonElement.removeClass(e + " " + h + " " + o).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(n, t) {
            if (this._super(n, t), n === "disabled") {
                t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var t = this.element.is(":disabled");
            t !== this.options.disabled && this._setOption("disabled", t),
            this.type === "radio" ? s(this.element[0]).each(function() {
                n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var i = this.buttonElement.removeClass(o),
            f = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
            t = this.options.icons,
            u = t.primary && t.secondary,
            r = [];
            t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s": t.primary ? "-primary": "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (r.push(u ? "ui-button-icons-only": "ui-button-icon-only"), this.hasTitle || i.attr("title", n.trim(f)))) : r.push("ui-button-text-only"),
            i.addClass(r.join(" "))
        }
    }),
    n.widget("ui.buttonset", {
        version: "1.9.0",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(n, t) {
            n === "disabled" && this.buttons.button("option", n, t),
            this._super(n, t)
        },
        refresh: function() {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right": "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left": "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"),
            this.buttons.map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
} (jQuery),
function(n, t) {
    function e() {
        this.debug = !1,
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        n.extend(this._defaults, this.regional[""]),
        this.dpDiv = o(n('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"><\/div>'))
    }
    function o(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout",
        function() {
            n(this).removeClass("ui-state-hover"),
            this.className.indexOf("ui-datepicker-prev") != -1 && n(this).removeClass("ui-datepicker-prev-hover"),
            this.className.indexOf("ui-datepicker-next") != -1 && n(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover",
        function() {
            n.datepicker._isDisabledDatepicker(f.inline ? t.parent()[0] : f.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && n(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && n(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function u(i, r) {
        n.extend(i, r);
        for (var u in r)(r[u] == null || r[u] == t) && (i[u] = r[u]);
        return i
    }
    n.extend(n.ui, {
        datepicker: {
            version: "1.9.0"
        }
    });
    var i = "datepicker",
    r = +new Date,
    f;
    n.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function() {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(n) {
            return u(this._defaults, n || {}),
            this
        },
        _attachDatepicker: function(target, settings) {
            var inlineSettings = null,
            attrName, attrValue, nodeName, inline, inst;
            for (attrName in this._defaults) if (attrValue = target.getAttribute("date:" + attrName), attrValue) {
                inlineSettings = inlineSettings || {};
                try {
                    inlineSettings[attrName] = eval(attrValue)
                } catch(err) {
                    inlineSettings[attrName] = attrValue
                }
            }
            nodeName = target.nodeName.toLowerCase(),
            inline = nodeName == "div" || nodeName == "span",
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid),
            inst = this._newInst(n(target), inline),
            inst.settings = n.extend({},
            settings || {},
            inlineSettings || {}),
            nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function(t, i) {
            var r = t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? o(n('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"><\/div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, r) {
            var u = n(t);
            (r.append = n([]), r.trigger = n([]), u.hasClass(this.markerClassName)) || (this._attachments(u, r), u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
            function(n, t, i) {
                r.settings[t] = i
            }).bind("getData.datepicker",
            function(n, t) {
                return this._get(r, t)
            }), this._autoSize(r), n.data(t, i, r), r.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var e = this._get(i, "appendText"),
            o = this._get(i, "isRTL"),
            u,
            r,
            f;
            i.append && i.append.remove(),
            e && (i.append = n('<span class="' + this._appendClass + '">' + e + "<\/span>"), t[o ? "before": "after"](i.append)),
            t.unbind("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            u = this._get(i, "showOn"),
            (u == "focus" || u == "both") && t.focus(this._showDatepicker),
            (u == "button" || u == "both") && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: r,
                title: r
            }) : n('<button type="button"><\/button>').addClass(this._triggerClass).html(f == "" ? r: n("<img/>").attr({
                src: f,
                alt: r,
                title: r
            }))), t[o ? "before": "after"](i.trigger), i.trigger.click(function() {
                return n.datepicker._datepickerShowing && n.datepicker._lastInput == t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput != t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]),
                !1
            }))
        },
        _autoSize: function(n) {
            var t, i, r;
            this._get(n, "autoSize") && !n.inline && (t = new Date(2009, 11, 20), i = this._get(n, "dateFormat"), i.match(/[DM]/) && (r = function(n) {
                for (var i = 0, r = 0, t = 0; t < n.length; t++) n[t].length > i && (i = n[t].length, r = t);
                return r
            },
            t.setMonth(r(this._get(n, i.match(/MM/) ? "monthNames": "monthNamesShort"))), t.setDate(r(this._get(n, i.match(/DD/) ? "dayNames": "dayNamesShort")) + 20 - t.getDay())), n.input.attr("size", this._formatDate(n, t).length))
        },
        _inlineDatepicker: function(t, r) {
            var u = n(t);
            u.hasClass(this.markerClassName) || (u.addClass(this.markerClassName).append(r.dpDiv).bind("setData.datepicker",
            function(n, t, i) {
                r.settings[t] = i
            }).bind("getData.datepicker",
            function(n, t) {
                return this._get(r, t)
            }), n.data(t, i, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, r, f, e, o) {
            var s = this._dialogInst,
            h;
            if (s || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = n('<input type="text" id="' + h + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {},
            n.data(this._dialogInput[0], i, s)), u(s.settings, e || {}), r = r && r.constructor == Date ? this._formatDate(s, r) : r, this._dialogInput.val(r), this._pos = o ? o.length ? o: [o.pageX, o.pageY] : null, !this._pos) {
                var c = document.documentElement.clientWidth,
                l = document.documentElement.clientHeight,
                a = document.documentElement.scrollLeft || document.body.scrollLeft,
                v = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [c / 2 - 100 + a, l / 2 - 150 + v]
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            s.settings.onSelect = f,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            n.blockUI && n.blockUI(this.dpDiv),
            n.data(this._dialogInput[0], i, s),
            this
        },
        _destroyDatepicker: function(t) {
            var u = n(t),
            f = n.data(t, i),
            r;
            u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), n.removeData(t, i), r == "input" ? (f.append.remove(), f.trigger.remove(), u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && u.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var f = n(t),
            e = n.data(t, i),
            r,
            u;
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), r == "input" ? (t.disabled = !1, e.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : (r == "div" || r == "span") && (u = f.children("." + this._inlineClass), u.children().removeClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs,
            function(n) {
                return n == t ? null: n
            }))
        },
        _disableDatepicker: function(t) {
            var f = n(t),
            e = n.data(t, i),
            r,
            u;
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), r == "input" ? (t.disabled = !0, e.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : (r == "div" || r == "span") && (u = f.children("." + this._inlineClass), u.children().addClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs,
            function(n) {
                return n == t ? null: n
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(n) {
            if (!n) return ! 1;
            for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] == n) return ! 0;
            return ! 1
        },
        _getInst: function(t) {
            try {
                return n.data(t, i)
            } catch(r) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(i, r, f) {
            var e = this._getInst(i),
            o;
            if (arguments.length == 2 && typeof r == "string") return r == "defaults" ? n.extend({},
            n.datepicker._defaults) : e ? r == "all" ? n.extend({},
            e.settings) : this._get(e, r) : null;
            if (o = r || {},
            typeof r == "string" && (o = {},
            o[r] = f), e) {
                this._curInst == e && this._hideDatepicker();
                var c = this._getDateDatepicker(i, !0),
                s = this._getMinMaxDate(e, "min"),
                h = this._getMinMaxDate(e, "max");
                u(e.settings, o),
                s !== null && o.dateFormat !== t && o.minDate === t && (e.settings.minDate = this._formatDate(e, s)),
                h !== null && o.dateFormat !== t && o.maxDate === t && (e.settings.maxDate = this._formatDate(e, h)),
                this._attachments(n(i), e),
                this._autoSize(e),
                this._setDate(e, c),
                this._updateAlternate(e),
                this._updateDatepicker(e)
            }
        },
        _changeDatepicker: function(n, t, i) {
            this._optionDatepicker(n, t, i)
        },
        _refreshDatepicker: function(n) {
            var t = this._getInst(n);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            return i && !i.inline && this._setDateFromField(i, t),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i = n.datepicker._getInst(t.target),
            r = !0,
            e = i.dpDiv.is(".ui-datepicker-rtl"),
            u,
            f,
            o;
            if (i._keyEvent = !0, n.datepicker._datepickerShowing) switch (t.keyCode) {
            case 9:
                n.datepicker._hideDatepicker(),
                r = !1;
                break;
            case 13:
                return u = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv),
                u[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, u[0]),
                f = n.datepicker._get(i, "onSelect"),
                f ? (o = n.datepicker._formatDate(i), f.apply(i.input ? i.input[0] : null, [o, i])) : n.datepicker._hideDatepicker(),
                !1;
            case 27:
                n.datepicker._hideDatepicker();
                break;
            case 33:
                n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                break;
            case 34:
                n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                break;
            case 35:
                (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target),
                r = t.ctrlKey || t.metaKey;
                break;
            case 36:
                (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target),
                r = t.ctrlKey || t.metaKey;
                break;
            case 37:
                (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, e ? 1 : -1, "D"),
                r = t.ctrlKey || t.metaKey,
                t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                break;
            case 38:
                (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D"),
                r = t.ctrlKey || t.metaKey;
                break;
            case 39:
                (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, e ? -1 : 1, "D"),
                r = t.ctrlKey || t.metaKey,
                t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                break;
            case 40:
                (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D"),
                r = t.ctrlKey || t.metaKey;
                break;
            default:
                r = !1
            } else t.keyCode == 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(i) {
            var f = n.datepicker._getInst(i.target),
            r,
            u;
            if (n.datepicker._get(f, "constrainInput")) return r = n.datepicker._possibleChars(n.datepicker._get(f, "dateFormat")),
            u = String.fromCharCode(i.charCode == t ? i.keyCode: i.charCode),
            i.ctrlKey || i.metaKey || u < " " || !r || r.indexOf(u) > -1
        },
        _doKeyUp: function(t) {
            var i = n.datepicker._getInst(t.target),
            r;
            if (i.input.val() != i.lastVal) try {
                r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i)),
                r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i))
            } catch(u) {
                n.datepicker.log(u)
            }
            return ! 0
        },
        _showDatepicker: function(t) {
            var i, o, s, f, e;
            if ((t = t.target || t, t.nodeName.toLowerCase() != "input" && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput != t) && (i = n.datepicker._getInst(t), n.datepicker._curInst && n.datepicker._curInst != i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])), o = n.datepicker._get(i, "beforeShow"), s = o ? o.apply(t, [t, i]) : {},
            s !== !1) && (u(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), f = !1, n(t).parents().each(function() {
                return f |= n(this).css("position") == "fixed",
                !f
            }), e = {
                left: n.datepicker._pos[0],
                top: n.datepicker._pos[1]
            },
            n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), n.datepicker._updateDatepicker(i), e = n.datepicker._checkOffset(i, e, f), i.dpDiv.css({
                position: n.datepicker._inDialog && n.blockUI ? "static": f ? "fixed": "absolute",
                display: "none",
                left: e.left + "px",
                top: e.top + "px"
            }), !i.inline)) {
                var r = n.datepicker._get(i, "showAnim"),
                h = n.datepicker._get(i, "duration"),
                c = function() {
                    var r = i.dpDiv.find("iframe.ui-datepicker-cover"),
                    t; ! r.length || (t = n.datepicker._getBorders(i.dpDiv), r.css({
                        left: -t[0],
                        top: -t[1],
                        width: i.dpDiv.outerWidth(),
                        height: i.dpDiv.outerHeight()
                    }))
                };
                i.dpDiv.zIndex(n(t).zIndex() + 1),
                n.datepicker._datepickerShowing = !0,
                n.effects && (n.effects.effect[r] || n.effects[r]) ? i.dpDiv.show(r, n.datepicker._get(i, "showOptions"), h, c) : i.dpDiv[r || "show"](r ? h: null, c),
                (!r || !h) && c(),
                i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus(),
                n.datepicker._curInst = i
            }
        },
        _updateDatepicker: function(t) {
            var i, r, o;
            this.maxRows = 4,
            i = n.datepicker._getBorders(t.dpDiv),
            f = t,
            t.dpDiv.empty().append(this._generateHTML(t)),
            this._attachHandlers(t),
            r = t.dpDiv.find("iframe.ui-datepicker-cover"),
            r.length && r.css({
                left: -i[0],
                top: -i[1],
                width: t.dpDiv.outerWidth(),
                height: t.dpDiv.outerHeight()
            }),
            t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var u = this._getNumberOfMonths(t),
            e = u[1],
            s = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            e > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", s * e + "em"),
            t.dpDiv[(u[0] != 1 || u[1] != 1 ? "add": "remove") + "Class"]("ui-datepicker-multi"),
            t.dpDiv[(this._get(t, "isRTL") ? "add": "remove") + "Class"]("ui-datepicker-rtl"),
            t == n.datepicker._curInst && n.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(),
            t.yearshtml && (o = t.yearshtml, setTimeout(function() {
                o === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                o = t.yearshtml = null
            },
            0))
        },
        _getBorders: function(n) {
            var t = function(n) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                } [n] || n
            };
            return [parseFloat(t(n.css("border-left-width"))), parseFloat(t(n.css("border-top-width")))]
        },
        _checkOffset: function(t, i, r) {
            var u = t.dpDiv.outerWidth(),
            f = t.dpDiv.outerHeight(),
            h = t.input ? t.input.outerWidth() : 0,
            o = t.input ? t.input.outerHeight() : 0,
            e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
            s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? u - h: 0,
            i.left -= r && i.left == t.input.offset().left ? n(document).scrollLeft() : 0,
            i.top -= r && i.top == t.input.offset().top + o ? n(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0),
            i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0),
            i
        },
        _findPos: function(t) {
            for (var r = this._getInst(t), u = this._get(r, "isRTL"), i; t && (t.type == "hidden" || t.nodeType != 1 || n.expr.filters.hidden(t));) t = t[u ? "previousSibling": "nextSibling"];
            return i = n(t).offset(),
            [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var r = this._curInst,
            e;
            if (r && (!t || r == n.data(t, i)) && this._datepickerShowing) {
                var u = this._get(r, "showAnim"),
                o = this._get(r, "duration"),
                f = function() {
                    n.datepicker._tidyDialog(r)
                };
                n.effects && (n.effects.effect[u] || n.effects[u]) ? r.dpDiv.hide(u, n.datepicker._get(r, "showOptions"), o, f) : r.dpDiv[u == "slideDown" ? "slideUp": u == "fadeIn" ? "fadeOut": "hide"](u ? o: null, f),
                u || f(),
                this._datepickerShowing = !1,
                e = this._get(r, "onClose"),
                e && e.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]),
                this._lastInput = null,
                this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))),
                this._inDialog = !1
            }
        },
        _tidyDialog: function(n) {
            n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (n.datepicker._curInst) {
                var i = n(t.target),
                r = n.datepicker._getInst(i[0]);
                (i[0].id == n.datepicker._mainDivId || i.parents("#" + n.datepicker._mainDivId).length != 0 || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst == r) || n.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, r) {
            var f = n(t),
            u = this._getInst(f[0]);
            this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + (r == "M" ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u))
        },
        _gotoToday: function(t) {
            var u = n(t),
            i = this._getInst(u[0]),
            r;
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear()),
            this._notifyChange(i),
            this._adjustDate(u)
        },
        _selectMonthYear: function(t, i, r) {
            var f = n(t),
            u = this._getInst(f[0]);
            u["selected" + (r == "M" ? "Month": "Year")] = u["draw" + (r == "M" ? "Month": "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
            this._notifyChange(u),
            this._adjustDate(f)
        },
        _selectDay: function(t, i, r, u) {
            var e = n(t),
            f;
            n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function(t) {
            var i = n(t),
            r = this._getInst(i[0]);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var f = n(t),
            r = this._getInst(f[0]),
            u;
            i = i != null ? i: this._formatDate(r),
            r.input && r.input.val(i),
            this._updateAlternate(r),
            u = this._get(r, "onSelect"),
            u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change"),
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i = this._get(t, "altField");
            if (i) {
                var r = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                u = this._getDate(t),
                f = this.formatDate(r, u, this._getFormatConfig(t));
                n(i).each(function() {
                    n(this).val(f)
                })
            }
        },
        noWeekends: function(n) {
            var t = n.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function(n) {
            var t = new Date(n.getTime()),
            i;
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)),
            i = t.getTime(),
            t.setMonth(0),
            t.setDate(1),
            Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, r) {
            var c, s, w, b, u;
            if (t == null || i == null) throw "Invalid arguments";
            if (i = typeof i == "object" ? i.toString() : i + "", i == "") return null;
            c = (r ? r.shortYearCutoff: null) || this._defaults.shortYearCutoff,
            c = typeof c != "string" ? c: (new Date).getFullYear() % 100 + parseInt(c, 10);
            var d = (r ? r.dayNamesShort: null) || this._defaults.dayNamesShort,
            g = (r ? r.dayNames: null) || this._defaults.dayNames,
            nt = (r ? r.monthNamesShort: null) || this._defaults.monthNamesShort,
            tt = (r ? r.monthNames: null) || this._defaults.monthNames,
            f = -1,
            o = -1,
            h = -1,
            v = -1,
            y = !1,
            a = function(n) {
                var i = s + 1 < t.length && t.charAt(s + 1) == n;
                return i && s++,
                i
            },
            l = function(n) {
                var r = a(n),
                u = n == "@" ? 14 : n == "!" ? 20 : n == "y" && r ? 4 : n == "o" ? 3 : 2,
                f = new RegExp("^\\d{1," + u + "}"),
                t = i.substring(e).match(f);
                if (!t) throw "Missing number at position " + e;
                return e += t[0].length,
                parseInt(t[0], 10)
            },
            k = function(t, r, u) {
                var o = n.map(a(t) ? u: r,
                function(n, t) {
                    return [[t, n]]
                }).sort(function(n, t) {
                    return - (n[1].length - t[1].length)
                }),
                f = -1;
                if (n.each(o,
                function(n, t) {
                    var r = t[1];
                    if (i.substr(e, r.length).toLowerCase() == r.toLowerCase()) return f = t[0],
                    e += r.length,
                    !1
                }), f != -1) return f + 1;
                throw "Unknown name at position " + e;
            },
            p = function() {
                if (i.charAt(e) != t.charAt(s)) throw "Unexpected literal at position " + e;
                e++
            },
            e = 0;
            for (s = 0; s < t.length; s++) if (y) t.charAt(s) == "'" && !a("'") ? y = !1 : p();
            else switch (t.charAt(s)) {
            case "d":
                h = l("d");
                break;
            case "D":
                k("D", d, g);
                break;
            case "o":
                v = l("o");
                break;
            case "m":
                o = l("m");
                break;
            case "M":
                o = k("M", nt, tt);
                break;
            case "y":
                f = l("y");
                break;
            case "@":
                u = new Date(l("@")),
                f = u.getFullYear(),
                o = u.getMonth() + 1,
                h = u.getDate();
                break;
            case "!":
                u = new Date((l("!") - this._ticksTo1970) / 1e4),
                f = u.getFullYear(),
                o = u.getMonth() + 1,
                h = u.getDate();
                break;
            case "'":
                a("'") ? p() : y = !0;
                break;
            default:
                p()
            }
            if (e < i.length && (w = i.substr(e), !/^\s+/.test(w))) throw "Extra/unparsed characters found in date: " + w;
            if (f == -1 ? f = (new Date).getFullYear() : f < 100 && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= c ? 0 : -100)), v > -1) {
                o = 1,
                h = v;
                do {
                    if (b = this._getDaysInMonth(f, o - 1), h <= b) break;
                    o++, h -= b
                } while ( 1 )
            }
            if (u = this._daylightSavingAdjust(new Date(f, o - 1, h)), u.getFullYear() != f || u.getMonth() + 1 != o || u.getDate() != h) throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 864e9,
        formatDate: function(n, t, i) {
            var u;
            if (!t) return "";
            var h = (i ? i.dayNamesShort: null) || this._defaults.dayNamesShort,
            c = (i ? i.dayNames: null) || this._defaults.dayNames,
            l = (i ? i.monthNamesShort: null) || this._defaults.monthNamesShort,
            a = (i ? i.monthNames: null) || this._defaults.monthNames,
            f = function(t) {
                var i = u + 1 < n.length && n.charAt(u + 1) == t;
                return i && u++,
                i
            },
            e = function(n, t, i) {
                var r = "" + t;
                if (f(n)) while (r.length < i) r = "0" + r;
                return r
            },
            s = function(n, t, i, r) {
                return f(n) ? r[t] : i[t]
            },
            r = "",
            o = !1;
            if (t) for (u = 0; u < n.length; u++) if (o) n.charAt(u) == "'" && !f("'") ? o = !1 : r += n.charAt(u);
            else switch (n.charAt(u)) {
            case "d":
                r += e("d", t.getDate(), 2);
                break;
            case "D":
                r += s("D", t.getDay(), h, c);
                break;
            case "o":
                r += e("o", Math.round(( + new Date(t.getFullYear(), t.getMonth(), t.getDate()) - +new Date(t.getFullYear(), 0, 0)) / 864e5), 3);
                break;
            case "m":
                r += e("m", t.getMonth() + 1, 2);
                break;
            case "M":
                r += s("M", t.getMonth(), l, a);
                break;
            case "y":
                r += f("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0": "") + t.getYear() % 100;
                break;
            case "@":
                r += t.getTime();
                break;
            case "!":
                r += t.getTime() * 1e4 + this._ticksTo1970;
                break;
            case "'":
                f("'") ? r += "'": o = !0;
                break;
            default:
                r += n.charAt(u)
            }
            return r
        },
        _possibleChars: function(n) {
            for (var i = "", r = !1, u = function(i) {
                var r = t + 1 < n.length && n.charAt(t + 1) == i;
                return r && t++,
                r
            },
            t = 0; t < n.length; t++) if (r) n.charAt(t) == "'" && !u("'") ? r = !1 : i += n.charAt(t);
            else switch (n.charAt(t)) {
            case "d":
            case "m":
            case "y":
            case "@":
                i += "0123456789";
                break;
            case "D":
            case "M":
                return null;
            case "'":
                u("'") ? i += "'": r = !0;
                break;
            default:
                i += n.charAt(t)
            }
            return i
        },
        _get: function(n, i) {
            return n.settings[i] !== t ? n.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(n, t) {
            var u, r, i, f, e;
            if (n.input.val() != n.lastVal) {
                u = this._get(n, "dateFormat"),
                r = n.lastVal = n.input ? n.input.val() : null,
                i = f = this._getDefaultDate(n),
                e = this._getFormatConfig(n);
                try {
                    i = this.parseDate(u, r, e) || f
                } catch(o) {
                    this.log(o),
                    r = t ? "": r
                }
                n.selectedDay = i.getDate(),
                n.drawMonth = n.selectedMonth = i.getMonth(),
                n.drawYear = n.selectedYear = i.getFullYear(),
                n.currentDay = r ? i.getDate() : 0,
                n.currentMonth = r ? i.getMonth() : 0,
                n.currentYear = r ? i.getFullYear() : 0,
                this._adjustInstDate(n)
            }
        },
        _getDefaultDate: function(n) {
            return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, r) {
            var f = function(n) {
                var t = new Date;
                return t.setDate(t.getDate() + n),
                t
            },
            e = function(i) {
                try {
                    return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                } catch(h) {}
                for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
                    switch (u[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(u[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += parseInt(u[1], 10) * 7;
                        break;
                    case "m":
                    case "M":
                        e += parseInt(u[1], 10),
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                        break;
                    case "y":
                    case "Y":
                        f += parseInt(u[1], 10),
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                    }
                    u = s.exec(i)
                }
                return new Date(f, e, r)
            },
            u = i == null || i === "" ? r: typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r: f(i) : new Date(i.getTime());
            return u = u && u.toString() == "Invalid Date" ? r: u,
            u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)),
            this._daylightSavingAdjust(u)
        },
        _daylightSavingAdjust: function(n) {
            return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null
        },
        _setDate: function(n, t, i) {
            var u = !t,
            f = n.selectedMonth,
            e = n.selectedYear,
            r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
            n.selectedDay = n.currentDay = r.getDate(),
            n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth(),
            n.drawYear = n.selectedYear = n.currentYear = r.getFullYear(),
            (f != n.selectedMonth || e != n.selectedYear) && !i && this._notifyChange(n),
            this._adjustInstDate(n),
            n.input && n.input.val(u ? "": this._formatDate(n))
        },
        _getDate: function(n) {
            return ! n.currentYear || n.input && n.input.val() == "" ? null: this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
        },
        _attachHandlers: function(t) {
            var u = this._get(t, "stepMonths"),
            i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        window["DP_jQuery_" + r].datepicker._adjustDate(i, -u, "M")
                    },
                    next: function() {
                        window["DP_jQuery_" + r].datepicker._adjustDate(i, +u, "M")
                    },
                    hide: function() {
                        window["DP_jQuery_" + r].datepicker._hideDatepicker()
                    },
                    today: function() {
                        window["DP_jQuery_" + r].datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return window["DP_jQuery_" + r].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "Y"),
                        !1
                    }
                };
                n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var l = new Date,
            d, h, ut, c, p, ot, w, st, ht, ct, r, at, vt, s;
            l = this._daylightSavingAdjust(new Date(l.getFullYear(), l.getMonth(), l.getDate()));
            var e = this._get(t, "isRTL"),
            fi = this._get(t, "showButtonPanel"),
            pt = this._get(t, "hideIfNoPrevNext"),
            tt = this._get(t, "navigationAsDateFormat"),
            o = this._getNumberOfMonths(t),
            ei = this._get(t, "showCurrentAtPos"),
            wt = this._get(t, "stepMonths"),
            it = o[0] != 1 || o[1] != 1,
            rt = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
            y = this._getMinMaxDate(t, "min"),
            a = this._getMinMaxDate(t, "max"),
            i = t.drawMonth - ei,
            u = t.drawYear;
            if (i < 0 && (i += 12, u--), a) for (d = this._daylightSavingAdjust(new Date(a.getFullYear(), a.getMonth() - o[0] * o[1] + 1, a.getDate())), d = y && d < y ? y: d; this._daylightSavingAdjust(new Date(u, i, 1)) > d;) i--,
            i < 0 && (i = 11, u--);
            t.drawMonth = i,
            t.drawYear = u,
            h = this._get(t, "prevText"),
            h = tt ? this.formatDate(h, this._daylightSavingAdjust(new Date(u, i - wt, 1)), this._getFormatConfig(t)) : h,
            ut = this._canAdjustMonth(t, -1, u, i) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + h + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "e": "w") + '">' + h + "<\/span><\/a>": pt ? "": '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + h + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "e": "w") + '">' + h + "<\/span><\/a>",
            c = this._get(t, "nextText"),
            c = tt ? this.formatDate(c, this._daylightSavingAdjust(new Date(u, i + wt, 1)), this._getFormatConfig(t)) : c;
            var bt = this._canAdjustMonth(t, 1, u, i) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + c + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "w": "e") + '">' + c + "<\/span><\/a>": pt ? "": '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + c + '"><span class="ui-icon ui-icon-circle-triangle-' + (e ? "w": "e") + '">' + c + "<\/span><\/a>",
            g = this._get(t, "currentText"),
            kt = this._get(t, "gotoCurrent") && t.currentDay ? rt: l;
            g = tt ? this.formatDate(g, kt, this._getFormatConfig(t)) : g;
            var dt = t.inline ? "": '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "<\/button>",
            oi = fi ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (e ? dt: "") + (this._isInRange(t, kt) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + g + "<\/button>": "") + (e ? "": dt) + "<\/div>": "",
            v = parseInt(this._get(t, "firstDay"), 10);
            v = isNaN(v) ? 0 : v;
            var gt = this._get(t, "showWeek"),
            si = this._get(t, "dayNames"),
            vi = this._get(t, "dayNamesShort"),
            hi = this._get(t, "dayNamesMin"),
            ci = this._get(t, "monthNames"),
            li = this._get(t, "monthNamesShort"),
            ni = this._get(t, "beforeShowDay"),
            ft = this._get(t, "showOtherMonths"),
            ai = this._get(t, "selectOtherMonths"),
            yi = this._get(t, "calculateWeek") || this.iso8601Week,
            ti = this._getDefaultDate(t),
            et = "";
            for (p = 0; p < o[0]; p++) {
                for (ot = "", this.maxRows = 4, w = 0; w < o[1]; w++) {
                    var ii = this._daylightSavingAdjust(new Date(u, i, t.selectedDay)),
                    b = " ui-corner-all",
                    f = "";
                    if (it) {
                        if (f += '<div class="ui-datepicker-group', o[1] > 1) switch (w) {
                        case 0:
                            f += " ui-datepicker-group-first",
                            b = " ui-corner-" + (e ? "right": "left");
                            break;
                        case o[1] - 1 : f += " ui-datepicker-group-last",
                            b = " ui-corner-" + (e ? "left": "right");
                            break;
                        default:
                            f += " ui-datepicker-group-middle",
                            b = ""
                        }
                        f += '">'
                    }
                    for (f += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + b + '">' + (/all|left/.test(b) && p == 0 ? e ? bt: ut: "") + (/all|right/.test(b) && p == 0 ? e ? ut: bt: "") + this._generateMonthYearHeader(t, i, u, y, a, p > 0 || w > 0, ci, li) + '<\/div><table class="ui-datepicker-calendar"><thead><tr>', st = gt ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "<\/th>": "", s = 0; s < 7; s++) ht = (s + v) % 7,
                    st += "<th" + ((s + v + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"': "") + '><span title="' + si[ht] + '">' + hi[ht] + "<\/span><\/th>";
                    f += st + "<\/tr><\/thead><tbody>",
                    ct = this._getDaysInMonth(u, i),
                    u == t.selectedYear && i == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, ct));
                    var ri = (this._getFirstDayOfMonth(u, i) - v + 7) % 7,
                    lt = Math.ceil((ri + ct) / 7),
                    ui = it ? this.maxRows > lt ? this.maxRows: lt: lt;
                    for (this.maxRows = ui, r = this._daylightSavingAdjust(new Date(u, i, 1 - ri)), at = 0; at < ui; at++) {
                        for (f += "<tr>", vt = gt ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(r) + "<\/td>": "", s = 0; s < 7; s++) {
                            var nt = ni ? ni.apply(t.input ? t.input[0] : null, [r]) : [!0, ""],
                            k = r.getMonth() != i,
                            yt = k && !ai || !nt[0] || y && r < y || a && r > a;
                            vt += '<td class="' + ((s + v + 6) % 7 >= 5 ? " ui-datepicker-week-end": "") + (k ? " ui-datepicker-other-month": "") + (r.getTime() == ii.getTime() && i == t.selectedMonth && t._keyEvent || ti.getTime() == r.getTime() && ti.getTime() == ii.getTime() ? " " + this._dayOverClass: "") + (yt ? " " + this._unselectableClass + " ui-state-disabled": "") + (k && !ft ? "": " " + nt[1] + (r.getTime() == rt.getTime() ? " " + this._currentClass: "") + (r.getTime() == l.getTime() ? " ui-datepicker-today": "")) + '"' + ((!k || ft) && nt[2] ? ' title="' + nt[2] + '"': "") + (yt ? "": ' data-handler="selectDay" data-event="click" data-month="' + r.getMonth() + '" data-year="' + r.getFullYear() + '"') + ">" + (k && !ft ? "&#xa0;": yt ? '<span class="ui-state-default">' + r.getDate() + "<\/span>": '<a class="ui-state-default' + (r.getTime() == l.getTime() ? " ui-state-highlight": "") + (r.getTime() == rt.getTime() ? " ui-state-active": "") + (k ? " ui-priority-secondary": "") + '" href="#">' + r.getDate() + "<\/a>") + "<\/td>",
                            r.setDate(r.getDate() + 1),
                            r = this._daylightSavingAdjust(r)
                        }
                        f += vt + "<\/tr>"
                    }
                    i++,
                    i > 11 && (i = 0, u++),
                    f += "<\/tbody><\/table>" + (it ? "<\/div>" + (o[0] > 0 && w == o[1] - 1 ? '<div class="ui-datepicker-row-break"><\/div>': "") : ""),
                    ot += f
                }
                et += ot
            }
            return et += oi + (n.browser.msie && parseInt(n.browser.version, 10) < 7 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"><\/iframe>': ""),
            t._keyEvent = !1,
            et
        },
        _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
            var v = this._get(n, "changeMonth"),
            y = this._get(n, "changeYear"),
            p = this._get(n, "showMonthAfterYear"),
            c = '<div class="ui-datepicker-title">',
            l = "",
            w,
            b,
            h;
            if (f || !v) l += '<span class="ui-datepicker-month">' + e[t] + "<\/span>";
            else {
                for (w = r && r.getFullYear() == i, b = u && u.getFullYear() == i, l += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">', h = 0; h < 12; h++)(!w || h >= r.getMonth()) && (!b || h <= u.getMonth()) && (l += '<option value="' + h + '"' + (h == t ? ' selected="selected"': "") + ">" + o[h] + "<\/option>");
                l += "<\/select>"
            }
            if (p || (c += l + (f || !v || !y ? "&#xa0;": "")), !n.yearshtml) if (n.yearshtml = "", f || !y) c += '<span class="ui-datepicker-year">' + i + "<\/span>";
            else {
                var k = this._get(n, "yearRange").split(":"),
                d = (new Date).getFullYear(),
                g = function(n) {
                    var t = n.match(/c[+-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+-].*/) ? d + parseInt(n, 10) : parseInt(n, 10);
                    return isNaN(t) ? d: t
                },
                s = g(k[0]),
                a = Math.max(s, g(k[1] || ""));
                for (s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; s <= a; s++) n.yearshtml += '<option value="' + s + '"' + (s == i ? ' selected="selected"': "") + ">" + s + "<\/option>";
                n.yearshtml += "<\/select>",
                c += n.yearshtml,
                n.yearshtml = null
            }
            return c += this._get(n, "yearSuffix"),
            p && (c += (f || !v || !y ? "&#xa0;": "") + l),
            c += "<\/div>",
            c
        },
        _adjustInstDate: function(n, t, i) {
            var u = n.drawYear + (i == "Y" ? t: 0),
            f = n.drawMonth + (i == "M" ? t: 0),
            e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i == "D" ? t: 0),
            r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
            n.selectedDay = r.getDate(),
            n.drawMonth = n.selectedMonth = r.getMonth(),
            n.drawYear = n.selectedYear = r.getFullYear(),
            (i == "M" || i == "Y") && this._notifyChange(n)
        },
        _restrictMinMax: function(n, t) {
            var r = this._getMinMaxDate(n, "min"),
            u = this._getMinMaxDate(n, "max"),
            i = r && t < r ? r: t;
            return i = u && i > u ? u: i,
            i
        },
        _notifyChange: function(n) {
            var t = this._get(n, "onChangeMonthYear");
            t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
        },
        _getNumberOfMonths: function(n) {
            var t = this._get(n, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function(n, t) {
            return this._determineDate(n, this._get(n, t + "Date"), null)
        },
        _getDaysInMonth: function(n, t) {
            return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(n, t) {
            return new Date(n, t, 1).getDay()
        },
        _canAdjustMonth: function(n, t, i, r) {
            var f = this._getNumberOfMonths(n),
            u = this._daylightSavingAdjust(new Date(i, r + (t < 0 ? t: f[0] * f[1]), 1));
            return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())),
            this._isInRange(n, u)
        },
        _isInRange: function(n, t) {
            var i = this._getMinMaxDate(n, "min"),
            r = this._getMinMaxDate(n, "max");
            return (!i || t.getTime() >= i.getTime()) && (!r || t.getTime() <= r.getTime())
        },
        _getFormatConfig: function(n) {
            var t = this._get(n, "shortYearCutoff");
            return t = typeof t != "string" ? t: (new Date).getFullYear() % 100 + parseInt(t, 10),
            {
                shortYearCutoff: t,
                dayNamesShort: this._get(n, "dayNamesShort"),
                dayNames: this._get(n, "dayNames"),
                monthNamesShort: this._get(n, "monthNamesShort"),
                monthNames: this._get(n, "monthNames")
            }
        },
        _formatDate: function(n, t, i, r) {
            t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
            var u = t ? typeof t == "object" ? t: this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
            return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
        }
    }),
    n.fn.datepicker = function(t) {
        if (!this.length) return this;
        n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick).find(document.body).append(n.datepicker.dpDiv), n.datepicker.initialized = !0);
        var i = Array.prototype.slice.call(arguments, 1);
        return typeof t != "string" || t != "isDisabled" && t != "getDate" && t != "widget" ? t == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
            typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
        }) : n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i))
    },
    n.datepicker = new e,
    n.datepicker.initialized = !1,
    n.datepicker.uuid = +new Date,
    n.datepicker.version = "1.9.0",
    window["DP_jQuery_" + r] = n
} (jQuery),
function(n, t) {
    var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
    r = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    },
    u = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    };
    n.widget("ui.dialog", {
        version: "1.9.0",
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = n(this).css(t).offset().top;
                    i < 0 && n(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title"),
            typeof this.originalTitle != "string" && (this.originalTitle = ""),
            this.oldPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.options.title = this.options.title || this.originalTitle;
            var f = this,
            t = this.options,
            o = t.title || "&#160;",
            r = (this.uiDialog = n("<div>")).addClass(i + t.dialogClass).css({
                display: "none",
                outline: 0,
                zIndex: t.zIndex
            }).attr("tabIndex", -1).keydown(function(i) {
                t.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === n.ui.keyCode.ESCAPE && (f.close(i), i.preventDefault())
            }).mousedown(function(n) {
                f.moveToTop(!1, n)
            }).appendTo("body"),
            c = this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(r),
            u = (this.uiDialogTitlebar = n("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").prependTo(r),
            e = n("<a href='#'><\/a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(n) {
                n.preventDefault(),
                f.close(n)
            }).appendTo(u),
            l = (this.uiDialogTitlebarCloseText = n("<span>")).addClass("ui-icon ui-icon-closethick").text(t.closeText).appendTo(e),
            s = n("<span>").uniqueId().addClass("ui-dialog-title").html(o).prependTo(u),
            h = (this.uiDialogButtonPane = n("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
            a = (this.uiButtonSet = n("<div>")).addClass("ui-dialog-buttonset").appendTo(h);
            r.attr({
                role: "dialog",
                "aria-labelledby": s.attr("id")
            }),
            u.find("*").add(u).disableSelection(),
            this._hoverable(e),
            this._focusable(e),
            t.draggable && n.fn.draggable && this._makeDraggable(),
            t.resizable && n.fn.resizable && this._makeResizable(),
            this._createButtons(t.buttons),
            this._isOpen = !1,
            n.fn.bgiframe && r.bgiframe(),
            this._on(r, {
                keydown: function(i) {
                    if (t.modal && i.keyCode === n.ui.keyCode.TAB) {
                        var u = n(":tabbable", r),
                        f = u.filter(":first"),
                        e = u.filter(":last");
                        return i.target === e[0] && !i.shiftKey ? (f.focus(1), !1) : i.target === f[0] && i.shiftKey ? (e.focus(1), !1) : void 0
                    }
                }
            })
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _destroy: function() {
            var n, t = this.oldPosition;
            this.overlay && this.overlay.destroy(),
            this.uiDialog.hide(),
            this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),
            this.uiDialog.remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            n = t.parent.children().eq(t.index),
            n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(t) {
            var u = this,
            i, r;
            if (this._isOpen) return ! 1 === this._trigger("beforeClose", t) ? void 0 : (this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this.uiDialog.hide(this.options.hide,
            function() {
                u._trigger("close", t)
            }) : (this.uiDialog.hide(), this._trigger("close", t)), n.ui.dialog.overlay.resize(), this.options.modal && (i = 0, n(".ui-dialog").each(function() {
                this !== u.uiDialog[0] && (r = n(this).css("z-index"), isNaN(r) || (i = Math.max(i, r)))
            }), n.ui.dialog.maxZ = i), this)
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(t, i) {
            var r = this.options,
            u;
            return r.modal && !t || !r.stack && !r.modal ? this._trigger("focus", i) : (r.zIndex > n.ui.dialog.maxZ && (n.ui.dialog.maxZ = r.zIndex), this.overlay && (n.ui.dialog.maxZ += 1, n.ui.dialog.overlay.maxZ = n.ui.dialog.maxZ, this.overlay.$el.css("z-index", n.ui.dialog.overlay.maxZ)), u = {
                scrollTop: this.element.scrollTop(),
                scrollLeft: this.element.scrollLeft()
            },
            n.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", n.ui.dialog.maxZ), this.element.attr(u), this._trigger("focus", i), this)
        },
        open: function() {
            if (!this._isOpen) {
                var t, i = this.options,
                r = this.uiDialog;
                return this._size(),
                this._position(i.position),
                r.show(i.show),
                this.overlay = i.modal ? new n.ui.dialog.overlay(this) : null,
                this.moveToTop(!0),
                t = this.element.find(":tabbable"),
                t.length || (t = this.uiDialogButtonPane.find(":tabbable"), t.length || (t = r)),
                t.eq(0).focus(),
                this._isOpen = !0,
                this._trigger("open"),
                this
            }
        },
        _createButtons: function(t) {
            var u, f, i = this,
            r = !1;
            this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            typeof t == "object" && t !== null && n.each(t,
            function() {
                return ! (r = !0)
            }),
            r ? (n.each(t,
            function(t, r) {
                r = n.isFunction(r) ? {
                    click: r,
                    text: t
                }: r;
                var u = n("<button type='button'>").attr(r, !0).unbind("click").click(function() {
                    r.click.apply(i.element[0], arguments)
                }).appendTo(i.uiButtonSet);
                n.fn.button && u.button()
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
        },
        _makeDraggable: function() {
            function i(n) {
                return {
                    position: n.position,
                    offset: n.offset
                }
            }
            var t = this,
            r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(r, u) {
                    n(this).addClass("ui-dialog-dragging"),
                    t._trigger("dragStart", r, i(u))
                },
                drag: function(n, r) {
                    t._trigger("drag", n, i(r))
                },
                stop: function(u, f) {
                    r.position = [f.position.left - t.document.scrollLeft(), f.position.top - t.document.scrollTop()],
                    n(this).removeClass("ui-dialog-dragging"),
                    t._trigger("dragStop", u, i(f)),
                    n.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(i) {
            function u(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }
            i = i === t ? this.options.resizable: i;
            var f = this,
            r = this.options,
            e = this.uiDialog.css("position"),
            o = typeof i == "string" ? i: "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: r.maxWidth,
                maxHeight: r.maxHeight,
                minWidth: r.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function(t, i) {
                    n(this).addClass("ui-dialog-resizing"),
                    f._trigger("resizeStart", t, u(i))
                },
                resize: function(n, t) {
                    f._trigger("resize", n, u(t))
                },
                stop: function(t, i) {
                    n(this).removeClass("ui-dialog-resizing"),
                    r.height = n(this).height(),
                    r.width = n(this).width(),
                    f._trigger("resizeStop", t, u(i)),
                    n.ui.dialog.overlay.resize()
                }
            }).css("position", e).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var n = this.options;
            return n.height === "auto" ? n.minHeight: Math.min(n.minHeight, n.height)
        },
        _position: function(t) {
            var i = [],
            u = [0, 0],
            r;
            t ? ((typeof t == "string" || typeof t == "object" && "0" in t) && (i = t.split ? t.split(" ") : [t[0], t[1]], i.length === 1 && (i[1] = i[0]), n.each(["left", "top"],
            function(n, t) { + i[n] === i[n] && (u[n] = i[n], i[n] = t)
            }), t = {
                my: i.join(" "),
                at: i.join(" "),
                offset: u.join(" ")
            }), t = n.extend({},
            n.ui.dialog.prototype.options.position, t)) : t = n.ui.dialog.prototype.options.position,
            r = this.uiDialog.is(":visible"),
            r || this.uiDialog.show(),
            this.uiDialog.position(t),
            r || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var e = this,
            i = {},
            f = !1;
            n.each(t,
            function(n, t) {
                e._setOption(n, t),
                n in r && (f = !0),
                n in u && (i[n] = t)
            }),
            f && this._size(),
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", i)
        },
        _setOption: function(t, r) {
            var e, f, u = this.uiDialog;
            switch (t) {
            case "buttons":
                this._createButtons(r);
                break;
            case "closeText":
                this.uiDialogTitlebarCloseText.text("" + r);
                break;
            case "dialogClass":
                u.removeClass(this.options.dialogClass).addClass(i + r);
                break;
            case "disabled":
                r ? u.addClass("ui-dialog-disabled") : u.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                e = u.is(":data(draggable)"),
                e && !r && u.draggable("destroy"),
                !e && r && this._makeDraggable();
                break;
            case "position":
                this._position(r);
                break;
            case "resizable":
                f = u.is(":data(resizable)"),
                f && !r && u.resizable("destroy"),
                f && typeof r == "string" && u.resizable("option", "handles", r),
                !f && r !== !1 && this._makeResizable(r);
                break;
            case "title":
                n(".ui-dialog-title", this.uiDialogTitlebar).html("" + (r || "&#160;"))
            }
            this._super(t, r)
        },
        _size: function() {
            var i, r, u, t = this.options,
            f = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }),
            t.minWidth > t.width && (t.width = t.minWidth),
            i = this.uiDialog.css({
                height: "auto",
                width: t.width
            }).outerHeight(),
            r = Math.max(0, t.minHeight - i),
            t.height === "auto" ? n.support.minHeight ? this.element.css({
                minHeight: r,
                height: "auto"
            }) : (this.uiDialog.show(), u = this.element.css("height", "auto").height(), f || this.uiDialog.hide(), this.element.height(Math.max(u, r))) : this.element.height(Math.max(t.height - i, 0)),
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }),
    n.extend(n.ui.dialog, {
        uuid: 0,
        maxZ: 0,
        getTitleId: function(n) {
            var t = n.attr("id");
            return t || (this.uuid += 1, t = this.uuid),
            "ui-dialog-title-" + t
        },
        overlay: function(t) {
            this.$el = n.ui.dialog.overlay.create(t)
        }
    }),
    n.extend(n.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: n.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),
        function(n) {
            return n + ".dialog-overlay"
        }).join(" "),
        create: function(t) {
            this.instances.length === 0 && (setTimeout(function() {
                n.ui.dialog.overlay.instances.length && n(document).bind(n.ui.dialog.overlay.events,
                function(t) {
                    if (n(t.target).zIndex() < n.ui.dialog.overlay.maxZ) return ! 1
                })
            },
            1), n(window).bind("resize.dialog-overlay", n.ui.dialog.overlay.resize));
            var i = this.oldInstances.pop() || n("<div>").addClass("ui-widget-overlay");
            return n(document).bind("keydown.dialog-overlay",
            function(r) {
                var u = n.ui.dialog.overlay.instances;
                u.length !== 0 && u[u.length - 1] === i && t.options.closeOnEscape && !r.isDefaultPrevented() && r.keyCode && r.keyCode === n.ui.keyCode.ESCAPE && (t.close(r), r.preventDefault())
            }),
            i.appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            }),
            n.fn.bgiframe && i.bgiframe(),
            this.instances.push(i),
            i
        },
        destroy: function(t) {
            var r = n.inArray(t, this.instances),
            i = 0;
            r !== -1 && this.oldInstances.push(this.instances.splice(r, 1)[0]),
            this.instances.length === 0 && n([document, window]).unbind(".dialog-overlay"),
            t.height(0).width(0).remove(),
            n.each(this.instances,
            function() {
                i = Math.max(i, this.css("z-index"))
            }),
            this.maxZ = i
        },
        height: function() {
            var t, i;
            return n.browser.msie ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < i ? n(window).height() + "px": t + "px") : n(document).height() + "px"
        },
        width: function() {
            var t, i;
            return n.browser.msie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < i ? n(window).width() + "px": t + "px") : n(document).width() + "px"
        },
        resize: function() {
            var t = n([]);
            n.each(n.ui.dialog.overlay.instances,
            function() {
                t = t.add(this)
            }),
            t.css({
                width: 0,
                height: 0
            }).css({
                width: n.ui.dialog.overlay.width(),
                height: n.ui.dialog.overlay.height()
            })
        }
    }),
    n.extend(n.ui.dialog.overlay.prototype, {
        destroy: function() {
            n.ui.dialog.overlay.destroy(this.$el)
        }
    })
} (jQuery),
function(n) {
    var i = /up|down|vertical/,
    r = /up|left|vertical|horizontal/;
    n.effects.effect.blind = function(t, u) {
        var f = n(this),
        c = ["position", "top", "bottom", "left", "right", "height", "width"],
        p = n.effects.setMode(f, t.mode || "hide"),
        w = t.direction || "up",
        o = i.test(w),
        l = o ? "height": "width",
        a = o ? "top": "left",
        b = r.test(w),
        v = {},
        y = p === "show",
        e,
        s,
        h;
        f.parent().is(".ui-effects-wrapper") ? n.effects.save(f.parent(), c) : n.effects.save(f, c),
        f.show(),
        e = n.effects.createWrapper(f).css({
            overflow: "hidden"
        }),
        s = e[l](),
        h = parseFloat(e.css(a)) || 0,
        v[l] = y ? s: 0,
        b || (f.css(o ? "bottom": "right", 0).css(o ? "top": "left", "auto").css({
            position: "absolute"
        }), v[a] = y ? h: s + h),
        y && (e.css(l, 0), b || e.css(a, h + s)),
        e.animate(v, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function() {
                p === "hide" && f.hide(),
                n.effects.restore(f, c),
                n.effects.removeWrapper(f),
                u()
            }
        })
    }
} (jQuery),
function(n) {
    n.effects.effect.bounce = function(t, i) {
        var r = n(this),
        v = ["position", "top", "bottom", "left", "right", "height", "width"],
        k = n.effects.setMode(r, t.mode || "effect"),
        f = k === "hide",
        y = k === "show",
        h = t.direction || "up",
        u = t.distance,
        p = t.times || 5,
        d = p * 2 + (y || f ? 1 : 0),
        c = t.duration / d,
        l = t.easing,
        e = h === "up" || h === "down" ? "top": "left",
        w = h === "up" || h === "left",
        b,
        o,
        s,
        a = r.queue(),
        g = a.length;
        for ((y || f) && v.push("opacity"), n.effects.save(r, v), r.show(), n.effects.createWrapper(r), u || (u = r[e === "top" ? "outerHeight": "outerWidth"]() / 3), y && (s = {
            opacity: 1
        },
        s[e] = 0, r.css("opacity", 0).css(e, w ? -u * 2 : u * 2).animate(s, c, l)), f && (u /= Math.pow(2, p - 1)), s = {},
        s[e] = 0, b = 0; b < p; b++) o = {},
        o[e] = (w ? "-=": "+=") + u,
        r.animate(o, c, l).animate(s, c, l),
        u = f ? u * 2 : u / 2;
        f && (o = {
            opacity: 0
        },
        o[e] = (w ? "-=": "+=") + u, r.animate(o, c, l)),
        r.queue(function() {
            f && r.hide(),
            n.effects.restore(r, v),
            n.effects.removeWrapper(r),
            i()
        }),
        g > 1 && a.splice.apply(a, [1, 0].concat(a.splice(g, d + 1))),
        r.dequeue()
    }
} (jQuery),
function(n) {
    n.effects.effect.clip = function(t, i) {
        var r = n(this),
        h = ["position", "top", "bottom", "left", "right", "height", "width"],
        v = n.effects.setMode(r, t.mode || "hide"),
        f = v === "show",
        y = t.direction || "vertical",
        c = y === "vertical",
        o = c ? "height": "width",
        l = c ? "top": "left",
        s = {},
        a,
        u,
        e;
        n.effects.save(r, h),
        r.show(),
        a = n.effects.createWrapper(r).css({
            overflow: "hidden"
        }),
        u = r[0].tagName === "IMG" ? a: r,
        e = u[o](),
        f && (u.css(o, 0), u.css(l, e / 2)),
        s[o] = f ? e: 0,
        s[l] = f ? 0 : e / 2,
        u.animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                f || r.hide(),
                n.effects.restore(r, h),
                n.effects.removeWrapper(r),
                i()
            }
        })
    }
} (jQuery),
function(n) {
    n.effects.effect.drop = function(t, i) {
        var r = n(this),
        h = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
        c = n.effects.setMode(r, t.mode || "hide"),
        e = c === "show",
        u = t.direction || "left",
        o = u === "up" || u === "down" ? "top": "left",
        s = u === "up" || u === "left" ? "pos": "neg",
        l = {
            opacity: e ? 1 : 0
        },
        f;
        n.effects.save(r, h),
        r.show(),
        n.effects.createWrapper(r),
        f = t.distance || r[o === "top" ? "outerHeight": "outerWidth"](!0) / 2,
        e && r.css("opacity", 0).css(o, s === "pos" ? -f: f),
        l[o] = (e ? s === "pos" ? "+=": "-=": s === "pos" ? "-=": "+=") + f,
        r.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                c === "hide" && r.hide(),
                n.effects.restore(r, h),
                n.effects.removeWrapper(r),
                i()
            }
        })
    }
} (jQuery),
function(n) {
    n.effects.effect.explode = function(t, i) {
        function b() {
            l.push(this),
            l.length === o * c && k()
        }
        function k() {
            r.css({
                visibility: "visible"
            }),
            n(l).remove(),
            u || r.hide(),
            i()
        }
        for (var o = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = o, r = n(this), d = n.effects.setMode(r, t.mode || "hide"), u = d === "show", w = r.show().css("visibility", "hidden").offset(), s = Math.ceil(r.outerWidth() / c), h = Math.ceil(r.outerHeight() / o), l = [], f, a, v, y, p, e = 0; e < o; e++) for (v = w.top + e * h, p = e - (o - 1) / 2, f = 0; f < c; f++) a = w.left + f * s,
        y = f - (c - 1) / 2,
        r.clone().appendTo("body").wrap("<div><\/div>").css({
            position: "absolute",
            visibility: "visible",
            left: -f * s,
            top: -e * h
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: s,
            height: h,
            left: a + (u ? y * s: 0),
            top: v + (u ? p * h: 0),
            opacity: u ? 0 : 1
        }).animate({
            left: a + (u ? 0 : y * s),
            top: v + (u ? 0 : p * h),
            opacity: u ? 1 : 0
        },
        t.duration || 500, t.easing, b)
    }
} (jQuery),
function(n) {
    n.effects.effect.fade = function(t, i) {
        var r = n(this),
        u = n.effects.setMode(r, t.mode || "toggle");
        r.animate({
            opacity: u
        },
        {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }
} (jQuery),
function(n) {
    n.effects.effect.fold = function(t, i) {
        var r = n(this),
        s = ["position", "top", "bottom", "left", "right", "height", "width"],
        h = n.effects.setMode(r, t.mode || "hide"),
        e = h === "show",
        c = h === "hide",
        f = t.size || 15,
        l = /([0-9]+)%/.exec(f),
        a = !!t.horizFirst,
        v = e !== a,
        y = v ? ["width", "height"] : ["height", "width"],
        p = t.duration / 2,
        u,
        o,
        w = {},
        b = {};
        n.effects.save(r, s),
        r.show(),
        u = n.effects.createWrapper(r).css({
            overflow: "hidden"
        }),
        o = v ? [u.width(), u.height()] : [u.height(), u.width()],
        l && (f = parseInt(l[1], 10) / 100 * o[c ? 0 : 1]),
        e && u.css(a ? {
            height: 0,
            width: f
        }: {
            height: f,
            width: 0
        }),
        w[y[0]] = e ? o[0] : f,
        b[y[1]] = e ? o[1] : 0,
        u.animate(w, p, t.easing).animate(b, p, t.easing,
        function() {
            c && r.hide(),
            n.effects.restore(r, s),
            n.effects.removeWrapper(r),
            i()
        })
    }
} (jQuery),
function(n) {
    n.effects.effect.highlight = function(t, i) {
        var r = n(this),
        u = ["backgroundImage", "backgroundColor", "opacity"],
        f = n.effects.setMode(r, t.mode || "show"),
        e = {
            backgroundColor: r.css("backgroundColor")
        };
        f === "hide" && (e.opacity = 0),
        n.effects.save(r, u),
        r.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(e, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                f === "hide" && r.hide(),
                n.effects.restore(r, u),
                i()
            }
        })
    }
} (jQuery),
function(n) {
    n.effects.effect.pulsate = function(t, i) {
        var r = n(this),
        e = n.effects.setMode(r, t.mode || "show"),
        h = e === "show",
        a = e === "hide",
        v = h || e === "hide",
        o = (t.times || 5) * 2 + (v ? 1 : 0),
        c = t.duration / o,
        u = 0,
        f = r.queue(),
        l = f.length,
        s;
        for ((h || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1), s = 1; s < o; s++) r.animate({
            opacity: u
        },
        c, t.easing),
        u = 1 - u;
        r.animate({
            opacity: u
        },
        c, t.easing),
        r.queue(function() {
            a && r.hide(),
            i()
        }),
        l > 1 && f.splice.apply(f, [1, 0].concat(f.splice(l, o + 1))),
        r.dequeue()
    }
} (jQuery),
function(n) {
    n.effects.effect.puff = function(t, i) {
        var r = n(this),
        f = n.effects.setMode(r, t.mode || "hide"),
        e = f === "hide",
        o = parseInt(t.percent, 10) || 150,
        s = o / 100,
        u = {
            height: r.height(),
            width: r.width()
        };
        n.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: f,
            complete: i,
            percent: e ? o: 100,
            from: e ? u: {
                height: u.height * s,
                width: u.width * s
            }
        }),
        r.effect(t)
    },
    n.effects.effect.scale = function(t, i) {
        var u = n(this),
        r = n.extend(!0, {},
        t),
        f = n.effects.setMode(u, t.mode || "effect"),
        s = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : f === "hide" ? 0 : 100),
        h = t.direction || "both",
        c = t.origin,
        e = {
            height: u.height(),
            width: u.width(),
            outerHeight: u.outerHeight(),
            outerWidth: u.outerWidth()
        },
        o = {
            y: h !== "horizontal" ? s / 100 : 1,
            x: h !== "vertical" ? s / 100 : 1
        };
        r.effect = "size",
        r.queue = !1,
        r.complete = i,
        f !== "effect" && (r.origin = c || ["middle", "center"], r.restore = !0),
        r.from = t.from || (f === "show" ? {
            height: 0,
            width: 0
        }: e),
        r.to = {
            height: e.height * o.y,
            width: e.width * o.x,
            outerHeight: e.outerHeight * o.y,
            outerWidth: e.outerWidth * o.x
        },
        r.fade && (f === "show" && (r.from.opacity = 0, r.to.opacity = 1), f === "hide" && (r.from.opacity = 1, r.to.opacity = 0)),
        u.effect(r)
    },
    n.effects.effect.size = function(t, i) {
        var r = n(this),
        e = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
        p = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
        v = ["width", "height", "overflow"],
        a = ["fontSize"],
        o = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        s = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        y = n.effects.setMode(r, t.mode || "effect"),
        c = t.restore || y !== "effect",
        h = t.scale || "both",
        w = t.origin || ["middle", "center"],
        f,
        l,
        u,
        b = r.css("position");
        y === "show" && r.show(),
        f = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        },
        r.from = t.from || f,
        r.to = t.to || f,
        u = {
            from: {
                y: r.from.height / f.height,
                x: r.from.width / f.width
            },
            to: {
                y: r.to.height / f.height,
                x: r.to.width / f.width
            }
        },
        (h === "box" || h === "both") && (u.from.y !== u.to.y && (e = e.concat(o), r.from = n.effects.setTransition(r, o, u.from.y, r.from), r.to = n.effects.setTransition(r, o, u.to.y, r.to)), u.from.x !== u.to.x && (e = e.concat(s), r.from = n.effects.setTransition(r, s, u.from.x, r.from), r.to = n.effects.setTransition(r, s, u.to.x, r.to))),
        (h === "content" || h === "both") && u.from.y !== u.to.y && (e = e.concat(a), r.from = n.effects.setTransition(r, a, u.from.y, r.from), r.to = n.effects.setTransition(r, a, u.to.y, r.to)),
        n.effects.save(r, c ? e: p),
        r.show(),
        n.effects.createWrapper(r),
        r.css("overflow", "hidden").css(r.from),
        w && (l = n.effects.getBaseline(w, f), r.from.top = (f.outerHeight - r.outerHeight()) * l.y, r.from.left = (f.outerWidth - r.outerWidth()) * l.x, r.to.top = (f.outerHeight - r.to.outerHeight) * l.y, r.to.left = (f.outerWidth - r.to.outerWidth) * l.x),
        r.css(r.from),
        (h === "content" || h === "both") && (o = o.concat(["marginTop", "marginBottom"]).concat(a), s = s.concat(["marginLeft", "marginRight"]), v = e.concat(o).concat(s), r.find("*[width]").each(function() {
            var i = n(this),
            r = {
                height: i.height(),
                width: i.width()
            };
            c && n.effects.save(i, v),
            i.from = {
                height: r.height * u.from.y,
                width: r.width * u.from.x
            },
            i.to = {
                height: r.height * u.to.y,
                width: r.width * u.to.x
            },
            u.from.y !== u.to.y && (i.from = n.effects.setTransition(i, o, u.from.y, i.from), i.to = n.effects.setTransition(i, o, u.to.y, i.to)),
            u.from.x !== u.to.x && (i.from = n.effects.setTransition(i, s, u.from.x, i.from), i.to = n.effects.setTransition(i, s, u.to.x, i.to)),
            i.css(i.from),
            i.animate(i.to, t.duration, t.easing,
            function() {
                c && n.effects.restore(i, v)
            })
        })),
        r.animate(r.to, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                r.to.opacity === 0 && r.css("opacity", r.from.opacity),
                y === "hide" && r.hide(),
                n.effects.restore(r, c ? e: p),
                c || (b === "static" ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : n.each(["top", "left"],
                function(n, t) {
                    r.css(t,
                    function(t, i) {
                        var f = parseInt(i, 10),
                        u = n ? r.to.left: r.to.top;
                        return i === "auto" ? u + "px": f + u + "px"
                    })
                })),
                n.effects.removeWrapper(r),
                i()
            }
        })
    }
} (jQuery),
function(n) {
    n.effects.effect.shake = function(t, i) {
        var r = n(this),
        v = ["position", "top", "bottom", "left", "right", "height", "width"],
        k = n.effects.setMode(r, t.mode || "effect"),
        f = t.direction || "left",
        o = t.distance || 20,
        y = t.times || 3,
        p = y * 2 + 1,
        u = Math.round(t.duration / p),
        s = f === "up" || f === "down" ? "top": "left",
        h = f === "up" || f === "left",
        c = {},
        l = {},
        w = {},
        a,
        e = r.queue(),
        b = e.length;
        for (n.effects.save(r, v), r.show(), n.effects.createWrapper(r), c[s] = (h ? "-=": "+=") + o, l[s] = (h ? "+=": "-=") + o * 2, w[s] = (h ? "-=": "+=") + o * 2, r.animate(c, u, t.easing), a = 1; a < y; a++) r.animate(l, u, t.easing).animate(w, u, t.easing);
        r.animate(l, u, t.easing).animate(c, u / 2, t.easing).queue(function() {
            k === "hide" && r.hide(),
            n.effects.restore(r, v),
            n.effects.removeWrapper(r),
            i()
        }),
        b > 1 && e.splice.apply(e, [1, 0].concat(e.splice(b, p + 1))),
        r.dequeue()
    }
} (jQuery),
function(n) {
    n.effects.effect.slide = function(t, i) {
        var r = n(this),
        s = ["position", "top", "bottom", "left", "right", "width", "height"],
        h = n.effects.setMode(r, t.mode || "show"),
        c = h === "show",
        f = t.direction || "left",
        e = f === "up" || f === "down" ? "top": "left",
        o = f === "up" || f === "left",
        u,
        l = {};
        n.effects.save(r, s),
        r.show(),
        u = t.distance || r[e === "top" ? "outerHeight": "outerWidth"](!0),
        n.effects.createWrapper(r).css({
            overflow: "hidden"
        }),
        c && r.css(e, o ? isNaN(u) ? "-" + u: -u: u),
        l[e] = (c ? o ? "+=": "-=": o ? "-=": "+=") + u,
        r.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                h === "hide" && r.hide(),
                n.effects.restore(r, s),
                n.effects.removeWrapper(r),
                i()
            }
        })
    }
} (jQuery),
function(n) {
    n.effects.effect.transfer = function(t, i) {
        var u = n(this),
        r = n(t.to),
        f = r.css("position") === "fixed",
        e = n("body"),
        o = f ? e.scrollTop() : 0,
        s = f ? e.scrollLeft() : 0,
        h = r.offset(),
        l = {
            top: h.top - o,
            left: h.left - s,
            height: r.innerHeight(),
            width: r.innerWidth()
        },
        c = u.offset(),
        a = n('<div class="ui-effects-transfer"><\/div>').appendTo(document.body).addClass(t.className).css({
            top: c.top - o,
            left: c.left - s,
            height: u.innerHeight(),
            width: u.innerWidth(),
            position: f ? "fixed": "absolute"
        }).animate(l, t.duration, t.easing,
        function() {
            a.remove(),
            i()
        })
    }
} (jQuery),
function(n) {
    var i = !1;
    n.widget("ui.menu", {
        version: "1.9.0",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, n.proxy(function(n) {
                this.options.disabled && n.preventDefault()
            },
            this)),
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
            this._on({
                "mousedown .ui-menu-item > a": function(n) {
                    n.preventDefault()
                },
                "click .ui-state-disabled > a": function(n) {
                    n.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(t) {
                    var r = n(t.target).closest(".ui-menu-item"); ! i && r.not(".ui-state-disabled").length && (i = !0, this.select(t), r.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    var i = n(t.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"),
                    this.focus(t, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(n, t) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(n, i)
                },
                blur: function(t) {
                    this._delay(function() {
                        n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(t) {
                    n(t.target).closest(".ui-menu").length || this.collapseAll(t),
                    i = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = n(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }),
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(t) {
            function o(n) {
                return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var i, f, r, e, u, s = !0;
            switch (t.keyCode) {
            case n.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case n.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case n.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case n.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case n.ui.keyCode.UP:
                this.previous(t);
                break;
            case n.ui.keyCode.DOWN:
                this.next(t);
                break;
            case n.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case n.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case n.ui.keyCode.ENTER:
            case n.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case n.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                s = !1,
                f = this.previousFilter || "",
                r = String.fromCharCode(t.keyCode),
                e = !1,
                clearTimeout(this.filterTimer),
                r === f ? e = !0 : r = f + r,
                u = new RegExp("^" + o(r), "i"),
                i = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return u.test(n(this).children("a").text())
                }),
                i = e && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i,
                i.length || (r = String.fromCharCode(t.keyCode), u = new RegExp("^" + o(r), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return u.test(n(this).children("a").text())
                })),
                i.length ? (this.focus(t, i), i.length > 1 ? (this.previousFilter = r, this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                },
                1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            s && t.preventDefault()
        },
        _activate: function(n) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(n) : this.select(n))
        },
        refresh: function() {
            var t, r = this.options.icons.submenu,
            i = this.element.find(this.options.menus + ":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            });
            t = i.add(this.element),
            t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            t.children(":not(.ui-menu-item)").each(function() {
                var t = n(this);
                /[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
            }),
            t.children(".ui-state-disabled").attr("aria-disabled", "true"),
            i.each(function() {
                var t = n(this),
                i = t.prev("a"),
                u = n("<span>").addClass("ui-menu-icon ui-icon " + r).data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(u),
                t.attr("aria-labelledby", i.attr("id"))
            }),
            this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        focus: function(n, t) {
            var i, r;
            this.blur(n, n && n.type === "focus"),
            this._scrollIntoView(t),
            this.active = t.first(),
            r = this.active.children("a").addClass("ui-state-focus"),
            this.options.role && this.element.attr("aria-activedescendant", r.attr("id")),
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
            n && n.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                this._close()
            },
            this.delay),
            i = t.children(".ui-menu"),
            i.length && /^mouse/.test(n.type) && this._startOpening(i),
            this.activeMenu = t.parent(),
            this._trigger("focus", n, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var e, o, i, r, u, f;
            this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.height(), i < 0 ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
        },
        blur: function(n, t) { (t || clearTimeout(this.timer), this.active) && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", n, {
                item: this.active
            }))
        },
        _startOpening: function(n) { (clearTimeout(this.timer), n.attr("aria-hidden") === "true") && (this.timer = this._delay(function() {
                this._close(),
                this._open(n)
            },
            this.delay))
        },
        _open: function(t) {
            var i = n.extend({
                of: this.active
            },
            this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var r = i ? this.element: n(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element),
                this._close(r),
                this.blur(t),
                this.activeMenu = r
            },
            this.delay)
        },
        _close: function(n) {
            n || (n = this.active ? this.active.parent() : this.element),
            n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(n) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(n, t))
        },
        expand: function(n) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(n, t)
            }))
        },
        next: function(n) {
            this._move("next", "first", n)
        },
        previous: function(n) {
            this._move("prev", "last", n)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(n, t, i) {
            var r;
            this.active && (r = n === "first" || n === "last" ? this.active[n === "first" ? "prevAll": "nextAll"](".ui-menu-item").eq( - 1) : this.active[n + "All"](".ui-menu-item").eq(0)),
            r && r.length && this.active || (r = this.activeMenu.children(".ui-menu-item")[t]()),
            this.focus(i, r)
        },
        nextPage: function(t) {
            var i, r, u;
            if (!this.active) {
                this.next(t);
                return
            }
            this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = n(this),
                i.offset().top - r - u < 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last": "first"]()))
        },
        previousPage: function(t) {
            var i, r, u;
            if (!this.active) {
                this.next(t);
                return
            }
            this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = n(this),
                i.offset().top - r + u > 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first()))
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || n(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0),
            this._trigger("select", t, i)
        }
    })
} (jQuery),
function(n, t) {
    function e(n, t, i) {
        return [parseInt(n[0], 10) * (a.test(n[0]) ? t / 100 : 1), parseInt(n[1], 10) * (a.test(n[1]) ? i / 100 : 1)]
    }
    function r(t, i) {
        return parseInt(n.css(t, i), 10) || 0
    }
    n.ui = n.ui || {};
    var f, u = Math.max,
    i = Math.abs,
    o = Math.round,
    s = /left|center|right/,
    h = /top|center|bottom/,
    c = /[\+\-]\d+%?/,
    l = /^\w+/,
    a = /%$/,
    v = n.fn.position;
    n.position = {
        scrollbarWidth: function() {
            if (f !== t) return f;
            var u, r, i = n("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
            e = i.children()[0];
            return n("body").append(i),
            u = e.offsetWidth,
            i.css("overflow", "scroll"),
            r = e.offsetWidth,
            u === r && (r = i[0].clientWidth),
            i.remove(),
            f = u - r
        },
        getScrollInfo: function(t) {
            var i = t.isWindow ? "": t.element.css("overflow-x"),
            r = t.isWindow ? "": t.element.css("overflow-y"),
            u = i === "scroll" || i === "auto" && t.width < t.element[0].scrollWidth,
            f = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
            return {
                width: u ? n.position.scrollbarWidth() : 0,
                height: f ? n.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(t) {
            var i = n(t || window),
            r = n.isWindow(i[0]);
            return {
                element: i,
                isWindow: r,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: r ? i.width() : i.outerWidth(),
                height: r ? i.height() : i.outerHeight()
            }
        }
    },
    n.fn.position = function(t) {
        if (!t || !t.of) return v.apply(this, arguments);
        t = n.extend({},
        t);
        var b, f, a, p, w, y = n(t.of),
        nt = n.position.getWithinInfo(t.within),
        tt = n.position.getScrollInfo(nt),
        k = y[0],
        d = (t.collision || "flip").split(" "),
        g = {};
        return k.nodeType === 9 ? (f = y.width(), a = y.height(), p = {
            top: 0,
            left: 0
        }) : n.isWindow(k) ? (f = y.width(), a = y.height(), p = {
            top: y.scrollTop(),
            left: y.scrollLeft()
        }) : k.preventDefault ? (t.at = "left top", f = a = 0, p = {
            top: k.pageY,
            left: k.pageX
        }) : (f = y.outerWidth(), a = y.outerHeight(), p = y.offset()),
        w = n.extend({},
        p),
        n.each(["my", "at"],
        function() {
            var n = (t[this] || "").split(" "),
            i,
            r;
            n.length === 1 && (n = s.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]),
            n[0] = s.test(n[0]) ? n[0] : "center",
            n[1] = h.test(n[1]) ? n[1] : "center",
            i = c.exec(n[0]),
            r = c.exec(n[1]),
            g[this] = [i ? i[0] : 0, r ? r[0] : 0],
            t[this] = [l.exec(n[0])[0], l.exec(n[1])[0]]
        }),
        d.length === 1 && (d[1] = d[0]),
        t.at[0] === "right" ? w.left += f: t.at[0] === "center" && (w.left += f / 2),
        t.at[1] === "bottom" ? w.top += a: t.at[1] === "center" && (w.top += a / 2),
        b = e(g.at, f, a),
        w.left += b[0],
        w.top += b[1],
        this.each(function() {
            var k, it, h = n(this),
            c = h.outerWidth(),
            l = h.outerHeight(),
            rt = r(this, "marginLeft"),
            ut = r(this, "marginTop"),
            ft = c + rt + r(this, "marginRight") + tt.width,
            et = l + ut + r(this, "marginBottom") + tt.height,
            s = n.extend({},
            w),
            v = e(g.my, h.outerWidth(), h.outerHeight());
            t.my[0] === "right" ? s.left -= c: t.my[0] === "center" && (s.left -= c / 2),
            t.my[1] === "bottom" ? s.top -= l: t.my[1] === "center" && (s.top -= l / 2),
            s.left += v[0],
            s.top += v[1],
            n.support.offsetFractions || (s.left = o(s.left), s.top = o(s.top)),
            k = {
                marginLeft: rt,
                marginTop: ut
            },
            n.each(["left", "top"],
            function(i, r) {
                n.ui.position[d[i]] && n.ui.position[d[i]][r](s, {
                    targetWidth: f,
                    targetHeight: a,
                    elemWidth: c,
                    elemHeight: l,
                    collisionPosition: k,
                    collisionWidth: ft,
                    collisionHeight: et,
                    offset: [b[0] + v[0], b[1] + v[1]],
                    my: t.my,
                    at: t.at,
                    within: nt,
                    elem: h
                })
            }),
            n.fn.bgiframe && h.bgiframe(),
            t.using && (it = function(n) {
                var e = p.left - s.left,
                v = e + f - c,
                o = p.top - s.top,
                w = o + a - l,
                r = {
                    target: {
                        element: y,
                        left: p.left,
                        top: p.top,
                        width: f,
                        height: a
                    },
                    element: {
                        element: h,
                        left: s.left,
                        top: s.top,
                        width: c,
                        height: l
                    },
                    horizontal: v < 0 ? "left": e > 0 ? "right": "center",
                    vertical: w < 0 ? "top": o > 0 ? "bottom": "middle"
                };
                f < c && i(e + v) < f && (r.horizontal = "center"),
                a < l && i(o + w) < a && (r.vertical = "middle"),
                r.important = u(i(e), i(v)) > u(i(o), i(w)) ? "horizontal": "vertical",
                t.using.call(this, n, r)
            }),
            h.offset(n.extend(s, {
                using: it
            }))
        })
    },
    n.ui.position = {
        fit: {
            left: function(n, t) {
                var e = t.within,
                r = e.isWindow ? e.scrollLeft: e.offset.left,
                o = e.width,
                s = n.left - t.collisionPosition.marginLeft,
                i = r - s,
                f = s + t.collisionWidth - o - r,
                h;
                t.collisionWidth > o ? i > 0 && f <= 0 ? (h = n.left + i + t.collisionWidth - o - r, n.left += i - h) : n.left = f > 0 && i <= 0 ? r: i > f ? r + o - t.collisionWidth: r: i > 0 ? n.left += i: f > 0 ? n.left -= f: n.left = u(n.left - s, n.left)
            },
            top: function(n, t) {
                var o = t.within,
                r = o.isWindow ? o.scrollTop: o.offset.top,
                e = t.within.height,
                s = n.top - t.collisionPosition.marginTop,
                i = r - s,
                f = s + t.collisionHeight - e - r,
                h;
                t.collisionHeight > e ? i > 0 && f <= 0 ? (h = n.top + i + t.collisionHeight - e - r, n.top += i - h) : n.top = f > 0 && i <= 0 ? r: i > f ? r + e - t.collisionHeight: r: i > 0 ? n.top += i: f > 0 ? n.top -= f: n.top = u(n.top - s, n.top)
            }
        },
        flip: {
            left: function(n, t) {
                var r = t.within,
                y = r.offset.left + r.scrollLeft,
                c = r.width,
                o = r.isWindow ? r.scrollLeft: r.offset.left,
                l = n.left - t.collisionPosition.marginLeft,
                a = l - o,
                v = l + t.collisionWidth - c - o,
                u = t.my[0] === "left" ? -t.elemWidth: t.my[0] === "right" ? t.elemWidth: 0,
                f = t.at[0] === "left" ? t.targetWidth: t.at[0] === "right" ? -t.targetWidth: 0,
                e = -2 * t.offset[0],
                s,
                h;
                a < 0 ? (s = n.left + u + f + e + t.collisionWidth - c - y, (s < 0 || s < i(a)) && (n.left += u + f + e)) : v > 0 && (h = n.left - t.collisionPosition.marginLeft + u + f + e - o, (h > 0 || i(h) < v) && (n.left += u + f + e))
            },
            top: function(n, t) {
                var r = t.within,
                y = r.offset.top + r.scrollTop,
                a = r.height,
                o = r.isWindow ? r.scrollTop: r.offset.top,
                v = n.top - t.collisionPosition.marginTop,
                s = v - o,
                h = v + t.collisionHeight - a - o,
                p = t.my[1] === "top",
                u = p ? -t.elemHeight: t.my[1] === "bottom" ? t.elemHeight: 0,
                f = t.at[1] === "top" ? t.targetHeight: t.at[1] === "bottom" ? -t.targetHeight: 0,
                e = -2 * t.offset[1],
                c,
                l;
                s < 0 ? (l = n.top + u + f + e + t.collisionHeight - a - y, n.top + u + f + e > s && (l < 0 || l < i(s)) && (n.top += u + f + e)) : h > 0 && (c = n.top - t.collisionPosition.marginTop + u + f + e - o, n.top + u + f + e > h && (c > 0 || i(c) < h) && (n.top += u + f + e))
            }
        },
        flipfit: {
            left: function() {
                n.ui.position.flip.left.apply(this, arguments),
                n.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                n.ui.position.flip.top.apply(this, arguments),
                n.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function() {
        var t, i, r, u, f, e = document.getElementsByTagName("body")[0],
        o = document.createElement("div");
        t = document.createElement(e ? "div": "body"),
        r = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        },
        e && n.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (f in r) t.style[f] = r[f];
        t.appendChild(o),
        i = e || document.documentElement,
        i.insertBefore(t, i.firstChild),
        o.style.cssText = "position: absolute; left: 10.7432222px;",
        u = n(o).offset().left,
        n.support.offsetFractions = u > 10 && u < 11,
        t.innerHTML = "",
        i.removeChild(t)
    } (),
    n.uiBackCompat !== !1 &&
    function(n) {
        var i = n.fn.position;
        n.fn.position = function(r) {
            if (!r || !r.offset) return i.call(this, r);
            var u = r.offset.split(" "),
            f = r.at.split(" ");
            return u.length === 1 && (u[1] = u[0]),
            /^\d/.test(u[0]) && (u[0] = "+" + u[0]),
            /^\d/.test(u[1]) && (u[1] = "+" + u[1]),
            f.length === 1 && (/left|center|right/.test(f[0]) ? f[1] = "center": (f[1] = f[0], f[0] = "center")),
            i.call(this, n.extend(r, {
                at: f[0] + u[0] + " " + f[1] + u[1],
                offset: t
            }))
        }
    } (jQuery)
} (jQuery),
function(n, t) {
    n.widget("ui.progressbar", {
        version: "1.9.0",
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }),
            this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element),
            this.oldValue = this._value(),
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function(n) {
            return n === t ? this._value() : (this._setOption("value", n), this)
        },
        _setOption: function(n, t) {
            n === "value" && (this.options.value = t, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")),
            this._super(n, t)
        },
        _value: function() {
            var n = this.options.value;
            return typeof n != "number" && (n = 0),
            Math.min(this.options.max, Math.max(this.min, n))
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function() {
            var n = this.value(),
            t = this._percentage();
            this.oldValue !== n && (this.oldValue = n, this._trigger("change")),
            this.valueDiv.toggle(n > this.min).toggleClass("ui-corner-right", n === this.options.max).width(t.toFixed(0) + "%"),
            this.element.attr("aria-valuenow", n)
        }
    })
} (jQuery),
function(n) {
    var i = 5;
    n.widget("ui.slider", n.ui.mouse, {
        version: "1.9.0",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var r, t = this.options,
            u = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
            e = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'><\/a>",
            o = t.values && t.values.length || 1,
            f = [];
            for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (t.disabled ? " ui-slider-disabled ui-disabled": "")), this.range = n([]), t.range && (t.range === !0 && (t.values || (t.values = [this._valueMin(), this._valueMin()]), t.values.length && t.values.length !== 2 && (t.values = [t.values[0], t.values[0]])), this.range = n("<div><\/div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range: ""))), r = u.length; r < o; r++) f.push(e);
            this.handles = u.add(n(f.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.add(this.range).filter("a").click(function(n) {
                n.preventDefault()
            }).mouseenter(function() {
                t.disabled || n(this).addClass("ui-state-hover")
            }).mouseleave(function() {
                n(this).removeClass("ui-state-hover")
            }).focus(function() {
                t.disabled ? n(this).blur() : (n(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), n(this).addClass("ui-state-focus"))
            }).blur(function() {
                n(this).removeClass("ui-state-focus")
            }),
            this.handles.each(function(t) {
                n(this).data("ui-slider-handle-index", t)
            }),
            this._on(this.handles, {
                keydown: function(t) {
                    var o, u, r, f, e = n(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_UP:
                    case n.ui.keyCode.PAGE_DOWN:
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, n(t.target).addClass("ui-state-active"), o = this._start(t, e), o === !1)) return
                    }
                    f = this.options.step,
                    u = this.options.values && this.options.values.length ? r = this.values(e) : r = this.value();
                    switch (t.keyCode) {
                    case n.ui.keyCode.HOME:
                        r = this._valueMin();
                        break;
                    case n.ui.keyCode.END:
                        r = this._valueMax();
                        break;
                    case n.ui.keyCode.PAGE_UP:
                        r = this._trimAlignValue(u + (this._valueMax() - this._valueMin()) / i);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        r = this._trimAlignValue(u - (this._valueMax() - this._valueMin()) / i);
                        break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                        if (u === this._valueMax()) return;
                        r = this._trimAlignValue(u + f);
                        break;
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (u === this._valueMin()) return;
                        r = this._trimAlignValue(u - f)
                    }
                    this._slide(t, e, r)
                },
                keyup: function(t) {
                    var i = n(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), n(t.target).removeClass("ui-state-active"))
                }
            }),
            this._refreshValue(),
            this._animateOff = !1
        },
        _destroy: function() {
            this.handles.remove(),
            this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var s, u, f, i, r, h, e, c, l = this,
            o = this.options;
            return o.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(), s = {
                x: t.pageX,
                y: t.pageY
            },
            u = this._normValueFromMouse(s), f = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var e = Math.abs(u - l.values(t));
                f > e && (f = e, i = n(this), r = t)
            }), o.range === !0 && this.values(1) === o.min && (r += 1, i = n(this.handles[r])), h = this._start(t, r), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, i.addClass("ui-state-active").focus(), e = i.offset(), c = !n(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = c ? {
                left: 0,
                top: 0
            }: {
                left: t.pageX - e.left - i.width() / 2,
                top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(t, r, u), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return ! 0
        },
        _mouseDrag: function(n) {
            var t = {
                x: n.pageX,
                y: n.pageY
            },
            i = this._normValueFromMouse(t);
            return this._slide(n, this._handleIndex, i),
            !1
        },
        _mouseStop: function(n) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(n, this._handleIndex),
            this._change(n, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical": "horizontal"
        },
        _normValueFromMouse: function(n) {
            var i, r, t, u, f;
            return this.orientation === "horizontal" ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left: 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top: 0)),
            t = r / i,
            t > 1 && (t = 1),
            t < 0 && (t = 0),
            this.orientation === "vertical" && (t = 1 - t),
            u = this._valueMax() - this._valueMin(),
            f = this._valueMin() + t * u,
            this._trimAlignValue(f)
        },
        _start: function(n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()),
            this._trigger("start", n, i)
        },
        _slide: function(n, t, i) {
            var r, f, u;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > r || t === 1 && i < r) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i,
                values: f
            }), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i, !0))) : i !== this.value() && (u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i
            }), u !== !1 && this.value(i))
        },
        _stop: function(n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()),
            this._trigger("stop", n, i)
        },
        _change: function(n, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()),
                this._trigger("change", n, i)
            }
        },
        value: function(n) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(n),
                this._refreshValue(),
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(t, i) {
            var u, f, r;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(i),
                this._refreshValue(),
                this._change(null, t);
                return
            }
            if (!arguments.length) return this._values();
            if (!n.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (u = this.options.values, f = arguments[0], r = 0; r < u.length; r += 1) u[r] = this._trimAlignValue(f[r]),
            this._change(null, r);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var r, u = 0;
            n.isArray(this.options.values) && (u = this.options.values.length),
            n.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
            case "disabled":
                i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                break;
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), r = 0; r < u; r += 1) this._change(null, r);
                this._animateOff = !1
            }
        },
        _value: function() {
            var n = this.options.value;
            return n = this._trimAlignValue(n),
            n
        },
        _values: function(n) {
            var r, t, i;
            if (arguments.length) return r = this.options.values[n],
            r = this._trimAlignValue(r),
            r;
            for (t = this.options.values.slice(), i = 0; i < t.length; i += 1) t[i] = this._trimAlignValue(t[i]);
            return t
        },
        _trimAlignValue: function(n) {
            if (n <= this._valueMin()) return this._valueMin();
            if (n >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step: 1,
            i = (n - this._valueMin()) % t,
            r = n - i;
            return Math.abs(i) * 2 >= t && (r += i > 0 ? t: -t),
            parseFloat(r.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var s, t, c, f, h, e = this.options.range,
            i = this.options,
            r = this,
            u = this._animateOff ? !1 : i.animate,
            o = {};
            this.options.values && this.options.values.length ? this.handles.each(function(f) {
                t = (r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100,
                o[r.orientation === "horizontal" ? "left": "bottom"] = t + "%",
                n(this).stop(1, 1)[u ? "animate": "css"](o, i.animate),
                r.options.range === !0 && (r.orientation === "horizontal" ? (f === 0 && r.range.stop(1, 1)[u ? "animate": "css"]({
                    left: t + "%"
                },
                i.animate), f === 1 && r.range[u ? "animate": "css"]({
                    width: t - s + "%"
                },
                {
                    queue: !1,
                    duration: i.animate
                })) : (f === 0 && r.range.stop(1, 1)[u ? "animate": "css"]({
                    bottom: t + "%"
                },
                i.animate), f === 1 && r.range[u ? "animate": "css"]({
                    height: t - s + "%"
                },
                {
                    queue: !1,
                    duration: i.animate
                }))),
                s = t
            }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? (c - f) / (h - f) * 100 : 0, o[this.orientation === "horizontal" ? "left": "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate": "css"](o, i.animate), e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate": "css"]({
                width: t + "%"
            },
            i.animate), e === "max" && this.orientation === "horizontal" && this.range[u ? "animate": "css"]({
                width: 100 - t + "%"
            },
            {
                queue: !1,
                duration: i.animate
            }), e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate": "css"]({
                height: t + "%"
            },
            i.animate), e === "max" && this.orientation === "vertical" && this.range[u ? "animate": "css"]({
                height: 100 - t + "%"
            },
            {
                queue: !1,
                duration: i.animate
            }))
        }
    })
} (jQuery),
function(n) {
    function t(n) {
        return function() {
            var t = this.element.val();
            n.apply(this, arguments),
            this._refresh(),
            t !== this.element.val() && this._trigger("change")
        }
    }
    n.widget("ui.spinner", {
        version: "1.9.0",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = {},
            i = this.element;
            return n.each(["min", "max", "step"],
            function(n, r) {
                var u = i.attr(r);
                u !== undefined && u.length && (t[r] = u)
            }),
            t
        },
        _events: {
            keydown: function(n) {
                this._start(n) && this._keydown(n) && n.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.uiSpinner.addClass("ui-state-active"),
                this.previous = this.element.val()
            },
            blur: function(n) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._refresh(),
                this.uiSpinner.removeClass("ui-state-active"),
                this.previous !== this.element.val() && this._trigger("change", n)
            },
            mousewheel: function(n, t) {
                if (t) {
                    if (!this.spinning && !this._start(n)) return ! 1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, n),
                    clearTimeout(this.mousewheelTimer),
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(n)
                    },
                    100),
                    n.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function r() {
                    var n = this.element[0] === this.document[0].activeElement;
                    n || (this.element.focus(), this.previous = i, this._delay(function() {
                        this.previous = i
                    }))
                }
                var i;
                (i = this.element[0] === this.document[0].activeElement ? this.previous: this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur,
                    r.call(this)
                }), this._start(t) !== !1) && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                if (n(t.currentTarget).hasClass("ui-state-active")) {
                    if (this._start(t) === !1) return ! 1;
                    this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                }
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this._hoverable(n),
            this.element.attr("role", "spinbutton"),
            this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
            this.buttons.height() > Math.ceil(n.height() * .5) && n.height() > 0 && n.height(n.height()),
            this.options.disabled && this.disable()
        },
        _keydown: function(t) {
            var r = this.options,
            i = n.ui.keyCode;
            switch (t.keyCode) {
            case i.UP:
                return this._repeat(null, 1, t),
                !0;
            case i.DOWN:
                return this._repeat(null, -1, t),
                !0;
            case i.PAGE_UP:
                return this._repeat(null, r.page, t),
                !0;
            case i.PAGE_DOWN:
                return this._repeat(null, -r.page, t),
                !0
            }
            return ! 1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-state-default ui-widget ui-widget-content ui-corner-all'><\/span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;<\/span><\/a>"
        },
        _start: function(n) {
            return ! this.spinning && this._trigger("start", n) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function(n, t, i) {
            n = n || 500,
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                this._repeat(40, t, i)
            },
            n),
            this._spin(t * this.options.step, i)
        },
        _spin: function(n, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1),
            i = this._adjustValue(i + n * this._increment(this.counter)),
            this.spinning && this._trigger("spin", t, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(t) {
            var i = this.options.incremental;
            return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var n = this._precisionOf(this.options.step);
            return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))),
            n
        },
        _precisionOf: function(n) {
            var t = n.toString(),
            i = t.indexOf(".");
            return i === -1 ? 0 : t.length - i - 1
        },
        _adjustValue: function(n) {
            var r, i, t = this.options;
            return r = t.min !== null ? t.min: 0,
            i = n - r,
            i = Math.round(i / t.step) * t.step,
            n = r + i,
            n = parseFloat(n.toFixed(this._precision())),
            t.max !== null && n > t.max ? t.max: t.min !== null && n < t.min ? t.min: n
        },
        _stop: function(n) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n))
        },
        _setOption: function(n, t) {
            if (n === "culture" || n === "numberFormat") {
                var i = this._parse(this.element.val());
                this.options[n] = t,
                this.element.val(this._format(i));
                return
            } (n === "max" || n === "min" || n === "step") && typeof t == "string" && (t = this._parse(t)),
            this._super(n, t),
            n === "disabled" && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: t(function(n) {
            this._super(n),
            this._value(this.element.val())
        }),
        _parse: function(n) {
            return typeof n == "string" && n !== "" && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n),
            n === "" || isNaN(n) ? null: n
        },
        _format: function(n) {
            return n === "" ? "": window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(n, t) {
            var i;
            n !== "" && (i = this._parse(n), i !== null && (t || (i = this._adjustValue(i)), n = this._format(i))),
            this.element.val(n),
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function(n) {
            this._stepUp(n)
        }),
        _stepUp: function(n) {
            this._spin((n || 1) * this.options.step)
        },
        stepDown: t(function(n) {
            this._stepDown(n)
        }),
        _stepDown: function(n) {
            this._spin((n || 1) * -this.options.step)
        },
        pageUp: t(function(n) {
            this._stepUp((n || 1) * this.options.page)
        }),
        pageDown: t(function(n) {
            this._stepDown((n || 1) * this.options.page)
        }),
        value: function(n) {
            if (!arguments.length) return this._parse(this.element.val());
            t(this._value).call(this, n)
        },
        widget: function() {
            return this.uiSpinner
        }
    })
} (jQuery),
function(n, t) {
    function i() {
        return++f
    }
    function r(n) {
        return n = n.cloneNode(!1),
        n.hash.length > 1 && n.href.replace(u, "") === location.href.replace(u, "")
    }
    var f = 0,
    u = /#.*$/;
    n.widget("ui.tabs", {
        version: "1.9.0",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var u, r = this,
            i = this.options,
            t = i.active;
            this.running = !1,
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace,
            function(t) {
                n(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace,
            function() {
                n(this).closest("li").is(".ui-state-disabled") && this.blur()
            }),
            this._processTabs(),
            t === null && (location.hash && this.anchors.each(function(n, i) {
                if (i.hash === location.hash) return t = n,
                !1
            }), t === null && (t = this.tabs.filter(".ui-tabs-active").index()), (t === null || t === -1) && (t = this.tabs.length ? 0 : !1)),
            t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), t === -1 && (t = i.collapsible ? !1 : 0)),
            i.active = t,
            !i.collapsible && i.active === !1 && this.anchors.length && (i.active = 0),
            n.isArray(i.disabled) && (i.disabled = n.unique(i.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"),
            function(n) {
                return r.tabs.index(n)
            }))).sort()),
            this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(this.options.active) : n(),
            this._refresh(),
            this.active.length && this.load(i.active)
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : n()
            }
        },
        _tabKeydown: function(t) {
            var r = n(this.document[0].activeElement).closest("li"),
            i = this.tabs.index(r),
            u = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                case n.ui.keyCode.RIGHT:
                case n.ui.keyCode.DOWN:
                    i++;
                    break;
                case n.ui.keyCode.UP:
                case n.ui.keyCode.LEFT:
                    u = !1,
                    i--;
                    break;
                case n.ui.keyCode.END:
                    i = this.anchors.length - 1;
                    break;
                case n.ui.keyCode.HOME:
                    i = 0;
                    break;
                case n.ui.keyCode.SPACE:
                    t.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(i);
                    return;
                case n.ui.keyCode.ENTER:
                    t.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(i === this.options.active ? !1 : i);
                    return;
                default:
                    return
                }
                t.preventDefault(),
                clearTimeout(this.activating),
                i = this._focusNextTab(i, u),
                t.ctrlKey || (r.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", i)
                },
                this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(t, i) {
            function u() {
                return t > r && (t = 0),
                t < 0 && (t = r),
                t
            }
            for (var r = this.tabs.length - 1; n.inArray(u(), this.options.disabled) !== -1;) t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(n, t) {
            return n = this._findNextTab(n, t),
            this.tabs.eq(n).focus(),
            n
        },
        _setOption: function(n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            if (n === "disabled") {
                this._setupDisabled(t);
                return
            }
            this._super(n, t),
            n === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), !t && this.options.active === !1 && this._activate(0)),
            n === "event" && this._setupEvents(t),
            n === "heightStyle" && this._setupHeightStyle(t)
        },
        _tabId: function(n) {
            return n.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function(n) {
            return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var r, t = this.options,
            i = this.tablist.children(":has(a[href])");
            t.disabled = n.map(i.filter(".ui-state-disabled"),
            function(n) {
                return i.index(n)
            }),
            this._processTabs(),
            t.active === !1 || !this.anchors.length ? (t.active = !1, this.active = n()) : this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active),
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"),
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }),
            this.anchors = this.tabs.map(function() {
                return n("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }),
            this.panels = n(),
            this.anchors.each(function(i, u) {
                var e, f, s, h = n(u).uniqueId().attr("id"),
                o = n(u).closest("li"),
                c = o.attr("aria-controls");
                r(u) ? (e = u.hash, f = t.element.find(t._sanitizeSelector(e))) : (s = t._tabId(o), e = "#" + s, f = t.element.find(e), f.length || (f = t._createPanel(s), f.insertAfter(t.panels[i - 1] || t.tablist)), f.attr("aria-live", "polite")),
                f.length && (t.panels = t.panels.add(f)),
                c && o.data("ui-tabs-aria-controls", c),
                o.attr({
                    "aria-controls": e.substring(1),
                    "aria-labelledby": h
                }),
                f.attr("aria-labelledby", h)
            }),
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return n("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var i = 0, r; r = this.tabs[i]; i++) t === !0 || n.inArray(i, t) !== -1 ? n(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : n(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var i = {
                click: function(n) {
                    n.preventDefault()
                }
            };
            t && n.each(t.split(" "),
            function(n, t) {
                i[t] = "_eventHandler"
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(this.anchors, i),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, u, r = this.element.parent();
            t === "fill" ? (n.support.minHeight || (u = r.css("overflow"), r.css("overflow", "hidden")), i = r.height(), this.element.siblings(":visible").each(function() {
                var t = n(this),
                r = t.css("position");
                r !== "absolute" && r !== "fixed" && (i -= t.outerHeight(!0))
            }), u && r.css("overflow", u), this.element.children().not(this.panels).each(function() {
                i -= n(this).outerHeight(!0)
            }), this.panels.each(function() {
                n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : t === "auto" && (i = 0, this.panels.each(function() {
                i = Math.max(i, n(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var u = this.options,
            r = this.active,
            c = n(t.currentTarget),
            i = c.closest("li"),
            f = i[0] === r[0],
            e = f && u.collapsible,
            o = e ? n() : this._getPanelForTab(i),
            s = r.length ? this._getPanelForTab(r) : n(),
            h = {
                oldTab: r,
                oldPanel: s,
                newTab: e ? n() : i,
                newPanel: o
            };
            (t.preventDefault(), i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1) || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), !s.length && !o.length && n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h))
        },
        _toggle: function(t, i) {
            function e() {
                u.running = !1,
                u._trigger("activate", t, i)
            }
            function o() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                r.length && u.options.show ? u._show(r, u.options.show, e) : (r.show(), e())
            }
            var u = this,
            r = i.newPanel,
            f = i.oldPanel;
            this.running = !0,
            f.length && this.options.hide ? this._hide(f, this.options.hide,
            function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                o()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), f.hide(), o()),
            f.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            i.oldTab.attr("aria-selected", "false"),
            r.length && f.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                return n(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1),
            r.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }),
            i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var r, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: r,
                currentTarget: r,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return t === !1 ? n() : this.tabs.eq(t)
        },
        _getIndex: function(n) {
            return typeof n == "string" && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))),
            n
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(),
            this.tabs.add(this.panels).each(function() {
                n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }),
            this.tabs.each(function() {
                var t = n(this),
                i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i) : t.removeAttr("aria-controls")
            }),
            this.options.heightStyle !== "content" && this.panels.css("height", "")
        },
        enable: function(i) {
            var r = this.options.disabled;
            r !== !1 && (i === t ? r = !1 : (i = this._getIndex(i), r = n.isArray(r) ? n.map(r,
            function(n) {
                return n !== i ? n: null
            }) : n.map(this.tabs,
            function(n, t) {
                return t !== i ? t: null
            })), this._setupDisabled(r))
        },
        disable: function(i) {
            var r = this.options.disabled;
            if (r !== !0) {
                if (i === t) r = !0;
                else {
                    if (i = this._getIndex(i), n.inArray(i, r) !== -1) return;
                    r = n.isArray(r) ? n.merge([i], r).sort() : [i]
                }
                this._setupDisabled(r)
            }
        },
        load: function(t, i) {
            t = this._getIndex(t);
            var f = this,
            u = this.tabs.eq(t),
            o = u.find(".ui-tabs-anchor"),
            e = this._getPanelForTab(u),
            s = {
                tab: u,
                panel: e
            };
            r(o[0]) || (this.xhr = n.ajax(this._ajaxSettings(o, i, s)), this.xhr && this.xhr.statusText !== "canceled" && (u.addClass("ui-tabs-loading"), e.attr("aria-busy", "true"), this.xhr.success(function(n) {
                setTimeout(function() {
                    e.html(n),
                    f._trigger("load", i, s)
                },
                1)
            }).complete(function(n, t) {
                setTimeout(function() {
                    t === "abort" && f.panels.stop(!1, !0),
                    u.removeClass("ui-tabs-loading"),
                    e.removeAttr("aria-busy"),
                    n === f.xhr && delete f.xhr
                },
                1)
            })))
        },
        _ajaxSettings: function(t, i, r) {
            var u = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, f) {
                    return u._trigger("beforeLoad", i, n.extend({
                        jqXHR: t,
                        ajaxSettings: f
                    },
                    r))
                }
            }
        },
        _getPanelForTab: function(t) {
            var i = n(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }),
    n.uiBackCompat !== !1 && (n.ui.tabs.prototype._ui = function(n, t) {
        return {
            tab: n,
            panel: t,
            index: this.anchors.index(n)
        }
    },
    n.widget("ui.tabs", n.ui.tabs, {
        url: function(n, t) {
            this.anchors.eq(n).attr("href", t)
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        options: {
            ajaxOptions: null,
            cache: !1
        },
        _create: function() {
            this._super();
            var t = this;
            this._on({
                tabsbeforeload: function(i, r) {
                    if (n.data(r.tab[0], "cache.tabs")) {
                        i.preventDefault();
                        return
                    }
                    r.jqXHR.success(function() {
                        t.options.cache && n.data(r.tab[0], "cache.tabs", !0)
                    })
                }
            })
        },
        _ajaxSettings: function(t, i, r) {
            var u = this.options.ajaxOptions;
            return n.extend({},
            u, {
                error: function(n, t) {
                    try {
                        u.error(n, t, r.tab.closest("li").index(), r.tab[0])
                    } catch(i) {}
                }
            },
            this._superApply(arguments))
        },
        _setOption: function(n, t) {
            n === "cache" && t === !1 && this.anchors.removeData("cache.tabs"),
            this._super(n, t)
        },
        _destroy: function() {
            this.anchors.removeData("cache.tabs"),
            this._super()
        },
        url: function(n) {
            this.anchors.eq(n).removeData("cache.tabs"),
            this._superApply(arguments)
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        abort: function() {
            this.xhr && this.xhr.abort()
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        options: {
            spinner: "<em>Loading&#8230;<\/em>"
        },
        _create: function() {
            this._super(),
            this._on({
                tabsbeforeload: function(n, t) {
                    if (n.target === this.element[0] && this.options.spinner) {
                        var i = t.tab.find("span"),
                        r = i.html();
                        i.html(this.options.spinner),
                        t.jqXHR.complete(function() {
                            i.html(r)
                        })
                    }
                }
            })
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        options: {
            enable: null,
            disable: null
        },
        enable: function(t) {
            var i = this.options,
            r;
            (t && i.disabled === !0 || n.isArray(i.disabled) && n.inArray(t, i.disabled) !== -1) && (r = !0),
            this._superApply(arguments),
            r && this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t]))
        },
        disable: function(t) {
            var i = this.options,
            r;
            (t && i.disabled === !1 || n.isArray(i.disabled) && n.inArray(t, i.disabled) === -1) && (r = !0),
            this._superApply(arguments),
            r && this._trigger("disable", null, this._ui(this.anchors[t], this.panels[t]))
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        options: {
            add: null,
            remove: null,
            tabTemplate: "<li><a href='#{href}'><span>#{label}<\/span><\/a><\/li>"
        },
        add: function(i, r, u) {
            u === t && (u = this.anchors.length);
            var s, f, o = this.options,
            e = n(o.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, r)),
            h = i.indexOf("#") ? this._tabId(e) : i.replace("#", "");
            return e.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0),
            e.attr("aria-controls", h),
            s = u >= this.tabs.length,
            f = this.element.find("#" + h),
            f.length || (f = this._createPanel(h), s ? u > 0 ? f.insertAfter(this.panels.eq( - 1)) : f.appendTo(this.element) : f.insertBefore(this.panels[u])),
            f.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(),
            s ? e.appendTo(this.tablist) : e.insertBefore(this.tabs[u]),
            o.disabled = n.map(o.disabled,
            function(n) {
                return n >= u ? ++n: n
            }),
            this.refresh(),
            this.tabs.length === 1 && o.active === !1 && this.option("active", 0),
            this._trigger("add", null, this._ui(this.anchors[u], this.panels[u])),
            this
        },
        remove: function(t) {
            t = this._getIndex(t);
            var r = this.options,
            i = this.tabs.eq(t).remove(),
            u = this._getPanelForTab(i).remove();
            return i.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(t + (t + 1 < this.anchors.length ? 1 : -1)),
            r.disabled = n.map(n.grep(r.disabled,
            function(n) {
                return n !== t
            }),
            function(n) {
                return n >= t ? --n: n
            }),
            this.refresh(),
            this._trigger("remove", null, this._ui(i.find("a")[0], u[0])),
            this
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        length: function() {
            return this.anchors.length
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        options: {
            idPrefix: "ui-tabs-"
        },
        _tabId: function(t) {
            var r = t.is("li") ? t.find("a[href]") : t;
            return r = r[0],
            n(r).closest("li").attr("aria-controls") || r.title && r.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i()
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        options: {
            panelTemplate: "<div><\/div>"
        },
        _createPanel: function(t) {
            return n(this.options.panelTemplate).attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        _create: function() {
            var n = this.options;
            n.active === null && n.selected !== t && (n.active = n.selected === -1 ? !1 : n.selected),
            this._super(),
            n.selected = n.active,
            n.selected === !1 && (n.selected = -1)
        },
        _setOption: function(n, t) {
            if (n !== "selected") return this._super(n, t);
            var i = this.options;
            this._super("active", t === -1 ? !1 : t),
            i.selected = i.active,
            i.selected === !1 && (i.selected = -1)
        },
        _eventHandler: function() {
            this._superApply(arguments),
            this.options.selected = this.options.active,
            this.options.selected === !1 && (this.options.selected = -1)
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        options: {
            show: null,
            select: null
        },
        _create: function() {
            this._super(),
            this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
        },
        _trigger: function(n, t, i) {
            var r = this._superApply(arguments);
            return r ? (n === "beforeActivate" && i.newTab.length ? r = this._super("select", t, {
                tab: i.newTab.find(".ui-tabs-anchor")[0],
                panel: i.newPanel[0],
                index: i.newTab.closest("li").index()
            }) : n === "activate" && i.newTab.length && (r = this._super("show", t, {
                tab: i.newTab.find(".ui-tabs-anchor")[0],
                panel: i.newPanel[0],
                index: i.newTab.closest("li").index()
            })), r) : !1
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        select: function(n) {
            if (n = this._getIndex(n), n === -1) {
                if (!this.options.collapsible || this.options.selected === -1) return;
                n = this.options.selected
            }
            this.anchors.eq(n).trigger(this.options.event + this.eventNamespace)
        }
    }),
    function() {
        var t = 0;
        n.widget("ui.tabs", n.ui.tabs, {
            options: {
                cookie: null
            },
            _create: function() {
                var t = this.options,
                n;
                t.active == null && t.cookie && (n = parseInt(this._cookie(), 10), n === -1 && (n = !1), t.active = n),
                this._super()
            },
            _cookie: function(i) {
                var r = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++t)];
                return arguments.length && (r.push(i === !1 ? -1 : i), r.push(this.options.cookie)),
                n.cookie.apply(null, r)
            },
            _refresh: function() {
                this._super(),
                this.options.cookie && this._cookie(this.options.active, this.options.cookie)
            },
            _eventHandler: function() {
                this._superApply(arguments),
                this.options.cookie && this._cookie(this.options.active, this.options.cookie)
            },
            _destroy: function() {
                this._super(),
                this.options.cookie && this._cookie(null, this.options.cookie)
            }
        })
    } (), n.widget("ui.tabs", n.ui.tabs, {
        _trigger: function(t, i, r) {
            var u = n.extend({},
            r);
            return t === "load" && (u.panel = u.panel[0], u.tab = u.tab.find(".ui-tabs-anchor")[0]),
            this._super(t, i, u)
        }
    }), n.widget("ui.tabs", n.ui.tabs, {
        options: {
            fx: null
        },
        _getFx: function() {
            var i, r, t = this.options.fx;
            return t && (n.isArray(t) ? (i = t[0], r = t[1]) : i = r = t),
            t ? {
                show: r,
                hide: i
            }: null
        },
        _toggle: function(n, t) {
            function e() {
                r.running = !1,
                r._trigger("activate", n, t)
            }
            function o() {
                t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                u.length && i.show ? u.animate(i.show, i.show.duration,
                function() {
                    e()
                }) : (u.show(), e())
            }
            var r = this,
            u = t.newPanel,
            f = t.oldPanel,
            i = this._getFx();
            if (!i) return this._super(n, t);
            r.running = !0,
            f.length && i.hide ? f.animate(i.hide, i.hide.duration,
            function() {
                t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                o()
            }) : (t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), f.hide(), o())
        }
    }))
} (jQuery),
function(n) {
    function t(t, i) {
        var r = (t.attr("aria-describedby") || "").split(/\s+/);
        r.push(i),
        t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
    }
    function i(t) {
        var u = t.data("ui-tooltip-id"),
        i = (t.attr("aria-describedby") || "").split(/\s+/),
        r = n.inArray(u, i);
        r !== -1 && i.splice(r, 1),
        t.removeData("ui-tooltip-id"),
        i = n.trim(i.join(" ")),
        i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
    }
    var r = 0;
    n.widget("ui.tooltip", {
        version: "1.9.0",
        options: {
            content: function() {
                return n(this).attr("title")
            },
            hide: !0,
            items: "[title]",
            position: {
                my: "left+15 center",
                at: "right center",
                collision: "flipfit flipfit"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {}
        },
        _setOption: function(t, i) {
            var r = this;
            if (t === "disabled") {
                this[i ? "_disable": "_enable"](),
                this.options[t] = i;
                return
            }
            this._super(t, i),
            t === "content" && n.each(this.tooltips,
            function(n, t) {
                r._updateContent(t)
            })
        },
        _disable: function() {
            var t = this;
            n.each(this.tooltips,
            function(i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r[0],
                t.close(u, !0)
            }),
            this.element.find(this.options.items).andSelf().each(function() {
                var t = n(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).andSelf().each(function() {
                var t = n(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function(t) {
            var i = n(t ? t.target: this.element).closest(this.options.items);
            if (i.length) {
                if (this.options.track && i.data("ui-tooltip-id")) {
                    this._find(i).position(n.extend({
                        of: i
                    },
                    this.options.position)),
                    this._off(this.document, "mousemove");
                    return
                }
                i.attr("title") && i.data("ui-tooltip-title", i.attr("title")),
                i.data("tooltip-open", !0),
                this._updateContent(i, t)
            }
        },
        _updateContent: function(n, t) {
            var i, r = this.options.content,
            u = this;
            if (typeof r == "string") return this._open(t, n, r);
            i = r.call(n[0],
            function(i) {
                n.data("tooltip-open") && u._delay(function() {
                    this._open(t, n, i)
                })
            }),
            i && this._open(t, n, i)
        },
        _open: function(i, r, u) {
            function o(n) {
                e.of = n,
                f.position(e)
            }
            var f, e;
            if (u) {
                if (f = this._find(r), f.length) {
                    f.find(".ui-tooltip-content").html(u);
                    return
                }
                r.is("[title]") && (i && i.type === "mouseover" ? r.attr("title", "") : r.removeAttr("title")),
                f = this._tooltip(r),
                t(r, f.attr("id")),
                f.find(".ui-tooltip-content").html(u),
                this.options.track && i && /^mouse/.test(i.originalEvent.type) ? (e = n.extend({},
                this.options.position), this._on(this.document, {
                    mousemove: o
                }), o(i)) : f.position(n.extend({
                    of: r
                },
                this.options.position)),
                f.hide(),
                this._show(f, this.options.show),
                this._trigger("open", i, {
                    tooltip: f
                }),
                this._on(r, {
                    mouseleave: "close",
                    focusout: "close",
                    keyup: function(t) {
                        if (t.keyCode === n.ui.keyCode.ESCAPE) {
                            var i = n.Event(t);
                            i.currentTarget = r[0],
                            this.close(i, !0)
                        }
                    }
                })
            }
        },
        close: function(t, r) {
            var e = this,
            u = n(t ? t.currentTarget: this.element),
            f = this._find(u);
            this.closing || (r || !t || t.type === "focusout" || this.document[0].activeElement !== u[0]) && (u.data("ui-tooltip-title") && u.attr("title", u.data("ui-tooltip-title")), i(u), f.stop(!0), this._hide(f, this.options.hide,
            function() {
                n(this).remove(),
                delete e.tooltips[this.id]
            }), u.removeData("tooltip-open"), this._off(u, "mouseleave focusout keyup"), this._off(this.document, "mousemove"), this.closing = !0, this._trigger("close", t, {
                tooltip: f
            }), this.closing = !1)
        },
        _tooltip: function(t) {
            var u = "ui-tooltip-" + r++,
            i = n("<div>").attr({
                id: u,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return n("<div>").addClass("ui-tooltip-content").appendTo(i),
            i.appendTo(this.document[0].body),
            n.fn.bgiframe && i.bgiframe(),
            this.tooltips[u] = t,
            i
        },
        _find: function(t) {
            var i = t.data("ui-tooltip-id");
            return i ? n("#" + i) : n()
        },
        _destroy: function() {
            var t = this;
            n.each(this.tooltips,
            function(i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r[0],
                t.close(u, !0),
                n("#" + i).remove(),
                r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
            })
        }
    })
} (jQuery),
function(n) {
    function i(n, t) {
        for (var i = window, r = (n || "").split("."); i && r.length;) i = i[r.shift()];
        return typeof i == "function" ? i: (t.push(n), Function.constructor.apply(null, t))
    }
    function r(n) {
        return n === "GET" || n === "POST"
    }
    function e(n, t) {
        r(t) || n.setRequestHeader("X-HTTP-Method-Override", t)
    }
    function o(t, i, r) {
        var u;
        r.indexOf("application/x-javascript") === -1 && (u = (t.getAttribute("data-ajax-mode") || "").toUpperCase(), n(t.getAttribute("data-ajax-update")).each(function(t, r) {
            var f;
            switch (u) {
            case "BEFORE":
                f = r.firstChild,
                n("<div />").html(i).contents().each(function() {
                    r.insertBefore(this, f)
                });
                break;
            case "AFTER":
                n("<div />").html(i).contents().each(function() {
                    r.appendChild(this)
                });
                break;
            default:
                n(r).html(i)
            }
        }))
    }
    function u(t, u) {
        var s, h, f, c;
        (s = t.getAttribute("data-ajax-confirm"), !s || window.confirm(s)) && (h = n(t.getAttribute("data-ajax-loading")), c = t.getAttribute("data-ajax-loading-duration") || 0, n.extend(u, {
            type: t.getAttribute("data-ajax-method") || undefined,
            url: t.getAttribute("data-ajax-url") || undefined,
            beforeSend: function(n) {
                var r;
                return e(n, f),
                r = i(t.getAttribute("data-ajax-begin"), ["xhr"]).apply(this, arguments),
                r !== !1 && h.show(c),
                r
            },
            complete: function() {
                h.hide(c),
                i(t.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(this, arguments)
            },
            success: function(n, r, u) {
                o(t, n, u.getResponseHeader("Content-Type") || "text/html"),
                i(t.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(this, arguments)
            },
            error: i(t.getAttribute("data-ajax-failure"), ["xhr", "status", "error"])
        }), u.data.push({
            name: "X-Requested-With",
            value: "XMLHttpRequest"
        }), f = u.type.toUpperCase(), r(f) || (u.type = "POST", u.data.push({
            name: "X-HTTP-Method-Override",
            value: f
        })), n.ajax(u))
    }
    function s(t) {
        var i = n(t).data(f);
        return ! i || !i.validate || i.validate()
    }
    var t = "unobtrusiveAjaxClick",
    f = "unobtrusiveValidation";
    n("a[data-ajax=true]").live("click",
    function(n) {
        n.preventDefault(),
        u(this, {
            url: this.href,
            type: "GET",
            data: []
        })
    }),
    n("form[data-ajax=true] input[type=image]").live("click",
    function(i) {
        var r = i.target.name,
        u = n(i.target),
        f = u.parents("form")[0],
        e = u.offset();
        n(f).data(t, [{
            name: r + ".x",
            value: Math.round(i.pageX - e.left)
        },
        {
            name: r + ".y",
            value: Math.round(i.pageY - e.top)
        }]),
        setTimeout(function() {
            n(f).removeData(t)
        },
        0)
    }),
    n("form[data-ajax=true] :submit").live("click",
    function(i) {
        var r = i.target.name,
        u = n(i.target).parents("form")[0];
        n(u).data(t, r ? [{
            name: r,
            value: i.target.value
        }] : []),
        setTimeout(function() {
            n(u).removeData(t)
        },
        0)
    }),
    n("form[data-ajax=true]").live("submit",
    function(i) {
        var r = n(this).data(t) || [];
        (i.preventDefault(), s(this)) && u(this, {
            url: this.action,
            type: this.method || "GET",
            data: r.concat(n(this).serializeArray())
        })
    })
} (jQuery),
function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (this.length) {
                var i = n.data(this[0], "validator");
                return i ? i: (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (t = this.find("input, button"), t.filter(".cancel").click(function() {
                    i.cancelSubmit = !0
                }), i.settings.submitHandler && t.filter(":submit").click(function() {
                    i.submitButton = this
                }), this.submit(function(t) {
                    function r() {
                        if (i.settings.submitHandler) {
                            if (i.submitButton) var t = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm);
                            return i.settings.submitHandler.call(i, i.currentForm),
                            i.submitButton && t.remove(),
                            !1
                        }
                        return ! 0
                    }
                    return (i.settings.debug && t.preventDefault(), i.cancelSubmit) ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
                })), i)
            }
            t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        },
        valid: function() {
            if (n(this[0]).is("form")) return this.validate().form();
            var t = !0,
            i = n(this[0].form).validate();
            return this.each(function() {
                t &= i.element(this)
            }),
            t
        },
        removeAttrs: function(t) {
            var i = {},
            r = this;
            return n.each(t.split(/\s/),
            function(n, t) {
                i[t] = r.attr(t),
                r.removeAttr(t)
            }),
            i
        },
        rules: function(t, i) {
            var r = this[0],
            e;
            if (t) {
                var u = n.data(r.form, "validator").settings,
                o = u.rules,
                f = n.validator.staticRules(r);
                switch (t) {
                case "add":
                    n.extend(f, n.validator.normalizeRule(i)),
                    o[r.name] = f,
                    i.messages && (u.messages[r.name] = n.extend(u.messages[r.name], i.messages));
                    break;
                case "remove":
                    return i ? (e = {},
                    n.each(i.split(/\s/),
                    function(n, t) {
                        e[t] = f[t],
                        delete f[t]
                    }), e) : (delete o[r.name], f)
                }
            }
            return r = n.validator.normalizeRules(n.extend({},
            n.validator.metadataRules(r), n.validator.classRules(r), n.validator.attributeRules(r), n.validator.staticRules(r)), r),
            r.required && (u = r.required, delete r.required, r = n.extend({
                required: u
            },
            r)),
            r
        }
    }),
    n.extend(n.expr[":"], {
        blank: function(t) {
            return ! n.trim("" + t.value)
        },
        filled: function(t) {
            return !! n.trim("" + t.value)
        },
        unchecked: function(n) {
            return ! n.checked
        }
    }),
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {},
        n.validator.defaults, t),
        this.currentForm = i,
        this.init()
    },
    n.validator.format = function(t, i) {
        return arguments.length == 1 ?
        function() {
            var i = n.makeArray(arguments);
            return i.unshift(t),
            n.validator.format.apply(this, i)
        }: (arguments.length > 2 && i.constructor != Array && (i = n.makeArray(arguments).slice(1)), i.constructor != Array && (i = [i]), n.each(i,
        function(n, i) {
            t = t.replace(RegExp("\\{" + n + "\\}", "g"), i)
        }), t)
    },
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n,
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
            },
            onfocusout: function(n) { ! this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(n) { (n.name in this.submitted || n == this.lastElement) && this.element(n)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    var i = n.data(this[0].form, "validator"),
                    r = "on" + t.type.replace(/^validate/, "");
                    i.settings[r] && i.settings[r].call(i, this[0], t)
                }
                var r, t;
                this.labelContainer = n(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm),
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset(),
                r = this.groups = {},
                n.each(this.settings.groups,
                function(t, i) {
                    n.each(i.split(/\s/),
                    function(n, i) {
                        r[i] = t
                    })
                }),
                t = this.settings.rules,
                n.each(t,
                function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                }),
                n(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i),
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                n.extend(this.submitted, this.errorMap),
                this.invalid = n.extend({},
                this.errorMap),
                this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                this.lastElement = t = this.validationTargetFor(this.clean(t)),
                this.prepareElement(t),
                this.currentElements = n(t);
                var i = this.check(t);
                return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                i
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t),
                    this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList,
                    function(n) {
                        return ! (n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null,
                this.prepareForm(),
                this.hideErrors(),
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t = 0,
                i;
                for (i in n) t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() == 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch(t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && n.grep(this.errorList,
                function(n) {
                    return n.element.name == t.name
                }).length == 1 && t
            },
            elements: function() {
                var t = this,
                i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return (!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules())) ? !1 : i[this.name] = !0
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                return n(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = n([]),
                this.toHide = n([]),
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset(),
                this.toHide = this.errorsFor(n)
            },
            check: function(t) {
                var i, r, u, f, e;
                t = this.validationTargetFor(this.clean(t)),
                i = n(t).rules(),
                r = !1;
                for (u in i) {
                    f = {
                        method: u,
                        parameters: i[u]
                    };
                    try {
                        if (e = n.validator.methods[u].call(this, t.value.replace(/\r/g, ""), t, f.parameters), e == "dependency-mismatch") r = !0;
                        else {
                            if (r = !1, e == "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(t));
                                return
                            }
                            if (!e) return this.formatAndAdd(t, f),
                            !1
                        }
                    } catch(o) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + f.method + "' method", o);
                        throw o;
                    }
                }
                if (!r) return this.objectLength(i) && this.successList.push(t),
                !0
            },
            customMetaMessage: function(t, i) {
                if (n.metadata) {
                    var r = this.settings.meta ? n(t).metadata()[this.settings.meta] : n(t).metadata();
                    return r && r.messages && r.messages[i]
                }
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor == String ? i: i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++) if (arguments[n] !== undefined) return arguments[n]
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customMetaMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function(n, t) {
                var i = this.defaultMessage(n, t.method),
                r = /\$?\{(\d+)\}/g;
                typeof i == "function" ? i = i.call(this, t.parameters, n) : r.test(i) && (i = jQuery.format(i.replace(r, "{$1}"), t.parameters)),
                this.errorList.push({
                    message: i,
                    element: n
                }),
                this.errorMap[n.name] = i,
                this.submitted[n.name] = i
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))),
                n
            },
            defaultShowErrors: function() {
                for (var t, n = 0; this.errorList[n]; n++) t = this.errorList[n],
                this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass),
                this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight) for (n = 0, t = this.validElements(); t[n]; n++) this.settings.unhighlight.call(this, t[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.attr("generated") && r.html(i)) : (r = n("<" + this.settings.errorElement + "/>").attr({
                    "for": this.idOrName(t),
                    generated: !0
                }).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t))),
                !i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r)),
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var i = this.idOrName(t);
                return this.errors().filter(function() {
                    return n(this).attr("for") == i
                })
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name: n.id || n.name)
            },
            validationTargetFor: function(n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]),
                n
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                var i = this.currentForm;
                return n(document.getElementsByName(t)).map(function(n, r) {
                    return r.form == i && r.name == t && r || null
                })
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return n("option:selected", i).length;
                case "input":
                    if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !! n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                return ! n.validator.methods.required.call(this, n.trim(t.value), t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                i && this.pendingRequest == 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest == 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            dateDE: {
                dateDE: !0
            },
            number: {
                number: !0
            },
            numberDE: {
                numberDE: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor == String ? this.classRuleSettings[t] = i: n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {};
            return (t = n(t).attr("class")) && n.each(t.split(" "),
            function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }),
            i
        },
        attributeRules: function(t) {
            var r = {},
            i, u;
            t = n(t);
            for (i in n.validator.methods)(u = i === "required" && typeof n.fn.prop == "function" ? t.prop(i) : t.attr(i)) ? r[i] = u: t[0].getAttribute("type") === i && (r[i] = !0);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength,
            r
        },
        metadataRules: function(t) {
            if (!n.metadata) return {};
            var i = n.data(t.form, "validator").settings.meta;
            return i ? n(t).metadata()[i] : n(t).metadata()
        },
        staticRules: function(t) {
            var i = {},
            r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}),
            i
        },
        normalizeRules: function(t, i) {
            return n.each(t,
            function(r, u) {
                if (u === !1) delete t[r];
                else if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                    case "string":
                        f = !!n(u.depends, i.form).length;
                        break;
                    case "function":
                        f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param: !0 : delete t[r]
                }
            }),
            n.each(t,
            function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }),
            n.each(["minlength", "maxlength", "min", "max"],
            function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            n.each(["rangelength", "range"],
            function() {
                t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
            }),
            n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)),
            t.messages && delete t.messages,
            t
        },
        normalizeRule: function(t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/),
                function() {
                    i[this] = !0
                }),
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i,
            n.validator.messages[t] = r != undefined ? r: n.validator.messages[t],
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return (t = n(i).val()) && t.length > 0;
                case "input":
                    if (this.checkable(i)) return this.getLength(t, i) > 0;
                default:
                    return n.trim(t).length > 0
                }
            },
            remote: function(t, i, r) {
                var f, u, e;
                return this.optional(i) ? "dependency-mismatch": (f = this.previousValue(i), this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {
                    url: r
                } || r, this.pending[i.name]) ? "pending": f.old === t ? f.valid: (f.old = t, u = this, this.startRequest(i), e = {},
                e[i.name] = t, n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    success: function(r) {
                        var o, e;
                        u.settings.messages[i.name].remote = f.originalMessage,
                        o = r === !0,
                        o ? (e = u.formSubmitted, u.prepareElement(i), u.formSubmitted = e, u.successList.push(i), u.showErrors()) : (e = {},
                        r = r || u.defaultMessage(i, "remote"), e[i.name] = f.message = n.isFunction(r) ? r(t) : r, u.showErrors(e)),
                        f.valid = o,
                        u.stopRequest(i, o)
                    }
                },
                r)), "pending")
            },
            minlength: function(t, i, r) {
                return this.optional(i) || this.getLength(n.trim(t), i) >= r
            },
            maxlength: function(t, i, r) {
                return this.optional(i) || this.getLength(n.trim(t), i) <= r
            },
            rangelength: function(t, i, r) {
                return t = this.getLength(n.trim(t), i),
                this.optional(i) || t >= r[0] && t <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            email: function(n, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n))
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                var r;
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 -]+/.test(n)) return ! 1;
                var f = 0,
                i = 0,
                u = !1;
                for (n = n.replace(/\D/g, ""), r = n.length - 1; r >= 0; r--) i = n.charAt(r),
                i = parseInt(i, 10),
                u && (i *= 2) > 9 && (i -= 9),
                f += i,
                u = !u;
                return f % 10 == 0
            },
            accept: function(n, t, i) {
                return i = typeof i == "string" ? i.replace(/,/g, "|") : "png|jpe?g|gif",
                this.optional(t) || n.match(RegExp(".(" + i + ")$", "i"))
            },
            equalTo: function(t, i, r) {
                return r = n(r).unbind(".validate-equalTo").bind("blur.validate-equalTo",
                function() {
                    n(i).valid()
                }),
                t == r.val()
            }
        }
    }),
    n.format = n.validator.format
} (jQuery),
function(n) {
    var t = {},
    i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        i = n.port,
        n.mode == "abort" && (t[i] && t[i].abort(), t[i] = r)
    }) : (i = n.ajax, n.ajax = function(r) {
        var u = ("port" in r ? r: n.ajaxSettings).port;
        return ("mode" in r ? r: n.ajaxSettings).mode == "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments)) : i.apply(this, arguments)
    })
} (jQuery),
function(n) {
    jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || n.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(t, i) {
        function r(t) {
            return t = n.event.fix(t),
            t.type = i,
            n.event.handle.call(this, t)
        }
        n.event.special[i] = {
            setup: function() {
                this.addEventListener(t, r, !0)
            },
            teardown: function() {
                this.removeEventListener(t, r, !0)
            },
            handler: function(t) {
                return arguments[0] = n.event.fix(t),
                arguments[0].type = i,
                n.event.handle.apply(this, arguments)
            }
        }
    }),
    n.extend(n.fn, {
        validateDelegate: function(t, i, r) {
            return this.bind(i,
            function(i) {
                var u = n(i.target);
                if (u.is(t)) return r.apply(u, arguments)
            })
        }
    })
} (jQuery),
function(n) {
    function i(n, t, i) {
        n.rules[t] = i,
        n.message && (n.messages[t] = n.message)
    }
    function s(n) {
        return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }
    function f(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }
    function e(n, t) {
        return n.indexOf("*.") === 0 && (n = n.replace("*.", t)),
        n
    }
    function h(t, i) {
        var r = n(this).find("[data-valmsg-for='" + i[0].name + "']"),
        u = n.parseJSON(r.attr("data-valmsg-replace")) !== !1;
        r.removeClass("field-validation-valid").addClass("field-validation-error"),
        t.data("unobtrusiveContainer", r),
        u ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide()
    }
    function c(t, i) {
        var u = n(this).find("[data-valmsg-summary=true]"),
        r = u.find("ul");
        r && r.length && i.errorList.length && (r.empty(), u.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(i.errorList,
        function() {
            n("<li />").html(this.message).appendTo(r)
        }))
    }
    function l(t) {
        var i = t.data("unobtrusiveContainer"),
        r = n.parseJSON(i.attr("data-valmsg-replace"));
        i && (i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), r && i.empty())
    }
    function o(t) {
        var i = n(t),
        r = i.data(u);
        return r || (r = {
            options: {
                errorClass: "input-validation-error",
                errorElement: "span",
                errorPlacement: n.proxy(h, t),
                invalidHandler: n.proxy(c, t),
                messages: {},
                rules: {},
                success: n.proxy(l, t)
            },
            attachValidation: function() {
                i.validate(this.options)
            },
            validate: function() {
                return i.validate(),
                i.valid()
            }
        },
        i.data(u, r)),
        r
    }
    var r = n.validator,
    t, u = "unobtrusiveValidation";
    r.unobtrusive = {
        adapters: [],
        parseElement: function(t, i) {
            var u = n(t),
            f = u.parents("form")[0],
            r,
            e,
            s;
            f && (r = o(f), r.options.rules[t.name] = e = {},
            r.options.messages[t.name] = s = {},
            n.each(this.adapters,
            function() {
                var i = "data-val-" + this.name,
                r = u.attr(i),
                o = {};
                r !== undefined && (i += "-", n.each(this.params,
                function() {
                    o[this] = u.attr(i + this)
                }), this.adapt({
                    element: t,
                    form: f,
                    message: r,
                    params: o,
                    rules: e,
                    messages: s
                }))
            }), jQuery.extend(e, {
                __dummy__: !0
            }), i || r.attachValidation())
        },
        parse: function(t) {
            n(t).find(":input[data-val=true]").each(function() {
                r.unobtrusive.parseElement(this, !0)
            }),
            n("form").each(function() {
                var n = o(this);
                n && n.attachValidation()
            })
        }
    },
    t = r.unobtrusive.adapters,
    t.add = function(n, t, i) {
        return i || (i = t, t = []),
        this.push({
            name: n,
            params: t,
            adapt: i
        }),
        this
    },
    t.addBool = function(n, t) {
        return this.add(n,
        function(r) {
            i(r, t || n, !0)
        })
    },
    t.addMinMax = function(n, t, r, u, f, e) {
        return this.add(n, [f || "min", e || "max"],
        function(n) {
            var f = n.params.min,
            e = n.params.max;
            f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
        })
    },
    t.addSingleVal = function(n, t, r) {
        return this.add(n, [t || "val"],
        function(u) {
            i(u, r || n, u.params[t])
        })
    },
    r.addMethod("__dummy__",
    function() {
        return ! 0
    }),
    r.addMethod("regex",
    function(n, t, i) {
        var r;
        return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
    }),
    t.addSingleVal("accept", "exts").addSingleVal("regex", "pattern"),
    t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"),
    t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range"),
    t.add("equalto", ["other"],
    function(t) {
        var r = f(t.element.name),
        u = t.params.other,
        o = e(u, r),
        s = n(t.form).find(":input[name=" + o + "]")[0];
        i(t, "equalTo", s)
    }),
    t.add("required",
    function(n) { (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
    }),
    t.add("remote", ["url", "type", "additionalfields"],
    function(t) {
        var r = {
            url: t.params.url,
            type: t.params.type || "GET",
            data: {}
        },
        u = f(t.element.name);
        n.each(s(t.params.additionalfields || t.element.name),
        function(i, f) {
            var o = e(f, u);
            r.data[o] = function() {
                return n(t.form).find(":input[name='" + o + "']").val()
            }
        }),
        i(t, "remote", r)
    }),
    n(function() {
        r.unobtrusive.parse(document)
    })
} (jQuery),
function(n) {
    n.validator.unobtrusive.parseDynamicContent = function(t) {
        n.validator.unobtrusive.parse(t);
        var r = n(t).first().closest("form"),
        i = r.data("unobtrusiveValidation"),
        u = r.validate();
        n.each(i.options.rules,
        function(t, r) {
            if (u.settings.rules[t] == undefined) {
                var f = {};
                n.extend(f, r),
                f.messages = i.options.messages[t],
                n("[name='" + t + "']").rules("add", f)
            } else n.each(r,
            function(r, f) {
                if (u.settings.rules[t][r] == undefined) {
                    var e = {};
                    e[r] = f,
                    e.messages = i.options.messages[t][r],
                    n("[name='" + t + "']").rules("add", e)
                }
            })
        })
    }
} ($),
swfobject = function() {
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
function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
} (function(n) {
    "use strict";
    function y() {
        if (y.history = y.history || [], y.history.push(arguments), "object" == typeof console) {
            var t = console[console.warn ? "warn": "log"],
            n = Array.prototype.slice.call(arguments),
            i;
            typeof arguments[0] == "string" && (n[0] = "qTip2: " + n[0]),
            i = t.apply ? t.apply(console, n) : t(n)
        }
    }
    function b(i) {
        var f;
        return ! i || "object" != typeof i ? t: ((i.metadata === u || "object" != typeof i.metadata) && (i.metadata = {
            type: i.metadata
        }), "content" in i && ((i.content === u || "object" != typeof i.content || i.content.jquery) && (i.content = {
            text: i.content
        }), f = i.content.text || t, n.isFunction(f) || (f || f.attr) && !(f.length < 1) && ("object" != typeof f || f.jquery) || (i.content.text = t), "title" in i.content && ((i.content.title === u || "object" != typeof i.content.title) && (i.content.title = {
            text: i.content.title
        }), f = i.content.title.text || t, n.isFunction(f) || (f || f.attr) && !(f.length < 1) && ("object" != typeof f || f.jquery) || (i.content.title.text = t))), "position" in i && (i.position === u || "object" != typeof i.position) && (i.position = {
            my: i.position,
            at: i.position
        }), "show" in i && (i.show === u || "object" != typeof i.show) && (i.show = i.show.jquery ? {
            target: i.show
        }: {
            event: i.show
        }), "hide" in i && (i.hide === u || "object" != typeof i.hide) && (i.hide = i.hide.jquery ? {
            target: i.hide
        }: {
            event: i.hide
        }), "style" in i && (i.style === u || "object" != typeof i.style) && (i.style = {
            classes: i.style
        }), n.each(r,
        function() {
            this.sanitize && this.sanitize(i)
        }), i)
    }
    function tt(a, y, tt, it) {
        function pt(n) {
            for (var r = 0, u, t = y, i = n.split("."); t = t[i[r++]];) r < i.length && (u = t);
            return [u || y, i.pop()]
        }
        function wt() {
            var n = y.style.widget;
            ut.toggleClass(d, n).toggleClass(g, y.style.def && !n),
            ft.content.toggleClass(d + "-content", n),
            ft.titlebar && ft.titlebar.toggleClass(d + "-header", n),
            ft.button && ft.button.toggleClass(e + "-icon", !n)
        }
        function lt(n) {
            ft.title && (ft.titlebar.remove(), ft.titlebar = ft.title = ft.button = u, n !== t && rt.reposition())
        }
        function bt() {
            var i = y.content.title.button,
            u = typeof i == "string",
            r = u ? i: "Close tooltip";
            ft.button && ft.button.remove(),
            ft.button = i.jquery ? i: n("<a />", {
                "class": "ui-state-default ui-tooltip-close " + (y.style.widget ? "": e + "-icon"),
                title: r,
                "aria-label": r
            }).prepend(n("<span />", {
                "class": "ui-icon ui-icon-close",
                html: "&times;"
            })),
            ft.button.appendTo(ft.titlebar).attr("role", "button").click(function(n) {
                return ut.hasClass(h) || rt.hide(n),
                t
            }),
            rt.redraw()
        }
        function at() {
            var t = ct + "-title";
            ft.titlebar && lt(),
            ft.titlebar = n("<div />", {
                "class": e + "-titlebar " + (y.style.widget ? "ui-widget-header": "")
            }).append(ft.title = n("<div />", {
                id: t,
                "class": e + "-title",
                "aria-atomic": i
            })).insertBefore(ft.content).delegate(".ui-tooltip-close", "mousedown keydown mouseup keyup mouseout",
            function(t) {
                n(this).toggleClass("ui-state-active ui-state-focus", t.type.substr( - 4) === "down")
            }).delegate(".ui-tooltip-close", "mouseover mouseout",
            function(t) {
                n(this).toggleClass("ui-state-hover", t.type === "mouseover")
            }),
            y.content.title.button ? bt() : rt.rendered && rt.redraw()
        }
        function ni(n) {
            var i = ft.button,
            r = ft.title;
            if (!rt.rendered) return t;
            n ? (r || at(), bt()) : i.remove()
        }
        function vt(i, r) {
            var u = ft.title;
            if (!rt.rendered || !i) return t;
            if (n.isFunction(i) && (i = i.call(a, et.event, rt)), i !== t && (i || i === "")) i.jquery && i.length > 0 ? u.empty().append(i.css({
                display: "block"
            })) : u.html(i);
            else return lt(t);
            rt.redraw(),
            r !== t && rt.rendered && ut[0].offsetWidth > 0 && rt.reposition(et.event)
        }
        function yt(i, r) {
            function f(i) {
                function e(u) {
                    u && (delete f[u.src], clearTimeout(rt.timers.img[u.src]), n(u).unbind(ot)),
                    n.isEmptyObject(f) && (rt.redraw(), r !== t && rt.reposition(et.event), i())
                }
                var s, f = {};
                if ((s = u.find("img[src]:not([height]):not([width])")).length === 0) return e();
                s.each(function(t, i) {
                    if (f[i.src] === o) {
                        var r = 0,
                        u = 3;
                        (function s() {
                            if (i.height || i.width || r > u) return e(i);
                            r += 1,
                            rt.timers.img[i.src] = setTimeout(s, 700)
                        })(),
                        n(i).bind("error" + ot + " load" + ot,
                        function() {
                            e(this)
                        }),
                        f[i.src] = i
                    }
                })
            }
            var u = ft.content;
            return ! rt.rendered || !i ? t: (n.isFunction(i) && (i = i.call(a, et.event, rt) || ""), i.jquery && i.length > 0 ? u.empty().append(i.css({
                display: "block"
            })) : u.html(i), rt.rendered < 0 ? ut.queue("fx", f) : (st = 0, f(n.noop)), rt)
        }
        function kt() {
            function o(n) {
                if (ut.hasClass(h)) return t;
                clearTimeout(rt.timers.show),
                clearTimeout(rt.timers.hide);
                var r = function() {
                    rt.toggle(i, n)
                };
                y.show.delay > 0 ? rt.timers.show = setTimeout(r, y.show.delay) : r()
            }
            function c(i) {
                if (ut.hasClass(h) || ht || st) return t;
                var f = n(i.relatedTarget || i.target),
                e = f.closest(v)[0] === ut[0],
                o = f[0] === r.show[0];
                if (clearTimeout(rt.timers.show), clearTimeout(rt.timers.hide), u.target === "mouse" && e || y.hide.fixed && /mouse(out|leave|move)/.test(i.type) && (e || o)) {
                    try {
                        i.preventDefault(),
                        i.stopImmediatePropagation()
                    } catch(s) {}
                    return
                }
                y.hide.delay > 0 ? rt.timers.hide = setTimeout(function() {
                    rt.hide(i)
                },
                y.hide.delay) : rt.hide(i)
            }
            function l(n) {
                if (ut.hasClass(h)) return t;
                clearTimeout(rt.timers.inactive),
                rt.timers.inactive = setTimeout(function() {
                    rt.hide(n)
                },
                y.hide.inactive)
            }
            function p(n) {
                rt.rendered && ut[0].offsetWidth > 0 && rt.reposition(n)
            }
            var u = y.position,
            r = {
                show: y.show.target,
                hide: y.hide.target,
                viewport: n(u.viewport),
                document: n(document),
                body: n(document.body),
                window: n(window)
            },
            e = {
                show: n.trim("" + y.show.event).split(" "),
                hide: n.trim("" + y.hide.event).split(" ")
            },
            w = n.browser.msie && parseInt(n.browser.version, 10) === 6;
            ut.bind("mouseenter" + ot + " mouseleave" + ot,
            function(n) {
                var t = n.type === "mouseenter";
                t && rt.focus(n),
                ut.toggleClass(nt, t)
            }),
            y.hide.fixed && (r.hide = r.hide.add(ut), ut.bind("mouseover" + ot,
            function() {
                ut.hasClass(h) || clearTimeout(rt.timers.hide)
            })),
            /mouse(out|leave)/i.test(y.hide.event) ? y.hide.leave === "window" && r.window.bind("mouseout" + ot + " blur" + ot,
            function(n) { / select | option / .test(n.target) && !n.relatedTarget && rt.hide(n)
            }) : /mouse(over|enter)/i.test(y.show.event) && r.hide.bind("mouseleave" + ot,
            function() {
                clearTimeout(rt.timers.show)
            }),
            ("" + y.hide.event).indexOf("unfocus") > -1 && u.container.closest("html").bind("mousedown" + ot,
            function(t) {
                var i = n(t.target),
                u = rt.rendered && !ut.hasClass(h) && ut[0].offsetWidth > 0,
                r = i.parents(v).filter(ut[0]).length > 0;
                i[0] === a[0] || i[0] === ut[0] || r || a.has(i[0]).length || i.attr("disabled") || rt.hide(t)
            }),
            "number" == typeof y.hide.inactive && (r.show.bind("qtip-" + tt + "-inactive", l), n.each(f.inactiveEvents,
            function(n, t) {
                r.hide.add(ft.tooltip).bind(t + ot + "-inactive", l)
            })),
            n.each(e.hide,
            function(t, i) {
                var u = n.inArray(i, e.show),
                f = n(r.hide);
                u > -1 && f.add(r.show).length === f.length || i === "unfocus" ? (r.show.bind(i + ot,
                function(n) {
                    ut[0].offsetWidth > 0 ? c(n) : o(n)
                }), delete e.show[u]) : r.hide.bind(i + ot, c)
            }),
            n.each(e.show,
            function(n, t) {
                r.show.bind(t + ot, o)
            }),
            "number" == typeof y.hide.distance && r.show.add(ut).bind("mousemove" + ot,
            function(n) {
                var t = et.origin || {},
                i = y.hide.distance,
                r = Math.abs;
                (r(n.pageX - t.pageX) >= i || r(n.pageY - t.pageY) >= i) && rt.hide(n)
            }),
            u.target === "mouse" && (r.show.bind("mousemove" + ot,
            function(n) {
                s = {
                    pageX: n.pageX,
                    pageY: n.pageY,
                    type: "mousemove"
                }
            }), u.adjust.mouse && (y.hide.event && (ut.bind("mouseleave" + ot,
            function(n) { (n.relatedTarget || n.target) !== r.show[0] && rt.hide(n)
            }), ft.target.bind("mouseenter" + ot + " mouseleave" + ot,
            function(n) {
                et.onTarget = n.type === "mouseenter"
            })), r.document.bind("mousemove" + ot,
            function(n) {
                rt.rendered && et.onTarget && !ut.hasClass(h) && ut[0].offsetWidth > 0 && rt.reposition(n || s)
            }))),
            (u.adjust.resize || r.viewport.length) && (n.event.special.resize ? r.viewport: r.window).bind("resize" + ot, p),
            (r.viewport.length || w && ut.css("position") === "fixed") && r.viewport.bind("scroll" + ot, p)
        }
        function dt() {
            var t = [y.show.target[0], y.hide.target[0], rt.rendered && ft.tooltip[0], y.position.container[0], y.position.viewport[0], window, document];
            rt.rendered ? n([]).pushStack(n.grep(t,
            function(n) {
                return typeof n == "object"
            })).unbind(ot) : y.show.target.unbind(ot + "-create")
        }
        var rt = this,
        gt = document.body,
        ct = e + "-" + tt,
        ht = 0,
        st = 0,
        ut = n(),
        ot = ".qtip-" + tt,
        ft,
        et;
        rt.id = tt,
        rt.rendered = t,
        rt.destroyed = t,
        rt.elements = ft = {
            target: a
        },
        rt.timers = {
            img: {}
        },
        rt.options = y,
        rt.checks = {},
        rt.plugins = {},
        rt.cache = et = {
            event: {},
            target: n(),
            disabled: t,
            attr: it,
            onTarget: t
        },
        rt.checks.builtin = {
            "^id$": function(r, u, o) {
                var h = o === i ? f.nextid: o,
                s = e + "-" + h;
                h !== t && h.length > 0 && !n("#" + s).length && (ut[0].id = s, ft.content[0].id = s + "-content", ft.title[0].id = s + "-title")
            },
            "^content.text$": function(n, t, i) {
                yt(i)
            },
            "^content.title.text$": function(n, t, i) {
                if (!i) return lt(); ! ft.title && i && at(),
                vt(i)
            },
            "^content.title.button$": function(n, t, i) {
                ni(i)
            },
            "^position.(my|at)$": function(n, t, i) {
                "string" == typeof i && (n[t] = new r.Corner(i))
            },
            "^position.container$": function(n, t, i) {
                rt.rendered && ut.appendTo(i)
            },
            "^show.ready$": function() {
                rt.rendered ? rt.toggle(i) : rt.render(1)
            },
            "^style.classes$": function(n, t, i) {
                ut.attr("class", e + " qtip ui-helper-reset " + i)
            },
            "^style.widget|content.title": wt,
            "^events.(render|show|move|hide|focus|blur)$": function(t, i, r) {
                ut[(n.isFunction(r) ? "": "un") + "bind"]("tooltip" + i, r)
            },
            "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                var n = y.position;
                ut.attr("tracking", n.target === "mouse" && n.adjust.mouse),
                dt(),
                kt()
            }
        },
        n.extend(rt, {
            render: function(u) {
                if (rt.rendered) return rt;
                var o = y.content.text,
                f = y.content.title.text,
                s = y.position,
                c = n.Event("tooltiprender");
                return n.attr(a[0], "aria-describedby", ct),
                ut = ft.tooltip = n("<div/>", {
                    id: ct,
                    "class": e + " qtip ui-helper-reset " + g + " " + y.style.classes + " " + e + "-pos-" + y.position.my.abbrev(),
                    width: y.style.width || "",
                    height: y.style.height || "",
                    tracking: s.target === "mouse" && s.adjust.mouse,
                    role: "alert",
                    "aria-live": "polite",
                    "aria-atomic": t,
                    "aria-describedby": ct + "-content",
                    "aria-hidden": i
                }).toggleClass(h, et.disabled).data("qtip", rt).appendTo(y.position.container).append(ft.content = n("<div />", {
                    "class": e + "-content",
                    id: ct + "-content",
                    "aria-atomic": i
                })),
                rt.rendered = -1,
                st = 1,
                ht = 1,
                f && (at(), n.isFunction(f) || vt(f, t)),
                n.isFunction(o) || yt(o, t),
                rt.rendered = i,
                wt(),
                n.each(y.events,
                function(t, i) {
                    n.isFunction(i) && ut.bind(t === "toggle" ? "tooltipshow tooltiphide": "tooltip" + t, i)
                }),
                n.each(r,
                function() {
                    this.initialize === "render" && this(rt)
                }),
                kt(),
                ut.queue("fx",
                function(n) {
                    c.originalEvent = et.event,
                    ut.trigger(c, [rt]),
                    st = 0,
                    ht = 0,
                    rt.redraw(),
                    (y.show.ready || u) && rt.toggle(i, et.event, t),
                    n()
                }),
                rt
            },
            get: function(n) {
                var t, i;
                switch (n.toLowerCase()) {
                case "dimensions":
                    t = {
                        height: ut.outerHeight(),
                        width: ut.outerWidth()
                    };
                    break;
                case "offset":
                    t = r.offset(ut, y.position.container);
                    break;
                default:
                    i = pt(n.toLowerCase()),
                    t = i[0][i[1]],
                    t = t.precedance ? t.string() : t
                }
                return t
            },
            set: function(r, f) {
                function a(n, t) {
                    var i, r, u;
                    for (i in s) for (r in s[i])(u = new RegExp(r, "i").exec(n)) && (t.push(u), s[i][r].apply(rt, t))
                }
                var c = /^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,
                l = /^content\.(title|attr)|style/i,
                e = t,
                o = t,
                s = rt.checks,
                h;
                return "string" == typeof r ? (h = r, r = {},
                r[h] = f) : r = n.extend(i, {},
                r),
                n.each(r,
                function(t, i) {
                    var u = pt(t.toLowerCase()),
                    f;
                    f = u[0][u[1]],
                    u[0][u[1]] = "object" == typeof i && i.nodeType ? n(i) : i,
                    r[t] = [u[0], u[1], i, f],
                    e = c.test(t) || e,
                    o = l.test(t) || o
                }),
                b(y),
                ht = st = 1,
                n.each(r, a),
                ht = st = 0,
                rt.rendered && ut[0].offsetWidth > 0 && (e && rt.reposition(y.position.target === "mouse" ? u: et.event), o && rt.redraw()),
                rt
            },
            toggle: function(r, f) {
                function l() {
                    r ? (n.browser.msie && ut[0].style.removeAttribute("filter"), ut.css("overflow", ""), "string" == typeof e.autofocus && n(e.autofocus, ut).focus(), e.target.trigger("qtip-" + tt + "-inactive")) : ut.css({
                        display: "",
                        visibility: "",
                        opacity: "",
                        left: "",
                        top: ""
                    }),
                    o = n.Event("tooltip" + (r ? "visible": "hidden")),
                    o.originalEvent = f ? et.event: u,
                    ut.trigger(o, [rt])
                }
                if (!rt.rendered) return r ? rt.render(1) : rt;
                var c = r ? "show": "hide",
                e = y[c],
                d = y[r ? "hide": "show"],
                a = y.position,
                h = y.content,
                p = ut[0].offsetWidth > 0,
                b = r || e.target.length === 1,
                k = !f || e.target.length < 2 || et.target[0] === f.target,
                g,
                o;
                if ((typeof r).search("boolean|number") && (r = !p), !ut.is(":animated") && p === r && k) return rt;
                if (f) {
                    if (/over|enter/.test(f.type) && /out|leave/.test(et.event.type) && y.show.target.add(f.target).length === y.show.target.length && ut.has(f.relatedTarget).length) return rt;
                    et.event = n.extend({},
                    f)
                }
                return (o = n.Event("tooltip" + c), o.originalEvent = f ? et.event: u, ut.trigger(o, [rt, 90]), o.isDefaultPrevented()) ? rt: (n.attr(ut[0], "aria-hidden", !!!r), r ? (et.origin = n.extend({},
                s), rt.focus(f), n.isFunction(h.text) && yt(h.text, t), n.isFunction(h.title.text) && vt(h.title.text, t), !w && a.target === "mouse" && a.adjust.mouse && (n(document).bind("mousemove.qtip",
                function(n) {
                    s = {
                        pageX: n.pageX,
                        pageY: n.pageY,
                        type: "mousemove"
                    }
                }), w = i), rt.reposition(f, arguments[2]), (o.solo = !!e.solo) && n(v, e.solo).not(ut).qtip("hide", o)) : (clearTimeout(rt.timers.show), delete et.origin, w && !n(v + '[tracking="true"]:visible', e.solo).not(ut).length && (n(document).unbind("mousemove.qtip"), w = t), rt.blur(f)), e.effect === t || b === t ? (ut[c](), l.call(ut)) : n.isFunction(e.effect) ? (ut.stop(1, 1), e.effect.call(ut, rt), ut.queue("fx",
                function(n) {
                    l(),
                    n()
                })) : ut.fadeTo(90, r ? 1 : 0, l), r && e.target.trigger("qtip-" + tt + "-inactive"), rt)
            },
            show: function(n) {
                return rt.toggle(i, n)
            },
            hide: function(n) {
                return rt.toggle(t, n)
            },
            focus: function(t) {
                if (!rt.rendered) return rt;
                var r = n(v),
                e = parseInt(ut[0].style.zIndex, 10),
                u = f.zindex + r.length,
                o = n.extend({},
                t),
                s,
                i;
                return ut.hasClass(p) || (i = n.Event("tooltipfocus"), i.originalEvent = o, ut.trigger(i, [rt, u]), i.isDefaultPrevented() || (e !== u && (r.each(function() {
                    this.style.zIndex > e && (this.style.zIndex = this.style.zIndex - 1)
                }), r.filter("." + p).qtip("blur", o)), ut.addClass(p)[0].style.zIndex = u)),
                rt
            },
            blur: function(t) {
                var r = n.extend({},
                t),
                i;
                return ut.removeClass(p),
                i = n.Event("tooltipblur"),
                i.originalEvent = r,
                ut.trigger(i, [rt]),
                rt
            },
            reposition: function(i, u) {
                if (!rt.rendered || ht) return rt;
                ht = 1;
                var o = y.position.target,
                k = y.position,
                c = k.my,
                a = k.at,
                d = k.adjust,
                tt = d.method.split(" "),
                g = ut.outerWidth(),
                nt = ut.outerHeight(),
                w = 0,
                b = 0,
                ot = n.Event("tooltipmove"),
                st = ut.css("position") === "fixed",
                h = k.viewport,
                f = {
                    left: 0,
                    top: 0
                },
                v = k.container,
                it = t,
                l = rt.plugins.tip,
                lt = ut[0].offsetWidth > 0,
                p = {
                    horizontal: tt[0],
                    vertical: tt[1] = tt[1] || tt[0],
                    enabled: h.jquery && o[0] !== window && o[0] !== gt && d.method !== "none",
                    left: function(n) {
                        var o = p.horizontal === "shift",
                        s = d.x * (p.horizontal.substr( - 6) === "invert" ? 2 : 0),
                        e = -v.offset.left + h.offset.left + h.scrollLeft,
                        y = c.x === "left" ? g: c.x === "right" ? -g: -g / 2,
                        k = a.x === "left" ? w: a.x === "right" ? -w: -w / 2,
                        b = l && l.size ? l.size.width || 0 : 0,
                        i = l && l.corner && l.corner.precedance === "x" && !o ? b: 0,
                        u = e - n + i,
                        r = n + g - h.width - e + i,
                        t = y - (c.precedance === "x" || c.x === c.y ? k: 0) - (a.x === "center" ? w / 2 : 0),
                        nt = c.x === "center";
                        return o ? (i = l && l.corner && l.corner.precedance === "y" ? b: 0, t = (c.x === "left" ? 1 : -1) * y - i, f.left += u > 0 ? u: r > 0 ? -r: 0, f.left = Math.max( - v.offset.left + h.offset.left + (i && l.corner.x === "center" ? l.offset: 0), n - t, Math.min(Math.max( - v.offset.left + h.offset.left + h.width, n + t), f.left))) : (u > 0 && (c.x !== "left" || r > 0) ? f.left -= t + s: r > 0 && (c.x !== "right" || u > 0) && (f.left -= (nt ? -t: t) + s), f.left < e && -f.left > r && (f.left = n)),
                        f.left - n
                    },
                    top: function(n) {
                        var e = p.vertical === "shift",
                        o = d.y * (p.vertical.substr( - 6) === "invert" ? 2 : 0),
                        s = -v.offset.top + h.offset.top + h.scrollTop,
                        y = c.y === "top" ? nt: c.y === "bottom" ? -nt: -nt / 2,
                        k = a.y === "top" ? b: a.y === "bottom" ? -b: -b / 2,
                        w = l && l.size ? l.size.height || 0 : 0,
                        i = l && l.corner && l.corner.precedance === "y" && !e ? w: 0,
                        u = s - n + i,
                        r = n + nt - h.height - s + i,
                        t = y - (c.precedance === "y" || c.x === c.y ? k: 0) - (a.y === "center" ? b / 2 : 0),
                        g = c.y === "center";
                        return e ? (i = l && l.corner && l.corner.precedance === "x" ? w: 0, t = (c.y === "top" ? 1 : -1) * y - i, f.top += u > 0 ? u: r > 0 ? -r: 0, f.top = Math.max( - v.offset.top + h.offset.top + (i && l.corner.x === "center" ? l.offset: 0), n - t, Math.min(Math.max( - v.offset.top + h.offset.top + h.height, n + t), f.top))) : (u > 0 && (c.y !== "top" || r > 0) ? f.top -= t + o: r > 0 && (c.y !== "bottom" || u > 0) && (f.top -= (g ? -t: t) + o), f.top < 0 && -f.top > r && (f.top = n)),
                        f.top - n
                    }
                },
                ct;
                if (n.isArray(o) && o.length === 2) a = {
                    x: "left",
                    y: "top"
                },
                f = {
                    left: o[0],
                    top: o[1]
                };
                else if (o === "mouse" && (i && i.pageX || et.event.pageX)) a = {
                    x: "left",
                    y: "top"
                },
                i = (i && (i.type === "resize" || i.type === "scroll") ? et.event: i && i.pageX && i.type === "mousemove" ? i: s && s.pageX && (d.mouse || !i || !i.pageX) ? {
                    pageX: s.pageX,
                    pageY: s.pageY
                }: !d.mouse && et.origin && et.origin.pageX && y.show.distance ? et.origin: i) || i || et.event || s || {},
                f = {
                    top: i.pageY,
                    left: i.pageX
                };
                else {
                    if (o = o === "event" ? i && i.target && i.type !== "scroll" && i.type !== "resize" ? et.target = n(i.target) : et.target: et.target = n(o.jquery ? o: ft.target), o = n(o).eq(0), o.length === 0) return rt;
                    o[0] === document || o[0] === window ? (w = r.iOS ? window.innerWidth: o.width(), b = r.iOS ? window.innerHeight: o.height(), o[0] === window && (f = {
                        top: (h || o).scrollTop(),
                        left: (h || o).scrollLeft()
                    })) : o.is("area") && r.imagemap ? f = r.imagemap(o, a, p.enabled ? tt: t) : o[0].namespaceURI === "http://www.w3.org/2000/svg" && r.svg ? f = r.svg(o, a) : (w = o.outerWidth(), b = o.outerHeight(), f = r.offset(o, v)),
                    f.offset && (w = f.width, b = f.height, it = f.flipoffset, f = f.offset),
                    (r.iOS < 4.1 && r.iOS > 3.1 || r.iOS == 4.3 || !r.iOS && st) && (ct = n(window), f.left -= ct.scrollLeft(), f.top -= ct.scrollTop()),
                    f.left += a.x === "right" ? w: a.x === "center" ? w / 2 : 0,
                    f.top += a.y === "bottom" ? b: a.y === "center" ? b / 2 : 0
                }
                return (f.left += d.x + (c.x === "right" ? -g: c.x === "center" ? -g / 2 : 0), f.top += d.y + (c.y === "bottom" ? -nt: c.y === "center" ? -nt / 2 : 0), p.enabled ? (h = {
                    elem: h,
                    height: h[(h[0] === window ? "h": "outerH") + "eight"](),
                    width: h[(h[0] === window ? "w": "outerW") + "idth"](),
                    scrollLeft: st ? 0 : h.scrollLeft(),
                    scrollTop: st ? 0 : h.scrollTop(),
                    offset: h.offset() || {
                        left: 0,
                        top: 0
                    }
                },
                v = {
                    elem: v,
                    scrollLeft: v.scrollLeft(),
                    scrollTop: v.scrollTop(),
                    offset: v.offset() || {
                        left: 0,
                        top: 0
                    }
                },
                f.adjusted = {
                    left: p.horizontal !== "none" ? p.left(f.left) : 0,
                    top: p.vertical !== "none" ? p.top(f.top) : 0
                },
                f.adjusted.left + f.adjusted.top && ut.attr("class", ut[0].className.replace(/ui-tooltip-pos-\w+/i, e + "-pos-" + c.abbrev())), it && f.adjusted.left && (f.left += it.left), it && f.adjusted.top && (f.top += it.top)) : f.adjusted = {
                    left: 0,
                    top: 0
                },
                ot.originalEvent = n.extend({},
                i), ut.trigger(ot, [rt, f, h.elem || h]), ot.isDefaultPrevented()) ? rt: (delete f.adjusted, u === t || !lt || isNaN(f.left) || isNaN(f.top) || o === "mouse" || !n.isFunction(k.effect) ? ut.css(f) : n.isFunction(k.effect) && (k.effect.call(ut, rt, n.extend({},
                f)), ut.queue(function(t) {
                    n(this).css({
                        opacity: "",
                        height: ""
                    }),
                    n.browser.msie && this.style.removeAttribute("filter"),
                    t()
                })), ht = 0, rt)
            },
            redraw: function() {
                if (rt.rendered < 1 || st) return rt;
                var u = y.position.container,
                r, i, n, t;
                return st = 1,
                y.style.height && ut.css("height", y.style.height),
                y.style.width ? ut.css("width", y.style.width) : (ut.css("width", "").addClass(l), i = ut.width() + 1, n = ut.css("max-width") || "", t = ut.css("min-width") || "", r = (n + t).indexOf("%") > -1 ? u.width() / 100 : 0, n = (n.indexOf("%") > -1 ? r: 1) * parseInt(n, 10) || i, t = (t.indexOf("%") > -1 ? r: 1) * parseInt(t, 10) || 0, i = n + t ? Math.min(Math.max(i, t), n) : i, ut.css("width", Math.round(i)).removeClass(l)),
                st = 0,
                rt
            },
            disable: function(t) {
                return "boolean" != typeof t && (t = !(ut.hasClass(h) || et.disabled)),
                rt.rendered ? (ut.toggleClass(h, t), n.attr(ut[0], "aria-disabled", t)) : et.disabled = !!t,
                rt
            },
            enable: function() {
                return rt.disable(t)
            },
            destroy: function() {
                var t = a[0],
                r = n.attr(t, c),
                u = a.data("qtip");
                return rt.destroyed = i,
                rt.rendered && (ut.stop(1, 0).remove(), n.each(rt.plugins,
                function() {
                    this.destroy && this.destroy()
                })),
                clearTimeout(rt.timers.show),
                clearTimeout(rt.timers.hide),
                dt(),
                u && rt !== u || (n.removeData(t, "qtip"), y.suppress && r && (n.attr(t, "title", r), a.removeAttr(c)), a.removeAttr("aria-describedby")),
                a.unbind(".qtip-" + tt),
                delete k[rt.id],
                a
            }
        })
    }
    function it(e, o) {
        var v, h, p, s, d, l = n(this),
        g = n(document.body),
        w = this === document ? g: l,
        k = l.metadata ? l.metadata(o.metadata) : u,
        nt = o.metadata.type === "html5" && k ? k[o.metadata.name] : u,
        a = l.data(o.metadata.name || "qtipopts");
        try {
            a = typeof a == "string" ? new Function("return " + a)() : a
        } catch(it) {
            y("Unable to parse HTML5 attribute data: " + a)
        }
        if (s = n.extend(i, {},
        f.defaults, o, typeof a == "object" ? b(a) : u, b(nt || k)), h = s.position, s.id = e, "boolean" == typeof s.content.text) if (p = l.attr(s.content.attr), s.content.attr !== t && p) s.content.text = p;
        else return y("Unable to locate content for tooltip! Aborting render of tooltip on element: ", l),
        t;
        if (h.container.length || (h.container = g), h.target === t && (h.target = w), s.show.target === t && (s.show.target = w), s.show.solo === i && (s.show.solo = h.container.closest("body")), s.hide.target === t && (s.hide.target = w), s.position.viewport === i && (s.position.viewport = h.container), h.container = h.container.eq(0), h.at = new r.Corner(h.at), h.my = new r.Corner(h.my), n.data(this, "qtip")) if (s.overwrite) l.qtip("destroy");
        else if (s.overwrite === t) return t;
        return s.suppress && (d = n.attr(this, "title")) && n(this).removeAttr("title").attr(c, d),
        v = new tt(l, s, e, !!p),
        n.data(this, "qtip", v),
        l.bind("remove.qtip-" + e + " removeqtip.qtip-" + e,
        function() {
            v.destroy()
        }),
        v
    }
    function rt(r) {
        var e = this,
        l = r.elements.tooltip,
        u = r.options.content.ajax,
        s = f.defaults.content.ajax,
        h = ".qtip-ajax",
        v = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        a = i,
        c = t,
        o;
        r.checks.ajax = {
            "^content.ajax": function(n, t, i) {
                t === "ajax" && (u = i),
                t === "once" ? e.init() : u && u.url ? e.load() : l.unbind(h)
            }
        },
        n.extend(e, {
            init: function() {
                return u && u.url && l.unbind(h)[u.once ? "one": "bind"]("tooltipshow" + h, e.load),
                e
            },
            load: function(f) {
                function w() {
                    var e;
                    r.destroyed || (a = t, p && (c = i, r.show(f.originalEvent)), (e = s.complete || u.complete) && n.isFunction(e) && e.apply(u.context || r, arguments))
                }
                function b(t, i, f) {
                    var e;
                    r.destroyed || (y && (t = n("<div/>").append(t.replace(v, "")).find(y)), (e = s.success || u.success) && n.isFunction(e) ? e.call(u.context || r, t, i, f) : r.set("content.text", t))
                }
                function k(n, t, i) {
                    r.destroyed || n.status === 0 || r.set("content.text", t + ": " + i)
                }
                if (c) {
                    c = t;
                    return
                }
                var l = u.url.indexOf(" "),
                h = u.url,
                y,
                p = !u.loading && a;
                if (p) try {
                    f.preventDefault()
                } catch(d) {} else if (f && f.isDefaultPrevented()) return e;
                o && o.abort && o.abort(),
                l > -1 && (y = h.substr(l), h = h.substr(0, l)),
                o = n.ajax(n.extend({
                    error: s.error || k,
                    context: r
                },
                u, {
                    url: h,
                    success: b,
                    complete: w
                }))
            },
            destroy: function() {
                o && o.abort && o.abort(),
                r.destroyed = i
            }
        }),
        e.init()
    }
    function ut(n, t, i) {
        var u = Math.ceil(t / 2),
        f = Math.ceil(i / 2),
        r = {
            bottomright: [[0, 0], [t, i], [t, 0]],
            bottomleft: [[0, 0], [t, 0], [0, i]],
            topright: [[0, i], [t, 0], [t, i]],
            topleft: [[0, 0], [0, i], [t, i]],
            topcenter: [[0, i], [u, 0], [t, i]],
            bottomcenter: [[0, 0], [t, 0], [u, i]],
            rightcenter: [[0, 0], [t, f], [0, i]],
            leftcenter: [[t, 0], [t, i], [0, f]]
        };
        return r.lefttop = r.bottomright,
        r.righttop = r.bottomleft,
        r.leftbottom = r.topright,
        r.rightbottom = r.topleft,
        r[n.string()]
    }
    function ft(f) {
        function nt() {
            var n = v.width;
            v.width = v.height,
            v.height = n
        }
        function tt() {
            v.width = a.width,
            v.height = a.height
        }
        function it(n, r, u) {
            if (h.tip) {
                var l = s.corner.clone(),
                v = u.adjusted,
                g = f.options.position.adjust.method.split(" "),
                k = g[0],
                d = g[1] || g[0],
                y = {
                    left: t,
                    top: t,
                    x: 0,
                    y: 0
                },
                c,
                b = {},
                p;
                s.corner.fixed !== i && (k === "shift" && l.precedance === "x" && v.left && l.y !== "center" ? l.precedance = l.precedance === "x" ? "y": "x": k !== "shift" && v.left && (l.x = l.x === "center" ? v.left > 0 ? "left": "right": l.x === "left" ? "right": "left"), d === "shift" && l.precedance === "y" && v.top && l.x !== "center" ? l.precedance = l.precedance === "y" ? "x": "y": d !== "shift" && v.top && (l.y = l.y === "center" ? v.top > 0 ? "top": "bottom": l.y === "top" ? "bottom": "top"), l.string() !== w.corner.string() && (w.top !== v.top || w.left !== v.left) && s.update(l, t)),
                c = s.position(l, v),
                c.right !== o && (c.left = -c.right),
                c.bottom !== o && (c.top = -c.bottom),
                c.user = Math.max(0, a.offset),
                (y.left = k === "shift" && !!v.left) && (l.x === "center" ? b["margin-left"] = y.x = c["margin-left"] - v.left: (p = c.right !== o ? [v.left, -c.left] : [ - v.left, c.left], (y.x = Math.max(p[0], p[1])) > p[0] && (u.left -= v.left, y.left = t), b[c.right !== o ? "right": "left"] = y.x)),
                (y.top = d === "shift" && !!v.top) && (l.y === "center" ? b["margin-top"] = y.y = c["margin-top"] - v.top: (p = c.bottom !== o ? [v.top, -c.top] : [ - v.top, c.top], (y.y = Math.max(p[0], p[1])) > p[0] && (u.top -= v.top, y.top = t), b[c.bottom !== o ? "bottom": "top"] = y.y)),
                h.tip.css(b).toggle(!(y.x && y.y || l.x === "center" && y.y || l.y === "center" && y.x)),
                u.left -= c.left.charAt ? c.user: k !== "shift" || y.top || !y.left && !y.top ? c.left: 0,
                u.top -= c.top.charAt ? c.user: d !== "shift" || y.left || !y.left && !y.top ? c.top: 0,
                w.left = v.left,
                w.top = v.top,
                w.corner = l.clone()
            }
        }
        function d(n, t, i) {
            t = t ? t: n[n.precedance];
            var f = p.hasClass(l),
            e = h.titlebar && n.y === "top",
            o = e ? h.titlebar: h.content,
            u = "border-" + t + "-width",
            r;
            return p.addClass(l),
            r = parseInt(o.css(u), 10),
            r = (i ? r || parseInt(p.css(u), 10) : r) || 0,
            p.toggleClass(l, f),
            r
        }
        function rt(t) {
            var f = h.titlebar && t.y === "top",
            e = f ? h.titlebar: h.content,
            i = n.browser.mozilla,
            o = i ? "-moz-": n.browser.webkit ? "-webkit-": "",
            r = t.y + (i ? "": "-") + t.x,
            u = o + (i ? "border-radius-" + r: "border-" + r + "-radius");
            return parseInt(e.css(u), 10) || parseInt(p.css(u), 10) || 0
        }
        function g(n) {
            var r = n.precedance === "y",
            s = v[r ? "width": "height"],
            f = v[r ? "height": "width"],
            h = n.string().indexOf("center") > -1,
            l = s * (h ? .5 : 1),
            i = Math.pow,
            a = Math.round,
            y,
            e,
            o,
            u = Math.sqrt(i(l, 2) + i(f, 2)),
            t = [c / l * u, c / f * u];
            return t[2] = Math.sqrt(i(t[0], 2) - i(c, 2)),
            t[3] = Math.sqrt(i(t[1], 2) - i(c, 2)),
            y = u + t[2] + t[3] + (h ? 0 : t[0]),
            e = y / u,
            o = [a(e * f), a(e * s)],
            {
                height: o[r ? 0 : 1],
                width: o[r ? 1 : 0]
            }
        }
        var s = this,
        a = f.options.style.tip,
        h = f.elements,
        p = h.tooltip,
        w = {
            top: 0,
            left: 0
        },
        v = {
            width: a.width,
            height: a.height
        },
        y = {},
        c = a.border || 0,
        b = ".qtip-tip",
        k = !!(n("<canvas />")[0] || {}).getContext;
        s.corner = u,
        s.mimic = u,
        s.border = c,
        s.offset = a.offset,
        s.size = v,
        f.checks.tip = {
            "^position.my|style.tip.(corner|mimic|border)$": function() {
                s.init() || s.destroy(),
                f.reposition()
            },
            "^style.tip.(height|width)$": function() {
                v = {
                    width: a.width,
                    height: a.height
                },
                s.create(),
                s.update(),
                f.reposition()
            },
            "^content.title.text|style.(classes|widget)$": function() {
                h.tip && h.tip.length && s.update()
            }
        },
        n.extend(s, {
            init: function() {
                var t = s.detectCorner() && (k || n.browser.msie);
                return t && (s.create(), s.update(), p.unbind(b).bind("tooltipmove" + b, it)),
                t
            },
            detectCorner: function() {
                var n = a.corner,
                u = f.options.position,
                o = u.at,
                e = u.my.string ? u.my.string() : u.my;
                return n === t || e === t && o === t ? t: (n === i ? s.corner = new r.Corner(e) : n.string || (s.corner = new r.Corner(n), s.corner.fixed = i), w.corner = new r.Corner(s.corner.string()), s.corner.string() !== "centercenter")
            },
            detectColours: function(t) {
                var rt, u, r, i = h.tip.css("cssText", ""),
                e = t || s.corner,
                w = e[e.precedance],
                b = "border-" + w + "-color",
                nt = "border" + w.charAt(0) + w.substr(1) + "Color",
                o = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
                c = "background-color",
                k = "transparent",
                d = " !important",
                tt = n(document.body).css("color"),
                ut = f.elements.content.css("color"),
                it = h.titlebar && (e.y === "top" || e.y === "center" && i.position().top + v.height / 2 + a.offset < h.titlebar.outerHeight(1)),
                g = it ? h.titlebar: h.content;
                p.addClass(l),
                y.fill = u = i.css(c),
                y.border = r = i[0].style[nt] || i.css(b) || p.css(b),
                (!u || o.test(u)) && (y.fill = g.css(c) || k, o.test(y.fill) && (y.fill = p.css(c) || u)),
                (!r || o.test(r) || r === tt) && (y.border = g.css(b) || k, o.test(y.border) && (y.border = r)),
                n("*", i).add(i).css("cssText", c + ":" + k + d + ";border:0" + d + ";"),
                p.removeClass(l)
            },
            create: function() {
                var i = v.width,
                r = v.height,
                t;
                h.tip && h.tip.remove(),
                h.tip = n("<div />", {
                    "class": "ui-tooltip-tip"
                }).css({
                    width: i,
                    height: r
                }).prependTo(p),
                k ? n("<canvas />").appendTo(h.tip)[0].getContext("2d").save() : (t = '<vml:shape coordorigin="0,0" style="display:inline-block; position:absolute; behavior:url(#default#VML);"><\/vml:shape>', h.tip.html(t + t), n("*", h.tip).bind("click mousedown",
                function(n) {
                    n.stopPropagation()
                }))
            },
            update: function(f, e) {
                var ht = h.tip,
                ot = ht.children(),
                rt = v.width,
                ft = v.height,
                ct = "px solid ",
                lt = "px dashed transparent",
                o = a.mimic,
                et = Math.round,
                st,
                l,
                p,
                b,
                it;
                f || (f = w.corner || s.corner),
                o === t ? o = f: (o = new r.Corner(o), o.precedance = f.precedance, o.x === "inherit" ? o.x = f.x: o.y === "inherit" ? o.y = f.y: o.x === o.y && (o[f.precedance] = f[f.precedance])),
                st = o.precedance,
                f.precedance === "x" ? nt() : tt(),
                h.tip.css({
                    width: rt = v.width,
                    height: ft = v.height
                }),
                s.detectColours(f),
                y.border !== "transparent" && y.border !== "#123456" ? (c = d(f, u, i), a.border === 0 && c > 0 && (y.fill = y.border), s.border = c = a.border !== i ? a.border: c) : s.border = c = 0,
                p = ut(o, rt, ft),
                s.size = it = g(f),
                ht.css(it),
                b = f.precedance === "y" ? [et(o.x === "left" ? c: o.x === "right" ? it.width - rt - c: (it.width - rt) / 2), et(o.y === "top" ? it.height - ft: 0)] : [et(o.x === "left" ? it.width - rt: 0), et(o.y === "top" ? c: o.y === "bottom" ? it.height - ft - c: (it.height - ft) / 2)],
                k ? (ot.attr(it), l = ot[0].getContext("2d"), l.restore(), l.save(), l.clearRect(0, 0, 3e3, 3e3), l.translate(b[0], b[1]), l.beginPath(), l.moveTo(p[0][0], p[0][1]), l.lineTo(p[1][0], p[1][1]), l.lineTo(p[2][0], p[2][1]), l.closePath(), l.fillStyle = y.fill, l.strokeStyle = y.border, l.lineWidth = c * 2, l.lineJoin = "miter", l.miterLimit = 100, c && l.stroke(), l.fill()) : (p = "m" + p[0][0] + "," + p[0][1] + " l" + p[1][0] + "," + p[1][1] + " " + p[2][0] + "," + p[2][1] + " xe", b[2] = c && /^(r|b)/i.test(f.string()) ? parseFloat(n.browser.version, 10) === 8 ? 2 : 1 : 0, ot.css({
                    antialias: "" + (o.string().indexOf("center") > -1),
                    left: b[0] - b[2] * Number(st === "x"),
                    top: b[1] - b[2] * Number(st === "y"),
                    width: rt + c,
                    height: ft + c
                }).each(function(t) {
                    var i = n(this);
                    i[i.prop ? "prop": "attr"]({
                        coordsize: rt + c + " " + (ft + c),
                        path: p,
                        fillcolor: y.fill,
                        filled: !!t,
                        stroked: !!!t
                    }).css({
                        display: c || t ? "block": "none"
                    }),
                    t || i.html() !== "" || i.html('<vml:stroke weight="' + c * 2 + 'px" color="' + y.border + '" miterlimit="1000" joinstyle="miter"  style="behavior:url(#default#VML); display:inline-block;" />')
                })),
                e !== t && s.position(f)
            },
            position: function(r) {
                var l = h.tip,
                u = {},
                v = Math.max(0, a.offset),
                f,
                e,
                o;
                return a.corner === t || !l ? t: (r = r || s.corner, f = r.precedance, e = g(r), o = [r.x, r.y], f === "x" && o.reverse(), n.each(o,
                function(n, t) {
                    var o, s;
                    t === "center" ? (o = f === "y" ? "left": "top", u[o] = "50%", u["margin-" + o] = -Math.round(e[f === "y" ? "width": "height"] / 2) + v) : (o = d(r, t, i), s = rt(r), u[t] = n ? c ? d(r, t) : 0 : v + (s > o ? s: 0))
                }), u[r[f]] -= e[f === "x" ? "width": "height"], l.css({
                    top: "",
                    bottom: "",
                    left: "",
                    right: "",
                    margin: ""
                }).css(u), u)
            },
            destroy: function() {
                h.tip && h.tip.remove(),
                h.tip = !1,
                p.unbind(b)
            }
        }),
        s.init()
    }
    var i = !0,
    t = !1,
    u = null,
    o, f, r, s, k = {},
    e = "ui-tooltip",
    d = "ui-widget",
    h = "ui-state-disabled",
    v = "div.qtip." + e,
    g = e + "-default",
    p = e + "-focus",
    nt = e + "-hover",
    l = e + "-fluid",
    et = "-31000px",
    a = "_replacedByqTip",
    c = "oldtitle",
    w;
    f = n.fn.qtip = function(r, e, s) {
        var h = ("" + r).toLowerCase(),
        a = u,
        v = n.makeArray(arguments).slice(1),
        c = v[v.length - 1],
        l = this[0] ? n.data(this[0], "qtip") : u;
        return ! arguments.length && l || h === "api" ? l: "string" == typeof r ? (this.each(function() {
            var r = n.data(this, "qtip");
            if (!r) return i;
            if (c && c.timeStamp && (r.cache.event = c), (h === "option" || h === "options") && e) if (n.isPlainObject(e) || s !== o) r.set(e, s);
            else return a = r.get(e),
            t;
            else r[h] && r[h].apply(r[h], v)
        }), a !== u ? a: this) : "object" == typeof r || !arguments.length ? (l = b(n.extend(i, {},
        r)), f.bind.call(this, l, c)) : void 0
    },
    f.bind = function(u, e) {
        return this.each(function(h) {
            function w(i) {
                function r() {
                    c.render(typeof i == "object" || l.show.ready),
                    p.show.add(p.hide).unbind(y)
                }
                if (c.cache.disabled) return t;
                c.cache.event = n.extend({},
                i),
                c.cache.target = i ? n(i.target) : [o],
                l.show.delay > 0 ? (clearTimeout(c.timers.show), c.timers.show = setTimeout(r, l.show.delay), v.show !== v.hide && p.hide.bind(v.hide,
                function() {
                    clearTimeout(c.timers.show)
                })) : r()
            }
            var l, p, v, y, c, a;
            if (a = n.isArray(u.id) ? u.id[h] : u.id, a = !a || a === t || a.length < 1 || k[a] ? f.nextid++:k[a] = a, y = ".qtip-" + a + "-create", c = it.call(this, a, u), c === t) return i;
            l = c.options,
            n.each(r,
            function() {
                this.initialize === "initialize" && this(c)
            }),
            p = {
                show: l.show.target,
                hide: l.hide.target
            },
            v = {
                show: n.trim("" + l.show.event).replace(/ /g, y + " ") + y,
                hide: n.trim("" + l.hide.event).replace(/ /g, y + " ") + y
            },
            /mouse(over|enter)/i.test(v.show) && !/mouse(out|leave)/i.test(v.hide) && (v.hide += " mouseleave" + y),
            p.show.bind("mousemove" + y,
            function(n) {
                s = {
                    pageX: n.pageX,
                    pageY: n.pageY,
                    type: "mousemove"
                },
                c.cache.onTarget = i
            }),
            p.show.bind(v.show, w),
            (l.show.ready || l.prerender) && w(e)
        })
    },
    r = f.plugins = {
        Corner: function(n) {
            n = ("" + n).replace(/([A-Z])/, " $1").replace(/middle/gi, "center").toLowerCase(),
            this.x = (n.match(/left|right/i) || n.match(/center/) || ["inherit"])[0].toLowerCase(),
            this.y = (n.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase();
            var t = n.charAt(0);
            this.precedance = t === "t" || t === "b" ? "y": "x",
            this.string = function() {
                return this.precedance === "y" ? this.y + this.x: this.x + this.y
            },
            this.abbrev = function() {
                var n = this.x.substr(0, 1),
                t = this.y.substr(0, 1);
                return n === t ? n: n === "c" || n !== "c" && t !== "c" ? t + n: n + t
            },
            this.clone = function() {
                return {
                    x: this.x,
                    y: this.y,
                    precedance: this.precedance,
                    string: this.string,
                    abbrev: this.abbrev,
                    clone: this.clone
                }
            }
        },
        offset: function(t, i) {
            function h(n, t) {
                u.left += t * n.scrollLeft(),
                u.top += t * n.scrollTop()
            }
            var u = t.offset(),
            s = t.closest("body")[0],
            r = i,
            f,
            e,
            o;
            if (r) {
                do r.css("position") !== "static" && (e = r.position(), u.left -= e.left + (parseInt(r.css("borderLeftWidth"), 10) || 0) + (parseInt(r.css("marginLeft"), 10) || 0), u.top -= e.top + (parseInt(r.css("borderTopWidth"), 10) || 0) + (parseInt(r.css("marginTop"), 10) || 0), f || (o = r.css("overflow")) === "hidden" || o === "visible" || (f = r));
                while ((r = n(r[0].offsetParent)).length);
                f && f[0] !== s && h(f, 1)
            }
            return u
        },
        iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,3})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".")) || t,
        fn: {
            attr: function(t, i) {
                if (this.length) {
                    var u = this[0],
                    f = "title",
                    r = n.data(u, "qtip");
                    if (t === f && r && "object" == typeof r && r.options.suppress) return arguments.length < 2 ? n.attr(u, c) : (r && r.options.content.attr === f && r.cache.attr && r.set("content.text", i), this.attr(c, i))
                }
                return n.fn["attr" + a].apply(this, arguments)
            },
            clone: function(t) {
                var r = n([]),
                u = "title",
                i = n.fn["clone" + a].apply(this, arguments);
                return t || i.filter("[" + c + "]").attr("title",
                function() {
                    return n.attr(this, c)
                }).removeAttr(c),
                i
            }
        }
    },
    n.each(r.fn,
    function(t, r) {
        if (!r || n.fn[t + a]) return i;
        var u = n.fn[t + a] = n.fn[t];
        n.fn[t] = function() {
            return r.apply(this, arguments) || u.apply(this, arguments)
        }
    }),
    n.ui || (n["cleanData" + a] = n.cleanData, n.cleanData = function(t) {
        for (var i = 0, r;
        (r = t[i]) !== o; i++) try {
            n(r).triggerHandler("removeqtip")
        } catch(u) {}
        n["cleanData" + a](t)
    }),
    f.version = "nightly",
    f.nextid = 0,
    f.inactiveEvents = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),
    f.zindex = 15e3,
    f.defaults = {
        prerender: t,
        id: t,
        overwrite: i,
        suppress: i,
        content: {
            text: i,
            attr: "title",
            title: {
                text: t,
                button: t
            }
        },
        position: {
            my: "top left",
            at: "bottom right",
            target: t,
            container: t,
            viewport: t,
            adjust: {
                x: 0,
                y: 0,
                mouse: i,
                resize: i,
                method: "flip flip"
            },
            effect: function(i, r) {
                n(this).animate(r, {
                    duration: 200,
                    queue: t
                })
            }
        },
        show: {
            target: t,
            event: "mouseenter",
            effect: i,
            delay: 90,
            solo: t,
            ready: t,
            autofocus: t
        },
        hide: {
            target: t,
            event: "mouseleave",
            effect: i,
            delay: 0,
            fixed: t,
            inactive: t,
            leave: "window",
            distance: t
        },
        style: {
            classes: "",
            widget: t,
            width: t,
            height: t,
            def: i
        },
        events: {
            render: u,
            move: u,
            show: u,
            hide: u,
            toggle: u,
            visible: u,
            hidden: u,
            focus: u,
            blur: u
        }
    },
    r.ajax = function(n) {
        var t = n.plugins.ajax;
        return "object" == typeof t ? t: n.plugins.ajax = new rt(n)
    },
    r.ajax.initialize = "render",
    r.ajax.sanitize = function(n) {
        var i = n.content,
        t;
        i && "ajax" in i && (t = i.ajax, typeof t != "object" && (t = n.content.ajax = {
            url: t
        }), "boolean" != typeof t.once && t.once && (t.once = !!t.once))
    },
    n.extend(i, f.defaults, {
        content: {
            ajax: {
                loading: i,
                once: i
            }
        }
    }),
    r.tip = function(n) {
        var t = n.plugins.tip;
        return "object" == typeof t ? t: n.plugins.tip = new ft(n)
    },
    r.tip.initialize = "render",
    r.tip.sanitize = function(n) {
        var r = n.style,
        t;
        r && "tip" in r && (t = n.style.tip, typeof t != "object" && (n.style.tip = {
            corner: t
        }), /string|boolean/i.test(typeof t.corner) || (t.corner = i), typeof t.width != "number" && delete t.width, typeof t.height != "number" && delete t.height, typeof t.border != "number" && t.border !== i && delete t.border, typeof t.offset != "number" && delete t.offset)
    },
    n.extend(i, f.defaults, {
        style: {
            tip: {
                corner: i,
                mimic: t,
                width: 6,
                height: 6,
                border: i,
                offset: 0
            }
        }
    })
}),
function(n) {
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
} (jQuery);
var checkboxHeight = "21",
radioHeight = "21",
selectWidth = "190";
document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: ' + selectWidth + "px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }<\/style>"),
Custom = {
    init: function() {
        var n = document.getElementsByTagName("input"),
        t = Array(),
        r,
        i,
        u;
        for (a = 0; a < n.length; a++)(n[a].type == "checkbox" || n[a].type == "radio") && n[a].className == "styled" && (t[a] = document.createElement("span"), t[a].className = n[a].type, n[a].checked == !0 && (n[a].type == "checkbox" ? (position = "0 -" + checkboxHeight * 2 + "px", t[a].style.backgroundPosition = position) : (position = "0 -" + radioHeight * 2 + "px", t[a].style.backgroundPosition = position)), n[a].parentNode.insertBefore(t[a], n[a]), n[a].onchange = Custom.clear, n[a].getAttribute("disabled") ? t[a].className = t[a].className += " disabled": (t[a].onmousedown = Custom.pushed, t[a].onmouseup = Custom.check));
        for (n = document.getElementsByTagName("select"), a = 0; a < n.length; a++) if (n[a].className == "styled") {
            for (i = n[a].getElementsByTagName("option"), u = i[0].childNodes[0].nodeValue, r = document.createTextNode(u), b = 0; b < i.length; b++) i[b].selected == !0 && (r = document.createTextNode(i[b].childNodes[0].nodeValue));
            t[a] = document.createElement("span"),
            t[a].className = "select",
            t[a].id = "select" + n[a].name,
            t[a].appendChild(r),
            n[a].parentNode.insertBefore(t[a], n[a]),
            n[a].getAttribute("disabled") ? n[a].previousSibling.className = n[a].previousSibling.className += " disabled": n[a].onchange = Custom.choose
        }
        document.onmouseup = Custom.clear
    },
    pushed: function() {
        element = this.nextSibling,
        this.style.backgroundPosition = element.checked == !0 && element.type == "checkbox" ? "0 -" + checkboxHeight * 3 + "px": element.checked == !0 && element.type == "radio" ? "0 -" + radioHeight * 3 + "px": element.checked != !0 && element.type == "checkbox" ? "0 -" + checkboxHeight + "px": "0 -" + radioHeight + "px"
    },
    check: function() {
        if (element = this.nextSibling, element.checked == !0 && element.type == "checkbox") this.style.backgroundPosition = "0 0",
        element.checked = !1;
        else {
            if (element.type == "checkbox") this.style.backgroundPosition = "0 -" + checkboxHeight * 2 + "px";
            else for (this.style.backgroundPosition = "0 -" + radioHeight * 2 + "px", group = this.nextSibling.name, inputs = document.getElementsByTagName("input"), a = 0; a < inputs.length; a++) inputs[a].name == group && inputs[a] != this.nextSibling && (inputs[a].previousSibling.style.backgroundPosition = "0 0");
            element.checked = !0
        }
    },
    clear: function() {
        inputs = document.getElementsByTagName("input");
        for (var n = 0; n < inputs.length; n++) inputs[n].type == "checkbox" && inputs[n].checked == !0 && inputs[n].className == "styled" ? inputs[n].previousSibling.style.backgroundPosition = "0 -" + checkboxHeight * 2 + "px": inputs[n].type == "checkbox" && inputs[n].className == "styled" ? inputs[n].previousSibling.style.backgroundPosition = "0 0": inputs[n].type == "radio" && inputs[n].checked == !0 && inputs[n].className == "styled" ? inputs[n].previousSibling.style.backgroundPosition = "0 -" + radioHeight * 2 + "px": inputs[n].type == "radio" && inputs[n].className == "styled" && (inputs[n].previousSibling.style.backgroundPosition = "0 0")
    },
    choose: function() {
        for (option = this.getElementsByTagName("option"), d = 0; d < option.length; d++) option[d].selected == !0 && (document.getElementById("select" + this.name).childNodes[0].nodeValue = option[d].childNodes[0].nodeValue)
    }
},
window.onload = Custom.init,
jQuery.fn.customInput = function() {
    return $(this).each(function() {
        if ($(this).is("[type=checkbox],[type=radio]")) {
            var n = $(this),
            t = $("label[for=" + n.attr("id") + "]");
            n.add(t).wrapAll('<div class="custom-' + n.attr("type") + '"><\/div>'),
            t.hover(function() {
                $(this).addClass("hover")
            },
            function() {
                $(this).removeClass("hover")
            }),
            n.bind("updateState",
            function() {
                n.is(":checked") ? t.addClass("checked") : t.removeClass("checked checkedHover checkedFocus")
            }).trigger("updateState").click(function() {
                $("input[name=" + $(this).attr("name") + "]").trigger("updateState")
            }).focus(function() {
                t.addClass("focus"),
                n.is(":checked") && $(this).addClass("checkedFocus")
            }).blur(function() {
                t.removeClass("focus checkedFocus")
            })
        }
    })
},
function(n) {
    jQuery.fn.extend({
        elastic: function() {
            var t = ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontSize", "lineHeight", "fontFamily", "width", "fontWeight", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "borderTopStyle", "borderTopColor", "borderRightStyle", "borderRightColor", "borderBottomStyle", "borderBottomColor", "borderLeftStyle", "borderLeftColor"];
            return this.each(function() {
                function c() {
                    var n = Math.floor(parseInt(i.width(), 10));
                    r.width() !== n && (r.css({
                        width: n + "px"
                    }), f(!0))
                }
                function h(n, t) {
                    var r = Math.floor(parseInt(n, 10));
                    i.height() !== r && i.css({
                        height: r + "px",
                        overflow: t
                    })
                }
                function f(n) {
                    var f = i.val().replace(/&/g, "&amp;").replace(/ {2}/g, "&nbsp;").replace(/<|>/g, "&gt;").replace(/\n/g, "<br />"),
                    o = r.html().replace(/<br>/ig, "<br />"),
                    t;
                    (n || f + "&nbsp;" !== o) && (r.html(f + "&nbsp;"), Math.abs(r.height() + s - i.height()) > 3 && (t = r.height() + s, t >= u ? h(u, "auto") : t <= e ? h(e, "hidden") : h(t, "hidden")))
                }
                var o;
                if (this.type !== "textarea") return ! 1;
                var i = jQuery(this),
                r = jQuery("<div />").css({
                    position: "absolute",
                    display: "none",
                    "word-wrap": "break-word",
                    "white-space": "pre-wrap"
                }),
                s = parseInt(i.css("line-height"), 10) || parseInt(i.css("font-size"), "10"),
                e = parseInt(i.css("height"), 10) || s * 3,
                u = parseInt(i.css("max-height"), 10) || Number.MAX_VALUE,
                l = 0;
                for (u < 0 && (u = Number.MAX_VALUE), r.appendTo(i.parent()), o = t.length; o--;) r.css(t[o].toString(), i.css(t[o].toString()));
                i.css({
                    overflow: "hidden"
                }),
                i.bind("keyup change cut paste",
                function() {
                    f()
                }),
                n(window).bind("resize", c),
                i.bind("resize", c),
                i.bind("update", f),
                i.bind("blur",
                function() {
                    r.height() < u && (r.height() > e ? i.height(r.height()) : i.height(e))
                }),
                i.bind("input paste",
                function() {
                    setTimeout(f, 250)
                }),
                f()
            })
        }
    })
} (jQuery),
function(n) {
    n.idleTimer = function(t, i, r) {
        r = n.extend({
            startImmediately: !0,
            idle: !1,
            enabled: !0,
            timeout: 3e4,
            events: "mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove"
        },
        r),
        i = i || document;
        var f = function(t) {
            var u, e, o;
            if (typeof t == "number" && (t = undefined), u = n.data(t || i, "idleTimerObj"), u.idle = !u.idle, e = +new Date - u.olddate, u.olddate = +new Date, u.idle && e < r.timeout) {
                u.idle = !1,
                clearTimeout(n.idleTimer.tId),
                r.enabled && (n.idleTimer.tId = setTimeout(f, r.timeout));
                return
            }
            o = jQuery.Event(n.data(i, "idleTimer", u.idle ? "idle": "active") + ".idleTimer"),
            n(i).trigger(o)
        },
        e = function(t) {
            var i = n.data(t, "idleTimerObj") || {};
            i.enabled = !1,
            clearTimeout(i.tId),
            n(t).off(".idleTimer")
        },
        o = function() {
            var t = n.data(this, "idleTimerObj");
            clearTimeout(t.tId),
            t.enabled && (t.idle && f(this), t.tId = setTimeout(f, t.timeout))
        },
        u = n.data(i, "idleTimerObj") || {};
        if (u.olddate = u.olddate || +new Date, typeof t == "number") r.timeout = t;
        else {
            if (t === "destroy") return e(i),
            this;
            if (t === "getElapsedTime") return + new Date - u.olddate
        }
        n(i).on(n.trim((r.events + " ").split(" ").join(".idleTimer ")), o);
        u.idle = r.idle,
        u.enabled = r.enabled,
        u.timeout = r.timeout,
        r.startImmediately && (u.tId = setTimeout(f, u.timeout)),
        n.data(i, "idleTimer", "active"),
        n.data(i, "idleTimerObj", u)
    },
    n.fn.idleTimer = function(t, i) {
        return i || (i = {}),
        this[0] && n.idleTimer(t, this[0], i),
        this
    }
} (jQuery),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, t, i, r, u) {
        return jQuery.easing[jQuery.easing.def](n, t, i, r, u)
    },
    easeInQuad: function(n, t, i, r, u) {
        return r * (t /= u) * t + i
    },
    easeOutQuad: function(n, t, i, r, u) {
        return - r * (t /= u) * (t - 2) + i
    },
    easeInOutQuad: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t + i: -r / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(n, t, i, r, u) {
        return r * (t /= u) * t * t + i
    },
    easeOutCubic: function(n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t + i: r / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(n, t, i, r, u) {
        return r * (t /= u) * t * t * t + i
    },
    easeOutQuart: function(n, t, i, r, u) {
        return - r * ((t = t / u - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t + i: -r / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(n, t, i, r, u) {
        return r * (t /= u) * t * t * t * t + i
    },
    easeOutQuint: function(n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t * t + i: r / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(n, t, i, r, u) {
        return - r * Math.cos(t / u * (Math.PI / 2)) + r + i
    },
    easeOutSine: function(n, t, i, r, u) {
        return r * Math.sin(t / u * (Math.PI / 2)) + i
    },
    easeInOutSine: function(n, t, i, r, u) {
        return - r / 2 * (Math.cos(Math.PI * t / u) - 1) + i
    },
    easeInExpo: function(n, t, i, r, u) {
        return t == 0 ? i: r * Math.pow(2, 10 * (t / u - 1)) + i
    },
    easeOutExpo: function(n, t, i, r, u) {
        return t == u ? i + r: r * ( - Math.pow(2, -10 * t / u) + 1) + i
    },
    easeInOutExpo: function(n, t, i, r, u) {
        return t == 0 ? i: t == u ? i + r: (t /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i: r / 2 * ( - Math.pow(2, -10 * --t) + 2) + i
    },
    easeInCirc: function(n, t, i, r, u) {
        return - r * (Math.sqrt(1 - (t /= u) * t) - 1) + i
    },
    easeOutCirc: function(n, t, i, r, u) {
        return r * Math.sqrt(1 - (t = t / u - 1) * t) + i
    },
    easeInOutCirc: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + i: r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(n, t, i, r, u) {
        var o = 1.70158,
        f = 0,
        e = r;
        return t == 0 ? i: (t /= u) == 1 ? i + r: (f || (f = u * .3), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f)) + i)
    },
    easeOutElastic: function(n, t, i, r, u) {
        var o = 1.70158,
        f = 0,
        e = r;
        return t == 0 ? i: (t /= u) == 1 ? i + r: (f || (f = u * .3), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), e * Math.pow(2, -10 * t) * Math.sin((t * u - o) * 2 * Math.PI / f) + r + i)
    },
    easeInOutElastic: function(n, t, i, r, u) {
        var o = 1.70158,
        f = 0,
        e = r;
        return t == 0 ? i: (t /= u / 2) == 2 ? i + r: (f || (f = u * .3 * 1.5), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), t < 1) ? -.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) + i: e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) * .5 + r + i
    },
    easeInBack: function(n, t, i, r, u, f) {
        return f == undefined && (f = 1.70158),
        r * (t /= u) * t * ((f + 1) * t - f) + i
    },
    easeOutBack: function(n, t, i, r, u, f) {
        return f == undefined && (f = 1.70158),
        r * ((t = t / u - 1) * t * ((f + 1) * t + f) + 1) + i
    },
    easeInOutBack: function(n, t, i, r, u, f) {
        return (f == undefined && (f = 1.70158), (t /= u / 2) < 1) ? r / 2 * t * t * (((f *= 1.525) + 1) * t - f) + i: r / 2 * ((t -= 2) * t * (((f *= 1.525) + 1) * t + f) + 2) + i
    },
    easeInBounce: function(n, t, i, r, u) {
        return r - jQuery.easing.easeOutBounce(n, u - t, 0, r, u) + i
    },
    easeOutBounce: function(n, t, i, r, u) {
        return (t /= u) < 1 / 2.75 ? r * 7.5625 * t * t + i: t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i: t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i: r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(n, t, i, r, u) {
        return t < u / 2 ? jQuery.easing.easeInBounce(n, t * 2, 0, r, u) * .5 + i: jQuery.easing.easeOutBounce(n, t * 2 - u, 0, r, u) * .5 + r * .5 + i
    }
}),
function(n) {
    function r(t) {
        var i = t || window.event,
        e = [].slice.call(arguments, 1),
        r = 0,
        o = !0,
        f = 0,
        u = 0;
        return t = n.event.fix(i),
        t.type = "mousewheel",
        i.wheelDelta && (r = i.wheelDelta / 120),
        i.detail && (r = -i.detail / 3),
        u = r,
        i.axis !== undefined && i.axis === i.HORIZONTAL_AXIS && (u = 0, f = -1 * r),
        i.wheelDeltaY !== undefined && (u = i.wheelDeltaY / 120),
        i.wheelDeltaX !== undefined && (f = i.wheelDeltaX / -120),
        e.unshift(t, r, f, u),
        (n.event.dispatch || n.event.handle).apply(this, e)
    }
    var t = ["DOMMouseScroll", "mousewheel"],
    i;
    if (n.event.fixHooks) for (i = t.length; i;) n.event.fixHooks[t[--i]] = n.event.mouseHooks;
    n.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) for (var n = t.length; n;) this.addEventListener(t[--n], r, !1);
            else this.onmousewheel = r
        },
        teardown: function() {
            if (this.removeEventListener) for (var n = t.length; n;) this.removeEventListener(t[--n], r, !1);
            else this.onmousewheel = null
        }
    },
    n.fn.extend({
        mousewheel: function(n) {
            return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
        },
        unmousewheel: function(n) {
            return this.unbind("mousewheel", n)
        }
    })
} (jQuery),
function(n) {
    var i;
    n.iButton = {
        version: "1.0.03",
        setDefaults: function(i) {
            n.extend(t, i)
        }
    },
    n.fn.iButton = function(t) {
        var i = typeof arguments[0] == "string" && arguments[0],
        e = i && Array.prototype.slice.call(arguments, 1) || arguments,
        f = this.length == 0 ? null: n.data(this[0], "iButton"),
        u;
        return f && i && this.length ? i.toLowerCase() == "object" ? f: f[i] ? (this.each(function(t) {
            var r = n.data(this, "iButton")[i].apply(f, e);
            if (t == 0 && r) {
                if (!r.jquery) return u = r,
                !1;
                u = n([]).add(r)
            } else ! r || !r.jquery || (u = u.add(r))
        }), u || this) : this: this.each(function() {
            new r(this, t)
        })
    },
    i = 0,
    n.browser.iphone = navigator.userAgent.toLowerCase().indexOf("iphone") > -1;
    var r = function(r, e) {
        var v = this,
        o = n(r),
        p = ++i,
        b = !1,
        s = {},
        y = {
            dragging: !1,
            clicked: null
        },
        a = {
            position: null,
            offset: null,
            time: null
        },
        e = n.extend({},
        t, e, !n.metadata ? {}: o.metadata()),
        it = e.labelOn == u && e.labelOff == f,
        tt = ":checkbox, :radio",
        c,
        w,
        nt;
        if (o.is(tt)) {
            if (n.data(o[0], "iButton")) return
        } else return o.find(tt).iButton(e);
        n.data(o[0], "iButton", v),
        e.resizeHandle == "auto" && (e.resizeHandle = !it),
        e.resizeContainer == "auto" && (e.resizeContainer = !it),
        this.toggle = function(n) {
            var t = arguments.length > 0 ? n: !o[0].checked;
            o.attr("checked", t).trigger("change")
        },
        this.disable = function(t) {
            var i = arguments.length > 0 ? t: !b;
            b = i,
            o.attr("disabled", i),
            h[i ? "addClass": "removeClass"](e.classDisabled),
            n.isFunction(e.disable) && e.disable.apply(v, [b, o, e])
        },
        this.repaint = function() {
            w()
        },
        this.destroy = function() {
            n([o[0], h[0]]).unbind(".iButton"),
            n(document).unbind(".iButton_" + p),
            h.after(o).remove(),
            n.data(o[0], "iButton", null),
            n.isFunction(e.destroy) && e.destroy.apply(v, [o, e])
        },
        o.wrap('<div class="' + n.trim(e.classContainer + " " + e.className) + '" />').after('<div class="' + e.classHandle + '"><div class="' + e.classHandleRight + '"><div class="' + e.classHandleMiddle + '" /><\/div><\/div><div class="' + e.classLabelOff + '"><span><label>' + e.labelOff + '<\/label><\/span><\/div><div class="' + e.classLabelOn + '"><span><label>' + e.labelOn + '<\/label><\/span><\/div><div class="' + e.classPaddingLeft + '"><\/div><div class="' + e.classPaddingRight + '"><\/div>');
        var h = o.parent(),
        l = o.siblings("." + e.classHandle),
        rt = o.siblings("." + e.classLabelOff),
        k = rt.children("span"),
        d = o.siblings("." + e.classLabelOn),
        g = d.children("span");
        (e.resizeHandle || e.resizeContainer) && (s.onspan = g.outerWidth(), s.offspan = k.outerWidth()),
        e.resizeHandle ? (s.handle = Math.min(s.onspan, s.offspan), l.css("width", s.handle)) : s.handle = l.width(),
        e.resizeContainer ? (s.container = Math.max(s.onspan, s.offspan) + s.handle + 20, h.css("width", s.container), rt.css("width", s.container - 5)) : s.container = h.width(),
        c = s.container - s.handle - 6,
        w = function(n) {
            var i = o[0].checked,
            t = i ? c: 0,
            n = arguments.length > 0 ? arguments[0] : !0;
            n && e.enableFx ? (l.stop().animate({
                left: t
            },
            e.duration, e.easing), d.stop().animate({
                width: t + 4
            },
            e.duration, e.easing), g.stop().animate({
                marginLeft: t - c
            },
            e.duration, e.easing), k.stop().animate({
                marginRight: -t
            },
            e.duration, e.easing)) : (l.css("left", t), d.css("width", t + 4), g.css("marginLeft", t - c), k.css("marginRight", -t))
        },
        w(!1),
        nt = function(n) {
            return n.pageX || (n.originalEvent.changedTouches ? n.originalEvent.changedTouches[0].pageX: 0)
        },
        h.bind("mousedown.iButton touchstart.iButton",
        function(t) {
            if (!n(t.target).is(tt) && !b && (e.allowRadioUncheck || !o.is(":radio:checked"))) return t.preventDefault(),
            y.clicked = l,
            a.position = nt(t),
            a.offset = a.position - (parseInt(l.css("left"), 10) || 0),
            a.time = +new Date,
            !1
        }),
        e.enableDrag && n(document).bind("mousemove.iButton_" + p + " touchmove.iButton_" + p,
        function(n) {
            var i, t;
            if (y.clicked == l) return n.preventDefault(),
            i = nt(n),
            i != a.offset && (y.dragging = !0, h.addClass(e.classHandleActive)),
            t = Math.min(1, Math.max(0, (i - a.offset) / c)),
            l.css("left", t * c),
            d.css("width", t * c + 4),
            k.css("marginRight", -t * c),
            g.css("marginLeft", -(1 - t) * c),
            !1
        }),
        n(document).bind("mouseup.iButton_" + p + " touchend.iButton_" + p,
        function(t) {
            var r, i;
            if (y.clicked != l) return ! 1;
            if (t.preventDefault(), r = !0, !y.dragging || +new Date - a.time < e.clickOffset) i = o[0].checked,
            o.attr("checked", !i),
            n.isFunction(e.click) && e.click.apply(v, [!i, o, e]);
            else {
                var u = nt(t),
                f = (u - a.offset) / c,
                i = f >= .5;
                o[0].checked == i && (r = !1),
                o.attr("checked", i)
            }
            return h.removeClass(e.classHandleActive),
            y.clicked = null,
            y.dragging = null,
            r ? o.trigger("change") : w(),
            !1
        }),
        o.bind("change.iButton",
        function() {
            if (w(), o.is(":radio")) {
                var t = o[0],
                i = n(t.form ? t.form[t.name] : ":radio[name=" + t.name + "]");
                i.filter(":not(:checked)").iButton("repaint")
            }
            n.isFunction(e.change) && e.change.apply(v, [o, e])
        }).bind("focus.iButton",
        function() {
            h.addClass(e.classFocus)
        }).bind("blur.iButton",
        function() {
            h.removeClass(e.classFocus)
        }),
        n.isFunction(e.click) && o.bind("click.iButton",
        function() {
            e.click.apply(v, [o[0].checked, o, e])
        }),
        o.is(":disabled") && this.disable(!0),
        n.browser.msie && (h.find("*").andSelf().attr("unselectable", "on"), o.bind("click.iButton",
        function() {
            o.triggerHandler("change.iButton")
        })),
        n.isFunction(e.init) && e.init.apply(v, [o, e])
    },
    t = {
        duration: 200,
        easing: "swing",
        labelOn: "ON",
        labelOff: "OFF",
        resizeHandle: "auto",
        resizeContainer: "auto",
        enableDrag: !0,
        enableFx: !0,
        allowRadioUncheck: !1,
        clickOffset: 120,
        className: "",
        classContainer: "ibutton-container",
        classDisabled: "ibutton-disabled",
        classFocus: "ibutton-focus",
        classLabelOn: "ibutton-label-on",
        classLabelOff: "ibutton-label-off",
        classHandle: "ibutton-handle",
        classHandleMiddle: "ibutton-handle-middle",
        classHandleRight: "ibutton-handle-right",
        classHandleActive: "ibutton-active-handle",
        classPaddingLeft: "ibutton-padding-left",
        classPaddingRight: "ibutton-padding-right",
        init: null,
        change: null,
        click: null,
        disable: null,
        destroy: null
    },
    u = t.labelOn,
    f = t.labelOff
} (jQuery),
function(n) {
    n.fn.lightbox_me = function(t) {
        return this.each(function() {
            function s() {
                var t = r[0].style;
                i.destroyOnClose ? r.add(u).remove() : r.add(u).hide(),
                i.parentLightbox && i.parentLightbox.fadeIn(200),
                o.remove(),
                r.undelegate(i.closeSelector, "click"),
                n(window).unbind("reposition", h),
                n(window).unbind("reposition", f),
                n(window).unbind("scroll", f),
                n(window).unbind("keyup.lightbox_me"),
                e && t.removeExpression("top"),
                i.onClose()
            }
            function a(n) { (n.keyCode == 27 || n.DOM_VK_ESCAPE == 27 && n.which == 0) && i.closeEsc && s()
            }
            function h() {
                n(window).height() < n(document).height() ? (u.css({
                    height: n(document).height() + "px"
                }), o.css({
                    height: n(document).height() + "px"
                })) : (u.css({
                    height: "100%"
                }), e && (n("html,body").css("height", "100%"), o.css("height", "100%")))
            }
            function f() {
                var t = r[0].style,
                u,
                f;
                r.css({
                    left: "50%",
                    marginLeft: r.outerWidth() / -2,
                    zIndex: i.zIndex + 3
                }),
                r.height() + 80 >= n(window).height() && (r.css("position") != "absolute" || e) ? (u = n(document).scrollTop() + 40, r.css({
                    position: "absolute",
                    top: u + "px",
                    marginTop: 0
                }), e && t.removeExpression("top")) : r.height() + 80 < n(window).height() && (e ? (t.position = "absolute", i.centered ? (t.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), t.marginTop = 0) : (f = i.modalCSS && i.modalCSS.top ? parseInt(i.modalCSS.top) : 0, t.setExpression("top", "((blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + f + ') + "px"'))) : i.centered ? r.css({
                    position: "fixed",
                    top: "50%",
                    marginTop: r.outerHeight() / -2
                }) : r.css({
                    position: "fixed"
                }).css(i.modalCSS))
            }
            var i = n.extend({},
            n.fn.lightbox_me.defaults, t),
            u = n(),
            r = n(this),
            o = n('<iframe id="foo" style="z-index: ' + (i.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>'),
            e = n.browser.msie && n.browser.version < 7,
            c,
            l;
            i.showOverlay && (c = n(".js_lb_overlay:visible"), u = c.length > 0 ? n('<div class="lb_overlay_clear js_lb_overlay"/>') : n('<div class="' + i.classPrefix + '_overlay js_lb_overlay"/>')),
            e && (l = /^https/i.test(window.location.href || "") ? "javascript:false": "about:blank", o.attr("src", l), n("body").append(o)),
            n("body").append(r.hide()).append(u),
            i.showOverlay && (h(), u.css({
                position: "absolute",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: i.zIndex + 2,
                display: "none"
            }), u.hasClass("lb_overlay_clear") || u.css(i.overlayCSS)),
            i.showOverlay ? u.fadeIn(i.overlaySpeed,
            function() {
                f(),
                r[i.appearEffect](i.lightboxSpeed,
                function() {
                    h(),
                    f(),
                    i.onLoad()
                })
            }) : (f(), r[i.appearEffect](i.lightboxSpeed,
            function() {
                i.onLoad()
            })),
            i.parentLightbox && i.parentLightbox.fadeOut(200),
            n(window).resize(h).resize(f).scroll(f),
            n(window).bind("keyup.lightbox_me", a),
            i.closeClick && u.click(function(n) {
                s(),
                n.preventDefault
            }),
            r.delegate(i.closeSelector, "click",
            function(n) {
                s(),
                n.preventDefault()
            }),
            r.bind("close", s),
            r.bind("reposition", f)
        })
    },
    n.fn.lightbox_me.defaults = {
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 250,
        lightboxSpeed: 300,
        closeSelector: ".close",
        closeClick: !0,
        closeEsc: !0,
        destroyOnClose: !1,
        showOverlay: !0,
        parentLightbox: !1,
        onLoad: function() {},
        onClose: function() {},
        classPrefix: "lb",
        zIndex: 999,
        centered: !1,
        modalCSS: {
            top: "40px"
        },
        overlayCSS: {
            background: "black",
            opacity: .3
        }
    }
} (jQuery),
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
                    i = function() {
                        u.triggerHandler("close", {
                            _selectBox: !0
                        })
                    };
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
                (t = n(t), t.val(i), i = t.val(), r = t.data("selectBox-control"), r) && (u = t.data("selectBox-settings"), f = r.data("selectBox-options"), l(t), f.find(".selectBox-selected").removeClass("selectBox-selected"), f.find("A").each(function() {
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
function(n) {
    n.cookie = function(t, i, r) {
        var h, f, e, o, u, s;
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(i)) || i === null || i === undefined)) return r = n.extend({},
        r),
        (i === null || i === undefined) && (r.expires = -1),
        typeof r.expires == "number" && (h = r.expires, f = r.expires = new Date, f.setDate(f.getDate() + h)),
        i = String(i),
        document.cookie = [encodeURIComponent(t), "=", r.raw ? i: encodeURIComponent(i), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path: "", r.domain ? "; domain=" + r.domain: "", r.secure ? "; secure": ""].join("");
        for (r = i || {},
        e = r.raw ?
        function(n) {
            return n
        }: decodeURIComponent, o = document.cookie.split("; "), u = 0; s = o[u] && o[u].split("="); u++) if (e(s[0]) === t) return e(s[1] || "");
        return null
    }
} (jQuery),
guidiGo = {},
languages = [],
languages.fr = "Français",
languages.en = "English",
languages.jp = "Japan",
guidiGo.switchLanguage = function(n) {
    showLoading(),
    $.ajax({
        type: "POST",
        url: baseUrl + "User/UpdateLanguage",
        data: {
            lang: n
        },
        cache: !1,
        async: !0,
        success: function() {
            window.location.reload()
        }
    })
},
$(document).ready(function() {
    var n, t;
    $("#sn-language-dropdown > ul").children().each(function(n, t) {
        $(t).find("a").click(function() {
            guidiGo.switchLanguage($(t).find("a").data("lang"))
        })
    }),
    n = $.cookie("guidigo-culture"),
    n = n == null ? "en": n,
    t = $("a[data-lang='" + n + "']"),
    $(".dropbtn > span").html(t.text()),
    t.parent().hide()
}),
window.log = function() {
    if (log.history = log.history || [], log.history.push(arguments), this.console) {
        var n = arguments,
        t;
        n.callee = n.callee.caller,
        t = [].slice.call(n),
        typeof console.log == "object" ? log.apply.call(console.log, console, t) : console.log.apply(console, t)
    }
},
function(n) {
    function i() {}
    for (var r = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), t; !! (t = r.pop());) n[t] = n[t] || i
} (function() {
    try {
        return console.log(),
        window.console
    } catch(n) {
        return window.console = {}
    }
} ()),
$(document).ready(function() {
    $("ul.selectBox-dropdown-menu, .scrollable").live("mousewheel DOMMouseScroll",
    function(n, t) {
        t = t ? t: n.wheelDelta || -n.detail,
        this.scrollTop += (t < 0 ? 1 : -1) * 30,
        n.preventDefault()
    }),
    $("#sn-language > a").click(function() {
        return $("#sn-user-dropdown").hide(),
        $("#sn-language-dropdown").toggle(),
        $(this).toggleClass("subnav-selected"),
        !1
    }),
    $("#subnav-user > a").click(function() {
        return $("#sn-language-dropdown").hide(),
        $("#sn-user-dropdown").toggle(),
        $(this).toggleClass("subnav-selected"),
        !1
    }),
    $(".medium-disabled").click(function() {
        return ! 1
    }),
    $(".td-info").click(function(n) {
        n.preventDefault()
    }),
    $(".step-disabled a").bind("click",
    function() {
        return $(this).hasClass(".step-disabled") ? (e.preventDefault(), !1) : !0
    }),
    $(window).bind("click",
    function() {
        $(".dropbtn").removeClass("subnav-selected"),
        $(".subnav-dropdown").hide(),
        $(".dropbtn-big").removeClass("tf-selected"),
        $(".tours-dropdown").hide()
    }),
    $(".tls-input").focus(function() {
        $(this).val() == $(this)[0].title && $(this).val("")
    }),
    $(".tls-input").blur(function() {
        $(this).val() == "" && $(this).val($(this)[0].title)
    }),
    $(".tls-input").blur(),
    $("#step-next").qtip({
        content: {
            attr: "title"
        },
        position: {
            my: "bottom right",
            at: "top right",
            adjust: {
                x: -55
            }
        },
        show: {
            delay: 0
        },
        events: {
            render: function(n, t) {
                var i = t.elements.tip
            }
        },
        style: {
            tip: {
                corner: "bottom right",
                mimic: "bottom center",
                offset: 20,
                width: 11,
                height: 7
            }
        }
    }),
    $(".call-alert").click(function() {
        return $(".alert-box-container").fadeIn(),
        setTimeout(function() {
            $(".alert-box-container").fadeOut("fast")
        },
        1e4),
        !1
    }),
    $(".has-suggestion").live("mouseenter",
    function() {
        var n = $(this).data("suggestion");
        $(this).closest(".td-field").children(".field-desc").html(n).show()
    }),
    $(".has-suggestion").live("mouseleave",
    function() {
        $(this).closest(".td-field").children(".field-desc").hide()
    }),
    $(".has-suggestion-2").hover(function() {
        var n = $(this).attr("data-suggestion");
        $(this).closest(".step2-item").children(".field-desc").html(n).show()
    },
    function() {
        $(this).closest(".step2-item").children(".field-desc").hide()
    }),
    $(".has-suggestion-4").live("mouseenter",
    function() {
        var n = $(this).data("suggestion");
        n && $(this).closest(".us-field").children(".field-desc").html(n).show()
    }),
    $(".has-suggestion-4").live("mouseleave",
    function() {
        $(this).closest(".us-field").children(".field-desc").hide()
    }),
    $(".has-suggestion-5").hover(function() {
        var n = $(this).attr("data-suggestion");
        $(this).closest(".pi-txt").children(".field-desc").html(n).show()
    },
    function() {
        $(this).closest(".pi-txt").children(".field-desc").hide()
    })
}),
$.fn.ToggleInputValue = function() {
    return $(this).each(function() {
        var n = $(this),
        t = n.val();
        n.focus(function() {
            n.val() == t && n.val("")
        }).blur(function() {
            n.val().length == 0 && n.val(t)
        })
    })
},
Array.prototype.indexOf || (Array.prototype.indexOf = function(n, t) {
    for (var i = t || 0, r = this.length; i < r; i++) if (this[i] === n) return i;
    return - 1
}),
$.fn.internalCharCounter = function() {
    return $(this).each(function(n, t) {
        $(t).unbind("keyup.forcounter"),
        $(t).unbind("focus.forcounter"),
        $(t).unbind("blur.forcounter"),
        $(t).bind("keyup.forcounter",
        function(n) {
            value = $(this).val();
            var t = $(this).data("val-length-max") ? $(this).data("val-length-max") : $(this).attr("maxlength");
            countCharactersAuto(n.target)
        }).each(function() {
            countCharactersAuto($(this))
        }),
        $(t).bind("focus.forcounter",
        function() {
            countCharactersAuto($(this)),
            $(this).next().show()
        }),
        $(t).bind("blur.forcounter",
        function() {
            $(this).next().hide()
        })
    })
},
$.fn.charCounter = function() {
    return $(this).each(function(n, t) {
        $(t).unbind("keyup.forcounter"),
        $(t).bind("keyup.forcounter",
        function(n) {
            value = $(this).val();
            var t = $(this).data("val-length-max") ? $(this).data("val-length-max") : $(this).attr("maxlength"); ++t,
            value.length >= t ? $(this).next().addClass("charleft-error") : $(this).next().removeClass("charleft-error"),
            countCharacters(n.target)
        }).each(function() {
            countCharacters($(this))
        })
    })
}