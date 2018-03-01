function initMap() {
	//create center market at UCSD
	var ucsd_ltlng = {lat:32.878830, lng:-117.235912};

	//create map object and specify the DOM element for display
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});
}