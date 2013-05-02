//function 工具函数
var checkChanges = function(){
    if ($(".input-changed").length > 0)
        return true;
}
var setUnloadWarning = function () {
    $(window).bind('beforeunload', function () {
        if (checkChanges())
            return "You have unsaved changes";
    });
}
var unsetUnloadWaring = function(){
    $(window).unbind('beforeunload');
}
var initBlackBar = function(){
    if( $("#sortableCheckboxFromList").length > 0 && $("#sortableCheckboxFromList").children().length > 0 ){
        var index = $("#sortableCheckboxFromList")[0].selectedIndex; 
        if(index == 0){
            $(".bb-prev").addClass("bb-disabled");
        }else{
            $(".bb-prev").removeClass("bb-disabled");
        }

        if(index == $("#sortableCheckboxFromList").children().length - 1){
            $(".bb-next").addClass("bb-disabled");
        }else{
            $(".bb-next").removeClass("bb-disabled");
        }

        if($("#StopID").val() == 0){
            $(".bb-delete, .bb-reorder").addClass("bb-del-disabled");
        }else{
            $(".bb-delete").removeClass("bb-del-disabled");
            if($("#sortableCheckboxFromList").children().length > 1){
                $(".bb-reorder").removeClass("bb-del-disabled");
            }else{
                $(".bb-reorder").addClass("bb-del-disabled");
            }
        }
    }else{
        $(".bb-prev, .bb-next").addClass("bb-disabled");
        $(".bb-delete, .bb-reorder").addClass("bb-del-disabled");
    }
}
var setNoStopState = function(){
    $("#sortableCheckboxFromList").selectBox("destroy");
    $("#stop-container, #re-list-container, #sortableCheckboxFromList").empty();
    $(".bb-delete,#launch-reorder").addClass("bb-del-disabled"); 
    $("#button-savechange, #button-discardchange, #sortableCheckboxFromList").hide();
    $("#button-addnewstop, .add-stop-arrow, .nostops").show();
}
var activeNext = function(){
    $("#footer-inside .large-button-action-next")
        .removeClass("large-next-disabled")
        .removeAttr("disabled", "disabled")
        .unbind("click")
        .attr("title", "")
        .qtip("destroy");
          
         
    $('.step-disabled a').unbind("click");
    $(".step-disabled").removeClass("step-disabled");   
};
var unactiveNext = function(){
    $(".stop-dependant").addClass("step-disabled");   
    $('.step-disabled a').bind("click", function () {
        return false;
    });

    $("#footer-inside .large-button-action-next").addClass("large-next-disabled");
    $("#footer-inside .large-button-action-next")
        .attr("disabled", "disabled")
        .bind("click",function(e){
            e.preventDefault();
            return false;
        }).attr("title", "You must add at least one stop")
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
                        // Grab the tip element
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
//添加SelectBox    
var reorderSelectBoxFromList = function() {
    var n;
    $("#sortableCheckboxFromList").children().length > 0 && (n = $("#sortableCheckboxFromList").selectBox("value")),
    $("#sortableCheckboxFromList").selectBox("destroy").empty(),
    $("#sortableListToCheckbox li a").each(function(t) {
        var i = $(this).data("name");
        $("#sortableCheckboxFromList").append($("<option />").attr("value", $(this).attr("rel")).append(t + 1 + ". " + i)),
        $("#sortableCheckboxFromList").children().filter("[value=" + n + "]").attr("selected", "selected"),
        $(this).html(t + 1 + ". " + i)
    }),
    $("#sortableCheckboxFromList").selectBox().bind("open",function() {})
}

///initReorder
function initReorder() {
    reorderSelectBoxFromList(),
    $("#sortableListToCheckbox").sortable({
        stop: function() {}
    }).disableSelection()
}

$(document).ready(function() {
	initReorder(),
	$("#file_upload1").uploadify({   
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
    
    $('#file_upload2').uploadify({
        'swf' : '/uploadify.swf',
        'uploader' : '/uploadhandler',
        // Your options here
        'fileTypeExts' : '*.gif; *.jpg; *.png',
        'buttonText' : '请选择图片',
        'removeCompleted' : false,
        'multi' : true
    });
    
    $("#file_upload3").uploadify({   
        'swf' : '/uploadify.swf',
        'uploader' : '/uploadhandler',
        'fileTypeExts' : '*.mp3',
        'buttonText' : '请选择mp3	',
        'removeCompleted' : false,
        'multi' : true,
        onComplete:function(n,t,i,r){ /////////////////////////////请在onComplete函数里将cover-img修改
        	
        }
    });
	
    $(window).scroll(function() {
        $("#add-images-crop").dialog("option", "position", "center"),
        $(window).scrollTop() > 334 ? ($(".black-bar-container").addClass("fixed").css("top", "-15px"), 
        $(".step2-container").css("margin-top", "84px")) : ($(".black-bar-container").removeClass("fixed").css("top", "0"), 
        $(".step2-container").css("margin-top", "-10px"))
    }),
    
    $(".il-remove").live("click",function() {
        var t = $(this).parent().parent(),
        n = $(t).find("img").data("position"),
        i = $(".seek-marker");
        return confirm(strMessageConfirmDeleteImage, "",
        function() {
            $.ajax({
                url: baseUrl + "Stop/DeleteImage/",///////////////////////////修改这个接口
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
    }),
    
    $(".rewind").click(function () {
        var duration = myPlayer.data('jPlayer').status.duration;
        var currentTime = myPlayer.data('jPlayer').status.currentTime - 1;

        currentTime = currentTime > 0 ? currentTime : 0;

        myPlayer.jPlayer("play", currentTime); // Move play-head to start.
        return false;
    });
    $(".forward").click(function () {
        var duration = myPlayer.data('jPlayer').status.duration;
        var currentTime = myPlayer.data('jPlayer').status.currentTime + 1;

        currentTime = currentTime < duration ? currentTime : duration;

        myPlayer.jPlayer("play", currentTime); // Move play-head to start.
        return false;
    });

    $(".elastic").elastic();
    
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
});