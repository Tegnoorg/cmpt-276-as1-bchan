function weightCalc() {

    var mark = document.getElementById("mark").value;
    var weight = document.getElementById("weight").value;
    var rmark = document.getElementById("rmark").value;

    var mark1 = document.getElementById("mark1").value;
    var weight1 = document.getElementById("weight1").value;
    var rmark1 = document.getElementById("rmark1").value;

    var mark2 = document.getElementById("mark2").value;
    var weight2 = document.getElementById("weight2").value;
    var rmark2 = document.getElementById("rmark2").value;

    var mark3 = document.getElementById("mark3").value;
    var weight3 = document.getElementById("weight3").value;
    var rmark3 = document.getElementById("rmark3").value;



    if (rmark.length == 0) {
        rmark = 0;
    }
    if (weight.length == 0) {
        weight = 1;
    }
    if (mark.length == 0 || mark == 0) {
        mark = 0;
        document.getElementById("percent").innerHTML = "N/A";
    }
    else {
        var percent = (rmark / mark)*100;
        percent =parseFloat(percent).toFixed(2);
        document.getElementById("percent").innerHTML = percent+"/100";
    }

    if (rmark1.length == 0) {
        rmark1 = 0;
    }
    if (weight1.length==0) {
        weight1 = 1;
    }
    if (mark1.length == 0 || mark1 == 0) {
        mark1 = 0;
        document.getElementById("percent1").innerHTML = "N/A";
    }
    else {
        var percent1 = (rmark1 / mark1)*100;
        percent1 =parseFloat(percent1).toFixed(2);
        document.getElementById("percent1").innerHTML = percent1+"/100";
    }
    if (rmark2.length == 0) {
        rmark2 = 0;
    }
    if (weight2.length ==0) {
        weight2 = 1;
    }
    if (mark2.length == 0 || mark2 == 0) {
        mark2 = 0;
        document.getElementById("percent2").innerHTML = "N/A";
    }
    else {
        var percent2 = (rmark2 / mark2)*100;
        percent2 =parseFloat(percent2).toFixed(2);
        document.getElementById("percent2").innerHTML = percent2+"/100";
    }

    if (rmark3.length ==0) {
        rmark3 = 0;
    }
    if (weight3.length ==0) {
        weight3 = 1;
    }
    if (mark3.length == 0 || mark3 == 0) {
        mark3 = 0;
        document.getElementById("percent3").innerHTML = "N/A";
    }
    else {
        var percent3 = (rmark3 / mark3)*100;
        percent3 =parseFloat(percent3).toFixed(2);
        document.getElementById("percent3").innerHTML = percent3+"/100";
    }
    var score = (percent*weight)+(percent1*weight1)+(percent2*weight2)+(percent3*weight3);
    var dist = + weight + +weight1 + +weight2 + +weight3;
    score = score/dist;
    score =parseFloat(score).toFixed(2);
    document.getElementById("p2").innerHTML = "Your weighted score is: " + score + "/100"; 
    
}












function meanCalc() {
    var numOfAssignment = 4;

    var mark = document.getElementById("mark").value;
    var rmark = document.getElementById("rmark").value;
    var mark1 = document.getElementById("mark1").value;
    var rmark1 = document.getElementById("rmark1").value;
    var mark2 = document.getElementById("mark2").value;
    var rmark2 = document.getElementById("rmark2").value;
    var mark3 = document.getElementById("mark3").value;
    var rmark3 = document.getElementById("rmark3").value;


    if (rmark.length == 0) {
        rmark = 0;
    }
    if (mark.length == 0 || mark == 0) {
        mark = 0;
        numOfAssignment--;
        document.getElementById("percent").innerHTML = "N/A";
    }
    else {
        var percent = (rmark / mark)*100;
        percent =parseFloat(percent).toFixed(2);
        document.getElementById("percent").innerHTML = percent+"/100";
    }

    if (rmark1.length == 0) {
        rmark1 = 0;
    }
    if (mark1.length == 0|| mark1 == 0) {
        mark1 = 0;
        numOfAssignment--;
        document.getElementById("percent1").innerHTML = "N/A";
    }
    else {
        var percent1 = (rmark1 / mark1)*100;
        percent1 =parseFloat(percent1).toFixed(2);
        document.getElementById("percent1").innerHTML = percent1+"/100";
    }

    if (rmark2.length == 0) {
        rmark2 = 0;
    }
    if (mark2.length == 0 || mark2 == 0) {
        mark2 = 0;
        numOfAssignment--;
        document.getElementById("percent2").innerHTML = "N/A";
    }
    else {
        var percent2 = (rmark2 / mark2)*100;
        percent2 =parseFloat(percent2).toFixed(2);
        document.getElementById("percent2").innerHTML = percent2+"/100";
    }

    if (rmark3.length == 0) {
        rmark3 = 0;
    }
    if (mark3.length == 0 || mark3 == 0) {
        mark3 = 0;
        numOfAssignment--;
        document.getElementById("percent3").innerHTML = "N/A";
    }
    else {
        var percent3 = (rmark3 / mark3)*100;
        percent3 =parseFloat(percent3).toFixed(2);
        document.getElementById("percent3").innerHTML = percent3+"/100";
    }
    var score = (+percent+ +percent1 + +percent2 + +percent3)/numOfAssignment;
    console.log(numOfAssignment, score);
    score =parseFloat(score).toFixed(2);
    console.log(score);
    document.getElementById("p2").innerHTML = "Your mean score is: " + score + "/100"; 
}