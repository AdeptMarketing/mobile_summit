$(document).ready(function(){
	var navigation = responsiveNav("#nav");
	
	$('#cover .fittext').fitText(1.5);
	$('.theend.fittext').fitText(2);
	
	mediaCheck({
		media: '(min-width: 600px)',
		entry: function(){
			$('a[href*=#]').slideto({speed  : 800});
			$('section').waypoint(function() {
				var linkNumber = $(this).parent().index() + 1;
				$('#nav li').removeClass('current');
				$('#nav li:nth-child('+linkNumber+')').addClass('current');
			},{offset: '300px'});	
		},
		exit: function(){
			
		}
    });
});