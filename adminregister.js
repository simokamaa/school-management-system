alert("kindly will you fill out the form? ");

function validateForm() {
    function validateFirstName() {
        var txt = ""
        if(document.getElementById("first name").validate.rangeUnderFlow) {
            txt = "the value is too small"
        }
        else if(document.getElementById("first name").validate.rangeOverFlow) {
            txt = "the value is too large"
        }
        else(document.getElementById("first name").validate.correctRange) {
            txt = ""
        }
        document.getElementById("form").innerHTML = txt;
    }

    function validateLastName() {
        var txt = ""
        if(document.getElementById("last name").validity.rangeUnderFlow) {
            txt = "value too small"
        }
        else if(document.getElementById("last name").validity.rangeOverflow) {
            txt ="value tooo large please try to input again"
        } 
        else(document.getElementById("last name").validity.correctRange){
            txt = "correct"
        }
        document.getElementById("form").innerHTML == txt;
    }
    function validateOtherName() {
        var txt =""
        if(document.getElementById("other name").validate.rangeOverFlow){
            txt ="value too large please input again"
        }
        else if (document.getElementById("other name").validate.rangeOverFlow) {
            txt ="value too small please input again"
        }
        else(document.getElementById("other name").validate.CorrectRange){
            txt = ""
        }
        function validatePasssword() {
            var txt = ""
            if(document.getElementById("password").validity.rangeUnderFlow){
                txt = "value to small input again"
            }
            else if(document.getElementById(password).validity.rangeOverflow) {
                txt = "value too large input again"
            }
            else(document.getElementById("password").valid){
                txt = ""
            }
        }

    }
    function submit{
        var inpobj=document.getElementById("submit");
        if(inpobj.checkValidity()===false){
            document.getElementById("form").innerHTML = inpobj.validationMessage;
        }
    }
}