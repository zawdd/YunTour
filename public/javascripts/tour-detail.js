function adjustStyle(n) {
    n = parseInt(n),
    n >= 1100 && n < 1300 ? ($("#map-left").css("left", "-140px"), $("#map-right").css("right", "-140px")) : n >= 400 && n < 1100 ? ($("#map-left").css("left", "-200px"), $("#map-right").css("right", "-200px")) : ($("#map-left").css("left", "-30px"), $("#map-right").css("right", "-60px"))
}
function InfoBox(n) {
    n = n || {},
    google.maps.OverlayView.apply(this, arguments),
    this.content_ = n.content || "",
    this.disableAutoPan_ = n.disableAutoPan || !1,
    this.maxWidth_ = n.maxWidth || 0,
    this.pixelOffset_ = n.pixelOffset || new google.maps.Size(0, 0),
    this.position_ = n.position || new google.maps.LatLng(0, 0),
    this.zIndex_ = n.zIndex || null,
    this.boxClass_ = n.boxClass || "infoBox",
    this.boxStyle_ = n.boxStyle || {},
    this.closeBoxMargin_ = n.closeBoxMargin || "2px",
    this.closeBoxURL_ = n.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif",
    n.closeBoxURL === "" && (this.closeBoxURL_ = ""),
    this.infoBoxClearance_ = n.infoBoxClearance || new google.maps.Size(1, 1),
    typeof n.visible == "undefined" && (n.visible = typeof n.isHidden == "undefined" ? !0 : !n.isHidden),
    this.isHidden_ = !n.visible,
    this.alignBottom_ = n.alignBottom || !1,
    this.pane_ = n.pane || "floatPane",
    this.enableEventPropagation_ = n.enableEventPropagation || !1,
    this.div_ = null,
    this.closeListener_ = null,
    this.moveListener_ = null,
    this.contextListener_ = null,
    this.eventListeners_ = null,
    this.fixedWidthSet_ = null
}
function testIng(n) {
    var i = createStop(stops[n], n),
    t;
    markers.push(i),
    t = createLine("huh"),
    t.distance = stops[n].FormatedDistance,
    lines.push(t),
    google.maps.event.addDomListener(t, "mouseout",
    function() {
        lines[n].setOptions({
            strokeColor: "#36bde4"
        }),
        lines[n].tooltip.hide()
    }),
    google.maps.event.addDomListener(t, "mouseover",
    function(t) {
        lines[n].setOptions({
            strokeColor: "#149bc2"
        });
        var i = latLngToPixel.getProjection().fromLatLngToContainerPixel(t.latLng),
        r = [i.x, i.y];
        lines[n].tooltip = $("<span/>").qtip({
            content: {
                text: lines[n].distance,
                title: {
                    button: !1
                }
            },
            classes: "ui-tooltip-dark ui-tooltip-shadow ui-tooltip-rounded",
            position: {
                my: "center right",
                at: "center left",
                adjust: {
                    y: 0,
                    x: 0
                },
                target: r,
                container: $("#map-canvas"),
                viewport: $(".map")
            },
            show: {
                ready: !0,
                event: !1,
                solo: !0
            },
            hide: {
                event: "mouseleave unfocus"
            }
        }).qtip("api")
    })
}
function initMap() {
    var t, i, n, r, f, u;
    initPolyline();
    for (n in stops) testIng(n);
    for (t = 0, i = polyLine, n = 0; n < waypoints.length; n++) r = waypoints[n],
    f = new google.maps.LatLng(r.latitude, r.longitude),
    r.linkTo && (t != 0 && (u = i.getPath(), u.push(f)), i = lines[t], t++),
    u = i.getPath(),
    u.push(f);
    centerMap(),
    google.maps.event.addListener(map, "center_changed",
    function() {
        var t, n, i;
        if (latLngToPixel && typeof latLngToPixel.getProjection() != "undefined") for (t in markers) marker = markers[t],
        n = latLngToPixel.getProjection().fromLatLngToContainerPixel(marker.getPosition()),
        i = [n.x, n.y],
        marker.tooltip && marker.tooltip.set("position.target", i)
    })
}
var swfobject;
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
    function s() {
        if (!f) {
            f = !0;
            for (var i in t) n(i).each(function() {
                var r, u;
                r = n(this),
                u = r.data("jqae"),
                (u.containerWidth != r.width() || u.containerHeight != r.height()) && o(r, t[i])
            });
            f = !1
        }
    }
    function h(n) {
        t[n] && (delete t[n], t.length || i && (window.clearInterval(i), i = undefined))
    }
    function c(n, r) {
        t[n] = r,
        i || (i = window.setInterval(function() {
            s()
        },
        200))
    }
    function e() {
        return this.nodeType === 3
    }
    function u(t) {
        var f, i, r;
        if (t.contents().length) {
            if (f = t.contents(), i = f.eq(f.length - 1), i.filter(e).length) return (r = i.get(0).nodeValue, r = n.trim(r), r == "") ? (i.remove(), !0) : !1;
            while (u(i));
            return i.contents().length ? !1 : (i.remove(), !0)
        }
        return ! 1
    }
    function r(n) {
        var i, t;
        return n.contents().length ? (t = n.contents(), i = t.eq(t.length - 1), i.filter(e).length ? i: r(i)) : (n.append(""), t = n.contents(), t.eq(t.length - 1))
    }
    function l(t) {
        var u = r(t),
        i,
        f;
        return u.length ? (i = u.get(0).nodeValue, f = i.lastIndexOf(" "), f > -1 ? (i = n.trim(i.substring(0, f)), u.get(0).nodeValue = i) : u.get(0).nodeValue = "", !0) : !1
    }
    function o(t, i) {
        var s = t.data("jqae"),
        f,
        e,
        h,
        o,
        c;
        s || (s = {}),
        f = s.wrapperElement,
        f || (f = t.wrapInner("<div/>").find(">div")),
        e = f.data("jqae"),
        e || (e = {}),
        h = e.originalContent,
        h ? f = e.originalContent.clone(!0).data("jqae", {
            originalContent: h
        }).replaceAll(f) : f.data("jqae", {
            originalContent: f.clone(!0)
        }),
        t.data("jqae", {
            wrapperElement: f,
            containerWidth: t.width(),
            containerHeight: t.height()
        }),
        o = !1,
        c = f,
        i.selector && (c = n(f.find(i.selector).get().reverse())),
        c.each(function() {
            var e = n(this),
            h = e.text(),
            s = !1;
            if (f.innerHeight() - e.innerHeight() > t.height() + 1) e.remove();
            else if (u(e), e.contents().length) {
                for (o && (r(e).get(0).nodeValue += i.ellipsis, o = !1); f.innerHeight() > t.height() + 1;) {
                    if (s = l(e), !s) {
                        o = !0,
                        e.remove();
                        break
                    }
                    if (u(e), e.contents().length) r(e).get(0).nodeValue += i.ellipsis;
                    else {
                        o = !0,
                        e.remove();
                        break
                    }
                }
                i.setTitle == "onEllipsis" && s || i.setTitle == "always" ? e.attr("title", h) : i.setTitle != "never" && e.removeAttr("title")
            }
        })
    }
    var t = {},
    i, f = !1,
    a = {
        ellipsis: "...",
        setTitle: "never",
        live: !1
    };
    n.fn.ellipsis = function(t, i) {
        var u, r;
        return u = n(this),
        typeof t != "string" && (i = t, t = undefined),
        r = n.extend({},
        a, i),
        r.selector = t,
        u.each(function() {
            var t = n(this);
            o(t, r)
        }),
        r.live ? c(u.selector, r) : h(u.selector),
        this
    }
} (jQuery),
function(n) {
    n.fn.media = function() {
        var i = this,
        r = {
            moveFor: 3
        };
        return i.each(function() {
            var t = n(this);
            n.fn.media.api.init(t);
            var s = n.extend(!0, {},
            r, s),
            l = n(".tour-thumbs", n(t)),
            i = n("ul li", n(l)),
            u = n(i[1]).outerWidth(!0),
            h = (i.length - 8) * u,
            c,
            f,
            e,
            o = {
                init: function() {
                    i.length <= 8 ? n(t).addClass("thumbs-nowidth") : (n(t).addClass("thumbs-clipped thumbs-start"), this.attachBehavior()),
                    this.attachThumbClickBehavior()
                },
                attachBehavior: function() {
                    n(".tour-thumbs", n(t)).css("overflow", "hidden"),
                    n("ul", n(t)).css("margin-left", "0px"),
                    i.length > 8 ? (n(".tt-prev, .tt-next", n(t)).bind("click",
                    function(n) {
                        n.preventDefault()
                    }), n(".tt-prev, .tt-next", n(t)).bind("mouseup",
                    function(n) {
                        f = !1,
                        clearInterval(e),
                        n.preventDefault()
                    }), n(".tt-prev, .tt-next", n(t)).bind("mouseleave",
                    function(n) {
                        f = !1,
                        clearInterval(e),
                        n.preventDefault()
                    }), n(".tt-prev, .tt-next", n(t)).bind("mousedown",
                    function() {
                        return c = n(this).hasClass("tt-prev") ? "left": "right",
                        f = !0,
                        o.animateScroll(!0),
                        e = setInterval(function() {
                            o.animateScroll()
                        },
                        50),
                        !1
                    }), n(".tt-prev").addClass("tt-disabled")) : n(".tt-prev, .tt-next", n(t)).css("display", "none")
                },
                attachThumbClickBehavior: function() {
                    i.each(function(t) {
                        var t = t;
                        n(this).find("span").empty().html(t + 1),
                        n(this).find("a").hasClass("thumbs-active") && n.fn.media.api.selectThumb(t),
                        n(this).bind(clickEvent,
                        function() {
                            return n.fn.media.api.selectThumb(t),
                            !1
                        })
                    })
                },
                animateScroll: function(i) {
                    if (!n("ul", n(t)).is(":animated")) {
                        if (!f && !i) {
                            clearInterval(e);
                            return
                        }
                        var r = o.calculateMargin(c);
                        n("ul", n(t)).animate({
                            "margin-left": -r + "px"
                        },
                        600, "easeOutSine")
                    }
                },
                calculateMargin: function(i) {
                    var f = -parseInt(n("ul", n(t)).css("margin-left")),
                    r;
                    return i == "right" ? (r = u * s.moveFor + f, r >= h - u / 2 && (r = h)) : (r = f - u * s.moveFor, r <= u / 2 && (r = 0)),
                    n(".tt-prev, .tt-next").removeClass("tt-disabled"),
                    r == 0 && n(".tt-prev").addClass("tt-disabled"),
                    r == h && n(".tt-next").addClass("tt-disabled"),
                    r
                }
            };
            o.init()
        })
    },
    n.fn.media.api = {
        self: this,
        stop: null,
        element: null,
        thumbs: null,
        currentSlide: 0,
        currentId: null,
        json: null,
        xhr: null,
        init: function(t) {
            n.fn.media.api.element = n(t),
            n.fn.media.api.thumbs = n(".tour-thumbs ul li", n(n.fn.media.api.element))
        },
        selectThumb: function(t) {
            var r = n.fn.media.api.thumbs,
            u, i, f;
            n("a", n(r)).removeClass("thumbs-active"),
            n("a", n(r[t])).addClass("thumbs-active"),
            u = n("a", n(r[t])).attr("rel"),
            n("#isCustom").val() == "False" ? markers != null && (i = findMarker(u), i != null && activeMarker != i && (map.getBounds() && !map.getBounds().contains(i.getPosition()) && map.panTo(i.getPosition()), setIcon(i, !0), activeMarker && setIcon(activeMarker, !1), activeMarker = i)) : n.fn.guidigocustommap.api.activateMarker(u),
            f = {
                tourID: n("#EncryptTourID").val(),
                encryptStopID: n("a", n(r[t])).attr("rel")
            },
            n(".tourslide-title span").empty().html(n("span", n(r[t])).html()),
            n(".tour-player-container").slideUp(),
            myPlayer && myPlayer.jPlayer("stop")
            /*self.xhr != null && self.xhr.abort(),
            self.xhr = n.ajax({
                url: baseUrl + "Tour/Stop/",
                type: "get",
                data: f,
                success: function(t) {
                    n.fn.media.api.json = t.json,
                    n.fn.media.api.stop = t.stop,
                    n(".tourslide-link img").attr("src", t.stop.Thumbnail350Url),
                    n(".ts-title .tt-count").empty().html(t.stop.StopOrder),
                    n(".ts-title .tt-name").empty().html(t.stop.Name),
                    t.stop.IsStopTest ? (n(".lock-outer .ts-locked").hide(), n(".ts-show-container, .lock-outer .ts-unlocked").show()) : (n(".lock-outer .ts-locked").show(), n(".ts-show-container, .lock-outer .ts-unlocked").hide()),
                    t.stop.ThumbCredits ? (n(".tourslide-images .credits-btn").attr("title", t.stop.ThumbCredits), n(".tourslide-images .credits-btn").show()) : n(".tourslide-images .credits-btn").hide(),
                    n(".paper-note").empty().html("<p class='ellipsis' style='height:70px'><span>" + t.stop.Presentation + "<\/span><\/p>"),
                    n(".ellipsis").ellipsis(),
                    t.stop.IsStopTest ? (t.json.use_audioplayer && (initPlayerAudio(n.fn.media.api.json.audiofile), n(".jp-duration").html(n.jPlayer.convertTime(t.json.duration))), t.json.use_thumbnails ? n(".tour-img-thumbs").css("display", "block") : n(".tour-img-thumbs").css("display", "none"), n.fn.media.api.createSlideShow(t.json)) : myPlayer && (myPlayer.jPlayer("destroy"), myPlayer = null)
                }
            })*/
        },
        observe: function(t) {
            if (n.fn.media.api.json && n.fn.media.api.json.synced) for (i in n.fn.media.api.json.slides) n.fn.media.api.json.slides[i].timespan == t && parseInt(t) > 0 && n.fn.media.api.slideShowSkipTo(n.fn.media.api.json.slides[i].imageID)
        },
        slideShowSkipTo: function(t) {
            t != n.fn.media.api.currentId && (n("#ss_" + n.fn.media.api.currentId).css("display", "none"), n("#ss_" + t).css("display", "inline-block"), n.fn.media.api.currentId = t, this.selectMiniThumb(t))
        },
        nextSlide: function() {
            var t = n.fn.media.api.currentSlide + 1 >= n.fn.media.api.json.slides.length ? 0 : n.fn.media.api.currentSlide + 1;
            n("#ss_" + n.fn.media.api.json.slides[n.fn.media.api.currentSlide].imageID).css("display", "none"),
            n("#ss_" + n.fn.media.api.json.slides[t].imageID).css("display", "inline-block"),
            n(".jspPane h3").empty().html(array[n.fn.media.api.json.slides[t].imageID].title),
            n(".jspPane .tdesc-intro").empty().html(array[n.fn.media.api.json.slides[t].imageID].description),
            this.currentSlide = t,
            this.selectMiniThumb(t),
            setTimeout(function() {
                n.fn.media.api.nextSlide()
            },
            3e3)
        },
        createSlideShow: function(t) {
            var o = "",
            s = "",
            f = 0,
            r, h, u, e;
            for (i in t.slides) r = t.slides[i],
            h = f == 0 ? ' class="tour-img-selected"': "",
            o += '<div class="tour-img-slide-item" id="ss_' + r.imageID + '"><img src="' + r.azureReference + '" alt="' + r.caption + '"><\/div>\n',
            s += '<li><a href="#"' + h + ' rel="' + r.imageID + '"><img src="' + r.azureReference + '" height="36px"><\/a><\/li>',
            f == 0 && (n.fn.media.api.currentId = t.slides[i].imageID),
            f++;
            n(".tour-img-slider").empty().html(o),
            n(".tour-img-more ul").empty().html(s),
            n(".tour-img-more ul li a").each(function(t) {
                var i = t;
                n(this).bind("click",
                function() {
                    var t = n(this).attr("rel");
                    return n.fn.media.api.slideShowSkipTo(t),
                    !1
                }).hover(function() {
                    n("#dot-" + i).addClass("hovered")
                },
                function() {
                    n("#dot-" + i).removeClass("hovered")
                })
            }),
            u = 0,
            n(".tour-img-more ul li").each(function() {
                u += n(this).outerWidth()
            }),
            n(".tour-img-left, .tour-img-right").css("display", "none"),
            (u > 378 || u == 0) && n.fn.media.api.attachMiniThumbBehavior(),
            e = n(".tour-img-slider .tour-img-slide-item"),
            n(e).css("display", "none"),
            n(e[0]).css("display", "inline-block"),
            n(".jspPane .tdesc-num").empty().html(n(".thumbs-active span").html()),
            n(".jspPane h3").empty().html(n.fn.media.api.stop.Name),
            n(".jspPane .tdesc-long .tdesc-full").empty().html(n.fn.media.api.stop.Description),
            n(".jspPane .tdesc-long .tdesc-add").empty().html(n.fn.media.api.stop.Address),
            n(".jspPane .tdesc-long .tdesc-intro").empty().html(n.fn.media.api.stop.Presentation),
            setTimeout(function() {
                n(".tdesc-inside").jScrollPane(),
                n(".tdesc-inside").data("jsp").scrollTo(0, 0)
            },
            100),
            t.use_audioplayer ? n("#jp_container").css("display", "block") : (myPlayer && myPlayer.jPlayer("stop"), n("#jp_container").css("display", "none")),
            t.use_thumbnails ? n(".tour-img-thumbs").css("display", "block") : n(".tour-img-thumbs").css("display", "none"),
            n(".player-bar .player-dot").remove(),
            myPlayer && myPlayer.unbind(n.jPlayer.event.durationchange),
            typeof t.synced != "undefined" && t.synced && (this.createPointsOfInterest(), myPlayer.bind(n.jPlayer.event.durationchange,
            function(t) {
                n.fn.media.api.json.duration = t.jPlayer.status.duration,
                n.fn.media.api.createPointsOfInterest()
            }))
        },
        createFakePointsOfInterest: function() {
            var f = "",
            r = this.json,
            e = n(".tour-img-more ul li a"),
            t,
            u;
            n(".player-bar .player-dot").remove();
            for (i in r.slides) t = this.json.slides[i].timespan * 100 / this.json.duration - 1,
            u = i,
            n(".player-bar").append(n("<div />").attr({
                "class": "player-dot",
                id: "dot-" + i,
                rel: t
            }).css("left", t + "%"));
            n(".jp-seek-bar").css("position", "relative")
        },
        createPointsOfInterest: function() {
            var e = "",
            r = this.json,
            u = n(".tour-img-more ul li a"),
            t,
            f;
            for (i in r.slides) t = this.json.slides[i].timespan * 100 / this.json.duration - 1,
            f = i,
            n(".player-bar").append(n("<div />").attr({
                "class": "player-dot",
                id: "dot-" + i,
                rel: t
            }).css("left", t + "%").bind("click",
            function() {
                n.fn.media.api.slideShowSkipTo(r.slides[f].imageID);
                var t = n(this).attr("rel");
                n("#player").jPlayer("playHead", t)
            }).hover(function() {
                var t = n(this).attr("id").split("-");
                n(u[t[1]]).addClass("hovered")
            },
            function() {
                var t = n(this).attr("id").split("-");
                n(u[t[1]]).removeClass("hovered")
            }));
            n(".jp-seek-bar").css("position", "relative")
        },
        selectMiniThumb: function(t) {
            n(".tour-img-more a").removeClass("tour-img-selected"),
            n(".tour-img-more a[rel='" + t + "']").addClass("tour-img-selected")
        },
        attachMiniThumbBehavior: function() {
            var i, t;
            n(".tour-img-more ul").css("margin-left", "0px"),
            n(".tour-img-left, .tour-img-right").css("display", "block").bind("click",
            function() {
                var t = n(this).hasClass("tour-img-left") ? "left": "right",
                i = n.fn.media.api.calculateMiniMargin(t);
                return n(".tour-img-more ul").animate({
                    "margin-left": -i + "px"
                },
                600, "easeOutSine"),
                !1
            }),
            i = n(".tour-img-more ul li"),
            i.length > 1 && n(".tour-img-thumbs").css("display", ""),
            t = 0,
            n(".tour-img-more ul li").each(function() {
                t += n(this).outerWidth()
            }),
            t < 378 && t > 0 && (n(".tour-img-left, .tour-img-right").css("display", "none"), console.log("center image"))
        },
        calculateMiniMargin: function(t) {
            var e = -parseInt(n(".tour-img-more ul").css("margin-left")),
            o = 3,
            u = 40,
            r = 0,
            s,
            f,
            i;
            return (n(".tour-img-more ul li img").each(function() {
                r += n(this).outerWidth()
            }), r < 378 && r > 0) ? (console.log("center image"), s = (n(".tour-img-more").parent().width() - r) / 2, n(".tour-img-more").css({
                "margin-left": s + "px"
            }), n(".tour-img-left, .tour-img-right").css("display", "none"), 0) : (f = r - 320, t == "right" ? (i = u * o + e, i >= f - u / 2 && (i = f)) : (i = e - u * o, i <= u / 2 && (i = 0)), i)
        }
    }
} (jQuery),
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
window.log = function() {
    log.history = log.history || [],
    log.history.push(arguments),
    this.console && (arguments.callee = arguments.callee.caller, console.log(Array.prototype.slice.call(arguments)))
},
function(n) {
    function i() {}
    for (var r = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), t; t = r.pop();) n[t] = n[t] || i
} (window.console = window.console || {}),
$.fn.starsMini = function() {
    return $(this).each(function() {
        var n = parseFloat($(this).html()),
        t = Math.max(0, Math.min(5, n)) * 16,
        i = $("<span />").width(t);
        $(this).html(i)
    })
},
$.fn.starsMinimal = function() {
    return $(this).each(function() {
        var n = parseFloat($(this).html()),
        t = Math.max(0, Math.min(5, n)) * 12,
        i = $("<span />").width(t);
        $(this).html(i)
    })
},
$.fn.starsMain = function() {
    return $(this).each(function() {
        var n = parseFloat($(this).html()),
        t = Math.max(0, Math.min(5, n)) * 26,
        i = $("<span />").width(t);
        $(this).html(i)
    })
},
$(document).ready(function() {
    $(".add-fav").qtip({
        content: {
            text: $(".addfav-content")
        },
        show: {
            delay: 0
        },
        hide: {
            delay: 500,
            fixed: !0
        },
        style: {
            classes: "ui-tooltip-longtext ui-tooltip-rounded",
            tip: {
                corner: "bottom right",
                mimic: "bottom center",
                offset: 20,
                width: 11,
                height: 7
            }
        },
        position: {
            my: "bottom right",
            at: "top right",
            adjust: {
                x: -25
            },
            effect: function(n, t) {
                $(this).animate(t, {
                    duration: 600,
                    easing: "linear",
                    queue: !1
                })
            }
        }
    }),
    $(".lock-outer-locked").hover(function() {
        $("#lock-box").stop().fadeTo(300, 1)
    },
    function() {
        $("#lock-box").stop().fadeOut("slow")
    }),
    $(".share-more").click(function() {
        return ! 1
    }),
    $(".share-more").qtip({
        content: {
            text: $(".share-content")
        },
        show: {
            delay: 0,
            effect: function() {
                $(this).fadeIn(300)
            }
        },
        style: {
            classes: "ui-tooltip-share",
            tip: {
                width: 11,
                height: 7
            }
        },
        hide: {
            delay: 300,
            fixed: !0,
            effect: function() {
                $(this).fadeOut(300)
            }
        },
        position: {
            my: "top center",
            at: "bottom center",
            adjust: {
                y: -5
            }
        }
    }),
    $("#language-tour").click(function() {
        return typeof totalLangs != "undefined" && totalLangs != 0 && ($("#lt-language-dropdown").toggle(), $(this).toggleClass("lang-open")),
        !1
    }),
    $("a.question").click(function() {
        return $("#question-box").toggle(),
        !1
    }),
    $(function() {
        $("span.stars-mini").starsMini(),
        $("span.stars-minimal").starsMinimal(),
        $("span.stars-main").starsMain()
    });
    var n = strReadMore,
    t = strReadLess;
    $(".authormore").toggle(function() {
        $(".tour-author p").css("height", "auto").css("overflow", "visible"),
        $(this).html(t)
    },
    function() {
        $(".tour-author p").css("height", "130px").css("overflow", "hidden"),
        $(this).html(n)
    }),
    $(".add-fav").bind(clickEvent,
    function() {
        return $.ajax({
            type: "POST",
            url: baseUrl + "Tour/AddRemoveBookmark",
            data: {
                id: $("#EncryptTourID").val()
            },
            cache: !1,
            async: !0,
            success: function(n) {
                if (!n.IsAuthenticated) {
                    alert("You must be logged in to use this feature");
                    return
                }
                n.Mode == "add" ? ($(".add-fav").children("span").html(addedFav), $(".add-fav").addClass("af-selected")) : ($(".add-fav").children("span").html(addFav), $(".add-fav").removeClass("af-selected"))
            },
            complete: function() {}
        }),
        !1
    }),
    $(".hastool[title]").qtip({
        show: {
            delay: 0
        },
        style: {
            classes: "ui-tooltip-dark ui-tooltip-shadow ui-tooltip-rounded",
            zIndex: 1001
        },
        position: {
            my: "bottom center",
            at: "top center",
            effect: function(n, t) {
                $(this).animate(t, {
                    duration: 600,
                    easing: "linear",
                    queue: !1
                })
            }
        }
    }),
    $(".tour-icons span[title]").qtip({
        show: {
            delay: 0
        },
        style: {
            classes: "ui-tooltip-dark ui-tooltip-shadow ui-tooltip-rounded"
        },
        position: {
            my: "bottom center",
            at: "top center",
            adjust: {
                x: -29
            },
            effect: function(n, t) {
                $(this).animate(t, {
                    duration: 600,
                    easing: "linear",
                    queue: !1
                })
            }
        }
    }),
    $(".tour-thumbs ul li a[title]").qtip({
        show: {
            delay: 0
        },
        style: {
            classes: "ui-tooltip-dark ui-tooltip-shadow ui-tooltip-rounded ui-tooltip-2"
        },
        position: {
            my: "bottom center",
            at: "top center",
            effect: function(n, t) {
                $(this).animate(t, {
                    duration: 600,
                    easing: "linear",
                    queue: !1
                })
            }
        }
    }),
    $(".tour-icons span[title]").qtip({
        show: {
            delay: 0
        },
        style: {
            classes: "ui-tooltip-dark ui-tooltip-shadow ui-tooltip-rounded"
        },
        position: {
            my: "bottom center",
            at: "top center",
            adjust: {
                x: -29
            },
            effect: function(n, t) {
                $(this).animate(t, {
                    duration: 600,
                    easing: "linear",
                    queue: !1
                })
            }
        }
    }),
    $("#language-tour[title]").qtip({
        show: {
            delay: 0
        },
        style: {
            classes: "ui-tooltip-dark ui-tooltip-shadow ui-tooltip-rounded"
        },
        position: {
            my: "bottom center",
            at: "top center",
            adjust: {
                x: 0
            },
            effect: function(n, t) {
                $(this).animate(t, {
                    duration: 600,
                    easing: "linear",
                    queue: !1
                })
            }
        }
    }),
    $("span.td-pricing[title]").qtip({
        show: {
            delay: 0
        },
        style: {
            classes: "ui-tooltip-dark ui-tooltip-shadow ui-tooltip-rounded"
        },
        position: {
            my: "bottom center",
            at: "top center",
            adjust: {
                x: 0
            },
            effect: function(n, t) {
                $(this).animate(t, {
                    duration: 600,
                    easing: "linear",
                    queue: !1
                })
            }
        }
    }),
    $("a.launch-credits").click(function(n) {
        $("#credits-window").lightbox_me({
            centered: !0,
            overlayCSS: {
                background: "black",
                opacity: .3
            },
            closeSelector: ".close-window",
            zIndex: 2036
        }),
        n.preventDefault()
    }),
    $("a.credits-btn").click(function(n) {
        n.preventDefault()
    }),
    $(".credits-btn").qtip({
        content: {
            attr: "title"
        },
        position: {
            my: "center left",
            at: "center right",
            adjust: {}
        },
        show: {
            event: "click"
        },
        events: {
            render: function(n, t) {
                var i = t.elements.tip
            }
        },
        style: {
            classes: "ui-tooltip-guidigo ui-tooltip-shadow ui-tooltip-rounded",
            tip: {
                corner: "center left",
                mimic: "center left",
                width: 11,
                height: 7
            }
        }
    }),
    $(function() {
        $(".tdesc-inside").jScrollPane()
    }),
    $(".tourslide-link").live("click",
    function() {
        return $(".ts-show-container .ts-show").is(":visible") && ($(".tour-player-container:eq("+no+")").slideDown(), 
        $(".tdesc-inside").jScrollPane(), $(".tdesc-inside").data("jsp").scrollTo(0, 0), 
        $.fn.media.api.calculateMiniMargin("right")),
        !1
    }),
    $(".closetour").live("click",
    function() {
        return $(".tour-player-container").slideUp(),
        myPlayer && myPlayer.jPlayer("stop"),
        !1
    }),
    $("#isCustom").val() == "False" ? initialize() : $.fn.guidigocustommap.api.init(".custom-map-item"),
    $(".tour-thumbs-container").media()
}),
$(function() {
    adjustStyle($(this).width()),
    $(window).resize(function() {
        adjustStyle($(this).width())
    })
}),
InfoBox.prototype = new google.maps.OverlayView,
InfoBox.prototype.createInfoBoxDiv_ = function() {
    var n, t, i, u = this,
    r = function(n) {
        n.cancelBubble = !0,
        n.stopPropagation && n.stopPropagation()
    },
    f = function(n) {
        n.returnValue = !1,
        n.preventDefault && n.preventDefault(),
        u.enableEventPropagation_ || r(n)
    };
    if (!this.div_) {
        if (this.div_ = document.createElement("div"), this.setBoxStyle_(), typeof this.content_.nodeType == "undefined" ? this.div_.innerHTML = this.getCloseBoxImg_() + this.content_: (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(this.content_)), this.getPanes()[this.pane_].appendChild(this.div_), this.addClickHandler_(), this.div_.style.width ? this.fixedWidthSet_ = !0 : this.maxWidth_ !== 0 && this.div_.offsetWidth > this.maxWidth_ ? (this.div_.style.width = this.maxWidth_, this.div_.style.overflow = "auto", this.fixedWidthSet_ = !0) : (i = this.getBoxWidths_(), this.div_.style.width = this.div_.offsetWidth - i.left - i.right + "px", this.fixedWidthSet_ = !1), this.panBox_(this.disableAutoPan_), !this.enableEventPropagation_) {
            for (this.eventListeners_ = [], t = ["mousedown", "mouseover", "mouseout", "mouseup", "click", "dblclick", "touchstart", "touchend", "touchmove"], n = 0; n < t.length; n++) this.eventListeners_.push(google.maps.event.addDomListener(this.div_, t[n], r));
            this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover",
            function() {
                this.style.cursor = "default"
            }))
        }
        this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", f),
        google.maps.event.trigger(this, "domready")
    }
},
InfoBox.prototype.getCloseBoxImg_ = function() {
    var n = "";
    return this.closeBoxURL_ !== "" && (n = "<img", n += " src='" + this.closeBoxURL_ + "'", n += " align=right", n += " style='", n += " position: relative;", n += " cursor: pointer;", n += " margin: " + this.closeBoxMargin_ + ";", n += "'>"),
    n
},
InfoBox.prototype.addClickHandler_ = function() {
    var n;
    this.closeBoxURL_ !== "" ? (n = this.div_.firstChild, this.closeListener_ = google.maps.event.addDomListener(n, "click", this.getCloseClickHandler_())) : this.closeListener_ = null
},
InfoBox.prototype.getCloseClickHandler_ = function() {
    var n = this;
    return function(t) {
        t.cancelBubble = !0,
        t.stopPropagation && t.stopPropagation(),
        google.maps.event.trigger(n, "closeclick"),
        n.close()
    }
},
InfoBox.prototype.panBox_ = function(n) {
    var i, y, e = 0,
    f = 0,
    p;
    if (!n && (i = this.getMap(), i instanceof google.maps.Map)) {
        i.getBounds().contains(this.position_) || i.setCenter(this.position_),
        y = i.getBounds();
        var l = i.getDiv(),
        a = l.offsetWidth,
        o = l.offsetHeight,
        s = this.pixelOffset_.width,
        r = this.pixelOffset_.height,
        v = this.div_.offsetWidth,
        h = this.div_.offsetHeight,
        c = this.infoBoxClearance_.width,
        u = this.infoBoxClearance_.height,
        t = this.getProjection().fromLatLngToContainerPixel(this.position_);
        t.x < -s + c ? e = t.x + s - c: t.x + v + s + c > a && (e = t.x + v + s + c - a),
        this.alignBottom_ ? t.y < -r + u + h ? f = t.y + r - u - h: t.y + r + u > o && (f = t.y + r + u - o) : t.y < -r + u ? f = t.y + r - u: t.y + h + r + u > o && (f = t.y + h + r + u - o),
        e === 0 && f === 0 || (p = i.getCenter(), i.panBy(e, f))
    }
},
InfoBox.prototype.setBoxStyle_ = function() {
    var n, t;
    if (this.div_) {
        this.div_.className = this.boxClass_,
        this.div_.style.cssText = "",
        t = this.boxStyle_;
        for (n in t) t.hasOwnProperty(n) && (this.div_.style[n] = t[n]);
        typeof this.div_.style.opacity != "undefined" && this.div_.style.opacity !== "" && (this.div_.style.filter = "alpha(opacity=" + this.div_.style.opacity * 100 + ")"),
        this.div_.style.position = "absolute",
        this.div_.style.visibility = "hidden",
        this.zIndex_ !== null && (this.div_.style.zIndex = this.zIndex_)
    }
},
InfoBox.prototype.getBoxWidths_ = function() {
    var i, n = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    t = this.div_;
    return document.defaultView && document.defaultView.getComputedStyle ? (i = t.ownerDocument.defaultView.getComputedStyle(t, ""), i && (n.top = parseInt(i.borderTopWidth, 10) || 0, n.bottom = parseInt(i.borderBottomWidth, 10) || 0, n.left = parseInt(i.borderLeftWidth, 10) || 0, n.right = parseInt(i.borderRightWidth, 10) || 0)) : document.documentElement.currentStyle && t.currentStyle && (n.top = parseInt(t.currentStyle.borderTopWidth, 10) || 0, n.bottom = parseInt(t.currentStyle.borderBottomWidth, 10) || 0, n.left = parseInt(t.currentStyle.borderLeftWidth, 10) || 0, n.right = parseInt(t.currentStyle.borderRightWidth, 10) || 0),
    n
},
InfoBox.prototype.onRemove = function() {
    this.div_ && (this.div_.parentNode.removeChild(this.div_), this.div_ = null)
},
InfoBox.prototype.draw = function() {
    this.createInfoBoxDiv_();
    var n = this.getProjection().fromLatLngToDivPixel(this.position_);
    this.div_.style.left = n.x + this.pixelOffset_.width + "px",
    this.alignBottom_ ? this.div_.style.bottom = -(n.y + this.pixelOffset_.height) + "px": this.div_.style.top = n.y + this.pixelOffset_.height + "px",
    this.div_.style.visibility = this.isHidden_ ? "hidden": "visible"
},
InfoBox.prototype.setOptions = function(n) {
    typeof n.boxClass != "undefined" && (this.boxClass_ = n.boxClass, this.setBoxStyle_()),
    typeof n.boxStyle != "undefined" && (this.boxStyle_ = n.boxStyle, this.setBoxStyle_()),
    typeof n.content != "undefined" && this.setContent(n.content),
    typeof n.disableAutoPan != "undefined" && (this.disableAutoPan_ = n.disableAutoPan),
    typeof n.maxWidth != "undefined" && (this.maxWidth_ = n.maxWidth),
    typeof n.pixelOffset != "undefined" && (this.pixelOffset_ = n.pixelOffset),
    typeof n.alignBottom != "undefined" && (this.alignBottom_ = n.alignBottom),
    typeof n.position != "undefined" && this.setPosition(n.position),
    typeof n.zIndex != "undefined" && this.setZIndex(n.zIndex),
    typeof n.closeBoxMargin != "undefined" && (this.closeBoxMargin_ = n.closeBoxMargin),
    typeof n.closeBoxURL != "undefined" && (this.closeBoxURL_ = n.closeBoxURL),
    typeof n.infoBoxClearance != "undefined" && (this.infoBoxClearance_ = n.infoBoxClearance),
    typeof n.isHidden != "undefined" && (this.isHidden_ = n.isHidden),
    typeof n.visible != "undefined" && (this.isHidden_ = !n.visible),
    typeof n.enableEventPropagation != "undefined" && (this.enableEventPropagation_ = n.enableEventPropagation),
    this.div_ && this.draw()
},
InfoBox.prototype.setContent = function(n) {
    this.content_ = n,
    this.div_ && (this.closeListener_ && (google.maps.event.removeListener(this.closeListener_), this.closeListener_ = null), this.fixedWidthSet_ || (this.div_.style.width = ""), typeof n.nodeType == "undefined" ? this.div_.innerHTML = this.getCloseBoxImg_() + n: (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(n)), this.fixedWidthSet_ || (this.div_.style.width = this.div_.offsetWidth + "px", typeof n.nodeType == "undefined" ? this.div_.innerHTML = this.getCloseBoxImg_() + n: (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(n))), this.addClickHandler_()),
    google.maps.event.trigger(this, "content_changed")
},
InfoBox.prototype.setPosition = function(n) {
    this.position_ = n,
    this.div_ && this.draw(),
    google.maps.event.trigger(this, "position_changed")
},
InfoBox.prototype.setZIndex = function(n) {
    this.zIndex_ = n,
    this.div_ && (this.div_.style.zIndex = n),
    google.maps.event.trigger(this, "zindex_changed")
},
InfoBox.prototype.setVisible = function(n) {
    this.isHidden_ = !n,
    this.div_ && (this.div_.style.visibility = this.isHidden_ ? "hidden": "visible", this.isHidden_ || this.panBox_(this.disableAutoPan_))
},
InfoBox.prototype.getContent = function() {
    return this.content_
},
InfoBox.prototype.getPosition = function() {
    return this.position_
},
InfoBox.prototype.getZIndex = function() {
    return this.zIndex_
},
InfoBox.prototype.getVisible = function() {
    var n;
    return n = typeof this.getMap() == "undefined" || this.getMap() === null ? !1 : !this.isHidden_
},
InfoBox.prototype.show = function() {
    this.isHidden_ = !1,
    this.div_ && (this.div_.style.visibility = "visible")
},
InfoBox.prototype.hide = function() {
    this.isHidden_ = !0,
    this.div_ && (this.div_.style.visibility = "hidden")
},
InfoBox.prototype.open = function(n, t) {
    var i = this;
    t && (this.position_ = t.getPosition(), this.moveListener_ = google.maps.event.addListener(t, "position_changed",
    function() {
        i.setPosition(this.getPosition())
    })),
    this.setMap(n),
    this.div_ && this.panBox_()
},
InfoBox.prototype.close = function() {
    var n;
    if (this.closeListener_ && (google.maps.event.removeListener(this.closeListener_), this.closeListener_ = null), this.eventListeners_) {
        for (n = 0; n < this.eventListeners_.length; n++) google.maps.event.removeListener(this.eventListeners_[n]);
        this.eventListeners_ = null
    }
    this.moveListener_ && (google.maps.event.removeListener(this.moveListener_), this.moveListener_ = null),
    this.contextListener_ && (google.maps.event.removeListener(this.contextListener_), this.contextListener_ = null),
    this.setMap(null)
};
var geocoder, rendererOptions = {
    draggable: !0,
    markerOptions: {
        visible: !1
    }
},
directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions),
directionsService = new google.maps.DirectionsService,
markers = [],
markersPostion = [],
vmarkers = [],
g = google.maps,
map = null,
polyLine,
tmpPolyLine,
markers = [],
vmarkers = [],
g = google.maps,
TheMarker = null,
OldIcon = null,
infowaypoint,
activeMarker,
marker_width = 32,
marker_height = 48,
shadow_width = 50,
shadow_height = 25,
activeshadow_width = 76,
activeshadow_height = 39,
activemarker_width = 45,
activemarker_height = 66,
scaled_width = 32,
scaled_height = 48,
scaled = !1,
latLngToPixel,
lines = [];
var setHoverIcon = function(n) {
    var t = new g.MarkerImage(baseUrl + "Image/HoverMarker/" + n.data.StopOrder, new g.Size(marker_width, marker_height), new g.Point(0, 0), scaled ? new g.Point(scaled_width / 2, scaled_height) : new g.Point(marker_width / 2, marker_height), scaled ? new g.Size(scaled_width, scaled_height) : null),
    i = new g.MarkerImage(baseUrl + "Content/Images/pinshadow.png", new g.Size(shadow_width, shadow_height), new g.Point(0, 0), new g.Point(0, shadow_height));
    n.setIcon(t),
    n.setShadow(i)
},
setIcon = function(n, t) {
    var i = n.data.IsStopTest ? "DemoMarker": "Marker",
    r = new g.MarkerImage(baseUrl + "Image/" + i + "/" + n.data.StopOrder, new g.Size(marker_width, marker_height), new g.Point(0, 0), scaled ? new g.Point(scaled_width / 2, scaled_height) : new g.Point(marker_width / 2, marker_height), scaled ? new g.Size(scaled_width, scaled_height) : null),
    u = new g.MarkerImage(baseUrl + "Image/Active" + i + "/" + n.data.StopOrder, new g.Size(activemarker_width, activemarker_height), new g.Point(0, 0), scaled ? new g.Point(scaled_width / 2, scaled_height) : new g.Point(activemarker_width / 2, activemarker_height), scaled ? new g.Size(scaled_width, scaled_height) : null),
    f = new g.MarkerImage(baseUrl + "Content/Images/pinshadow.png", new g.Size(shadow_width, shadow_height), new g.Point(0, 0), new g.Point(0, shadow_height)),
    o = new g.MarkerImage(baseUrl + "Content/Images/pinshadow-active.png", new g.Size(activeshadow_width, activeshadow_height), new g.Point(0, 0), new g.Point(0, activeshadow_height)),
    e = t ? u: r;
    n.setIcon(e),
    n.setShadow(f),
    t && n.setZIndex(1201),
    n.data.StopOrder == 1 && startBox && (t ? (startBox.setOptions({
        pixelOffset: new google.maps.Size(28, -60)
    }), startBox.show()) : (startBox.setOptions({
        pixelOffset: new google.maps.Size(20, -48)
    }), startBox.hide())),
    n.data.StopOrder == markers.length && endBox && (t ? (endBox.setOptions({
        pixelOffset: new google.maps.Size( - 108, -60)
    }), endBox.show()) : (endBox.setOptions({
        pixelOffset: new google.maps.Size( - 100, -48)
    }), endBox.hide())),
    n.data.IsStopTest && (t ? playBox.setOptions({
        pixelOffset: new google.maps.Size( - 55, -102)
    }) : playBox.setOptions({
        pixelOffset: new google.maps.Size( - 55, -85)
    }))
},
startBox,
endBox,
playBox,
createStop = function(n, t) {
    var f = new google.maps.LatLng(n.Latitude, n.Longitude),
    i = new g.Marker({
        position: f,
        map: map,
        id: n.EncryptStopID,
        data: n,
        draggable: !1,
        optimized: !1
    }),
    r,
    u;
    return g.event.addListener(i, "mouseover",
    function() {
        i != activeMarker && setHoverIcon(i)
    }),
    g.event.addListener(i, "mouseout",
    function() {
        i != activeMarker && setIcon(i, !1)
    }),
    g.event.addListener(i, "click",
    function() {
        var r, u, f;
        i != activeMarker && ($.fn.media.api.selectThumb(t), r = 590, u = stops.length * 74, u > r && (f = (stops.length - 8) * 75, margin = t * 75 - r / 2, margin < 0 && (margin = 0), u - margin < r && (margin = f), $("ul", ".tour-thumbs").animate({
            "margin-left": -margin + "px"
        },
        600, "easeOutSine"), $(".tt-prev, .tt-next").removeClass("tt-disabled"), margin == 0 && $(".tt-prev").addClass("tt-disabled"), margin >= f && $(".tt-next").addClass("tt-disabled")))
    }),
    n.IsStopTest && (r = document.createElement("span"), r.className = "playme", r.innerHTML = "<span>" + strShow.toUpperCase() + "<\/span>", u = {
        content: r,
        disableAutoPan: !1,
        maxWidth: 400,
        zIndex: 80,
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        pixelOffset: new google.maps.Size( - 55, -80),
        isHidden: !1,
        enableEventPropagation: !1
    },
    playBox = new InfoBox(u), playBox.open(map, i)),
    t == 0 && (r = document.createElement("span"), r.className = "start", r.innerHTML = "Start", u = {
        content: r,
        disableAutoPan: !1,
        maxWidth: 0,
        zIndex: 80,
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: !0,
        pane: "overlayImage",
        enableEventPropagation: !1
    },
    startBox = new InfoBox(u), startBox.open(map, i)),
    t == stops.length - 1 && (r = document.createElement("span"), r.className = "finish", r.innerHTML = "Finish", u = {
        content: r,
        disableAutoPan: !1,
        maxWidth: 0,
        zIndex: 80,
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        pixelOffset: new google.maps.Size( - 100, -48),
        isHidden: !0,
        pane: "floatPane",
        enableEventPropagation: !1
    },
    endBox = new InfoBox(u), endBox.open(map, i)),
    setIcon(i, !1),
    i
},
testLine,
initPolyline = function() {
    var n = {
        strokeColor: "#36bde4",
        strokeOpacity: .8,
        strokeWeight: 4
    },
    t = {
        strokeColor: "#36bde4",
        strokeOpacity: .4,
        strokeWeight: 4
    };
    polyLine = new g.Polyline(n),
    polyLine.setMap(map)
},
createLine = function() {
    var t = {
        strokeColor: "#36bde4",
        strokeOpacity: .8,
        strokeWeight: 4
    },
    n = new g.Polyline(t);
    return n.setMap(map),
    n
},
findMarker = function(n) {
    for (var t = 0; t < markers.length; t++) if (markers[t].id == n) return markers[t];
    return null
},
centerMap = function() {
    var o, e, f, a;
    if (markers != null && markers.length != 0) {
        var n, t = 9999,
        i = 9999,
        r = -99999,
        u = -99999;
        for (o = 0; o < markers.length; o++) if (e = markers[o], e != null) {
            var l = e.getPosition(),
            s = l.lat(),
            h = l.lng(),
            c = 0;
            t = t < s ? t: s - c,
            i = i < h ? i: h - c,
            r = r > s ? r: s + c,
            u = u > h ? u: h + c,
            e.data.IsStopTest && (n = e)
        }
        n = n ? n: markers[0],
        f = new google.maps.LatLngBounds,
        f.extend(new google.maps.LatLng(t, i)),
        f.extend(new google.maps.LatLng(t, u)),
        f.extend(new google.maps.LatLng(r, u)),
        f.extend(new google.maps.LatLng(r, i)),
        map.fitBounds(f),
        centerLat = (t + r) / 2,
        centerLng = (i + u) / 2,
        a = new google.maps.LatLng(n.getPosition().lat(), n.getPosition().lng()),
        setTimeout(function() {
            map.panTo(a)
        },
        1e3)
    }
}