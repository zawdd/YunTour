function setDuration(n,t){var i=Math.floor(n/60),r=n%60;i.toString().length==1&&(i="0"+i),r.toString().length==1&&(r="0"+r),$("#amount").val(i+":"+r),$("#Duration").val(n),$("#Duration").trigger("change"),t||$("#tour-form").validate().element("#Duration")}function showCoverPreview(n){$("#cover-x").val(n.x),$("#cover-y").val(n.y),$("#cover-w").val(n.w),$("#cover-h").val(n.h);var t=200/n.w,i=132/n.h;$("#step1-cover-crop .preview img").css({width:Math.round(t*croppingImage.width)+"px",height:Math.round(i*croppingImage.height)+"px",marginLeft:"-"+Math.round(t*n.x)+"px",marginTop:"-"+Math.round(i*n.y)+"px"}),$(".cover-done .preview img").css({width:Math.round(t*croppingImage.width)+"px",height:Math.round(i*croppingImage.height)+"px",marginLeft:"-"+Math.round(t*n.x)+"px",marginTop:"-"+Math.round(i*n.y)+"px"})}function showPreview1(n){var t,i,r,u;$("#thumb-x").val(n.x),$("#thumb-y").val(n.y),$("#thumb-w").val(n.w),$("#thumb-h").val(n.h),t=200/n.w,i=200/n.h,$("#step1-thumb-crop .preview img").css({width:Math.round(t*croppingImage.width)+"px",height:Math.round(i*croppingImage.height)+"px",marginLeft:"-"+Math.round(t*n.x)+"px",marginTop:"-"+Math.round(i*n.y)+"px"}),r=132/n.w,u=132/n.h,$(".thumbnail-done .preview img").css({width:Math.round(r*croppingImage.width)+"px",height:Math.round(u*croppingImage.height)+"px",marginLeft:"-"+Math.round(r*n.x)+"px",marginTop:"-"+Math.round(u*n.y)+"px"})}var updatePrice,setDefaultPrice,jcrop_api,jcrop_api1,croppingImage;$.validator.methods.range=function(n,t,i){var r=n.replace(",",".");return this.optional(t)||r>=i[0]&&r<=i[1]},$.validator.methods.number=function(n,t){return this.optional(t)||/^-?(?:\d+|\d{1,3}(?:[\s\.,]\d{3})+)(?:[\.,]\d+)?$/.test(n)},
$.validator.unobtrusive.adapters.add("customwithadress",function(n){n.rules.customwithadress=n.params,n.messages.customwithadress=n.message}),
$.validator.addMethod("customwithadress",function(){var r=$("#IsCustom").val(),u=$("#location").val();return(r===!0||r=="True"||r=="true")&&u==""?!1:!0}),
$.validator.unobtrusive.adapters.add("correctaddress",function(n){n.rules.correctaddress=n.params,n.messages.correctaddress=n.message}),
$.validator.addMethod("correctaddress",function(){var r=$("#latitude").val(),u=$("#longitude").val();return r==""||r<-90||r>90||u==""||u<-180||u>180||$("#location").val()==$("#location").attr("placeholder")?!1:!0}),
$(document).ready(
    function(){var n;
    $(".tab-form-item input,.tab-form-item textarea").live("focus",function(){$(this).hasClass("txt-edited")||$(this).addClass("txt-edited")}).live("blur",function(){$(this).val()==""&&$(this).removeClass("txt-edited")}),
    $(".tab-form-item input").each(function(){$(this).val()!=""&&$(this).addClass("txt-edited")}),
    $("#thumb-form").submit(function(n){n.preventDefault()}),
    $("#price-window-open").click(function(n){$("#price-window").lightbox_me({centered:!0,overlayCSS:{background:"black",opacity:.2},zIndex:1036}),n.preventDefault()}),
    $("#free-window-open").click(function(n){$("#free-window").lightbox_me({centered:!0,overlayCSS:{background:"black",opacity:.2},zIndex:1036}),n.preventDefault()}),
    $(".price-ctrl a.medium-button-action").click(function(){return updatePrice(),$("#price-window").trigger("close"),!1}),
    $(".price-ctrl a.medium-button").click(function(){return setDefaultPrice(),$("#price-window").trigger("close"),!1}),
    $(".price-ctrl-free a.medium-button-action").click(function(){return $("#free-window").trigger("close"),!1}),
    $(".price-ctrl-free a.medium-button").click(function(){return $("#free-window").trigger("close"),!1}),
    $("#tourdesc-title").qtip({content:{attr:"title"},position:{my:"bottom left",at:"top left",adjust:{x:50}},show:{delay:0},events:{render:function(n,t){var i=t.elements.tip}},style:{tip:{corner:"bottom left",mimic:"bottom center",offset:20,width:11,height:7}}}),
    $(".td-info").qtip({content:{attr:"title"},position:{my:"bottom left",at:"top right",adjust:{x:-15}},show:{event:"click",delay:0},events:{render:function(n,t){var i=t.elements.tip}},style:{tip:{corner:"bottom left",mimic:"bottom center",offset:20,width:11,height:7}}}),
    $(".forcounter").bind("keyup",function(n){countCharacters(n.target)}).each(function(){countCharacters($(this))}),
    $(".selectdrop").selectBox(),
    $(".elastic").elastic(),
    $("input[name=tier-price]:radio").change(function(){}),
    setDefaultPrice(),
    //updatePrice();
    //var r=new google.maps.Geocoder,i={types:["geocode","establishment"]},
    //t=new google.maps.places.Autocomplete($("#location")[0],i);
    //google.maps.event.addListener(t,"place_changed",function(){var n=t.getPlace();n&&n.geometry&&($("#latitude").val(n.geometry.location.lat()),$("#longitude").val(n.geometry.location.lng()),$("#tour-form").validate().element("#location"),$("#location, #latitude, #longitude").trigger("change"))}),
    n={},
    $("#location").focusin(function(){n.location=$("#location").val(),n.lat=$("#latitude").val(),n.lng=$("#longitude").val(),$(document).bind("keydown",function(t){t.which==13||t.which==9?n.location!=$("#location").val()&&(t.preventDefault(),$(".pac-container").show()):$("#latitude, #longitude").val("")})}),
    $("#location").focusout(function(){$(document).unbind("keydown"),n.location==$("#location").val()&&n.lat!=""&&($("#latitude").val(n.lat),$("#longitude").val(n.lng),$(".pac-container").hide()),n.location="",n.lat="",n.lng=""}),
    $("#map-thumb-location .txtfield").bind("focus",function(){$(this).hasClass("txt-edited")||$(this).addClass("txt-edited"),$(this).val()==$(this)[0].title&&$(this).val("")}).bind("blur",function(){$(this).val()==""&&$(this).removeClass("txt-edited"),$(this).val()==""&&$(this).val($(this)[0].title)}),
    $("#map-thumb-location .txtfield").blur()}),
    updatePrice=function(){var n=$("input[name=tier-price]:radio:checked").val(),t,i;$("#TierID").val(n),$("#TierID").trigger("change"),t="Free",n&&n!=0&&(i=$("#userCurrency").val(),t=$("#li"+n).data(i)),$("#PublishedTiersID").val()!=-1&&n!=$("#PublishedTiersID").val()&&alert(strMessageWarningChangePrice),$("#price-value").html(t)},
    setDefaultPrice=function(){var n=$("#TierID").val();n!=0&&$("input[value="+n+"]:radio").attr("checked","checked")},
    $(function(){
        $("#slider-range-min").slider({range:"min",min:0,max:540,step:1,slide:function(n,t){setDuration(t.value)}}),
        $("#amount").mask("99:99"),
        $("#slider-range-min").slider("value",$("#Duration").val()),
        setDuration($("#Duration").val(),!0),
        $("#amount").bind("keyup",function(){var n=$(this).val().split(":"),i=n[0][0]=="0"?n[0][1]:n[0],t=parseInt(i)*60+parseInt(n[1]);$("#slider-range-min").slider("option","value",t),n[1]>59?setDuration(t):($("#Duration").val(t).trigger("change"),$("#tour-form").validate().element("#Duration"))}),
        $("#amount").blur(function(){})}),
    $(function(){
        var t,r,u,f,n,e;
        for($(".sortables").sortable({connectWith:".connectedSortable",
            receive:function(n,t){if($(this).children().length>3&&$(t.sender).attr("id")=="sortable1"){$(t.sender).sortable("cancel");return}
            $("#topics").val($("#sortable2").sortable("toArray")).trigger("change"),
            $("#tour-form").validate().element("#topics")}}).disableSelection(),
            t=$("#topics").val().split(","),i=0;i<t.length;i++)
            t[i]&&(r=$("#sortable1").find("#"+t[i]),r.remove(),$("#sortable2").append(r));
            $("#step1-add-image").dialog({autoOpen:!1,
            height:450,width:720,resizable:!1,draggable:!1,
            position:["center","center"],
            open:function(){
                $("#fromurl").val(""),
                $("#fromurl").removeAttr("disabled","disabled"),
                $(".step1-image-preview").attr("src",""),
                $(".step1-image-preview").hide(),
                $(".step1-image-preview").bind("load",function(){$(this).show(),croppingImage=this}),
                $("a.browse-action","#step2-add-images").addClass("medium-button-action"),
                $("a.medium-button-next","#step1-add-image").removeClass("medium-button-action").removeClass("medium-button-action-next").addClass("medium-button").addClass("medium-next-disabled"),
                typeof jcrop_api1!="undefined"&&(jcrop_api1.destroy(),jcrop_api1=undefined),
                typeof jcrop_api!="undefined"&&(jcrop_api.destroy(),jcrop_api=undefined)}}),
                $("#step1-cover-crop").dialog({autoOpen:!1,height:530,width:720,resizable:!1,draggable:!1,position:["center","center"],open:function(){var i=1.33,r,u;croppingImage=$("#step1-cover-crop .crop-container img")[0],typeof jcrop_api=="undefined"&&$("#step1-cover-crop .crop-container img").Jcrop({onChange:showCoverPreview,onSelect:showCoverPreview,aspectRatio:i,bgColor:"#fff",boxWidth:400,boxHeight:258,setSelect:[0,0,4e4,3e4]},function(){var n=this.getBounds();r=n[0],u=n[1],jcrop_api=this})}}),
                $("#step1-thumb-crop").dialog({autoOpen:!1,height:530,width:720,resizable:!1,draggable:!1,position:["center","center"],open:function(){var i,r;croppingImage=$("#step1-thumb-crop .crop-container img")[0],typeof jcrop_api1=="undefined"&&$("#step1-thumb-crop .crop-container img").Jcrop({onChange:showPreview1,onSelect:showPreview1,aspectRatio:1,bgColor:"#fff",boxWidth:400,boxHeight:258,setSelect:[0,0,4e4,4e4]},function(){var n=this.getBounds();i=n[0],r=n[1],jcrop_api1=this})}}),
                $("#step1-cover-credits").dialog({autoOpen:!1,height:560,width:584,resizable:!1,draggable:!1,position:["center","center"],open:function(){$("#step1-cover-credits .modal-sub-ctrl .medium-button-prev").children().text(n?$("#step1-cover-credits .modal-sub-ctrl .medium-button-prev").data("changelabel"):$("#step1-cover-credits .modal-sub-ctrl .medium-button-prev").data("croplabel"))}}),
                $(".cover-thumb .medium-button").bind("click",function(){if(u=$("#Thumbnail").val(),f=$("#Cover").val(),u&&f){var t=baseUrl+"Image/DownloadImageForDevice/"+f+"/thumb/179",i=baseUrl+"Image/DownloadImageForDevice/"+u+"/thumb/130";$("#cover-done").attr("src",t),$("#thumbnail-done").attr("src",i),$("#creditssmall").val($("#ThumbCredits").val()),$("#ThumbCredits").val()!=""?($(".cover-add-credits .modal-title").text("Edit credits"),$(".modal-credits .small-title").text("Edit credits")):($(".cover-add-credits .modal-title").text("Add credits"),$(".modal-credits .small-title").html("Add credits <span>(optional)<\/span>")),$("#creditssmall").trigger("keyup"),n=!0,$("#step1-cover-credits").dialog("open")}else $("#step1-add-image").dialog("open");return!1}),
                $(".medium-button-action-cancel").bind("click",function(){return confirm(strMessageConfirmProgressLost,"",function(){$("#step1-add-image").dialog("close"),$("#step1-cover-crop").dialog("close"),$("#step1-thumb-crop").dialog("close"),$("#step1-cover-credits").dialog("close")}),!1}),
                $("#step1-add-image .medium-button-next").bind("click",function(){return $("#upload-photo-placeholder").attr("src")!=""&&($("#step1-add-image").dialog("close"),$("#step1-cover-crop").dialog("open"),n=!1),!1}),
                $("#step1-cover-crop .medium-button-prev").bind("click",function(){return $("#step1-cover-crop").dialog("close"),$("#step1-add-image").dialog("open"),!1}),
                $("#step1-cover-crop .medium-button-action-next").bind("click",function(){return $("#step1-cover-crop").dialog("close"),$("#step1-thumb-crop").dialog("open"),!1}),
                $("#step1-thumb-crop .medium-button-prev").bind("click",function(){return $("#step1-thumb-crop").dialog("close"),$("#step1-cover-crop").dialog("open"),!1}),
                $("#step1-thumb-crop .medium-button-action-next").bind("click",function(){return $("#step1-thumb-crop").dialog("close"),$("#step1-cover-credits").dialog("open"),!1}),
                $("#step1-cover-credits .medium-button-prev").bind("click",function(){return n?($("#step1-cover-credits").dialog("close"),$("#step1-add-image").dialog("open"),n=!1):($("#step1-cover-credits").dialog("close"),$("#step1-thumb-crop").dialog("open")),!1}),
                $("#step1-cover-credits .medium-button-action-finish").bind("click",function(){return $("#thumb-form").validate().element("#creditssmall")&&(n?($("#step1-cover-credits").dialog("close"),$("#ThumbCredits").val($("#creditssmall").val()),$("#ThumbCredits").trigger("change")):e()),!1}),
                e=function(){
                    showLoading("Croping, please wait"),
                    $.ajax({url:baseUrl+"Image/CropTourThumbnail/",
                    type:"POST",async:!0,
                    data:{userID:userID,
                    source:$("#image-source").val(),cover_x:$("#cover-x").val(),
                    cover_y:$("#cover-y").val(),
                    cover_h:$("#cover-h").val(),
                    cover_w:$("#cover-w").val(),
                    thumb_x:$("#thumb-x").val(),
                    thumb_y:$("#thumb-y").val(),
                    thumb_h:$("#thumb-h").val(),
                    thumb_w:$("#thumb-w").val()},
                    success:function(n){$("#step1-cover-credits").dialog("close"),$("#ThumbCredits").val($("#creditssmall").val()),$("#ThumbCredits").trigger("change");var t=baseUrl+"Image/DownloadImageForDevice/"+n.cover+"/thumb/179",i=baseUrl+"Image/DownloadImageForDevice/"+n.thumb+"/thumb/135";$("#cover-img").attr("src",t),$("#thumb-img").attr("src",i),$("#Cover").val(n.cover),$("#Cover").trigger("change"),$("#Thumbnail").val(n.thumb).trigger("change"),$("#tour-form").validate().element("#Thumbnail"),$(".cover-thumb .medium-button span").text("Edit image")},
                    error:function(n,t,i){alert(n.status),alert(i)},complete:function(){hideLoading()}})},
        $("#file_upload").uploadify({
            uploader:baseUrl+"Scripts/swf/uploadify.swf",
            script:baseUrl+"Image/Upload",
            scriptData:{userID:userID,prefix:"thumb"},
            cancelImg:baseUrl+"Content/images/cancel.png",
            buttonText:"Browse files",
            folder:"uploads",
            auto:!0,width:126,
            height:42,wmode:"transparent",
            hideButton:!0,
            fileExt:"*.jpeg;*.gif;*.png;*.jpg;*.bmp",
            fileDesc:"Image Files",
            onComplete:function(n,t,i,r){
                var f=location.pathname,o,e;
                f=f.split("/"),f.pop(),
                f=f.join("/")+"/uploads/"+i.name,result=$.parseJSON(r),
                $("#image-source").val(result.name),
                o=baseUrl+"Image/DownloadImageForDevice/"+result.name+"/temp/0",
                $(".step1-image-preview").attr("src",o),
                $(".step1-image-preview").show(),
                e=f.split("/"),
                $("#step1-add-image .drop-zone .filename").empty().html(e[e.length-1]),
                $("a.browse-action","#step1-add-image").addClass("medium-button").removeClass("medium-button-action"),
                $("a.medium-button-next","#step1-add-image").addClass("medium-button-action").addClass("medium-button-action-next").removeClass("medium-button").removeClass("medium-next-disabled"),
                $("#fromurl").attr("disabled","disabled")}}),
            $("#fromurl").bind("blur",function(){
                if($("#fromurl").val().indexOf("http")!=0){$("#fromurl").val(""),
                    $("#upload-photo-placeholder").hide(),
                    $("#upload-photo-placeholder").attr("src",""),
                    $("a.browse-action","#step1-add-image").addClass("medium-button-action"),
                    $("a.medium-button-next","#step1-add-image").removeClass("medium-button-action").removeClass("medium-button-action-next").addClass("medium-button").addClass("medium-next-disabled");
                    return}}),
                $("#fromurl").bind("keyup",function(){
                    var n=$("<img />");
                    $("#upload-photo-placeholder").hide(),
                    $("#upload-photo-placeholder").attr("src",""),
                    n.load(function(){this.height!=0&&($("#image-source").val($("#fromurl").val()),
                    $(".step1-image-preview").attr("src",$("#fromurl").val()),
                    $("#upload-photo-placeholder").show(),
                    $("a.browse-action","#step1-add-image").addClass("medium-button").removeClass("medium-button-action"),
                    $("a.medium-button-next","#step1-add-image").addClass("medium-button-action").addClass("medium-button-action-next").removeClass("medium-button").removeClass("medium-next-disabled"))}),
                    n.attr("src",$("#fromurl").val())})});
    var initTrackChange=function(){
        $(".track-change").each(function(n,t){
            var i=$(t).attr("type")=="checkbox"?$(t).is(":checked"):$(t).val();
            $(t).data("initval",i),
            $(t).unbind("change.tracking"),
            $(t).bind("change.tracking",function(){
                var i=$(t).attr("type")=="checkbox"?$(t).is(":checked"):$(t).val();i!=$(t).data("initval")?$(this).addClass("input-changed"):
                $(this).removeClass("input-changed"),toggleFooterButton()}),
                $(t).attr("type")!="hidden"&&$(t).attr("type")!="checkbox"&&($(t).unbind("keyup.tracking"),
                $(t).bind("keyup.tracking",
                function(){
                	$(this).val()!=$(t).data("initval")?$(this).addClass("input-changed"):$(this).removeClass("input-changed"),toggleFooterButton()}))}),
        $("#footerbtn-savechange, #footerbtn-discardchange").hide(),
        $("#footer-inside .large-button-action-next").show()},
    formValid=function(){var n=!0;
    return $(".tab-item:visible").find("input.moreinfo-field, textarea.moreinfo-field").each(function(){$(this).hasClass("template")||$("#tour-form").validate().element(this)!==!1||(n=!1)}),n},
    blockValid=function(n){var t=!0;return $(n).find("input.moreinfo-field, textarea.moreinfo-field").each(function(){$("#tour-form").validate().element(this)===!1&&(t=!1)}),t};
    $(function(){var n=$("#tabs .a-tabs-list li"),t;
        $("#tabs .a-tabs-list a").bind("click",function(){
            var t,i,r;
            return formValid()?(t=$(this).attr("href"),i=!1,$(this).parent().find("input").is(":checked")||($(this).parent().find("input").trigger("click"),i=!0),
            $(n).removeClass("tab-active"),
            r=$(".tab-item:visible"),
            $(".tab-item:visible").hide(),
            ("#"+$(r.eq(0)).attr("id")!=t||i)&&($(t).show(),
            $(t+" .tabcontainer").show(),
            $(this).parent().addClass("tab-active"),
            $(t).find("input").first().focus()),!1):($(".tab-item:visible").find(".td-error").first().focus(),!1)}),
        $(".tab-checkbox").bind("change",function()
        {var r=$(this).parent(),
        u=r.data("pkey"),
        i=$(this).parent().find("a").attr("href");
        if($(this).is(":checked")){
            if(!formValid())
                return $(this).trigger("click"),!1;$(n).removeClass("tab-active"),$(this).parent().addClass("tab-active"),
                t(u,r.data("type")),
        $(".tab-item:visible").hide(),
        $(i).show(),$(i+" .tabcontainer").show()}
        else $(i+" .tabcontainer").is(":visible")&&($(n).removeClass("tab-active"),
            $(i+" .tabcontainer").slideUp(function(){$(this).parent().hide();var n=$(this).data("visible_count");
            $(this).parent().find(".tab-form-item").each(function(){blockValid(this)||($(this).find("select").selectBox("destroy"),$(this).empty().remove(),n--)}),
            $(this).data("visible_count",n),
            $("#visible_count_"+u).val(n).trigger("change")}))}),
        $(".tab-item").each(function(){$(".tab-form-item:first .remove-tf-item",$(this)).css("display","none")}),
        $(".tab-form-item .remove-tf-item").bind("click",function(){return $(this).closest(".tab-form-item").slideUp(function(){$(this).empty().remove()}),!1}),
        $("#tabs .a-tabs-list a").bind("click",function(){var n=$(this).parent(),i=n.data("pkey"),r=$(this).parent().find("a").attr("href");t(i,n.data("type"))}),
        n=$("#tabs .a-tabs-list li"),
        t=function(n,t){var r=$("#tab"+n+" > .tabcontainer"),
        i;r.children().length==1&&(i=addPanel(t,n,1),i.show(),initMoreInfoChange(i))},
        $(".add-another").click(function(n){var t=$(this).parent(),i=t.data("pkey"),
        u=t.data("type"),
        f=t.data("count"),
        r=addPanel(u,i,parseInt(f)+1);initMoreInfoChange(r),
        $("#count_"+i).trigger("change"),$("#visible_count_"+i).trigger("change"),
        r.slideDown(function(){$(this).find("input").first().focus()}),
        $("html, body").animate({scrollTop:$(r).offset().top},500),
        n.preventDefault()})});
    var addPanelFromDb=function(n,t,i,r,u,f){var o=addPanel(n,t,i),
        e=t+"_"+i;
        n=="transport"?($("#field1_"+e).selectBox("value",r),$("#field1_"+e).data("initval",r),
        $("#field1_"+e).change()):$("#field1_"+e).val(htlmDecode(r)),
        $("#field2_"+e).val(htlmDecode(u)),
        $("#field3_"+e).val(htlmDecode(f)),
        $("input",o).each(function(){$(this).val()!=""&&$(this).addClass("txt-edited")}),
        $("textarea",o).each(function(){$(this).val()!=""&&($(this).addClass("txt-edited"),countCharacters(this),$(this).elastic())}),
        initMoreInfoChange(o),o.show()},
        addPanelFromJson=function(n,t,i){var u=addPanel(t.Type.toLowerCase(),t.MoreInfoID,n),
        r=t.MoreInfoID+"_"+n;
        t.Type.toLowerCase()=="transport"?($("#field1_"+r).selectBox("value",i.Field1),$("#field1_"+r).data("initval",i.Field1),$("#field1_"+r).change()):$("#field1_"+r).val(htlmDecode(i.Field1)),$("#field2_"+r).val(htlmDecode(i.Field2)),$("#field3_"+r).val(htlmDecode(i.Field3)),
        $("input",u).each(function(){$(this).val()!=""&&$(this).addClass("txt-edited")}),
        $("textarea",u).each(function(){$(this).val()!=""&&($(this).addClass("txt-edited"),$(this).elastic())}),
        initMoreInfoChange(u),u.show()},
        htlmDecode=function(n){return $("<div/>").html(n).text()},
        initMoreInfoChange=function(n){n.find("[id^='field']").each(function(n,t){
            $(t).data("initval",$(t).val()),
            $(t).bind("change",function(){$(this).val()!=$(t).data("initval")?$(this).addClass("input-changed"):$(this).removeClass("input-changed"),$(".input-changed").length==0?($("#footerbtn-savechange, #footerbtn-discardchange").hide(),$("#footer-inside .large-button-action-next").show()):($("#footerbtn-savechange, #footerbtn-discardchange").show(),$("#footer-inside .large-button-action-next").hide())}),
            $(t).bind("keyup",function(){$(this).val()!=$(t).data("initval")?$(this).addClass("input-changed"):$(this).removeClass("input-changed"),$(".input-changed").length==0?($("#footerbtn-savechange, #footerbtn-discardchange").hide(),$("#footer-inside .large-button-action-next").show()):($("#footerbtn-savechange, #footerbtn-discardchange").show(),$("#footer-inside .large-button-action-next").hide())})}),
            n.find(".forcounter-auto").internalCharCounter(),n.find(".forcounter").charCounter()},
        addPanel=function(n,t,i){var r=$("#"+n+"-block").clone(),
            u=$("#tab"+t+" > .tabcontainer"),
            o=t+"_"+i,c=$("li[data-pkey='"+t+"']"),f,s,h,e;
            r.attr("id","block_"+t+"_"+i),
            u.find(".add-another").before(r),
            f=u.data("visible_count"),
            f=f?f:0,f++,
            u.data("visible_count",f),$("#visible_count_"+t).val(f),u.data("count",i),$("#count_"+t).val(i),
            f>1?u.find(".remove-tf-item").css("display",""):u.find(".remove-tf-item").css("display","none"),r.find(".remove-tf-item").bind("click",function(){$("#status_"+o).val(2),r.find("select").selectBox("destroy");
            var n=u.data("visible_count");
            return n--,u.data("visible_count",n),$("#visible_count_"+t).val(n).trigger("change"),n<=1&&u.find(".remove-tf-item").css("display","none"),$(this).closest(".tab-form-item").slideUp(function(){$(this).empty().remove()}),!1}),
            c.append("<input type='hidden' id='status_"+o+"' name='status_"+o+"' value='1'>"),
            s=r.find("select");
            for(h in tsp_type)e=tsp_type[h],s.append("<option value='"+e.name+"' data-field2='"+tsp_fields2[e.type]+"' data-field3='"+tsp_fields3[e.type]+"'>"+tsp_labels[e.name]+"<\/option>");
            return s.addClass("selectdrop").selectBox(),r.find("select").bind("change",function(){var n=$(this).children().filter(":selected"),i=n.data("field2"),r=n.data("field3"),
            u=$(this).parent().find("label[for^='field2'] span"),t;
            u.text(i),t=$(this).parent().find("label[for^='field3'] span"),t.text(r)}),r.find("input.txtfield").ToggleInputValue(),
            r.find("input.urlfield").keypress(function(){($(this).val()==""||$(this).val()=="URL")&&$(this).val("http://")}),
            r.find("[id^='field']").each(function(n,t){var i=$(t).attr("id").replace("PKEY",o),u;u=$(r).find("span[data-valmsg-for="+$(t).attr("id")+"]"),u.attr("data-valmsg-for",i),$(t).attr("id",i).attr("name",i).removeClass("template").data("initval",$(t).val()).bind("change",function(){$(this).val()!=$(t).data("initval")?$(this).addClass("input-changed"):$(this).removeClass("input-changed")}).bind("blur",function(){$(this).val()!=$(t).data("initval")?$(this).addClass("input-changed"):$(this).removeClass("input-changed")})}),
            $.validator.unobtrusive.parseDynamicContent("#tour-form"),
            $(".elastic",r).elastic(),r};
(function(n){var r=[],t=[];
    n.fn.doAutosize=function(t){var r=n(this).data("minwidth"),h=n(this).data("maxwidth"),u="",f=n(this),e=n("#"+n(this).data("tester_id")),o;if(u!==(u=f.val())){o=u.replace(/&/g,"&").replace(/\s/g," ").replace(/</g,"<").replace(/>/g,">"),e.html(o);var s=e.width(),i=s+t.comfortZone>=r?s+t.comfortZone:r,c=f.width(),l=i<c&&i>=r||i>r&&i<h;l&&f.width(i)}},
    n.fn.resetAutosize=function(t){var u=n(this).data("minwidth")||t.minInputWidth||n(this).width(),e=n(this).data("maxwidth")||t.maxInputWidth||n(this).closest(".tagsinput").width()-t.inputPadding,o="",i=n(this),f=n("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),r=n(this).attr("id")+"_autosize_tester";!n("#"+r).length>0&&(f.attr("id",r),f.appendTo("body")),i.data("minwidth",u),i.data("maxwidth",e),i.data("tester_id",r),i.css("width",u)},
    n.fn.addTag=function(i,u){return u=jQuery.extend({focus:!1,callback:!0},u),this.each(function(){var f=n(this).attr("id"),e=n(this).val().split(r[f]),o,h,s;e[0]==""&&(e=[]),i=jQuery.trim(i),u.unique?(o=n(e).tagExist(i),o==!0&&n("#"+f+"_tag").addClass("not_valid")):o=!1,i!=""&&o!=!0&&(n("<span>").addClass("tag").append(n("<span>").text(i).append("  "),n("<a>",{href:"#",title:"Removing tag",text:"x"}).click(function(){return n("#"+f).removeTag(escape(i))})).insertBefore("#"+f+"_addTag"),e.push(i),n("#"+f+"_tag").val(""),u.focus?n("#"+f+"_tag").focus():n("#"+f+"_tag").blur(),n.fn.tagsInput.updateTagsField(this,e),u.callback&&t[f]&&t[f].onAddTag&&(s=t[f].onAddTag,s.call(this,i)),t[f]&&t[f].onChange&&(h=e.length,s=t[f].onChange,s.call(this,n(this),e[h-1])))}),!1},
    n.fn.removeTag=function(u){return u=unescape(u),this.each(function(){var f=n(this).attr("id"),e=n(this).val().split(r[f]),o;for(n("#"+f+"_tagsinput .tag").remove(),str="",i=0;i<e.length;i++)e[i]!=u&&(str=str+r[f]+e[i]);n.fn.tagsInput.importTags(this,str),t[f]&&t[f].onRemoveTag&&(o=t[f].onRemoveTag,o.call(this,u))}),!1},
    n.fn.tagExist=function(t){return jQuery.inArray(t,n(this))>=0},
    n.fn.importTags=function(t){id=n(this).attr("id"),n("#"+id+"_tagsinput .tag").remove(),n.fn.tagsInput.importTags(this,t)},
    n.fn.tagsInput=function(i){var u=jQuery.extend({interactive:!0,defaultText:"add a tag",minChars:0,width:"300px",height:"100px",autocomplete:{selectFirst:!1},hide:!0,delimiter:",",unique:!0,removeWithBackspace:!0,placeholderColor:"#666666",autosize:!0,comfortZone:20,inputPadding:12},i);
        return this.each(function(){var f,i,e;
            if(u.hide&&n(this).hide(),f=n(this).attr("id"),
                (!f||r[n(this).attr("id")])&&(f=n(this).attr("id","tags"+ +new Date).attr("id")),
            i=jQuery.extend({pid:f,real_input:"#"+f,holder:"#"+f+"_tagsinput",input_wrapper:"#"+f+"_addTag",fake_input:"#"+f+"_tag"},u),
            r[f]=i.delimiter,(u.onAddTag||u.onRemoveTag||u.onChange)&&(t[f]=[],t[f].onAddTag=u.onAddTag,t[f].onRemoveTag=u.onRemoveTag,t[f].onChange=u.onChange),
            e='<div id="'+f+'_tagsinput" class="tagsinput"><div id="'+f+'_addTag">',u.interactive&&(e=e+'<input id="'+f+'_tag" value="" data-default="'+u.defaultText+'" />'),
            e=e+'<\/div><div class="tags_clear"><\/div><\/div>',
            n(e).insertAfter(this),
            n(i.holder).css("width",u.width),n(i.holder).css("height",u.height),
            n(i.real_input).val()!=""&&n.fn.tagsInput.importTags(n(i.real_input),n(i.real_input).val()),
            u.interactive){if(n(i.fake_input).val(n(i.fake_input).attr("data-default")),n(i.fake_input).css("color",u.placeholderColor),n(i.fake_input).resetAutosize(u),n(i.holder).bind("click",i,function(t){n(t.data.fake_input).focus()}),n(i.fake_input).bind("focus",i,function(t){n(t.data.fake_input).val()==n(t.data.fake_input).attr("data-default")&&n(t.data.fake_input).val(""),n(t.data.fake_input).css("color","#000000")}),u.autocomplete_url!=undefined){
                autocomplete_options={source:u.autocomplete_url};
                for(attrname in u.autocomplete)autocomplete_options[attrname]=u.autocomplete[attrname];
                jQuery.Autocompleter!==undefined?(n(i.fake_input).autocomplete(u.autocomplete_url,u.autocomplete),n(i.fake_input).bind("result",i,function(t,i){i&&n("#"+f).addTag(i[0]+"",{focus:!0,unique:u.unique})})):jQuery.ui.autocomplete!==undefined&&(n(i.fake_input).autocomplete(autocomplete_options),
                n(i.fake_input).bind("autocompleteselect",i,function(t,i){return n(t.data.real_input).addTag(i.item.value,{focus:!0,unique:u.unique}),!1}))}
                else n(i.fake_input).bind("blur",i,function(t){var i=n(this).attr("data-default");
                return n(t.data.fake_input).val()!=""&&n(t.data.fake_input).val()!=i?t.data.minChars<=n(t.data.fake_input).val().length&&(!t.data.maxChars||t.data.maxChars>=n(t.data.fake_input).val().length)&&n(t.data.real_input).addTag(n(t.data.fake_input).val(),{focus:!0,unique:u.unique}):(n(t.data.fake_input).val(n(t.data.fake_input).attr("data-default")),n(t.data.fake_input).css("color",u.placeholderColor)),!1});
                n(i.fake_input).bind("keypress",i,function(t){if(t.which==t.data.delimiter.charCodeAt(0)||t.which==13)return t.preventDefault(),t.data.minChars<=n(t.data.fake_input).val().length&&(!t.data.maxChars||t.data.maxChars>=n(t.data.fake_input).val().length)&&n(t.data.real_input).addTag(n(t.data.fake_input).val(),{focus:!0,unique:u.unique}),n(t.data.fake_input).resetAutosize(u),!1;t.data.autosize&&n(t.data.fake_input).doAutosize(u)}),
                i.removeWithBackspace&&n(i.fake_input).bind("keydown",function(t){if(t.keyCode==8&&n(this).val()==""){t.preventDefault();var i=n(this).closest(".tagsinput").find(".tag:last").text(),r=n(this).attr("id").replace(/_tag$/,"");i=i.replace(/[\s]+x$/,""),n("#"+r).removeTag(escape(i)),n(this).trigger("focus")}}),
                n(i.fake_input).blur(),i.unique&&n(i.fake_input).keydown(function(t){(t.keyCode==8||String.fromCharCode(t.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/))&&n(this).removeClass("not_valid")})}}),this},
                n.fn.tagsInput.updateTagsField=function(t,i){var u=n(t).attr("id");n(t).val(i.join(r[u]))},
                n.fn.tagsInput.importTags=function(u,f){var e,o,s;for(n(u).val(""),e=n(u).attr("id"),o=f.split(r[e]),i=0;i<o.length;i++)n(u).addTag(o[i],{focus:!1,callback:!1});t[e]&&t[e].onChange&&(s=t[e].onChange,s.call(u,u,o[i]))}})(jQuery)
