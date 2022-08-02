function checkAnswer1() {
  const res = document.form1.res.value;
  const l = document.form1.le.value;
  const c = document.form1.cu.value;
  const s=res/l
  const num = 1 / (l * c);
  const dr = (res / 2) * Math.sqrt(c / l);
  let sr = "";
  if (dr == 1) {
    sr = "critically damped"; 
  }
  
   if (dr <1) {
    sr = "under damped"; 
  } if (dr >1) {
    sr = "over damped"; 
  }
  console.log(res,l,c,s,num,dr,sr,parseInt(document.form1.peakTime.value).toFixed(2),(parseInt(document.form1.riseTime.value).toFixed(2)==num.toFixed(2)),
        (parseInt(document.form1.peakTime.value).toFixed(2)==1.00),
        (parseInt(document.form1.peakOvershoot.value).toFixed(2)==s.toFixed(2)),
        (parseInt(document.form1.twoError.value).toFixed(2)==num.toFixed(2)),
        (parseInt(document.form1.fiveError.value)), (document.form1.what.value==sr))
    if(
        (parseInt(document.form1.riseTime.value).toFixed(2)==num.toFixed(2))&&
        (parseInt(document.form1.peakTime.value).toFixed(2)==1.00)&&
        (parseInt(document.form1.peakOvershoot.value).toFixed(2)==s.toFixed(2))&&
        (parseInt(document.form1.twoError.value).toFixed(2)==num.toFixed(2))&& (document.form1.what.value==sr)
        ){
            document.getElementById("output").innerHTML="Correct Answer";
            document.getElementById("output").style.color = "Green";
        }else{
            document.getElementById("output").innerHTML="Wrong Answer";
            document.getElementById("output").style.color = "red";
        }
}

function checkAnswer2(){
    if(
        (document.form1.naturalFrequency.value==10)&&
        (document.form1.dampingratio.value==0.6)&&
        (document.form1.dampingFrequency.value==8)&&
        (document.form1.riseTime.value==0.2768)&&
        (document.form1.peakTime.value==0.3925)&&
        (document.form1.peakOvershoot.value==9.45)&&
        (document.form1.twoError.value==1.33)&&
        (document.form1.fiveError.value==1)
        ){
            document.getElementById("output").innerHTML="Correct Answer";
            document.getElementById("output").style.color = "Green";
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