/*
*date:2016-2-22
*/
function Product_Html(product_num){

}
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
            "QR_url":["HYT_QR_IOS.png",""],
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
			$("#info_title").children("h1").text(production[0].name);
			for(var i=0;i<production[0].tag.length;i++){
            $('<span>').addClass("badge").text(production[0].tag[i]).appendTo("#info_title");
            }
			break;
		case "HYT":
			$("#info_title").children("h1").text(production[1].name);
            for(var i=0;i<production[1].tag.length;i++) {
                $('<span>').addClass("badge").text(production[1].tag[i]).appendTo("#info_title");
            }
            $("#info_logo").children("img").attr("src","img/HYT_LOGO.png");
            $("#info_description").html(production[1].describtion);
            $('<img>').addClass("img-rounded QR_Code").attr("src",production[1].QR_url)appendTo("#info_QR");
			break;
		case "XFGC":
			$("#info_title").children("h1").text(production[2].name);
            for(var i=0;i<production[2].tag.length;i++){
                $('<span>').addClass("badge").text(production[0].tag[i]).appendTo("#info_title");
            }
			break;
		case "GZZL":
			$("#info_title").children("h1").text(production[3].name);
            for(var i=0;i<production[3].tag.length;i++){
                $('<span>').addClass("badge").text(production[0].tag[i]).appendTo("#info_title");
            }
			break;
		case "WJZS":
			$("#info_title").children("h1").text(production[4].name);
            for(var i=0;i<production[4].tag.length;i++){
                $('<span>').addClass("badge").text(production[0].tag[i]).appendTo("#info_title");
            }
			break;
		case "QYYJ":
			$("#info_title").children("h1").text(production[5].name);
            for(var i=0;i<production[5].tag.length;i++){
                $('<span>').addClass("badge").text(production[0].tag[i]).appendTo("#info_title");
            }
			break;
		case "ZHYY":
			$("#info_title").children("h1").text(production[6].name);
            for(var i=0;i<production[6].tag.length;i++){
                $('<span>').addClass("badge").text(production[0].tag[i]).appendTo("#info_title");
            }
			break;
		default :
			alert("错误");
	}
});