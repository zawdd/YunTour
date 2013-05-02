//function
//底部button
var toggleFooterButton = function () {
    if ($(".input-changed").length == 0) {
        $("#footerbtn-savechange, #footerbtn-discardchange").hide();
        $("#footer-inside .large-button-action-next").show();
    } else {
        $("#footerbtn-savechange, #footerbtn-discardchange").show();
        $("#footer-inside .large-button-action-next").hide();
    }
}
var setUnloadWarning = function () {
    $(window).bind('beforeunload', function () {
        if ($(".input-changed").length > 0)
            return "You have unsaved changes";
    });
}

//为form设置td-error
$.validator.setDefaults({
    ignore: '.template, .ignore-valid',
    highlight: function (element, errorClass) {
        $elt = $(element);
        if (!$elt.data("val-mustbechecked")) {
            if (element.tagName == "SELECT")
                $elt.parent().addClass("td-error");
            else {
                if ($elt.data("val-errorholder")) {
                    $($elt.data("val-errorholder")).addClass("td-error");
                }
                else {
                    $(element).addClass("td-error");
                }
            }
        }
    },
    unhighlight: function (element, errorClass) {
        $elt = $(element);
        if ($(element).data("val") && !$(element).data("val-mustbechecked")) {
            if (element.tagName == "SELECT")
                $elt.parent().removeClass("td-error");
            else {
                if ($elt.data("val-errorholder")) {
                    $($elt.data("val-errorholder")).removeClass("td-error");
                }
                else {
                    $(element).removeClass("td-error");
                }
            }
        }
    }
});

//formHandler，比较重要！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
var formHandler = function (e) {
    var $form = $(this);
    if (!$form.valid || $form.valid()) {
    	alert("form.valid");////////////////////////post数据，先序列化，返回json
    	$.post($form.attr('action'), $form.serializeArray())
    		.done(function (json) {
    			json = json || {};
                // In case of success, we redirect to the provided URL or the same page.
                if (json.success) {
                    if (json.redirect) {
                        location = json.redirect || location.href;
                    }
                    $(".input-changed").removeClass("input-changed");
                    initTrackChange();
                } else if (json.errors) {
                    var items = $.map(json.errors, function (error) {
                        return error + '<br />';
                    }).join('');
                    alert(items);
                }
    		}).error(function () {
                alert("erreur");
            });
    } else {
        alert("请检查表格", "Error");
    }
    e.preventDefault();
}

//先存到data里，如果修改过会加入input-changed
var initTrackChange=function(){
    $(".track-change").each(function(n,t){
        var i=$(t).attr("type")=="checkbox"?$(t).is(":checked"):$(t).val();
        $(t).data("initval",i),
        $(t).unbind("change.tracking"),
        $(t).bind("change.tracking",function(){
            var i=$(t).attr("type")=="checkbox"?$(t).is(":checked"):$(t).val();i!=$(t).data("initval")?$(this).addClass("input-changed"):
            $(this).removeClass("input-changed"),toggleFooterButton()}),
            $(t).attr("type")!="hidden"&&$(t).attr("type")!="checkbox"&&($(t).unbind("keyup.tracking"),
            $(t).bind("keyup.tracking", function(){
                $(this).val()!=$(t).data("initval")?$(this).addClass("input-changed"):$(this).removeClass("input-changed"),toggleFooterButton()
            })
    )});
    $("#footerbtn-savechange, #footerbtn-discardchange").hide();
    $("#footer-inside .large-button-action-next").show();
}
//弹出confirm窗口
function confirm(message, title, okHandler, cancelHandler) {
    title = title ? title : 'Confirmation';
    var popup = $("#confirm-js-window");

    popup.find("#title").html(title);
    popup.find("#text").html(message);

    var okButton = popup.find("#button-ok");
    okButton.unbind("click");
    okButton.bind("click", function (e) {
        okHandler();
        popup.trigger("close");
        e.preventDefault();
    })

    var cancelButton = popup.find("#button-cancel");
    cancelButton.unbind("click");
    if (cancelHandler) {
        cancelButton.bind("click", function (e) { cancelHandler(); e.preventDefault(); })
    }
    popup.lightbox_me({
        centered: true,
        closeClick: false,
        closeEsc: false,
        closeSelector: ".close-window",
        overlayCSS: {
            background: 'black',
            opacity: .2
        },
        zIndex: 9999
    });
}
function saveOrDiscard(message, saveHandler, discardHandler, closeHandler) {
        var popup = $("#changes-window").clone();
        popup.find("#text").html(message);

        var okButton = popup.find("#button-save");
        okButton.unbind("click");
        okButton.bind("click", function (e) {
            saveHandler();
            action = "saving";
            popup.trigger("close");
            e.preventDefault();
        })

        var cancelButton = popup.find("#button-discard");
        cancelButton.unbind("click");

        cancelButton.bind("click", function (e) {
            action = "canceling";
            if (discardHandler)
                discardHandler();
            popup.trigger("close");
            e.preventDefault();
        });
        popup.lightbox_me({
            centered: true,
            closeClick: false,
            closeSelector: ".close-window",
            overlayCSS: {
                background: 'black',
                opacity: .2
            },
            destroyOnClose: true,
            onLoad: function () {
                action = "";
            },
            onClose: function () {
                if (action != "saving" && action != "canceling" && typeof closeHandler != 'undefined') {

                    closeHandler();
                }
            },
            zIndex: 9999
        });
    }

$(document).ready(
    function(){
    $(function(){
    	var t,r,u,f,n,e;
        $("#file_upload").uploadify({   
            'swf' : '/uploadify.swf',
            'uploader' : '/uploadhandler',
            'fileTypeExts' : '*.gif; *.jpg; *.png',
            'buttonText' : '请选择图片',
            'removeCompleted' : false,
            'multi' : true,
            onComplete:function(n,t,i,r){ /////////////////////////////请在onComplete函数里将cover-img修改
            	$("#cover-img").attr("src", "/photo"+r);
            }
        });
        
        //script for 拉拽
        for($(".sortables").sortable({
        	connectWith:".connectedSortable",
            receive:function(n,t){
            	if($(this).children().length>3&&$(t.sender).attr("id")=="sortable1"){
            		$(t.sender).sortable("cancel");return}
            $("#topics").val($("#sortable2").sortable("toArray")).trigger("change"),
            $("#tour-form").validate().element("#topics")}}).disableSelection(),
            t=$("#topics").val().split(","),i=0; i<t.length;i++)
            t[i]&&(r=$("#sortable1").find("#"+t[i]),r.remove(),$("#sortable2").append(r));
        
         //script 一开始如果lineId = 0，get必须填lineId参数
         if ($("#lineId").val() == 0) {
         	$("#footer-inside .large-button-action-next").addClass("large-next-disabled");
         	$("#footer-inside .large-button-action-next")
         		.attr("disabled", "disabled")
                .click(function (e) {
                    e.preventDefault();
                    return false;
                }).attr("title", "请填写内容")
                .qtip({
                    content: {
                        attr: 'title'
                    },
                    position: {
                        my: 'bottom left',  // Position my top left...
                        at: 'top left', // at the bottom right of...
                        adjust: {
                            x: 50
                        }
                    },
                    show: {
                        delay: 0
                    },
                    events: {
                        render: function (event, api) {
                            var elem = api.elements.tip;
                        }
                    },
                    style: {
                        tip: {
                            corner: 'bottom left',
                            mimic: 'bottom center',
                            offset: 20, // Give it 5px offset from the side of the tooltip
                            width: 11,
                            height: 7
                        }
                    }
                });
         }
         //删除按钮，
         if ($("#lineId").val() == "0") {
		    $(".f-del").hide();
		 }
		 $(".f-del").bind("click", function () {
		 	confirm("真的要删除吗?", "确认", function () {
		 		tours = [];
		 		tours.push($("#lineId").val());
		 		$.ajax({/////////////////////////////////////////POST到url然后，delete了这个路线，求接口
                    type: "POST",
                    url: baseUrl + "Delete",
                    traditional: true,
                    data: { 'listTour': tours },
                    success: function (result) {
                        $(window).unbind('beforeunload');
                        location.href = "/";
                    },
                    error: function () {
                        info("Unexpected error");
                        hideLoading();
                    }
                });
		 	});
		 });
		 
	  $("#footer-inside .f-exit").each(function (index, item) {
            var redirection = $(item).attr("href");
            $(item).attr("href", "");
            $(item).click(function (e) {
                if ($(".input-changed").length == 0) {
                    location = redirection;
                } else {
                    saveOrDiscard("请选择保存还是放弃.",
                    function () {/////////////////////////saveHandler，点击保存
                        $('#tour-form').trigger('submit');
                    },
                    function () {////////////////////////取消，然后redirect到f-exit的href
                        $(window).unbind('beforeunload');
                        location = redirection;
                    });
                }
                e.preventDefault();
            });
        });
        
        $("#footerbtn-savechange").bind("click", function (e) {
        	$(window).unbind('beforeunload');//////////////清除之前为了track-change，会重新bind
            $('#tour-form').trigger('submit');/////////////trigger(submit)
            toggleFooterButton();//////////////////////////底部button变
            e.preventDefault();
        });
        
        $("#footerbtn-discardchange").click(function (e) {
        	//input变回原来的initval
        	$(".input-changed").each(function (index) {
                $(this).val($(this).data("initval"));
                $(this).removeClass("input-changed");
            });
            
            //coverPath的input中取出原来路径，设cover-img
            var coverPath = $("coverPath").val();
            $("#cover-img").attr("src", coverPath);
            
            //设sortable回原来的
            $("#sortable2 li").each(function () {
                $(this).remove();
                $("#sortable1").append(this);
            });
            
            var topics = $("#topics").val().split(",");
            for (i = 0; i < topics.length; i++) {
                if (topics[i]) {
                    var a = $("#sortable1").find("#" + topics[i]);
                    a.remove();
                    $("#sortable2").append(a);
                }
            }
            //变底部button
            toggleFooterButton();
            e.preventDefault();
        });
    })
});
