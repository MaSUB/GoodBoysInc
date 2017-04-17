
$(document).ready(function() {
    
    
    function callback(data){
	
	console.log("why me lord");
	var stuff = data;
}

function getReport(callback){

  	$.ajax({
		type: 'POST',
		dataType: "json",
		contentType: "application/json",
		//url: 'http://localhost:3000/report/facebook',
		url: 'https://goodboysinc-mws5966.c9users.io/report/facebook',
		success: function(data) {
			console.log('got facebook object');
			obj = data;
			callback(data);
		}
  	});
}

    var report = getReport(callback); 
    
    //jj and nick work here down 
   
});

