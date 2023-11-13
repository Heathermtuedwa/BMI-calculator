function BMI(){
    var h=document.getElementById('h').value
    var W=document.getElementById('W').value
    var bmi=W/(h/100*h/100);
    var bmio=(bmi.toFixed(2));

    document.getElementById("result").innerHTML="Your bmi is " +bmio;
}