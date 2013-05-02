function countCharacters(n) {
    var t = $(n).val().length;
    $(n).next().children().text(t)
}
function setPhotoCrop(n) {
    $("#photo-x").val(n.x),
    $("#photo-y").val(n.y),
    $("#photo-w").val(n.w),
    $("#photo-h").val(n.h)
}
function simulateKeyPress(n) {
    jQuery.event.trigger({
        type: "keypress",
        which: n
    })
}
function selectFirstResult() {
    $(".pac-container").hide();
    var n = $(".pac-container .pac-item:first").text(),
    t = new google.maps.Geocoder;
    t.geocode({
        address: n
    },
    function(t, i) {
        if (i == google.maps.GeocoderStatus.OK) {
            var r = t[0].geometry.location.lat(),
            u = t[0].geometry.location.lng(),
            f = t[0].address_components[0].long_name,
            e = new google.maps.LatLng(r, u);
            $("#location").val(n)
        }
    })
}
function initReorder() {
    reorderSelectBoxFromList(),
    $("#sortableListToCheckbox").sortable({
        stop: function() {}
    }).disableSelection()
}
function recorderMessage(n) {
    switch (n) {
    case 6:
        $("#recorderUpload").html(""),
        $("#rec-vol-label").hide();
        break;
    default:
        $("#rec-vol-label").show()
    }
    $("#recorderMessage").html(recMessageArray[n])
}
function recorderEncodingProgress(n) {
    document.getElementById("recorderMessage").innerHTML = n + "%",
    document.getElementById("recorderMeterBar").style.width = n + "px"
}
function recorderMeter(n) {
    document.getElementById("recorderMeter").innerHTML = Math.round(n),
    document.getElementById("recorderMeterBar").style.width = n + "px"
}
function recorderTime(n) {
    document.getElementById("recorderTime").innerHTML = n
}
function recorderUpload() {
    info(strRecorderUploadingComplete),
    loadAudio(),
    $("#recorder-window").trigger("close")
}
function thisMovie(n) {
    return navigator.appName.indexOf("Microsoft") != -1 ? window[n] : document[n]
}
function toggleRecordUpload(n) {
    n ? $("#rec-upload").removeClass("medium-button").addClass("medium-button-action") : $("#rec-upload").addClass("medium-button").removeClass("medium-button-action")
}
function stopInit() {
    $(".has-suggestion-2").hover(function() {
        var n = $(this).attr("data-suggestion");
        $(this).closest(".step2-item").children(".field-desc").html(n).show()
    },
    function() {
        $(this).closest(".step2-item").children(".field-desc").hide()
    }),
    $(".td-info").click(function(n) {
        n.preventDefault()
    }),
    $(".sync-control").qtip({
        content: {
            attr: "title"
        },
        position: {
            my: "bottom right",
            at: "top right",
            target: $("#SyncAudio")
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
                width: 11,
                height: 7
            }
        }
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
            tip: {
                corner: "bottom left",
                mimic: "bottom center",
                offset: 20,
                width: 11,
                height: 7
            }
        }
    }),
    $(".forcounter").charCounter(),
    $("#SyncAudio").bind("click",
    function() {
        if ($(this).is(":checked")) {
            if ($(".step2-container-inside-2").removeClass("nosync"), $(".images-list").sortable("destroy"), totalTime > 0) {
                for (var n in values) values[n].time > totalTime && (values[n].time = parseInt(totalTime));
                updateMarkerPosition()
            }
            reorder()
        } else $(".step2-container-inside-2").addClass("nosync"),
        $(".images-list").sortable({
            stop: sortImages
        })
    }),
    $("#SyncAudio").is(":checked") ? ($(".step2-container-inside-2").removeClass("nosync"), $(".images-list").data("sortable") && $(".images-list").sortable("destroy")) : ($(".step2-container-inside-2").addClass("nosync"), $(".images-list").sortable({
        stop: sortImages
    })),
    $("#adImage").bind("click",
    function() {
        return pictureCount <= values.length ? (alert("You have reach the maximum number of image allowed for your account"), !1) : ($("#step2-add-images").dialog("open"), newImages = [], !1)
    }),
    $(".addaudio-button").bind("click",
    function() {
        return $("#step2-upload-audio").dialog("open"),
        !1
    }),
    $("#button-removeaudio").click(function(n) {
        confirm(strMessageConfirmDeleteAudio, "",
        function() {
            typeof myPlayer != "undefined" && myPlayer.jPlayer("stop"),
            $.ajax({
                type: "POST",
                url: baseUrl + "Audio/Delete",
                data: {
                    id: $("#StopID").val()
                },
                success: function() {
                    info(strMessageSucceedDeleteAudio),
                    $(".sync-control").hide(),
                    $("#SyncAudio").removeAttr("checked").data("initval", 0),
                    $(".step2-container-inside-2").addClass("nosync"),
                    $(".images-list").sortable({
                        stop: sortImages
                    }),
                    totalTime = 0,
                    $("#audio-panel").hide(),
                    $("#no-audio").show()
                },
                error: function() {
                    infoMessage("Error during deleting audio")
                }
            })
        }),
        n.preventDefault()
    })
}
function sortImages() {
    $(".il-item img").each(function(n) {
        values[$(this).data("position")].time = n + 1,
        values[$(this).data("position")].position = n,
        $(this).parent().parent().find(".time-display").html(parseTime(values[n].time)),
        $(this).parent().parent().find(".time-display-input").val(parseTime(values[n].time))
    }),
    reorder()
}
var aboveHeight, toggleActionButton, jcrop_api1, boundx1, boundy1, jcrop_api_add_images, initCropping, haveRecordAudio, recMessageArray;
Array.prototype.remove = function(n, t) {
    var i = this.slice((t || n) + 1 || this.length);
    return this.length = n < 0 ? this.length + n: n,
    this.push.apply(this, i)
},
aboveHeight = 334,
$(document).ready(function() {
    $(window).scroll(function() {
        $("#add-images-crop").dialog("option", "position", "center"),
        $(window).scrollTop() > aboveHeight ? ($(".black-bar-container").addClass("fixed").css("top", "-15px"), $(".step2-container").css("margin-top", "84px")) : ($(".black-bar-container").removeClass("fixed").css("top", "0"), $(".step2-container").css("margin-top", "-10px"))
    }),
    $(".selectdrop").selectBox(),
    $(".il-remove").live("click",
    function() {
        var t = $(this).parent().parent(),
        n = $(t).find("img").data("position"),
        i = $(".seek-marker");
        return confirm(strMessageConfirmDeleteImage, "",
        function() {
            $.ajax({
                url: baseUrl + "Stop/DeleteImage/",
                type: "POST",
                async: !0,
                data: {
                    imageID: values[n].imageID
                },
                success: function(r) {
                    if (r && r.success) return info(strMessageSucceedDeleteImage),
                    $(t).empty(),
                    $(i[n]).remove(),
                    values.remove(n),
                    checkNoImages(),
                    reorder(),
                    !1;
                    info(strMessageErrorDeleting)
                }
            })
        }),
        !1
    })
});
var loadRounded = function() {
    $(this).parent().hasClass("rounded") || $(this).wrap(function() {
        return '<span style="background-image:url(' + $(this).attr("src") + ');" class="rounded" />'
    })
},
markerMargin = 15,
initListImages = function() {
    initListImages2(),
    reorder()
};
jQuery(function(n) {
    var t = n(".il-item img"),
    i = n(".il-item .time-display"),
    u = n(".images-list li"),
    r = n(".seek-marker");
    n(t).each(function(t) {
        n(this).parent().parent().find(".time-display").empty().html(parseTime(values[t].time)),
        n(this).parent().parent().find(".time-display-input").val(parseTime(values[t].time)),
        n(this).parent().parent().find(".letter").empty().html(letter),
        n(this).parent().parent().find(".il-caption").empty().html(values[t].caption),
        n(this).load(function() {
            n(this).parent().hasClass("rounded") || n(this).wrap(function() {
                return '<span style="background-image:url(' + n(this).attr("src") + "); height: " + n(this).height() + "px; width: " + n(this).width() + 'px;" class="rounded" />'
            })
        }),
        n(this).attr("src", getImageUrl(values[t].image)),
        n(this).data("position", t),
        letter = String.fromCharCode(letter.charCodeAt() + 1)
    }).live("click",
    function() {
        var i = n(".seek-marker"),
        r = n(this).data("position"),
        t;
        n(i).removeClass("seek-marker-selected").removeClass("seek-marker-new"),
        n(i[r]).addClass("seek-marker-selected"),
        t = n(this).parent().parent().parent(),
        n(t).removeClass("new-image").addClass("il-selected").find(".time-display").css("display", "none"),
        n(t).find(".time-display-input").css("display", "block"),
        n(t).find(".time-display-input").is(":focus") ? n(t).find(".time-display-input").blur() : n(t).find(".time-display-input").focus()
    }),
    n(i).live("click",
    function() {
        var i = n(".seek-marker"),
        t = n(this).parent().parent().parent(),
        r = n(t).find("img").data("position");
        n(i).removeClass("seek-marker-selected").removeClass("seek-marker-new"),
        n(i[r]).addClass("seek-marker-selected"),
        n(t).removeClass("new-image").addClass("il-selected").find(".time-display").css("display", "none"),
        n(t).find(".time-display-input").css("display", "block"),
        n(t).find(".time-display-input").is(":focus") ? n(t).find(".time-display-input").blur() : n(t).find(".time-display-input").focus()
    }),
    n(".time-display-input").live("blur",
    function() {
        n(r).removeClass("seek-marker-selected").removeClass("seek-marker-new");
        var i = n(this).parent().parent().parent(),
        f = n(i).removeClass("new-image").removeClass("il-selected").find("img").data("position"),
        u = n(i).find(".time-display-input").val();
        n(i).find(".time-display").empty().html(u).css("display", "block"),
        n(i).find(".time-display-input").css("display", "none"),
        parseTime(u) > totalTime && (n(i).find(".time-display").empty().html(parseTime(totalTime)), n(i).find(".time-display-input").val(totalTime), u = parseTime(totalTime)),
        typeof f != "undefined" && (values[f].time = parseTime(u)),
        setTimeout(function() {
            reorder()
        },
        500)
    }),
    n(".seek-marker").live("click",
    function() {
        var r = n(".il-item img"),
        i,
        t;
        return n(".seek-marker").removeClass("seek-marker-selected").removeClass("seek-marker-new"),
        i = n(this).data("position"),
        t = n(r[i]).parent().parent().parent(),
        n(t).removeClass("new-image").addClass("il-selected").find(".time-display").css("display", "none"),
        n(t).find(".time-display-input").css("display", "block"),
        setTimeout(function(t) {
            n(t).addClass("seek-marker-selected")
        },
        30, this),
        n(t).find(".time-display-input").is(":focus") ? n(t).find(".time-display-input").blur() : n(t).find(".time-display-input").focus(),
        !1
    }).live("dragstop",
    function() {
        var r, t, u, i;
        n(this).removeClass("seek-marker-new"),
        r = n(".il-item img"),
        t = Math.round(totalTime * parseInt(n(this).css("left")) / parseInt(n(".seek-bar").width())),
        t = t < totalTime ? t: totalTime,
        u = n(this).data("position"),
        i = n(r[u]).parent().parent(),
        n(i).find(".time-display-input").val(parseTime(t)),
        n(i).find(".time-display-input").blur()
    }),
    n(".seek-marker").draggable({
        containment: "parent"
    }),
    n(".time-display-input").live("keyup",
    function(t) {
        t.keyCode == 13 && n(this).trigger("blur")
    })
});
var reorder = function(n) {
    var f, t, e;
    values = values.sort(comparatorTime);
    var r = "A",
    o = $(".images-list li"),
    u = [];
    for (i in values) u[i] = values[i].position,
    (typeof values[i].position == "undefined" || values[i].position != i) && (values[i].position = i);
    f = $.map(u,
    function(n) {
        return o.get(n)
    }),
    $(".images-list").empty().append(f),
    $(".images-list").data("sortable") && $(".images-list").sortable("refresh"),
    t = "A",
    e = $(".seek-bar").width(),
    $(".seek-marker").each(function(n) {
        var i = parseFloat(values[n].time),
        r = parseFloat(i * 100 / totalTime),
        u = r * e / 100;
        $(this).data("position", n).css({
            left: u + "px"
        }).empty().html(t),
        t = String.fromCharCode(t.charCodeAt() + 1)
    }),
    $(".images-list li").each(function(t) {
        $(this).find(".time-display").empty().html(parseTime(values[t].time)),
        $(this).find(".time-display-input").val(parseTime(values[t].time)),
        $(this).find(".letter").empty().html(r),
        $(this).find(".il-caption").empty().html(values[t].caption),
        r = String.fromCharCode(r.charCodeAt() + 1);
        var i = getImageUrl(values[t].image);
        n && ($(this).find("img").parent().hasClass("rounded") ? $(this).find("img").parent().remove() : $(this).find("img").remove(), $(this).find(".letter").before("<img />")),
        $(this).find("img").load(function() {
            $(this).parent().hasClass("rounded") || $(this).wrap(function() {
                return '<span style="background-image:url(' + $(this).attr("src") + "); height: " + $(this).height() + "px; width: " + $(this).width() + 'px;" class="rounded" />'
            })
        }),
        $(this).find("img").attr("src", i + "?t=" + +new Date).data("position", t),
        $(this).find(".il-edit").click(function(n) {
            savedValues = $.extend(!0, [], values),
            editImage(values[t]),
            n.preventDefault()
        })
    }),
    $(".seek-marker").draggable({
        containment: "parent"
    }),
    setTimeout(function() {
        updateJsonImages()
    },
    500),
    $(".seek-bar").bind("click",
    function(n) {
        $("#player").jPlayer("playHead", t);
        var i = n.pageX - $(".seek-bar").offset().left,
        t = Math.round(i * 100 / $(".seek-bar").width());
        $("#player").jPlayer("playHead", t)
    }),
    classChange()
},
classChange = function() {
    var t = $(".images-list li").length,
    n = $(".images-container");
    $(n).removeClass("imgs0 imgs1-5 imgs6"),
    t == 0 ? $(n).addClass("imgs0") : t > 0 && t < 6 ? $(n).addClass("imgs1-5") : $(n).addClass("imgs6")
},
getImageUrl = function(n) {
    return baseUrl + "Image/DownloadImageForDevice/" + n + "/gallerie/140"
},
savedValues = [],
newImages = [],
originalImages = [];
$(document).ready(function() {
    function t(n) {
        var i, r;
        if (typeof n != "object" || n == null) return n;
        i = n.constructor();
        for (r in n) i[r] = t(n[r]);
        return i
    }
    var i, n;
    $("#step2-upload-audio").dialog({
        autoOpen: !1,
        height: 450,
        width: 620,
        resizable: !1,
        draggable: !0,
        position: ["center", "center"]
    }),
    $("#step2-upload-images").dialog({
        autoOpen: !1,
        height: 450,
        width: 620,
        resizable: !1,
        draggable: !0,
        zIndex: 999,
        position: ["center", "center"]
    }),
    $("#upload-audio-credits").dialog({
        autoOpen: !1,
        height: 350,
        width: 620,
        resizable: !1,
        draggable: !0,
        position: ["center", "center"]
    }),
    $("#step2-add-images").dialog({
        autoOpen: !1,
        height: 470,
        width: 750,
        resizable: !1,
        draggable: !0,
        zIndex: 998,
        position: ["center", "center"],
        open: function() {
            $("#photoFromUrl").val(""),
            $("#queue_summary").html(""),
            $("#photoFromUrl").removeAttr("disabled"),
            $(".step2-image-preview").attr("src", ""),
            $(".step2-image-preview").hide();
            $(".step2-image-preview").one("load",
            function() {
                $(this).show()
            });
            n = 0,
            toggleActionButton(!1),
            $(".uploadifyQueue").empty();
            var t = $(".popup-content").data("jsp");
            typeof t != "undefined" && typeof t.destroy == "function" && t.destroy(),
            $(".popup-content").jScrollPane()
        }
    }),
    $("#add-images-crop").dialog({
        autoOpen: !1,
        height: 680,
        width: 780,
        resizable: !1,
        draggable: !1,
        position: ["center", "center"],
        open: function() {
            $.validator.unobtrusive.parse("#gallery-form")
        },
        close: function() {
            typeof jcrop_api_add_images != "undefined" && jcrop_api_add_images.destroy()
        }
    }),
    $("#add-images-crop input[name=cropit]").live("change",
    function() {
        jcrop_api_add_images.setOptions({
            aspectRatio: $("#add-images-crop input[name=cropit]").filter(":checked").val() == "standard" ? 1.5 : 0
        })
    }),
    $("#add-images-finish").dialog({
        autoOpen: !1,
        height: 680,
        width: 780,
        resizable: !1,
        draggable: !0,
        position: ["center", "center"]
    }),
    $(".medium-button-action-cancel").live("click",
    function() {
        return confirm(strMessageConfirmProgressLost, "",
        function() {
            $("#step1-add-image").dialog("close"),
            $("#step1-cover-crop").dialog("close"),
            $("#step1-thumb-crop").dialog("close"),
            $("#step1-cover-credits").dialog("close"),
            $("#step2-add-images").dialog("close"),
            $("#step2-add-image").dialog("close"),
            $("#step2-thumb-crop").dialog("close"),
            $("#step2-cover-credits").dialog("close"),
            $("#add-images-crop").dialog("close"),
            $("#add-images-finish").dialog("close"),
            $("#step2-upload-audio").dialog("close"),
            $("#upload-audio-credits").dialog("close"),
            cancelImages()
        }),
        !1
    }),
    $("#step2-add-images .medium-button-next").click(function() {
        if ($(this).hasClass("medium-next-disabled")) return ! 1;
        if ($("#upload-photo-placeholder1").attr("src") != "" || newImages.length > 0 || n > 0) if (n > 0) $("#file_upload1").uploadifyUpload();
        else {
            var i;
            values.length == 0 ? i = $("#SyncAudio").is(":checked") ? 0 : 1 : (i = values[values.length - 1].time + 1, $("#SyncAudio").is(":checked") && (i = i > totalTime ? totalTime: i)),
            $.ajax({
                type: "POST",
                url: baseUrl + "Image/GetFromUrl/",
                data: {
                    stopID: $("#StopID").val(),
                    url: $("#photoFromUrl").val(),
                    userID: userID
                },
                cache: !1,
                async: !1,
                success: function(n) {
                    newImages.push(n),
                    originalImages.push(t(n)),
                    $("#step2-add-images").dialog("close"),
                    editImage(newImages[0], !0)
                },
                complete: function() {
                    hideLoading()
                }
            })
        }
        return ! 1
    }),
    $("#add-images-crop .medium-button-prev").bind("click",
    function() {
        return $("#add-images-crop").dialog("close"),
        $("#step2-add-images").dialog("open"),
        !1
    }),
    $("#add-images-finish .medium-button-done, #add-images-crop .medium-button-done").bind("click",
    function() {
        return $("#add-images-finish").dialog("close"),
        $("#add-images-crop").dialog("close"),
        !1
    }),
    $("#upload-audio-credits .medium-button-prev").bind("click",
    function() {
        return $("#upload-audio-credits").dialog("close"),
        $("#step2-upload-audio").dialog("open"),
        !1
    }),
    $("#step2-upload-audio .medium-button-action-next").bind("click",
    function() {
        return $(this).hasClass("medium-next-disabled") ? !1 : ($("#step2-upload-audio").dialog("close"), $("#upload-audio-credits").dialog("open"), $("#audio-credits").val($("#AudioCredits").val()).trigger("keyup"), !1)
    }),
    $(".am-ac").live("click",
    function() {
        return $("#upload-audio-credits").dialog("open"),
        $("#audio-credits").val($("#AudioCredits").val()).trigger("keyup"),
        $("#AudioCredits").val() == "" ? $(".modal-credits .small-title").html($(".modal-credits .small-title").data("addlabel")) : $(".modal-credits .small-title").html($(".modal-credits .small-title").data("editlabel")),
        !1
    }),
    $("#audio-form").submit(function(n) {
        n.preventDefault()
    }),
    $("#upload-audio-credits .medium-button-action-finish").bind("click",
    function() {
        return $("#audio-form").validate().element("#audio-credits") && ($("#AudioCredits").val($("#audio-credits").val()), $("#AudioCredits").trigger("change"), $("#upload-audio-credits").dialog("close"), $(".am-ac").html($("#audio-credits").val() == "" ? $(".am-ac").data("addlabel") : $(".am-ac").data("editlabel"))),
        !1
    }),
    n = 0,
    $("#file_upload1").uploadify({
        uploader: baseUrl + "Scripts/swf/uploadify.swf",
        script: baseUrl + "Image/UploadGallery",
        scriptData: {
            id: $("#StopID").val(),
            userID: userID,
            sync: $("#SyncAudio").is(":checked")
        },
        auto: !1,
        width: 126,
        height: 42,
        cancelImg: baseUrl + "Content/Images/cancel.png",
        queueID: "preview-content",
        wmode: "transparent",
        hideButton: !0,
        multi: !0,
        fileExt: "*.jpeg;*.gif;*.png;*.jpg;*.bmp",
        fileDesc: "Image Files",
        sizeLimit: pictureMaxFileSize,
        onSelectOnce: function(t, i) {
            if ($("#photoFromUrl").attr("disabled", "disabled"), n = i.fileCount, $("#queue_summary").show(), $("#upload-photo-placeholder1").hide(), pictureCount - (i.fileCount + values.length) < 0) return $("#queue_summary").html(strMessageErrorTooMuchImages.replace(/_fileCount_/, i.fileCount + values.length - pictureCount)),
            $("#queue_summary").addClass("queue-error"),
            toggleActionButton(!1),
            !1;
            var r;
            values.length == 0 ? r = ($("#SyncAudio").is(":checked") ? -1 : 0) + n: (r = values[values.length - 1].time + n, $("#SyncAudio").is(":checked") && (r = r > totalTime ? totalTime: r)),
            $("#file_upload1").uploadifySettings("scriptData", {
                id: $("#StopID").val(),
                userID: userID
            }),
            $("#queue_summary").removeClass("queue-error"),
            $("#queue_summary").html(strMessageFileInQueue.replace(/_fileInQueue_/, n)),
            toggleActionButton(!0)
        },
        onCancel: function() {
            n--,
            n > 0 || ($("#queue_summary").html(""), $("a.browse-action", "#step2-add-images").addClass("medium-button-action"), $("a.medium-button-action-next", "#step2-add-images").removeClass("medium-button-action"), $("#photoFromUrl").removeAttr("disabled"), toggleActionButton(!1)),
            setTimeout(function() {
                n > 0 && pictureCount >= n + values.length ? ($("#queue_summary").html(strMessageFileInQueue.replace(/_fileInQueue_/, n)), $("#queue_summary").removeClass("queue-error"), $("#step2-add-images .medium-button-action-next").removeClass("medium-disabled"), toggleActionButton(!0)) : n > 0 && $("#queue_summary").html(strMessageErrorTooMuchImages.replace(/_fileCount_/, n + values.length - pictureCount))
            },
            500)
        },
        onComplete: function(n, t, i, r) {
            result = $.parseJSON(r),
            newImages.push(result),
            originalImages.push($.parseJSON(r)),
            $(".step2-image-preview").show();
            var f = baseUrl + "Image/DownloadImageForDevice/" + result.image + "/gallerie/0";
            $("#queue_summary").hide(),
            $(".step2-image-preview").attr("src", f)
        },
        onProgress: function() {
            $("#queue_summary").text(strMessageUploadingWait)
        },
        onAllComplete: function() {
            $("#step2-add-images").dialog("close"),
            editImage(newImages[0], !0)
        },
        onError: function() {
            info("An error occured")
        }
    }),
    $("#audio_file").uploadify({
        uploader: baseUrl + "Scripts/swf/uploadify.swf",
        script: baseUrl + "Audio/Upload",
        cancelImg: baseUrl + "Content/Images/cancel.png",
        buttonText: "Browse files",
        scriptData: {
            id: $("#StopID").val(),
            userID: userID
        },
        folder: "uploads",
        auto: !0,
        width: 126,
        height: 42,
        wmode: "transparent",
        hideButton: !0,
        sizeLimit: audioMaxFileSize,
        fileExt: "*.mp3;*.mpeg3;*.m4a;*.wav",
        fileDesc: "Audio Files",
        onSelectOnce: function() {
            $("#audio_file").uploadifySettings("scriptData", {
                id: $("#StopID").val(),
                userID: userID
            })
        },
        onComplete: function() {
            loadAudio(),
            $("#step2-upload-audio").dialog("close"),
            $("#upload-audio-credits").dialog("open")
        }
    }),
    $("#photoFromUrl").bind("blur",
    function() {
        if ($("#photoFromUrl").val() != "" && $("#photoFromUrl").val().indexOf("http") != 0) {
            $("#photoFromUrl").val(""),
            $("#upload-photo-placeholder1").hide(),
            $("#upload-photo-placeholder1").attr("src", ""),
            toggleActionButton(!1);
            return
        }
    }),
    $("#photoFromUrl").bind("keyup",
    function() {
        var n = $("<img />");
        $("#upload-photo-placeholder1").hide(),
        $("#upload-photo-placeholder1").attr("src", ""),
        n.load(function() {
            this.height != 0 ? ($(".step2-image-preview").attr("src", $(this).attr("src")), $("#queue_summary").hide(), $("#upload-photo-placeholder1").show(), toggleActionButton(!0)) : ($("#queue_summary").html(strMessageErrorImageUrl), $("#queue_summary").addClass("queue-error"))
        }),
        n.attr("src", $("#photoFromUrl").val()),
        $("#queue_summary").html(strMessageErrorImageUrl),
        $("#queue_summary").addClass("queue-error")
    }),
    initOnce()
}),
toggleActionButton = function(n) {
    n ? ($("a.browse-action", "#step2-add-images").addClass("medium-button").removeClass("medium-button-action"), $("a.medium-button-next", "#step2-add-images").removeClass("medium-button").removeClass("medium-next-disabled").addClass("medium-button-action").addClass("medium-button-action-next")) : ($("a.browse-action", "#step2-add-images").removeClass("medium-button").addClass("medium-button-action"), $("a.medium-button-next", "#step2-add-images").addClass("medium-button").addClass("medium-next-disabled").removeClass("medium-button-action").removeClass("medium-button-action-next"))
},
initCropping = function() {
    typeof jcrop_api_add_images != "undefined" && jcrop_api_add_images.destroy();
    var r = $("#add-images-crop .ai-crop-item img")[0],
    n = 1.5,
    t = 3e4,
    i = t * n;
    $("#add-images-crop input[name=cropit]").filter(":checked").val() == "standard" || (n = 0),
    jcrop_api_add_images = $.Jcrop("#add-images-crop .ai-crop-item img", {
        onChange: setPhotoCrop,
        onSelect: setPhotoCrop,
        setSelect: [0, 0, i, t],
        aspectRatio: n,
        bgColor: "#fff",
        boxWidth: 480,
        boxHeight: 320
    },
    function() {
        var n = this.getBounds();
        boundx1 = n[0],
        boundy1 = n[1]
    })
};
var cropImage = function(n, t) {
    showLoading("Cropping, please wait"),
    $.ajax({
        url: baseUrl + "Image/CropStopImage/",
        type: "POST",
        async: !0,
        data: {
            imageID: n.imageID,
            x: $("#photo-x").val(),
            y: $("#photo-y").val(),
            h: $("#photo-h").val(),
            w: $("#photo-w").val()
        },
        success: function(i) { (i.result = "success") && (i.image.caption = $("#image-caption").val(), i.image.credit = $("#image-credits").val(), i.image.position = n.position, replaceInArray(t ? newImages: values, n, i.image), editImage(i.image, t))
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
editImage = function(n, t) {
    typeof jcrop_api_add_images != "undefined" && (jcrop_api_add_images.destroy(), jcrop_api_add_images = undefined);
    var i = t ? newImages: values,
    r = $.inArray(n, i),
    u = baseUrl + "Image/DownloadImageForDevice/" + n.image + "/gallerie/0?t=" + +new Date;
    if ($("#add-images-crop .medium-button-prev").unbind("click"), $("#add-images-crop .medium-button-next").unbind("click"), $("#add-images-crop .medium-button-prev").addClass("medium-prev-disabled"), $("#add-images-crop .medium-button-next").addClass("medium-next-disabled"), $("#add-images-crop .medium-button-next").removeClass("medium-button-action").removeClass("medium-button-action-next").addClass("medium-button"), n.isCroped) {
        $("#add-images-crop .notcroped").hide(),
        $("#add-images-crop .iscroped").show(),
        $(".ai-crop-item img").addClass("croped");
        $(".ai-crop-item img").one("load",
        function() {
            $(".ai-crop-item img").show()
        });
        $("#add-images-crop .ai-crop-reset").unbind("click"),
        $("#add-images-crop .ai-crop-reset").bind("click",
        function(r) {
            confirm(strMessageConfirmCancelCrop, "",
            function() {
                $.ajax({
                    url: baseUrl + "Image/CancelCrop/",
                    data: {
                        imageID: n.imageID
                    },
                    success: function(r) {
                        r.caption = $("#image-caption").val(),
                        r.credit = $("#image-credits").val(),
                        r.position = n.position,
                        replaceInArray(i, n, r),
                        editImage(r, t)
                    }
                })
            }),
            r.preventDefault()
        }),
        r != 0 && $("#add-images-crop .medium-button-prev").removeClass("medium-prev-disabled"),
        r != i.length - 1 ? (t && ($("#add-images-crop .medium-button-next").addClass("medium-button-action").addClass("medium-button-action-next").removeClass("medium-button"), $("#add-images-crop .medium-button-done").removeClass("medium-button-action")), $("#add-images-crop .medium-button-next").removeClass("medium-next-disabled")) : $("#add-images-crop .medium-button-done").addClass("medium-button-action")
    } else $("#add-images-crop .medium-button-done").removeClass("medium-button-action"),
    $("#add-images-crop input[name=cropit]")[0].checked = !0,
    $("#add-images-crop input[name=cropit]")[1].checked = !1,
    $("#add-images-crop .notcroped").show(),
    $("#add-images-crop .iscroped").hide(),
    $("#add-images-crop .ai-crop-item img").removeClass("croped"),
    $("#add-images-crop .ai-crop-item img").unbind("load"),
    $("#add-images-crop .ai-crop-item img").bind("load",
    function() {
        $("#add-images-crop .ai-crop-item img").unbind("load"),
        initCropping(),
        r != 0 && $("#add-images-crop .medium-button-prev").removeClass("medium-prev-disabled"),
        r != i.length - 1 && $("#add-images-crop .medium-button-next").removeClass("medium-next-disabled")
    }),
    $("#add-images-crop .medium-button-action-apply-crop").unbind("click"),
    $("#add-images-crop .medium-button-action-apply-crop").bind("click",
    function(i) {
        cropImage(n, t),
        i.preventDefault()
    });
    $("#add-images-crop .medium-button-prev").bind("click",
    function(u) {
        if ($(this).hasClass("medium-prev-disabled")) return ! 1;
        validateGallerieData() && (n.caption = $("#image-caption").val(), n.credit = $("#image-credits").val(), replaceInArray(i, n), editImage(i[r - 1], t)),
        u.preventDefault()
    }),
    $("#add-images-crop .medium-button-next").bind("click",
    function(u) {
        if ($(this).hasClass("medium-next-disabled")) return ! 1;
        validateGallerieData() && (n.caption = $("#image-caption").val(), n.credit = $("#image-credits").val(), replaceInArray(i, n), editImage(i[r + 1], t)),
        u.preventDefault()
    }),
    $("#add-images-crop .index-image").text(r + 1),
    $("#add-images-crop .count-image").text(i.length),
    $("#add-images-crop .ai-crop-item img").hide(),
    $("#add-images-crop .ai-crop-item img").attr("src", u),
    $("#image-caption").val(n.caption),
    $("#image-credits").val(n.credit),
    $("#image-caption, #image-credits").trigger("keyup"),
    $("#add-images-crop").dialog("open"),
    $("#add-images-crop .medium-button-done").unbind("click"),
    $("#add-images-crop .medium-button-done").bind("click",
    function() {
        if (validateGallerieData()) {
            if ($("#add-images-crop").dialog("close"), n.caption = $("#image-caption").val(), n.credit = $("#image-credits").val(), t) for (var i = 0; i < newImages.length; i++) addNewImage(newImages[i]);
            replaceInArray(values, n),
            checkNoImages(),
            reorder(!0),
            totalTime > 0 ? $(".sync-control").show() : $(".sync-control").hide(),
            t = !1,
            newImages = []
        }
        return ! 1
    }),
    $("#add-images-crop .medium-button-action-cancel").unbind("click").die("click"),
    $("#add-images-crop .medium-button-action-cancel").bind("click",
    function() {
        return confirm(strMessageConfirmProgressLost, "",
        function() {
            savedValues.length > 0 && (values = savedValues, savedValues = []),
            cancelImages(),
            $("#add-images-crop").dialog("close")
        }),
        !1
    })
},
replaceInArray = function(n, t, i) {
    var r = n.indexOf(t);
    n.splice(r, 1, i ? i: t)
},
addValues = function(n) {
    values.push(n)
},
letter = "A",
parseTime = function(n) {
    var r, t, i;
    return n.toString().indexOf(":") == -1 ? (r = parseInt(n / 60), t = n % 60, t = t.toString().length == 1 ? "0" + t: t, r + ":" + t) : (i = n.split(":"), parseInt(i[0]) * 60 + parseInt(Math.round(i[1])))
},
parseTime2 = function(n) {
    if (n.toString().indexOf(":") == -1) return n;
    var t = n.split(":");
    return parseInt(t[0]) * 60 + parseInt(Math.round(t[1]))
},
formatTime = function(n) {
    if (n.toString().indexOf(":") == -1) {
        var i = parseInt(n / 60),
        t = n % 60;
        return t = t.toString().length == 1 ? "0" + t: t,
        i + ":" + t
    }
    return n
},
initOnce = function() {};
var valuesNew = {},
markerMargin = 15,
initListImages2 = function() {
    var r, i, t, n;
    initTrackChange(),
    r = new google.maps.Geocoder,
    i = {
        types: ["geocode", "establishment"]
    },
    $("#location").is(":visible") && (t = new google.maps.places.Autocomplete($("#location")[0], i), google.maps.event.addListener(t, "place_changed",
    function() {
        var n = t.getPlace();
        n && n.geometry && ($("#latitude").val(n.geometry.location.lat()), $("#longitude").val(n.geometry.location.lng()), $("#stop-form").validate().element("#location"), $("#location, #latitude, #longitude").trigger("change"))
    }), n = {},
    $("#location").focusin(function() {
        n.location = $("#location").val(),
        n.lat = $("#latitude").val(),
        n.lng = $("#longitude").val(),
        $(document).bind("keydown",
        function(t) {
            t.which == 13 || t.which == 9 ? n.location != $("#location").val() && (t.preventDefault(), $(".pac-container").show()) : $("#latitude, #longitude").val("")
        })
    }), $("#location").focusout(function() {
        $(document).unbind("keydown"),
        n.location == $("#location").val() && n.lat != "" && ($("#latitude").val(n.lat), $("#longitude").val(n.lng), $(".pac-container").hide()),
        n.location = "",
        n.lat = "",
        n.lng = ""
    }))
};
var fnChangeTracking = function() {
    $(this).val() != $(item).data("initval") ? $(this).addClass("input-changed") : $(this).removeClass("input-changed"),
    $(".input-changed").length == 0 ? ($("#button-savechange, #button-discardchange").hide(), $("#button-addnewstop").show()) : ($("#button-savechange, #button-discardchange").show(), $("#button-addnewstop").hide())
},
trackChange = function(n, t) { (!$(n).data("initval") || t) && $(n).data("initval", $(n).val()),
    $(n).unbind("blur"),
    $(n).bind("blur", fnChangeTracking),
    $(n).unbind("change"),
    $(n).bind("change", fnChangeTracking),
    $(n).attr("type") != "hidden" && ($(n).unbind("keyup"), $(n).bind("keyup",
    function() {
        $(this).val() != $(n).data("initval") ? $(this).addClass("input-changed") : $(this).removeClass("input-changed"),
        $(".input-changed").length == 0 ? ($("#button-savechange, #button-discardchange").hide(), $("#button-addnewstop").show()) : ($("#button-savechange, #button-discardchange").show(), $("#button-addnewstop").hide())
    }))
},
initTrackChange = function() {
    $(".track-change").each(function(n, t) {
        var i = $(t).attr("type") == "checkbox" ? $(t).is(":checked") : $(t).val();
        $(t).data("initval", i),
        $(t).unbind("change"),
        $(t).bind("change",
        function() {
            var i = $(t).attr("type") == "checkbox" ? $(t).is(":checked") : $(t).val();
            i != $(t).data("initval") ? $(this).addClass("input-changed") : $(this).removeClass("input-changed"),
            $(".input-changed").length == 0 ? ($("#button-savechange, #button-discardchange").hide(), $("#button-addnewstop").show()) : ($("#button-savechange, #button-discardchange").show(), $("#button-addnewstop").hide())
        }),
        $(t).attr("type") != "hidden" && $(t).attr("type") != "checkbox" && ($(t).unbind("keyup"), $(t).bind("keyup",
        function() {
            $(this).val() != $(t).data("initval") ? $(this).addClass("input-changed") : $(this).removeClass("input-changed"),
            $(".input-changed").length == 0 ? ($("#button-savechange, #button-discardchange").hide(), $("#button-addnewstop").show()) : ($("#button-savechange, #button-discardchange").show(), $("#button-addnewstop").hide())
        }))
    }),
    $("#button-savechange, #button-discardchange").hide(),
    $("#button-addnewstop").show()
},
comparatorTime = function(n, t) {
    return parseInt(n.time) == parseInt(t.time) ? 0 : parseInt(n.time) < parseInt(t.time) ? -1 : 1
},
addNewImage = function(n) {
    var t = '<li><div class="il-item"><img src="" alt=""><span class="letter"><\/span><span class="move ir">move<\/span><div class="li-time"><span class="showat">' + strShowAt + '<\/span><span class="time-display"><\/span><input type="text" class="time-display-input" value=""><\/div><\/div><p class="il-caption"><\/p><p class="il-controls"> <a href="#" class="il-remove"><span>' + strDeleteImageStop + '<\/span><\/a> <a href="#" class="il-edit"><span>' + strEditImageStop + "<\/span><\/a> <\/p><\/li>";
    $(".seek-bar").append('<a href="#" class="seek-marker seek-marker-new"><\/a>'),
    $(".images-list").append(t),
    n.position = values.length,
    values.push(n)
},
updateJsonImages = function() {
    imagesHaveChange() ? $("#JsonImages").addClass("input-changed") : $("#JsonImages").removeClass("input-changed"),
    $(".input-changed").length == 0 ? ($("#button-savechange, #button-discardchange").hide(), $("#button-addnewstop").show()) : ($("#button-savechange, #button-discardchange").show(), $("#button-addnewstop").hide()),
    $("#JsonImages").val(JSON.stringify(values))
},
imagesHaveChange = function() {
    var i, n, t;
    for (i in originalImages) if (!isNaN(i) && (n = originalImages[i], t = findImage(n.imageID, values), t != null && (t.caption != n.caption || t.credit != n.credit || t.time != n.time))) return ! 0;
    return ! 1
},
findImage = function(n) {
    for (var i in values) if (values[i].imageID == n) return values[i];
    return null
},
preloadImage = function(n) {
    values.push(n);
    var t = new Image;
    t.src = n.image,
    $(t).load(function() {})
},
checkNoImages = function() {
    values.length == 0 ? ($(".images-container").hide(), $("#add-image-container").addClass("empty-cont")) : ($(".images-container").show(), $("#add-image-container").removeClass("empty-cont"))
},
cancelImages = function() {
    for (var n = 0; n < newImages.length; n++) $.ajax({
        url: baseUrl + "Stop/DeleteImage/",
        type: "POST",
        async: !0,
        data: {
            imageID: newImages[n].imageID
        },
        success: function() {
            var i = originalImages.indexOf(newImages[n]);
            originalImages.remove(i)
        }
    })
},
updateMarkerPosition = function() {
    var n = "A",
    t = $(".seek-bar").width();
    $(".seek-marker").each(function(i) {
        var r = parseFloat(values[i].time),
        u = parseFloat(r * 100 / totalTime),
        f = u * t / 100;
        $(this).data("position", i).css({
            left: f + "px"
        }).empty().html(n),
        n = String.fromCharCode(n.charCodeAt() + 1)
    })
},
validateGallerieData = function() {
    return $("#gallery-form").valid()
},
reorderSelectBoxFromList = function() {
    var n;
    $("#sortableCheckboxFromList").children().length > 0 && (n = $("#sortableCheckboxFromList").selectBox("value")),
    $("#sortableCheckboxFromList").selectBox("destroy").empty(),
    $("#sortableListToCheckbox li a").each(function(t) {
        var i = $(this).data("name");
        $("#sortableCheckboxFromList").append($("<option />").attr("value", $(this).attr("rel")).append(t + 1 + ". " + i)),
        $("#sortableCheckboxFromList").children().filter("[value=" + n + "]").attr("selected", "selected"),
        $(this).html(t + 1 + ". " + i)
    }),
    $("#sortableCheckboxFromList").selectBox().bind("open",
    function() {})
},
pane;
$(function() {
    $("#sortableCheckboxFromList").is(":hidden") || initReorder(),
    $("#launch-reorder").click(function(n) {
        if ($(this).hasClass("bb-del-disabled")) return ! 1;
        $("#reorder-window").lightbox_me({
            centered: !0,
            overlayCSS: {
                background: "black",
                opacity: .2
            },
            closeSelector: ".close-light",
            zIndex: 1036,
            onLoad: function() {
                $("body").css({
                    overflow: "hidden"
                })
            },
            onClose: function() {
                $("body").css({
                    overflow: "auto"
                })
            }
        }),
        n.preventDefault()
    }),
    $("#reorder-window .cancel").click(function(n) {
        reloadStopList({
            encryptStopID: $("#EncryptStopID").val()
        }),
        n.preventDefault()
    }),
    $("#reorder-window .medium-button-action").click(function(n) {
        showLoading(),
        $.ajax({
            url: baseUrl + "Tour/UpdateOrders",
            type: "POST",
            async: !0,
            traditional: !0,
            data: {
                encryptTourID: tourID,
                orders: $("#sortableListToCheckbox").sortable("toArray")
            },
            success: function() {
                reorderSelectBoxFromList()
            },
            complete: function() {
                hideLoading()
            }
        }),
        n.preventDefault()
    })
}),
$(document).ready(function() {
    var n = function() {
        $("#rec-pause").addClass("btn-inactive"),
        $("#rec-play").addClass("btn-inactive"),
        $("#rec-stop").addClass("btn-inactive"),
        $("#rec-cancel").addClass("btn-inactive"),
        $("#rec-record").removeClass("rec-record-active btn-inactive"),
        $("#rec-upload").removeClass("medium-button-action").addClass("medium-button btn-inactive")
    },
    t = function() {
        thisMovie("recorder").sendStop(),
        thisMovie("recorder").sendCancel()
    };
    n(),
    $("#rec-record").click(function(n) {
        n.preventDefault(),
        $(this).hasClass("btn-inactive") || $(this).hasClass("rec-record-active") || ($("#recorder-skin a").removeClass("btn-inactive"), $(this).addClass("rec-record-active btn-inactive"), thisMovie("recorder").sendRecord(), $("#rec-play").addClass("btn-inactive"))
    }),
    $("#rec-cancel").click(function(i) {
        i.preventDefault(),
        $(this).hasClass("btn-inactive") || (t(), n())
    }),
    $("#rec-pause").click(function(n) {
        n.preventDefault(),
        $("#rec-pause").hasClass("btn-inactive") || ($("#rec-record").hasClass("rec-record-active") ? ($("#rec-record").addClass("btn-inactive"), $("#rec-pause").toggleClass("btn-pressed"), $("#rec-play").addClass("btn-inactive")) : $("#rec-play").hasClass("btn-inactive") || $("#rec-pause").toggleClass("btn-pressed"), thisMovie("recorder").sendPause())
    }),
    $("#rec-play").click(function(n) {
        n.preventDefault(),
        $(this).hasClass("btn-inactive") || ($("#rec-pause").removeClass("btn-inactive"), $("#rec-stop").removeClass("btn-inactive"), thisMovie("recorder").sendPlay())
    }),
    $("#rec-stop").click(function(n) {
        n.preventDefault(),
        $(this).hasClass("btn-inactive") || ($("#rec-record").removeClass("rec-record-active"), $("#recorder-skin a").addClass("btn-inactive"), $("#rec-pause").removeClass("btn-pressed"), $("#rec-upload").removeClass("medium-button btn-inactive").addClass("medium-button-action"), $("#rec-cancel").removeClass("btn-inactive"), $("#rec-play").removeClass("btn-inactive"), thisMovie("recorder").sendStop())
    }),
    $("#rec-upload").click(function(n) {
        n.preventDefault(),
        $(this).hasClass("medium-button-action") && thisMovie("recorder").sendSave()
    }),
    $("#launch-recorder").live("click",
    function(i) {
        $("#recorder-window").lightbox_me({
            centered: !0,
            closeSelector: ".close-lightbox",
            overlayCSS: {
                background: "black",
                opacity: .2
            },
            zIndex: 1036,
            onClose: function() {
                t(),
                n()
            }
        }),
        i.preventDefault()
    })
}),
recMessageArray = [],
recMessageArray[0] = "",
recMessageArray[1] = strRecorderReadyRecord,
recMessageArray[2] = strRecorderRecording,
recMessageArray[3] = strRecorderStopRecording,
recMessageArray[4] = strRecorderStopPlayer,
recMessageArray[5] = strRecorderReady,
recMessageArray[6] = strRecorderPlaying,
recMessageArray[7] = strRecorderStartSaving,
recMessageArray[8] = strRecorderNothingSave,
recMessageArray[9] = "",
recMessageArray[10] = strRecorderEncoding,
recMessageArray[11] = "...",
recMessageArray[12] = strRecorderEncodingError,
recMessageArray[13] = strRecorderEncodingComplete,
recMessageArray[14] = strRecorderUploading,
recMessageArray[15] = strRecorderUploadingComplete,
recMessageArray[16] = strRecorderPause,
recMessageArray[17] = strRecorderPause,
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
            o && i.thumbShowCredits ? (t = n(i.thumbCreditsHidden).val(), n("#generic-credits", "#generic-thumb-credits").val(t).trigger("keyup"), t ? n(".credits-label").html(i.editCreditsLabel) : n(".credits-label").html(i.addCreditsLabel), r = n(i.thumbHiddenField).val(), f = baseUrl + "Image/DownloadImageForDevice/" + r + "/thumb/146", n("#generic-thumb-credits .preview img").attr("src", f), n("#generic-thumb-credits .preview img").css({
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
                    var r = baseUrl + "Image/DownloadImageForDevice/" + t.name + "/thumb/146";
                    n(i.thumbHiddenField).val(t.name).trigger("change"),
                    n(i.thumbHiddenField).closest("form").validate().element(i.thumbHiddenField),
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
            n("#generic-thumb-crop .preview img, #generic-thumb-credits .preview img").css({
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
            onComplete: function(t, r, f, e) {
                info(i.messageSucceedUpload),
                u = !1,
                result = n.parseJSON(e),
                n("#image-source").val(result.name);
                var s = baseUrl + "Image/DownloadImageForDevice/" + result.name + "/temp/0";
                n(".generic-image-preview").attr("src", s),
                n("#upload-photo-placeholder").show(),
                n("#generic-add-image .drop-zone .filename").empty().html(f.name),
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
        messageConfirmProgressLost: "Are you sure?",
        messageSucceedUpload: ""
    }
} (jQuery),
$().ready(function() {}),
function(n) {
    var r = [],
    t = [];
    n.fn.doAutosize = function(t) {
        var r = n(this).data("minwidth"),
        h = n(this).data("maxwidth"),
        u = "",
        f = n(this),
        e = n("#" + n(this).data("tester_id")),
        o;
        if (u !== (u = f.val())) {
            o = u.replace(/&/g, "&").replace(/\s/g, " ").replace(/</g, "<").replace(/>/g, ">"),
            e.html(o);
            var s = e.width(),
            i = s + t.comfortZone >= r ? s + t.comfortZone: r,
            c = f.width(),
            l = i < c && i >= r || i > r && i < h;
            l && f.width(i)
        }
    },
    n.fn.resetAutosize = function(t) {
        var u = n(this).data("minwidth") || t.minInputWidth || n(this).width(),
        e = n(this).data("maxwidth") || t.maxInputWidth || n(this).closest(".tagsinput").width() - t.inputPadding,
        o = "",
        i = n(this),
        f = n("<tester/>").css({
            position: "absolute",
            top: -9999,
            left: -9999,
            width: "auto",
            fontSize: i.css("fontSize"),
            fontFamily: i.css("fontFamily"),
            fontWeight: i.css("fontWeight"),
            letterSpacing: i.css("letterSpacing"),
            whiteSpace: "nowrap"
        }),
        r = n(this).attr("id") + "_autosize_tester"; ! n("#" + r).length > 0 && (f.attr("id", r), f.appendTo("body")),
        i.data("minwidth", u),
        i.data("maxwidth", e),
        i.data("tester_id", r),
        i.css("width", u)
    },
    n.fn.addTag = function(i, u) {
        return u = jQuery.extend({
            focus: !1,
            callback: !0
        },
        u),
        this.each(function() {
            var f = n(this).attr("id"),
            e = n(this).val().split(r[f]),
            o,
            h,
            s;
            e[0] == "" && (e = []),
            i = jQuery.trim(i),
            u.unique ? (o = n(e).tagExist(i), o == !0 && n("#" + f + "_tag").addClass("not_valid")) : o = !1,
            i != "" && o != !0 && (n("<span>").addClass("tag").append(n("<span>").text(i).append("  "), n("<a>", {
                href: "#",
                title: "Removing tag",
                text: "x"
            }).click(function() {
                return n("#" + f).removeTag(escape(i))
            })).insertBefore("#" + f + "_addTag"), e.push(i), n("#" + f + "_tag").val(""), u.focus ? n("#" + f + "_tag").focus() : n("#" + f + "_tag").blur(), n.fn.tagsInput.updateTagsField(this, e), u.callback && t[f] && t[f].onAddTag && (s = t[f].onAddTag, s.call(this, i)), t[f] && t[f].onChange && (h = e.length, s = t[f].onChange, s.call(this, n(this), e[h - 1])))
        }),
        !1
    },
    n.fn.removeTag = function(u) {
        return u = unescape(u),
        this.each(function() {
            var f = n(this).attr("id"),
            e = n(this).val().split(r[f]),
            o;
            for (n("#" + f + "_tagsinput .tag").remove(), str = "", i = 0; i < e.length; i++) e[i] != u && (str = str + r[f] + e[i]);
            n.fn.tagsInput.importTags(this, str),
            t[f] && t[f].onRemoveTag && (o = t[f].onRemoveTag, o.call(this, u))
        }),
        !1
    },
    n.fn.tagExist = function(t) {
        return jQuery.inArray(t, n(this)) >= 0
    },
    n.fn.importTags = function(t) {
        id = n(this).attr("id"),
        n("#" + id + "_tagsinput .tag").remove(),
        n.fn.tagsInput.importTags(this, t)
    },
    n.fn.tagsInput = function(i) {
        var u = jQuery.extend({
            interactive: !0,
            defaultText: "add a tag",
            minChars: 0,
            width: "300px",
            height: "100px",
            autocomplete: {
                selectFirst: !1
            },
            hide: !0,
            delimiter: ",",
            unique: !0,
            removeWithBackspace: !0,
            placeholderColor: "#666666",
            autosize: !0,
            comfortZone: 20,
            inputPadding: 12
        },
        i);
        return this.each(function() {
            var f, i, e;
            if (u.hide && n(this).hide(), f = n(this).attr("id"), (!f || r[n(this).attr("id")]) && (f = n(this).attr("id", "tags" + +new Date).attr("id")), i = jQuery.extend({
                pid: f,
                real_input: "#" + f,
                holder: "#" + f + "_tagsinput",
                input_wrapper: "#" + f + "_addTag",
                fake_input: "#" + f + "_tag"
            },
            u), r[f] = i.delimiter, (u.onAddTag || u.onRemoveTag || u.onChange) && (t[f] = [], t[f].onAddTag = u.onAddTag, t[f].onRemoveTag = u.onRemoveTag, t[f].onChange = u.onChange), e = '<div id="' + f + '_tagsinput" class="tagsinput"><div id="' + f + '_addTag">', u.interactive && (e = e + '<input id="' + f + '_tag" value="" data-default="' + u.defaultText + '" />'), e = e + '<\/div><div class="tags_clear"><\/div><\/div>', n(e).insertAfter(this), n(i.holder).css("width", u.width), n(i.holder).css("height", u.height), n(i.real_input).val() != "" && n.fn.tagsInput.importTags(n(i.real_input), n(i.real_input).val()), u.interactive) {
                if (n(i.fake_input).val(n(i.fake_input).attr("data-default")), n(i.fake_input).css("color", u.placeholderColor), n(i.fake_input).resetAutosize(u), n(i.holder).bind("click", i,
                function(t) {
                    n(t.data.fake_input).focus()
                }), n(i.fake_input).bind("focus", i,
                function(t) {
                    n(t.data.fake_input).val() == n(t.data.fake_input).attr("data-default") && n(t.data.fake_input).val(""),
                    n(t.data.fake_input).css("color", "#000000")
                }), u.autocomplete_url != undefined) {
                    autocomplete_options = {
                        source: u.autocomplete_url
                    };
                    for (attrname in u.autocomplete) autocomplete_options[attrname] = u.autocomplete[attrname];
                    jQuery.Autocompleter !== undefined ? (n(i.fake_input).autocomplete(u.autocomplete_url, u.autocomplete), n(i.fake_input).bind("result", i,
                    function(t, i) {
                        i && n("#" + f).addTag(i[0] + "", {
                            focus: !0,
                            unique: u.unique
                        })
                    })) : jQuery.ui.autocomplete !== undefined && (n(i.fake_input).autocomplete(autocomplete_options), n(i.fake_input).bind("autocompleteselect", i,
                    function(t, i) {
                        return n(t.data.real_input).addTag(i.item.value, {
                            focus: !0,
                            unique: u.unique
                        }),
                        !1
                    }))
                } else n(i.fake_input).bind("blur", i,
                function(t) {
                    var i = n(this).attr("data-default");
                    return n(t.data.fake_input).val() != "" && n(t.data.fake_input).val() != i ? t.data.minChars <= n(t.data.fake_input).val().length && (!t.data.maxChars || t.data.maxChars >= n(t.data.fake_input).val().length) && n(t.data.real_input).addTag(n(t.data.fake_input).val(), {
                        focus: !0,
                        unique: u.unique
                    }) : (n(t.data.fake_input).val(n(t.data.fake_input).attr("data-default")), n(t.data.fake_input).css("color", u.placeholderColor)),
                    !1
                });
                n(i.fake_input).bind("keypress", i,
                function(t) {
                    if (t.which == t.data.delimiter.charCodeAt(0) || t.which == 13) return t.preventDefault(),
                    t.data.minChars <= n(t.data.fake_input).val().length && (!t.data.maxChars || t.data.maxChars >= n(t.data.fake_input).val().length) && n(t.data.real_input).addTag(n(t.data.fake_input).val(), {
                        focus: !0,
                        unique: u.unique
                    }),
                    n(t.data.fake_input).resetAutosize(u),
                    !1;
                    t.data.autosize && n(t.data.fake_input).doAutosize(u)
                }),
                i.removeWithBackspace && n(i.fake_input).bind("keydown",
                function(t) {
                    if (t.keyCode == 8 && n(this).val() == "") {
                        t.preventDefault();
                        var i = n(this).closest(".tagsinput").find(".tag:last").text(),
                        r = n(this).attr("id").replace(/_tag$/, "");
                        i = i.replace(/[\s]+x$/, ""),
                        n("#" + r).removeTag(escape(i)),
                        n(this).trigger("focus")
                    }
                }),
                n(i.fake_input).blur(),
                i.unique && n(i.fake_input).keydown(function(t) { (t.keyCode == 8 || String.fromCharCode(t.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/] + /))&&n(this).removeClass("not_valid")})}}),this},n.fn.tagsInput.updateTagsField=function(t,i){var u=n(t).attr("id");n(t).val(i.join(r[u]))},n.fn.tagsInput.importTags=function(u,f){var e,o,s;for(n(u).val(""),e=n(u).attr("id"),o=f.split(r[e]),i=0;i<o.length;i++)n(u).addTag(o[i],{focus:!1,callback:!1});t[e]&&t[e].onChange&&(s=t[e].onChange,s.call(u,u,o[i]))}}(jQuery),$.validator.setDefaults({ignore:".more-info-templatefield, .popup-field, .ignore-valid",rules:{"image-credits":{required:!1,maxlength:75},"image-caption":{required:!0,maxlength:55}},messages:{"image-credits":{maxlength:jQuery.format(strValidationMaxLength.replace("{1}","{0}"))},"image-caption":{required:strValidationFieldRequired,maxlength:jQuery.format(strValidationMaxLength.replace("{1}","{0}"))}},invalidHandler:function(n,t){var i=t.numberOfInvalids();i&&alert("your text is too long")},highlight:function(n){$elt=$(n),$elt.data("val-mustbechecked")||(n.tagName=="SELECT"?$elt.parent().addClass("td-error"):$elt.data("val-errorholder")?$($elt.data("val-errorholder")).addClass("td-error"):$(n).addClass("td-error")),$(n).data("charcounter")&&$(n).val()!=""?$("."+$(n).data("charcounter")).addClass("charleft-error"):$("."+$(n).data("charcounter")).removeClass("charleft-error")},unhighlight:function(n){$elt=$(n),$(n).data("val")&&!$(n).data("val-mustbechecked")&&(n.tagName=="SELECT"?$elt.parent().removeClass("td-error"):$elt.data("val-errorholder")?$($elt.data("val-errorholder")).removeClass("td-error"):$(n).removeClass("td-error")),$(n).data("charcounter")&&$("."+$(n).data("charcounter")).removeClass("charleft-error")}}),$.validator.unobtrusive.adapters.add("correctaddress",function(n){n.rules.correctaddress=n.params,n.messages.correctaddress=n.message}),$.validator.addMethod("correctaddress",function(){var r=$("#latitude").val(),u=$("#longitude").val();return r==""||r<-90||r>90||u==""||u<-180||u>180||$("#location").val()==$("#location").attr("placeholder")?!1:!0})