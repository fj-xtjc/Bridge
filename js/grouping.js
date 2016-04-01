/*
*date:2016-2-22
*/
//=====start downscroll=====
var myScroll,
	pullDownEl, pullDownOffset,
	generatedCount = 0;

//下拉框事件
function pullDownAction() {
	setTimeout(function() {   // <-- Simulate network congestion, remove setTimeout from production!
		$("#grouping_ul_groups").html("");
		for(var i = 0;i < $.getUrlParam('teamnum');i++){
			listteammate($.getUrlParam('matchid'),i+1);
		}

		myScroll.refresh();     // Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 1000);   // <-- Simulate network congestion, remove setTimeout from production!
}
//加载下拉框
function loadScroll(){
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	myScroll = new iScroll('grouping_scroller_groups', {
		useTransition: true,
		topOffset: pullDownOffset,
		onRefresh: function() {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
			} 
		},
		onScrollMove: function () {
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				this.minScrollY = -pullDownOffset;
			} 
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';          
				pullDownAction(); // Execute custom function (ajax call?)
			}
		}
	});
	setTimeout(function () { document.getElementById('grouping_scroller_groups').style.left = '0'; }, 800);
}
//=====end downscroll=====

function CheckBoxs(){
	$('input[add_check]').iCheck({
	    checkboxClass: 'CheckBox',
	    radioClass: 'RadioBox',
	    increaseArea: '0%' // optional
	  });
	$('input[add_check]').on('ifChecked',function(event){
		$(this).attr('ifChecked','true');
	});
	$('input[add_check]').on('ifUnchecked',function(event){
		$(this).attr('ifChecked','false');
	});
}

//列出队伍
function listteammate(matchid,teamid){
   	var html1 = $("<li>").addClass("list-group-item row").attr("data-teamid",teamid);
   	var html2 = $("<div>").addClass("col-md-12 col-sm-12 col-xs-12").appendTo(html1);
    $("<strong>").addClass("teamName").html(teamid + "队：").appendTo(html2);
    $.ajax({
        type: "get",
        async: false,
        data: {
            "matchid":matchid,
            "teamid":teamid
        },
        url: "http://10.206.106.27/BridgeCount/NewGame/listteammate.do",
        dataType: "jsonp",
        jsonp: "callbackparam",
        jsonpCallback: "movieking_"+teamid,
        success: function (result) {
            if(result.result!="null") {
                for (var i = 0; i < result.result.length; i++) {
                	if (i == result.result.length-1) {
                		$("<strong>").addClass("playerNameEnd").attr("data-mateid",result.result[i].mate_id).html(result.result[i].playername).attr("data-toggle","modal").attr("data-target","#modal_miniMenu").appendTo(html2);
                	} else{
                		$("<strong>").addClass("playerName").attr("data-mateid",result.result[i].mate_id).html(result.result[i].playername).attr("data-toggle","modal").attr("data-target","#modal_miniMenu").appendTo(html2);
                	};
                }
            }
            var html3 = $("<div>").addClass("addPlayer").attr("data-toggle","modal").attr("data-target","#modal_playerList").appendTo(html2);
    		$("<span>").addClass("glyphicon glyphicon-plus").attr("plus"+teamid,"").attr("data-teamid",teamid).appendTo(html3);
    		$("#grouping_ul_groups").append(html1);

    		//绑定添加事件
			$("span[plus"+teamid+"]").click(function(){
				var temp_teamid=$(this).attr("data-teamid");
				alert(teamid);
				$("button[name='addmate_btn']").attr("data-teamid",temp_teamid);
		        $("#grouping_ul_addPlayers").html("");
		        $.ajax({
		            type: "get",
		            async: false,
		            url: "http://10.206.106.27/BridgeCount/NewGame/listmate.do",
		            dataType: "jsonp",
		            jsonp: "callbackparam",
		            jsonpCallback: "movieking",
		            success: function (result) {
		            	var html1 = "";
		                for(var i=0;i<result.result.length;i++){
		                	html1 = $("<li>").addClass("list-group-item");
		                	$("<input type='checkbox' add_check>").attr("data-mateid",result.result[i].playerid).appendTo(html1);
		                	html1.append(result.result[i].playername);
		                	$("#grouping_ul_addPlayers").append(html1);
		                	CheckBoxs();
		                }
		            },
		            error: function () {
		                alert("人员列表加载失败");
		            }
		        });
				$("#grouping_ul_addPlayers").html("");
			});
        },
        error: function () {
            alert("获取队伍失败："+teamid);
        }
    });   
}

$(document).ready(function(){
	//=====加载=====
	loadScroll();

	$("#grouping_ul_groups").html("");
	for(var i = 0;i < $.getUrlParam('teamnum');i++){
		listteammate($.getUrlParam('matchid'),i+1);
	}

	//=====事件=====
	$("button[name='addmate_btn']").click(function(){
		var flag_mateid,flag_teamid = $(this).attr("data-teamid"),flag_matchid = $.getUrlParam("matchid");
		$("input[add_check][ifChecked=true]").each(function(){
			flag_mateid = $(this).attr("data-mateid")

			$.ajax({
                type: "get",
                async: false,
                data: {
                    "matchid":flag_matchid,
                    "teamid":flag_teamid,
                    "mateid":flag_mateid
                },
                url: "http://10.206.106.27/BridgeCount/NewGame/addmate.do",
                dataType: "jsonp",
                jsonp: "callbackparam",
                jsonpCallback: "movieking"+flag_mateid,
                success: function (result) {
                   if(result.result=="success"){
                        alert("添加队员成功");
                        $("#grouping_ul_groups").html("");
						for(var i = 0;i < $.getUrlParam('teamnum');i++){
							listteammate($.getUrlParam('matchid'),i+1);
						}
                   }
                    else{
                        alert("添加队员失败");
                   }
                },
                error: function () {
                   // alert("失败");
                }
            });
		});
		$("#modal_playerList").modal("hide");
	});

	$("button[name='btn_newGame']").click(function(){
		//location.href = "grouping.html?";
	});
	$("button[name='btn_newGameClean']").click(function(){
		//重置所有控件
	});
});
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);