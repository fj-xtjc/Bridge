/*
*date:2016-2-22
*/
var myScroll;
$(document).ready(function(){
	myScroll = new IScroll('#test', { mouseWheel: true });
});
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);