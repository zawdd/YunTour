
$.fn.starsMain = function() {
    return $(this).each(function() {
        var n = parseFloat($(this).html()),
        t = Math.max(0, Math.min(5, n)) * 26,
        i = $("<span />").width(t);
        $(this).html(i)
    })
};
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
    }
} (jQuery);

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
    $("a.question").click(function() {
        return $("#question-box").toggle(),
        !1
    }),
    //***********************************
    $(function() {
        $("span.stars-main").starsMain()
    });
    $(function() {
        $(".tdesc-inside").jScrollPane()
    }),
    $(".tourslide-link").live("click",
    function() {
        return $(".ts-show-container .ts-show").is(":visible") && ($(".tour-player-container").slideDown(), $(".tdesc-inside").jScrollPane(), $(".tdesc-inside").data("jsp").scrollTo(0, 0), $.fn.media.api.calculateMiniMargin("right")),
        !1
    }),
    $(".closetour").live("click",
    function() {
        return $(".tour-player-container").slideUp(),
        myPlayer && myPlayer.jPlayer("stop"),
        !1
    }),
    //add-fav action
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
    })
});