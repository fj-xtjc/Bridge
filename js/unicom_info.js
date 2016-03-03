/*
*date:2016-2-22
*/
$(document).ready(function(){
	//alert($.getUrlParam('page'));
	var production=[
        {
            "name":"销售助理",
            "logo_url":"",
            "tag":["移动考勤","经营分析"],
            "describtion":"功能说明简介<br/>功能1<br/>功能2",
            "QR_url":"",
            "fuction_png_url":3
        },
        {
            "name":"会议通",
            "logo_url":"img/HYT_LOGO.png",
            "tag":["组织会议","移动签到","电子资料"],
            "describtion":"<p>功能说明简介<br/>功能1<br/>功能2</p>",
            "QR_url":["HYT_QR_IOS.png","HYT_QR_Android.png"],
            "fuction_png_url":3
        },
        {
            "name":"幸福工厂",
            "logo_url":"",
            "tag":["移动考勤","经营分析"],
            "describtion":"功能说明简介<br/>功能1<br/>功能2",
            "QR_url":["HYT_QR_IOS.png",""],
            "fuction_png_url":3
        },
        {
            "name":"工作助理",
            "logo_url":"",
            "tag":["移动考勤","经营分析"],
            "describtion":"功能说明简介<br/>功能1<br/>功能2",
            "QR_url":["HYT_QR_IOS.png",""],
            "fuction_png_url":3
        },
        {
            "name":"卫监助手",
            "logo_url":"",
            "tag":["移动考勤","经营分析"],
            "describtion":"功能说明简介<br/>功能1<br/>功能2",
            "QR_url":["HYT_QR_IOS.png",""],
            "fuction_png_url":3
        },
        {
            "name":"企业远教",
            "logo_url":"",
            "tag":["移动考勤","经营分析"],
            "describtion":"功能说明简介<br/>功能1<br/>功能2",
            "QR_url":["HYT_QR_IOS.png",""],
            "fuction_png_url":3
        },
        {
            "name":"智慧医院",
            "logo_url":"",
            "tag":["移动考勤","经营分析"],
            "describtion":"功能说明简介<br/>功能1<br/>功能2",
            "QR_url":["HYT_QR_IOS.png",""],
            "fuction_png_url":3
        }
    ];
	switch ($.getUrlParam('page')) {
		case "XSZL":
			Product_Html(0);
			break;
		case "HYT":
			Product_Html(1);
			break;
		case "XFGC":
			Product_Html(2);
			break;
		case "GZZL":
			Product_Html(3);
			break;
		case "WJZS":
			Product_Html(4);
			break;
		case "QYYJ":
			Product_Html(5);
			break;
		case "ZHYY":
			Product_Html(6);
			break;
		default :
			alert("错误");
	}
	//生成产品页面方法
	function Product_Html(product_num){
		$("#info_title").children("h1").text(production[product_num].name);
		for(var i=0;i<production[product_num].tag.length;i++) {
			$('<span>').addClass("badge").text(production[product_num].tag[i]).appendTo("#info_title");
		}
		$("#info_logo").children("img").attr("src","img/HYT_LOGO.png");
		$("#info_description").html(production[product_num].describtion);
		for(var i=0;i<production[product_num].QR_url.length;i++) {
			if (production[product_num].QR_url[i]!="")
				$('<img>').addClass("img-rounded QR_Code").attr("src", "img/" + production[product_num].QR_url[i]).appendTo("#info_QR");
		}
	}
});