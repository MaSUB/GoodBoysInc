$(document).ready(function() {
    
    var twitObj = getTwitterObj();
    var faceObj = getFacebookObj();
    var aboutObj = getAboutObj();
    

});
var overall_pass_fail;			//for overall PASS/FAIL

var agreeableness;				//for twitter/fb PASS/FAIL
var conscientiousness;
var extraversion;		
var neuroticism;		
var openness;		


function twitterCallBack(twitObj){									//parsing for twitter fields: Agreeableness [3], Conscientiousness[1], Extraversion[2], Neuroticism[4], Openness[0]

var agreeableness_value = ((twitObj.personality[3].raw_score)*100);	//agreeableness out of 100
var agreeableness_report = agreeableness_value.toPrecision(4);			//agreeableness xx.xx ( for easy display as %)
document.getElementById("AgreeableT").innerHTML = agreeableness_report + " %";		//adds to agreeablness column
agreeableness+=agreeableness_report;

console.log(agreeableness);

var conscientiousness_value = ((twitObj.personality[1].raw_score)*100);	//conscientiousness out of 100
var conscientiousness_report = conscientiousness_value.toPrecision(4);
document.getElementById("ConscientiousnessT").innerHTML = conscientiousness_report + " %";		//adds to conscientiousness column
conscientiousness+=conscientiousness_report;

var extraversion_value = ((twitObj.personality[2].raw_score)*100);	//extraversion out of 100
var extraversion_report = extraversion_value.toPrecision(4);
document.getElementById("ExtraversionT").innerHTML = extraversion_report + " %";
extraversion+=extraversion_report;

var neuroticism_value = ((twitObj.personality[4].raw_score)*100);		//neuroticism out of 100
var neuroticism_report = neuroticism_value.toPrecision(4);
document.getElementById("NeuroticismT").innerHTML = neuroticism_report + " %";
neuroticism+=neuroticism_report;

var openness_value = ((twitObj.personality[0].raw_score)*100);		//openness out of 100
var openness_report = openness_value.toPrecision(4);
document.getElementById("OpennessT").innerHTML = openness_report + " %";
openness+=openness_report;

}

function faceBookCallBack(faceObj){			//parsing for facebook fields, Agreeableness [3], Conscientiousness[1], Extraversion[2], Neuroticism[4], Openness[0]

var agreeableness_value = ((faceObj.personality[3].raw_score)*100);	//agreeableness out of 100
var agreeableness_report = agreeableness_value.toPrecision(4);		
document.getElementById("AgreeableF").innerHTML = agreeableness_report + " %";
agreeableness+=agreeableness_report;



var conscientiousness_value = ((faceObj.personality[1].raw_score)*100);	//conscientiousness out of 100
var conscientiousness_report = conscientiousness_value.toPrecision(4);
document.getElementById("ConscientiousnessF").innerHTML = conscientiousness_report + " %";	
conscientiousness+=conscientiousness_report;

var extraversion_value = ((faceObj.personality[2].raw_score)*100);	//extraversion out of 100
var extraversion_report = extraversion_value.toPrecision(4);
document.getElementById("ExtraversionF").innerHTML = extraversion_report + " %";
extraversion+=extraversion_report;

var neuroticism_value = ((faceObj.personality[4].raw_score)*100);		//neuroticism out of 100
var neuroticism_report = neuroticism_value.toPrecision(4);
document.getElementById("NeuroticismF").innerHTML = neuroticism_report + " %";
neuroticism+=neuroticism_report;

var openness_value = ((faceObj.personality[0].raw_score)*100);		//openness out of 100
var openness_report = openness_value.toPrecision(4);
document.getElementById("OpennessF").innerHTML = openness_report + " %";
openness+=openness_report;

}

function aboutCallBack(aboutObj){

var reportNum = 5555;
document.getElementById("ReportNum").innerHTML = reportNum;

	
var agreeableness_value = ((aboutObj.personality[3].raw_score)*100);	//agreeableness out of 100
var agreeableness_report = agreeableness_value.toPrecision(4);		
document.getElementById("AgreeablenessMe").innerHTML = agreeableness_report + " %";	




var conscientiousness_value = ((aboutObj.personality[1].raw_score)*100);	//conscientiousness out of 100
var conscientiousness_report = conscientiousness_value.toPrecision(4);
document.getElementById("ConscientiousnessMe").innerHTML = conscientiousness_report + " %";	


var extraversion_value = ((aboutObj.personality[2].raw_score)*100);	//extraversion out of 100
var extraversion_report = extraversion_value.toPrecision(4);
document.getElementById("ExtraversionMe").innerHTML = extraversion_report + " %";

 
var neuroticism_value = ((aboutObj.personality[4].raw_score)*100);		//neuroticism out of 100
var neuroticism_report = neuroticism_value.toPrecision(4);
document.getElementById("NeuroticismMe").innerHTML = neuroticism_report + " %";

var openness_value = ((aboutObj.personality[0].raw_score)*100);		//openness out of 100
var openness_report = openness_value.toPrecision(4);
document.getElementById("OpennessMe").innerHTML = openness_report + " %";

	

var closeness_value = ((aboutObj.needs[1].raw_score)*100);
var closeness_report = closeness_value.toPrecision(4);
document.getElementById("NeedClosenessMe").innerHTML = closeness_report + " %";


var opennessToChange_value = ((aboutObj.values[1].raw_score)*100);
var opennessToChange_report = opennessToChange_value.toPrecision(4);
document.getElementById("OpennessToChangeMe").innerHTML = opennessToChange_report + " %";

var volunteer_status = aboutObj.consumption_preferences[7].consumption_preferences[0].score;
if(volunteer_status == 1 ){
	document.getElementById("VolunteerMe").innerHTML = "Yes";
}
else{
	document.getElementById("VolunteerMe").innerHTML = "No";
}

var emotion_analysis = ((aboutObj.personality[0].children[2].raw_score)*100);
var emotion_analysis_report = emotion_analysis.toPrecision(4);
	document.getElementById("EmotionMe").innerHTML = emotion_analysis_report + " %";
	
var anger_value = ((aboutObj.personality[4].children[0].raw_score)*100);
var anger_value_report = anger_value.toPrecision(4);
	document.getElementById("AngerMe").innerHTML = anger_value_report + " %";

	
   
var applicant_name = aboutObj.about[0].firstName + " " + aboutObj.about[1].lastName;
	document.getElementById("ApplicantName").innerHTML = applicant_name;
var applicant_email = aboutObj.about[2].email;
	document.getElementById("Email").innerHTML = applicant_email;
var applicant_phone = aboutObj.about[3].phoneNumber;				//gets applicant info from aboutMe JSON
	document.getElementById("Phone").innerHTML = applicant_phone;
var applicant_fb = aboutObj.about[4].facebook;
	document.getElementById("ApplicantFBName").innerHTML = applicant_fb;
var applicant_tw = aboutObj.about[5].twitter;
	document.getElementById("ApplicantTwitName").innerHTML = applicant_tw;
var applicant_street_address = aboutObj.about[6].address1 + " " + aboutObj.about[7].address2;
	document.getElementById("AddressL1").innerHTML = applicant_street_address;



 
}


function getTwitterObj(callback){
  	var obj;
  	
  	$.ajax({
		type: 'POST',
		dataType: "json",
		contentType: "application/json",
		//url: 'http://localhost:3000/report/twitter',
		url: 'https://goodboysinc-mws5966.c9users.io/report/twitter',
		success: function(data) {
			console.log('got twitter object');
			obj = data;
			twitterCallBack(obj);	
		}
  	});
}

function getFacebookObj(){

    var obj;
    
  	$.ajax({
		type: 'POST',
		dataType: "json",
		contentType: "application/json",
		//url: 'http://localhost:3000/report/facebook',
		url: 'https://goodboysinc-mws5966.c9users.io/report/facebook',
		success: function(data) {
			console.log('got facebook object');
			obj = data 
			faceBookCallBack(obj);
		}
  	});
  	
}

function getAboutObj(){

    var obj;
    
  	$.ajax({
		type: 'POST',
		dataType: "json",
		contentType: "application/json",
		//url: 'http://localhost:3000/report/information',
		url: 'https://goodboysinc-mws5966.c9users.io/report/information',
		success: function(data) {
			console.log('got about object');
			obj = data;
			aboutCallBack(obj);
		}
  	});
  	
}