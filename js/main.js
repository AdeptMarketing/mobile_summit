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

/**
 * GEORGE ORWELL GEOLOCATION
 * Pure JS, none of this jQuery shit!
 */

var geoError = function(error)
{
	var geolocationElement = document.getElementById("geolocation");
	var innerHTML = "<p>Couldn't figure out your location, Boo.</p>";
	geolocationElement.innerHTML = innerHTML;
	window.console.log(error);
};


var setPosition = function(pos)
{
	/**
	 * Get Coordinates and other information.
	 */
	var latitude = Math.round(pos.coords.latitude*100)/100;
	var longitude = Math.round(pos.coords.longitude*100)/100;
	var accuracy = Math.round(pos.coords.accuracy);
	var altitude = pos.coords.altitude;
	if(altitude === null)
	{
		altitude = "N/A";
	}
	/**
	 * Append this stuff to the Geolocation element
	 * @type {Node}
	 */
	var geolocationElement = document.getElementById("geolocation");
	var innerHTML = "<h3>Your Location</h3><ul><li><strong>Latitude:</strong> " + latitude + "&deg;</li><li><strong>Longitude:</strong>  " + longitude + "&deg;</li><li><strong>Altitude: </strong>" + altitude + " meters</li><li><strong>Accuracy</strong> " + accuracy + "/100</li></ul>";
	geolocationElement.innerHTML = innerHTML;

};



var getLocation = function()
{
	/**
	 * Check to see if we have geolocation available.
	 */
	if(navigator.geolocation)
	{
		/**
		 * Get Current position takes the following args: Callback, Error Handler, Options
		 */
		navigator.geolocation.getCurrentPosition(setPosition, geoError);
	}
	else
	{
		geoError("User Does not have Geolocating Capabilities");
	}
};



window.onload = function()
{
	/**
	 * Request to Get Location
	 */
	getLocation();
	var geolocationElement = document.getElementById("geolocation");
	document.getElementById("show-location").onclick = function(event)
	{
		/**
		 * Rremove hidden Class on geolocation element.
		 */
		geolocationElement.className = '';
		event.cancelBubble = true;
		if (event.stopPropagation)
			{
				event.stopPropagation();
			}
	};
};

