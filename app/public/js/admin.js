$(document).ready(function() {
    
  $("#viewReport").hide();
  get_Users();
 
    

});

function get_Users_callback(rows){
    
    console.log(rows);
    $("#user-table").tabulator({
    	
      responsiveLayout:true,
      fitColumns:true,
	  columns:[
	    {title:"Name", field:"uname", sortable:true, width:200,  onClick:function(e, header, field, columnDef){
		        
		        console.log("hey it worked name: " +JSON.stringify(columnDef));
		        getReport(columnDef.uname, columnDef.password, report_callback);
    		}
	    },
	    {title:"type", field:"type", sortable:true, sorter:"number"},
	  ],
	});
	
	$("#user-table").tabulator("setData", rows);
}


function report_callback(data){
	
	//change this maybe
	console.log(JSON.stringify(data));
	if(data == ""){
		window.location.replace("'https://goodboysinc-mws5966.c9users.io/twitter");
	}else{
		
		var bodyString = data.body.replace(new RegExp("\\*", 'g'), "\"");
	
		console.log(bodyString);
		
		// hide table show iframe
		$('#user-table').hide();
		$('#viewReport').show();
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

function getReport(uname, password, callback){

	var obj = {
		"stuff": "adminCall",
		"uname": uname,
		"password": password
	};
	
  	$.ajax({
		type: 'POST',
		dataType: "json",
		contentType: "application/json",
		data: JSON.stringify(obj),
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