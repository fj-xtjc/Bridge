/*
*date:2016-2-22
*/
//生成产品页面方法
var production;
function Product_Html(product_num,product_name){
    $.ajax({
        url:"js/production.json",
        async:false,
        dateType:"json",
        success:function(result){
            production=result;
        }
    })
    $("#info_title").html("");
    $("#info_title").append('<h1 class="no-top-margin">'+production[product_num].name+'</h1>');
    for(var i=0;i<production[product_num].tag.length;i++) {
        $('<span>').addClass("badge").text(production[product_num].tag[i]).appendTo("#info_title");
    }
    $("#info_logo").children("img").attr("src","img/logo/"+product_name+"_LOGO.png");
    $("#info_description").children("div").children("p").html(production[product_num].describtion);
    $("#info_QR").html("");
    for(var i=0;i<production[product_num].QR_url.length;i++) {
        if (production[product_num].QR_url[i]!="")
            $('<img>').addClass("img-rounded QR_Code").attr("src","img/" + production[product_num].QR_url[i]).appendTo("#info_QR");
    }
    $("#carousel_ol").html("");
    $("#carousel_img").html("");
    for(var i= 0,j=1;i<production[product_num].fuction_png_url;i++,j++){
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
$(document).ready(function(){
	//alert($.getUrlParam('page'));
	switch ($.getUrlParam('page')) {
		case "XSZL":
			Product_Html(0,"XSZL");
			break;
		case "HYT":
			Product_Html(1,"HYT");
			break;
		case "XFGC":
			Product_Html(2,"XFGC");
			break;
		case "GZZL":
			Product_Html(3,"GZZL");
			break;
		case "WJZS":
			Product_Html(4,"WJZS");
			break;
		case "QYYJ":
			Product_Html(5,"QYYJ");
			break;
		case "ZHYY":
			Product_Html(6,"ZHYY");
			break;
		default :
			alert("错误");
	}
});