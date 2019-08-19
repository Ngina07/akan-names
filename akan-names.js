var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleAkanArray = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];
var femaleAkanArray = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//this function will validate gender, day, year, month
function validateForm() {
    var usergender = document.getElementsByName("gender");
    var userdate = document.getElementById("date");
    var usermonth = document.getElementById("month");
    var useryear = document.getElementById("year");
    var formValid = false;
    var i = 0;

    if (userdate.value == "" || userdate.value == null) {
        // alert("Please Input date");
        document.getElementById("error").innerHTML = "Day is Empty"
        document.getElementById("error").style.color = "red"
        userdate.style.border = "2px solid red"
        return false;
    } else {

        if (!isNaN(userdate.value)) {
            if (userdate.value <= 0 || userdate.value > 31) {
                document.getElementById("error").innerHTML = "Invalid day"
                document.getElementById("error").style.color = "red"
                userdate.style.border = "2px solid red"
                return false;
            } else {

                userdate.style.border = "2px solid green"
                date = parseInt(userdate.value);
            }
        } else {
            document.getElementById("error").innerHTML = "Day must be a number"
            document.getElementById("error").style.color = "red"
            userdate.style.border = "2px solid red"
            return false;
        }
    }



    if (usermonth.value == "" || usermonth.value == null) {
        document.getElementById("error").innerHTML = "Month is Empty"
        document.getElementById("error").style.color = "red"
        usermonth.style.border = "2px solid red"
        return false;
    } else {
        if (!isNaN(usermonth.value)) {
            if (usermonth.value <= 0 || usermonth.value > 12) {
                document.getElementById("error").innerHTML = "Invalid month"
                document.getElementById("error").style.color = "red"
                usermonth.style.border = "2px solid red"
                return false;
            } else {
                usermonth.style.border = "2px solid green"
                month = parseInt(usermonth.value);
            }
        } else {
            document.getElementById("error").innerHTML = "Month must be a number"
            document.getElementById("error").style.color = "red"
            usermonth.style.border = "2px solid red"
            return false;
        }
    }


    if (useryear.value == "" || useryear.value == null) {
        document.getElementById("error").innerHTML = "Year is Empty"
        document.getElementById("error").style.color = "red"
        useryear.style.border = "2px solid red"
        return false;
    } else {
        useryear.style.border = "";
        if (!isNaN(useryear.value)) {
            if (useryear.value.length != 4) {
                document.getElementById("error").innerHTML = "Invalid year"
                document.getElementById("error").style.color = "red"
                useryear.style.border = "2px solid red"
                return false;
            } else {
                document.getElementById("error").innerHTML = ""
                useryear.style.border = "2px solid green"
                year = parseInt(useryear.value);
            }
        } else {
            document.getElementById("error").innerHTML = "Year must be a number"
            document.getElementById("error").style.color = "red"
            useryear.style.border = "2px solid red"
            return false;
        }
    }

    while (!formValid && i < usergender.length) {
        if (usergender[i].checked) {

            gender = usergender[i].value;
            document.getElementById("my_gender").style.color = ""
            formValid = true;
        }
        i++;
    }
    if (!formValid) {
        document.getElementById("my_gender").style.color = "red"

        return false;
    }
    var validatedDetails = {
        gender: gender,
        date: date,
        month: month,
        year: year,
        valid: formValid
    }
    return validatedDetails;

}
///....Function to calculate day of the week...///
function calculateDayOfWk() {
    var userDetails = validateForm();
    var date = userDetails.date;
    var month = userDetails.month;
    var year = userDetails.year;

    var my_a = Math.floor((14 - month) / 12);
    var my_y = year - my_a;
    var my_m = month + 12 * my_a - 2;
    userDayOfWeek = (date + my_y + Math.floor(my_y / 4) - Math.floor(my_y / 100) +
        Math.floor(year / 400) + Math.floor((31 * my_m) / 12)) % 7;

    // var dayOfWeek = mdays[userDayOfWeek];

    // alert(dayOfWeek);
    return userDayOfWeek;

}


///... Function to get and print Akan name...///

var userDetails = validateForm();
    var gender = userDetails.gender;
    var dayOfwkIndex = calculateDayOfWk();
    var dayOfWeek = days[dayOfwkIndex];

    if(gender === "male"){
        akanName = maleAkanArray[dayOfwkIndex];
    }else if(gender === "female"){
        akanName = femaleAkanArray[dayOfwkIndex];
    }else{
        alert("error is selection")
    }
    
    document.getElementById("results").innerHTML = "Your Akan Name is "+akanName + " because you were born on "+dayOfWeek;


}
