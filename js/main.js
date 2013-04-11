$(document).ready(function(){
	var navigation = responsiveNav("#nav");
	
	$('#cover .fittext').fitText(1.5);
	
	mediaCheck({
		media: '(min-width: 600px)',
		entry: function(){
			$('a[href*=#]').slideto({speed  : 800});
		},
		exit: function(){
			
		}
    });
});