function compute()
{   
    var principal=document.getElementById("principal");
    var p = document.getElementById("principal").value;
    var n = document.getElementById("years").value;
    var r = document.getElementById("rate").value;

    var interest = p*n*r /100;

    var year = new Date().getFullYear()+parseInt(n);

    if(p<=0){
        alert("Enter a positive value");
        principal.focus();
        return false;
    }
    else

    document.getElementById("result").innerHTML = "If you deposit <marK>"+p+"</mark>,\<br\> at an interest rate of <mark>"+r+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\> in the year <mark>"+year+"</mark>\<br\>";
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        