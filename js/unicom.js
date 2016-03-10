/*
*date:2016-2-22
*/
function products_btn_html(result,i){
	$("<div>").addClass("col-md-4 col-sm-6 col-xs-12").html(
	'<button type="button" class="btn btn-default  btn-block btn-md btn_div" name="'+result[0]["app"][i]+'"data-appInfo="'+result[1][result[0]["app"][i]].app_name+'"> ' +
		'<div class="col-md-4 col-sm-4 col-xs-4"> ' +
			'<img src="img/logo/'+result[1][result[0]["app"][i]].logo_url+'" class="app_Logo"> ' + 
		'</div> ' +
		'<div class="col-md-6 col-sm-6 col-xs-6"> ' +
			'<h3 class="strong">'+result[1][result[0]["app"][i]].app_name +'</h3> ' +
			'<p class="small">产品即将上线，敬请期待</p> ' +
		'</div> ' +
		'<div class="col-md-2 col-sm-2 col-xs-2"> ' +
			'<div class="row"> ' +
				'<span class="badge col-md-12 col-sm-12 col-xs-12">安卓</span> ' +
				'<span class="badge col-md-12 col-sm-12 col-xs-12">IOS</span> ' +
			'</div> ' +
		'</div> ' +
	'</button>').appendTo("#index_unicom");
}
$(document).ready(function(){
	$(window).resize(function() {
		var font_size,fg_X,fg_Y;
	  	var bg_width = $(window).width();
		var bg_height = bg_width*0.5;

		if (bg_height >= $(window).height() - 80) {
			bg_height = $(window).height() - 80;
			fg_X = bg_width * 0.1;
			fg_Y = bg_height * 0.4;
			
		} else {
			fg_X = bg_width * 0.09;
			fg_Y = bg_height * 0.3;
		};

		font_size = bg_height * 0.1;

		$(".bg_unicom_app").css("height",bg_height);
		$(".marquee span").css("font-size",font_size);
		$(".marquee").css("left",fg_X).css("top",fg_Y).css("height",$(".marquee span").height()+10);
	});
	$(window).resize();

	alert($(".marquee span").html().length);
	var iCount = setInterval(function(){
		
	},100);
	clearInterval(iCount);

	$("#index_unicom").html("");
	$.ajax({
		type:"get",
		url:"js/production.json",
		async:false,
		dateType:"json",
		success:function(result){
			for (var i = 0; i < result[0]["app"].length; i++) {
				products_btn_html(result,i);
			};
		},
		error:function(){
			//alert("加载失败!");
		}
	});

	$("button[data-appInfo]").click(function() {
		location.href = "unicom_app_info.html?page=" + $(this).attr('name');
	});
});