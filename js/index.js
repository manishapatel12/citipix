var bKImg = "";

$('document').ready(function(){

	
	function setBGImage(city) {
		switch (city.toLowerCase()) {
			case "nyc":
				bKImg = "url(./images/nyc.jpg)";
				break;
			case "new york":
				bKImg = "url(./images/nyc.jpg)";
				break;
			case "new york city":
				bKImg = "url(./images/nyc.jpg)";
				break;
			case "austin":
				bKImg = "url(./images/austin.jpg)";
				break;
			case "la":
				bKImg =  "url('./images/la.jpg')";
				break;
			case "los angeles":
				bKImg =  "url('./images/la.jpg')";
				break;
			case "sfo":
				bKImg = "url('./images/sf.jpg')";
				break;	
			case "san francisco":
				bKImg = "url('./images/sf.jpg')";
				break;					
			case "sydney" :
				bKImg = "url('./images/sydney.jpg')";
				break;
			default:
				bKImg = "url('./images/citipix_skyline.jpg')";
				break;																
		}
		return bKImg;
	}	

	$('#submit-btn').click(function(){
		var city = $('#city-type').val();
		$("body").css('background-image',setBGImage(city));	
		return false;
	});
});