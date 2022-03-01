function compute()
{
    //assign variables

    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    //calc and convert

    let interest = principal * years * rate / 100;
    let year = new Date().getFullYear()+parseInt(years);

    //catch false input

    if(principal <= 0){
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
    }
    //show result 

    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>, <br> at an interest rate of <mark>${rate}</mark> %<br> You will receive an amount of <mark>${interest}</mark> in the year <mark>${year}</mark> <br>`

}

//function that updates the slider value and displays it to the screen
function updateRate(){
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}        



    //Slider update funtion

    function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}