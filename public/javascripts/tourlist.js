function clear_form_elements(n) {
    $("#tl-search").val(""),
    $(n).find(":input").each(function() {
        switch (this.type) {
        case "password":
        case "select-multiple":
        case "select-one":
        case "text":
        case "textarea":
            $(this).val("");
            break;
        case "checkbox":
        case "radio":
            this.checked = !1
        }
    })
}
var selectedTourID = 0,
initGridEvent = function() {
    $("#trans-lang").change(function() {
        $("#relax").slideDown(),
        $(this).selectBox("value") == "0" ? ($("#start-btn").addClass("medium-disabled"), $("#start-btn").removeClass("medium-button-action")) : ($("#start-btn").removeClass("medium-disabled"), $("#start-btn").addClass("medium-button-action"))
    }),
    $(".plus-lang").click(function(n) {
        n.preventDefault()
    }),
    $(".plus-lang").qtip({
        content: {
            attr: "title"
        },
        position: {
            my: "bottom left",
            at: "top left",
            adjust: {
                x: 5
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
                corner: "bottom left",
                mimic: "bottom center",
                offset: 20,
                width: 11,
                height: 7
            }
        }
    }),
    initwidth = $(".tl-controls-container").width(),
    initHeight = $(".tl-controls-container").height(),
    $(".tl-controls-container").hover(function() {
        $(this).stop(!0, !0).animate({
            width: "174"
        },
        {
            queue: !0,
            duration: "fast"
        })
    },
    function() {
        $(this).stop(!0, !0).animate({
            width: initwidth,
            height: initHeight
        },
        {
            queue: !0,
            duration: "fast"
        })
    }),
    $(".tour-checkbox").click(function() {
        fnRefreshCheckBox()
    })
},
setRounded;
$(function() {
    $(".ad-search").click(function() {
        return $(".advanced-container").toggle(),
        $(this).toggleClass("opened"),
        !1
    }),
    $("#start-btn").bind("click",
    function() {
        showLoading("Translate, please wait"),
        $.ajax({
            type: "POST",
            url: baseUrl + "Tour/Clone",
            traditional: !0,
            data: {
                encryptTourID: selectedTourID,
                lang: $("#trans-lang").selectBox("value")
            },
            success: function(n) {
                n.success ? location.href = n.redirect: info("Error")
            },
            error: function() {
                info("Error")
            },
            complete: function() {
                hideLoading()
            }
        })
    }),
    $("input[name$='ad-range']").click(function() {
        var n = $(this).val();
        n == "date-range" ? ($("#dateexact-container").hide(), $("#daterange-container").slideDown()) : n == "date-exact" ? ($("#daterange-container").hide(), $("#dateexact-container").slideDown()) : ($("#daterange-container").slideUp(), $("#dateexact-container").slideUp())
    }),
    $("#daterange-container").hide(),
    $("#dateexact-container").hide();
    var n = !1;
    $(".selectdrop").selectBox(),
    initGridEvent(),
    $("#checkall").click(function() {
        $("fieldset.allitems").find(".tour-checkbox").attr("checked", this.checked),
        fnRefreshCheckBox()
    }),
    $(".delete-button").click(function() {
        if ($(this).hasClass("medium-disabled")) return ! 1;
        var n = fnCheckedTours();
        n.length > 0 && confirm(strToursDeleteConfirm, "Confirmation", fnDeleteTours)
    }),
    $(".datepickit").datepicker()
});
var fnDeleteTours = function() {
    var n = fnCheckedTours();
    deleteTours(n)
},
deleteTours = function(n) {
    showLoading(strToursDeleteLoading),
    $.ajax({
        type: "POST",
        url: baseUrl + "Tour/Delete",
        traditional: !0,
        data: {
            listTour: n
        },
        success: function() {
            var f, i, r, u;
            info(strToursDeleteSuccess),
            fnRefreshCheckBox(),
            currentPage == pageCount ? (f = (currentPage - 1) * savedParams.itemsPerPage, i = currentPage * savedParams.itemsPerPage, i = i > totalRowCount ? totalRowCount: i, r = i - f, u = r == n.length ? savedParams.start - r: savedParams.start, reloadGrid({
                start: u < 0 ? 0 : u
            })) : reloadGrid(savedParams)
        },
        error: function() {
            info(strMessageUnexpectedError)
        },
        complete: function() {
            hideLoading()
        }
    })
},
fnToggleCheckboxTours = function() {
    $("fieldset.allitems").find(".tour-checkbox").attr("checked", this.checked),
    fnRefreshCheckBox()
},
fnRefreshCheckBox = function() {
    $("#checkall").attr("checked", $(".tour-checkbox").filter(":checked").length == $(".tour-checkbox").length),
    $(".tour-checkbox").filter(":checked").length > 0 ? $(".delete-button, .user-button", ".select-del").removeClass("medium-disabled") : $(".delete-button, .user-button", ".select-del").addClass("medium-disabled")
},
fnCheckedTours = function() {
    var n = [];
    return $(".tour-checkbox").filter(":checked").each(function(t, i) {
        n.push($(i).val())
    }),
    n
};
setRounded = function() {
    $(".tlimg img").wrap(function() {
        return '<span style="background-image:url(' + $(this).attr("src") + '); height:128px; width:128px;" class="bigrounded" />'
    })
}