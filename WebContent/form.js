function validate_fname_fun(e){
	var unicode=e.charCode? e.charCode:e.keyCode;
		if((unicode<65)||(unicode>90 && unicode<97)|| (unicode>122)){
			if((unicode!=9) && (unicode!=13) && (unicode!=8)){
				alert("Special Characters and Numbers not allowed");
				return false;
			}
		}
}

function validate_mname_fun(e){
	var unicode=e.charCode? e.charCode:e.keyCode;
		if((unicode<65)||(unicode>90 && unicode<97)|| (unicode>122)){
			if((unicode!=9) && (unicode!=13) && (unicode!=8)){
				alert("Special Characters and Numbers not allowed");
				return false;
			}
		}
}

function validate_lname_fun(e){
	var unicode=e.charCode? e.charCode:e.keyCode;
		if((unicode<65)||(unicode>90 && unicode<97)|| (unicode>122)){
			if((unicode!=9) && (unicode!=13) && (unicode!=8)){
				alert("Special Characters and Numbers not allowed");
				return false;
			}
		}
}


function validate_Class(){
	var c=Application_form.class.value;
   if(Application_form.class.value==""){ 
	   alert("Enter Class");
       return false;	
   } 
   if(c>12){
	   alert("Class should be between 1-12");
	   Application_form.class.focus();
	   return false;
	   }
   else return true;
}

function validate_DOB(){
	console.log(Application_form.date.value);
   if(Application_form.date.value==""){ 
	   alert("Enter Date of Birth");
       return false;;
}else 
	return true;
}

function validate_gender(){
	if(Application_form.gender[0].checked==false  && Application_form.gender[1].checked==false && Application_form.gender[2].checked==false){
		alert("Please choose your gender");
		return false;
	}else 
		return true;
}


function validate_Email(){
	var count=0;
	var e=Application_form.email.value;

       
		 for(var i=0; i< e.length; i++){
	 	  if(e.charAt(i)==46 || (e.charAt(i)>47 && e.charAt(i)<58)|| (e.charAt(i)>63 && e.charAt(i)<91)|| (e.charAt(i)>96 && e.charAt(i)<123) ){
          break;
	      }	
    }    
	 var Exp=/(^[a-z]+[0-9a-z]+[@._])/;
		if(e.match(Exp)){
			console.log("helo");
		}else 
		{
			alert("Aphanumeric required");
			Application_form.email.focus();
			return false;
		}
		  for(var i=0; i< e.length; i++){
				 if(e.charAt(i)=="@")
				  {
					   count++;
				   }
			     if(count>=2)
			     {
					 alert("Only one @ symbol is allowed");
							  Application_form.email.focus();
							  return false;
					           break; 
				 }
			}
  if(e=="" || e.indexOf("@")<1 ||e.lastIndexOf(".")>=e.length-2 || e.lastIndexOf(".")-e.indexOf("@")<3){
           alert("Enter correct Email");
              Application_form.email.focus();
              return false;
               }

  }

function validate_phone_fun(e){
	var p=Application_form.phone.value;	
	if(p.length<10){
	var unicode=e.charCode? e.charCode:e.keyCode;
	if(unicode<48 || unicode>57){
		if((unicode!=9)&&(unicode!=13)&& (unicode!=8)){
		alert("please enter digits only without country code");
		return false;
		}
	}
	}
	if(p.length>9){
		return false;
	}
	else
		return true;
}

function validate_digit(){
	var p=Application_form.phone.value;
	if(p.length<10 || p.length>10){
		alert("please enter valid number");
		return false;
	}else
		return true;
}

function validate_House(){
	   if(Application_form.house.value==""){ alert("Enter House number");
	 Application_form.house.focus();
	 return false;	
	}else
		return true;
	}
	function validate_Street(){
		if(Application_form.street.value==""){ 
	 return false;
	 }else
		 return true;
	}


function StateCity(s,c){
  var s=document.getElementById(s).value;
  var c=document.getElementById(c);
    c.innerHTML="";
	   
       if(s =="Andhra Pradesh"){
       var optionArray=["|","adilabad|Adilabad","hyderabad|Hyderabad","vishakapatnam|Vishakapatnam"];
      }else if(s =="Bihar"){
       var optionArray=["|","mujaffarpur|Mujaffarpur","patna|Patna","aara|Aara"];
	   }
	   else if(s =="Karnataka"){
	     var optionArray=["|","bangalore|Bangalore","Majestic|Majestic"];
		 }
		 else if(s =="Uttar Pradesh"){
		 var optionArray=["|","varanasi|Varanasi","lucknow|Lucknow","aligarh|Aligarh"];
		 }
		 else if(s =="West Bengal"){
		 var optionArray=["|","kolkata|Kolkata","howrah|Howrah","hoogly|Hoogly"];
		 }
		 else if(c.value=="Select"){
	   Application_form.city.focus();}
  for(var option in optionArray){
    var pair=optionArray[option].split("|");
	var newOption=document.createElement("option");
	newOption.value=pair[0];
	newOption.innerHTML=pair[1];
	c.options.add(newOption);
  }
}

function validate_State(){
	if(Application_form.state.value=="Select"){ alert("Select State");
           return false;
 }else
	 return true;
}
function validate_City(){
	if(Application_form.city.value=="Select"){ alert("Select City");
 return false;
 }else
	 return true;
}
function validate_pin(e){
	var p=Application_form.pin.value;	
	if(p.length<5){
	var unicode=e.charCode? e.charCode:e.keyCode;
	if(unicode<48 || unicode>57){
		if((unicode!=9)&&(unicode!=13)&& (unicode!=8)){
		alert("please enter digits only");
		return false;
		}
	}
	}
	if(p.length>5){
		return false;
	}
	else
		return true;
}

function validate_nationality(e){
	var unicode=e.charCode? e.charCode: e.keyCode;
	if((unicode<65)||(unicode>90 && unicode<97)||(unicode>122)){
		if(unicode!=8 && unicode!=9 && unicode!=13){
			alert("Special character and numbers not allowed");
			return false;
		}
	}else
		return true;
}


function validate_Religion(){
	if(Application_form.religion.value==""){ alert("Select Religion");
 return false;
 }else
	 return true;
}
function ValidateSubmit(){
	console.log("fname"+fname);
  var fname=Application_form.fname.value;
  console.log("fname"+fname);
  var lname=Application_form.lname.value;
  console.log("lname"+lname);
  var cls=Application_form.class.value;
  console.log("cls"+cls);
  var dob=Application_form.date.value;
  console.log("dob"+dob);
  var gen=Application_form.gender.value;
  console.log("gen"+gen);
  var course=Application_form.course.value;
  console.log("course"+course);
  var phone=Application_form.phone.value;
  console.log("phone"+phone);
  var email=Application_form.email.value;
  console.log("email"+email);
  var house=Application_form.house.value;
  console.log("house"+house);
  var street=Application_form.street.value;
  console.log("street"+street);
  var state=Application_form.state.value;
  console.log("state"+state);
  var city=Application_form.city.value;
  console.log("[city"+city);
  var pin=Application_form.pin.value;
  console.log("pin"+pin);
  var nationality=Application_form.nationality.value;
  console.log("nationality"+nationality);
  var religion=Application_form.religion.value;
  console.log("religion"+religion);
  var degree=Application_form.degree.value;
  console.log("deg"+degree);
  var university=Application_form.university.value;
  console.log("uni"+university);
  var percentage=Application_form.percentage.value;
  console.log("per"+percentage);
  
  
  if(fname==""){ alert('Enter your first name');Application_form.fname.focus();return false;}
  if(lname==""){ alert('Enter your last name');Application_form.lname.focus(); return false;}
  if(cls==""){ alert('Enter your class');Application_form.class.focus(); return false;}
  if(dob==""){ alert('Enter your DOB'); Application_form.date.focus();return false;}
  if(gen==""){ alert('Mark your gender'); return false;}
  if(course==""){ alert('Enter your course');Application_form.course.focus(); return false;}
  
	var u=Application_form.email.value;
	if(u===""){
		alert("Please enter email");
		Application_form.email.focus();
		return false;
	}
    
	var n="email already registered";
	if(val.trim()==(n)){
		alert("please enter a valid Email");
		Application_form.email.focus();
		return false;
	}
    if(!validate_Email()){return false;}
  
   if(phone==""){ alert('Enter your phone number');Application_form.phone.focus(); return false;}else if(phone.length<10){alert('Enter 10 digit number');Application_form.phone.focus(); return false;}
  if(house==""){ alert('Enter your house number');Application_form.house.focus(); return false;}
  if(street==""){ alert('Enter your street name'); Application_form.street.focus();return false;}
  if(state==""){ alert('Enter your state name'); Application_form.state.focus();return false;}
  if(city==""){ alert('Enter your city name'); Application_form.city.focus();return false;}
  if(pin==""){ alert('Enter your city pincode ');Application_form.pin.focus(); return false;}
  if(nationality==""){ alert('Enter your nationality'); Application_form.nationality.focus();return false;}
  if(religion==""){ alert('Enter your reigion'); Application_form.religion.focus();return false;}
  if(degree==""){ alert('Enter your degree detail');Application_form.degree.focus(); return false;}
  if(university==""){ alert('Enter your university name');Application_form.university.focus(); return false;}
  if(percentage==""){ alert('Enter your percentage'); Application_form.percentage.focus();return false;}
}

var blink_speed = 500;
var t = setInterval(function () { 
	var ele = document.getElementById('blinker');
	ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden'); 
	}, blink_speed);

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
var request;  
function sendInfo()  
{  
var Email=Application_form.email.value;  
var url="checkmail.jsp?email="+Email;  
  
if(window.XMLHttpRequest){  
request=new XMLHttpRequest();  
}  
else if(window.ActiveXObject){  
request=new ActiveXObject("Microsoft.XMLHTTP");  
}  
  
try{  
request.onreadystatechange=getInfo;  
request.open("GET",url,true);  
request.send();  
}catch(e){alert("Unable to connect to server");}  
}  
var val;
function getInfo(){  
if(request.readyState==4){  
 val=request.responseText;  
document.getElementById('t').innerHTML=val;  
}  
}


