/*
*date:2016-2-22
*/
//生成产品页面方法
function Product_Html(product_name){
    $.ajax({
        url:"js/production.json",
        async:false,
        dateType:"json",
        success:function(production){
            $("#info_title").html("");
            $("#info_title").append('<h1 class="no-top-margin">'+production[product_name].name+'</h1>');
            for(var i=0;i<production[product_name].tag.length;i++) {
                $('<span>').addClass("badge").text(production[product_name].tag[i]).appendTo("#info_title");
            }
            $("#info_logo").children("img").attr("src","img/logo/"+product_name+"_LOGO.png");
            $("#info_description").children("div").children("p").html(production[product_name].describtion);
            $("#info_QR").html("");
            for(var i=0;i<production[product_name].QR_url.length;i++) {
                if (production[product_name].QR_url[i]!="")
                    $('<img>').addClass("img-rounded QR_Code").attr("src","img/" + production[product_name].QR_url[i]).appendTo("#info_QR");
            }
            $("#carousel_ol").html("");
            $("#carousel_img").html("");
            for(var i= 0,j=1;i<production[product_name].fuction_png_url;i++,j++){
                if(i==0) {
                    $('<li>').addClass("active").attr("data-target","#app_info_Carousel").attr("data-slide-to",i).appendTo("#carousel_ol");
                    $('<div>').addClass("item active").appendTo("#carousel_img").append('<img src="img/'+product_name+'_Pic'+ j +'.png">');
                }
                else{
                    $('<li>').attr("data-target","#app_info_Carousel").attr("data-slide-to",i).appendTo("#carousel_ol");
                    $('<div>').addClass("item").appendTo("#carousel_img").append('<img src="img/'+product_name+'_Pic'+ j +'.png">');
                }
            }
        }
    })
}
$(document).ready(function(){
	//alert($.getUrlParam('page'));
	switch ($.getUrlParam('page')) {
		case "XSZL":
			Product_Html("XSZL");
			break;
		case "HYT":
			Product_Html("HYT");
			break;
		case "XFGC":
			Product_Html("XFGC");
			break;
		case "GZZL":
			Product_Html("GZZL");
			break;
		case "WJZS":
			Product_Html("WJZS");
			break;
		case "QYYJ":
			Product_Html("QYYJ");
			break;
		case "ZHYY":
			Product_Html("ZHYY");
			break;
		default :
			alert("错误");
	}
});