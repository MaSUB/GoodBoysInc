$(document).ready(function() {
    
	
		
});

function getTwitterObj(){
  	
  		$.ajax({
    		type: 'POST',
    		dataType: "json",
    		contentType: "application/json",
    		//url: 'http://localhost:3000/report/twitter',
    		url: 'https://goodboysinc-mws5966.c9users.io/report/twitter',
    		data: JSON.stringify(jsonObj),
    		success: function(data) {
    			console.log('got twitter object');
    		}
  		});
	}
	
function getFacebookObj(){

  	$.ajax({
		type: 'POST',
		dataType: "json",
		contentType: "application/json",
		//url: 'http://localhost:3000/report/facebook',
		url: 'https://goodboysinc-mws5966.c9users.io/report/facebook',
		data: JSON.stringify(jsonObj),
		success: function(data) {
			console.log('got facebook object');
		}
  	});
}

function getAboutObj(){

  	$.ajax({
		type: 'POST',
		dataType: "json",
		contentType: "application/json",
		//url: 'http://localhost:3000/report/information',
		url: 'https://goodboysinc-mws5966.c9users.io/report/information',
		data: JSON.stringify(jsonObj),
		success: function(data) {
			console.log('got about object');
		}
  	});
}