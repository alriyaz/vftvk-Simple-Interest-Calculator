
function calculate(){   
    var principal=document.getElementById("principal");
    var p = document.getElementById("principal").value;
    var n = document.getElementById("years").value;
    var r = document.getElementById("rate").value;

    var interest = p*n*r /100;

    var year = new Date().getFullYear()+parseInt(n);

     if(p==""){
        alert("Enter some principal amount");
        principal.focus();
        return false;
    }

    if(p==0){
        alert("Principal amount cannot be zero you dumb !");
        principal.focus();
        return false;
    }

    if(p<0){
        alert("Principal value cannot be in negative value you dumb !");
        principal.focus();
        return false;
    }

    else
    document.getElementById("result").innerHTML = "If you deposit <marK>"+p+"</mark>,\<br\> at an interest rate of <mark>"+r+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\> in the year <mark>"+year+"</mark>\<br\>";

    return true;

}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        