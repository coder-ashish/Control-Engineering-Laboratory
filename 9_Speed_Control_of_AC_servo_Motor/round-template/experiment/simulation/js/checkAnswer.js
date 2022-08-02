function checkAnswer1(){
    if(
        (document.form1.naturalFrequency.value==0)&&
        (document.form1.dampingratio.value==3)
        ){
            document.getElementById("output").innerHTML="Correct Answer";
      document.getElementById("output").style.color = "Green";
          document.getElementById("next-button").style.display = "block";

        }else{
            document.getElementById("output").innerHTML="Wrong Answer";
            document.getElementById("output").style.color = "red";
        }
}

function checkAnswer2() {
  console.log(document.form1.po.value)
    if(
        (document.form1.p1.value==0)&&
        (document.form1.po.value==-2)&&
        (document.form1.pi.value==-4)
        ){
            document.getElementById("output").innerHTML="Correct Answer";
      document.getElementById("output").style.color = "Green";
                document.getElementById("next-button").style.display = "block";

        }else{
            document.getElementById("output").innerHTML="Wrong Answer";
            document.getElementById("output").style.color = "red";
        }
}

function showHint(){
    document.getElementById("hint").style.display = "block";
}



function showAnswer(){
    document.getElementById("answer").style.display = "block";
}

function checkAnswer3(){
    if(
        (document.form1.naturalFrequency.value=="180")&&
        (document.form1.dampingratio.value=="-2")&&
        (document.form1.dampingFrequency.value=="-0.845")&&
        (document.form1.riseTime.value=="0")&&
        (document.form1.peakTime.value=="2.8")&&
        (document.form1.peakOvershoot.value==48)&&       (document.form1.locationofroot.value=="true")
        ){
            document.getElementById("output").innerHTML="Correct Answer";
            document.getElementById("output").style.color = "Green";
        }else{
            document.getElementById("output").innerHTML="Wrong Answer";
            document.getElementById("output").style.color = "red";
        }
}