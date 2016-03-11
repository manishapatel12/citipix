$('document').ready(function(){

	var bKImg = "";
	function setBGImage(city) {
		switch (String(city)) {
			case ("NYC" || "New York City") :
						bKImg = 'url(../images/nyc.jpg)';
						break;
			case "Austin" :
						bKImg = 'url(../images/austin.jpg)';
						break;
			case ("LA" || "Los Angele") :
						bKImg = 'url(../images/la.jpg)';
						break;
			case ("SFO" || "San Francisco") :
						bKImg = 'url(../images/sf.jpg)';
						break;
			case "Sydney" :
						bKImg = 'url(../images/sydney.jpg)';
						break;
			default:
						bKImg = 'url(../images/citipix_skyline.jpg)';																
		}
		console.log("backImage" + bKImg);
		return bKImg;
	}	

	$('#submit-btn').click(function(){
	var city = $('#city-type').val();
	console.log(city);
	$('#bGImage').css('background-image',setBGImage(city));	
	});
});