$(document).ready(function() {
    
  get_Users();
    
    

});

function get_Users_callback(rows){
    
    console.log(rows);
}

function get_Users(){


  	$.ajax({
		type: 'POST',
		dataType: "json",
		contentType: "application/json",
		//url: 'http://localhost:3000/report/information',
		url: 'https://goodboysinc-mws5966.c9users.io/admin/users',
		success: function(data) {
			console.log('got about object');
			get_Users_callback(data);
		
		}
  	});
  	
}