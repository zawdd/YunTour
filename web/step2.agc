<!DOCTYPE html>
<!-- saved from url=(0047)http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU -->
<html class="no-js mti-arialw01roundedbold-n4-active mti-active mti-repaint" lang="en" style=""><!--<![endif]--><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">.pac-container{background-color:#fff;border:1px solid #ccc;overflow:hidden}.pac-container:after{padding-top:3px;text-align:right;display:block;font-size:0}.pac-item{cursor:pointer;padding:0 4px;text-overflow:ellipsis;white-space:nowrap}.pac-item:hover{background-color:#f0f0ff}.pac-selected{background-color:#d5ddf3}.pac-placeholder{color:gray}.pac-container:after {content:url("http://maps.gstatic.com/mapfiles/powered-by-google-on-white.png");}</style>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><%= title %></title>
    <meta name="viewport" content="width=device-width">
    <link href="./stylesheets/main.css" rel="stylesheet">

    <script src="./javascripts/jquery.min.js"></script>
    <script src="./javascripts/libs.js"></script>
    <style type="text/css">input.styled { display: none; } select.styled { position: relative; width: 190px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>

    <script src="./javascripts/jquery.placeholder.min.js"></script>
    <script src="./javascripts/jquery.jscrollpane.min.js"></script>

    <script type="text/javascript">
        var baseUrl = "/";
        var userID = "<%= user %>";
        var lang = "en";

        $(function () {
            $('input[placeholder], textarea[placeholder]').placeholder();
        });
    </script>
    
    <script type="text/javascript">
        var strEditImageStop = "edit";
        var strDeleteImageStop = "remove";
        var strShowAt = "SHOW AT";
        var strMessageConfirmDeleteAudio = "Do you really want to delete this audio?";
        var strMessageConfirmCancelCrop = "Do you really want to discard the current cropping?";
        var strMessageConfirmProgressLost = "All progress will be lost. Do you confirm your request?";
        var strRecorderReadyRecord = "Ready to record";
        var strRecorderRecording = "Recording…";
        var strRecorderStopRecording = "Recording stopped";
        var strRecorderStopPlayer = "Playback stopped";
        var strRecorderReady = "Ready";
        var strRecorderPlaying = "Playing…";
        var strRecorderStartSaving = "Starting to save…";
        var strRecorderNothingSave = "Nothing to save";
        var strRecorderEncoding = "Encoding to MP3…";
        var strRecorderEncodingError = "Encoding error";
        var strRecorderEncodingComplete = "Encoding complete";
        var strRecorderUploading = "Done";
        var strRecorderUploadingComplete = "Upload complete";
        var strRecorderPause = "Pause";
        var strMessageConfirmDeleteImage = "Do you really want to delete this image?";
        var strMessageSucceedDeleteAudio = "The audio has been successfully removed";
        var strMessageFileInQueue = "<strong>\_fileInQueue_\ file(s) in queue.</strong><br />Click Next to upload.";
        var strMessageErrorTooMuchImages = "You have added too many files, please remove \_fileCount_\ image(s).";
        var strMessageUploadingWait = "Loading… Please wait";
        var strMessageErrorImageUrl = "No image available.<br />Please check the url.";
        var strMessageSucceedDeleteImage = "The picture has been successfully removed";
        var strMessageErrorDeleting = "An error has occurred while deleting.";
        var strValidationMaxLength = "{1} character(s) max";
        var strValidationFieldRequired = "compulsory field";
    </script>
	<link href="./stylesheets/step2.css" rel="stylesheet">

    <script src="./javascripts/step2.js"></script>
    <script src="./javascripts/jquery.jplayer.min.js" type="text/javascript" language="javascript" charset="utf-8"></script>

    <script type="text/javascript">

        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-22671944-1']);
        _gaq.push(['_setDomainName', 'yuntour.com']);
        _gaq.push(['_trackPageview']);

    </script>
<style type="text/css" media="screen">#file_upload1Uploader {visibility:hidden}#audio_fileUploader {visibility:hidden}#generic_file_uploadUploader {visibility:hidden}#recorderDIV {visibility:hidden}</style>
<style type="text/css">iframe.dealply-toast { right: -99999px !important; }iframe.dealply-toast.fastestext-revealed { right: 0px !important; }</style>
<script type="text/javascript" src="./javascripts/dojo.xd.js"></script>
<script type="text/javascript" charset="utf-8" src="./javascripts/script.xd.js"></script>
<script type="text/javascript" charset="utf-8" src="./javascripts/window.xd.js"></script>
<script>window["_GOOG_TRANS_EXT_VER"] = "1";</script>

<link rel="stylesheet" type="text/css" href="./stylesheets/uploadify.css">
     <!--<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
     <script type="text/javascript" src="./javascripts/jquery.uploadify-3.1.min.js"></script>-->
     <script type="text/javascript">
		$(function() {
            $('#file_upload1').uploadify({
                'swf' : '/uploadify.swf',
                'uploader' : '/uploadifyhandler',
                // Your options here
                'fileTypeExts' : '*.gif; *.jpg; *.png',
                'buttonText' : '请选择图片',
                'removeCompleted' : false,
                'multi' : true
            });
        });
		$(function() {
            $('#file_upload2').uploadify({
                'swf' : '/uploadify.swf',
                'uploader' : '/uploadifyhandler',
                // Your options here
                'fileTypeExts' : '*.gif; *.jpg; *.png',
                'buttonText' : '请选择图片',
                'removeCompleted' : false,
                'multi' : true
            });
        });
     </script>
	 
	 <link href="./skin/blue.monday/jplayer.blue.monday.css" rel="stylesheet" type="text/css" />
     <!--<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"></script>
     <script type="text/javascript" src="./javascripts/jquery.jplayer.min.js"></script>-->
     <script type="text/javascript">
     //<![CDATA[
     $(document).ready(function(){
 
        $("#jquery_jplayer_1").jPlayer({
            ready: function (event) {
                $(this).jPlayer("setMedia", {
                    mp3:"<%= songmp3 %>"
                });
            },
            swfPath: "js",
            supplied: "mp3",
            preload: 'auto',
            wmode: "window"
        });
    });
     //]]>
    </script>

</head>
<body>
    <!--[if lt IE 8]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
    <header id="home-header">
    <div id="header-content">
        <h1>
        <a href="/">
        	<img src="/images/yunyou.png" style="width: 168px"></a>
        </h1>
		<div id="sub-nav">
			<ul class="subnav-links clearfix">
				<li id="subnav-user">
                    <a href="#" class="dropbtn">
                        <em><span><%= user %></span></em>
                    </a>
                    <div class="subnav-dropdown" id="sn-user-dropdown">
                        <span class="sn-user-email"></span>
                        <ul class="sn-meta">                                    
                            <li><a href="#" target="_blank">主页</a></li>
                            <li><a href="#" target="_blank">设置</a></li>
                        </ul>
                        <ul>                                    
                            <li><a href="#">退出帐号</a></li>
                        </ul>
                    </div>
                </li>				
			</ul>
		</div>            
    </div>
	</header>
<!--！ end header //++++++++++++++++++++++++++++++++++++-->

<script type="text/javascript">

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
    var newImages = new Array();
    var values = new Array();
    var baseUrl = "/";
        var userID = "";
        var tourID = "iVrsCPFXsHU";
        var savedParams = { encryptTourID: "iVrsCPFXsHU" };
    var totalTime = 0;
    var myPlayer;
    var pageType = 'complex';
    var maxStopCount =  20;
    var thumbMaxFileSize = 10485760;
    var pictureMaxFileSize = 10485760;
    var audioMaxFileSize = 20971520;
    var pictureCount =  10;
    var popup;
    var nextStopID = 0;
    var reloadStop = function (params) {
        //$("input, textarea").blur();
        if (params.encryptStopID !== undefined) {
                
            //if(params.encryptStopID > 0)
            showLoading("Loading stop, please wait");
            //unloadWarningSet = ();
            //$(".ui-state-active").removeClass("ui-state-active");
            //$("li[id='" + params.stopID + "']").addClass("ui-state-active");

            //unloadWarningSet = false;
            //$("#dialog-record-audio").dialog("destroy");
            //$(window).unbind('beforeunload');
            $.extend(savedParams, params);
            //$("#Msg").html("Loading");
            //$("#commentaires").show(1);
            //return $.get('/Stop/Edit', savedParams).done(function (rows, status, xhr) {
            values = [];
            originalImages = [];
            letter = 'A';
            return $.get(baseUrl + 'Stop/Edit', savedParams).done(function (rows, status, xhr) {
                    
                $("#stop-container").html(rows);
                if($(rows).find("#StopID").val() == 0){
                    $(".bb-delete, .bb-reorder").addClass("bb-del-disabled");
                }else{
                    $(".bb-delete, .bb-reorder").removeClass("bb-del-disabled");
                }
                    
                hideLoading();
                //alert($("#stop-container").position().top);
                initListImages();
                stopInit();
                //$.validator.unobtrusive.parse("#stop-form");
                //reloadEvent();
                initBlackBar();
                $.validator.unobtrusive.parse("#stop-form");

                window.scrollTo(0, aboveHeight);

                $('#step1-add-image').dialog('close');
                $('#step1-cover-crop').dialog('close');
                $('#step1-thumb-crop').dialog('close');
                $('#step1-cover-credits').dialog('close');
                $("#step2-add-images").dialog('close');
                $("#step2-add-image").dialog('close');
                $("#step2-thumb-crop").dialog('close');
                $("#step2-cover-credits").dialog('close');
                $("#add-images-crop").dialog('close');
                $("#add-images-finish").dialog('close');
                $("#step2-upload-audio").dialog('close');
                $("#upload-audio-credits").dialog('close');
                $("#generic-add-image").dialog('close');
                $("#generic-thumb-crop").dialog('close');
                $("#generic-thumb-credits").dialog('close');
            });

        }
        return false; // $.Deferred().reject();
    }
    var reloadStopList = function (params) {
        if (params.encryptStopID !== undefined) {
                
            return $.get('/Tour/StopList', savedParams).done(function (rows, status, xhr) {
                    if(typeof $("#re-list-container").data("jsp") != "undefined" && typeof $("#re-list-container").data("jsp").destroy == "function")
                        $("#re-list-container").data("jsp").destroy();
                    
                    $("#re-list-container").html(rows);
                    initReorder();
                });
            }
            return $.Deferred().reject();
        }
        function reloadSavedStop(json, b, c) {
            json = json || {};

            // In case of success, we redirect to the provided URL or the same page.
            if (json.success) {
                //location = json.redirect || location.href;
                info("The stop was successfully saved");
                reloadStopList({ encryptStopID: json.stopID });

                if(nextStopID != 0){
                    reloadStop({ encryptStopID: nextStopID });
                    return false;
                }

                strConfirmDeleteStop = json.deleteConfirmMessage;

                $(".input-changed").removeClass("input-changed");
                initTrackChange();
                
                if($("#StopID").val() == "0"){
                    reloadStop({ encryptStopID: json.stopID });
                    $("#sortableCheckboxFromList option[value='new']").val(json.stopID);
                    activeNext();
                }
               
            } else if (json.errors) {

                //alert("Please fill-in all the mandatory fields of the page and/or check the size of the texts in red fields.", "Error");


                ////var errorSummary = getValidationSummaryErrors($form);
                var errorSummary = $('<div class="validation-summary-errors"><span>Please correct the errors and try again.</span><ul></ul></div>');

                var items = $.map(json.errors, function (error) {
                    return '<li>' + error + '</li>';
                }).join('');
                var ul = errorSummary
                    .find('ul')
                    .empty()
                    .append(items);
                alert(ul);

            }
            //infoMessage("Stop Saved");
        $.validator.unobtrusive.parse("#stop-form");
            //reloadEvent();
        hideLoading();
           
    }
    //debut onload
    $(function () {
        setUnloadWarning();

        //reloadStopList({ encryptStopID: $("#EncryptStopID").val() });
        

        popup = $().genericPopup({
            thumbPrefix : "stop-thumb",
            thumbContainer : "#thumb-container",
            thumbHiddenField : "#Thumbnail",
            thumbCreditsHidden : "#ThumbCredits",
            thumbShowCredits : 1,
            messageConfirmProgressLost: "All progress will be lost. Do you confirm your request?",
            changeLabel : 'Change Image',
            cropLabel : 'Crop thumbnail',
            addImageLabel: 'Add image',
            editImageLabel: 'Edit image',
            addCreditsLabel: 'Add credits (optional)',
            editCreditsLabel: 'edit credits',
            browseLabel: 'Browse files',
            messageSucceedUpload: "The picture has been successfully uploaded"
        });

        $.ajaxSetup({ cache: false, timeout: (5 * 60 * 1000) });
            
        initBlackBar();
        initListImages();

        $("#sortableCheckboxFromList").bind("change", function () {
            var stopID = $(this).children().filter(":selected").val();
            if (!checkChanges() && $("#StopID").val() != 0){
                reloadStop({ encryptStopID: stopID });
                $("#sortableCheckboxFromList").selectBox("value",stopID);
            }else{
                saveOrDiscard("Please save or discard your changes to continue.",
                    function(){
                        nextStopID = stopID;
                        $("#stop-form").trigger("submit");
                    }
                    , function(){
                        reloadStop({ encryptStopID: stopID });
                        $("#sortableCheckboxFromList").selectBox("value",stopID);
                    }
                    , function(){
                        $("#sortableCheckboxFromList").selectBox("value",$("#EncryptStopID").val());
                    });
            }
                
        });

        $("#button-discardchange").bind("click", function(e){
            if($("#StopID").val() == "0"){
                var count = $("#sortableCheckboxFromList").children().length;
                if(count == 1){
                    setNoStopState();
                }else{
                    reloadStop({ encryptStopID:  $("#sortableCheckboxFromList").children().first().val() });   
                }
                reloadStopList({ encryptStopID: $("#EncryptStopID").val()});
                return false;
            }

            reloadStop({ encryptStopID: $("#EncryptStopID").val() });



            e.preventDefault();
        });
        $("#button-savechange").bind("click",function(e){
            $("#stop-form").trigger("submit");
            e.preventDefault();
        });

        $("#button-addnewstop").bind("click", function(e){
            if($("#sortableCheckboxFromList option[value='new']").length == 0){
                var count = $("#sortableCheckboxFromList").children().length;
                $("#sortableCheckboxFromList").append($("<option value='new'>"+(count+1)+".</option>"));
                $("#sortableCheckboxFromList").selectBox("refresh");
                $("#sortableCheckboxFromList").selectBox("value","new");
            }
            $(".add-stop-arrow, .nostops").hide();
            //$("#sortableCheckboxFromList").show();
            $("#sortableCheckboxFromList").selectBox();
            reloadStop({ encryptStopID: 0 });   
            return false;
        });
            
            
        $(".bb-delete").bind("click", function(e){
            if($(this).hasClass("bb-del-disabled"))
                return false;
            confirm(strConfirmDeleteStop, "", function () {
                $.ajax({
                    type: "POST",
                    url: baseUrl + "Stop/Delete",
                    data: { "encryptTourID":$("#EncryptTourID").val(), "encryptStopID": $("#EncryptStopID").val() },
                    async: false,
                    success: function () {
                            
                        info("The stop was successfully deleted");
                        var count = $("#sortableCheckboxFromList").children().length;
                        if(count == 1){
                            setNoStopState();
                            unactiveNext();
                        }else{
                            var val = $("#sortableCheckboxFromList").children().filter(function(index){
                                return $(this).val() != $("#EncryptStopID").val();
                            }).first().val();
                            //debugger;
                            reloadStop({ encryptStopID: val });   
                            reloadStopList({ encryptStopID: val});
                        }
                        
                    },
                    error: function () {
                        alert("Unexpected error");
                        }
                });
            });
            e.preventDefault();
        });

        $(".bb-prev").bind("click", function(e){
            if($(this).hasClass("bb-disabled"))
                return false;

            var index = $("#sortableCheckboxFromList")[0].selectedIndex--;
            $("#sortableCheckboxFromList").trigger("change");
            
            return false;
        });
        $(".bb-next").bind("click", function(e){
            if($(this).hasClass("bb-disabled"))
                return false;

            var index = $("#sortableCheckboxFromList")[0].selectedIndex++;
            //$("#sortableCheckboxFromList").selectBox("value",$($("#sortableCheckboxFromList")[0].options[index]).val());
            $("#sortableCheckboxFromList").trigger("change");
            return false;
        });

        $("#gallery-form").validate({
            submitHandler: function(){
                debugger;
            },
            invalidHandler: function(form, validator) {
                var errors = validator.numberOfInvalids();
                debugger;
                if (errors) {

                } else {

                }
            }
        })

        stopInit();

        stopInit();
    });
    // ONLOAD END


    var fnDisableButton = function(){
        showLoading("Saving, please wait");
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
           
</script>
<div id="subheader-steps">
    <div id="page-title">
        <ul>
            <li><a href="/create">创建路线</a></li>
            <li><%= title %></li>
        </ul>
    </div>
    <div id="subheader-steps-inside">
        <ul class="steps-tabs clearfix">
            <li class="step-description">
                <a href="/step1">
                    <span>
                        <em>第一步</em>
                        <strong>线路概况</strong>
                    </span>
                </a>
            </li>
            <li class="step-tourstops step-active">
                <a href="/step2">
                    <span>
                        <em>第二步</em>
                        <strong>第n站点</strong>
                    </span>
                </a>
            </li>
            <li class="step-map stop-dependant">
                <a href="/step3">
                    <span>
                        <em>第三步</em>
                        <strong>地图设置</strong>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</div>
<!--！ end subheader //++++++++++++++++++++++++++++++++++++-->

<div class="lightbox-reorder dn" id="reorder-window">
    <div id="re-list-container" class="scrollable">
        <ul id="sortableListToCheckbox" class="ui-sortable" style="">
        <li id="" class="ui-state-default" style="">
        	<a rel="" data-name="">1.</a></li>
</ul>
    </div>
    <!-- end #re-list-container //-->
    <div id="re-list-ctrl" class="clearfix">
        <a href="" class="medium-button close-light cancel"><span>取消</span></a>
        <a href="" class="medium-button-action close-light"><span>保存新顺序</span></a>
    </div>
</div>
<!-- end .lightbox-reorder //-->

<div id="main" class="step-container">
    <h2 class="steps-title">2. 站点</h2>
    <div class="steps-desc">站点是沿途经过的一部分，是你的路线与众不同的地方，在此你还可以加入图片和音频</div>
    
    <div class="black-bar-container fixed" style="top: -15px;">
        <div class="black-bar">
            <div class="bb-select">
                <div class="nostops" style="display:none">
                    路线还没有站点
                </div>
                <select name="choose-stop" id="sortableCheckboxFromList" style="display: none;" class="selectBox">
                	<option value="" selected="selected">1. 北京</option></select>
                <a class="selectBox selectBox-dropdown" style="width: 69px; display: inline-block;" title="" tabindex="0">
                	<span class="selectBox-label" style="width: 392px;">1. 北京</span><span class="selectBox-arrow"></span></a>
            </div>
            <!-- end .bb-select //-->
            <a href="" class="ir bb-prev bb-disabled">上一个</a> 
            <a href="" class="ir bb-next bb-disabled">下一个</a>
            <a href="" class="bb-delete">删除</a> 
            <a href="" class="bb-reorder bb-del-disabled" id="launch-reorder">录音</a>
            <div class="bb-controls">
                <a href="" class="medium-button-action" id="button-addnewstop" style="">
                	<span><b>添加站点</b></span></a>
                <a href="" class="medium-button" id="button-discardchange" style="display: none;">
                	<span>删除</span></a> 
                <a href="" class="medium-button-action" id="button-savechange" style="display: none;">
                	<span>保存</span></a>
            </div>
            <!-- end .bb-controls //-->
        </div>
        <!-- end .black-bar //-->
    </div>
    <div class="add-stop-arrow" style="display:none">
        添加第一个站点
    </div>
    <div id="stop-container">


<script type="text/javascript">
    var strConfirmDeleteStop = 'Do you really want to delete stop "北京"? <br />This action can not be undone.';
    var baseUrl = "/";
    var userID = "50c1d459-a59c-4a95-87ea-b6092279386b";
    var myPlayer;
    var pageType = 'complex';
    var values = [];
    
    $(document).ready(function () {
        $("#stop-form").submit(function(e){
            var $form = $(this);
            if ($form.valid && !$form.valid()) {
                alert("Please fill-in all the mandatory fields of the page and/or check the size of the texts in red fields.", "Error");
                return false;
            }
            return true;
        });

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

        $("#recorderHolderDIV").empty().append('<div id="recorderDIV"></div>');
        //audio handler
        var flashvars = {};
        flashvars.myFilename = 'recorded5081.mp3';
        flashvars.myServer = 'http://studio.yuntour.com/';
        //flashvars.myServer = 'http://studio.yuntour.com/';
        flashvars.myHandler = 'Audio/Upload/5081?userID=50c1d459-a59c-4a95-87ea-b6092279386b';
        flashvars.myDirectory = "uploads";
        flashvars.timeLimit = "300";
        flashvars.showLink = "N";
        flashvars.hideFlash = "true";
        var parameters = {};
        parameters.wmode = "transparent";
        var attributes = {};
        attributes.id = "recorder";
        attributes.name = "recorder";

        //swfobject.registerObject("recorederDIV", "12");
        swfobject.embedSWF(baseUrl + "Scripts/swf/barebonesRecorder6.swf?ID=" + Math.random() * 100, "recorderDIV", "215", "138", "11", baseUrl + "Scripts/swf/expressInstall.swf", flashvars, parameters, attributes);



        $("#credits-show").click(function () {
            if ($("#st-credits").is(":visible")) {
                $("#TextCredits").val('');
                $("#TextCredits").trigger("keyup");
            }

            $("#st-credits").slideToggle();

            $(this).text($(this).text() == 'Add credits' ? 'Remove credits' : 'Add credits');
            $(this).toggleClass("remove-credits");

            return false;
        });
        $(".am-ac").html($("#AudioCredits").val() == "" ? "add credits" : "edit credits");
        $("#AudioCredits").change(function () {
            $(".am-ac").html($("#AudioCredits").val() == "" ? "add credits" : "edit credits");
        });

    });


    var loadAudio = function () {
        debugger;

        if (values.length > 0) {
            $(".sync-control").show();
        } else {
            $(".sync-control").hide();
        }
        if (totalTime == 0) {
            $("#SyncAudio").attr("disabled", "disabled");
            $("#SyncAudio").attr("title", "Audio file converting…");
        }
        $("#audio-panel").show(); $("#no-audio").hide();

        myPlayer = $('#player');
        myPlayer.jPlayer("destroy");
        myPlayer.jPlayer({
            swfPath: baseUrl + 'Scripts/swf',
            solution: 'html, flash',
            supplied: 'mp3',
            preload: 'metadata',
            volume: 0.8,
            muted: false,
            wmode:"window",
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3: '/Audio/DownloadStop/5081'
                });
            },
            cssSelectorAncestor: '#media-player',
            cssSelector: {
                play: '.play',
                pause: '.pause',
                //seekBar: '.seek-bar',
                playBar: '.seek-elapsed',
                duration: '.hidden-duration',
                currentTime: '.jp-current-time',
                volumeBar: '.jp-volume-bar',
                volumeBarValue: '.jp-volume-bar-value'

            },
            durationchange: function(event){
            },
            timeupdate:function(event){
                var duration = parseInt(event.jPlayer.status.duration);
                if (duration != 0 && duration != totalTime) {
                    totalTime = duration;
                    $("#SyncAudio").removeAttr("disabled");
                    $("#SyncAudio").removeAttr("title");
                    if ($("#SyncAudio").is(":checked")) {
                        updateMarkerPosition();
                        for (var i in values) {
                            if (values[i].time > totalTime) {
                                debugger;
                                values[i].time = parseTime(totalTime);
                            }
                        }
                    }
                    $(".jp-duration").html($.jPlayer.convertTime(duration));
                }

                if (totalTime == 0) {
                    $("#SyncAudio").attr("disabled", "disabled");
                    $("#SyncAudio").attr("title", "Audio file converting…");
                }
            },
            errorAlerts: false,
            warningAlerts: false
        });

        myPlayer.bind($.jPlayer.event.durationchange, function (event) { // Add a listener to report the time play began
            if (totalTime == 0) {
                $("#SyncAudio").attr("disabled", "disabled");
                $("#SyncAudio").attr("title", "Audio file converting…");
            }
            //if (event.jPlayer.status.duration != 0) {
            //    totalTime = parseInt(event.jPlayer.status.duration);
            //    $("#SyncAudio").removeAttr("disabled");
            //    $("#SyncAudio").removeAttr("title");
            //    if ($("#SyncAudio").is(":checked")) {
            //        updateMarkerPosition();
            //        for (var i in values) {
            //            if (values[i].time > totalTime) {
            //                debugger;
            //                values[i].time = parseTime(totalTime);
            //            }
            //        }
            //    }
            //    debugger;
            //    $(".jp-duration").html($.jPlayer.convertTime(event.jPlayer.status.duration));
            //}
        });
    }

    jQuery(function ($) {
        setTimeout(function () { 
            $(".jp-duration").html($.jPlayer.convertTime(12));    
            toggleCredits(); 
        
        }, 100);
    });
    var toggleCredits = function () {
        if ($("#TextCredits").val()) {
            $("#st-credits").show();
            $("#credits-show").addClass("remove-credits");
        } else {
            $("#st-credits").hide();
            $("#credits-show").removeClass("remove-credits");
        }
        $("#credits-show").html($("#st-credits").is(":visible") ? 'Remove credits' : 'Add credits');
    }
</script>
<form action="" data-ajax="true" data-ajax-begin="fnDisableButton" data-ajax-method="Post" data-ajax-success="reloadSavedStop" data-successmessage="ok" id="stop-form" method="post" novalidate="novalidate">
	<input data-val="true" data-val-number="The field StopID must be a number." data-val-required="The StopID field is required." id="StopID" name="StopID" type="hidden" value="5081">
	<input id="EncryptTourID" name="EncryptTourID" type="hidden" value="">
	<input id="EncryptStopID" name="EncryptStopID" type="hidden" value="">
	<input class="track-change" data-val="true" data-val-length="150 character(s) max" data-val-length-max="150" id="ThumbCredits" name="ThumbCredits" type="hidden" value="">
	<input id="JsonImages" name="JsonImages" type="hidden" value="">    
	<div class="step2-container" style="margin-top: 84px;">
        <div class="step2-container-inside">
            <div class="step2-container-inside-2">
                <div class="step2-item clearfix">
                    <div class="s-title-cont clearfix">
                        <div class="ucc-image">
                            <h4 class="us-title">
                                <em class="star">*</em>
                                站点封面
                            </h4>
                            <div class="uim-cont has-suggestion-2" id="thumb-container" 
                            	data-suggestion="This image represents your stop. It appears on your tour showcase page and identifies the stop in the list of stops. Select it carefully." style="background-repeat:no-repeat; background-image:url();">
                                <input name="file_upload1" id="file_upload1" value="">
                            </div>
                            <div class="error-msg">
                                <span class="field-validation-valid" data-valmsg-for="Thumbnail" data-valmsg-replace="true"></span>
                            </div>
                            <input id="Thumbnail" name="stopThumbnail" class="track-change" data-val="true" data-val-errorholder=".uim-cont" data-val-required="compulsory field" type="hidden" value="">
                        </div>

                        <div class="st-cont">
                            <div class="div-rel">
                                <h4 class="us-title">
                                    <em class="star">*</em>
                                    站点名
                                </h4>
                                <input id="st-title" name="stopName" class="txtfield forcounter has-suggestion-2 track-change" type="text" value=""
                                	data-suggestion="Select an appropriate name, relevant to the stop." data-val="true" data-val-length="50 character(s) max" data-val-length-max="50" data-val-required="compulsory field">
                                <p class="charleft">
                                    <span>2</span>/50
                                </p>
                                <div class="error-msg error-msg-title">
                                    <span class="field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true"></span>
                                </div>
                            </div>

                            <div class="div-rel">
                                <h4 class="us-title">
                                    <em class="star">*</em>
                                    短描述
                                    </h4>
                                <input id="ShortDescription" name="ShortDes" class="txtfield forcounter has-suggestion-2 track-change" data-suggestion="This teaser should make visitors want to know more about your tour." data-val="true" data-val-length="85 character(s) max" data-val-length-max="85" data-val-required="compulsory field" type="text" value="">
                                <p class="charleft">
                                    <span>3</span>/85
                                </p>
                                <div class="error-msg">
                                    <span class="field-validation-valid" data-valmsg-for="ShortDescription" data-valmsg-replace="true"></span>
                                </div>
                            </div>
                        </div>
                        <!-- .st-cont //-->
                    </div>
                    <div class="field-desc"></div>
                </div>
                <!-- end .step2-item //-->
                
                <div class="step2-item">
                    <h3>
                        更多图片
                    </h3>
                    <div class="images-container imgs1-5">
                        <div class="images-inside clearfix">
                            <ul class="images-list"><li id="13284">
                                        <div class="il-item">
                                            <span style="background-image:url(); height: 105px; width: 140px;" class="rounded"><img alt="" src=""></span>
                                            <span class="letter">A</span>
                                            <span class="move ir">move</span>
                                            <div class="li-time">
                                                <span class="showat">播放</span> 
                                                <span class="time-display"></span>
                                                <input type="text" class="time-display-input" value="">
                                            </div>
                                        </div>
                                        <p class="il-caption"></p>
                                        <p class="il-controls">
                                            <a href="" class="il-remove"><span>删除</span></a> 
                                            <a href="" class="il-edit"><span>编辑</span></a>
                                        </p>
                                    </li></ul>
                        </div>
                    </div>
                    <div class="clearfix " id="add-image-container">
                        <a href="#" class="medium-button addimages-button" id="adImage">
                        	<input name="file_upload2" id="file_upload2" value="">
                            
                            <script type="text/javascript">
                                totalTime = 12; // total time of audio file;
                                $().ready(function () {
                                    loadAudio();
                                });

                            </script>

                        <!-- end .sync-control //-->
                    </div>
                </div>
                <!-- end .step2-item //-->
               <!-- <div class="step2-item">
                    <h3>
                        音频
                    </h3>

                    <div id="audio-panel" style="display:block">
                        <div id="player" style="width: 0px; height: 0px;"><img id="jp_poster_0" style="width: 0px; height: 0px; display: none;"><audio id="jp_audio_0" preload="metadata" src="/Audio/DownloadStop/5081"></audio></div>
                        <div id="jquery_jplayer_1" class="jp-jplayer"></div>

		<div id="jp_container_1" class="jp-audio">
			<div class="jp-type-single">
				<div class="jp-gui jp-interface">
					<ul class="jp-controls">
						<li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>
						<li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li>
						<li><a href="javascript:;" class="jp-stop" tabindex="1">stop</a></li>
						<li><a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a></li>
						<li><a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a></li>
						<li><a href="javascript:;" class="jp-volume-max" tabindex="1" title="max volume">max volume</a></li>
					</ul>
					<div class="jp-progress">
						<div class="jp-seek-bar">
							<div class="jp-play-bar"></div>
						</div>
					</div>
					<div class="jp-volume-bar">
						<div class="jp-volume-bar-value"></div>
					</div>
					<div class="jp-time-holder">
						<div class="jp-current-time"></div>
						<div class="jp-duration"></div>

						<ul class="jp-toggles">
							<li><a href="javascript:;" class="jp-repeat" tabindex="1" title="repeat">repeat</a></li>
							<li><a href="javascript:;" class="jp-repeat-off" tabindex="1" title="repeat off">repeat off</a></li>
						</ul>
					</div>
				</div>
				<div class="jp-title">
					<ul>
						<li><%= songname %></li>
					</ul>
				</div>
				<div class="jp-no-solution">
					<span>Update Required</span>
					To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
				</div>
			</div>
		</div>
                        <!-- end .media-player //-->
                        <div id="audio-meta" class="clearfix">
                            <div class="am-when">
                                <!-- Audio recorded online (Saturday, April 07, 2011 at 12:45h) //-->
                            </div>
                            <div class="am-controls">
                                <a href="" class="am-ra" id="button-removeaudio">删除音频</a>
                                <a href="" class="am-dl" target="_blank">下载音频</a>
                                <input class="track-change" id="AudioCredits" name="AudioCredits" type="hidden" value="">
                            </div>
                        </div>
                        <!-- end #audio-meta //-->
                    </div>
                    <div class="empty-cont clearfix" id="no-audio" style="display: block;">
                        <a href="" class="medium-button addaudio-button"><span><b>上传音频</b></span></a>
                        <span class="or">or</span> 
                        <a href="" class="medium-button record-button" id="launch-recorder"><span><b>
                                录音</b></span></a>
                    </div>
                </div>-->
                <!-- end .step2-item //-->
                <div class="step2-item-last">
                    <span>1</span> / 1
                </div>
                <!-- end .step2-item //-->
            </div>
            <!-- end .step2-container-inside-2 //-->
        </div>
        <!-- end .step2-container-inside //-->
    </div>
    <!-- end .step2-container //-->
</form>    </div>
</div>
<!-- end #main //-->
<div id="preview-popup" class="dn">
</div>
<!-- end #preview-popup //-->
<script type="text/javascript">
    var triggerNav = function (frame) {
        var item = $("a[href='" + frame.contentWindow.location.pathname + frame.contentWindow.location.search + "']");
        $('.preview-links ul li').removeClass('pl-active');
        $(item).parent().addClass('pl-active');

        $('.preview-links').data('jsp').scrollToElement($(".pl-active"));
    }
</script>
<script type="text/javascript">
    $(function () {
        $('a.preview-button').click(function (e) {
            // $('body').css("overflow", "hidden");
            $.get('/Preview/Popup', { id: $("#EncryptTourID").val() }).done(function (rows, status, xhr) {
		        $("#preview-popup").empty().append(rows);
		        $("#main").hide();
		        $('#preview-popup').lightbox_me({
		            centered: true,
		            closeSelector: ".close-window",
		            overlayCSS: { background: '#f3ece1', opacity: .95 },
		            zIndex: 1036,
		            closeClick: false,
		            showOverlay: true,
		            onClose: function () {
		                //$('body').css("ov erflow", "auto");
		                $("#main").show();
		                frame = $("#pr-iframe")[0];
		                if (typeof frame.contentWindow.stopAudio != "undefined") {
		                    frame.contentWindow.stopAudio();
		                }
		            },
		            onLoad: function () {

		                // $('#preview-popup').trigger('reposition');
		                $('.preview-links').jScrollPane();
		            }
		        });
		    });

		    e.preventDefault();
		});


		$('.preview-links ul li a').live('click', function (e) {
		    $('.preview-links ul li').removeClass('pl-active');
		    $(this).parent().addClass('pl-active');
		});



		if ($("#EncryptTourID").val() == "") {
		    $(".f-del, .preview-button").hide();
		}
		$(".f-del").bind("click", function () {
		    confirm("Do you really want to delete this tour?", "Confirmation", function () {
                tours = [];
                tours.push($("#EncryptTourID").val());
                //showLoading(strToursDeleteLoading);
                $.ajax({
                    type: "POST",
                    url: baseUrl + "Tour/Delete",
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
</script>
<footer>
    <div id="footer-inside">
        <a href="/create" class="f-exit" >退出</a>
        <a href="/" class="f-del">删除</a>

        <p class="back-next">
            <a href="javascript:void(0);" class="large-button" id="footerbtn-discardchange" style="display: none"><span>丢弃</span></a> 
            <a href="javascript:void(0);" class="large-button-action" id="footerbtn-savechange" style="display: none"><span>保存</span></a>

            <a href="/step1" class="large-button large-button-back"><span>退后</span></a>
            <a href="/step3" class="large-button-action large-button-action-next"><span>3. 地图</span></a>
        </p>
    </div>
</footer>

<!-- end .modal-window //-->
<!-- end upload gallerie window //-->
<!-- upload audio window //-->
<!-- end .modal-window //-->
<!-- end .modal-window //-->
<!-- end upload audio window //-->
<!-- record audio window //-->
<div class="lightbox-window lightbox-recorder dn" id="recorder-window">
    <div class="lightbox-window-inner">
        <h3 class="lightbox-title">
            录音 <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="close-lightbox ir">close</a>
        </h3>
        <div class="recorder-container">
            <span class="status"><strong>状态:</strong> <span id="recorderMessage"></span></span>
            <div id="recorder-skin">
                <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" id="rec-record" class="ir">
                    record</a> <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" id="rec-pause" class="ir btn-inactive">
                        pause</a> <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" id="rec-stop" class="ir btn-inactive">
                            stop</a> <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" id="rec-play" class="ir btn-inactive">
                                play</a>
                <div id="rec-time">
                    <span id="recorderTime"></span>
                </div>
            </div>
            <!-- end #recorder-skin //-->
            <div id="rec-vol-container" class="clearfix">
                <div id="rec-vol-label">
                    Recording volume:&nbsp;<span id="recorderMeter">&nbsp;</span>
                </div>
                <div id="rec-vol-progress">
                    <div id="rec-vol-progress-inside">
                        <div id="recorderMeterBar">
                        </div>
                    </div>
                </div>
            </div>
            <div id="rec-help">
                <ul>
                    <li>1. Allow Flash Player</li>

<li>2. Test microphone volume <span>Speak close to the microphone.</span></li>

<li>3. Record sound <span>Click Pause to pause and resume the recording if needed. Press Stop when finished.</span></li>

<li>4. Play recorded sound. <span>If you are not happy with your recording, simply click Delete, then Record again.</span></li>

<li>5. When recorded audio is ok, click Save to upload it.</li>
                </ul>
            </div>
            <div class="clearfix" id="rec-ctrl">
                <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button btn-inactive" id="rec-cancel">
                    <span>Delete</span></a> <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button btn-inactive" id="rec-upload">
                        <span>Save</span></a>
            </div>
            <div id="recorderHolderDIV"><object type="application/x-shockwave-flash" id="recorder" name="recorder" data="http://studio.yuntour.com/Scripts/swf/barebonesRecorder6.swf?ID=79.68893891666085" width="215" height="138"><param name="wmode" value="transparent"><param name="flashvars" value="myFilename=recorded5081.mp3&amp;myServer=http://studio.yuntour.com/&amp;myHandler=Audio/Upload/5081?userID=50c1d459-a59c-4a95-87ea-b6092279386b&amp;myDirectory=uploads&amp;timeLimit=300&amp;showLink=N&amp;hideFlash=true"></object></div>
        </div>
        <!-- end recorder-container //-->
    </div>
    <!-- end lightbox-window-inner //-->
</div>
<!-- end lightbox-window //-->
<!-- end record audio window //-->


    <script type="text/javascript">
    var yuntour = yuntour || {};
    yuntour.alert_popup = null;
    yuntour.last_focus = null;
    yuntour.alert_queue = [];

    function quota_alert(message) {
        var popup = $("#quota-alert-js-window");
        popup.find("#text").html(message);
        popup.lightbox_me({
            centered: true,
            closeSelector: ".close-window",
            overlayCSS: {
                background: 'black',
                opacity: .2,
                zIndex: 9998
            },
            zIndex: 9999,
            onClose: function () {
            }
        });

    }

    function alert(message, title) {
        if (yuntour.alert_popup != null) {
            yuntour.alert_queue.push({ type: "alert", message: message, title: title });
            return;
        }

        yuntour.last_focus = $("input, textarea").filter(":focus");
        yuntour.last_focus.trigger("blur");

        yuntour.show_alert_popup(message, title);

        $(document).bind("keyup.popup", function (e) {
            if (e.keyCode == 13) {
                if (yuntour.alert_popup) {
                    yuntour.alert_popup.trigger("close");
                    if (yuntour.last_focus) {
                        yuntour.last_focus.trigger("focus");
                        yuntour.last_focus = null;
                    }
                }
            }
        });
    }

    yuntour.show_next = function () {
        yuntour.alert_queue.reverse();
        var next = yuntour.alert_queue.pop();
        yuntour.alert_queue.reverse();
        switch (next.type) {
            case "alert":
            default:
                yuntour.show_alert_popup(next.message, next.title);
                break;
        }
    };

    yuntour.show_alert_popup = function (message, title) {
        var popup = $("#alert-js-window");

        popup.find("#title").html(title);
        popup.find("#text").html(message);
        yuntour.alert_popup = popup.lightbox_me({
            centered: true,
            closeSelector: ".close-window",
            overlayCSS: {
                background: 'black',
                opacity: .2,
                zIndex: 9998
            },
            zIndex: 9999,
            onClose: function () {
                if (yuntour.alert_queue.length == 0) {
                    $(document).unbind("keyup.popup");
                    yuntour.alert_popup = null;
                    return;
                }

                yuntour.show_next();

            }
        });

    }

    yuntour.show_confirm_popup = function (message, title, okHandler, cancelHandler) {

    }

    var loadingBox;
    var slc;
    var closeOnLoad = false;
    function hideLoading() {
        slc = true;
        $(".loading-msg-container").fadeOut();
    }
    function showLoading(message) {
        $(".loading-msg-container").fadeIn(function () {
            if (slc)
                setTimeout(function () {
                    $(".loading-msg-container").fadeOut();
                }, 100);
        });
        return false;

        //message = message ? message : 'Loading, please wait';
        //var popup = $("#loading-js-window");
        //slc = false;
        ////popup.find("#title").text(title);
        ////popup.find("#text").html(message);
        //loadingBox = popup.lightbox_me({
        //    centered: true,
        //    closeSelector: ".close-window",
        //    overlaySpeed: 0,
        //    overlayCSS: {
        //        background: 'black',
        //        opacity: .2
        //    },
        //    onLoad: function () {
        //        if (slc)
        //            setTimeout(function () {
        //                $("#loading-js-window").trigger("close");
        //            }, 100);
        //    },
        //    closeClick: false,
        //    zIndex: 9999
        //});
    }

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
    function info(message, time) {
        time = time ? time : 4000;
        var popup = $("#info-js-container");
        popup.find("#message").html(message);

        popup.fadeIn();
        setTimeout(function () {
            popup.fadeOut('fast');
        }, time);
        return false;
    }

    var saveDiscaedPopup;
    var action = "";
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

    function setLoadingHeight() {

        $loadingc = $('.loading-msg-container');
        if ($(window).height() < $(document).height()) {
            $loadingc.css({ height: $(document).height() + 'px' });
        } else {
            $loadingc.css({ height: '100%' });
            //if (ie6) {
            //    $('html,body').css('height', '100%');
            //} // ie6 hack for height: 100%; TODO: handle this in IE7
        }
    }
    $(function () {
        $(window).resize(setLoadingHeight);
        //$(window).scroll(setLoadingHeight);

    });

</script>
<div class="loading-msg-container dn" style="height: 1929px;">

    <div class="loading-msg">
        <img src="./images/working.gif" alt="">
        Working…

    </div>

</div>

<div class="lightbox-window lightbox-changes dn" id="confirm-js-window">
    <div class="lightbox-window-inner">
        <h3 id="title" class="lightbox-title"></h3>
        <p class="lb-stop lb-center" id="text">
            Do you want to delete stop 03. Theatre of Pompey/Da Pancrazio. (this action cannot
            be undone)
        </p>
        <div class="del-ctrl clearfix">
            <div>
                <div>
                    <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button close-window" id="button-ok"><span>OK</span></a>
                    <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button-action close-window" id="button-cancel"><span>Cancel</span></a>
                </div>
            </div>
        </div>
    </div>
    <!-- end lightbox-window-inner //-->
</div>
<!-- end lightbox-window //-->
<div class="lightbox-window lightbox-changes dn" id="alert-js-window">
    <div class="lightbox-window-inner">
        <h3 id="title" class="lightbox-title"></h3>
        <p class="lb-stop lb-center" id="text">
        </p>
        <div class="del-ctrl clearfix">
            <div>
                <div>
                    <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button medium-button-action close-window" id="button-ok"><span>
                        OK</span></a>
                </div>
            </div>
        </div>
    </div>
    <!-- end lightbox-window-inner //-->
</div>


<div class="lightbox-window lightbox-changes dn" id="quota-alert-js-window">
    <div class="lightbox-window-inner">
        <h3 id="title" class="lightbox-title">Plan Limit Reached</h3>
        <p class="lb-stop lb-center">
            Sorry, this tour can't be published with your current plan because:
            <br>
            <br>
            <span class="lb-stop lb-center" id="text"></span>
            <br>
            We advise you to <a href="http://www.yuntour.com/pricing">upgrade your account.</a>
        </p>


        <div class="del-ctrl clearfix">
            <div>
                <div>
                    <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button medium-button-action close-window" id="button-ok"><span>
                        OK</span></a>
                </div>
            </div>
        </div>
    </div>
    <!-- end lightbox-window-inner //-->
</div>

<!-- end lightbox-window //-->
<div class="lightbox-window lightbox-loading dn" id="loading-js-window">
    <div class="lightbox-window-inner">
        <p class="lb-center">
            <img src="./images/preload.gif"><br>
            <span id="text">Working…</span>
        </p>
    </div>
    <!-- end lightbox-window-inner //-->
</div>
<!-- end lightbox-window //-->

<!-- end lightbox-window //-->
<div class="alert-box-container" id="info-js-container">
    <div class="alert-box" id="message">
        If notification message is very long i think its ok for it to go in two or more
        rows like this.
    </div>
</div>
<div class="lightbox-window lightbox-changes dn" id="changes-window">
    <div class="lightbox-window-inner">
        <h3 class="lightbox-title lightbox-title-left">
            You have unsaved changes <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="close-lightbox close-window ir">close</a>
        </h3>
        <p class="lb-stop" id="text">
            Please save or discard your changes to continue.
        </p>
        <div class="changes-ctrl clearfix">
            <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button" id="button-discard"><span>Discard</span></a>
            <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button-action" id="button-save"><span>Save</span></a>
        </div>
    </div>
    <!-- end lightbox-window-inner //-->
</div>
<!-- end lightbox-window //-->

<div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable" style="display: none; outline: 0px; z-index: 1000;" tabindex="-1" role="dialog" aria-labelledby="ui-id-1"><div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span id="ui-id-1" class="ui-dialog-title">&nbsp;</span><a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="ui-dialog-titlebar-close ui-corner-all" role="button"><span class="ui-icon ui-icon-closethick">close</span></a></div><div class="modal-window step2-upload-audio ui-dialog-content ui-widget-content" id="step2-upload-audio" style="">
    <h3 class="modal-title">
        上传音频</h3>
    <p class="upload-text">You can upload any type of audio file that does not exceed 30 Mb.<br>It will be automatically converted to optimize user experience on iPhone.</p>
    <div class="clearfix">
        <div class="add-content add-content-audio">
            <div class="upload-container">
                <h5 class="small-title">
                    从电脑</h5>
                <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button-action browse-action"><span>Browse files</span></a>
                <div class="browse-move">
                    <input id="audio_file" name="file_upload" type="file" style="display: none;"><object type="application/x-shockwave-flash" data="http://studio.yuntour.com/Scripts/swf/uploadify.swf" width="126" height="42" id="audio_fileUploader" style="visibility: visible;"><param name="quality" value="high"><param name="wmode" value="transparent"><param name="allowScriptAccess" value="sameDomain"><param name="flashvars" value="uploadifyID=audio_file&amp;pagepath=/Tour/Stop/&amp;buttonText=Browse%20files&amp;script=/Audio/Upload&amp;folder=uploads&amp;scriptData=id%3D5081%26userID%3D50c1d459-a59c-4a95-87ea-b6092279386b&amp;width=126&amp;height=42&amp;wmode=transparent&amp;method=POST&amp;queueSizeLimit=999&amp;simUploadLimit=1&amp;hideButton=true&amp;fileDesc=Audio Files&amp;fileExt=*.mp3;*.mpeg3;*.m4a;*.wav&amp;auto=true&amp;sizeLimit=20971520&amp;fileDataName=Filedata"></object><div id="audio_fileQueue" class="uploadifyQueue"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-ctrl">
        <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button medium-button-action-cancel"><span>Cancel</span></a>
        <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button medium-button-next medium-next-disabled"><span>
            Next</span></a>
    </div>
</div></div>

<div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable" style="outline: 0px; z-index: 1005; height: auto; width: 750px; top: 1022px; left: 301px; display: none;" tabindex="-1" role="dialog" aria-labelledby="ui-id-3">
<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">
	<span id="ui-id-3" class="ui-dialog-title">&nbsp;</span>
	<a href="" class="ui-dialog-titlebar-close ui-corner-all" role="button">
	<span class="ui-icon ui-icon-closethick">close</span></a></div>
<div class="modal-window step2-add-images ui-dialog-content ui-widget-content" id="step2-add-images" style="">    
	<h3 class="modal-title">
        添加图片</h3>    
    <div class="clearfix">
        <div class="add-content">
            <h5 class="small-title">
                从URL上</h5>
            <input type="text" name="fromurl" value="" id="fromurl" class="txtfield urlfield">
            <p> 从网络地址URL获取图片，正确并能够在右边显示
            </p>
            <div class="upload-container">
                <h5 class="small-title">
                    从电脑上
                </h5>
                <a href="http://studio.yuntour.com/Tour/Stop/iVrsCPFXsHU#" class="medium-button-action browse-action"><span>Browse files</span></a>
                <div class="browse-move">
                    <input id="generic_file_upload" name="generic_file_upload" type="file" style="display: none;">
                    <object type="application/x-shockwave-flash" data="http://studio.yuntour.com/Scripts/swf/uploadify.swf" width="126" height="42" id="generic_file_uploadUploader" style="visibility: visible;"><param name="quality" value="high"><param name="wmode" value="transparent"><param name="allowScriptAccess" value="sameDomain"><param name="flashvars" value="uploadifyID=generic_file_upload&amp;pagepath=/Tour/Stop/&amp;buttonText=Browse%20files&amp;script=/Image/Upload&amp;folder=uploads&amp;scriptData=userID%3D50c1d459-a59c-4a95-87ea-b6092279386b%26prefix%3Dstop-thumb&amp;width=126&amp;height=42&amp;wmode=transparent&amp;method=POST&amp;queueSizeLimit=999&amp;simUploadLimit=1&amp;hideButton=true&amp;fileDesc=Image Files&amp;fileExt=*.jpeg;*.gif;*.png;*.jpg;*.bmp&amp;auto=true&amp;fileDataName=Filedata"></object><div id="generic_file_uploadQueue" class="uploadifyQueue"></div>
                </div>
            </div>
        </div>
        <div class="preview-content">
            <h5 class="small-title">
                观看</h5>
            <div class="drop-zone" style="overflow: hidden;">
                <img id="upload-photo-placeholder" src="" class="generic-image-preview">
            </div>
            <span class="filename"></span>
        </div>
        <!-- end .preview-content //-->        
    </div>
    <div class="modal-ctrl">
        <a href="" class="medium-button medium-button-action-cancel"><span>取消</span></a>
        <a href="" class="medium-button medium-button-next medium-next-disabled"><span>下一个</span></a>
    </div></div>
</div>
<div class="pac-container" style="position: absolute; z-index: 1000; display: none; width: 662px; left: 70px; top: 779px;">
	<div class="pac-item"><b>中国</b><b>北京市</b></div><div class="pac-item">中国北京<b>北京市</b>东城区<b>中国</b>美术馆</div>
	<div class="pac-item">中国<b>北京市</b>东城区东四南大街<b>中国</b>书店</div>
	<div class="pac-item">中国<b>北京市</b>东城区东长安街<b>中国</b>邮政</div>
	<div class="pac-item">中国<b>北京市</b>东城区南河沿大街<b>中国</b>烟草</div>
	</div>
</body>
</html>