//this function will validate gender, day, year, month
function validateForm() {
    var gender = document.getElementsByName("gender");
    var mdate = document.getElementById("date");
    var mmonth = document.getElementById("month");
    var myear = document.getElementById("year");
    var formValid = false;
    var i = 0;

	//tests
	//comment then when you see them working correcly
	alert(gender);
	alert(mdate);
	alert(mmonth);
	alert(myear);



    if (mdate.value == "" || mdate.value == null) {
	alert("Please Input date");
        return false;
    } else {
        mdate.style.border = "";
        if (!isNaN(mdate.value)) {
            if (mdate.value <= 0 || mdate.value > 31) {
		alert("Invalid date");
                return false;
            }
        } else {
		alert("Date must be a numbre");
            return false;
        }
    }
    if (mmonth.value == "" || mmonth.value == null) {
	alert("Please Input month");
        return false;
    } else {
        if (!isNaN(mmonth.value)) {
            if (mmonth.value <= 0 || mmonth.value > 12) {
		alert("Invalid month");	
                return false;
            }
        } else {
	alert("Month must be a number");
            return false;
        }
    }
    if (myear.value == "" || myear.value == null) {
	alert("Please Input year");
        return false;
    } else {
        myear.style.border = "";
        if (!isNaN(myear.value)) {
            if (myear.value.length != 4) {
                alert("Invalid year");
                return false;
            }
        } else {
	alert("Year must be a number");
            return false;
        }
    }

    while (!formValid && i < gender.length) {
        if (gender[i].checked)
            formValid = true;
        i++;
    }
    if (!formValid) {
       alert("Select gender");
        return false;
    }


    return formValid;

}


//functions to get user details
function getUserDetails(){


}



//this function will contain all function which you will write. They will be run simultaneoulsy

function aggregateMyFunctions(){
var isValid = validateForm() ;

if(!isValid){
	validateForm() ;
	return false;
}else{
	//all other functions
	//update this functions af you write more functions
	//example 
	getUserDetails();
	return false;
}

