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
        valid:formValid
    }