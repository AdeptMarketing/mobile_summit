$(document).ready(function(){
	var navigation = responsiveNav("#nav");
	
	$('#cover .fittext').fitText(1.5);
	
	$('a[href*=#]').slideto({speed  : 800});
	
});