$(function() {
	$("#equation1").click(function() {
		$('#main-simulation').hide();
		$('#simulation1').show();
		$('#simulation2').hide();
	});
	$("#equation2").click(function() {
		$('#main-simulation').hide();
		$('#simulation2').show();
		$('#simulation1').hide();
	});	
});

function checkAnswer1(){
    if(
        (document.form1[0].value==4)&&
        (document.form1[1].value==0.5)&&
        (document.form1[2].value=="under damped")&&
        (document.form1[3].value==3.464)&&
        (document.form1[4].value==0.6046)&&
        (document.form1[5].value==0.907)&&
        (document.form1[6].value==16.3)&&
        (document.form1[7].value==2)&&
        (document.form1[8].value==1.5)
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
        (document.form2[0].value==10)&&
        (document.form2[1].value==0.6)&&
        (document.form2[2].value=="under damped")&&
        (document.form2[3].value==8)&&
        (document.form2[4].value==0.2768)&&
        (document.form2[5].value==0.3925)&&
        (document.form2[6].value==9.45)&&
        (document.form2[7].value==1.33)&&
        (document.form2[8].value==1)
        ){
            document.getElementById("output2").innerHTML="Correct Answer";
            document.getElementById("output2").style.color = "Green";
        }else{
            document.getElementById("output2").innerHTML="Wrong Answer";
            document.getElementById("output2").style.color = "red";
        }
}
function showHint(){
    document.getElementById("hint").style.display = "block";
}



function showAnswer(){
    document.getElementById("answer").style.display = "block";
}
function showHint2(){
    document.getElementById("hint2").style.display = "block";
}



function showAnswer2(){
    document.getElementById("answer2").style.display = "block";
}