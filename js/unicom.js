/*
*date:2016-2-22
*/
$(document).ready(function(){
	$("button[data-appInfo]").click(function(){
		location.href = "unicom_app_info.html?page=" + $(this).attr('name');
	});
});