$(document).ready(function() {
    
    getReport(report_callback); 
    
});

function report_callback(data){
	
	//change this maybe
	console.log(JSON.stringify(data));
	if(data == ""){
		window.location.replace("'https://goodboysinc-mws5966.c9users.io/twitter");
	}else{
		
		var bodyString = data.body.replace(new RegExp("\\*", 'g'), "\"");
	
		console.log(bodyString);
	
		
		var iframe = document.getElementById('viewReport'),
    		iframedoc = iframe.contentDocument || iframe.contentWindow.document;
			
			iframedoc.head.innerHTML = '<link rel="stylesheet" type="text/css" href="/css/report.css">'
        		+ '<link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet">'
    			+' <link href="https://fonts.googleapis.com/css?family=Schoolbell" rel="stylesheet">'
        		+'<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">'
			iframedoc.body.innerHTML = bodyString;
	}
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

