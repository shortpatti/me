(function ($) {
	'use strict';

		// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);

		function init() {
		    // Basic options for a simple Google Map
		    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		    var mapOptions = {
		        // How zoomed in you want the map to start at (always required)
		        zoom: 12,

		        scrollwheel: false,

		        // The latitude and longitude to center the map (always required)
		        center: new google.maps.LatLng(23.7286, 90.3854), // New York

		        // How you would like to style the map. 
		        // This is where you would paste any style found on Snazzy Maps.
		        styles: [


		            {
		                "featureType": "administrative",
		                "elementType": "all",
		                "stylers": [
		                    {
		                        "hue": "#ff0000"
		                    }
		                ]
		            },
		            {
		                "featureType": "administrative",
		                "elementType": "geometry",
		                "stylers": [
		                    {
		                        "color": "#888888"
		                    }
		                ]
		            },
		            {
		                "featureType": "administrative",
		                "elementType": "geometry.fill",
		                "stylers": [
		                    {
		                        "hue": "#ff0000"
		                    }
		                ]
		            },
		            {
		                "featureType": "administrative",
		                "elementType": "labels.text",
		                "stylers": [
		                    {
		                        "color": "#6e6e6e"
		                    },
		                    {
		                        "visibility": "simplified"
		                    }
		                ]
		            },
		            {
		                "featureType": "administrative.country",
		                "elementType": "geometry",
		                "stylers": [
		                    {
		                        "color": "#6f6b6b"
		                    }
		                ]
		            },
		            {
		                "featureType": "landscape",
		                "elementType": "labels.text",
		                "stylers": [
		                    {
		                        "color": "#c5c5c5"
		                    }
		                ]
		            },
		            {
		                "featureType": "landscape.natural",
		                "elementType": "geometry",
		                "stylers": [
		                    {
		                        "color": "#cfcfcf"
		                    }
		                ]
		            },
		            {
		                "featureType": "landscape.natural.landcover",
		                "elementType": "all",
		                "stylers": [
		                    {
		                        "hue": "#ff0000"
		                    }
		                ]
		            },
		            {
		                "featureType": "landscape.natural.landcover",
		                "elementType": "geometry",
		                "stylers": [
		                    {
		                        "hue": "#ff0000"
		                    }
		                ]
		            },
		            {
		                "featureType": "poi",
		                "elementType": "all",
		                "stylers": [
		                    {
		                        "visibility": "off"
		                    }
		                ]
		            },
		            {
		                "featureType": "poi",
		                "elementType": "labels.text",
		                "stylers": [
		                    {
		                        "visibility": "off"
		                    },
		                    {
		                        "color": "#909090"
		                    }
		                ]
		            },
		            {
		                "featureType": "poi",
		                "elementType": "labels.icon",
		                "stylers": [
		                    {
		                        "visibility": "off"
		                    }
		                ]
		            },
		            {
		                "featureType": "poi.medical",
		                "elementType": "geometry",
		                "stylers": [
		                    {
		                        "color": "#e5e5e5"
		                    }
		                ]
		            },
		            {
		                "featureType": "poi.park",
		                "elementType": "geometry",
		                "stylers": [
		                    {
		                        "color": "#e5e5e5"
		                    }
		                ]
		            },
		            {
		                "featureType": "poi.place_of_worship",
		                "elementType": "geometry",
		                "stylers": [
		                    {
		                        "color": "#ff0000"
		                    }
		                ]
		            },
		            {
		                "featureType": "poi.sports_complex",
		                "elementType": "geometry",
		                "stylers": [
		                    {
		                        "color": "#f7f7f7"
		                    }
		                ]
		            },
		            {
		                "featureType": "road",
		                "elementType": "geometry.fill",
		                "stylers": [
		                    {
		                        "color": "#ffffff"
		                    }
		                ]
		            },
		            {
		                "featureType": "road",
		                "elementType": "geometry.stroke",
		                "stylers": [
		                    {
		                        "gamma": 7.18
		                    }
		                ]
		            },
		            {
		                "featureType": "road",
		                "elementType": "labels.icon",
		                "stylers": [
		                    {
		                        "visibility": "off"
		                    }
		                ]
		            },
		            {
		                "featureType": "road.local",
		                "elementType": "labels.text",
		                "stylers": [
		                    {
		                        "visibility": "simplified"
		                    }
		                ]
		            },
		            {
		                "featureType": "transit.line",
		                "elementType": "geometry",
		                "stylers": [
		                    {
		                        "gamma": 0.48
		                    }
		                ]
		            },
		            {
		                "featureType": "transit.station",
		                "elementType": "labels.icon",
		                "stylers": [
		                    {
		                        "visibility": "off"
		                    }
		                ]
		            },
		            {
		                "featureType": "water",
		                "elementType": "all",
		                "stylers": [
		                    {
		                        "color": "#bcbcbc"
		                    },
		                    {
		                        "visibility": "on"
		                    }
		                ]
		            },
		            {
		                "featureType": "water",
		                "elementType": "labels.text.fill",
		                "stylers": [
		                    {
		                        "color": "#ffffff"
		                    }
		                ]
		            }
		        ]
		    };

		    // Get the HTML DOM element that will contain your map 
		    // We are using a div with id="map" seen below in the <body>
		    var mapElement = document.getElementById('googleMap');

		    // Create the Google Map using our element and options defined above
		    var map = new google.maps.Map(mapElement, mapOptions);

		    // Let's also add a marker while we're at it
		    var marker = new google.maps.Marker({
		        position: new google.maps.LatLng(23.7286, 90.3854),
		        map: map,
		        title: 'Tasfiu!',
		        icon: 'images/icons/map.png',
		        animation: google.maps.Animation.BOUNCE

		    });
		}

})(jQuery);