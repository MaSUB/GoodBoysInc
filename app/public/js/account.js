$(document).ready(function() {
    
    getReport(report_callback); 
    
});

function report_callback(data){
	
	console.log(data);
	// do more things 
}

function getReport(callback){

  	$.ajax({
		type: 'POST',
		dataType: "json",
		contentType: "application/json",
		//url: 'http://localhost:3000/report/facebook',
		url: 'https://goodboysinc-mws5966.c9users.io/account/getReport',
		success: function(data) {
		
			callback(data);
		},
		error: function(data){
			console.log(data);
		}
  	});
}

