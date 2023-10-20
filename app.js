//input
var btn_Click = document.querySelector("#btn-click");
var txt_Name = document.querySelector("#txtName");
var txt_Data = document.querySelector("#txtData");
var txt_Month = document.querySelector("#txtMonth");
var txt_Year = document.querySelector("#txtYear");
var txt_Output = document.querySelector("#txtOutput");


//processing
function isLeapYear(inputYear) {
    if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

function clickEventListener() {
    var inputName = txt_Name.value;
    var inputDate = txt_Data.value;
    var inputMonth = txt_Month.value;
    var inputYear = txt_Year.value;


    if (inputDate >= 1 && inputDate <= 31) {
        if (inputMonth >= 1 && inputMonth <= 12) {
            if (isLeapYear(inputYear)) {
                txt_Output.innerText = `Hey! ${inputName}\n DOB: ${inputDate}/${inputMonth}/${inputYear}\nYour are born on Leap_Year!`
            } else {
                txt_Output.innerText = `Hey! ${inputName}\n DOB: ${inputDate}/${inputMonth}/${inputYear}\nYour aren't born on Leap_Year!`
            }
        } else {
            var outputTxtNM = `You entered wrong month: ${inputMonth}`;
            txt_Output.innerText = outputTxtNM;
        }
    } else {
        var outputTxtND = `You entered wrong Date: ${inputDate}`;
        txt_Output.innerText = outputTxtND;
    }
}


// Button clickEventListener
btn_Click.addEventListener("click", clickEventListener);