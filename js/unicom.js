/*
*date:2016-2-22
*/
function product_btn_html(product_name){
	$.ajax({
		type:"get",
		url:"js/production.json",
		async:false,
		dateType:"json",
		success:function(production){
			$("<div>").addClass("col-md-4 col-sm-6 col-xs-12").html(
			'<button type="button" class="btn btn-default  btn-block btn-md btn_div" name="'+product_name+'"data-appInfo="'+production[product_name].name+'"> ' +
				'<div class="col-md-4 col-sm-4 col-xs-4"> ' +
					'<img src="img/images_12.png" class="btn_img"> ' +
				'</div> ' +
				'<div class="col-md-6 col-sm-6 col-xs-6"> ' +
					'<h3 class="strong">'+production[product_name].name +'</h3> ' +
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
	});
}
$(document).ready(function(){
	var bg_width = parseInt($(window).width()) - 80;
	var bg_height = parseInt(bg_width*2/3 - 5) + "px";
	$(".bg_unicom_app").css("height",$(window).height()-80);
	// $("#index_unicom").html("");
	// product_btn_html("XSZL");
	// product_btn_html("HYT");
	// product_btn_html("XFGC");
	// product_btn_html("GZZL");
	// product_btn_html("WJZS");
	// product_btn_html("QYYJ");
	// product_btn_html("ZHYY");
	$("button[data-appInfo]").click(function() {
		location.href = "unicom_app_info.html?page=" + $(this).attr('name');
	});
});